import React, { useState, useEffect, useRef } from 'react';
import {
  FaTooth, FaSmile, FaChild, FaCrown, FaAlignCenter, 
  FaTeeth, FaTeethOpen, FaMagic, FaShieldAlt, FaStar, 
  FaArrowRight, FaCheck, FaPaintBrush, FaDesktop,
  FaRobot, FaXRay
} from 'react-icons/fa';
import './Services.css';

const Services = ({ isPopup = false, onBookNow }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);
  const bookingClickedRef = useRef(false);

  useEffect(() => {
    if (isPopup) {
      window.scrollTo(0, 0);
    }
  }, [isPopup]);

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: <FaStar />, color: '#2563eb' },
    { id: 'general', name: 'General Dentistry', icon: <FaTooth />, color: '#059669' },
    { id: 'cosmetic', name: 'Cosmetic Dentistry', icon: <FaSmile />, color: '#ec4899' },
    { id: 'implant', name: 'Dental Implants', icon: <FaCrown />, color: '#f59e0b' },
    { id: 'ortho', name: 'Orthodontics', icon: <FaAlignCenter />, color: '#8b5cf6' },
    { id: 'digital', name: 'Digital Dentistry', icon: <FaDesktop />, color: '#06b6d4' },
  ];

  // ALL 13 SERVICES
  const allServices = [
    {
      id: 1,
      title: "Root Canal Treatment",
      description: "Painless root canal therapy using advanced rotary endodontics.",
      icon: <FaTooth />,
      category: 'general',
      features: ["Painless Procedure", "Single Visit", "Microscopic Precision", "High Success Rate"],
      details: "Advanced root canal treatment to save infected teeth with minimal discomfort."
    },
    {
      id: 2,
      title: "Laser Filling",
      description: "Painless cavity treatment with laser technology.",
      icon: <FaMagic />,
      category: 'general',
      features: ["No Drilling", "Painless", "Quick Recovery", "Precise"],
      details: "Modern laser technology for cavity treatment without traditional drilling."
    },
    {
      id: 3,
      title: "Wisdom Tooth Extraction",
      description: "Safe removal of impacted wisdom teeth with minimal discomfort.",
      icon: <FaTeethOpen />,
      category: 'general',
      features: ["Painless Removal", "Quick Recovery", "Expert Surgical", "Digital X-Ray"],
      details: "Expert surgical extraction of wisdom teeth when needed."
    },
    {
      id: 4,
      title: "Complete Denture",
      description: "Full mouth restoration with custom-made removable dentures.",
      icon: <FaTeeth />,
      category: 'general',
      features: ["Custom Fit", "Natural Look", "Comfortable", "Durable"],
      details: "Complete oral rehabilitation with custom dentures."
    },
    {
      id: 5,
      title: "Implant Denture",
      description: "Fixed implant-supported dentures for superior stability.",
      icon: <FaShieldAlt />,
      category: 'implant',
      features: ["Non-Removable", "Secure Fit", "Bone Health", "Natural Function"],
      details: "Combines implant strength with denture convenience for best results."
    },
    {
      id: 6,
      title: "Orthodontic Treatment",
      description: "Teeth alignment for perfect smile and bite correction.",
      icon: <FaAlignCenter />,
      category: 'ortho',
      features: ["Metal Braces", "Ceramic Braces", "Bite Correction", "Customized"],
      details: "Professional teeth straightening for better function and aesthetics."
    },
    {
      id: 7,
      title: "Clear Aligners",
      description: "Invisible aligner treatment for discreet teeth straightening.",
      icon: <FaXRay />,
      category: 'ortho',
      features: ["Invisible", "Removable", "Comfortable", "Custom Made"],
      details: "Modern alternative to traditional braces - nearly invisible treatment."
    },
    {
      id: 8,
      title: "Zirconia Crown",
      description: "Strong and aesthetic metal-free crowns.",
      icon: <FaCrown />,
      category: 'cosmetic',
      features: ["Metal-Free", "High Strength", "Natural Look", "Biocompatible"],
      details: "Durable and aesthetic crown solution that blends perfectly."
    },
    {
      id: 9,
      title: "E-Max Crown",
      description: "Premium ceramic crowns for superior aesthetics.",
      icon: <FaCrown />,
      category: 'cosmetic',
      features: ["Superior Aesthetics", "Strong", "Natural Translucency", "Long-lasting"],
      details: "High-end ceramic crowns for the most natural-looking results."
    },
    {
      id: 10,
      title: "Digital Dentistry",
      description: "Advanced digital technology for precise dental work.",
      icon: <FaDesktop />,
      category: 'digital',
      features: ["Digital Impressions", "3D Scanning", "Precision", "Efficient"],
      details: "Cutting-edge digital technology for accurate dental procedures."
    },
    {
      id: 11,
      title: "Dental Implants",
      description: "Permanent tooth replacement solution.",
      icon: <FaCrown />,
      category: 'implant',
      features: ["Lifetime Solution", "Natural Look", "Bone Preservation", "Secure"],
      details: "Best long-term solution for missing teeth that functions naturally."
    },
    {
      id: 12,
      title: "Dental Veneers",
      description: "Thin porcelain shells for perfect smile transformation.",
      icon: <FaPaintBrush />,
      category: 'cosmetic',
      features: ["Instant Transformation", "Stain Resistant", "Natural Look", "Minimal Prep"],
      details: "Fix chips, gaps, and discoloration with custom-made veneers."
    },
    {
      id: 13,
      title: "CAD/CAM Dentistry",
      description: "Computer-aided design and manufacturing for dental restorations.",
      icon: <FaRobot />,
      category: 'digital',
      features: ["Digital Design", "Same Day Crowns", "Precision Fit", "Advanced Tech"],
      details: "Same-day crowns and restorations using advanced CAD/CAM technology."
    }
  ];

  const filteredServices = activeCategory === 'all'
    ? allServices
    : allServices.filter(service => service.category === activeCategory);

  // FIXED: This function ALWAYS works
  const handleBookNowClick = () => {
    console.log('Book Now button clicked');
    
    // Close modal if open
    if (selectedService) {
      setSelectedService(null);
    }
    
    // Mark that we clicked booking
    bookingClickedRef.current = true;
    
    // Try immediate scroll
    scrollToBooking();
    
    // Also try after a delay in case DOM isn't ready
    setTimeout(scrollToBooking, 100);
    setTimeout(scrollToBooking, 300);
    setTimeout(scrollToBooking, 600);
  };

  // FIXED: Separate function for scrolling
  const scrollToBooking = () => {
    console.log('Trying to scroll to booking...');
    
    // Method 1: Try by ID first
    const bookingElement = document.getElementById('booking');
    
    if (bookingElement) {
      console.log('Found booking element by ID');
      bookingElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
      
      // Highlight it
      bookingElement.style.boxShadow = '0 0 0 4px rgba(37, 99, 235, 0.5)';
      bookingElement.style.transition = 'box-shadow 0.5s ease';
      
      setTimeout(() => {
        bookingElement.style.boxShadow = '';
      }, 2000);
      
      return true;
    }
    
    // Method 2: Try by class
    const bookingByClass = document.querySelector('.booking-section, .booking-form, [class*="booking"]');
    if (bookingByClass) {
      console.log('Found booking element by class');
      bookingByClass.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
      return true;
    }
    
    // Method 3: Try to find any form
    const anyForm = document.querySelector('form, .form, [class*="form"]');
    if (anyForm) {
      console.log('Found form element');
      anyForm.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center'
      });
      return true;
    }
    
    // Method 4: Try URL hash
    if (window.location.hash !== '#booking') {
      window.location.hash = '#booking';
      console.log('Set URL hash to #booking');
      return true;
    }
    
    // Method 5: Last resort - scroll to bottom
    console.log('Scrolling to bottom as last resort');
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    
    // Try to find it again after scrolling
    setTimeout(() => {
      const found = document.getElementById('booking') || 
                   document.querySelector('.booking-section');
      if (found) {
        found.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 800);
    
    return false;
  };

  const openServiceDetails = (service) => {
    setSelectedService(service);
  };

  const closeServiceDetails = () => {
    setSelectedService(null);
  };

  return (
    <section className={`services-section ${isPopup ? 'popup-view' : ''}`} id={isPopup ? undefined : "services-section"}>
      <div className="services-container">
        
        {/* Header */}
        <div className="services-header">
          <div className="services-badge">
            <FaTooth className="badge-icon" /> Our Services
          </div>
          <h2 className="services-title">
            Comprehensive Dental <span className="highlight-text">Care</span>
          </h2>
          <p className="services-subtitle">
            Advanced dental treatments using latest technology for optimal oral health.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ '--cat-color': category.color }}
            >
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <div key={service.id} className="service-card" style={{ '--card-color': serviceCategories.find(c => c.id === service.category)?.color }}>
              <div className="service-card-header">
                <div className="service-icon" style={{ backgroundColor: `${serviceCategories.find(c => c.id === service.category)?.color}15` }}>
                  {service.icon}
                </div>
                <div className="service-title-wrapper">
                  <h3>{service.title}</h3>
                  <span className="service-category" style={{ color: serviceCategories.find(c => c.id === service.category)?.color }}>
                    {serviceCategories.find(c => c.id === service.category)?.name}
                  </span>
                </div>
              </div>

              <p className="service-description">{service.description}</p>

              <div className="service-features">
                {service.features.slice(0, 3).map((feature, index) => (
                  <span key={index} className="feature-tag">
                    <FaCheck className="feature-check" /> {feature}
                  </span>
                ))}
              </div>

              <div className="service-actions">
                <button className="details-btn" onClick={() => openServiceDetails(service)}>
                  View Details
                </button>
                <button 
                  className="book-btn" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Service card Book Now clicked:', service.title);
                    handleBookNowClick();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Book Now <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="services-stats">
          <div className="stat-item">
            <h3>13+</h3>
            <p>Specialized Services</p>
          </div>
          <div className="stat-item">
            <h3>18+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Success Rate</p>
          </div>
          <div className="stat-item">
            <h3>4.9★</h3>
            <p>Patient Rating</p>
          </div>
        </div>

        {/* Debug info - remove in production */}
        <div style={{ 
          position: 'fixed', 
          bottom: '10px', 
          right: '10px', 
          background: 'rgba(0,0,0,0.8)', 
          color: 'white', 
          padding: '10px', 
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999,
          display: 'none' /* Change to 'block' for debugging */
        }}>
          <div>Booking Element: {document.getElementById('booking') ? 'FOUND' : 'NOT FOUND'}</div>
          <div>URL Hash: {window.location.hash}</div>
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeServiceDetails}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeServiceDetails}>×</button>
            
            <div className="modal-header">
              <div className="modal-icon" style={{ backgroundColor: `${serviceCategories.find(c => c.id === selectedService.category)?.color}15` }}>
                {selectedService.icon}
              </div>
              <div>
                <h3>{selectedService.title}</h3>
                <span className="modal-category" style={{ color: serviceCategories.find(c => c.id === selectedService.category)?.color }}>
                  {serviceCategories.find(c => c.id === selectedService.category)?.name}
                </span>
              </div>
            </div>

            <div className="modal-content">
              <p className="modal-description">{selectedService.details}</p>
              
              <div className="modal-features">
                <h4>Key Benefits</h4>
                <ul>
                  {selectedService.features.map((feature, index) => (
                    <li key={index}>
                      <FaCheck /> {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-cta">
                <button 
                  className="modal-book-btn" 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Modal Book Consultation clicked');
                    closeServiceDetails();
                    handleBookNowClick();
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  Book Consultation
                </button>
                <button className="modal-close-btn" onClick={closeServiceDetails}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;