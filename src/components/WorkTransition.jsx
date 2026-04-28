import { useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { useTransition } from '../context/TransitionContext'

export default function WorkTransition() {
  const { phase, payload, heroRect, advancePhase, callNavigate, reset } = useTransition()
  const navigate = useNavigate()
  const overlayRef = useRef(null)
  const cloneRef = useRef(null)
  const tlRef = useRef(null)
  const delayedRef = useRef(null)

  // Store navigate in context on mount so startTransition can trigger it
  // We inject it by passing it to callNavigate which reads navigateFnRef
  // Instead, we directly listen for phase changes here

  useEffect(() => {
    if (phase !== 'covering' || !payload) return

    const { srcRect, imageSrc } = payload
    const overlay = overlayRef.current
    const clone = cloneRef.current
    if (!overlay || !clone) return

    // Kill any running animation
    tlRef.current?.kill()
    gsap.killTweensOf([overlay, clone])

    const centerX = window.innerWidth / 2 - srcRect.width / 2
    const centerY = window.innerHeight / 2 - srcRect.height / 2

    // Set clone src and initial position at the clicked figure's rect
    clone.src = imageSrc
    gsap.set(clone, {
      x: srcRect.left,
      y: srcRect.top,
      width: srcRect.width,
      height: srcRect.height,
      opacity: 1,
      display: 'block',
    })

    // Set overlay below viewport, make visible
    gsap.set(overlay, { y: '100%', autoAlpha: 1, pointerEvents: 'all' })

    const tl = gsap.timeline({
      onComplete: () => {
        // Black screen fully covers — navigate now
        window.scrollTo(0, 0)
        advancePhase('covered')
        navigate(`/work/${payload.work.id}`)
      },
    })

    // Overlay rises from bottom
    tl.to(overlay, { y: '0%', duration: 0.8, ease: 'power3.inOut' }, 0)
    // Clone lifts from card to center (slight delay so it "lifts" off first)
    tl.to(clone, { x: centerX, y: centerY, duration: 0.75, ease: 'power3.inOut' }, 0.05)

    tlRef.current = tl
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== 'covered') return

    const overlay = overlayRef.current
    if (!overlay) return

    tlRef.current?.kill()

    // Slide overlay upward off screen
    const tl = gsap.timeline({
      onComplete: () => advancePhase('revealing'),
    })
    tl.to(overlay, { y: '-100%', duration: 0.85, ease: 'power3.inOut' })

    tlRef.current = tl
  }, [phase]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== 'revealing') return

    // Hold for 1 second, then fly clone to hero position
    delayedRef.current = gsap.delayedCall(1.0, () => {
      advancePhase('landing')

      const clone = cloneRef.current
      if (!clone || !heroRect) {
        // No hero registered — skip landing, jump to done
        gsap.set(clone, { opacity: 0, display: 'none' })
        advancePhase('done')
        setTimeout(reset, 200)
        return
      }

      const tl2 = gsap.timeline({
        onComplete: () => {
          advancePhase('done')
          setTimeout(reset, 200)
        },
      })

      // Clone morphs to hero image position + size
      tl2.to(clone, {
        x: heroRect.left,
        y: heroRect.top,
        width: heroRect.width,
        height: heroRect.height,
        duration: 0.9,
        ease: 'power3.inOut',
      })
      // Fade out clone as it arrives (overlap slightly)
      tl2.to(clone, { opacity: 0, duration: 0.4, ease: 'power2.in' }, '-=0.15')

      tlRef.current = tl2
    })
  }, [phase, heroRect]) // eslint-disable-line react-hooks/exhaustive-deps

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      tlRef.current?.kill()
      delayedRef.current?.kill()
    }
  }, [])

  return (
    <>
      {/* Black overlay — starts below viewport */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9990,
          background: '#000',
          transform: 'translateY(100%)',
          visibility: 'hidden',
          pointerEvents: 'none',
        }}
      />

      {/* Floating image clone — fixed, positioned via GSAP */}
      <img
        ref={cloneRef}
        alt=""
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9991,
          objectFit: 'cover',
          pointerEvents: 'none',
          display: 'none',
          opacity: 0,
        }}
      />
    </>
  )
}
