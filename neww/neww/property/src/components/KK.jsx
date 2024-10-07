import React from 'react';

const KK = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '40px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
  };

  const leftSectionStyle = {
    width: '60%',
  };

  const rightSectionStyle = {
    width: '35%',
  };

  const mainImageStyle = {
    backgroundColor: '#ddd',
    height: '350px',
    borderRadius: '10px',
    position: 'relative',
  };

  const secondaryImageStyle = {
    backgroundColor: '#ddd',
    height: '160px',
    width: '48%',
    borderRadius: '10px',
    marginBottom: '10px',
  };

  const smallImageContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const priceTagStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '10px',
    padding: '10px',
    width: '90%',
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const locationStyle = {
    fontSize: '14px',
    color: '#999',
  };

  const buttonStyle = {
    backgroundColor: '#FF6900',
    color: 'white',
    borderRadius: '20px',
    border: 'none',
    padding: '10px 20px',
    fontSize: '14px',
    position: 'absolute',
    top: '50%',
    right: '20px',
    transform: 'translateY(-50%)',
  };

  const bedBathStyle = {
    fontSize: '12px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  };

  const exploreButtonStyle = {
    backgroundColor: '#FF6900',
    color: 'white',
    borderRadius: '30px',
    border: 'none',
    padding: '15px 30px',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '30px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      {/* Left Section */}
      <div style={leftSectionStyle}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold' }}>Some of our Projects</h2>
        <p style={{ color: '#FF6900', fontSize: '14px', marginBottom: '20px' }}>04 | Projects</p>
        <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.6' }}>
          Explore a curated selection of luxury homes and high-end real estate designed to suit your preferences and needs.
        </p>
      </div>

      {/* Right Section */}
      <div style={rightSectionStyle}>
        <div style={mainImageStyle}>
          {/* Price Tag */}
          <div style={priceTagStyle}>
            <div style={priceStyle}>₹10,800,000</div>
            <div style={locationStyle}>Noida Sun City, Miami Beach, FL</div>
            <div style={bedBathStyle}>
              <span>6 bedrooms</span>
              <span>7 bathrooms</span>
            </div>
            <button style={buttonStyle}>Book Now</button>
          </div>
        </div>

        <div style={smallImageContainerStyle}>
          {/* Secondary Image */}
          <div style={secondaryImageStyle}></div>
          <div style={secondaryImageStyle}></div>
        </div>
        <div style={smallImageContainerStyle}>
          {/* Small Images */}
          <div style={secondaryImageStyle}></div>
          <div style={secondaryImageStyle}></div>
        </div>

        <button style={exploreButtonStyle}>Explore More Properties</button>
      </div>
    </div>
  );
};

export default KK;
