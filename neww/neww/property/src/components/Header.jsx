import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
    },
    logo: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginLeft: '40px',
    },
    nav: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      textDecoration: 'none',
      color: '#333',
      fontWeight: '500',
    },
    navLink4: {
      textDecoration: 'none',
      color: 'rgba(239, 109, 17, 1)',
      fontWeight: '500',
    },
    signUpButton: {
      backgroundColor: '#ff6b00',
      color: '#fff',
      border: 'none',
      borderRadius: '25px',
      padding: '10px 20px',
      cursor: 'pointer',
      marginRight: '40px',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Teja Builders</div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/properties" style={styles.navLink}>Properties</Link>
        <Link to="/about-us" style={styles.navLink}>About Us</Link>
        <Link to="/contact-us" style={styles.navLink4}>Contact</Link>
      </nav>
      <button style={styles.signUpButton}>Sign Up</button>
    </header>
  );
};

export default Navbar;
