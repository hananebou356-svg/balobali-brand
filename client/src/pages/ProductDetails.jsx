import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchProductById, fetchRecommendedProducts } from '../services/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [product, setProduct] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchProductById(id);
      const recsData = await fetchRecommendedProducts();
      setProduct(productData);
      setRecommendations(recsData);
    };
    fetchData();
  }, [id]);

  if (!product.name) return <div className="page-container container">Loading luxury piece...</div>;

  return (
    <div className="page-container container" style={styles.wrapper}>
      <div style={styles.grid}>
        {/* Left: Product Images */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={styles.imageColumn}
        >
          <div style={styles.mainImage}>Product Image Placeholder</div>
        </motion.div>

        {/* Right: Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          style={styles.infoColumn}
        >
          <h1 style={styles.title}>{product.name}</h1>
          <p style={styles.price}>${product.price} USD</p>
          
          <div style={styles.description}>
            <p>{product.description}</p>
          </div>

          <div style={styles.actionGroup}>
            <button className="btn-primary" style={styles.btn}>Add to Cart</button>
          </div>

          <div style={styles.accordion}>
            <div style={styles.accordionItem}>
              <h4>Details & Care</h4>
              <p style={styles.smallText}>100% Silk. Dry clean only.</p>
            </div>
            <div style={styles.accordionItem}>
              <h4>Shipping & Returns</h4>
              <p style={styles.smallText}>Complimentary shipping on orders over $300.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* AI Recommendations Module */}
      <div style={styles.recommendations}>
        <h3 style={{marginBottom: '2rem', textAlign: 'center'}}>YOU MAY ALSO LIKE</h3>
        <div style={styles.recGrid}>
          {[1,2,3,4].map(idx => (
           <div key={idx} style={styles.recCard}>
             <div style={styles.recImg}>Recommendation</div>
             <p style={{marginTop: '1rem', fontSize: '0.9rem', textAlign: 'center'}}>Matching Item</p>
           </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    paddingTop: '120px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(400px, 1fr) 1fr',
    gap: '5rem',
    marginBottom: '6rem',
  },
  imageColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainImage: {
    aspectRatio: '3/4',
    background: '#E5E0DA',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.3)',
  },
  infoColumn: {
    paddingTop: '2rem',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  price: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    color: 'var(--color-accent)',
  },
  description: {
    fontSize: '1.05rem',
    lineHeight: 1.6,
    color: 'rgba(0,0,0,0.7)',
    marginBottom: '3rem',
  },
  actionGroup: {
    marginBottom: '4rem',
  },
  btn: {
    width: '100%',
    padding: '1.25rem',
    fontSize: '1.1rem',
  },
  accordion: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
  },
  accordionItem: {
    padding: '1.5rem 0',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  smallText: {
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.6)',
    marginTop: '0.5rem',
  },
  recommendations: {
    borderTop: '1px solid rgba(0,0,0,0.1)',
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  recGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1.5rem',
  },
  recCard: {
    cursor: 'pointer',
  },
  recImg: {
    aspectRatio: '3/4',
    background: '#F0EBE6',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0,0,0,0.3)',
    fontSize: '0.8rem',
  }
};

export default ProductDetails;
