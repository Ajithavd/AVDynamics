import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Corporate email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Contact number is required';
    } else if (!/^\+?[0-9\s-]{7,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Invalid phone number format';
    }

    if (!formData.message.trim()) {
      tempErrors.message = 'Message content cannot be blank';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }
  };

  return (
    <div className={styles.contact}>
      {/* SECTION 1 — HERO */}
      <section className={styles.hero}>
        <div className="container">
          <span className="subtitle-red" style={{ color: 'var(--accent-red)' }}>Connect</span>
          <h1 className={styles.heroTitle}>Let's Build Something Extraordinary</h1>
        </div>
      </section>

      <div className="container">
        {/* SECTION 2 — CONTACT CARDS */}
        <section className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Phone size={28} />
            </div>
            <h3>Direct Telephony / WhatsApp</h3>
            <a 
              href="https://wa.me/917358241964?text=Hello%20AVDYNAM,%20I'd%20like%20to%20discuss%20an%20enterprise%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.5rem', display: 'block', textDecoration: 'none' }}
              className={styles.contactPhoneLink}
            >
              +91 73582 41964
            </a>
            <p>Mon - Fri, 9am - 6pm IST</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <Mail size={28} />
            </div>
            <h3>Corporate Inbox</h3>
            <p style={{ fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.5rem' }}>info@avdynam.com</p>
            <p>We reply within 2 hours</p>
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <MapPin size={28} />
            </div>
            <h3>Chennai HQ</h3>
            <p style={{ fontWeight: '600', color: 'var(--text-light)', marginBottom: '0.5rem' }}>ECO PARK</p>
            <p>DOME - 1st floor, Chetpet, Chennai-600 010, Tamil Nadu, India</p>
          </div>
        </section>

        {/* SECTION 3 — CONTACT FORM */}
        <section className={`${styles.formSection} section-padding`} style={{ paddingTop: 0 }}>
          <div className={styles.formSplit}>
            <div className={styles.formLeft}>
              <span className="subtitle-red">Enquiries</span>
              <h2 className="heading-huge" style={{ marginBottom: '2rem' }}>Initiate a Consultation</h2>
              <p className="body-normal" style={{ marginBottom: '2rem', lineHeight: '1.7' }}>
                Whether you need ultra-fine direct view LED grids, structural acoustic isolation, spatial coordinate processing, or edge computer vision security grids, AVDYNAM engineers are ready.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ borderLeft: '2px solid var(--accent-red)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>Enterprise RFP Submission</h4>
                  <p className="body-normal" style={{ fontSize: '0.85rem' }}>Send RFP sheets and layouts directly to info@avdynam.com for expedited architectural mapping.</p>
                </div>
                <div style={{ borderLeft: '2px solid var(--accent-red)', paddingLeft: '1.5rem' }}>
                  <h4 style={{ fontWeight: '700', marginBottom: '0.5rem' }}>System Health Support</h4>
                  <p className="body-normal" style={{ fontSize: '0.85rem' }}>Current system license and support ticket updates can be routed to info@avdynam.com.</p>
                </div>
              </div>
            </div>

            <div className={styles.formRight}>
              {submitted ? (
                <div className={styles.successBox}>
                  <CheckCircle size={48} style={{ color: '#10b981', marginBottom: '1.5rem', display: 'inline-block' }} />
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Submission Received</h3>
                  <p className="body-normal">
                    Thank you. An AV DYNAMICS design engineer has been assigned to your corporate query and will contact you within two hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form} noValidate>
                  {/* Name field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Corporate Contact Name</label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    />
                    {errors.name && (
                      <span className={styles.errorText}>
                        <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Corporate Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    />
                    {errors.email && (
                      <span className={styles.errorText}>
                        <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Contact Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
                    />
                    {errors.phone && (
                      <span className={styles.errorText}>
                        <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Spatial Goals & Requirements</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    />
                    {errors.message && (
                      <span className={styles.errorText}>
                        <AlertCircle size={12} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>

      <section className={`${styles.cta} section-padding`}>
        <div className="container">
          <h2 className="heading-huge" style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Let's Discuss Your Next Project</h2>
          <p className="body-large" style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Transforming corporate boardrooms, public arenas, dynamic museums, and stadium architectures with absolute precision.
          </p>
        </div>
      </section>
    </div>
  );
}
