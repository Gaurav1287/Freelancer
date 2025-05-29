import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">

        <h1><img src="/images/logo.png" alt="GarvityIntel Logo" className="logo-img" /> GravityIntel</h1>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>☰</div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/">About Us</a></li>

        <li className={`dropdown ${isServicesOpen ? 'active' : ''}`}>
          <div className="dropdown-toggle" onClick={toggleServicesMenu}>
           <a href="#/">Services</a>  <span>{isServicesOpen ? '▲' : '▼'}</span>
          </div>
          {isServicesOpen && (
            <ul className="dropdown-popup">
              <div className="dropdown-column">
                <a href="/">Web Development</a>
                <a href="/">Mobile App</a>
                <a href="/">Web Development</a>
                <a href="/">Mobile App</a>
                <a href="/">Game App</a>
              </div>
              <div className="dropdown-column">
                <a href="/">Gov Contact</a>
                <a href="/">Tech Support</a>
                <a href="/">Public service</a>
              </div>
            </ul>
          )}
        </li>

        <li><a href="/">Career</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
