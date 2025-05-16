import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute z-0 w-full h-full">
        <iframe 
          src="https://www.youtube.com/embed/eVVfsLg--aA?autoplay=1&mute=1&loop=1&playlist=eVVfsLg--aA&controls=0" 
          title="Bodega Prime Background Video"
          className="w-full h-full object-cover"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 animate-fade-in">
          SteakHouse
        </h1>
        <p className="text-xl md:text-2xl text-amber-100 mb-8 animate-fade-in delay-100">
          Carnes & Vinos de Excelencia
        </p>
        <button className="px-8 py-3 bg-amber-800 hover:bg-amber-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in delay-200">
          Reservar Mesa
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

// DONE