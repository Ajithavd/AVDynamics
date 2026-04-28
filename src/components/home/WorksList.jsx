import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { featuredWorks } from '../../data/works'

function WorkCard({ work }) {
  const figureRef = useRef(null)
  const navigate = useNavigate()
  const isRight = work.align === 'right'

  const handleClick = () => {
    if (!figureRef.current) return
    const srcRect = figureRef.current.getBoundingClientRect()
    navigate(`/work/${work.id}`, {
      state: { srcRect: { top: srcRect.top, left: srcRect.left, width: srcRect.width, height: srcRect.height }, imageSrc: work.image },
    })
  }

  return (
    <div
      role="link"
      tabIndex={0}
      className="work-card site-grid block s:grid py-[4rem] s:py-[6rem] cursor-pointer"
      style={{ color: 'inherit' }}
      onClick={handleClick}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      {/* ── Image column (number at top + image below) ── */}
      <div
        className={[
          'col-span-12 flex flex-col',
          isRight
            ? 's:col-start-20 s:col-span-15'
            : 's:col-start-1 s:col-span-19',
        ].join(' ')}
      >
        <span className="small-uppercase mb-[1.5rem] block">{work.num}</span>
        <figure ref={figureRef} className="relative m-0 p-0">
          <div className={`aspect-box ${work.aspect}`} />
          <img
            src={work.image}
            alt={work.title}
            className="img-fill"
            loading="lazy"
          />
        </figure>
      </div>

      {/* ── Text column (title + tags, vertically centred) — desktop ── */}
      <div
        className={[
          'col-span-12 hidden s:flex flex-col justify-center',
          isRight
            ? 's:col-start-1 s:col-span-17 s:order-first'
            : 's:col-start-22 s:col-span-13',
        ].join(' ')}
      >
        <h2
          className="work-title-underline uppercase font-heading font-medium"
          style={{
            fontSize: 'clamp(3.5rem, 5vw, 18rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
          }}
        >
          {work.title}
        </h2>
        <p className="small-uppercase mt-[2.5rem]" style={{ opacity: 0.45 }}>
          {work.tags.join(', ')}
        </p>
      </div>

      {/* ── Mobile: title + tags below image ── */}
      <div className="col-span-12 s:hidden mt-[2rem]">
        <h2
          className="uppercase font-heading font-medium"
          style={{ fontSize: '3.6rem', lineHeight: 0.9, letterSpacing: '-0.04em' }}
        >
          {work.title}
        </h2>
        <p className="small-uppercase mt-[1.5rem]" style={{ opacity: 0.45 }}>
          {work.tags.join(', ')}
        </p>
      </div>
    </div>
  )
}

export default function WorksList() {
  return (
    <div>
      {/* "Our Latest Work" label */}
      <div className="site-grid mb-[5rem] s:mb-[8rem]">
        <h3 className="col-start-1 s:col-start-32 col-span-12 s:col-span-3 small-uppercase s:text-right">
          Our<br />Latest<br />Work
        </h3>
      </div>

      {featuredWorks.map((work) => (
        <div key={work.id}>
          {/* Divider */}
          <div className="px-[2.4rem] s:px-[4rem]">
            <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }} />
          </div>
          <WorkCard work={work} />
        </div>
      ))}

      {/* Final divider */}
      <div className="px-[2.4rem] s:px-[4rem]">
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.15)' }} />
      </div>
    </div>
  )
}
