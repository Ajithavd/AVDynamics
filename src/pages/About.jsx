import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useStaggerReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'
import heroImg from '../assets/hero.png'
import hero1Img from '../assets/hero1.png'
import hero2Img from '../assets/hero2.png'
import hero3Img from '../assets/hero3.png'
import immersiveImg from '../assets/IMMERSIVE.png'

gsap.registerPlugin(ScrollTrigger)

const services = {
  Strategy: [
    'SOLUTION ARCHITECTURE',
    'AUDIENCE & SITE ANALYSIS',
    'SYSTEM STRATEGY',
    'DIGITAL TRANSFORMATION',
    'COMPLIANCE & GOVERNANCE',
    'EXPERIENCE STRATEGY',
  ],
  Engineering: [
    'AI SURVEILLANCE',
    'IMMERSIVE AV SYSTEMS',
    'PROJECTION MAPPING',
    'LED VIDEO WALLS',
    'SOUND ENGINEERING',
    'DRONE SOLUTIONS',
    'IOT & SMART POLES',
    'NETWORK & DATA CENTRES',
  ],
  Implementation: [
    'HARDWARE INTEGRATION',
    'COMMAND-CENTRE SETUP',
    'SOFTWARE DEVELOPMENT',
    'OPERATOR TRAINING',
    'ONGOING SUPPORT',
  ],
}

const team = [
  {
    name: 'Founding Team',
    role: 'Vision & Direction',
    image: hero2Img,
  },
  {
    name: 'Engineering Lead',
    role: 'Systems & Delivery',
    image: hero3Img,
  },
]

const clients = [
  { name: 'TCL', logo: 'https://avdynam.com/img/Partners/2/tcl.jpg' },
  { name: 'Winia', logo: 'https://avdynam.com/img/Partners/2/Winia.jpg' },
  { name: 'D-Link', logo: 'https://avdynam.com/img/Partners/2/d-link.jpg' },
  { name: 'AMD', logo: 'https://avdynam.com/img/Partners/2/amd1.jpg' },
  { name: 'Intel', logo: 'https://avdynam.com/img/Partners/2/int1.jpg' },
  { name: 'Lenovo', logo: 'https://avdynam.com/img/Partners/2/len1.jpg' },
  { name: 'Dell', logo: 'https://avdynam.com/img/Partners/2/del1.jpg' },
  { name: 'HP', logo: 'https://avdynam.com/img/Partners/2/hp.jpg' },
  { name: 'JBL', logo: 'https://avdynam.com/img/Partners/2/jbl.jpg' },
  { name: 'QSC', logo: 'https://avdynam.com/img/Partners/2/qsc1.jpg' },
  { name: 'Electro-Voice', logo: 'https://avdynam.com/img/Partners/2/Electro-Voice.jpg' },
  { name: 'Hikvision', logo: 'https://avdynam.com/img/Partners/2/Hikv.jpg' },
  { name: 'Nest', logo: 'https://avdynam.com/img/Partners/2/Nest.jpg' },
  { name: 'Allen', logo: 'https://avdynam.com/img/Partners/allen.jpg' },
  { name: 'Bosch', logo: 'https://avdynam.com/img/Partners/2/Hikv.jpg' },
  { name: 'Sony', logo: 'https://avdynam.com/img/Partners/2/jbl.jpg' },
]

const awards = [
  ['Smart-City Deployments', 12],
  ['ICCC Command Centres', 6],
  ['Award-Winning Installs', 4],
  ['Industry Certifications', 9],
  ['Government Partnerships', 14],
  ['Drone Programmes', 5],
  ['Major LED Roll-outs', 8],
  ['Live-Event Activations', 22],
  ['Years of Operation', 15],
  ['Cities Served', 18],
]

// Wraps a multi-line H3 in a clip container that doesn't truncate horizontally.
// `overflowY: clip; overflowX: visible` masks the slide-up animation but lets
// glyphs breathe past the column edge; `paddingBottom: 0.2em` reserves space
// for descenders and the natural bottom-overshoot of tight `lineHeight: 0.825`.
function SectionTitle({ children, className = '', cols = 's:col-start-7 s:col-span-16' }) {
  return (
    <div className="site-grid">
      <div
        className={`col-span-12 ${cols}`}
        style={{
          overflowY: 'clip',
          overflowX: 'visible',
          paddingBottom: '0.2em',
        }}
      >
        <h3
          className={`r-line font-heading uppercase font-medium ${className}`}
          style={{
            fontSize: 'clamp(6rem, 11vw, 16rem)',
            letterSpacing: '-0.06em',
            lineHeight: 0.9,
            margin: 0,
          }}
        >
          {children}
        </h3>
      </div>
    </div>
  )
}

