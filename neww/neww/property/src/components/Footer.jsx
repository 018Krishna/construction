import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        <div style={styles.column}>
          <h2 style={styles.heading}>Teja Builders</h2>
          <p style={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.iconLink}><i className="fab fa-facebook"></i></a>
            <a href="#" style={styles.iconLink}><i className="fab fa-twitter"></i></a>
            <a href="#" style={styles.iconLink}><i className="fab fa-instagram"></i></a>
            <a href="#" style={styles.iconLink}><i className="fab fa-pinterest"></i></a>
          </div>
        </div>

        <div style={styles.column}>
          <h3 style={styles.subHeading}>Quick Links</h3>
          <ul style={styles.linkList}>
            <li><a href="#" style={styles.link}>Home</a></li>
            <li><a href="#" style={styles.link}>About Us</a></li>
            <li><a href="#" style={styles.link}>Our Team Work</a></li>
            <li><a href="#" style={styles.link}>Services</a></li>
            <li><a href="#" style={styles.link}>Work Gallery</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.subHeading}>Site Links</h3>
          <ul style={styles.linkList}>
            <li><a href="#" style={styles.link}>Privacy Policy</a></li>
            <li><a href="#" style={styles.link}>Disclaimer</a></li>
            <li><a href="#" style={styles.link}>Terms & Condition</a></li>
            <li><a href="#" style={styles.link}>Cookies Used</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h3 style={styles.subHeading}>Stay Tuned With Us</h3>
          <ul style={styles.linkList}>
            <li style={styles.contactInfo}><i className="fas fa-map-marker-alt"></i> Location info</li>
            <li style={styles.contactInfo}><i className="fas fa-envelope"></i> Hello@Email.com</li>
            <li style={styles.contactInfo}><i className="fas fa-phone"></i> (+62) 123 456 789</li>
          </ul>
        </div>
      </div>
      <div style={styles.footerBottom}>
        <p style={styles.footerText}>ALLRIGHT RESERVED - CODEBLISH DESIGN STUDIO</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f76b1c',
    color: '#fff',
    padding: '40px',
    textAlign: 'left',
    fontFamily: "'Roboto', sans-serif", // Updated font family
  },
  footerSection: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  column: {
    flex: '1',
    minWidth: '200px',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    fontFamily: "'Roboto', sans-serif", // Roboto font for headings
    fontWeight: '700',
  },
  text: {
    fontSize: '14px',
    marginBottom: '20px',
    fontFamily: "'Roboto', sans-serif", // Roboto for body text
    fontWeight: '400',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  iconLink: {
    color: '#fff',
    fontSize: '20px',
    textDecoration: 'none',
  },
  subHeading: {
    fontSize: '18px',
    marginBottom: '10px',
    fontFamily: "'Roboto', sans-serif", // Roboto for subheadings
    fontWeight: '700',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    fontSize: '14px',
    textDecoration: 'none',
    marginBottom: '8px',
    display: 'block',
    fontFamily: "'Roboto', sans-serif", // Roboto for links
  },
  contactInfo: {
    fontSize: '14px',
    marginBottom: '8px',
    fontFamily: "'Roboto', sans-serif", // Roboto for contact info
  },
  footerBottom: {
    textAlign: 'center',
    marginTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.5)',
    paddingTop: '10px',
  },
  footerText: {
    fontSize: '12px',
    fontFamily: "'Roboto', sans-serif", // Roboto for footer bottom text
  },
};

export default Footer;
