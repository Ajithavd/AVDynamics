import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useInitialLoad } from '../hooks/usePageReveal'
import HeroText from '../components/home/HeroText'
import HeroVideo from '../components/home/HeroVideo'
import HomeCtaSection from '../components/home/HomeCtaSection'
import WorksList from '../components/home/WorksList'
import Footer from '../components/layout/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const overlayRef = useRef(null)
  const heroRef = useRef(null)

  useInitialLoad(overlayRef, null, [])

  useEffect(() => {
    if (!heroRef.current) return

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      mm.add('(min-width: 900px)', () => {
        const words = Array.from(heroRef.current.querySelectorAll('.js-hero-word'))
        const arrow = heroRef.current.querySelector('.js-hero-arrow')
        const videoInner = heroRef.current.querySelector('.hero-video-inner')

        // Single timeline — all hero scroll animations in sync
        // defaults: duration 1 so timeline positions are fractional (0–1 = 0%–100%)
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: 'none' },
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '+=40%',   // half the original distance
            scrub: 1,
          },
        })

        // Words: subtle 5% drift in alternating directions
        words.forEach((word, i) => {
          tl.to(word, { xPercent: i % 2 === 0 ? 5 : -5 }, 0)
        })

        // Video inner wrapper expands 75% → 100% over full scroll
        if (videoInner) tl.to(videoInner, { width: '100%' }, 0)

        // Arrow fades out only in the last 25% (when video is ~94% wide)
        if (arrow) tl.to(arrow, { autoAlpha: 0, duration: 0.25 }, 0.75)
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div data-page="home" className="relative min-h-screen">
      {/* White intro overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-white z-[9999] pointer-events-none"
      />

      {/* Hero section — single ScrollTrigger drives all hero animations */}
      <div ref={heroRef}>
        <div className="pt-[17.5rem] s:pt-[22.5rem]">
          <HeroText />
        </div>
        <HeroVideo />
      </div>

      <HomeCtaSection />
      <WorksList />
      <Footer />
    </div>
  )
}
