import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(containerRef, deps = []) {
  useEffect(() => {
    if (!containerRef.current) return

    const lines = containerRef.current.querySelectorAll('.t-line')
    if (!lines.length) return

    const ctx = gsap.context(() => {
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { y: '110%' },
          {
            y: '0%',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: line.parentElement,
              start: 'top 88%',
              once: true,
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}

export function useStaggerReveal(containerRef, selector = '.t-line', deps = []) {
  useEffect(() => {
    if (!containerRef.current) return

    const lines = containerRef.current.querySelectorAll(selector)
    if (!lines.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { y: '110%' },
        {
          y: '0%',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 88%',
            once: true,
          },
        }
      )
    }, containerRef)

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
