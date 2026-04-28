import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import modelUrl from '../../assets/av3d.glb'

// ── Adjust these three values to control how big the model appears ──────────
// Lower number = camera closer = model looks BIGGER on screen
// Higher number = camera farther = model looks SMALLER on screen
const MODEL_DISTANCE = {
  mobile:  4.5,   // screen width < 768px
  tablet:  3.8,   // screen width 768px – 1199px
  desktop: 3.2,   // screen width ≥ 1200px
}
// ────────────────────────────────────────────────────────────────────────────

function getDistance() {
  const w = window.innerWidth
  if (w < 768) return MODEL_DISTANCE.mobile
  if (w < 1200) return MODEL_DISTANCE.tablet
  return MODEL_DISTANCE.desktop
}

export default function ModelScene() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.0
    renderer.outputColorSpace = THREE.SRGBColorSpace

    const pmrem = new THREE.PMREMGenerator(renderer)
    const envTexture = pmrem.fromScene(new RoomEnvironment()).texture

    const scene = new THREE.Scene()
    scene.environment = envTexture

    const ambient = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambient)

    const keyLight = new THREE.DirectionalLight(0xfff5e0, 1.4)
    keyLight.position.set(3, 5, 4)
    scene.add(keyLight)

    const fillLight = new THREE.DirectionalLight(0xd0e8ff, 0.5)
    fillLight.position.set(-4, 2, -2)
    scene.add(fillLight)

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )

    let rafId
    let model
    let sphereRadius = 1

    new GLTFLoader().load(modelUrl, (gltf) => {
      model = gltf.scene

      const box = new THREE.Box3().setFromObject(model)
      const center = box.getCenter(new THREE.Vector3())
      model.position.sub(center)

      model.rotation.x = 0.3

      const sphere = box.getBoundingSphere(new THREE.Sphere())
      sphereRadius = sphere.radius

      camera.position.set(0, sphereRadius * 0.4, sphereRadius * getDistance())
      camera.lookAt(0, 0, 0)

      scene.add(model)
    })

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (model) model.rotation.y += 0.005
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      // Recalculate camera distance so the model stays the right size after resize
      camera.position.set(0, sphereRadius * 0.4, sphereRadius * getDistance())
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      envTexture.dispose()
      pmrem.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  )
}
