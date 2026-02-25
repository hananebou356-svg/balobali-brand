import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.grid}>
        <div>
          <h2 style={styles.brand}>BALOBALI</h2>
          <p style={styles.text}>Redefining luxury downtime.</p>
        </div>
        
        <div>
          <h4 style={styles.title}>Shop</h4>
          <ul style={styles.list}>
            <li>New Arrivals</li>
            <li>Silk Pajamas</li>
            <li>Loungewear</li>
            <li>Gifting</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.title}>Support</h4>
          <ul style={styles.list}>
            <li>Contact Us</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 style={styles.title}>Join Our Newsletter</h4>
          <p style={styles.text}>10% off your first luxury order.</p>
          <div style={styles.inputGroup}>
            <input type="email" placeholder="Email Address" style={styles.input} />
            <button className="btn-primary" style={styles.btn}>Join</button>
          </div>
        </div>
      </div>
      <div style={styles.copy}>
        &copy; {new Date().getFullYear()} Balobali. All rights reserved.
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--color-text)',
    color: 'var(--color-bg)',
    padding: '4rem 0 2rem 0',
    marginTop: 'auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '3rem',
    paddingBottom: '3rem',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  brand: {
    fontSize: '2rem',
    letterSpacing: '0.1em',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '1.5rem',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  },
  text: {
    color: 'rgba(255,255,255,0.7)',
    marginBottom: '1rem',
  },
  inputGroup: {
    display: 'flex',
    gap: '0.5rem',
  },
  input: {
    padding: '0.75rem',
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff',
    outline: 'none',
    width: '100%',
  },
  btn: {
    padding: '0.75rem 1.5rem',
    background: 'var(--color-bg)',
    color: 'var(--color-text)',
  },
  copy: {
    textAlign: 'center',
    paddingTop: '2rem',
    fontSize: '0.85rem',
    color: 'rgba(255,255,255,0.5)',
  }
};

export default Footer;
