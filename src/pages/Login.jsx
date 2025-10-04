import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    role: ''
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePassword = (password) => {
    if (password.length < 1) {
      return 'Password is required';
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

    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const roleError = validateRole(formData.role);

    setErrors({
      email: emailError,
      password: passwordError,
      role: roleError
    });

    if (!emailError && !passwordError && !roleError) {
      console.log('Login form submitted successfully:', formData);
      alert('Login successful!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Log In</h2>

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
            Log In
          </button>

          <div className="register-link">
            Don't have an account? <Link to="/register">Sign up here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
