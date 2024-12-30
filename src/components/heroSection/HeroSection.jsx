import React from 'react';
import homepic from '../../assets/images/homepic.jpg'; // Adjust the path relative to HeroSection.jsx
import mobilescreen from '../../assets/images/mobilescreen.jpg'; // Adjust the path for the logo image

const HeroSection = () => {
  const heroStyle = {
    position: 'relative',
    width: '100%',
    height: '60vh', // Reduced the height from 90vh to 60vh
    overflow: 'hidden', // To prevent overflow
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%', // Ensure the image fills the adjusted container height
    objectFit: 'cover', // Ensures the image covers the entire space without stretching
  };

  return (
    <div style={heroStyle}>
      {/* Media query logic for large screens and mobile screens */}
      <img
        src={homepic} // Default large screen image
        alt="Home"
        style={imageStyle}
        className="hidden sm:block" // Hidden on small screens (mobile)
      />
      <img
        src={mobilescreen} // Default mobile image
        alt="Logo"
        style={imageStyle}
        className="sm:hidden" // Hidden on larger screens
      />
    </div>
  );
};

export default HeroSection;
