import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  // Mock Cart Items
  const [cartItems] = useState([
    { _id: '1', name: 'Midnight Silk Pajama Set', price: 250, qty: 1, image: 'silk1.jpg' },
    { _id: '3', name: 'Cashmere Sleep Mask', price: 85, qty: 2, image: 'mask.jpg' }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="page-container container" style={styles.wrapper}>
      <h1 style={styles.title}>YOUR BAG</h1>

      {cartItems.length === 0 ? (
        <div style={styles.empty}>
          <p>Your bag is currently empty.</p>
          <Link to="/shop">
            <button className="btn-primary" style={{marginTop: '2rem'}}>Continue Shopping</button>
          </Link>
        </div>
      ) : (
        <div style={styles.grid}>
          {/* Cart Items */}
          <div style={styles.itemsColumn}>
            {cartItems.map(item => (
              <div key={item._id} style={styles.cartItem}>
                <div style={styles.itemImage}>Img</div>
                <div style={styles.itemInfo}>
                  <h4>{item.name}</h4>
                  <p style={{color: 'rgba(0,0,0,0.5)', marginTop: '0.5rem'}}>Qty: {item.qty}</p>
                </div>
                <div style={styles.itemPrice}>
                  ${item.price * item.qty}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div style={styles.summaryColumn}>
            <div className="glass-card" style={styles.summaryCard}>
              <h3 style={{marginBottom: '2rem'}}>ORDER SUMMARY</h3>
              <div style={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div style={styles.totalRow}>
                <span>Total</span>
                <span>${subtotal} USD</span>
              </div>
              <button 
                className="btn-primary" 
                style={styles.checkoutBtn}
                onClick={() => navigate('/checkout')}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1000px',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '3rem',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    paddingBottom: '1rem',
  },
  empty: {
    textAlign: 'center',
    padding: '4rem 0',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: '3rem',
  },
  cartItem: {
    display: 'flex',
    gap: '1.5rem',
    paddingBottom: '2rem',
    marginBottom: '2rem',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  },
  itemImage: {
    width: '100px',
    height: '130px',
    background: '#E5E0DA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.3)',
  },
  itemInfo: {
    flex: 1,
  },
  itemPrice: {
    fontWeight: 500,
  },
  summaryCard: {
    padding: '2rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    color: 'rgba(0,0,0,0.7)',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid rgba(0,0,0,0.1)',
    fontSize: '1.25rem',
    fontWeight: 500,
  },
  checkoutBtn: {
    width: '100%',
    marginTop: '2rem',
    padding: '1.25rem',
  }
};

export default Cart;
