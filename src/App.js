// src/App.js
import React from 'react';
import Navbar from './Navbar'; // Import Navbar
import Home from './Home';     // Import Home
// You can remove App.css import if you aren't using it
// import './App.css'; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;