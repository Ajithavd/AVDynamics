import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { MessageSquare, ShieldAlert, FileText } from 'lucide-react';
import styles from './ProductPage.module.css';
import { productsData } from '../data/productsData';

export default function ProductPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = productsData.find((p) => p.slug === slug);

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

      {/* CONVERSION STATION */}
      <section className={`${styles.cta} section-padding`}>
        <div className="container">
          <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Action Centre</span>
          <h2 className="heading-huge" style={{ marginBottom: '2.5rem' }}>Ready to Experience {product.title}?</h2>
          
          <div className={styles.ctaButtons}>
            <Link to="/contact" className="btn btn-accent" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <MessageSquare size={18} /> Request Demo
            </Link>
            <Link to="/contact" className="btn btn-secondary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <FileText size={18} /> Get Proposal
            </Link>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.5rem' }}>
              <ShieldAlert size={18} /> Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
