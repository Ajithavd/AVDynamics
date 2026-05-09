import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'

import immersive from '../assets/IMMERSIVE.png'
import audio from '../assets/AUDIO.png'
import cafe from '../assets/CAFE.png'
import solar from '../assets/SOLAR.png'
import defence from '../assets/DEFENSE.png'
import events from '../assets/EVENTS.png'
import smart from '../assets/SMART.png'
import visual from '../assets/VISUAL.png'

const labItems = [
  { src: immersive, title: 'Immersive Tech' },
  { src: audio, title: 'Audio & Acoustic' },
  { src: visual, title: 'Visual Systems' },
  { src: smart, title: 'Smart City Infra' },
  { src: defence, title: 'Defense & High-Tech' },
  { src: events, title: 'Events & Global' },
  { src: solar, title: 'Solar Solutions' },
  { src: cafe, title: 'Hospitality Experience' },
]

// Layout constants — all in vh.
//   Focused slide sits at y:0 with scale 1 (visual height = SLIDE_VH).
//   Adjacent slides are scaled down + offset above/below the focused one.
//   Far slides (|d| >= 2) are translated off-screen and faded.
const SLIDE_VH = 60          // base slide height (= image height)
const ADJ_SCALE = 0.25       // adjacent slides at 25% size → ~15vh visual
const ADJ_OFFSET_VH = 40     // vertical distance from centre
const FAR_OFFSET_VH = 80     // off-screen offset for hidden slides

// Per-slide target state given focused index.
function stateFor(i, focusedIndex) {
  const d = i - focusedIndex
  const absD = Math.abs(d)
  if (absD === 0) {
    return { y: '0vh', scale: 1, autoAlpha: 1 }
  }
  if (absD === 1) {
    return { y: `${d * ADJ_OFFSET_VH}vh`, scale: ADJ_SCALE, autoAlpha: 1 }
  }
  return {
    y: `${Math.sign(d) * FAR_OFFSET_VH}vh`,
    scale: ADJ_SCALE,
    autoAlpha: 0,
  }
}

export default function Lab() {
  const slidesRef = useRef([])
  const indexRef = useRef(0)
  const lockRef = useRef(false)
  const [index, setIndex] = useState(0)

  // Force the dark header treatment so menu/plus stay legible.
  useEffect(() => {
    document.body.classList.add('header-dark')
    return () => document.body.classList.remove('header-dark')
  }, [])

  // Initial state — placed BEFORE first paint so slides don't flash stacked.
  useLayoutEffect(() => {
    slidesRef.current.forEach((el, i) => {
      if (!el) return
      gsap.set(el, {
        xPercent: -50,
        yPercent: -50,
        transformOrigin: 'center center',
        ...stateFor(i, 0),
      })
    })
  }, [])

  useEffect(() => {
    const goTo = (n) => {
      const clamped = Math.max(0, Math.min(labItems.length - 1, n))
      if (clamped === indexRef.current) return
      indexRef.current = clamped
      setIndex(clamped)
      lockRef.current = true

      const tl = gsap.timeline({
        defaults: { duration: 1, ease: 'power3.inOut' },
        onComplete: () => {
          lockRef.current = false
        },
      })

      // Animate every slide's target state simultaneously — focused grows,
      // outgoing shrinks, the new adjacent slides slide in from off-screen.
      slidesRef.current.forEach((el, i) => {
        if (!el) return
        tl.to(
          el,
          {
            xPercent: -50,
            yPercent: -50,
            ...stateFor(i, clamped),
          },
          0,
        )
      })
    }

    // ── Wheel ─────────────────────────────────────────────────────
    let lastWheelAt = 0
    const handleWheel = (e) => {
      e.preventDefault()
      if (lockRef.current) return
      const now = performance.now()
      if (now - lastWheelAt < 200) return
      if (Math.abs(e.deltaY) < 4) return
      lastWheelAt = now
      if (e.deltaY > 0) goTo(indexRef.current + 1)
      else goTo(indexRef.current - 1)
    }

    // ── Keyboard ──────────────────────────────────────────────────
    const handleKey = (e) => {
      if (lockRef.current) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        goTo(indexRef.current + 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goTo(indexRef.current - 1)
      }
    }

    // ── Touch ─────────────────────────────────────────────────────
    let touchStartY = null
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }
    const handleTouchMove = (e) => {
      e.preventDefault()
    }
    const handleTouchEnd = (e) => {
      if (touchStartY === null || lockRef.current) return
      const delta = touchStartY - e.changedTouches[0].clientY
      touchStartY = null
      if (Math.abs(delta) < 40) return
      if (delta > 0) goTo(indexRef.current + 1)
      else goTo(indexRef.current - 1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <div
      data-page="lab"
      style={{
        backgroundColor: '#2E3840',
        color: '#fff',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div className="lab-carousel">
        {labItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              slidesRef.current[i] = el
            }}
            className="lab-slide"
          >
            <img
              src={item.src}
              alt={item.title}
              className="lab-slide-img"
              loading={i < 3 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Bottom-left label — current slide title */}
      <div
        className="tiny-uppercase"
        style={{
          position: 'fixed',
          bottom: '3rem',
          left: '4rem',
          color: '#fff',
          opacity: 0.6,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        {labItems[index].title}
      </div>

      {/* Bottom-right counter */}
      <div
        className="tiny-uppercase"
        style={{
          position: 'fixed',
          bottom: '3rem',
          right: '4rem',
          color: '#fff',
          opacity: 0.6,
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        {String(index + 1).padStart(2, '0')} /{' '}
        {String(labItems.length).padStart(2, '0')}
      </div>
    </div>
  )
}
