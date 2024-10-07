import React, { useState } from 'react';
import Navbar from '../components/Header';
import Bestprop from '../components/Bestprop';
import Footer from '../components/Footer';

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allProperties = [
    {
      title: 'Charming Suburban Homes',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹600,000',
      category: 'House',
      beds: 4,
      baths: 3,
      size: '1500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal. ',
    },
    {
      title: 'Spacious Family Houses',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹1,200,000',
      category: 'House',
      beds: 4,
      baths: 3,
      size: '2500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
    {
      title: 'Small Houses',
      location: '7 A-3 Paschim Vihar, New Delhi',
      price: '₹1,500,000',
      category: 'Small House',
      beds: 4,
      baths: 3,
      size: '2500 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal. ',
    },
    {
      title: 'Modern Townhouse',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹650,000',
      category: 'Apartment',
      beds: 4,
      baths: 3,
      size: '1800 sqft',
      description:'The building is a state-of-the-art, 12-story ',
    },
    {
      title: 'Mountain Retreat',
      location: '2 A-3 Paschim Vihar, New Delhi',
      price: '₹1,200,000',
      category: 'Mansion',
      beds: 4,
      baths: 3,
      size: '2000 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
    {
      title: 'Eco-Friendly Home',
      location: '4 A-3 Paschim Vihar, New Delhi',
      price: '₹900,000',
      category: 'Mansion',
      beds: 4,
      baths: 3,
      size: '2000 sqft',
      description:'The building is a state-of-the-art, 12-story structure designed to balance functionality with aesthetic appeal.',
    },
  ];

  // Filter Properties based on search term and category
  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'All' || property.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProperties.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + filteredProperties.length) % filteredProperties.length
    );
  };

  // Styles
  const carouselContainer = {
    position: 'relative',
    width: '100%',
    maxWidth: '1100px',
    margin: 'auto',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    alignItems: 'center',
  };

  const propertyCard = {
    width: '100%',
    padding: '80px',
    backgroundColor: '#f5f5f5',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'flex-start',
  };

  const propertyInfo = {
    maxWidth: '50%',
    background: 'lightgray',  // The bigger background
    padding: '40px', 
    borderRadius: '20px',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const locationStyle = {
    fontSize: '1.1rem',
    color: '#888',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const iconStyle = {
    display: 'inline-block',
    fontSize: '1rem',
    marginRight: '8px',
    color: '#555',
  };

  const detailsStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    gap: '15px',
    marginBottom: '15px',
    color: '#555',
  };

  const descriptionStyle = {
    color: '#555',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#ff6f00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
  };

  const arrowButtonStyle = {
    backgroundColor: '#ccc',
    border: 'none',
    padding: '10px',
    borderRadius: '50%',
    cursor: 'pointer',
    fontSize: '1.2rem',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  };

  const leftArrowStyle = {
    left: '15px',
  };

  const rightArrowStyle = {
    right: '15px',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: 'auto',
    padding: '20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    
  };

  const cardStyle = {
    backgroundColor: '#f5f5f5',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    
  };

  const imagePlaceholderStyle = {
    width: '100%',
    height: '250px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    marginBottom: '15px',
  };

  const searchBarStyle = {
    width: '50%',
    padding: '10px',
    marginBottom: '40px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
  };

  const categoryBarStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  };

  const categoryButtonStyle = (category) => ({
    padding: '10px 20px',
    margin: '0 10px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: selectedCategory === category ? '#ff6f00' : '#fff',
    color: selectedCategory === category ? '#fff' : '#333',
  });

  return (
    <div>
      <Navbar />
      {/* Carousel Section */}
      <div style={carouselContainer}>
        {/* Left Arrow */}
        <button
          style={{ ...arrowButtonStyle, ...leftArrowStyle }}
          onClick={handlePrev}
        >
          
        </button>

        {/* Property Info */}
        <div style={propertyCard}>
          <div style={propertyInfo}>
            <h2 style={titleStyle}>{filteredProperties[currentIndex]?.title}</h2>
            <p style={locationStyle}>{filteredProperties[currentIndex]?.location}</p>
            <p style={priceStyle}>{filteredProperties[currentIndex]?.price}</p>

            
            <p style={descriptionStyle}>{filteredProperties[currentIndex]?.description}</p>
            <button style={buttonStyle}>
              View More <span style={{ marginLeft: '5px' }}>➜</span>
            </button>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          style={{ ...arrowButtonStyle, ...rightArrowStyle }}
          onClick={handleNext}
        >
         
        </button>
      </div>

      {/* Search and Category Filters */}
      <div style={containerStyle}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by title or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchBarStyle}
        />

        {/* Category Filter */}
        <div style={categoryBarStyle}>
          {['All', 'House', 'Apartment', 'Small House', 'Mansion'].map((category) => (
            <button
              key={category}
              style={categoryButtonStyle(category)}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div style={gridStyle}>
          {filteredProperties.map((property, index) => (
            <div key={index} style={cardStyle}>
              <div style={imagePlaceholderStyle}></div>
              <h3 style={{fontWeight:'bold'}}>{property.title}</h3>
              <p>{property.location}</p>
              <button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="love" width="40" height="40">
    <circle cx="256" cy="256" r="244.49" fill="#f25268"></circle>
    <path fill="#fff" d="M381.91 157.66C339.49 99.28 256 133.72 256 193c0-59.29-83.5-93.74-125.93-35.35C86.23 218 129.45 323.74 256 384.48 382.54 323.74 425.77 218 381.91 157.66z"></path>
  </svg>
</button>

            <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="40" viewBox="0 0 24 24" id="share">
  <path fill="none" d="M0 0h24v24H0V0z"></path>
  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"></path>
</svg></button>
              <p style={{ display:'space-between', color: '#050404', fontWeight: 'bold' }}>{property.price}</p>
            </div>
          ))}
        </div>
        <Bestprop />
      </div>
      <Footer />
    </div>
  );
};

export default Properties;
