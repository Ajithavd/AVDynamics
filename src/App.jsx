import { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from 'react-router-dom'
import gsap from 'gsap'
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

function useHeaderDark(pathname) {
  useEffect(() => {
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

  // Back-transition: useLayoutEffect fires before the browser paints, so the overlay
  // covers the screen in the same frame the route changes — no flash, no collision.
  useLayoutEffect(() => {
    const prevPath = prevPathRef.current
    prevPathRef.current = location.pathname

    if (!prevPath) return
    if (navigationType !== 'POP') return
    if (!prevPath.startsWith('/work/') && prevPath !== '/contact') return
    if (!backOverlayRef.current) return

    const el = backOverlayRef.current
    if (tlRef.current) tlRef.current.kill()

    // Cover fully BEFORE the browser paints (useLayoutEffect is synchronous with
    // the commit). autoAlpha:1 here means the overlay is already opaque in the
    // very first frame the user sees — no flash of the destination page.
    gsap.set(el, { y: '0%', autoAlpha: 1, pointerEvents: 'all' })

    tlRef.current = gsap.timeline()
    // Hold on black so the user registers the screen is "covered" (0.4s),
    // then slide the overlay down to reveal the destination page (0.95s).
    tlRef.current.to(el, { y: '100%', duration: 0.95, ease: 'power3.inOut', delay: 0.4 })
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

      {/* 3D rotating logo — home page only */}
      {location.pathname === '/' && <ModelScene />}

      <Header onMenuToggle={handleToggle} menuOpen={menuOpen} />
      <Navigation menuRef={menuRef} innerRef={innerRef} onClose={handleClose} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        <Route path="/terms" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}
