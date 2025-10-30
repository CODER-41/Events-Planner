import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import snakeImage from '../images/Snake.png';

const Signup = ({ setUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!/^\d{8}$/.test(nationalId)) {
      setError('National ID must be exactly 8 digits');
      return;
    }
    if (!acceptTerms) {
      setError('Please accept the Terms of Service');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
      const users = await response.json();
      const existingUser = users.find(u => u.email === email || u.nationalId === nationalId);
      if (existingUser) {
        setError('Email or National ID already exists');
        return;
      }
      const newUser = { // json-server will create the id
        name,
        email,
        password,
        nationalId
      };
      const postResponse = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      if (postResponse.ok) {
        const createdUser = await postResponse.json();
        setUser(createdUser);
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          navigate('/dashboard');
        }, 3000);
      } else {
        setError('Signup failed. Please try again.');
      }
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left-panel">
        <div className="signup-form-wrapper">
          <h2>Create Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div className="form-group password-group">
              <label>Confirm Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <div className="form-group checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={acceptTerms}
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                  required
                />
                I accept the <a href="/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a>
              </label>
            </div>
            <p className="instructions">Please provide your original details as they cannot be edited once you are logged in.</p>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="signup-btn">Create an account</button>
          </form>
          <p>Already have an account? <button onClick={() => navigate('/login')} className="login-link-btn">Sign in</button></p>
        </div>
      </div>
      <div className="signup-right-panel rain">
        <div className="decorative-content">
          <img src={snakeImage} alt="Snake" />
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Account Created!</h3>
            <p>Please log in to continue.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;