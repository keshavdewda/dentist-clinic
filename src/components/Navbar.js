import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger & Close Icons
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Logo URL (Direct Link)
  const logoUrl = "https://i.ibb.co/j90q7gPd/Gemini-Generated-Image-2mjbf52mjbf52mjb-removebg-preview.png";

  // Toggle Mobile Menu
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Handle Scroll Effect (Navbar style changes on scroll)
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    // Dynamic Class: Scroll hone par 'navbar active' ho jayega
    <nav className={scrolled ? "navbar active" : "navbar"}>
      <div className="navbar-container">
        
        {/* Logo Section */}
        <div className="logo" onClick={closeMobileMenu}>
          <img src={logoUrl} alt="DentCare Logo" className="logo-img" />
          <span className="logo-text">DentCare<span className="highlight">Pro</span></span>
        </div>

        {/* Mobile Menu Icon (Hamburger / Cross) */}
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMobileMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links" onClick={closeMobileMenu}>Services</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>About Us</a>
          </li>
          <li className="nav-item-btn">
            {/* Mobile View me Button alag dikhega */}
            <a href="#contact" className="btn-nav" onClick={closeMobileMenu}>Book Appointment</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;