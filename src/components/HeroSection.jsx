import React from 'react';
import '../styles/HeroSection.css'; // Import your CSS file for styling
import '../styles/fonts.css'; // Import your CSS file for styling


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="text-7xl  font-extrabold" style={{ fontFamily: 'HarryP, sans-serif' , fontSize:"8rem" }}>  Hacknovate 6.0</h1>
        <h1 className="text-2xl ">  Launching...</h1>
        {/* <p className="hero-text">
          Join us for the most magical hackathon of the year! Unleash your creativity, cast your code, and build something extraordinary.
        </p> */}
        <a
          href="https://discord.gg/your-discord-link"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button mt-10"
        >
          Join Discord
        </a>
      </div>
    </div>
  );
};

export default HeroSection;