import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo.webp';

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

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
