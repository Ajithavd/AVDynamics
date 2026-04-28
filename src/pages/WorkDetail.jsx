import { useRef, useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import gsap from 'gsap'
import { works } from '../data/works'
import { workDetails, generateFallback } from '../data/workDetails'
import { usePageReveal } from '../hooks/usePageReveal'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'

export default function WorkDetail() {
  const { id } = useParams()
  const location = useLocation()
  const work = works.find((w) => w.id === id)
  const detail = workDetails[id] ?? (work ? generateFallback(work) : null)

  const pageRef = useRef(null)
  const heroImgRef = useRef(null)
  const overlayRef = useRef(null)
  const cloneRef = useRef(null)

  // Scroll to top on every navigation to this page
  useEffect(() => { window.scrollTo(0, 0) }, [id])

// Page content reveal runs immediately on mount (hidden under black screen)
  usePageReveal(pageRef, [id])

  // Entrance transition — runs only when arriving via a work card click
  useEffect(() => {
    const state = location.state
    if (!state?.srcRect) return

    const { srcRect, imageSrc } = state
    const overlay = overlayRef.current
    const clone = cloneRef.current
    if (!overlay || !clone) return

    const centerX = window.innerWidth / 2 - srcRect.width / 2
    const centerY = window.innerHeight / 2 - srcRect.height / 2

    // Set initial states
    gsap.set(overlay, { y: '100%', autoAlpha: 1, pointerEvents: 'all' })
    gsap.set(clone, {
      x: srcRect.left,
      y: srcRect.top,
      width: srcRect.width,
      height: srcRect.height,
      opacity: 1,
    })
    if (heroImgRef.current) gsap.set(heroImgRef.current, { opacity: 0 })

    const tl = gsap.timeline()

    // 1. Black screen rises + clone floats up
    tl.to(overlay, { y: '0%', duration: 0.8, ease: 'power3.inOut' }, 0)
    tl.to(clone, { x: centerX, y: centerY, duration: 0.75, ease: 'power3.inOut' }, 0.05)

    // 2. Black screen exits upward
    tl.to(overlay, { y: '-100%', duration: 0.85, ease: 'power3.inOut' }, 0.9)

    // 3. After screen clears, clone flies to hero position and fades out
    tl.add(() => {
      if (!heroImgRef.current) return
      const heroRect = heroImgRef.current.getBoundingClientRect()
      gsap.to(clone, {
        x: heroRect.left,
        y: heroRect.top,
        width: heroRect.width,
        height: heroRect.height,
        duration: 0.9,
        ease: 'power3.inOut',
      })
      gsap.to(clone, { opacity: 0, duration: 0.4, ease: 'power2.in', delay: 0.5 })
      gsap.to(heroImgRef.current, { opacity: 1, duration: 0.3, delay: 0.55 })
    }, '+=0.2')

    tl.add(() => {
      gsap.set(overlay, { autoAlpha: 0, pointerEvents: 'none' })
    }, '+=1.1')

    return () => tl.kill()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  if (!work || !detail) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F9F9F9' }}>
        <p className="small-uppercase">Work not found.</p>
      </div>
    )
  }

  const hasTransition = !!location.state?.srcRect
  const heroOpacity = hasTransition ? 0 : 1

  return (
    <>
      {/* Transition overlay — black screen */}
      <div
        ref={overlayRef}
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000',
          zIndex: 9990,
          pointerEvents: 'none',
          visibility: 'hidden',
        }}
      />

      {/* Floating image clone */}
      <img
        ref={cloneRef}
        src={location.state?.imageSrc ?? work.image}
        alt=""
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          objectFit: 'cover',
          zIndex: 9991,
          opacity: 0,
          pointerEvents: 'none',
        }}
      />

      <div ref={pageRef} data-page="work-detail" className="min-h-screen" style={{ background: '#F9F9F9' }}>

        {/* ── HERO: full-width title + 2-col split (meta left, image right) ── */}
        <section className="site-grid pt-[17.5rem] s:pt-[22.5rem]">
          {/* Full-width H1 title */}
          <div className="col-span-12 s:col-start-2 s:col-span-33 overflow-hidden">
            <h1
              className="js-t-line font-heading font-medium uppercase"
              style={{
                fontSize: 'clamp(4rem, 8vw, 40rem)',
                letterSpacing: '-0.075em',
                lineHeight: 0.85,
              }}
            >
              {work.title}
            </h1>
          </div>

          {/* Left: disciplines + recognition */}
          <div className="col-span-5 s:col-start-2 s:col-span-6 mt-[5rem] s:mt-[8rem] js-t-fade">
            <span className="tiny-uppercase block mb-[2rem]" style={{ opacity: 0.45 }}>
              Disciplines
            </span>
            <ul className="flex flex-col gap-[0.6rem]">
              {work.tags.map((tag) => (
                <li key={tag} className="small-uppercase">{tag}</li>
              ))}
            </ul>

            {detail.recognition?.length > 0 && (
              <>
                <span className="tiny-uppercase block mt-[4rem] mb-[2rem]" style={{ opacity: 0.45 }}>
                  Recognition
                </span>
                <ul className="flex flex-col gap-[0.6rem]">
                  {detail.recognition.map((r) => (
                    <li key={r} className="small-uppercase">{r}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Right: hero image — clone lands here */}
          <div className="col-span-7 s:col-start-14 s:col-span-20 mt-[5rem] s:mt-[8rem] relative">
            <div className={`aspect-box ${work.aspect}`} />
            <img
              ref={heroImgRef}
              src={work.image}
              alt={work.title}
              className="img-fill"
              style={{ opacity: heroOpacity }}
              loading="eager"
            />
          </div>
        </section>

        {/* ── INTRO ── */}
        <section className="site-grid mt-[10rem] s:mt-[18rem]">
          <div className="col-span-12 s:col-start-4 s:col-span-22">
            <div className="overflow-hidden">
              <h2
                className="js-t-line font-body leading-[1.2]"
                style={{
                  fontSize: 'clamp(2rem, 2.8vw, 5.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {detail.subtitle}
              </h2>
            </div>
            <p
              className="js-t-fade font-body mt-[4rem] leading-[1.7]"
              style={{ fontSize: 'clamp(1.5rem, 1.2vw, 2rem)', maxWidth: '72rem' }}
            >
              {detail.intro}
            </p>
            {detail.liveUrl && (
              <div className="mt-[5rem] js-t-fade">
                <Button to={detail.liveUrl} variant="light">Visit live site</Button>
              </div>
            )}
          </div>
        </section>

        {/* ── BODY SECTIONS ── */}
        {detail.sections?.map((section, i) => (
          <section key={i} className="site-grid mt-[10rem] s:mt-[18rem]">
            <div className="col-span-12 s:col-start-4 s:col-span-26">
              <div className="overflow-hidden">
                <h3
                  className="js-t-line font-heading font-medium uppercase"
                  style={{
                    fontSize: 'clamp(2.8rem, 3.5vw, 8rem)',
                    letterSpacing: '-0.05em',
                    lineHeight: 0.9,
                  }}
                >
                  {section.heading}
                </h3>
              </div>
              <p
                className="js-t-fade font-body mt-[3rem] leading-[1.7]"
                style={{ fontSize: 'clamp(1.5rem, 1.2vw, 2rem)', maxWidth: '72rem' }}
              >
                {section.body}
              </p>
              {section.image && (
                <div
                  className="relative mt-[5rem] js-t-media overflow-hidden"
                  style={{ borderRadius: '1.5rem' }}
                >
                  <div className="aspect-box aspect-16-9" />
                  <img
                    src={section.image}
                    alt={section.heading}
                    className="img-fill"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ── TESTIMONIAL ── */}
        {detail.testimonial && (
          <section className="site-grid mt-[10rem] s:mt-[18rem]">
            <div className="col-span-12 s:col-start-4 s:col-span-24">
              <hr style={{ borderColor: 'rgba(0,0,0,0.15)', borderTopWidth: '1px' }} />
              <blockquote
                className="js-t-fade font-body mt-[6rem] mb-[6rem] leading-[1.3]"
                style={{
                  fontSize: 'clamp(1.8rem, 2.2vw, 4rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                &ldquo;{detail.testimonial.quote}&rdquo;
                <footer
                  className="small-uppercase mt-[3rem] block"
                  style={{ opacity: 0.5 }}
                >
                  — {detail.testimonial.attribution}
                </footer>
              </blockquote>
              <hr style={{ borderColor: 'rgba(0,0,0,0.15)', borderTopWidth: '1px' }} />
            </div>
          </section>
        )}

        {/* ── GALLERY ── */}
        {detail.gallery?.length > 0 && (
          <section className="site-grid mt-[10rem] s:mt-[18rem]">
            <div className="col-span-12 s:col-start-4 s:col-span-30 grid grid-cols-2 gap-[1.2rem] s:gap-[2rem]">
              {detail.gallery.map((src, i) => (
                <div
                  key={i}
                  className="relative js-t-media overflow-hidden"
                  style={{ borderRadius: '3rem', border: '0.4rem solid #000' }}
                >
                  <div className="aspect-box aspect-4-3" />
                  <img
                    src={src}
                    alt={`${work.title} — gallery ${i + 1}`}
                    className="img-fill"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── NEXT PROJECT ── */}
        {detail.nextWork && (
          <section className="site-grid mt-[15rem] s:mt-[25rem] pb-[8rem]">
            <div className="col-span-12 s:col-start-4 s:col-span-28">
              <hr style={{ borderColor: 'rgba(0,0,0,0.15)', borderTopWidth: '1px' }} />
              <div className="pt-[4rem]">
                <span className="small-uppercase block mb-[2rem]" style={{ opacity: 0.45 }}>
                  Next Project
                </span>
                <Link
                  to={`/work/${detail.nextWork.id}`}
                  className="block"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="overflow-hidden">
                    <h2
                      className="js-t-line font-heading font-medium uppercase"
                      style={{
                        fontSize: 'clamp(4rem, 8vw, 40rem)',
                        letterSpacing: '-0.075em',
                        lineHeight: 0.85,
                      }}
                    >
                      {detail.nextWork.title}
                    </h2>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
}
