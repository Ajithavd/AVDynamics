import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products } from '../data/products'
import { usePageReveal } from '../hooks/usePageReveal'
import Footer from '../components/layout/Footer'

gsap.registerPlugin(ScrollTrigger)

// Static product card — no click-through, no transition. Image + text on
// alternating sides, mirroring the WorksList rhythm so the page reads as
// part of the same family even though it doesn't link anywhere.
//
// Animation classes:
//   .r-clip   — figure clip-path reveal (bottom→top wipe)
//   .r-line   — title slides up from below its overflow-clip wrapper
//   .r-fade   — number + description fade up
function ProductCard({ product }) {
  const isRight = product.align === 'right'

  return (
    <div
      className="site-grid block s:grid py-[4rem] s:py-[6rem]"
      style={{ color: 'inherit' }}
    >
      {/* Image column — number above image */}
      <div
        className={[
          'col-span-12 flex flex-col',
          isRight ? 's:col-start-20 s:col-span-15' : 's:col-start-1 s:col-span-19',
        ].join(' ')}
      >
        <span
          className="r-fade small-uppercase mb-[1.5rem] block"
          style={{ opacity: 0.45 }}
        >
          {product.num}
        </span>
        <figure
          className="r-clip relative m-0 p-0 overflow-hidden"
          style={{ borderRadius: '1.5rem' }}
        >
          <div className={`aspect-box ${product.aspect}`} />
          <img
            src={product.image}
            alt={product.title}
            className="img-fill"
            loading="lazy"
          />
        </figure>
      </div>

      {/* Text column — desktop, vertically centred against the image */}
      <div
        className={[
          'col-span-12 hidden s:flex flex-col justify-center',
          isRight
            ? 's:col-start-1 s:col-span-17 s:order-first s:text-right s:items-end'
            : 's:col-start-22 s:col-span-13',
        ].join(' ')}
      >
        <div
          style={{
            overflowY: 'clip',
            overflowX: 'visible',
            paddingBottom: '0.15em',
            width: '100%',
          }}
        >
          <h2
            className="r-line uppercase font-heading font-medium"
            style={{
              fontSize: 'clamp(3.5rem, 5vw, 14rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
              wordBreak: 'break-word',
              margin: 0,
            }}
          >
            {product.title}
          </h2>
        </div>
        <p
          className="r-fade font-body mt-[2.5rem]"
          style={{
            fontSize: 'clamp(1.5rem, 1.2vw, 2rem)',
            lineHeight: 1.5,
            opacity: 0.7,
            maxWidth: '52rem',
          }}
        >
          {product.description}
        </p>
      </div>

      {/* Mobile text — below image */}
      <div className="col-span-12 s:hidden mt-[2rem]">
        <div style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.15em' }}>
          <h2
            className="r-line uppercase font-heading font-medium"
            style={{
              fontSize: '3.6rem',
              lineHeight: 0.9,
              letterSpacing: '-0.04em',
              margin: 0,
            }}
          >
            {product.title}
          </h2>
        </div>
        <p
          className="r-fade font-body mt-[1.5rem]"
          style={{ fontSize: '1.5rem', lineHeight: 1.5, opacity: 0.7 }}
        >
          {product.description}
        </p>
      </div>
    </div>
  )
}

export default function Products() {
  const pageRef = useRef(null)
  usePageReveal(pageRef, [])

  // Scroll-reveal patterns — same vocabulary the About page uses, gated by
  // ScrollTrigger so each product card animates as it enters the viewport.
  //   .r-line   — slide up 110% → 0% (parent must clip vertically)
  //   .r-clip   — clip-path bottom→top reveal for images
  //   .r-fade   — fade + 3rem rise
  useEffect(() => {
    if (!pageRef.current) return

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
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={pageRef}
      data-page="products"
      className="min-h-screen"
      style={{ background: '#F9F9F9' }}
    >
      {/* ── HERO ── big page title (animated by usePageReveal on mount) */}
      <section className="site-grid pt-[17.5rem] s:pt-[22.5rem]">
        <div
          className="col-span-12 s:col-start-2 s:col-span-33"
          style={{ overflowY: 'clip', overflowX: 'visible', paddingBottom: '0.15em' }}
        >
          <h1
            className="js-t-line font-heading font-medium uppercase"
            style={{
              fontSize: 'clamp(5rem, 10vw, 22rem)',
              letterSpacing: '-0.075em',
              lineHeight: 0.85,
              margin: 0,
            }}
          >
            Products
          </h1>
        </div>
      </section>

      {/* ── INTRO ── short studio statement under the title */}
      <section className="site-grid mt-[8rem] s:mt-[12rem]">
        <p
          className="js-t-fade col-span-12 s:col-start-4 s:col-span-22 font-body leading-[1.3]"
          style={{ fontSize: 'clamp(1.8rem, 2vw, 4rem)', letterSpacing: '-0.02em' }}
        >
          A curated lineup of immersive systems, smart-city hardware, and AI-driven
          surveillance — engineered for landmark deployments and proven in the field.
        </p>
      </section>

      {/* ── PRODUCTS LIST ── alternating image/text rows with hairline dividers */}
      <section className="mt-[10rem] s:mt-[15rem]">
        {products.map((product) => (
          <div key={product.id}>
            <div className="px-[2.4rem] s:px-[4rem]">
              <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }} />
            </div>
            <ProductCard product={product} />
          </div>
        ))}
        {/* Final divider so the bottom of the list closes off cleanly */}
        <div className="px-[2.4rem] s:px-[4rem]">
          <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }} />
        </div>
      </section>

      <Footer />
    </div>
  )
}
