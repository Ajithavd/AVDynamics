import { useState } from 'react';
import { 
  Eye, 
  Target, 
  X, 
  Award, 
  Globe, 
  Workflow,
  Star,
  Handshake,
  Users,
  Cpu,
  Compass
} from 'lucide-react';
import styles from './About.module.css';

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(4); // Default to current year 2026

  const milestones = [
    {
      year: '2016',
      title: 'Founding & First Flagship',
      desc: "AV Dynamics was founded with a clear goal to disrupt legacy AV installations by introducing dynamic coordinate-based audio frameworks. We successfully delivered our first flagship command center installation.",
      products: 'Flagship Command Center'
    },
    {
      year: '2019',
      title: 'Display Innovation & Nexlume',
      desc: "Expanded into proprietary hardware development by launching Nexlume—high-refresh direct-view LED displays. The system achieved extreme sunlight visibility and active refresh calibration.",
      products: 'Nexlume LED Displays'
    },
    {
      year: '2021',
      title: 'Infrastructure Scaling & NDUR',
      desc: "Designed and deployed the NDUR rugged enterprise server backbone. Deployed across multi-curve airport transits and security monitoring centers globally.",
      products: 'NDUR Server Backbones'
    },
    {
      year: '2023',
      title: 'Immersive Acoustics & SPATIAL',
      desc: "Engineered SPATIAL spatial audio controllers to deliver precision sonic beam steering and vibration-dampened acoustics isolation across institutional and luxury hospitality venues.",
      products: 'SPATIAL Sound Arrays'
    },
    {
      year: '2026',
      title: 'Present-Day Technology Group & SENTINEL',
      desc: "Launched SENTINEL AI-driven edge surveillance ecosystems. AV Dynamics converges into a multi-brand technology group engineering next-gen intelligent spaces for enterprise and government trust.",
      products: 'SENTINEL AI Surveillance & Suite'
    }
  ];

  const svgNodes = [
    { year: '2016', x: 50, y: 340 },
    { year: '2019', x: 150, y: 270 },
    { year: '2021', x: 50, y: 200 },
    { year: '2023', x: 150, y: 130 },
    { year: '2026', x: 100, y: 60 }
  ];


  return (
    <div className={styles.about}>
      {/* SECTION 1 — COMPANY INTRODUCTION */}
      <section className={`${styles.intro} section-padding`}>
        <div className="container">
          <div className={styles.introSplit}>
            <div className={styles.introLeft}>
              <div 
                className={styles.imageContainer} 
                onClick={() => setLightboxOpen(true)}
                title="Click to expand view"
              >
                <div className={styles.introImage}></div>
              </div>
            </div>
            
            <div className={styles.introRight}>
              <span className="subtitle-red">Who We Are</span>
              <h1 className="heading-huge" style={{ marginBottom: '2.5rem' }}>About AV Dynamics</h1>
              <p className="body-large" style={{ color: 'var(--text-dark)', marginBottom: '1.5rem', fontWeight: '500' }}>
                Building the Systems Behind Better Experiences.
              </p>
              <p className="body-normal" style={{ marginBottom: '1.5rem' }}>
                AV Dynamics is a system integration and solution architecture company built around one belief: complex 
challenges need connected thinking. 
With more than 20 years of experience across our leadership and project capabilities, we bring together 
technology, infrastructure, engineering, software and creative execution to design solutions that work 
as one ecosystem. 
Our work extends across surveillance, audio and acoustics, LED and visual technologies, immersive 
environments, venue transformation, events, software and digital marketing. This multidisciplinary 
capability allows us to move beyond isolated products and deliver complete solutions shaped around 
the real needs of each project. a
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox full screen modal */}
      {lightboxOpen && (
        <div className={styles.lightbox} onClick={() => setLightboxOpen(false)}>
          <button className={styles.lightboxClose}>
            <X size={32} />
          </button>
          <img 
            src="/about1.png" 
            alt="AVDYNAM Premium Workplace Layout" 
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}


      {/* SECTION 2 — VISION, MISSION & PHILOSOPHY */}
      <section className={`${styles.vision} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Purpose</span>
            <h2 className="heading-huge">Building the Systems Behind Better Experiences</h2>
            <p className="body-large" style={{ maxWidth: '850px', margin: '2rem auto 0', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              AV Dynamics is a system integration and solution architecture company built around one belief: complex 
              challenges need connected thinking. With more than 20 years of experience across our leadership and project capabilities, we bring together technology, infrastructure, engineering, software and creative execution to design solutions that work as one ecosystem. Our work extends across surveillance, audio and acoustics, LED and visual technologies, immersive environments, venue transformation, events, software and digital marketing. This multidisciplinary capability allows us to move beyond isolated products and deliver complete solutions shaped around the real needs of each project.
            </p>
          </div>
          
          <div className={styles.visionGrid}>
            {/* Card 1: Our Vision */}
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>
                <Eye size={28} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a globally trusted partner for integrated technology, infrastructure and experience solutions 
                across the spaces where people live, work, learn, perform and connect.
              </p>
            </div>

            {/* Card 2: Our Mission */}
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>
                <Target size={28} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To architect and integrate purposeful technology solutions that create measurable value, stronger 
                operations and meaningful experiences.
              </p>
            </div>

            {/* Card 3: Our Philosophy */}
            <div className={styles.visionCard}>
              <div className={styles.visionIcon}>
                <Compass size={28} />
              </div>
              <h3>Our Philosophy</h3>
              <p>
                Technology is only valuable when it works together. Our role is to connect the right systems, expertise 
                and ideas into an outcome greater than the sum of its parts.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* NEW SECTION 3.3 — TECHNOLOGY + CREATIVITY (Immersive Split) */}
      <section className={`${styles.techCreative} section-padding`}>
        <div className={styles.techCreativeBg}></div>
        <div className="container">
          <div className={styles.techCreativeSplit}>
            <div className={styles.techCreativeLeft}>
              <span className="subtitle-red">The Intersection</span>
              <h2 className="heading-huge" style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>Technology + Creativity</h2>
              <p className="body-large" style={{ color: 'var(--text-muted-dark)', lineHeight: '1.8' }}>
                AV Dynamics sits at the intersection of engineering and storytelling. Our teams pair technical disciplines — acoustics, network design, control programming — with creative direction in lighting, motion, and spatial design, ensuring every system we build serves both function and feeling.
              </p>
            </div>
            <div className={styles.techCreativeRight}>
              <div className={styles.vectorGraphicWrapper}>
                <svg viewBox="0 0 400 400" className={styles.vectorGraphic}>
                  {/* Glowing core representing intersection */}
                  <defs>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--bg-dark)" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--accent-red)" />
                      <stop offset="100%" stopColor="#ff7878" />
                    </linearGradient>
                  </defs>
                  
                  {/* Ambient Glow */}
                  <circle cx="200" cy="200" r="180" fill="url(#glow)" />
                  
                  {/* Geometric Engineering Lines (Technology) */}
                  <g stroke="#ffffff" strokeWidth="1" opacity="0.15">
                    <circle cx="200" cy="200" r="120" fill="none" />
                    <circle cx="200" cy="200" r="80" fill="none" />
                    <line x1="80" y1="200" x2="320" y2="200" />
                    <line x1="200" y1="80" x2="200" y2="320" />
                    <line x1="115" y1="115" x2="285" y2="285" />
                    <line x1="115" y1="285" x2="285" y2="115" />
                  </g>
                  
                  {/* Organic Waveforms & Fluid Path (Creativity) */}
                  <path 
                    d="M 80 200 Q 140 100, 200 200 T 320 200" 
                    fill="none" 
                    stroke="url(#lineGrad)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    opacity="0.85"
                  />
                  <path 
                    d="M 80 200 Q 140 300, 200 200 T 320 200" 
                    fill="none" 
                    stroke="var(--accent-red)" 
                    strokeWidth="2" 
                    strokeDasharray="4,4"
                    opacity="0.6"
                  />
                  
                  {/* Intersecting Nodes */}
                  <circle cx="200" cy="200" r="8" fill="var(--accent-red)" />
                  <circle cx="200" cy="200" r="14" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" />
                  
                  <circle cx="140" cy="150" r="5" fill="#ffffff" opacity="0.8" />
                  <line x1="140" y1="150" x2="200" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                  
                  <circle cx="260" cy="250" r="5" fill="#ffffff" opacity="0.8" />
                  <line x1="260" y1="250" x2="200" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.3" />

                  <circle cx="140" cy="250" r="5" fill="#ffffff" opacity="0.8" />
                  <line x1="140" y1="250" x2="200" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                  
                  <circle cx="260" cy="150" r="5" fill="#ffffff" opacity="0.8" />
                  <line x1="260" y1="150" x2="200" y2="200" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY AVDYNAM */}
      <section className={`${styles.why} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="subtitle-red">Advantages</span>
            <h2 className="heading-huge">Why Global Brands Partner with Us</h2>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Award size={32} />
              </div>
              <h3>Certified Elite Expertise</h3>
              <p>Our integration teams carry top industry certifications in Dante networks, Crestron systems, and structural safety protocols.</p>
            </div>
            
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Workflow size={32} />
              </div>
              <h3>Vendor-Agnostic Flexibility</h3>
              <p>We combine the world's finest platforms—Sony, Samsung, Bose, and Crestron—under unified, bespoke software dashboards.</p>
            </div>

            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>
                <Globe size={32} />
              </div>
              <h3>Global Logistics & Support</h3>
              <p>We deploy teams worldwide, guaranteeing continuous uptime with dedicated remote diagnostics and on-call engineers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.5 — IT'S ABOUT THE PEOPLE */}
      <section className={`${styles.people} section-padding`}>
        <div className="container">
          <div className={styles.peopleSplit}>
            <div className={styles.peopleLeft}>
              <span className="subtitle-red">Our Core Assets</span>
              <h2 className="heading-huge" style={{ marginBottom: '2rem' }}>It's about the people</h2>
              <p className="body-large" style={{ color: 'var(--text-dark)', marginBottom: '3rem', lineHeight: '1.6' }}>
                Behind every great product is a team of people working with purpose and passion. We align our expertise with user needs and client goals to create a meaningful, lasting impact.
              </p>
              
              {/* Premium Line Art SVG Illustration */}
              <div className={styles.illustrationWrapper}>
                <svg viewBox="0 0 500 300" className={styles.peopleSvg}>
                  {/* Background grid dots */}
                  <defs>
                    <pattern id="dotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#EAEAEA" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dotGrid)" rx="12" />
                  
                  {/* Abstract line art representing 3 team members collaborating */}
                  <g fill="none" stroke="var(--accent-red)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
                    {/* Monitor / Desk */}
                    <path d="M 170 210 L 330 210" />
                    <rect x="200" y="110" width="100" height="70" rx="4" strokeWidth="2" />
                    <path d="M 230 180 L 220 210 L 280 210 L 270 180" strokeWidth="2" />
                    
                    {/* Person 1 (Left) */}
                    <circle cx="130" cy="110" r="22" />
                    <path d="M 90 190 C 90 150, 170 150, 170 190" />
                    <path d="M 145 160 Q 170 175, 200 160" strokeDasharray="3,3" />
                    
                    {/* Person 2 (Center back) */}
                    <circle cx="250" cy="70" r="22" />
                    <path d="M 210 140 C 210 110, 290 110, 290 140" />
                    
                    {/* Person 3 (Right) */}
                    <circle cx="370" cy="120" r="22" />
                    <path d="M 330 200 C 330 160, 410 160, 410 200" />
                    <path d="M 350 165 Q 320 180, 295 165" strokeDasharray="3,3" />

                    {/* Connecting node lines */}
                    <path d="M 130 88 L 228 70" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 370 98 L 272 70" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="4,4" />
                    <path d="M 250 92 L 250 110" stroke="var(--text-muted)" strokeWidth="1" strokeDasharray="4,4" />
                  </g>
                </svg>
              </div>
            </div>
            
            <div className={styles.peopleRight}>
              {/* Card 1 */}
              <div className={styles.peopleCard}>
                <h3>Dedicated teams</h3>
                <p>
                  Our teams stay together across projects, building trust, rhythm, and a shared sense of ownership. This stability leads to better collaboration and even better results.
                </p>
              </div>

              {/* Card 2 */}
              <div className={styles.peopleCard}>
                <h3>Full-time and In-house</h3>
                <p>
                  Everyone at AVDYNAM is a full-time, in-house expert. That means total focus, seamless communication, and a deep commitment to delivering our best every time.
                </p>
              </div>

              {/* Card 3 */}
              <div className={styles.peopleCard}>
                <h3>Passionate experts</h3>
                <p>
                  We love what we do—and it shows. Our teams are constantly learning, growing, and pushing boundaries to craft digital products that truly make a difference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Old duplicate sections removed to prevent repetition */}

      {/* SECTION 7 — INTERACTIVE COMPANY JOURNEY (Dark Section) */}
      <section className={`${styles.journey} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Timeline / Journey</span>
            <h2 className="heading-huge" style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>Timeline / Journey</h2>
            <p className="body-large" style={{ maxWidth: '850px', margin: '0 auto', color: 'var(--text-muted-dark)', lineHeight: '1.7' }}>
              An interactive milestone timeline tracing AV Dynamics' growth — from founding and first flagship installation, through expansion into proprietary product lines (Nexlume, NDUR, SPATIAL, SENTINEL, and more), to the present-day multi-brand technology group.
            </p>
          </div>

          <div className={styles.journeyInteractive}>
            {/* Left: SVG RoadMap / Node Selector */}
            <div className={styles.journeyLeft}>
              <div className={styles.svgWrapper}>
                <svg viewBox="0 0 200 400" className={styles.journeySvg}>
                  <defs>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="var(--bg-dark)" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Winding Road Map Connection Path (Inactive Base) */}
                  <path 
                    d="M 50 340 C 130 340, 150 310, 150 270 C 150 230, 50 240, 50 200 C 50 160, 150 170, 150 130 C 150 90, 100 80, 100 60" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.08)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                  />

                  {/* Active Progress Path Overlay */}
                  <path 
                    d="M 50 340 C 130 340, 150 310, 150 270 C 150 230, 50 240, 50 200 C 50 160, 150 170, 150 130 C 150 90, 100 80, 100 60" 
                    fill="none" 
                    stroke="var(--accent-red)" 
                    strokeWidth="4" 
                    strokeLinecap="round"
                    strokeDasharray="470"
                    strokeDashoffset={470 - (activeIndex * 117)}
                  />

                  {/* Interactive Milestone Nodes */}
                  {svgNodes.map((node, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <g 
                        key={idx} 
                        className={`${styles.svgNode} ${isActive ? styles.svgNodeActive : ''}`} 
                        onClick={() => setActiveIndex(idx)}
                      >
                        {/* Glow under active node */}
                        {isActive && (
                          <circle cx={node.x} cy={node.y} r="25" fill="url(#nodeGlow)" />
                        )}
                        
                        {/* Interactive circle */}
                        <circle 
                          cx={node.x} 
                          cy={node.y} 
                          r={isActive ? 12 : 8} 
                          className={styles.nodeCircle}
                        />
                        

                        
                        {/* Node Label Text */}
                        <text 
                          x={node.x + (node.x > 100 ? -24 : 24)} 
                          y={node.y + 5} 
                          className={styles.nodeText}
                          textAnchor={node.x > 100 ? "end" : "start"}
                        >
                          {node.year}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>

            {/* Right: Milestone Detail Card */}
            <div className={styles.journeyRight}>
              {/* Year Selectors for Mobile (horizontal scroll buttons) */}
              <div className={styles.mobileYearBar}>
                {milestones.map((item, idx) => (
                  <button
                    key={idx}
                    className={`${styles.mobileYearBtn} ${activeIndex === idx ? styles.mobileYearBtnActive : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.year}
                  </button>
                ))}
              </div>

              {/* Detail Card Content */}
              <div className={styles.milestoneCard}>
                {/* Huge Watermarked Year */}
                <div className={styles.watermarkYear}>
                  {milestones[activeIndex].year}
                </div>

                <div key={activeIndex} className={styles.cardAnimWrapper}>
                  <span className={styles.milestoneMeta}>AV Dynamics Milestone</span>
                  <h3 className={styles.milestoneTitle}>
                    {milestones[activeIndex].title}
                  </h3>
                  <p className={styles.milestoneDesc}>
                    {milestones[activeIndex].desc}
                  </p>
                  
                  <div className={styles.milestoneFooter}>
                    <span className={styles.footerLabel}>Key Products Introduced</span>
                    <span className={styles.footerVal}>{milestones[activeIndex].products}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4.6 — WHAT WE STRONGLY BELIEVE IN */}
      <section className={`${styles.values} section-padding`}>
        <div className="container">
          <div className={styles.valuesHeader}>
            <span className="subtitle-red">Our Beliefs</span>
            <h2 className="heading-huge">What we strongly believe in!</h2>
            <p className="body-large" style={{ color: 'var(--text-muted)', marginTop: '1.5rem', maxWidth: '800px', lineHeight: '1.6' }}>
              When challenges arise, our shared values guide us. They shape how we work, and how we support each other—and our clients—every step of the way.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1: Transparency */}
            <div className={styles.valueCell}>
              <div className={styles.shapeContainer}>
                <div className={`${styles.geomShape} ${styles.shapeDiamond}`}>
                  <Eye size={24} className={styles.shapeIcon} />
                </div>
              </div>
              <div className={styles.valueText}>
                <h3>Transparency</h3>
                <p>
                  We believe in honest conversations and open collaboration. By being clear and upfront, we build trust, solve problems faster, and create lasting partnerships.
                </p>
              </div>
            </div>

            {/* Value 2: Professionalism */}
            <div className={styles.valueCell}>
              <div className={styles.shapeContainer}>
                <div className={`${styles.geomShape} ${styles.shapeCircle}`}>
                  <Star size={24} className={styles.shapeIcon} />
                </div>
              </div>
              <div className={styles.valueText}>
                <h3>Professionalism</h3>
                <p>
                  We hold ourselves to high standards and deliver with care and consistency. We're committed to finding smart solutions, together, through teamwork and shared ownership.
                </p>
              </div>
            </div>

            {/* Value 3: Respectfulness */}
            <div className={styles.valueCell}>
              <div className={styles.shapeContainer}>
                <div className={`${styles.geomShape} ${styles.shapeHexagon}`}>
                  <Handshake size={24} className={styles.shapeIcon} />
                </div>
              </div>
              <div className={styles.valueText}>
                <h3>Respectfulness</h3>
                <p>
                  Kindness matters. We value every voice, listen with empathy, and support one another. That respect strengthens our team and fuels better outcomes.
                </p>
              </div>
            </div>

            {/* Value 4: Inclusivity */}
            <div className={styles.valueCell}>
              <div className={styles.shapeContainer}>
                <div className={`${styles.geomShape} ${styles.shapeTriangle}`}>
                  <Users size={24} className={styles.shapeIcon} />
                </div>
              </div>
              <div className={styles.valueText}>
                <h3>Inclusivity</h3>
                <p>
                  Diverse perspectives make us better. We embrace differences, celebrate individuality, and create space for everyone to thrive, collaborate, and innovate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
