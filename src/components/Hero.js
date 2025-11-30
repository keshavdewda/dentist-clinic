import React, { useEffect, useState } from 'react';
import { FaShieldAlt, FaArrowRight, FaPlay, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hero-section" id="home">
      
      {/* =========================================
          1. BACKGROUND IMAGE LAYER
         ========================================= */}
      <div className="doctor-backdrop" style={{ transform: `translateY(${offset * 0.2}px)` }}>
        <img 
          src="https://i.ibb.co/jmqy7jZ/Gemini-Generated-Image-594l61594l61594l.png" 
          alt="Dr. Neha & Team" 
          className="doctor-big-img"
        />
        
        {/* --- THE UNIFIED NAME CARD --- */}
        {/* Ye card ab mobile par perfect position par aayega */}
        <div className="doctors-floating-badge">
           <div className="badge-content">
              <div className="doc-info">
                <span className="doc-icon">👨‍⚕️</span>
                <span className="doc-text">Dr. Sandeep Patel</span>
              </div>
              <div className="vertical-sep"></div>
              <div className="doc-info">
                <span className="doc-icon">👩‍⚕️</span>
                <span className="doc-text">Dr. Neha Patel</span>
              </div>
           </div>
        </div>

        <div className="overlay-gradient"></div>
      </div>

      {/* =========================================
          2. MAIN CONTENT LAYER
         ========================================= */}
      <div className="hero-container">
        
        <div className="hero-content">
          <div className="badge-pill bounce-in">
            <FaShieldAlt className="badge-icon" /> #1 Dental Clinic
          </div>
          
          <h1 className="slide-up-text">
            We Design Your <br />
            <span className="text-gradient">Perfect Smile.</span>
          </h1>
          
          <p className="fade-in-text">
            Experience world-class dental care with our expert team. 
            Advanced technology meets compassionate care for your entire family.
          </p>
          
          <div className="hero-btns fade-in-up">
            <a href="#contact" className="btn btn-primary-hero">
              Book Appointment <FaArrowRight className="btn-icon" />
            </a>
            <button className="btn btn-video">
               <div className="play-icon"><FaPlay size={10} /></div> Watch Video
            </button>
          </div>

          <div className="trust-row fade-in-up-delay">
            <div className="trust-item">
              <h3>15+</h3>
              <span>Years Exp.</span>
            </div>
            <div className="divider"></div>
            <div className="trust-item">
              <h3>5k+</h3>
              <span>Happy Patients</span>
            </div>
          </div>
        </div>

        <div className="hero-spacer"></div>

      </div>
    </header>
  );
};

export default Hero;