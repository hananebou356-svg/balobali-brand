import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={styles.nav} className="glass-card">
      <div style={styles.navContainer} className="container">
        
        {/* Left: Links */}
        <div style={styles.linkGroup}>
          <Link to="/shop" style={styles.link}>Shop</Link>
          <Link to="/collections" style={styles.link}>Collections</Link>
        </div>

        {/* Center: Brand */}
        <div style={styles.brand}>
          <Link to="/" style={styles.logo}>BALOBALI</Link>
        </div>

        {/* Right: Icons */}
        <div style={styles.iconGroup}>
          <Search style={styles.icon} size={20} />
          <Link to="/profile">
            <User style={styles.icon} size={20} />
          </Link>
          <Link to="/cart">
            <ShoppingBag style={styles.icon} size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '90%',
    maxWidth: '1200px',
    zIndex: 1000,
    padding: '1rem 2rem',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  linkGroup: {
    display: 'flex',
    gap: '2rem',
    flex: 1,
  },
  link: {
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 500,
  },
  brand: {
    flex: 1,
    textAlign: 'center',
  },
  logo: {
    fontFamily: 'var(--font-primary)',
    fontSize: '1.5rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
  },
  iconGroup: {
    display: 'flex',
    gap: '1.5rem',
    flex: 1,
    justifyContent: 'flex-end',
  },
  icon: {
    cursor: 'pointer',
  }
};

export default Navbar;
