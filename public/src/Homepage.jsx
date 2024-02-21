// src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav>
        <div className="nav-brand"><Link to="/">Spotbot</Link></div>
        <ul className="nav-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/auth">Login/Register</Link></li>
        </ul>
      </nav>
      
      <header className="hero-section">
        <h1>Welcome to Spotbot</h1>
        <p>Reconnecting Missing Persons With Their Loved Ones Across Kenya</p>
      </header>
      
      <main>
        <section className="about-spotbot">
          <h2>About Spotbot</h2>
          <p>
            Spotbot is a dedicated platform designed to assist in the search and safe recovery of missing persons in Kenya, whether adults or children. Our mission is to leverage community effort alongside technology to provide timely and critical information that aids in locating loved ones.
          </p>
        </section>
        
        <section className="how-it-works">
          <h2>How It Works</h2>
          <p>
            By registering on our platform, you gain access to a network of active searches and sighting reports across the country. Whether you're trying to find a missing relative or you've spotted someone who might be lost, Spotbot provides a centralized platform to report and access this vital information.
          </p>
        </section>
      </main>
      
      <footer>
        <p>© 2024 Spotbot. All rights reserved.</p>
        <p>For more information, support, or to report a sighting, please contact us.</p>
      </footer>
    </div>
  );
};

export default HomePage;
