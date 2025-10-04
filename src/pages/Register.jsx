import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });

  const validateUsername = (username) => {
    if (username.length < 5 || username.length > 50) {
      return 'Username must be between 5 and 50 characters';
    }
    return '';
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number';
    }
    if (!/[@#$%^&*()_+\-=\[\]{}|;:,.<>?]/.test(password)) {
      return 'Password must contain at least one special character (@, #, $, etc.)';
    }
    return '';
  };

  const validateRole = (role) => {
    if (!role) {
      return 'Please select a role';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    let error = '';
    switch (name) {
      case 'username':
        error = validateUsername(value);
        break;
      case 'email':
        error = validateEmail(value);
        break;
      case 'password':
        error = validatePassword(value);
        break;
      case 'role':
        error = validateRole(value);
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameError = validateUsername(formData.username);
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const roleError = validateRole(formData.role);

    setErrors({
      username: usernameError,
      email: emailError,
      password: passwordError,
      role: roleError
    });

    if (!usernameError && !emailError && !passwordError && !roleError) {
      console.log('Form submitted successfully:', formData);
      alert('Registration successful!');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
          <h2 className="register-title">Register</h2>

          <div className="form-group">
            <input
              type="text"
              name="username"
              className={`form-input ${errors.username ? 'error' : ''}`}
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <span className="error-message">{errors.username}</span>}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              className={`form-input ${errors.password ? 'error' : ''}`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-group">
            <select
              name="role"
              className={`form-input ${errors.role ? 'error' : ''}`}
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select a role</option>
              <option value="Admin">Admin</option>
              <option value="Customer">Customer</option>
            </select>
            {errors.role && <span className="error-message">{errors.role}</span>}
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>

          <div className="login-link">
            Already a user? <Link to="/login">Log in here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
