import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import snakeImage from '../images/Snake.png';

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');
  const [showLoadingPopup, setShowLoadingPopup] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const users = await response.json();
      const user = users.find(u => u.email === email && u.password === password && u.nationalId === nationalId);
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
        setError('Invalid email, password, or National ID');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="login-form-wrapper">
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
            <div className="form-group password-group">
              <label>Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="form-group">
              <label>National ID (8 digits only)</label>
              <input
                type="text"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value.replace(/\D/g, '').slice(0, 8))}
                placeholder="Enter your 8-digit National ID"
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="login-btn">Sign in</button>
          </form>
          <p>Don't have an account? <button onClick={() => navigate('/signup')} className="signup-link-btn">Sign up</button></p>
        </div>
      </div>
      <div className="login-right-panel rain">
        <div className="decorative-content">
          <img src={snakeImage} alt="Snake" />
        </div>
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
