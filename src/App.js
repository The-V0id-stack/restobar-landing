// src/App.js
import React, { useState } from 'react';
import LoadingAnimation from './components/LoadingAnimation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StarDishes from './components/StarDishes';
import WineSelection from './components/WineSelection';
import SuppliersCarousel from './components/SuppliersCarousel';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  const [currentPage] = useState('home');

  return (
    <div className="font-sans antialiased text-gray-900">
      <LoadingAnimation />
      {currentPage === 'home' && (
        <>
          <HeroSection />
          <AboutSection />
          <StarDishes />
          <WineSelection />
          <SuppliersCarousel />
          <ContactSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
