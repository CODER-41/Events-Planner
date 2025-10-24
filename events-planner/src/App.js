import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Services from "./components/Services";

function App() {
  return (
    <Router>
      <nav style={{ backgroundColor: "#222", padding: "10px" }}>
        <Link to="/" style={{ color: "white", marginRight: "15px" }}>
          Home
        </Link>
        <Link to="/services" style={{ color: "white" }}>
          Services
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2 style={{ padding: "20px" }}>Welcome to Events Planner</h2>} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;


