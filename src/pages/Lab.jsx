import { useRef } from 'react'
import { useStaggerReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";

// import drone from "../assets/work/drone.png";
// import drone1 from "../assets/work/drone1.png";
// import ai_surveillance from "../assets/work/ai_surveillance.png";
// import aisurveillance1 from "../assets/work/ai-surveillance1.png";
// import projectionmapping from "../assets/work/projection-mapping.png";
// import projectionmapping1 from "../assets/work/projection-mapping1.png";
// import smartcity from "../assets/work/smart-city.png";
// import smartcity1 from "../assets/work/smart-city1.png";


const labImages = [img1, img2, img3, img4 
 ];

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
                  fontSize: 'clamp(5rem, 5vw, 12rem)',
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
