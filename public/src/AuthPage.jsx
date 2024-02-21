// src/AuthPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const AuthPage = () => {
  return (
    <div>
      <h2>Authentication</h2>
      <p>Please log in or register to access the full features of the website.</p>
      <div>
        {/* Assuming you will implement these routes/components */}
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
};

export default AuthPage;
