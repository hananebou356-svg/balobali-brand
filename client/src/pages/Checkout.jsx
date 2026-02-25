import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    alert('Stripe Integration is Mocked for Demo');
    navigate('/');
  };

  return (
    <div className="page-container container" style={styles.wrapper}>
      <div style={styles.header}>
        <h1 style={styles.title}>BALOBALI</h1>
        <p style={styles.secure}>SECURE CHECKOUT</p>
      </div>

      <div style={styles.grid}>
        {/* Shipping Form */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.formColumn}>
          <form onSubmit={handlePayment}>
            <h3 style={styles.sectionTitle}>Contact Information</h3>
            <div style={styles.inputGroup}>
              <input type="email" placeholder="Email Address" required style={styles.input} />
            </div>

            <h3 style={styles.sectionTitle}>Shipping Address</h3>
            <div style={styles.inputRow}>
              <input type="text" placeholder="First Name" required style={styles.input} />
              <input type="text" placeholder="Last Name" required style={styles.input} />
            </div>
            <div style={styles.inputGroup}>
              <input type="text" placeholder="Address" required style={styles.input} />
            </div>
            <div style={styles.inputRow}>
              <input type="text" placeholder="City" required style={styles.input} />
              <input type="text" placeholder="Postal Code" required style={styles.input} />
            </div>

            <h3 style={styles.sectionTitle}>Payment (Stripe Demo)</h3>
            <div style={styles.cardInput}>
              [ Stripe Card Element Placeholder ]
            </div>

            <button type="submit" className="btn-primary" style={styles.payBtn}>
              Pay $420.00
            </button>
          </form>
        </motion.div>

        {/* Order Summary Miniature */}
        <div style={styles.summaryColumn}>
          <div className="glass-card" style={styles.summaryCard}>
            <div style={styles.summaryItem}>
              <span>Midnight Silk Pajama Set</span>
              <span>$250</span>
            </div>
            <div style={styles.summaryItem}>
              <span>Cashmere Sleep Mask (2)</span>
              <span>$170</span>
            </div>
            <div style={{borderTop: '1px solid rgba(0,0,0,0.1)', margin: '1rem 0', paddingTop: '1rem'}}>
              <div style={styles.summaryItem}>
                <strong>Total</strong>
                <strong>$420</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1000px',
    paddingBottom: '5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '2.5rem',
    letterSpacing: '0.1em',
  },
  secure: {
    fontSize: '0.8rem',
    color: 'rgba(0,0,0,0.5)',
    letterSpacing: '0.1em',
    marginTop: '0.5rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '4rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    marginBottom: '1rem',
    marginTop: '2rem',
  },
  inputGroup: {
    marginBottom: '1rem',
  },
  inputRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem',
  },
  input: {
    width: '100%',
    padding: '1rem',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px',
    background: 'transparent',
    fontFamily: 'inherit',
    fontSize: '1rem',
  },
  cardInput: {
    padding: '1.5rem',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '4px',
    textAlign: 'center',
    color: 'rgba(0,0,0,0.4)',
    marginBottom: '2rem',
  },
  payBtn: {
    width: '100%',
    padding: '1.25rem',
  },
  summaryCard: {
    padding: '2rem',
    position: 'sticky',
    top: '120px',
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    fontSize: '0.9rem',
  }
};

export default Checkout;
