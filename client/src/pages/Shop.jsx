import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="page-container container">
      <header style={styles.header}>
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          THE COLLECTION
        </motion.h1>
        <p style={styles.subtitle}>Discover pure relaxation & luxury. Only 10 exclusive pieces per season.</p>
      </header>

      <div style={styles.grid}>
        {products.map((product, index) => (
          <motion.div 
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={styles.card}
          >
            <Link to={`/product/${product._id}`}>
              <div style={styles.imagePlaceholder}>
                <img 
                  src={product.images[0]} 
                  alt={product.name} 
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px'}} 
                />
              </div>
              <div style={styles.info}>
                <h3 style={styles.name}>{product.name}</h3>
                <p style={styles.price}>${product.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  subtitle: {
    color: 'rgba(0,0,0,0.6)',
    marginTop: '1rem',
    fontSize: '1.1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '3rem 2rem',
    paddingBottom: '5rem',
  },
  card: {
    cursor: 'pointer',
  },
  imagePlaceholder: {
    backgroundColor: '#EBE5DF',
    aspectRatio: '3/4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1.5rem',
    borderRadius: '8px',
  },
  imgText: {
    color: 'rgba(0,0,0,0.3)',
    fontSize: '0.9rem',
  },
  info: {
    textAlign: 'center',
  },
  name: {
    fontSize: '1.1rem',
    letterSpacing: '0.05em',
    marginBottom: '0.5rem',
  },
  price: {
    color: 'rgba(0,0,0,0.7)',
  }
};

export default Shop;
