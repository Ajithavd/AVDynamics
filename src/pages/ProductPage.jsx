import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { CheckCircle2, MessageSquare, ShieldAlert, FileText } from 'lucide-react';
import styles from './ProductPage.module.css';
import { productsData } from '../data/productsData';
import { productSectionsData } from '../data/productSectionsData';

const renderProductVector = (slug, sectionIndex) => {
  const accentRed = 'var(--accent-red)';
  const textDark = 'var(--text-dark)';
  const borderLight = 'var(--border-light)';
  const bgSecondary = 'var(--bg-secondary)';
  const bgPrimary = 'var(--bg-primary)';

  switch (slug) {
    case 'nexlume':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto' }}>
            <defs>
              <pattern id="ledPulse" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect width="18" height="18" fill={bgSecondary} rx="2" />
                <circle cx="9" cy="9" r="3.5" fill={accentRed} style={{ animation: 'pulseGlow 2s infinite ease-in-out' }} />
              </pattern>
            </defs>
            <rect width="400" height="240" fill="url(#ledPulse)" rx="16" />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', stroke: textDark, fill: 'none', strokeWidth: 2 }}>
            <rect x="50" y="40" width="300" height="160" rx="12" stroke={borderLight} />
            <rect x="75" y="60" width="250" height="120" rx="8" fill={bgSecondary} />
            <path d="M100 120 L300 120" stroke={accentRed} strokeWidth="3" strokeDasharray="6,6" style={{ animation: 'flowLine 4s infinite linear' }} />
            <circle cx="200" cy="120" r="10" fill={accentRed} style={{ animation: 'pulseGlow 1.5s infinite' }} />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none' }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" stroke={borderLight} strokeWidth="2" />
            <g stroke={textDark} strokeWidth="1.5" opacity="0.3">
              <line x1="50" y1="40" x2="350" y2="200" />
              <line x1="350" y1="40" x2="50" y2="200" />
              <circle cx="200" cy="120" r="60" />
            </g>
            <line x1="20" y1="0" x2="380" y2="0" stroke={accentRed} strokeWidth="3" style={{ animation: 'sweepLine 4s infinite ease-in-out' }} />
          </svg>
        );
      }

    case 'ndur':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2.5 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="150" cy="20" r="3" fill="#3b82f6" style={{ animation: 'waterDrip 2s infinite linear' }} />
            <circle cx="200" cy="10" r="3.5" fill="#3b82f6" style={{ animation: 'waterDrip 1.7s infinite linear 0.3s' }} />
            <circle cx="250" cy="30" r="2.5" fill="#3b82f6" style={{ animation: 'waterDrip 2.2s infinite linear 0.6s' }} />
            <path d="M200 80 C240 80, 260 100, 260 140 C260 180, 200 210, 200 210 C200 210, 140 180, 140 140 C140 100, 160 80, 200 80 Z" stroke={accentRed} fill={bgPrimary} />
            <path d="M200 105 L200 185" stroke={accentRed} strokeDasharray="4,4" />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="80" cy="70" r="25" fill="#f59e0b" stroke="#f59e0b" />
            <g stroke="#f59e0b" strokeWidth="3" opacity="0.6">
              <line x1="80" y1="30" x2="80" y2="15" />
              <line x1="80" y1="110" x2="80" y2="125" />
              <line x1="40" y1="70" x2="25" y2="70" />
              <line x1="120" y1="70" x2="135" y2="70" />
              <line x1="52" y1="42" x2="40" y2="30" />
              <line x1="108" y1="98" x2="120" y2="110" />
            </g>
            <rect x="180" y="80" width="160" height="100" rx="8" stroke={textDark} fill={bgPrimary} />
            <path d="M195 95 L325 95" stroke={accentRed} strokeWidth="3" />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <path d="M30 60 C120 40, 200 80, 370 60" stroke={textDark} opacity="0.25" strokeDasharray="5,5" />
            <path d="M30 120 C120 100, 200 140, 370 120" stroke={accentRed} opacity="0.85" strokeWidth="3" strokeDasharray="8,8" style={{ animation: 'flowLine 3s infinite linear' }} />
            <path d="M30 180 C120 160, 200 200, 370 180" stroke={textDark} opacity="0.25" strokeDasharray="5,5" />
            <circle cx="200" cy="120" r="8" fill={textDark} />
          </svg>
        );
      }

    case 'spatial':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', stroke: textDark, strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" stroke={borderLight} />
            <circle cx="200" cy="120" r="10" fill={accentRed} />
            <circle cx="200" cy="120" r="40" stroke={accentRed} style={{ animation: 'pulseGlow 2s infinite ease-in-out' }} />
            <circle cx="200" cy="120" r="80" opacity="0.5" style={{ animation: 'pulseGlow 2s infinite ease-in-out 0.5s' }} />
            <circle cx="200" cy="120" r="120" opacity="0.2" style={{ animation: 'pulseGlow 2s infinite ease-in-out 1s' }} />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="100" cy="70" r="8" fill={accentRed} style={{ animation: 'pulseGlow 1.5s infinite' }} />
            <circle cx="300" cy="70" r="8" fill={accentRed} style={{ animation: 'pulseGlow 1.5s infinite 0.5s' }} />
            <circle cx="200" cy="180" r="8" fill={accentRed} style={{ animation: 'pulseGlow 1.5s infinite 1s' }} />
            <polygon points="100,70 300,70 200,180" stroke={textDark} opacity="0.2" strokeDasharray="4,4" />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 3 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <path d="M 50 120 C 100 60, 150 180, 200 120 C 250 60, 300 180, 350 120" stroke={accentRed} style={{ animation: 'flowLine 5s infinite linear' }} />
            <path d="M 50 120 C 100 90, 150 150, 200 120 C 250 90, 300 150, 350 120" stroke={textDark} opacity="0.25" strokeWidth="2" />
          </svg>
        );
      }

    case 'sentinel':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none' }}>
            <defs>
              <linearGradient id="scanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={accentRed} stopOpacity="0.3" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <polygon points="80,50 320,190 200,190" fill="url(#scanGrad)" style={{ transformOrigin: '80px 50px', animation: 'radarScan 8s infinite linear' }} />
            <circle cx="80" cy="50" r="10" fill={textDark} />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="120" cy="80" r="12" fill={bgPrimary} stroke={textDark} />
            <circle cx="280" cy="80" r="12" fill={bgPrimary} stroke={textDark} />
            <circle cx="200" cy="160" r="12" fill={bgPrimary} stroke={accentRed} />
            <line x1="120" y1="80" x2="200" y2="160" stroke={textDark} strokeDasharray="5,5" />
            <line x1="280" y1="80" x2="200" y2="160" stroke={textDark} strokeDasharray="5,5" />
            <path d="M120 80 L280 80" stroke={accentRed} strokeDasharray="4,4" style={{ animation: 'flowLine 4s infinite linear' }} />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <g transform="translate(150, 120)" style={{ transformOrigin: 'center', animation: 'spinSlow 10s infinite linear' }}>
              <circle cx="0" cy="0" r="30" stroke={textDark} strokeDasharray="6,4" />
            </g>
            <g transform="translate(250, 120)" style={{ transformOrigin: 'center', animation: 'spinSlow 8s infinite linear reverse' }}>
              <circle cx="0" cy="0" r="20" stroke={textDark} strokeDasharray="4,2" />
            </g>
            <path d="M 200 95 C 220 95, 230 105, 230 125 C 230 145, 200 160, 200 160 C 200 160, 170 145, 170 125 C 170 105, 180 95, 200 95 Z" stroke={accentRed} strokeWidth="3" fill={bgPrimary} />
          </svg>
        );
      }

    case 'mclane':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2.5 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <path d="M 50 60 Q 200 120, 350 60" stroke={textDark} opacity="0.2" />
            <path d="M 50 120 Q 200 120, 350 120" stroke={accentRed} strokeDasharray="6,6" style={{ animation: 'flowLine 3s infinite linear' }} />
            <path d="M 50 180 Q 200 120, 350 180" stroke={textDark} opacity="0.2" />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none' }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <defs>
              <linearGradient id="spotRed" x1="0%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor={accentRed} stopOpacity="0.25" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path d="M 120 30 L 250 210 L 190 210 Z" fill="url(#spotRed)" />
            <path d="M 280 30 L 150 210 L 210 210 Z" fill="url(#spotRed)" />
            <circle cx="120" cy="30" r="6" fill={textDark} />
            <circle cx="280" cy="30" r="6" fill={textDark} />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <rect x="80" y="80" width="90" height="80" rx="8" stroke={textDark} />
            <rect x="230" y="80" width="90" height="80" rx="8" stroke={textDark} />
            <line x1="125" y1="120" x2="275" y2="120" stroke={accentRed} strokeWidth="3" strokeDasharray="6,6" style={{ animation: 'flowLine 4s infinite linear' }} />
          </svg>
        );
      }

    case 'green-sphere':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <path d="M200 60 C160 100, 160 150, 200 180 C240 150, 240 100, 200 60 Z" stroke={accentRed} fill={bgPrimary} />
            <path d="M200 60 Q200 120, 200 180" stroke={accentRed} />
            <circle cx="200" cy="120" r="60" stroke={textDark} opacity="0.15" style={{ animation: 'pulseGlow 2.5s infinite ease-in-out' }} />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <rect x="120" y="60" width="160" height="120" rx="4" stroke={textDark} />
            <g stroke={accentRed} strokeWidth="3">
              <line x1="130" y1="80" x2="270" y2="80" style={{ animation: 'pulseGlow 3s infinite' }} />
              <line x1="130" y1="100" x2="270" y2="100" style={{ animation: 'pulseGlow 3s infinite 0.3s' }} />
              <line x1="130" y1="120" x2="270" y2="120" style={{ animation: 'pulseGlow 3s infinite 0.6s' }} />
            </g>
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <line x1="80" y1="180" x2="320" y2="180" stroke={textDark} />
            <line x1="80" y1="60" x2="80" y2="180" stroke={textDark} />
            <rect x="110" y="120" width="30" height="60" rx="4" fill={textDark} opacity="0.2" />
            <rect x="180" y="90" width="30" height="90" rx="4" fill={textDark} opacity="0.2" />
            <rect x="250" y="50" width="30" height="130" rx="4" fill={accentRed} style={{ animation: 'pulseGlow 2s infinite' }} />
          </svg>
        );
      }

    case 'alchemist':
      if (sectionIndex === 0) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', stroke: accentRed, strokeWidth: 2 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="200" cy="120" r="4" fill={accentRed} />
            <ellipse cx="200" cy="120" rx="90" ry="30" stroke={textDark} opacity="0.2" transform="rotate(30, 200, 120)" />
            <ellipse cx="200" cy="120" rx="90" ry="30" stroke={accentRed} transform="rotate(-30, 200, 120)" style={{ animation: 'pulseGlow 3s infinite' }} />
          </svg>
        );
      } else if (sectionIndex === 1) {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', strokeWidth: 2.5 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <circle cx="200" cy="120" r="50" stroke={accentRed} style={{ animation: 'pulseGlow 3s infinite' }} />
            <circle cx="200" cy="120" r="70" stroke={textDark} opacity="0.2" />
            <circle cx="200" cy="120" r="30" stroke="#f59e0b" style={{ animation: 'pulseGlow 3s infinite 0.5s' }} />
          </svg>
        );
      } else {
        return (
          <svg viewBox="0 0 400 240" style={{ width: '100%', maxWidth: '400px', height: 'auto', fill: 'none', stroke: textDark, strokeWidth: 1.5 }}>
            <rect width="400" height="240" fill={bgSecondary} rx="16" />
            <g opacity="0.3">
              <line x1="80" y1="40" x2="320" y2="40" />
              <line x1="80" y1="90" x2="320" y2="90" />
              <line x1="80" y1="140" x2="320" y2="140" />
              <line x1="80" y1="190" x2="320" y2="190" />
              <line x1="80" y1="40" x2="80" y2="190" />
              <line x1="160" y1="40" x2="160" y2="190" />
              <line x1="240" y1="40" x2="240" y2="190" />
              <line x1="320" y1="40" x2="320" y2="190" />
            </g>
            <path d="M 80 40 Q 200 90, 320 40 Q 280 120, 320 190 Q 200 160, 80 190 Q 120 120, 80 40 Z" stroke={accentRed} strokeWidth="3" style={{ animation: 'pulseGlow 4s infinite' }} />
          </svg>
        );
      }

    default:
      return null;
  }
};

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.slug === slug);
  const sections = productSectionsData[slug] || [];

  useEffect(() => {
    if (!product) {
      navigate('/', { replace: true });
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  return (
    <div className={styles.product}>
      {/* HERO */}
      <section className={styles.hero}>
        <div 
          className={styles.heroBg} 
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
        <div className={styles.heroOverlay}></div>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className={styles.heroContent}>
            <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Enterprise Solution</span>
            <h1 className={styles.heroTitle}>{product.title}</h1>
            <p className={styles.heroHeadline}>{product.headline}</p>
          </div>
        </div>
      </section>



      {/* 3 CUSTOM PRODUCT SECTIONS */}
      {sections.map((sec, idx) => (
        <section 
          key={idx} 
          className={styles.productSection}
          style={{ backgroundColor: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
        >
          <div className="container">
            <div className={`${styles.sectionSplit} ${idx % 2 === 1 ? styles.sectionSplitReverse : ''}`}>
              <div className={styles.sectionContent}>
                <span className="subtitle-red">{sec.subtitle}</span>
                <h2 className="heading-huge" style={{ marginBottom: '2rem' }}>{sec.title}</h2>
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="body-normal" style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    {para}
                  </p>
                ))}
                {sec.listItems && (
                  <div className={styles.listContainer}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1.2rem', color: 'var(--text-dark)' }}>
                      {sec.listTitle}
                    </h4>
                    <ul className={styles.sectionList}>
                      {sec.listItems.map((item, lIdx) => (
                        <li key={lIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                          <CheckCircle2 size={18} style={{ color: 'var(--accent-red)', flexShrink: 0, marginTop: '0.15rem' }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className={styles.sectionGraphic}>
                {renderProductVector(slug, idx)}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CUSTOM ALCHEMIST HOSPITALITY & CAFE SHOWCASE */}
      {product.slug === 'alchemist' && (
        <section className={`${styles.hospitality} section-padding`}>
          <div className="container">
            <div className={styles.hospitalitySplit}>
              <div className={styles.hospitalityLeft}>
                <span className="subtitle-red">Luxury Hospitality</span>
                <h2 className="heading-huge" style={{ marginBottom: '2rem' }}>Creating Immersive Hospitality Destinations</h2>
                <p className="body-large" style={{ color: 'var(--text-dark)', fontWeight: '500', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  Creating immersive hospitality destinations that blend atmosphere, design, culture, and elevated guest experiences. We craft refined environments where hospitality becomes an unforgettable experiential journey.
                </p>
                <p className="body-normal" style={{ lineHeight: '1.8' }}>
                  By combining dynamic generative projections with physical architectural assets, Alchemist turns premium cafe structures and luxury hospitality centers into responsive spaces. Visitors are enveloped in a living, breathing landscape that adapts dynamically to occupancy, audio frequencies, and motion tracking matrices.
                </p>
              </div>
              <div className={styles.hospitalityRight}>
                <div 
                  className={styles.hospitalityImage} 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80')" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* VISUAL SHOWCASE */}
      <section className={`${styles.gallery} section-padding`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <span className="subtitle-red">Visual Showcase</span>
            <h2 className="heading-huge">Deployment Environments</h2>
          </div>

          <div className={styles.galleryGrid}>
            {product.showcaseImages.map((img, idx) => (
              <div key={idx} className={styles.galleryImageWrapper}>
                <div 
                  className={styles.galleryImage} 
                  style={{ backgroundImage: `url(${img})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CONVERSION STATION */}
      <section className={`${styles.cta} section-padding`}>
        <div className="container">
          <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Action Centre</span>
          <h2 className="heading-huge" style={{ marginBottom: '2.5rem' }}>Ready to Experience {product.title}?</h2>
          
          <div className={styles.ctaButtons}>
            <Link to="/contact" className="btn btn-accent btn-primary" style={{ border: 'none', display: 'inline-flex', gap: '0.5rem' }}>
              <MessageSquare size={18} /> Request Demo
            </Link>
            <Link to="/contact" className="btn btn-outline-white" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <FileText size={18} /> Get Proposal
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ color: 'var(--text-light)', borderColor: 'rgba(255, 255, 255, 0.2)', display: 'inline-flex', gap: '0.5rem' }}>
              <ShieldAlert size={18} /> Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
