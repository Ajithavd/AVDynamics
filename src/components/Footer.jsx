import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import styles from './Footer.module.css';

// Premium Inline SVGs for social media (fully custom, extremely fast & highly optimized)
function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandColumn}>
            <Link to="/" className={styles.logo}>
              <img src="/logo.png" alt="AV Dynamics" className={styles.logoImage} />
            </Link>
            <p className={styles.tagline}>
              Transforming physical environments through high-fidelity technology, intelligent acoustics, and smart infrastructure.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Company</h4>
            <ul className={styles.links}>
              <li>
                <Link to="/" className={styles.link}>Home</Link>
              </li>
              <li>
                <Link to="/about" className={styles.link}>About Us</Link>
              </li>
              <li>
                <Link to="/contact" className={styles.link}>Contact</Link>
              </li>
              <li>
                <a href="#" className={styles.link}>Careers</a>
              </li>
              <li>
                <a href="#" className={styles.link}>Newsroom</a>
              </li>
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className={styles.column}>
            <h4>Services</h4>
            <ul className={styles.links}>
              <li>
                <Link to="/services/cctv-solutions" className={styles.link}>CCTV Solutions</Link>
              </li>
              <li>
                <Link to="/services/audio-acoustics" className={styles.link}>Audio & Acoustics</Link>
              </li>
              <li>
                <Link to="/services/led-solutions" className={styles.link}>LED Solutions</Link>
              </li>
              <li>
                <Link to="/services/immersive-experiences" className={styles.link}>Immersive Art</Link>
              </li>
              <li>
                <Link to="/services/venue-enhancement" className={styles.link}>Smart Venues</Link>
              </li>
            </ul>
          </div>

          {/* Products Quick Links */}
          <div className={styles.column}>
            <h4>Products</h4>
            <ul className={styles.links}>
              <li>
                <Link to="/products/nexlume" className={styles.link}>Nexlume</Link>
              </li>
              <li>
                <Link to="/products/ndurance-ai" className={styles.link}>ndurance.ai</Link>
              </li>
              <li>
                <Link to="/products/avl" className={styles.link}>AVL</Link>
              </li>
              <li>
                <Link to="/products/mclane-productions" className={styles.link}>McLane Productions</Link>
              </li>
              <li>
                <Link to="/products/green-sphere" className={styles.link}>Green Sphere</Link>
              </li>
              <li>
                <Link to="/products/fb-ventures" className={styles.link}>F&B Ventures</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className={styles.newsletterColumn}>
            <h4>Newsletter</h4>
            <p className={styles.newsletterText}>
              Receive elite insight on the future of immersive environments and corporate technology deployments.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10b981', fontSize: '0.9rem' }}>
                <CheckCircle2 size={18} style={{ color: '#10b981' }} /> Subscribed successfully. Welcome.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.form}>
                <div className={styles.inputGroup}>
                  <input 
                    type="email" 
                    placeholder="Enter corporate email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © {new Date().getFullYear()} AVDYNAM. All rights reserved. Precision Engineering.
          </div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <a href="#" className={styles.bottomLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
