import React from 'react';
import './App.css';

// Components Import
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoBar from './components/InfoBar';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoBar />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;