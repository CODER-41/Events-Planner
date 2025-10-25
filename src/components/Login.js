import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLoadingPopup, setShowLoadingPopup] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        setShowLoadingPopup(true);
          setTimeout(() => {
            setShowLoadingPopup(false);
            setShowWelcomePopup(true);
            setTimeout(() => {
              setShowWelcomePopup(false);
              localStorage.setItem('user', JSON.stringify(user));
              setUser(user);
              navigate('/dashboard');
            }, 3000);
          }, 3000);
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
      {showLoadingPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Loading...</h3>
            <p>Please wait while we log you in.</p>
          </div>
        </div>
      )}
      {showWelcomePopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Welcome to your Dashboard!</h3>
            <p>Enjoy your experience.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
