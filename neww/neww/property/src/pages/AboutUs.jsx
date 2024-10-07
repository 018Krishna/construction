import React from 'react';
import Navbar from '../components/Header';
import Main from '../components/Main';
import { SlCalender } from "react-icons/sl";
import { LuTrophy } from "react-icons/lu";

// Inline styles
const styles = {
  container: {
    padding: '40px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  aboutSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40px',
  },
  imageWrapper: {
    position: 'relative',
    top:'-120px',
    left:'-60px'
  },
  largeImage: {
    width: '500px',
    height: '570px',
    backgroundColor: '#d0d0d0',
    borderRadius: '17px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  smallImage: {
    width: '480px',
    height: '520px',
    backgroundColor: '#d0d0d0',
    borderRadius: '17px',
    
    position: 'absolute',
    top: '50px',
    left: '80px',
    marginTop:'80px',
    marginLeft:'70px'
  },
  clientBadge: {
    backgroundColor: '#ff6600',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '20px',
    position: 'absolute',
    top:'500px',
    bottom: '20px',
    left: '40px',
    fontWeight: 'bold',
    width:'250px',
    height:'120px',   
  },
  textSection: {
    maxWidth: '500px',
    position:'relative',
    top:'200px'
  },
  title: {
    fontSize: '47px',
    fontWeight: 'bold',
    marginBottom: '20px',
    marginTop:'20px',
    width:'650px'
    

    
  },
  description: {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#333',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '10px',
    fontSize: '20px',
    color: '#ff6600',
  },
  learnMoreButton: {
    padding: '10px 30px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    marginTop:'20px'
  },
  statsSection: {
    display: 'flex',
    justifyContent: 'space-evenly',
    paddingTop:'40px',
    paddingBottom:'40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    position:'relative',
    top:'380px',
  },
  statItem: {
    textAlign: 'center',
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#ff6600',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
    marginTop: '5px',
  },
};

const AboutUs = () => {
  return (
    <div>
        <Navbar />
    <div style={styles.container}>
      {/* About Section */}
      <div style={styles.aboutSection}>
        {/* Left: Images */}
        
        <div style={styles.imageWrapper}>
          <div style={styles.largeImage}></div>
          <div style={styles.smallImage}></div>
          <div style={styles.clientBadge}>
            <p style={{fontSize:'60px',marginLeft:'35px'}}>120+</p>
            <p style={{marginTop:'-20px',marginLeft:'40px'}}>Happy Chients</p>
          </div>
        </div>

        {/* Right: Text Section */}
        <div style={styles.textSection}>
        <span style={{color:'#333'}}>ABOUT US</span>       
          <h2 style={styles.title}>We Are in This Business Since 15 Years</h2>
          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <span style={styles.icon}><LuTrophy /></span>
              20+ Winning Awards
            </li>
            <li style={styles.listItem}>
              <span style={styles.icon}><SlCalender /></span>
              15 Years Of Experience
            </li>
          </ul>
          <button style={styles.learnMoreButton}>Learn More</button>
        </div>
      </div>
    </div>

      {/* Stats Section */}
      <div style={styles.statsSection}>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>386</div>
          <div style={styles.statLabel}>House Design</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>56</div>
          <div style={styles.statLabel}>Our Partner</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>78</div>
          <div style={styles.statLabel}>House Package</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>15Y</div>
          <div style={styles.statLabel}>Years Of Experience</div>
        </div>
      </div>
    
    <Main />
    </div>
  );
};

export default AboutUs;
