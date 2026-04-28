import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function WorkItem({ work }) {
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
    <div className="work-item">
      <div className="site-grid my-[4rem] s:my-[8rem]">
        <hr className="col-start-1 s:col-start-4 col-span-12 s:col-span-30 border-black/20" />
      </div>

      <article>
        <div
          role="link"
          tabIndex={0}
          className="site-grid trigger pb-[5rem] s:pb-0 block s:grid cursor-pointer"
          onClick={handleClick}
          onKeyDown={(e) => e.key === 'Enter' && handleClick()}
          style={{ textDecoration: 'none' }}
        >
          {/* Image */}
          <figure
            ref={figureRef}
            className={[
              'col-span-12 relative',
              isRight
                ? 's:col-start-21 s:col-span-13'
                : 's:col-start-4 s:col-span-18',
            ].join(' ')}
          >
            <div className={`aspect-box ${work.aspect}`} />
            <img
              src={work.image}
              alt={work.title}
              className="img-fill"
              loading="lazy"
              onError={(e) => {
                if (work.imageFallback) e.currentTarget.src = work.imageFallback
              }}
            />
          </figure>

          {/* Desktop text block */}
          <div
            aria-hidden="true"
            className={[
              'hidden s:flex s:flex-col s:justify-between s:-mb-[0.5rem] mt-0',
              isRight
                ? 's:col-start-15 s:col-span-5 s:items-end s:order-first'
                : 's:col-start-24 s:col-span-8 s:items-start',
            ].join(' ')}
          >
            <span className="font-heading font-bold" style={{ fontSize: '3.6rem' }}>
              {work.num}
            </span>
            <div>
              <h2
                className={[
                  'font-heading font-medium uppercase tracking-tight-75 flex flex-col',
                  isRight ? 's:items-end s:text-right' : 's:items-start',
                ].join(' ')}
                style={{ fontSize: 'clamp(4rem, 4vw, 20rem)', lineHeight: '0.825', letterSpacing: '-0.075em' }}
              >
                {work.title}
              </h2>
              <h3
                className={[
                  'font-body tracking-tight-4 whitespace-nowrap mt-[2rem]',
                  isRight ? 's:text-right' : '',
                ].join(' ')}
                style={{ fontSize: '4.2rem', letterSpacing: '-0.04em' }}
              >
                {work.tags.map((t, i) => (
                  <span key={t}>{t}{i < work.tags.length - 1 ? ', ' : ''}</span>
                ))}
              </h3>
            </div>
          </div>

          {/* Mobile text block */}
          <div className="col-span-12 flex s:hidden flex-col mt-[3rem]">
            <h2 className="font-heading font-medium uppercase tracking-tight-3" style={{ fontSize: '4.2rem' }}>
              {work.title}
            </h2>
            <h3 className="font-body tracking-tight-4" style={{ fontSize: '4.2rem', letterSpacing: '-0.04em' }}>
              {work.tags.map((t, i) => (
                <span key={t}>{t}{i < work.tags.length - 1 ? ', ' : ''}</span>
              ))}
            </h3>
          </div>
        </div>
      </article>
    </div>
  )
}
