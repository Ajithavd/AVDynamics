import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Shield, 
  Volume2, 
  Tv, 
  Compass, 
  Zap, 
  Radio, 
  Cpu, 
  Layers, 
  Menu, 
  X, 
  ChevronDown, 
  Server, 
  Activity, 
  Leaf, 
  Flame,
  ArrowRight
} from 'lucide-react';
import styles from './Navbar.module.css';
import { servicesData } from '../data/servicesData';
import { productsData } from '../data/productsData';

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

const productIconMap = {
  nexlume: Tv,
  ndur: Server,
  spatial: Volume2,
  sentinel: Shield,
  mclane: Activity,
  'green-sphere': Leaf,
  alchemist: Flame
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'services' | 'products' | null
  const [hoveredMenu, setHoveredMenu] = useState(null); // 'services' | 'products' | null
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route transitions
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setHoveredMenu(null);
    window.scrollTo(0, 0); // Scroll to top on SPA navigate
  }, [pathname]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src="/logo.png" alt="AV Dynamics" className={styles.logoImage} />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link to="/" className={`${styles.link} ${pathname === '/' ? styles.linkActive : ''}`}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={`${styles.link} ${pathname === '/about' ? styles.linkActive : ''}`}>
              About
            </Link>
          </li>

          {/* What We Do Mega-Menu */}
          <li 
            className={styles.navItem}
            onMouseEnter={() => setHoveredMenu('services')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <span className={`${styles.link} ${pathname.startsWith('/services') ? styles.linkActive : ''}`}>
              What We Do <ChevronDown size={14} />
            </span>
            <div className={`${styles.megaMenu} ${hoveredMenu === 'services' ? styles.megaMenuOpen : ''}`}>
              {servicesData.map((service) => {
                const IconComponent = iconMap[service.icon] || Cpu;
                return (
                  <Link 
                    key={service.slug} 
                    to={`/services/${service.slug}`} 
                    className={styles.megaItem}
                    onClick={() => setHoveredMenu(null)}
                  >
                    <div className={styles.megaIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.megaText}>
                      <h4>{service.title}</h4>
                      <p>{service.shortDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </li>

          {/* Products Mega-Menu */}
          <li 
            className={styles.navItem}
            onMouseEnter={() => setHoveredMenu('products')}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <span className={`${styles.link} ${pathname.startsWith('/products') ? styles.linkActive : ''}`}>
              Products <ChevronDown size={14} />
            </span>
            <div className={`${styles.megaMenu} ${hoveredMenu === 'products' ? styles.megaMenuOpen : ''}`}>
              {productsData.map((product) => {
                const IconComponent = productIconMap[product.slug] || Cpu;
                return (
                  <Link 
                    key={product.slug} 
                    to={`/products/${product.slug}`} 
                    className={styles.megaItem}
                    onClick={() => setHoveredMenu(null)}
                  >
                    <div className={styles.megaIcon}>
                      <IconComponent size={20} />
                    </div>
                    <div className={styles.megaText}>
                      <h4>{product.title}</h4>
                      <p>{product.shortDesc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </li>

          <li className={styles.navItem}>
            <Link to="/contact" className={`${styles.link} ${pathname === '/contact' ? styles.linkActive : ''}`}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* CTA Button */}
        <div className={styles.ctaBtn}>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}>
            Start Project <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button className={styles.menuBtn} onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Nav Drawer */}
        <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
          <ul className={styles.mobileLinks}>
            <li>
              <Link to="/" className={styles.mobileLink}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={styles.mobileLink}>About</Link>
            </li>

            {/* Mobile What We Do list */}
            <li>
              <div 
                className={styles.mobileLink} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
              >
                What We Do <ChevronDown size={18} style={{ transform: activeDropdown === 'services' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </div>
              {activeDropdown === 'services' && (
                <ul className={styles.mobileSubList}>
                  {servicesData.map((service) => (
                    <li key={service.slug}>
                      <Link to={`/services/${service.slug}`} className={styles.mobileSubLink}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* Mobile Products list */}
            <li>
              <div 
                className={styles.mobileLink} 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setActiveDropdown(activeDropdown === 'products' ? null : 'products')}
              >
                Products <ChevronDown size={18} style={{ transform: activeDropdown === 'products' ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />
              </div>
              {activeDropdown === 'products' && (
                <ul className={styles.mobileSubList}>
                  {productsData.map((product) => (
                    <li key={product.slug}>
                      <Link to={`/products/${product.slug}`} className={styles.mobileSubLink}>
                        {product.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link to="/contact" className={styles.mobileLink}>Contact Us</Link>
            </li>
          </ul>

          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-accent" style={{ width: '100%' }}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
