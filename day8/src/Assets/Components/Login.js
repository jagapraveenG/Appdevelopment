import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      // There are validation errors, update state with errors
      setErrors(errors);
    } else {
      // Validation passed, perform login logic
      console.log('Username:', username);
      console.log('Password:', password);

      // Reset form fields and errors
      setUsername('');
      setPassword('');
      setErrors({});

      // Navigate to the home page
      window.location.href = '/home';
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-heading">LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleNameChange}
            required
          />
          {errors.username && <p className="error">{errors.username}</p>}

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">LOGIN</button>
        </form>
       
      </div>
    </div>
  );
};

export default LoginPage;
