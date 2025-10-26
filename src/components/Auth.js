import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import snakeImage from '../images/Snake.png';

const Auth = ({ setUser, isLoginInitial }) => {
  const [isLogin, setIsLogin] = useState(isLoginInitial);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nationalId, setNationalId] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    if (!isLogin) {
      if (password !== confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }
      if (!/^\d{8}$/.test(nationalId)) {
        setError('National ID must be exactly 8 digits');
        setIsLoading(false);
        return;
      }
      if (!acceptTerms) {
        setError('Please accept the Terms of Service');
        setIsLoading(false);
        return;
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
        const users = await response.json();
        const existingUser = users.find(u => u.email === email || u.nationalId === nationalId);
        if (existingUser) {
          setError('Email or National ID already exists');
          setIsLoading(false);
          return;
        }
        const newUser = {
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
          }, 1000);
        } else {
          setError('Signup failed. Please try again.');
        }
      } catch (err) {
        setError('Signup failed. Please try again.');
      }
    } else {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
        const users = await response.json();
        const user = users.find(u => u.email === email && u.password === password && u.nationalId === nationalId);
        if (user) {
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
            localStorage.setItem('user', JSON.stringify(user));
            setUser(user);
            navigate('/dashboard');
          }, 1000);
        } else {
          setError('There is no user account with the provided details. Please create an account to be granted access to login.');
        }
      } catch (err) {
        setError('Login failed. Please try again.');
      }
    }
    setIsLoading(false);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setNationalId('');
    setAcceptTerms(false);
  };

  return (
    <div className="auth-container">
      <div className={`auth-panel ${isLogin ? 'form-panel' : 'image-panel'}`} style={{ order: isLogin ? 1 : 2 }}>
        {isLogin ? (
          <div className="auth-form-wrapper">
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
              <button type="submit" className="auth-btn" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
            <p>Don't have an account? <button onClick={toggleMode} className="toggle-link-btn">Sign up</button></p>
          </div>
        ) : (
          <div className="decorative-content rain">
            <img src={snakeImage} alt="Snake" />
          </div>
        )}
      </div>
      <div className={`auth-panel ${isLogin ? 'image-panel' : 'form-panel'}`} style={{ order: isLogin ? 2 : 1 }}>
        {isLogin ? (
          <div className="decorative-content rain">
            <img src={snakeImage} alt="Snake" />
          </div>
        ) : (
          <div className="auth-form-wrapper">
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
              <button type="submit" className="auth-btn" disabled={isLoading}>
                {isLoading ? 'Creating account...' : 'Create an account'}
              </button>
            </form>
            <p>Already have an account? <button onClick={toggleMode} className="toggle-link-btn">Sign in</button></p>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>{isLogin ? 'Welcome to your Dashboard!' : 'Account Created!'}</h3>
            <p>{isLogin ? 'Enjoy your experience.' : 'Please log in to continue.'}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
