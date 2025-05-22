import React, { useState } from 'react';


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
      <div className="menu-icon" onClick={toggleMenu}>
        &#9776;
      </div>
    </nav>
  );
};




export default Navbar;
