import { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import gsap from 'gsap'
import { SITE_STATUS } from './config'
import Maintenance from './pages/Maintenance'
import Header from './components/layout/Header'
import Navigation from './components/layout/Navigation'
import { useMenuAnimation } from './hooks/useMenuAnimation'
import ModelScene from './components/home/ModelScene'
import Home from './pages/Home'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import About from './pages/About'
import Contact from './pages/Contact'
import Lab from './pages/Lab'
import Products from './pages/Products'

// Pages that own their header theme — they add `header-dark` themselves and
// we shouldn't fight them with scroll-based detection.
const ALWAYS_DARK_PAGES = ['/about', '/contact', '/terms']

function useHeaderDark(pathname) {
  useEffect(() => {
    // On always-dark pages, the page's own useEffect sets `header-dark` on
    // mount; skip the scroll listener entirely so we don't override it.
    if (ALWAYS_DARK_PAGES.includes(pathname)) return

    const check = () => {
      const els = document.querySelectorAll('[data-header-dark]')
      let dark = false
      for (const el of els) {
        const r = el.getBoundingClientRect()
        if (r.top <= 100 && r.bottom >= 0) { dark = true; break }
      }
      document.body.classList.toggle('header-dark', dark)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => {
      window.removeEventListener('scroll', check)
      document.body.classList.remove('header-dark')
    }
  }, [pathname])
}

function AppContent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { menuRef, innerRef, openMenu, closeMenu } = useMenuAnimation()
  const location = useLocation()
  const navigationType = useNavigationType()
  const backOverlayRef = useRef(null)
  const routesRef = useRef(null)
  const tlRef = useRef(null)
  const prevPathRef = useRef(null) // null on first render so we skip it

  useHeaderDark(location.pathname)

  const handleToggle = useCallback(() => {
    if (menuOpen) {
      setMenuOpen(false)
      closeMenu()
    } else {
      setMenuOpen(true)
      openMenu()
    }
  }, [menuOpen, openMenu, closeMenu])

  const handleClose = useCallback(() => {
    setMenuOpen(false)
    closeMenu()
  }, [closeMenu])

  // Back-transition: a single continuous top-to-bottom slide. The overlay starts
  // above the viewport, descends to cover (sweeping over the destination page from
  // top to bottom), then continues descending to exit at the bottom — revealing
  // the destination page from top to bottom in one unbroken motion.
  useLayoutEffect(() => {
    const prevPath = prevPathRef.current
    prevPathRef.current = location.pathname

    if (!prevPath) return
    if (navigationType !== 'POP') return
    if (!prevPath.startsWith('/work/') && prevPath !== '/contact') return
    if (!backOverlayRef.current || !routesRef.current) return

    const el = backOverlayRef.current
    const routes = routesRef.current
    if (tlRef.current) tlRef.current.kill()

    // Hide all page content synchronously BEFORE first paint so the destination
    // page never glimpses behind the descending overlay. The user sees only the
    // global bg as the black bar slides in from above.
    gsap.set(routes, { autoAlpha: 0 })
    gsap.set(el, { y: '-100%', autoAlpha: 1, pointerEvents: 'all' })

    tlRef.current = gsap.timeline()
    // Phase 1: descend from above to fully cover (0.7s)
    tlRef.current.to(el, { y: '0%', duration: 0.7, ease: 'power3.inOut' })
    // At full coverage: restore page content (now hidden under the black overlay)
    tlRef.current.set(routes, { autoAlpha: 1 })
    // Brief hold (0.25s), then keep descending to exit the bottom — revealing home
    tlRef.current.to(el, { y: '100%', duration: 0.85, ease: 'power3.inOut', delay: 0.25 })
    tlRef.current.set(el, { autoAlpha: 0, pointerEvents: 'none' })
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative font-1">
      {/* Global background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -2, background: '#F9F9F9' }} />

      {/* Back-transition overlay — slides in from top, exits to bottom */}
      <div
        ref={backOverlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          zIndex: 9990,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      />

      {/* Wrapping chrome + routes lets us hide all page content synchronously
          during a back-transition slide-in, so the destination page never
          glimpses behind the descending overlay. */}
      <div ref={routesRef}>
        {/* 3D rotating logo — home and about pages, sits behind text/images at z:-1 */}
        {(location.pathname === '/' || location.pathname === '/about') && <ModelScene />}

        <Header onMenuToggle={handleToggle} menuOpen={menuOpen} />
        <Navigation menuRef={menuRef} innerRef={innerRef} onClose={handleClose} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/work/:id" element={<WorkDetail />} />
          <Route path="/terms" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default function App() {
  if (SITE_STATUS === 'maintenance') return <Maintenance />
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppContent />
    </BrowserRouter>
  )
}
