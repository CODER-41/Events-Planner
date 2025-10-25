import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.webp';

const Navbar = ({ user, setUser }) => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo">
        <img src={logo} alt="Event Planner Logo" className="navbar__logo-img" />
        <span>Snakepiece Event House Kenya</span>
      </Link>
      <ul className="navbar__links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Services</Link></li>
        <li><a href="#rankings">Rankings</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar__auth">
        {/* Only show Login and Sign Up if no user is logged in */}
        {!user && (
          <>
            <Link to="/login" className="navbar__link">Login</Link>
            <Link to="/signup" className="navbar__link navbar__signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
