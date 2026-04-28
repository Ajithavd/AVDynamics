import { useEffect } from 'react'
import { useNavigationType } from 'react-router-dom'
import gsap from 'gsap'

// Uses gsap.set() + to() instead of from()/fromTo() to avoid React StrictMode conflicts.
// from() captures the current element state as the "to" destination — if a previous
// killed tween left elements at yPercent:105, the new from() animates 105→105 (no-op).
// gsap.set() explicitly resets the initial state on every effect run.

export function usePageReveal(containerRef, deps = []) {
  const navigationType = useNavigationType()

  useEffect(() => {
    if (!containerRef?.current) return

    const el = containerRef.current
    const lines = Array.from(el.querySelectorAll('.js-t-line'))
    const fades = Array.from(el.querySelectorAll('.js-t-fade'))
    const words = Array.from(el.querySelectorAll('.js-t-word'))
    const media = el.querySelector('.js-t-media')

    // On back navigation: the page is freshly mounted so elements have no
    // GSAP transforms — they're naturally visible. The App overlay handles
    // the reveal; no separate animation needed here.
    if (navigationType === 'POP') return

    // Set initial states synchronously before animation
    if (lines.length) gsap.set(lines, { yPercent: 105 })
    if (words.length) gsap.set(words, { yPercent: 105 })
    if (fades.length) gsap.set(fades, { y: '5rem', autoAlpha: 0 })
    if (media) gsap.set(media, { clipPath: 'inset(100% 0% 0% 0%)' })

    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: 'expo.out', force3D: true },
    })

    const h = 0.5

    if (words.length) tl.to(words, { yPercent: 0, stagger: 0.1 }, h)
    if (fades.length) tl.to(fades, { y: 0, autoAlpha: 1, stagger: 0.1 }, h)
    if (lines.length) tl.to(lines, { yPercent: 0, stagger: 0.1 }, h)
    if (media) {
      tl.to(media, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.75 }, 0.75)
    }

    return () => tl.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function useInitialLoad(overlayRef, _contentRef, deps = []) {
  useEffect(() => {
    if (!overlayRef?.current) return

    const el = overlayRef.current
    const lines = Array.from(document.querySelectorAll('.js-t-line'))
    const words = Array.from(document.querySelectorAll('.js-t-word'))
    const media = document.querySelector('.js-t-media')

    // Reset all initial states (critical for StrictMode second-run correctness)
    gsap.set(el, { autoAlpha: 1 })
    if (lines.length) gsap.set(lines, { yPercent: 105 })
    if (words.length) gsap.set(words, { yPercent: 105 })
    if (media) gsap.set(media, { clipPath: 'inset(100% 0% 0% 0%)' })

    const tl = gsap.timeline({
      defaults: { duration: 1.5, ease: 'expo.out', force3D: true },
      onComplete: () => {
        if (el) el.style.display = 'none'
      },
    })

    // Overlay fades over 1s; text and media animate after overlay is gone
    tl.to(el, { autoAlpha: 0, duration: 1, ease: 'power1.out' }, 0)
    if (words.length) tl.to(words, { yPercent: 0, stagger: 0.1 }, 1)
    if (lines.length) tl.to(lines, { yPercent: 0, stagger: 0.1 }, 1)
    if (media) {
      tl.to(media, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.75 }, 1.25)
    }

    return () => tl.kill()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
