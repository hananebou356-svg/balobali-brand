import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch login action here
    console.log('Login Submit', email);
  };

  return (
    <div className="page-container container" style={styles.wrapper}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={styles.card}
      >
        <h2 style={styles.title}>SIGN IN</h2>
        <p style={{marginBottom: '2rem', textAlign: 'center', color: 'rgba(0,0,0,0.6)'}}>
          Access your exclusive Balobali account.
        </p>

        <form onSubmit={submitHandler} style={styles.form}>
          <div style={styles.inputGroup}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={styles.input}
            />
          </div>

          <button type="submit" className="btn-primary" style={styles.btn}>Sign In</button>
        </form>

        <div style={styles.footer}>
          <span>New to Balobali? </span>
          <Link to="/register" style={{textDecoration: 'underline'}}>Create an Account</Link>
        </div>
      </motion.div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
  },
  card: {
    width: '100%',
    maxWidth: '500px',
    padding: '3rem',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
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
  btn: {
    width: '100%',
    padding: '1.25rem',
    marginTop: '1rem',
  },
  footer: {
    marginTop: '2rem',
    textAlign: 'center',
    fontSize: '0.9rem',
    color: 'rgba(0,0,0,0.7)',
  }
};

export default Login;
