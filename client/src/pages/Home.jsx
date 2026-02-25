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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // Elegant ease-out
          style={styles.heroContent}
        >
          <span style={styles.heroLabel}>New Arrival / SPRING 26</span>
          <h1 style={styles.heroTitle}>THE ART OF <br /> SLOW LIVING.</h1>
          <p style={styles.heroSubtitle}>
            Unrivaled luxury for those who appreciate the finer details of home and rest.
          </p>
          <div style={styles.heroButtons}>
            <Link to="/shop">
              <button className="btn-primary" style={styles.btnExplore}>
                Shop the Collection
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Categories (Editorial Layout) */}
      <section className="container" style={styles.categorySection}>
        <div style={styles.sectionHeader}>
          <div style={styles.headerTitleGroup}>
            <h2 style={styles.sectionTitle}>Curated Collections</h2>
            <div style={styles.sectionLine}></div>
          </div>
          <Link to="/shop" style={styles.linkWithIcon}>
            View All Series <ArrowRight size={16} />
          </Link>
        </div>
        
        <div style={styles.grid}>
          <CategoryCard 
            title="Silk Pajamas" 
            label="Signature Collection" 
            size="tall" 
            bgColor="#f3f0ed"
          />
          <CategoryCard 
            title="Loungewear" 
            label="Pure Comfort" 
            size="wide" 
            bgColor="#ece8e4"
          />
          <CategoryCard 
            title="Accessories" 
            label="The Accents" 
            size="short" 
            bgColor="#e6e1db"
          />
          <CategoryCard 
            title="Gifting" 
            label="For Them" 
            size="short" 
            bgColor="#dfdad4"
          />
        </div>
      </section>
    </div>
  );
};

const CategoryCard = ({ title, label, size, bgColor }) => {
  const cardStyle = {
    ...styles.categoryCard,
    ...(size === 'tall' ? styles.cardTall : size === 'wide' ? styles.cardWide : styles.cardShort),
    backgroundColor: bgColor
  };

  return (
    <motion.div 
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.5 }}
      style={cardStyle} 
      className="glass-card"
    >
      <div style={styles.cardOverlay}></div>
      <div style={styles.cardInfo}>
        <span style={styles.cardLabel}>{label}</span>
        <h3 style={styles.cardTitle}>{title}</h3>
      </div>
    </motion.div>
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
    background: 'radial-gradient(circle at center, #fff, #f8f1eb)',
    position: 'relative',
    overflow: 'hidden',
  },
  heroLabel: {
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    marginBottom: '2rem',
    display: 'block',
    fontWeight: 500,
    color: 'var(--color-accent)',
  },
  heroContent: {
    maxWidth: '900px',
    zIndex: 10,
  },
  heroTitle: {
    fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
    lineHeight: 0.9,
    fontWeight: 300,
    marginBottom: '2rem',
    letterSpacing: '-0.04em',
  },
  heroSubtitle: {
    fontSize: '1.4rem',
    color: 'var(--color-text)',
    opacity: 0.7,
    marginBottom: '3rem',
    fontWeight: 300,
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  },
  heroButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  btnExplore: {
    padding: '1.5rem 4rem',
    fontSize: '1rem',
    borderRadius: '0', // Ultra minimal
    fontWeight: 400,
  },
  categorySection: {
    padding: '8rem 5%',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4rem',
  },
  headerTitleGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 300,
  },
  sectionLine: {
    height: '1px',
    width: '100px',
    background: 'var(--color-text)',
    opacity: 0.2,
  },
  linkWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontSize: '0.8rem',
    fontWeight: 600,
    paddingBottom: '0.4rem',
    borderBottom: '1px solid currentColor',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
    gridAutoRows: '340px',
  },
  categoryCard: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '3rem',
    overflow: 'hidden',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '0', // Editorial look
  },
  cardOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.05), transparent)',
    zIndex: 1,
  },
  cardInfo: {
    zIndex: 2,
    transition: 'transform 0.4s ease',
  },
  cardLabel: {
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    marginBottom: '0.5rem',
    display: 'block',
    opacity: 0.6,
  },
  cardTitle: {
    fontSize: '1.8rem',
    fontWeight: 300,
  },
  cardTall: {
    gridColumn: 'span 2',
    gridRow: 'span 2',
  },
  cardWide: {
    gridColumn: 'span 2',
  },
  cardShort: {
    gridColumn: 'span 1',
  }
};


export default Home;
