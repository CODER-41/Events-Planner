// src/components/NavBar.js

import React from 'react';
// The Link component is essential for client-side routing
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '10px', background: '#333' }}>
      <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Services</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>About Us</Link>
    </nav>
  );
}

export default NavBar;