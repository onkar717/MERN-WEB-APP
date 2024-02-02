// Login.js
import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required placeholder='Username' />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required placeholder='password' />

        <button type="submit">Login</button>

        <Link to='/register'>
        <span className='account'>Create an Account ?</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
