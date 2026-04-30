import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export default function Maintenance() {
  const headingRef = useRef(null)
  const metaRef = useRef(null)

  useEffect(() => {
    const heading = headingRef.current
    const meta = metaRef.current
    if (!heading || !meta) return

    gsap.set(heading, { yPercent: 8, autoAlpha: 0 })
    gsap.set(meta, { autoAlpha: 0 })

    const tl = gsap.timeline()
    tl.to(heading, { yPercent: 0, autoAlpha: 1, duration: 1.4, ease: 'expo.out', delay: 0.2 })
    tl.to(meta, { autoAlpha: 1, duration: 1, ease: 'power2.out' }, '-=0.8')

    return () => tl.kill()
  }, [])

  return (
    <div
      style={{
        background: '#000',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
      }}
    >
      {/* Top bar */}
      <div style={{ paddingTop: '3.5rem', paddingInline: '4rem' }}>
        <span className="tiny-uppercase" style={{ opacity: 0.5 }}>
          AV Dynamics
        </span>
      </div>

      {/* Center block */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingInline: '4rem',
        }}
      >
        <h1
          ref={headingRef}
          className="font-heading font-medium uppercase"
          style={{
            fontSize: 'clamp(8rem, 15vw, 22rem)',
            letterSpacing: '-0.075em',
            lineHeight: 0.85,
            margin: 0,
          }}
        >
          Back
          <br />
          Soon
        </h1>
        <div ref={metaRef} style={{ marginTop: '3rem' }}>
          <p className="tiny-uppercase" style={{ opacity: 0.4, margin: 0 }}>
            The studio is currently offline for scheduled maintenance.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '3.5rem',
          paddingInline: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
        }}
      >
        <span className="tiny-uppercase" style={{ opacity: 0.35 }}>
          © 2026 AV Dynamics
        </span>
        <a
          href="mailto:info@avdynam.com"
          className="tiny-uppercase"
          style={{ color: '#fff', textDecoration: 'none', opacity: 0.7 }}
        >
          info@avdynam.com
        </a>
      </div>
    </div>
  )
}
