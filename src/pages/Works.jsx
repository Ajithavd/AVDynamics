import { useRef } from 'react'
import { usePageReveal } from '../hooks/usePageReveal'
import WorkItem from '../components/works/WorkItem'
import Footer from '../components/layout/Footer'
import { works } from '../data/works'

export default function Works() {
  const pageRef = useRef(null)
  usePageReveal(pageRef, [])

  return (
    <div ref={pageRef} data-page="works" className="min-h-screen" style={{ background: '#F9F9F9' }}>
      <div className="pt-[17.5rem] s:pt-[22.5rem] pb-[5rem]">
        <div className="site-grid">
          <div className="col-span-12 s:col-start-2 s:col-span-30 overflow-hidden">
            <h1
              className="js-t-line font-heading font-medium uppercase"
              style={{
                fontSize: 'clamp(5rem, 8vw, 15rem)',
                letterSpacing: '-0.075em',
                lineHeight: '0.9',
              }}
            >
              Our Work
            </h1>
          </div>
        </div>
      </div>

      <div className="pb-[10rem]">
        {works.map((work, i) => (
          <WorkItem key={work.id} work={work} index={i} />
        ))}
        <div className="site-grid mt-[4rem] s:mt-[8rem]">
          <hr className="col-start-1 s:col-start-4 col-span-12 s:col-span-30 border-black/20" />
        </div>
      </div>

      <Footer />
    </div>
  )
}
