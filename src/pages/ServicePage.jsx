import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  MessageSquare,
  Target,
  Layers,
  FileText,
  Rocket,
  Search,
  Palette,
  Cpu,
  Terminal,
  Code,
  Monitor,
  Smartphone,
  Database,
  ShieldCheck,
  Package,
  Activity,
  Shield,
  TrendingUp,
  LifeBuoy
} from 'lucide-react';
import styles from './ServicePage.module.css';
import { servicesData } from '../data/servicesData';
import { capabilityDetails } from '../data/capabilityDetails';

const renderServiceVector = (slug) => {
  switch (slug) {
    case 'cctv-solutions':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <defs>
            <radialGradient id="scanBeam" cx="10%" cy="10%" r="90%">
              <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--bg-primary)" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g stroke="rgba(0,0,0,0.03)" strokeWidth="1">
            <line x1="20" y1="0" x2="20" y2="240" /><line x1="60" y1="0" x2="60" y2="240" />
            <line x1="100" y1="0" x2="100" y2="240" /><line x1="140" y1="0" x2="140" y2="240" />
            <line x1="180" y1="0" x2="180" y2="240" /><line x1="220" y1="0" x2="220" y2="240" />
            <line x1="260" y1="0" x2="260" y2="240" /><line x1="300" y1="0" x2="300" y2="240" />
            <line x1="340" y1="0" x2="340" y2="240" /><line x1="380" y1="0" x2="380" y2="240" />
            <line x1="0" y1="30" x2="400" y2="30" /><line x1="0" y1="70" x2="400" y2="70" />
            <line x1="0" y1="110" x2="400" y2="110" /><line x1="0" y1="150" x2="400" y2="150" />
            <line x1="0" y1="190" x2="400" y2="190" />
          </g>
          <path d="M 40 40 L 360 120 L 320 220 Z" fill="url(#scanBeam)" />
          <path d="M 360 120 L 320 220" stroke="var(--accent-red)" strokeWidth="1.5" strokeDasharray="4,4" opacity="0.6" />
          <g transform="translate(340, 110)">
            <rect x="-15" y="-15" width="30" height="30" fill="none" stroke="var(--accent-red)" strokeWidth="1.5" />
            <line x1="-15" y1="0" x2="-5" y2="0" stroke="var(--accent-red)" strokeWidth="1.5" />
            <line x1="5" y1="0" x2="15" y2="0" stroke="var(--accent-red)" strokeWidth="1.5" />
            <line x1="0" y1="-15" x2="0" y2="-5" stroke="var(--accent-red)" strokeWidth="1.5" />
            <line x1="0" y1="5" x2="0" y2="15" stroke="var(--accent-red)" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="3" fill="var(--accent-red)" />
          </g>
          <g stroke="var(--text-dark)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(25, 25)">
            <path d="M 5 0 L 15 0 L 15 15 L 0 25" />
            <rect x="10" y="10" width="35" height="18" rx="3" fill="var(--bg-primary)" strokeWidth="2" />
            <path d="M 45 12 L 53 8 L 53 30 L 45 26 Z" fill="var(--bg-secondary)" strokeWidth="2" />
            <line x1="20" y1="10" x2="15" y2="2" />
          </g>
        </svg>
      );
    case 'audio-acoustics':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <g stroke="rgba(0,0,0,0.03)" strokeWidth="1">
            <line x1="0" y1="120" x2="400" y2="120" />
            <circle cx="200" cy="120" r="60" fill="none" stroke="rgba(0,0,0,0.02)" />
            <circle cx="200" cy="120" r="100" fill="none" stroke="rgba(0,0,0,0.02)" />
          </g>
          <g stroke="var(--accent-red)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.85">
            <path d="M 50 120 C 80 80, 100 160, 130 120 C 160 80, 180 160, 210 120 C 240 80, 260 160, 290 120 C 320 80, 340 160, 370 120" />
          </g>
          <g stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.25">
            <path d="M 50 120 C 70 140, 90 100, 120 120 C 150 140, 170 100, 200 120 C 230 140, 250 100, 280 120 C 310 140, 330 100, 370 120" />
          </g>
          <g transform="translate(180, 95)" stroke="var(--text-dark)" strokeWidth="2.5" fill="var(--bg-primary)" strokeLinejoin="round">
            <rect x="0" y="0" width="40" height="50" rx="4" />
            <circle cx="20" cy="15" r="8" strokeWidth="2" />
            <circle cx="20" cy="38" r="6" strokeWidth="2" />
          </g>
        </svg>
      );
    case 'led-solutions':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <defs>
            <pattern id="pixelGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="18" height="18" fill="var(--bg-secondary)" rx="2" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
              <circle cx="6" cy="9" r="2.5" fill="var(--accent-red)" opacity="0.3" />
              <circle cx="12" cy="9" r="2.5" fill="var(--text-dark)" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="400" height="240" fill="url(#pixelGrid)" rx="12" />
          <g transform="translate(140, 60)" stroke="var(--accent-red)" strokeWidth="2.5" fill="none" strokeLinecap="round">
            <rect x="0" y="0" width="120" height="80" rx="8" stroke="var(--text-dark)" />
            <path d="M 10 15 L 110 15" stroke="var(--accent-red)" strokeWidth="3" opacity="0.75" />
            <path d="M 10 35 L 70 35" stroke="var(--text-dark)" opacity="0.4" />
            <path d="M 10 55 L 90 55" stroke="var(--text-dark)" opacity="0.4" />
          </g>
        </svg>
      );
    case 'immersive-experiences':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <defs>
            <linearGradient id="portalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--text-dark)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="120" rx="90" ry="40" fill="none" stroke="url(#portalGlow)" strokeWidth="3" />
          <ellipse cx="200" cy="120" rx="130" ry="60" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
          <path d="M 200 220 L 110 120 L 290 120 Z" fill="url(#portalGlow)" opacity="0.5" />
          <g transform="translate(160, 95)" stroke="var(--text-dark)" strokeWidth="2" fill="var(--bg-primary)" strokeLinejoin="round">
            <polygon points="20,0 60,0 80,40 0,40" />
            <circle cx="40" cy="20" r="8" stroke="var(--accent-red)" strokeWidth="2.5" fill="none" />
          </g>
        </svg>
      );
    case 'venue-enhancement':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <rect x="30" y="20" width="340" height="200" rx="16" fill="var(--bg-secondary)" stroke="var(--border-light)" strokeWidth="2" />
          <line x1="30" y1="65" x2="370" y2="65" stroke="var(--border-light)" strokeWidth="2" />
          <circle cx="60" cy="42" r="6" fill="var(--accent-red)" />
          <circle cx="80" cy="42" r="6" fill="rgba(0,0,0,0.1)" />
          <rect x="300" y="35" width="45" height="15" rx="4" fill="rgba(0,0,0,0.04)" />
          <g transform="translate(60, 90)" stroke="var(--text-dark)" strokeWidth="2" strokeLinecap="round" fill="none">
            <line x1="0" y1="10" x2="160" y2="10" stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
            <line x1="0" y1="10" x2="90" y2="10" stroke="var(--accent-red)" strokeWidth="4" />
            <circle cx="90" cy="10" r="6" fill="var(--bg-primary)" stroke="var(--accent-red)" strokeWidth="2" />
            <line x1="0" y1="45" x2="160" y2="45" stroke="rgba(0,0,0,0.1)" strokeWidth="4" />
            <line x1="0" y1="45" x2="130" y2="45" stroke="var(--text-dark)" strokeWidth="4" />
            <circle cx="130" cy="45" r="6" fill="var(--bg-primary)" stroke="var(--text-dark)" strokeWidth="2" />
          </g>
          <g transform="translate(260, 95)" stroke="var(--text-dark)" strokeWidth="2" fill="none">
            <rect x="0" y="0" width="40" height="20" rx="10" fill="var(--accent-red)" stroke="var(--accent-red)" />
            <circle cx="30" cy="10" r="7" fill="var(--bg-primary)" />
            <rect x="0" y="35" width="40" height="20" rx="10" fill="rgba(0,0,0,0.06)" stroke="rgba(0,0,0,0.1)" />
            <circle cx="10" cy="45" r="7" fill="var(--bg-primary)" />
          </g>
        </svg>
      );
    case 'events':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <path d="M 20 40 L 380 40" stroke="var(--text-dark)" strokeWidth="4" strokeLinecap="round" />
          <path d="M 30 40 L 30 200" stroke="rgba(0,0,0,0.05)" strokeWidth="2" />
          <path d="M 370 40 L 370 200" stroke="rgba(0,0,0,0.05)" strokeWidth="2" />
          <defs>
            <linearGradient id="spotLightRed" x1="0%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="var(--accent-red)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--bg-primary)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="spotLightDark" x1="100%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="var(--text-dark)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="var(--bg-primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 100 40 L 260 220 L 180 220 Z" fill="url(#spotLightRed)" />
          <path d="M 300 40 L 220 220 L 140 220 Z" fill="url(#spotLightDark)" />
          <g transform="translate(90, 32)" fill="var(--bg-secondary)" stroke="var(--text-dark)" strokeWidth="2">
            <rect x="0" y="0" width="20" height="15" rx="3" />
            <line x1="10" y1="15" x2="10" y2="25" />
          </g>
          <g transform="translate(290, 32)" fill="var(--bg-secondary)" stroke="var(--text-dark)" strokeWidth="2">
            <rect x="0" y="0" width="20" height="15" rx="3" />
            <line x1="10" y1="15" x2="10" y2="25" />
          </g>
        </svg>
      );
    case 'software-solutions':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <rect x="40" y="20" width="320" height="200" rx="12" fill="var(--bg-secondary)" stroke="var(--border-light)" strokeWidth="2" />
          <circle cx="65" cy="40" r="5" fill="var(--accent-red)" />
          <circle cx="80" cy="40" r="5" fill="rgba(0,0,0,0.1)" />
          <circle cx="95" cy="40" r="5" fill="rgba(0,0,0,0.1)" />
          <g stroke="var(--text-dark)" strokeWidth="2.5" fill="none" strokeLinecap="round" transform="translate(65, 75)">
            <path d="M 10 10 L 0 10 L 0 50 L 10 50" opacity="0.3" />
            <path d="M 260 10 L 270 10 L 270 50 L 260 50" opacity="0.3" />
            <line x1="25" y1="20" x2="180" y2="20" stroke="var(--accent-red)" strokeWidth="3" opacity="0.85" />
            <line x1="25" y1="40" x2="120" y2="40" stroke="var(--text-dark)" strokeWidth="3" opacity="0.6" />
            <line x1="45" y1="60" x2="200" y2="60" stroke="rgba(0,0,0,0.15)" strokeWidth="3" />
            <line x1="45" y1="80" x2="150" y2="80" stroke="rgba(0,0,0,0.15)" strokeWidth="3" />
            <line x1="25" y1="100" x2="90" y2="100" stroke="var(--accent-red)" strokeWidth="3" opacity="0.85" />
          </g>
        </svg>
      );
    case 'digital-marketing':
      return (
        <svg viewBox="0 0 400 240" className={styles.surveillanceSvg}>
          <g stroke="rgba(0,0,0,0.03)" strokeWidth="1">
            <line x1="50" y1="200" x2="350" y2="200" />
            <line x1="50" y1="50" x2="50" y2="200" />
          </g>
          <path d="M 70 180 L 140 140 L 210 150 L 280 80 L 340 50" fill="none" stroke="var(--accent-red)" strokeWidth="3" strokeLinecap="round" />
          <circle cx="340" cy="50" r="6" fill="var(--accent-red)" />
          <rect x="90" y="150" width="25" height="50" rx="4" fill="rgba(0,0,0,0.05)" />
          <rect x="160" y="110" width="25" height="90" rx="4" fill="rgba(0,0,0,0.05)" />
          <rect x="230" y="130" width="25" height="70" rx="4" fill="rgba(0,0,0,0.05)" />
          <rect x="300" y="80" width="25" height="120" rx="4" fill="var(--text-dark)" opacity="0.08" />
        </svg>
      );
    default:
      return null;
  }
};

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);
  const [activeCapability, setActiveCapability] = useState(0);

  useEffect(() => {
    setActiveCapability(0);
  }, [slug]);

  useEffect(() => {
    if (!service) {
      navigate('/', { replace: true });
    }
  }, [service, navigate]);

  if (!service) {
    return null;
  }

  return (
    <div className={styles.service}>
      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBg} 
          style={{ backgroundImage: `url(${service.image})` }}
        ></div>
        <div className={styles.heroOverlay}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.heroContent}>
            <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Sector Expertise</span>
            <h1 className={styles.heroTitle}>{service.title}</h1>
            <p className={styles.heroDesc}>{service.desc}</p>
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS / SERVICES */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="subtitle-red">Key Capabilities</span>
            <h2 className="heading-huge">Our Core Offerings</h2>
            <p className="body-normal" style={{ maxWidth: '600px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
              Click on any capability below to explore detailed specifications, key features, and strategic value.
            </p>
          </div>

          <div className={styles.offeringsGrid}>
            {service.services.map((subService, idx) => {
              const isActive = activeCapability === idx;
              return (
                <div 
                  key={idx} 
                  className={`${styles.offeringCard} ${isActive ? styles.offeringCardActive : ''} ${styles.offeringCardClickable}`}
                  onClick={() => setActiveCapability(idx)}
                >
                  <span className={styles.offeringNum}>Capability 0{idx + 1}</span>
                  <h3>{subService.title}</h3>
                  <p>{subService.desc}</p>
                  <span className={styles.exploreLink}>
                    {isActive ? 'Showing Details' : 'Click to Explore'} &rarr;
                  </span>
                </div>
              );
            })}
          </div>

          {/* FULL WIDTH DETAILS BOX FOR SERVICE CAPABILITIES */}
          {capabilityDetails[slug] && capabilityDetails[slug][activeCapability] && (
            <div className={styles.detailBox} key={`${slug}-${activeCapability}`}>
              {(() => {
                const details = capabilityDetails[slug][activeCapability];
                return (
                  <div className={styles.detailBoxGrid}>
                    <div className={styles.detailBoxLeft}>
                      <span className={styles.detailSub}>Capability Details</span>
                      <h3 className={styles.detailTitle}>{details.title}</h3>
                      {details.longDesc.map((para, pIdx) => (
                        <p key={pIdx} className={styles.detailPara}>
                          {para}
                        </p>
                      ))}

                      <div className={styles.whyMattersCard}>
                        <h4>Why It Matters</h4>
                        <p>{details.whyMatters}</p>
                      </div>
                    </div>

                    <div className={styles.detailBoxRight}>
                      {/* Custom Vector Graphic matching the slug */}
                      <div className={styles.vectorImageWrapper}>
                        {renderServiceVector(slug)}
                      </div>

                      <div className={styles.featuresSection}>
                        <h4>Key Features</h4>
                        <ul className={styles.featuresList}>
                          {details.features.map((feature, fIdx) => {
                            const IconComponent = {
                              Cpu: Cpu,
                              Target: Target,
                              Activity: Activity,
                              ShieldCheck: ShieldCheck,
                              TrendingUp: TrendingUp,
                              Layers: Layers,
                              Monitor: Monitor,
                              Smartphone: Smartphone,
                              Database: Database,
                              FileText: FileText,
                              MessageSquare: MessageSquare,
                              Rocket: Rocket,
                              Search: Search,
                              Palette: Palette,
                              Terminal: Terminal,
                              Code: Code,
                              Package: Package,
                              Shield: Shield,
                              LifeBuoy: LifeBuoy
                            }[feature.icon] || Cpu;

                            return (
                              <li key={fIdx}>
                                <div className={styles.featureIcon}>
                                  <IconComponent size={18} />
                                </div>
                                <div>
                                  <strong>{feature.title}</strong>
                                  <span>{feature.desc}</span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </section>
      {/* CONDITIONALLY RENDER OUR PROJECTS SECTION (For Events page only) */}
      {slug === 'events' && (
        <section className={`${styles.projectsSection} section-padding`}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="subtitle-red">Our Projects</span>
              <h2 className="heading-huge">AVARAE</h2>
            </div>

            <div className={styles.projectsGrid}>
              {/* Project 1 */}
              <div className={styles.projectCard}>
                <div 
                  className={styles.projectImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className={styles.projectContent}>
                  <h3>AVARAE</h3>
                  <p>
                    AVARAE represents a premium experiential platform where immersive technology meets largescale event production and destination entertainment. Designed to captivate audiences globally, it delivers memorable experiences driven by creativity, innovation, and immersive storytelling.
                  </p>
                </div>
              </div>

              {/* Project 2 */}
              <div className={styles.projectCard}>
                <div 
                  className={styles.projectImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80')" }}
                ></div>
                <div className={styles.projectContent}>
                  <h3>AVARAE_2</h3>
                  <p>
                    Pilot urban delivery programme covering 14 km² with autonomous routing and real-time logistics integration with partner fulfilment centres.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}





      {/* CONDITIONALLY RENDER DEVELOPMENT PROCESS Flowchart (For Software Solutions page) */}
      {slug === 'software-solutions' && (
        <section className={styles.processSection}>
          <div className="container">
            <div className={styles.processHeader}>
              <span className="subtitle-red">Methodology</span>
              <h2 className={styles.processMainTitle}>Our Development Process: From Insight to Impact</h2>
              <p className="body-large" style={{ color: 'var(--text-muted-dark)', maxWidth: '800px', lineHeight: '1.7', marginTop: '1.5rem' }}>
                Our approach to development is grounded in transforming your vision into a powerful digital solution. At each step, we combine innovation, collaboration, and technical expertise to ensure the final product meets your needs and exceeds expectations.
              </p>
            </div>

            <div className={styles.processTimeline}>
              {/* Phase 1 */}
              <div className={styles.processColumn}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>1</div>
                  <h3>Define Requirement</h3>
                </div>
                <div className={styles.phaseList}>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><MessageSquare size={16} /></div>
                    <span>Customer Enquiry</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Target size={16} /></div>
                    <span>Define Goals and Objectives</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Layers size={16} /></div>
                    <span>Project Scoping</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><FileText size={16} /></div>
                    <span>Project Proposal</span>
                  </div>
                </div>
              </div>

              {/* Phase 2 */}
              <div className={styles.processColumn}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>2</div>
                  <h3>Ideation</h3>
                </div>
                <div className={styles.phaseList}>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Rocket size={16} /></div>
                    <span>Project Kickoff</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Search size={16} /></div>
                    <span>Detailed Analysis</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Palette size={16} /></div>
                    <span>UI Design</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Cpu size={16} /></div>
                    <span>Select Techstack</span>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className={styles.processColumn}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>3</div>
                  <h3>Development</h3>
                </div>
                <div className={styles.phaseList}>
                  <div className={styles.phaseItemMain}>
                    <div className={styles.phaseItem}>
                      <div className={styles.itemIcon}><Terminal size={16} /></div>
                      <span style={{ fontWeight: '600', color: 'var(--text-light)' }}>Application Development</span>
                    </div>
                    <div className={styles.subBranches}>
                      <div className={styles.subBranchItem}>
                        <Code size={12} style={{ color: 'var(--accent-red)' }} />
                        <span>Back-end Web Development</span>
                      </div>
                      <div className={styles.subBranchItem}>
                        <Monitor size={12} style={{ color: 'var(--accent-red)' }} />
                        <span>Front-end Web Development</span>
                      </div>
                      <div className={styles.subBranchItem}>
                        <Smartphone size={12} style={{ color: 'var(--accent-red)' }} />
                        <span>Mobile App Development</span>
                      </div>
                      <div className={styles.subBranchItem}>
                        <Database size={12} style={{ color: 'var(--accent-red)' }} />
                        <span>Database Management</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><ShieldCheck size={16} /></div>
                    <span>Functional & Security Testing</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Package size={16} /></div>
                    <span>Build & Release</span>
                  </div>
                </div>
              </div>

              {/* Phase 4 */}
              <div className={styles.processColumn}>
                <div className={styles.phaseHeader}>
                  <div className={styles.phaseNumber}>4</div>
                  <h3>Support & Maintenance</h3>
                </div>
                <div className={styles.phaseList}>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Activity size={16} /></div>
                    <span>Monitoring & Bug Fixes</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><Shield size={16} /></div>
                    <span>Security & Performance Updates</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><TrendingUp size={16} /></div>
                    <span>Feature Enhancements</span>
                  </div>
                  <div className={styles.phaseItem}>
                    <div className={styles.itemIcon}><LifeBuoy size={16} /></div>
                    <span>Technical Support & Documentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


    </div>
  );
}
