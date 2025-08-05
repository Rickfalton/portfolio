import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">RICKLALTON PORTFOLIO</a>
      </div>
      <ul className={`nav-links ${isMobile ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Projects</a></li>
        <li><a href="#services">Stack</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="menu-icon">
        <button onClick={toggleMenu} aria-label={isMobile ? "Close menu" : "Open menu"}>
          {isMobile ? '✖' : '☰'}
        </button>
      </div>
      
    </nav>
  );
};

export default Navbar;