import React from 'react';

// Inline styles object
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  cardWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns for cards
    gap: '20px', // Space between cards
  },
  ownerCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row', // Changed to row to place image and details side by side
    justifyContent: 'space-between',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
  },
  ownerImage: {
    width: '200px', // Adjusted width
    height: '270px',
    backgroundColor: '#e0e0e0',
    borderRadius: '15px', // Rounded image
    marginRight: '20px', // Added space between image and details
  },
  ownerDetails: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
  },
  ownerName: {
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '5px',
    justifyContent: 'top',
    padding:'1px'
  },
  contactEmail: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px',
  },
  propertyInfo: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  appointmentButton: {
    padding: '10px 20px',
    backgroundColor: '#ff6600',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    alignSelf: 'flex-start', // Align button to the start
  },
  
};

const Bestprop = () => {
  // Dummy data representing property owners
  const owners = [
    {
      name: 'Abdul Salam',
      email: 'hossaininvain@gmail.com',
      houses: 12,
      apartments: 4,
      flats: 7,
    },
    {
      name: 'Abdul Salam',
      email: 'jassicaowner@gmail.com',
      houses: 16,
      apartments: 8,
      flats: 10,
    },
    {
      name: 'Abdul Salam',
      email: 'hossaininvain@gmail.com',
      houses: 80,
      apartments: 14,
      flats: 16,
    },
    {
      name: 'Abdul Salam',
      email: 'jassicaowner@gmail.com',
      houses: 24,
      apartments: 8,
      flats: 20,
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.sectionTitle}>Best Property Owner</h2>
      <div style={styles.cardWrapper}>
        {owners.map((owner, index) => (
          <div key={index} style={styles.ownerCard}>
            <div style={styles.ownerImage}></div>
            <div style={styles.ownerDetails}>
              <div style={styles.ownerName}>{owner.name}</div>
              <div style={styles.contactEmail}>{owner.email}</div>
              <div style={styles.propertyInfo}>
                <div>🏢 {owner.houses} House</div>
                <div>🏢 {owner.apartments} Apartment</div>
                <div> 🏢{owner.flats} Flats</div>
                <button style={styles.appointmentButton}>Make Appointment</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestprop;
