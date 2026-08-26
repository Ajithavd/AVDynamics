import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
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

export default function ServicePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((s) => s.slug === slug);

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
            <p className={styles.heroDesc}>{service.introduction}</p>
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className={`${styles.capabilitiesSection} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="subtitle-red">Expertise</span>
            <h2 className="heading-huge">Key Capabilities</h2>
            <p className="body-large" style={{ maxWidth: '750px', margin: '1rem auto 0', color: 'var(--text-muted)' }}>
              Our engineering and integration disciplines are built around end-to-end design, execution, and support:
            </p>
          </div>

          <div className={styles.capabilitiesGrid}>
            {service.keyCapabilities.map((capability, idx) => (
              <div key={idx} className={styles.capabilityCard}>
                <div className={styles.checkIcon}>
                  <CheckCircle2 size={18} />
                </div>
                <span className={styles.capabilityText}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS & PARTNERSHIP VALUE */}
      <section className={`${styles.detailsSection} section-padding`}>
        <div className="container">
          <div className={styles.detailsSplit}>
            {/* Left side: Applications */}
            <div className={styles.detailsLeft}>
              <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Applications</span>
              <h2 className="heading-huge" style={{ color: '#ffffff', marginBottom: '2.5rem' }}>Where We Deploy</h2>
              <div className={styles.appsList}>
                {service.applications.map((app, idx) => (
                  <div key={idx} className={styles.appItem}>
                    <div className={styles.bulletDot}></div>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Why AV Dynamics Callout */}
            <div className={styles.detailsRight}>
              <div className={styles.whyAvCallout}>
                <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Why AV Dynamics</span>
                <h3>One Integrated Partner</h3>
                <p>{service.whyAvDynamics}</p>
                <div className={styles.calloutQuoteMark}>“</div>
              </div>
            </div>
          </div>
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
