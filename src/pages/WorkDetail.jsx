import { useRef, useEffect } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { works } from '../data/works'
import { workDetails, generateFallback } from '../data/workDetails'
import { usePageReveal } from '../hooks/usePageReveal'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'

export default function WorkDetail() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const work = works.find((w) => w.id === id)
  const detail = workDetails[id] ?? (work ? generateFallback(work) : null)

  // Resolve the next work: honour an explicit detail.nextWork if it points to
  // a known work, otherwise fall back to the next entry in the works array
  // (wrapping the last work back to the first) so every detail page has a Next.
  let nextWork = null
  if (work) {
    if (detail?.nextWork) {
      nextWork = works.find((w) => w.id === detail.nextWork.id) ?? null
    }
    if (!nextWork) {
      const idx = works.findIndex((w) => w.id === id)
      if (idx >= 0) nextWork = works[(idx + 1) % works.length]
    }
  }

  const pageRef = useRef(null)
  const heroImgRef = useRef(null)
  const overlayRef = useRef(null)
  const cloneRef = useRef(null)
  const nextFigureRef = useRef(null)

  const handleNextClick = () => {
    if (!nextWork) return
    const figure = nextFigureRef.current
    const srcRect = figure ? figure.getBoundingClientRect() : null
    navigate(`/work/${nextWork.id}`, {
      state: srcRect
        ? {
            srcRect: {
              top: srcRect.top,
              left: srcRect.left,
              width: srcRect.width,
              height: srcRect.height,
            },
            imageSrc: nextWork.image,
          }
        : undefined,
    })
  }

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
          <div
            className="col-span-12 s:col-start-2 s:col-span-33"
            style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.15em' }}
          >
            <h1
              className="js-t-line font-heading font-medium uppercase"
              style={{
                fontSize: 'clamp(3.5rem, 6.5vw, 14rem)',
                letterSpacing: '-0.05em',
                lineHeight: 0.9,
                wordBreak: 'break-word',
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

        {/* ── PROJECTS ── image left, text right; one row per sub-project ── */}
        {detail.projects?.length > 0 &&
          detail.projects.map((project, i) => (
            <section
              key={i}
              className="site-grid mt-[10rem] s:mt-[18rem]"
            >
              {/* Image (left) */}
              <div className="col-span-12 s:col-start-4 s:col-span-15 s:self-center">
                <div
                  className="relative js-t-media overflow-hidden"
                  style={{
                    borderRadius: '1.5rem',
                    aspectRatio: '4 / 3',
                    width: '100%',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>
              </div>

              {/* Text (right) — vertically centred against the image on desktop */}
              <div className="col-span-12 s:col-start-20 s:col-span-14 mt-[3rem] s:mt-0 s:self-center">
                <div
                  style={{
                    overflowY: 'clip',
                    overflowX: 'visible',
                    paddingBottom: '0.1em',
                  }}
                >
                  <h3
                    className="js-t-line font-heading font-medium uppercase"
                    style={{
                      fontSize: 'clamp(2.4rem, 3vw, 5.5rem)',
                      letterSpacing: '-0.04em',
                      lineHeight: 0.95,
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <p
                  className="js-t-fade font-body mt-[2.5rem] leading-[1.7]"
                  style={{
                    fontSize: 'clamp(1.4rem, 1.1vw, 1.8rem)',
                    maxWidth: '52rem',
                  }}
                >
                  {project.description}
                </p>
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

        {/* ── NEXT PROJECT ── click triggers the same image-clone transition
            as the home-page work cards: figure rect is captured, navigate
            with state, and the entrance animation re-fires on id change. */}
        {nextWork && (
          <section className="site-grid mt-[15rem] s:mt-[25rem] pb-[8rem]">
            {/* Title side */}
            <div
              className="col-span-12 s:col-start-4 s:col-span-19 cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={handleNextClick}
              onKeyDown={(e) => e.key === 'Enter' && handleNextClick()}
            >
              <hr style={{ borderColor: 'rgba(0,0,0,0.15)', borderTopWidth: '1px' }} />
              <div className="pt-[4rem]">
                <span className="small-uppercase block mb-[2rem]" style={{ opacity: 0.45 }}>
                  Next Project
                </span>
                <div style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.15em' }}>
                  <h2
                    className="js-t-line font-heading font-medium uppercase"
                    style={{
                      fontSize: 'clamp(3.5rem, 6.5vw, 14rem)',
                      letterSpacing: '-0.05em',
                      lineHeight: 0.9,
                      wordBreak: 'break-word',
                    }}
                  >
                    {nextWork.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Image preview (right) — figure rect is the clone's start position */}
            <div
              className="col-span-12 s:col-start-25 s:col-span-9 mt-[3rem] s:mt-0 s:self-end cursor-pointer"
              role="link"
              tabIndex={0}
              onClick={handleNextClick}
              onKeyDown={(e) => e.key === 'Enter' && handleNextClick()}
            >
              <figure
                ref={nextFigureRef}
                className="relative m-0 p-0"
                style={{
                  aspectRatio: '4 / 3',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={nextWork.image}
                  alt={nextWork.title}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </figure>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
}
