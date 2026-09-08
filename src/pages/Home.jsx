import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Volume2, 
  Tv, 
  Compass, 
  Zap, 
  Radio, 
  Cpu, 
  Layers, 
  ArrowRight,
  Search,
  Workflow,
  Settings,
  LifeBuoy,
  Landmark,
  ShieldCheck,
  GraduationCap,
  Activity,
  Trophy,
  Hotel,
  Building2,
  Store,
  Truck,
  Music,
  Leaf,
  Award,
  Handshake,
  Globe
} from 'lucide-react';
import styles from './Home.module.css';
import { servicesData } from '../data/servicesData';

const iconMap = {
  Shield,
  Volume2,
  Tv,
  Compass,
  Zap,
  Radio,
  Cpu,
  Layers
};

function Counter({ end, duration = 2000, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const endVal = parseFloat(end);
    const multiplier = Math.pow(10, decimals);
    const targetVal = Math.round(endVal * multiplier);
    if (start === targetVal) return;

    const incrementTime = Math.max(Math.floor(duration / targetVal), 16);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= targetVal) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [hasStarted, end, duration, decimals]);

  const displayVal = decimals > 0 ? (count / Math.pow(10, decimals)).toFixed(decimals) : count;

  return (
    <span ref={elementRef}>
      {displayVal}
      {suffix}
    </span>
  );
}

