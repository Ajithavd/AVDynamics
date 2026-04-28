import { useRef } from 'react'
import { useStaggerReveal, useScrollReveal } from '../hooks/useScrollReveal'
import Footer from '../components/layout/Footer'

const services = {
  'Smart City & Infrastructure': [
    'Smart Pole Solutions', 'Smart City Architecture', 'ICCC Design & Implementation',
    'MCCC Solutions', 'Smart Parking', 'Smart Classroom', 'Geo-Mapping',
  ],
  'AV & Display Solutions': [
    'Sound Engineering', 'LED Displays', 'Video Wall', '360° Displays',
    'LED Signages', 'Dome Projections', 'Projection Mapping', 'PAS Systems',
  ],
  'Technology & Security': [
    'AI Surveillance', 'Cyber Security', 'Emergency Systems', 'Drones & Solutions',
    'Internet of Things', 'Software Development', 'Data Centre Services',
  ],
}

const partners = [
  { name: 'TCL', logo: 'https://avdynam.com/img/Partners/2/tcl.jpg' },
  { name: 'Winia', logo: 'https://avdynam.com/img/Partners/2/Winia.jpg' },
  { name: 'D-Link', logo: 'https://avdynam.com/img/Partners/2/d-link.jpg' },
  { name: 'AMD', logo: 'https://avdynam.com/img/Partners/2/amd1.jpg' },
  { name: 'Intel', logo: 'https://avdynam.com/img/Partners/2/int1.jpg' },
  { name: 'Lenovo', logo: 'https://avdynam.com/img/Partners/2/len1.jpg' },
  { name: 'Dell', logo: 'https://avdynam.com/img/Partners/2/del1.jpg' },
  { name: 'HP', logo: 'https://avdynam.com/img/Partners/2/hp.jpg' },
  { name: 'Allen', logo: 'https://avdynam.com/img/Partners/allen.jpg' },
  { name: 'JBL', logo: 'https://avdynam.com/img/Partners/2/jbl.jpg' },
  { name: 'QSC', logo: 'https://avdynam.com/img/Partners/2/qsc1.jpg' },
  { name: 'Electro-Voice', logo: 'https://avdynam.com/img/Partners/2/Electro-Voice.jpg' },
  { name: 'Hikvision', logo: 'https://avdynam.com/img/Partners/2/Hikv.jpg' },
  { name: 'Nest', logo: 'https://avdynam.com/img/Partners/2/Nest.jpg' },
]

const pillars = [
  { name: 'Experienced Team' },
  { name: 'Creative Solution' },
  { name: 'Exceptional Service' },
]

