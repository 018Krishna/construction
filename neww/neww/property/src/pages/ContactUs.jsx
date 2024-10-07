import React from 'react';
import Navbar from '../components/Header';
import Footer from '../components/Footer';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div style={styles.formContainer}>
      <h3 style={styles.formHeading}>Leave a Message For Us</h3>
      <p style={styles.formDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
      </p>
      <form style={styles.form}>
        <div style={styles.inputRow}>
          <div style={styles.inputColumn}>
            <p style={styles.Formheading}>First Name</p>
            <input
              type="text"
              placeholder="Ex. Jatin"
              style={styles.inputField}
            />
          </div>
          
          <div style={styles.inputColumn}>
            <p style={styles.Formheading}>Second Name</p>
            <input type="text" placeholder="Ex. Sharma" style={styles.inputField} />
          </div>
        </div>
        
        <div style={styles.inputRow}>
          <div style={styles.inputColumn}>
            <p style={styles.Formheading}>E-mail</p>
            <input
              type="email"
              placeholder="Ex. Hello@email"
              style={styles.inputField}
            />
          </div>
          
          <div style={styles.inputColumn}>
            <p style={styles.Formheading}>Subject</p>
            <select style={styles.inputField}>
              <option>-- Choose Topic --</option>
            </select>
          </div>
        </div>

        <div style={styles.messageContainer}>
          <p style={styles.Formheading}>Message</p>
          <textarea
            placeholder="Your message..."
            style={{ ...styles.inputField, width: '100%', height: '80px', marginBottom: '20px' }}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div style={styles.contactInfoContainer}>
      <h4 style={styles.contactHeading}>STAY TUNED WITH US</h4>
      <h2 style={styles.contactTitle}>Keep Connected & Lets Get In Touch With Our Team</h2>
      <p style={styles.contactDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div style={styles.contactDetails}>
        <div style={styles.contactDetailItem}>
          <span style={styles.icon}><FaLocationDot /></span>
          <p>Our Head Office: Gresik a</p>
        </div>
        <div style={styles.contactDetailItem}>
          <span style={styles.icon}><MdEmail /></span>
          <p>Email Address: Hello@Email.com</p>
        </div>
        <div style={styles.contactDetailItem}>
          <span style={styles.icon}><FaPhoneAlt /></span>
          <p>Telephone: (+62) 123 456 789</p>
        </div>
      </div>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.contactSection}>
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>   
  );
};

const styles = {
  contactSection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    backgroundColor: 'rgba(249, 249, 249, 1)',
    borderRadius: '10px',
    marginLeft: '80px',
    padding: '30px',
    width: '45%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  formHeading: {
    fontSize: '50px',
    marginBottom: '10px',
  },
  formDescription: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  inputColumn: {
    display: 'flex',
    flexDirection: 'column',
    width: '48%',
  },
  Formheading: {
    marginBottom: '5px',
    fontSize: '14px',
  },
  inputField: {
    padding: '10px',
    borderRadius: '25px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  submitButton: {
    backgroundColor: '#F97316',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '35px',
    cursor: 'pointer',
    fontSize: '18px',
    width:'200px'
  },
  contactInfoContainer: {
    width: '45%',
    padding: '30px',
  },
  contactHeading: {
    fontSize: '14px',
    color: '#F97316',
    textTransform: 'uppercase',
    marginBottom: '10px',
  },
  contactTitle: {
    fontSize: '54px',
    marginBottom: '20px',
    fontWeight:'Bold'
  },
  contactDescription: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#666',
    lineHeight: '1.6',
  },
  contactDetails: {
    fontSize: '14px',
  },
  contactDetailItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    fontSize: '18px',
    color: '#F97316',
    marginRight: '10px',
  },
};

export default ContactUs;