export default function Home() {
  const scrollRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    '/hero1.png',
    '/hero2.png',
    '/hero3.png',
    '/hero4.png'
  ];

  const clientLogos = [
    { name: 'Dell', src: '/clients/Dell.png' },
    { name: 'HP', src: '/clients/HP.png' },
    { name: 'Lenovo', src: '/clients/Lenovo.png' },
    { name: 'NovaStar', src: '/clients/NovaStar.png' },
    { name: 'Panasonic', src: '/clients/Panasonic.png' },
    { name: 'Allen & Heath', src: '/clients/allen.jpg' },
    { name: 'AMD', src: '/clients/amd.png' },
    { name: 'Cisco', src: '/clients/cisco.png' },
    { name: 'Hitachi', src: '/clients/hitachi.png' },
    { name: 'Intel', src: '/clients/intel1.png' },
    { name: 'QSC', src: '/clients/qsc.png' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    if (!slider) return;
    slider.isDown = true;
    slider.startX = e.pageX - slider.offsetLeft;
    slider.scrollLeftStart = slider.scrollLeft;
  };

  const handleMouseLeave = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    slider.isDown = false;
  };

  const handleMouseUp = () => {
    const slider = scrollRef.current;
    if (!slider) return;
    slider.isDown = false;
  };

  const handleMouseMove = (e) => {
    const slider = scrollRef.current;
    if (!slider || !slider.isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - slider.startX) * 1.5;
    slider.scrollLeft = slider.scrollLeftStart - walk;
  };

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className={styles.hero}>
        {slides.map((slide, idx) => (
          <div 
            key={idx}
            className={`${styles.heroBackground} ${activeSlide === idx ? styles.slideActive : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          ></div>
        ))}
        <div className={styles.heroOverlay}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.heroContent}>
            <span className={styles.heroSubtitle}>Engineering What's Next</span>
            <span style={{ color: 'var(--text-light)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.25em', display: 'block', marginBottom: '1.5rem' }}>
              SYSTEM INTEGRATORS & SOLUTION ARCHITECTS 
            </span>
            <h1 className={styles.heroTitle}></h1>
            <span style={{ color: 'var(--text-light)', fontSize: '0.65rem', fontWeight: '200',  letterSpacing: '0.35em', display: 'block', marginBottom: '1.5rem' }}>
              Integrated Solutions for Smarter, Safer and More Engaging Environments. 
            </span>
            <p className={styles.heroDesc}>
              AV Dynamics is a system integrator and solution architect with 20+ years of experience across 
technology, infrastructure, audio-visual systems, surveillance, immersive experiences, software and live 
events. We transform ideas and complex requirements into integrated, scalable and future-ready 
solutions. 
            </p>

            <span style={{ color: 'var(--text-light)', fontSize: '0.75rem', fontWeight: '300',  letterSpacing: '0.25em', display: 'block', marginBottom: '1.5rem' }}>
              One partner. Every discipline. From strategy and solution architecture to full-scale system integration.
            </span>
            <div className={styles.heroButtons}>
              <Link to="/services/cctv-solutions" className="btn btn-accent">
                Explore Our Solutions <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Talk to an Integration Expert
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 2.5 — DELIVERING EXCELLENCE (Replacing Snapshot) */}
      <section className={`${styles.excellence} section-padding`}>
        <div className="container">
          <div className={styles.excellenceSplit}>
            <div className={styles.excellenceLeft}>
              <h2 className="heading-huge">Who We Are </h2>
              <p className={`${styles.excellenceDesc} body-large`}>

                  <p>We are architects of integrated experiences. AV Dynamics combines strategic thinking, engineering 
expertise, technology integration and creative execution to build solutions that perform in the real 
world. 
From mission-critical surveillance and command environments to immersive attractions, intelligent 
venues, LED ecosystems, live events and digital platforms, our approach connects multiple technologies 
into one purposeful solution. </p>

              </p>
              <Link to="/contact" className={`btn ${styles.talkBtn}`}>
                Talk to us <ArrowRight size={16} />
              </Link>
            </div>

            <div className={styles.excellenceRight}>
              <div className={styles.excelGrid}>
                {/* Metric 1 */}
                <div className={styles.excelCard}>
                  <span className={styles.excelNumber}>
                    <Counter end="20" suffix="+" />
                  </span>
                  <span className={styles.excelLabel}>Years Experience</span>
                </div>

                {/* Metric 2 */}
                <div className={styles.excelCard}>
                  <span className={styles.excelNumber}>
                    <Counter end="98" suffix="%" />
                  </span>
                  <span className={styles.excelLabel}> End-to-End Integration </span>
                </div>

                {/* Metric 3 */}
                <div className={styles.excelCard}>
                  <span className={styles.excelNumber}>
                    <Counter end="500" suffix="+" />
                  </span>
                  <span className={styles.excelLabel}>Project Delivers</span>
                </div>

                {/* Metric 4 */}
                <div className={styles.excelCard}>
                  <span className={styles.excelNumber}>
                    <Counter end="4.8" decimals={1} suffix="/5" />
                  </span>
                  <span className={styles.excelLabel}>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — OUR EXPERTISE */}
      <section className={`${styles.expertise} section-padding`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerText}>
              <span className="subtitle-red">Our Pillars</span>
              <h2 className="heading-huge">What We Excel At</h2>
              <p className="body-normal" style={{ marginTop: '1rem' }}>
                Our expertise spans intelligent infrastructure, immersive experiences, surveillance systems, venue technologies, software platforms, and digital transformation solutions—engineered to create smarter, more connected environments.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              <span>Drag to explore</span> →
            </div>
          </div>

          <div 
            className={styles.expertiseScroll}
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ cursor: 'grab' }}
          >
            {servicesData.map((service) => {
              const IconComponent = iconMap[service.icon] || Cpu;
              return (
                <div key={service.slug} className={styles.expertiseCard}>
                  <div 
                    className={styles.expertiseCardImage} 
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className={styles.expertiseCardOverlay}></div>
                  <div className={styles.expertiseCardContent}>
                    <div className={styles.expertiseCardIcon}>
                      <IconComponent size={32} />
                    </div>
                    <h3 className={styles.expertiseCardTitle}>{service.title}</h3>
                    <p className={styles.expertiseCardDesc}>{service.shortDesc}</p>
                    <Link to={`/services/${service.slug}`} className={styles.expertiseCardLink}>
                      Explore Solutions <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW SECTION: OUR APPROACH (Moved from About) */}
      <section className={`${styles.approach} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Methodology</span>
            <h2 className="heading-huge">Our Approach</h2>
            <p className="body-large" style={{ maxWidth: '750px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
              Every AV Dynamics engagement follows a structured, five-stage methodology designed to remove guesswork and protect project timelines:
            </p>
          </div>

          <div className={styles.approachGrid}>
            {/* Stage 1 */}
            <div className={styles.approachCard}>
              <span className={styles.approachStage}>Stage 01</span>
              <div className={styles.approachCardIcon}>
                <Search size={28} />
              </div>
              <h3>Discover</h3>
              <p>Understand the objective, users, environment and operational challenges.</p>
            </div>

            {/* Stage 2 */}
            <div className={styles.approachCard}>
              <span className={styles.approachStage}>Stage 02</span>
              <div className={styles.approachCardIcon}>
                <Cpu size={28} />
              </div>
              <h3>Architect</h3>
              <p>Create a solution strategy, system architecture and technology roadmap.</p>
            </div>

            {/* Stage 3 */}
            <div className={styles.approachCard}>
              <span className={styles.approachStage}>Stage 03</span>
              <div className={styles.approachCardIcon}>
                <Workflow size={28} />
              </div>
              <h3>Integrate</h3>
              <p>Bring together the right technologies, partners and engineering disciplines.</p>
            </div>

            {/* Stage 4 */}
            <div className={styles.approachCard}>
              <span className={styles.approachStage}>Stage 04</span>
              <div className={styles.approachCardIcon}>
                <Settings size={28} />
              </div>
              <h3>Deliver</h3>
              <p>Manage execution from planning and procurement to installation, testing and commissioning.</p>
            </div>

            {/* Stage 5 */}
            <div className={styles.approachCard}>
              <span className={styles.approachStage}>Stage 05</span>
              <div className={styles.approachCardIcon}>
                <LifeBuoy size={28} />
              </div>
              <h3>Support</h3>
              <p>Provide training, optimisation, maintenance and long-term lifecycle support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: INDUSTRIES WE SERVE (Moved from About) */}
      <section className={`${styles.sectors} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Sectors</span>
            <h2 className="heading-huge">Industries We Serve</h2>
            <p className="body-large" style={{ maxWidth: '750px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
              Our portfolio spans a wide range of sectors, each with its own technical and experiential demands:
            </p>
          </div>

          <div className={styles.sectorsGrid}>
            {/* Sector 1: Government & Smart Cities */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Landmark size={28} />
              </div>
              <h3>Government & Smart Cities</h3>
            </div>

            {/* Sector 2: Defence & Critical Infrastructure */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <ShieldCheck size={28} />
              </div>
              <h3>Defence & Critical Infrastructure</h3>
            </div>

            {/* Sector 3: Education & Research */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <GraduationCap size={28} />
              </div>
              <h3>Education & Research</h3>
            </div>

            {/* Sector 4: Healthcare & Wellness */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Activity size={28} />
              </div>
              <h3>Healthcare & Wellness</h3>
            </div>

            {/* Sector 5: Sports & Performance */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Trophy size={28} />
              </div>
              <h3>Sports & Performance</h3>
            </div>

            {/* Sector 6: Entertainment & Tourism */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Tv size={28} />
              </div>
              <h3>Entertainment & Tourism</h3>
            </div>

            {/* Sector 7: Hospitality & F&B */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Hotel size={28} />
              </div>
              <h3>Hospitality & F&B</h3>
            </div>

            {/* Sector 8: Corporate & Enterprise */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Building2 size={28} />
              </div>
              <h3>Corporate & Enterprise</h3>
            </div>

            {/* Sector 9: Retail & Real Estate */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Store size={28} />
              </div>
              <h3>Retail & Real Estate</h3>
            </div>

            {/* Sector 10: Transportation & Public Infrastructure */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Truck size={28} />
              </div>
              <h3>Transportation & Public Infrastructure</h3>
            </div>

            {/* Sector 11: Media & Events */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Music size={28} />
              </div>
              <h3>Media & Events</h3>
            </div>

            {/* Sector 12: Energy & Sustainability */}
            <div className={styles.sectorsCard}>
              <div className={styles.sectorsCardIcon}>
                <Leaf size={28} />
              </div>
              <h3>Energy & Sustainability</h3>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6.5 — OEM / CLIENT LOGOS (Temporarily Commented Out)
      <section className={styles.marqueeSection}>
        <h3 className={styles.marqueeTitle}>Our Enterprise Core Technology Partners</h3>
        <div className="marquee-container">
          <div className="marquee-content">
            {clientLogos.map((logo, index) => (
              <img 
                key={`logo-1-${index}`} 
                src={logo.src} 
                alt={logo.name} 
                className={styles.clientLogoImage} 
              />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {clientLogos.map((logo, index) => (
              <img 
                key={`logo-2-${index}`} 
                src={logo.src} 
                alt={logo.name} 
                className={styles.clientLogoImage} 
              />
            ))}
          </div>
        </div>
      </section>
      */}

      {/* NEW SECTION: WHY AV DYNAMICS (Moved from About) */}
      <section className={`${styles.whyAv} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">AV Dynamics Advantage</span>
            <h2 className="heading-huge">Why AV Dynamics</h2>
            <p className="body-normal" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
              We deliver elite-tier integration and project execution across critical infrastructures worldwide.
            </p>
          </div>

          <div className={styles.whyAvGrid}>
            {/* Card 1: 20+ Years of Experience */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <Award size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>20+ Years of Experience</h3>
                <p>Across technology, infrastructure and experience-led projects.</p>
              </div>
            </div>

            {/* Card 2: One Integrated Partner */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <Handshake size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>One Integrated Partner</h3>
                <p>From strategy and solution architecture to deployment and support.</p>
              </div>
            </div>

            {/* Card 3: Multi-Domain Expertise */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <Cpu size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>Multi-Domain Expertise</h3>
                <p>Across physical spaces, digital systems and live environments.</p>
              </div>
            </div>

            {/* Card 4: Vendor-Neutral Architecture */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <ShieldCheck size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>Vendor-Neutral Architecture</h3>
                <p>Focused on project requirements.</p>
              </div>
            </div>

            {/* Card 5: Synergistic Integration */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <Workflow size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>Synergistic Integration</h3>
                <p>Ability to combine engineering, technology, creativity and operational thinking.</p>
              </div>
            </div>

            {/* Card 6: Scalable Solutions */}
            <div className={styles.whyAvCard}>
              <div className={styles.whyAvIcon}>
                <Globe size={28} />
              </div>
              <div className={styles.whyAvInfo}>
                <h3>Scalable Solutions</h3>
                <p>For single-site, multi-location and large-format projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5 — THE FUTURE OF AV DYNAMICS */}
      <section className={`${styles.futureDynamics} section-padding`}>
        <div className="container">
          <div className={styles.futureHeader}>
            <span className="subtitle-red">Driven By Innovation, Powered By Possibilities</span>
            <p className="body-large">
              We believe technology should do more than function—it should transform. Through intelligent infrastructure, immersive technologies, smart surveillance, and integrated experience solutions, AV DYNAMICS creates environments that are smarter, safer, and designed for the future. Every project is engineered to deliver measurable impact while unlocking new possibilities.
            </p>
          </div>

          <h2 className={styles.futureSubheading}>The Future Of AV Dynamics Is</h2>

          <div className={styles.futureGrid}>
            {/* Card 1: Faster */}
            <div className={styles.futureCard}>
              <div className={styles.futureCardIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="36" cy="32" r="20" />
                  <path d="M36 20v12l8 4" />
                  <path d="M8 20h16" />
                  <path d="M4 32h14" />
                  <path d="M8 44h16" />
                </svg>
              </div>
              <span>Faster</span>
            </div>

            {/* Card 2: Cleaner */}
            <div className={styles.futureCard}>
              <div className={styles.futureCardIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M28 10C28 10 44 26 44 36C44 40.5 42 44.5 39 47.5" />
                  <path d="M28 10C28 10 12 26 12 36C12 45 19 52 28 52" />
                  <circle cx="44" cy="44" r="8" />
                  <path d="M50 50l8 8" />
                </svg>
              </div>
              <span>Cleaner</span>
            </div>

            {/* Card 3: Smarter */}
            <div className={styles.futureCard}>
              <div className={styles.futureCardIcon}>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M48 56c0-6-4-12-10-14c-1-0.5-2-1.5-2-2.5V36c1-1 3-3 4-6c1-2 2-3 2-5c0-1.5-0.5-2.5-1.5-3c0-3-0.5-7-2.5-9.5C36 10 32 10 30 11c-4 1-6 4-6 9c-1 0.5-1.5 1.5-1.5 3c0 2 1 3 2 5c1 3 3 5 4 6v3.5c0 1-1 2-2 2.5c-6 2-10 8-10 14" />
                  <circle cx="36" cy="24" r="5" />
                  <path d="M36 17v2M36 29v2M29 24h2M41 24h2" />
                </svg>
              </div>
              <span>Smarter</span>
            </div>
          </div>

          <p className={styles.futureFooter}>
            The next generation of spaces will be adaptive, immersive, and connected. Through technology, creativity, and engineering excellence, AVDYNAM is shaping environments that are smarter, more sustainable, and built to inspire the future.
          </p>
        </div>
      </section>

      <section className={`${styles.projects} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <span className="subtitle-red">Featured Projects</span>
            <h2 className="heading-huge">Engineered for Impact</h2>
            <p className="body-normal" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
              We don't deliver off-the-shelf installations—we engineer technology experiences tailored to each environment. Every deployment reflects our commitment to precision, performance, and timeless design, helping organizations create spaces that inspire confidence and leave lasting impressions.
            </p>
          </div>

          <div className={styles.projects3DGrid}>
            {/* Card 1: Smart Classrooms */}
            <div className={styles.projectCard3D}>
              <div className={styles.card3DInner}>
                <div 
                  className={styles.card3DImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className={styles.card3DOverlay}></div>
                <div className={styles.card3DContent}>
                  <span className={styles.card3DTag}>Smart Classrooms</span>
                  <h3 className={styles.card3DTitle}>Interactive Learning Spaces</h3>
                  <p className={styles.card3DDesc}>
                    Transforming education with smart interactive panels, structured classroom acoustics, and hybrid lecture streaming solutions designed for active student engagement.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: CCTV Solutions */}
            <div className={styles.projectCard3D}>
              <div className={styles.card3DInner}>
                <div 
                  className={styles.card3DImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className={styles.card3DOverlay}></div>
                <div className={styles.card3DContent}>
                  <span className={styles.card3DTag}>Surveillance Systems</span>
                  <h3 className={styles.card3DTitle}>AI-Powered Security Networks</h3>
                  <p className={styles.card3DDesc}>
                    Deploying advanced CCTV ecosystems with edge neural analytics, facial recognition, and remote tracking interfaces to provide proactive threat alerts.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Audio Acoustic Solutions */}
            <div className={styles.projectCard3D}>
              <div className={styles.card3DInner}>
                <div 
                  className={styles.card3DImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className={styles.card3DOverlay}></div>
                <div className={styles.card3DContent}>
                  <span className={styles.card3DTag}>Acoustic Engineering</span>
                  <h3 className={styles.card3DTitle}>High-Fidelity Sound Environments</h3>
                  <p className={styles.card3DDesc}>
                    Tuning spatial dimensions with coordinate-based digital signal processing, sound beam steering, and structural acoustic insulation arrays for crystal-clear coverage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLIENTS & PARTNERS */}
      <section className={`${styles.partners} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Strategic Partnerships</span>
            <h2 className="heading-huge">Powered By Collaboration</h2>
            <p className="body-normal" style={{ maxWidth: '600px', margin: '1rem auto 0' }}>
              We work alongside leading technology partners, system integrators, architects, consultants, and industry specialists to deliver intelligent environments that combine innovation, performance, and long-term value.
            </p>
          </div>

          <div className={styles.partnersGrid}>
            <div className={styles.partnerCell}>
              <span className={styles.partnerName}>Technology Integration</span>
              <span className={styles.partnerMeta}>Advanced systems, platforms, and enterprise-grade solutions.</span>
            </div>
            <div className={styles.partnerCell}>
              <span className={styles.partnerName}>Infrastructure Development</span>
              <span className={styles.partnerMeta}>Smart infrastructure engineered for scale,and future growth.</span>
            </div>
            <div className={styles.partnerCell}>
              <span className={styles.partnerName}>Experience Engineering</span>
              <span className={styles.partnerMeta}>Immersive technologies designed to engage, inspire, and transform.</span>
            </div>
            <div className={styles.partnerCell}>
              <span className={styles.partnerName}>Specialized Consulting</span>
              <span className={styles.partnerMeta}>Expert collaboration across planning, design, and execution phases.</span>
            </div>
          </div>
        </div>
      </section>


      {/* SECTION 7 — CTA */}
      <section className={`${styles.cta} section-padding`}>
        <div className={styles.ctaBg}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Let's Build Extraordinary Experiences</h2>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className="btn btn-accent btn-primary" style={{ border: 'none' }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white">
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
