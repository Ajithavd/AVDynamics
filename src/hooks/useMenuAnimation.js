import { useRef, useCallback } from 'react'
import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'

gsap.registerPlugin(CustomEase)

// Exact easing from the source bundle
CustomEase.create(
  'snappy',
  'M0,0 C0.094,0.026 0.124,0.127 0.157,0.29 0.197,0.486 0.254,0.8 0.348,0.884 0.42,0.949 0.374,1 1,1'
)

export function useMenuAnimation() {
  // menuRef  → the <aside> element (mask[0])
  // innerRef → the inner .absolute.inset-0 div (mask[1])
  const menuRef = useRef(null)
  const innerRef = useRef(null)
  const tlRef = useRef(null)
  const isOpenRef = useRef(false)

  const buildTimeline = useCallback(() => {
    if (!menuRef.current || !innerRef.current) return

    const tl = gsap.timeline({ paused: true, force3D: true })

    tl
      // Reveal the aside first (it starts invisible via CSS)
      .set(menuRef.current, { autoAlpha: 1 })
      // mask[0]=aside slides from yPercent:100 (below screen)
      // mask[1]=inner slides from yPercent:-100 (above the aside)
      .fromTo(
        [menuRef.current, innerRef.current],
        { yPercent: gsap.utils.wrap([100, -100]) },
        { yPercent: 0, duration: 0.9, ease: 'power3.inOut' },
        0
      )
      // Menu link text slides up — .js-menu-link li items
      .fromTo(
        '.js-menu-link',
        { yPercent: 100 },
        { yPercent: 0, duration: 1, stagger: 0.075, ease: 'expo.out' },
        0.4
      )
      // Footer contact/social fade in
      .fromTo(
        '.js-menu-fade',
        { y: '5rem', autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1, stagger: 0.1, ease: 'expo.out' },
        0.65
      )

    tlRef.current = tl
  }, [])

  const openMenu = useCallback(() => {
    if (isOpenRef.current) return
    if (!tlRef.current) buildTimeline()
    isOpenRef.current = true
    tlRef.current.clear()
    buildTimeline()
    document.body.style.overflow = 'hidden'
    tlRef.current.play(0)
  }, [buildTimeline])

  const closeMenu = useCallback(() => {
    if (!isOpenRef.current) return
    isOpenRef.current = false
    document.body.style.overflow = ''

    const closeTl = gsap.timeline()
    closeTl
      .to(
        [menuRef.current, innerRef.current],
        {
          yPercent: gsap.utils.wrap([100, -100]),
          duration: 0.85,
          ease: 'power3.inOut',
        },
        0
      )
      .set(menuRef.current, { autoAlpha: 0 })
  }, [])

  const toggleMenu = useCallback(() => {
    if (isOpenRef.current) closeMenu()
    else openMenu()
  }, [openMenu, closeMenu])

  return { menuRef, innerRef, openMenu, closeMenu, toggleMenu, isOpenRef }
}
