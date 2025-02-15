import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <img src="/https://wallpapers.com/images/featured/hogwarts-aesthetic-gcztte8rnc68ag2o.jpg" alt="Harry Potter Hackathon Logo" /> */}
        <span className="logo-text">Harry Potter Hackathon</span>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home" className="nav-link">
          <span className="link-text">Home</span>
          <span className="link-icon">🏰</span>
        </a>
        <a href="#about" className="nav-link">
          <span className="link-text">About</span>
          <span className="link-icon">📜</span>
        </a>
        <a href="#challenges" className="nav-link">
          <span className="link-text">Challenges</span>
          <span className="link-icon">⚔️</span>
        </a>
        <a href="#sponsors" className="nav-link">
          <span className="link-text">Sponsors</span>
          <span className="link-icon">💰</span>
        </a>
        <a href="#contact" className="nav-link">
          <span className="link-text">Contact</span>
          <span className="link-icon">🦉</span>
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`toggle-icon ${isOpen ? 'open' : ''}`}>☰</span>
      </div>
    </nav>
  );
};

export default Navbar;