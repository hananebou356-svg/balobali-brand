import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>ELEVATE YOUR <br /> DOWNTIME.</h1>
          <p style={styles.heroSubtitle}>
            Redefining luxury with our latest silk & lounge collections.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/shop">
              <button className="btn-primary" style={styles.btnExplore}>
                Explore Collection
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories (Editorial Layout) */}
      <section className="container" style={styles.categorySection}>
        <div style={styles.sectionHeader}>
          <h2>CURATED COLLECTIONS</h2>
          <Link to="/shop" style={styles.linkWithIcon}>
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div style={styles.grid}>
          <div style={{...styles.categoryCard, ...styles.cardTall}} className="glass-card">
            <div style={styles.cardContent}>
              <h3>SILK PAJAMAS</h3>
              <p>The Signature Collection</p>
            </div>
          </div>
          <div style={{...styles.categoryCard, ...styles.cardShort}} className="glass-card">
            <div style={styles.cardContent}>
              <h3>LOUNGEWEAR</h3>
              <p>Everyday Luxury</p>
            </div>
          </div>
          <div style={{...styles.categoryCard, ...styles.cardShort}} className="glass-card">
            <div style={styles.cardContent}>
              <h3>GIFTING</h3>
              <p>For the special ones</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  heroSection: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 5%',
    textAlign: 'center',
    // In a real app we would use an editorial background image here
    background: 'linear-gradient(to bottom, var(--color-bg), var(--color-muted))',
  },
  heroContent: {
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: 'clamp(3rem, 8vw, 6rem)',
    lineHeight: 1,
    fontWeight: 300,
    marginBottom: '1.5rem',
  },
  heroSubtitle: {
    fontSize: '1.25rem',
    color: 'var(--color-text)',
    opacity: 0.8,
    marginBottom: '2.5rem',
    fontWeight: 300,
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnExplore: {
    padding: '1.25rem 3rem',
    fontSize: '1.1rem',
  },
  categorySection: {
    padding: '6rem 5%',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: '3rem',
  },
  linkWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontSize: '0.9rem',
    fontWeight: 500,
    borderBottom: '1px solid var(--color-text)',
    paddingBottom: '0.2rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '2rem',
    gridAutoRows: '300px',
  },
  categoryCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '2rem',
    background: '#e0d8d0', // Fallback placeholder color
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.5s ease',
  },
  cardTall: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  cardShort: {
    gridColumn: 'span 2',
  },
  cardContent: {
    zIndex: 2,
    color: 'var(--color-text)', // Or #fff if using dark images
  }
};

export default Home;
