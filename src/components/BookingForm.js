import React, { useState } from 'react';
import { FaCalendarAlt, FaUser, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", date: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Native Mobile Alert Style
    alert(`Request Sent! We will call ${formData.name} shortly.`);
    setFormData({ name: "", phone: "", date: "" });
  };

  return (
    <section className="booking-section" id="contact">
      <div className="form-wrapper">
        
        {/* Mobile Friendly Header */}
        <div className="form-header">
          <span className="badge">Easy Booking</span>
          <h2>Book Your Appointment</h2>
          <p>No waiting queue. Get confirmed slot instantly.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mobile-form">
          
          {/* Input 1: Name */}
          <div className="input-container">
            <FaUser className="field-icon" />
            <div className="field-wrapper">
              <label htmlFor="name">Patient Name</label>
              <input 
                type="text" 
                name="name" 
                id="name"
                placeholder="Ex. Rahul Sharma" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>
          
          {/* Input 2: Phone */}
          <div className="input-container">
            <FaPhoneAlt className="field-icon" />
            <div className="field-wrapper">
              <label htmlFor="phone">Mobile Number</label>
              <input 
                type="tel" 
                name="phone" 
                id="phone"
                placeholder="10-digit number" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Input 3: Date */}
          <div className="input-container">
            <FaCalendarAlt className="field-icon" />
            <div className="field-wrapper">
              <label htmlFor="date">Select Date</label>
              <input 
                type="date" 
                name="date" 
                id="date"
                value={formData.date} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          {/* Big Thumb-Friendly Button */}
          <button type="submit" className="btn-action">
            <span>Confirm Booking</span>
            <FaArrowRight />
          </button>

          <p className="secure-text">🔒 Your data is safe with DentCare</p>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;