import React, { useState, useEffect } from 'react';

const SuppliersCarousel = () => {
  const [suppliers] = useState([
    { id: 1, name: "Black Angus Ranch", logo: "./img/3_blk_angus_logo.png" },
    { id: 2, name: "Wagyu Imperial", logo: "./img/Imperial-Wagyu-Beef-Logo.webp" },
    { id: 3, name: "Vineyard Estates", logo: "./img/VINEYARD+Estates+LOGO+Approved+Final+013024-1-640w.png" },
    { id: 4, name: "Organic Valley", logo: "./img/OrganicValley_logo.png" },
    { id: 5, name: "Truffle Hunters", logo: "./img/trufflehuntingalba.com-logo.png" },
    { id: 6, name: "Sea Salt Co.", logo: "./img/SSS_-_1200_x_628_--01.webp" }
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(suppliers.length / 3));
    }, 3000);
    return () => clearInterval(interval);
  }, [suppliers.length]);

  const visibleSuppliers = suppliers.slice(currentSlide * 3, currentSlide * 3 + 3);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Nuestros Proveedores
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {visibleSuppliers.map((supplier) => (
              <div key={supplier.id} className="flex-shrink-0 w-full md:w-1/3 px-4">
                <div className="bg-gray-50 rounded-xl p-8 h-48 flex items-center justify-center">
                  <img 
                    src={supplier.logo} 
                    alt={supplier.name} 
                    className="max-h-20 max-w-full object-contain"
                  />
                </div>
                <p className="text-center mt-4 text-gray-700 font-medium">{supplier.name}</p>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + Math.ceil(suppliers.length / 3)) % Math.ceil(suppliers.length / 3))}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % Math.ceil(suppliers.length / 3))}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuppliersCarousel;