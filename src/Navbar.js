import React from 'react';
import './Navbar.css';
import logo from './logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar"> {/* The .navbar class in Navbar.css already handles header styling */}
      {/* The .navbar__logo class in Navbar.css styles the brand container (logo + text) */}
      <a href="/" className="navbar__logo">
        <img src={logo} alt="Event Planner Logo" className="navbar__logo-img" /> {/* Use specific image styling */}
        <span>Event Planner</span> {/* Text styling inherited from .navbar__logo */}
      </a>
      <ul className="navbar__links">
        <li><a href="#home">Home</a></li> {/* Styling from .navbar__links a */}
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="https://wa.me/254115481953" target="_self" rel="noopener noreferrer" className="navbar__button">
        Talk to us
      </a>
    </nav>
  );
};

export default Navbar;