export default function About() {
  const heroRef = useRef(null)
  const bodyRef = useRef(null)
  useStaggerReveal(heroRef, '.t-line', [])

  return (
    <div data-page="about" className="bg-white min-h-screen">
      {/* Hero heading */}
      <div ref={heroRef} className="pt-[17.5rem] s:pt-[22.5rem]">
        <h1
          aria-label="Engineering the future of cities"
          className="site-grid uppercase font-heading font-medium"
          style={{
            fontSize: 'clamp(5rem, 8vw, 12rem)',
            letterSpacing: '-0.075em',
            lineHeight: '0.9',
          }}
        >
          <div className="col-start-1 s:col-start-2 col-span-12 s:col-span-20 t-line-wrap overflow-hidden">
            <div className="t-line">ENGINEERING</div>
          </div>
          <div className="col-start-1 s:col-start-8 col-span-12 s:col-span-24 t-line-wrap overflow-hidden" style={{ marginTop: '-0.05em' }}>
            <div className="t-line">THE FUTURE</div>
          </div>
          <div className="col-start-1 s:col-start-12 col-span-12 s:col-span-20 t-line-wrap overflow-hidden" style={{ marginTop: '-0.05em' }}>
            <div className="t-line">OF CITIES</div>
          </div>
        </h1>
      </div>

      {/* Hero image */}
      <div className="site-grid mt-[8rem] s:mt-[15rem]">
        <div className="col-span-12 s:col-start-2 s:col-span-33 relative aspect-box aspect-16-9">
          <img
            src="https://avdynam.com/img/work/new/Smart%20city.jpg"
            alt="AV Dynamics smart city"
            className="img-fill"
            loading="lazy"
          />
        </div>
      </div>

      {/* Description */}
      <div ref={bodyRef} className="site-grid mt-[8rem] s:mt-[15rem]">
        <p
          className="col-span-12 s:col-start-4 s:col-span-22 font-body leading-[1.3]"
          style={{ fontSize: 'clamp(1.8rem, 2vw, 6rem)' }}
        >
          AV Dynamics is a technology company delivering end-to-end solutions across AI surveillance,
          drones, IT consulting, audio, advanced displays, and smart city architecture. Our global
          experience working with Fortune 500 companies gives us the credibility and expertise to convert
          any design into a great solution — creating landmark projects that stand the test of time.
        </p>
      </div>

      {/* Three pillars */}
      <div className="site-grid mt-[8rem] s:mt-[12rem]">
        <div className="col-span-12 s:col-start-2 s:col-span-33 grid grid-cols-1 s:grid-cols-3 gap-[3rem]">
          {pillars.map((p) => (
            <div key={p.name} className="border-t border-black/20 pt-[3rem]">
              <h3
                className="font-heading font-medium"
                style={{ fontSize: 'clamp(2rem, 2vw, 4.2rem)', letterSpacing: '-0.03em' }}
              >
                {p.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Global Experience section */}
      <div className="site-grid mt-[12rem] s:mt-[25rem]">
        <div className="col-span-12 s:col-start-2 s:col-span-16 relative aspect-box aspect-4-3">
          <img
            src="https://avdynam.com/img/work/new/ICCC.jpg"
            alt="ICCC command centre"
            className="img-fill"
            loading="lazy"
          />
        </div>
        <div className="col-span-12 s:col-start-20 s:col-span-14 flex flex-col justify-center mt-[4rem] s:mt-0">
          <h2
            className="font-heading font-medium uppercase"
            style={{ fontSize: 'clamp(3rem, 4vw, 8.4rem)', lineHeight: '0.9', letterSpacing: '-0.05em' }}
          >
            GLOBAL EXPERTISE LOCAL DELIVERY
          </h2>
          <p className="font-body mt-[3rem] leading-[1.4]" style={{ fontSize: 'clamp(1.6rem, 1.5vw, 3.6rem)' }}>
            AV Dynamics was built on a foundation of deep technical expertise and relentless commitment
            to quality. We are experts in surveillance, drones, video projections, sound, and smart city
            architecture — designing, building, implementing and supporting solutions that cut across IT
            and non-IT spheres of smart cities worldwide.
          </p>
        </div>
      </div>

      {/* Mission section */}
      <div className="site-grid mt-[12rem] s:mt-[25rem]">
        <div className="col-span-12 s:col-start-20 s:col-span-16 relative aspect-box aspect-4-3 s:order-2">
          <img
            src="https://avdynam.com/img/work/new/drone.jpg"
            alt="Drone solutions"
            className="img-fill"
            loading="lazy"
          />
        </div>
        <div className="col-span-12 s:col-start-2 s:col-span-14 flex flex-col justify-center mt-[4rem] s:mt-0 s:order-1">
          <h2
            className="font-heading font-medium uppercase"
            style={{ fontSize: 'clamp(3rem, 4vw, 8.4rem)', lineHeight: '0.9', letterSpacing: '-0.05em' }}
          >
            EXPERT TEAM LANDMARK PROJECTS
          </h2>
          <p className="font-body mt-[3rem] leading-[1.4]" style={{ fontSize: 'clamp(1.6rem, 1.5vw, 3.6rem)' }}>
            Our mission is to create landmark projects by crafting inspiring structures, implementing
            superior architecture, adhering to best quality and on-time completion, and continuously
            enhancing the value of our solutions. We empower customers to solve today's most pressing
            challenges and accelerate business success.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="site-grid mt-[12rem] s:mt-[25rem]">
        <div className="col-span-12 s:col-start-2 s:col-span-33">
          <h2
            className="font-heading font-medium uppercase mb-[6rem] s:mb-[10rem]"
            style={{ fontSize: 'clamp(3rem, 4vw, 8.4rem)', lineHeight: '0.9', letterSpacing: '-0.05em' }}
          >
            OUR SERVICES
          </h2>
          <div className="grid grid-cols-1 s:grid-cols-3 gap-[3rem] s:gap-[4rem]">
            {Object.entries(services).map(([category, items]) => (
              <div key={category} className="border-t border-black/20 pt-[3rem]">
                <h3 className="font-heading font-medium mb-[2rem]"
                  style={{ fontSize: 'clamp(2rem, 2vw, 4.2rem)', letterSpacing: '-0.03em' }}>
                  {category}
                </h3>
                <ul className="flex flex-col gap-[0.8rem]">
                  {items.map((item) => (
                    <li key={item} className="small-uppercase">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner logos */}
      <div className="site-grid mt-[12rem] s:mt-[25rem]">
        <div className="col-span-12 s:col-start-2 s:col-span-33">
          <h2
            className="font-heading font-medium uppercase mb-[6rem] s:mb-[10rem]"
            style={{ fontSize: 'clamp(3rem, 4vw, 8.4rem)', lineHeight: '0.9', letterSpacing: '-0.05em' }}
          >
            OUR PARTNERS
          </h2>
          <div className="grid grid-cols-4 s:grid-cols-7 gap-[3rem] items-center">
            {partners.map((p) => (
              <div key={p.name} className="flex items-center justify-center">
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ maxHeight: '4rem', width: 'auto', maxWidth: '100%', filter: 'grayscale(1)', opacity: 0.6 }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* IoT future section */}
      <div className="site-grid mt-[12rem] s:mt-[25rem] mb-[10rem]">
        <div className="col-span-12 s:col-start-4 s:col-span-22">
          <p
            className="font-body leading-[1.3]"
            style={{ fontSize: 'clamp(1.8rem, 2vw, 6rem)' }}
          >
            Customers trust our technology, services, and expertise to guide every step of the IoT
            journey toward a more connected and intelligent future. Each team member is a well-chosen
            talent with immense focus in project execution — nurtured by our highly experienced
            management team.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