// Same wrapper for any single-block big heading inline (used in the hero rows
// where the layout doesn't fit SectionTitle's site-grid wrapper)
function lineWrapStyle() {
  return {
    overflowY: 'clip',
    overflowX: 'visible',
    paddingBottom: '0.2em',
  }
}

export default function About() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  useStaggerReveal(heroRef, '.t-line', [])

  // Force the dark header treatment for the entire about page
  useEffect(() => {
    document.body.classList.add('header-dark')
    return () => document.body.classList.remove('header-dark')
  }, [])

  // Scroll-reveal patterns:
  //   .r-line   — slide up 110% → 0% (parent must clip vertically)
  //   .r-clip   — clip-path bottom→top reveal for images
  //   .r-fade   — fade + 3rem rise
  //   .r-stagger / .r-stagger-item — staggered fade across a group
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.utils.toArray('.r-line').forEach((line) => {
        gsap.fromTo(
          line,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: line, start: 'top 92%', once: true },
          },
        )
      })

      gsap.utils.toArray('.r-clip').forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          },
        )
      })

      gsap.utils.toArray('.r-fade').forEach((el) => {
        gsap.fromTo(
          el,
          { y: '3rem', autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          },
        )
      })

      gsap.utils.toArray('.r-stagger').forEach((group) => {
        const items = group.querySelectorAll('.r-stagger-item')
        if (!items.length) return
        gsap.fromTo(
          items,
          { y: '3rem', autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: group, start: 'top 88%', once: true },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      data-page="about"
      style={{
        color: '#fff',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* Dark backdrop — fixed at z:-2 to override the global #F9F9F9 bg.
          The wrapper deliberately has NO z-index so it doesn't create a
          stacking context; the backdrop participates in App's stacking
          context at z:-2, with ModelScene at z:-1 floating in front of it. */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -2,
          background: '#0a0a0a',
          pointerEvents: 'none',
        }}
      />
      {/* ── HERO ── */}
      <section ref={heroRef} className="site-grid pt-[20rem] s:pt-[24rem]">
        <h1
          aria-label="Engineering immersive technology experiences"
          className="col-span-12 s:col-start-2 s:col-span-30 font-heading uppercase font-medium"
          style={{
            fontSize: 'clamp(7rem, 13vw, 14rem)',
            letterSpacing: '-0.06em',
            lineHeight: 0.9,
          }}
        >
          <div style={lineWrapStyle()}>
            <div className="t-line">ENGINEERING</div>
          </div>
          <div style={lineWrapStyle()}>
            <div className="t-line">IMMERSIVE</div>
          </div>
          <div style={lineWrapStyle()}>
            <div className="t-line">EXPERIENCES</div>
          </div>
        </h1>
      </section>

      {/* ── HERO IMAGE ── */}
      {/* <section className="site-grid mt-[6rem] s:mt-[10rem]">
        <figure
          className="r-clip col-span-12 s:col-start-2 s:col-span-29 m-0 p-0 relative overflow-hidden"
          style={{ aspectRatio: '16 / 10', borderRadius: '1.5rem' }}
        >
          <img
            src={heroImg}
            alt="AV Dynamics studio"
            loading="eager"
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
      </section> */}

      {/* ── INTRO PARAGRAPH ── */}
      <section className="site-grid mt-[15rem] s:mt-[30rem]">
        <p
          className="r-fade col-span-12 s:col-start-4 s:col-span-21 font-body"
          style={{
            fontSize: 'clamp(2.4rem, 3.6vw, 7rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}
        >
          AV Dynamics is a technology studio engineering immersive AV systems and smart-city
          infrastructure. We exist at the intersection of hardware, software, and storytelling —
          designing landmark installations that turn rooms into worlds and cities into platforms.
        </p>
      </section>

      {/* ── ONE TEAM GLOBAL VISION ── */}
      <section className="mt-[15rem] s:mt-[30rem]">
        <div className="site-grid s:items-end">
          <figure
            className="r-clip col-span-6 col-start-6 s:col-start-14 s:col-span-10 m-0 p-0 relative overflow-hidden s:order-2"
            style={{ aspectRatio: '5 / 7', borderRadius: '1.5rem' }}
          >
            <img
              src={hero1Img}
              alt=""
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </figure>
          <div
            className="col-span-12 s:col-start-2 s:col-span-9 mt-[8rem] s:mt-0 s:order-first"
            style={lineWrapStyle()}
          >
            <h3
              className="r-line font-heading uppercase font-medium"
              style={{
                fontSize: 'clamp(6rem, 11vw, 15rem)',
                letterSpacing: '-0.06em',
                lineHeight: 0.9,
                margin: 0,
              }}
            >
              ONE
              <br />
              TEAM
              <br />
              GLOBAL
              <br />
              VISION
            </h3>
          </div>
        </div>

        <div className="site-grid mt-[6rem] s:mt-[10rem]">
          <p
            className="r-fade col-span-12 s:col-start-23 s:col-span-8 s:order-2 font-body leading-[1.5]"
            style={{ fontSize: 'clamp(1.5rem, 1.2vw, 2rem)' }}
          >
            From day one, AV Dynamics was built on collaboration — engineers, designers, and content
            authors working as one team across geographies. We believe ambitious work needs the
            best people, regardless of where they sit.
          </p>
          <figure
            className="r-clip col-span-10 col-start-3 s:col-start-2 s:col-span-20 mt-[10rem] s:mt-0 s:order-first m-0 p-0 relative overflow-hidden"
            style={{ aspectRatio: '16 / 10', borderRadius: '1.5rem' }}
          >
            <img
              src={hero2Img}
              alt=""
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </figure>
        </div>
      </section>

      {/* ── SMALL TEAM BIG IMPACT ── */}
      <section className="my-[15rem] s:my-[30rem]">
        <SectionTitle>
          SMALL TEAM
          <br />
          BIG IMPACT
        </SectionTitle>

        <div className="site-grid mt-[5rem] s:mt-[9rem] items-start">
          <div className="col-span-12 s:col-start-7 s:col-span-10 grid grid-cols-12 s:grid-cols-10 gap-x-[4.5rem] s:gap-x-0 s:pr-[2rem] mb-[15rem] s:mb-0">
            <p
              className="r-fade col-span-12 s:col-start-1 s:col-span-7 font-body leading-[1.5]"
              style={{ fontSize: 'clamp(1.5rem, 1.2vw, 2rem)' }}
            >
              One team. Many disciplines. A singular drive to deliver landmark systems for our
              clients. Our work spans command centres, immersive theatres, projection-mapped
              facades, and city-scale infrastructure — built across India and beyond.
            </p>
            <figure
              className="r-clip col-start-4 col-span-7 hidden s:block relative mt-[8rem] m-0 p-0 overflow-hidden"
              style={{ aspectRatio: '2 / 3', borderRadius: '1.5rem' }}
            >
              <img
                src={hero3Img}
                alt=""
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </figure>
          </div>

          <figure
            className="r-clip col-span-4 s:hidden relative mt-[15rem] m-0 p-0 overflow-hidden"
            style={{ aspectRatio: '2 / 3', borderRadius: '1.5rem' }}
          >
            <img
              src={hero3Img}
              alt=""
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </figure>

          <figure
            className="r-clip col-span-8 s:col-span-12 relative m-0 p-0 overflow-hidden"
            style={{ aspectRatio: '16 / 10', borderRadius: '1.5rem' }}
          >
            <img
              src={immersiveImg}
              alt=""
              loading="lazy"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </figure>
        </div>
      </section>

      {/* ── TEAM & LEADERSHIP ── */}
      <section className="mb-[15rem] s:mb-[30rem]">
        <SectionTitle>
          TEAM &amp;
          <br />
          LEADERSHIP
        </SectionTitle>

        <div className="site-grid mt-[5rem] s:mt-[9rem]">
          <div className="r-stagger col-span-12 s:col-start-7 s:col-span-24 grid grid-cols-1 s:grid-cols-2 gap-x-[4rem] s:gap-x-[12rem] gap-y-[8rem] s:gap-y-[12rem]">
            {team.map((member) => (
              <article key={member.name} className="r-stagger-item cursor-pointer">
                <figure
                  className="relative m-0 p-0 overflow-hidden"
                  style={{ aspectRatio: '4 / 5', borderRadius: '1.5rem' }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </figure>
                <div className="mt-[3rem] flex flex-col">
                  <h2
                    className="font-heading font-medium uppercase"
                    style={{
                      fontSize: 'clamp(2.4rem, 2.6vw, 4.2rem)',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {member.name}
                  </h2>
                  <h3
                    className="font-body mt-[0.8rem]"
                    style={{
                      fontSize: 'clamp(1.8rem, 2vw, 3rem)',
                      letterSpacing: '-0.02em',
                      opacity: 0.6,
                    }}
                  >
                    {member.role}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="mb-[15rem] s:mb-[30rem]">
        <SectionTitle>
          OUR
          <br />
          SERVICES
        </SectionTitle>

        {Object.entries(services).map(([category, items]) => (
          <div key={category} className="site-grid mt-[8rem] s:mt-[12rem]">
            <span
              className="r-fade col-span-12 s:col-start-7 s:col-span-6 small-uppercase mb-[3rem] s:mb-0"
              style={{ opacity: 0.5 }}
            >
              {category}
            </span>
            <ul
              className="r-stagger col-span-12 s:col-start-14 s:col-span-20 flex flex-col"
              style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.2em' }}
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="r-stagger-item relative font-heading uppercase font-medium"
                  style={{
                    fontSize: 'clamp(3rem, 6vw, 8rem)',
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    paddingLeft: 'clamp(3.5rem, 4.5vw, 6rem)',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.4em',
                      left: 0,
                      width: '1.1rem',
                      height: '1.1rem',
                      borderRadius: '999px',
                      background: '#b89878',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* ── SELECTED CLIENTS ── */}
      <section className="site-grid mb-[15rem] s:mb-[30rem]">
        <div
          className="col-start-1 s:col-start-7 col-end-13 s:col-end-31"
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginBottom: '8rem' }}
        />
        <span
          className="r-fade col-span-12 s:col-start-7 s:col-span-6 small-uppercase"
          style={{ opacity: 0.5 }}
        >
          Selected
          <br />
          Clients
        </span>
        <ul
          className="r-stagger col-span-12 s:col-start-14 s:col-span-17 grid grid-cols-4 mt-[6rem] s:mt-0"
          style={{ gap: 'clamp(4rem, 7vw, 9rem)' }}
        >
          {clients.map((c) => (
            <li
              key={c.name + c.logo}
              className="r-stagger-item relative"
              style={{ aspectRatio: '5 / 2' }}
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.7,
                }}
              />
            </li>
          ))}
        </ul>
        <div
          className="col-start-1 s:col-start-7 col-end-13 s:col-end-31"
          style={{ borderTop: '1px solid rgba(255,255,255,0.2)', marginTop: '8rem' }}
        />
      </section>

      {/* ── AWARDS & RECOGNITION ── */}
      <section className="my-[15rem] s:my-[30rem] site-grid">
        <span
          className="r-fade small-uppercase col-start-1 col-end-13 s:col-start-7 s:col-end-31 mb-[8rem] s:mb-[15rem]"
          style={{ opacity: 0.5 }}
        >
          Awards
          <br />
          &amp; Recognition
        </span>

        <div
          className="r-stagger col-start-1 s:col-start-7 col-end-13 s:col-end-31"
          style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.15em' }}
        >
          {awards.map(([label, count], i) => (
            <div
              key={label}
              className="r-stagger-item flex justify-between items-baseline"
              style={{ marginTop: i === 0 ? 0 : 'clamp(3rem, 5vw, 8rem)' }}
            >
              <div
                className="font-heading uppercase font-medium"
                style={{
                  fontSize: 'clamp(4rem, 9vw, 13rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  width: '70%',
                }}
              >
                {label}
              </div>
              <span
                style={{
                  fontSize: 'clamp(2.6rem, 5vw, 7.5rem)',
                  letterSpacing: '-0.04em',
                  lineHeight: 0.9,
                  color: '#b89878',
                }}
              >
                {count}
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
