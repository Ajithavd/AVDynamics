import { useRef } from 'react'
import { useStaggerReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'

const labImages = [
  'https://avdynam.com/img/work/new/Smart%20city.jpg',
  'https://avdynam.com/img/work/new/AI%20surivellance.jpg',
  'https://avdynam.com/img/work/new/drone.jpg',
  'https://avdynam.com/img/work/new/projection%20mapping.jpg',
  'https://avdynam.com/img/work/new/LED%20Display.jpg',
  'https://avdynam.com/img/work/new/ICCC.jpg',
  'https://avdynam.com/img/work/new/sound%20engineering.jpg',
  'https://avdynam.com/img/work/DoME.jpeg',
  'https://avdynam.com/img/work/new/Video%20wall.jpg',
  'https://avdynam.com/img/work/new/smart%20pole.jpg',
  'https://avdynam.com/img/work/new/cyber%20security.jpg',
  'https://avdynam.com/img/work/new/Data%20centre.jpg',
  'https://avdynam.com/img/work/new/smart%20class.jpg',
  'https://avdynam.com/img/work/new/MCCC.jpg',
  'https://avdynam.com/img/work/new/geo-mapping.jpg',
  'https://avdynam.com/img/work/Emergency%20systems.jpg',
  'https://avdynam.com/img/work/new/public%20accoument%20system.jpg',
  'https://avdynam.com/img/work/new/Smart%20parking.jpg',
  'https://avdynam.com/img/work/new/360%20degree.jpg',
  'https://avdynam.com/img/work/new/LED%20sinage.jpg',
  'https://avdynam.com/img/work/new/software%20development.jpg',
  'https://avdynam.com/img/work/new/IoT.jpg',
]

export default function Lab() {
  const heroRef = useRef(null)
  useStaggerReveal(heroRef, '.t-line', [])

  return (
    <div
      data-page="lab"
      className="min-h-screen"
      style={{ backgroundColor: '#2E3840', color: '#fff' }}
    >
      {/* Heading */}
      <div ref={heroRef} className="pt-[17.5rem] s:pt-[22.5rem] pb-[6rem]">
        <div className="site-grid">
          <div className="col-span-12 s:col-start-2 s:col-span-33">
            <div className="t-line-wrap overflow-hidden">
              <h1
                className="t-line font-heading font-medium uppercase"
                style={{
                  fontSize: 'clamp(5rem, 8vw, 12rem)',
                  letterSpacing: '-0.075em',
                  lineHeight: '0.9',
                }}
              >
                Innovation Lab
              </h1>
            </div>
            <div className="t-line-wrap overflow-hidden mt-[3rem]">
              <p className="t-line font-body" style={{ fontSize: 'clamp(1.6rem, 2vw, 4rem)', opacity: 0.6 }}>
                Technology in action — our solutions gallery
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Image grid */}
      <div className="px-[2.4rem] s:px-[4rem] pb-[10rem]">
        <div className="lab-grid">
          {labImages.map((src, i) => (
            <div key={i} className="lab-grid-item">
              <img
                src={src}
                alt={`Lab work ${i + 1}`}
                loading="lazy"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dark footer override */}
      <div style={{ '--foot-bg': '#1a2226' }}>
        <Footer />
      </div>
    </div>
  )
}
