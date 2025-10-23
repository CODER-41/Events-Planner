import React from 'react';
import './App.css';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Event Planner</h1>
      <p>Your one-stop solution for managing amazing events!</p>
      <About />
      <Contact />
    </div>
  );
}

export default App;