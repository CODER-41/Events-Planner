import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import BookingDetails from './components/BookingDetails';

function AppContent() {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Load user data from localStorage on app start
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <div className="App">
      {!user && <Navbar user={user} setUser={setUser} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth setUser={setUser} isLoginInitial={true} />} />
        <Route path="/signup" element={<Auth setUser={setUser} isLoginInitial={false} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/bookings/:id" element={<BookingDetails />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
