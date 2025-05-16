import React from 'react';

const WineSelection = () => {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">
          Nuestra Selección de Vinos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img src="https://elcoto.com/wp-content/uploads/2021/11/Maridar-vino-tinto.jpg" alt="Vino Tinto" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-2">Tintos</h3>
              <p className="text-gray-300 mb-4">Selección de los mejores Malbec, Cabernet Sauvignon y blends exclusivos.</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">Ver Lista</button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img src="https://montexanic.com.mx/wp-content/uploads/2021/12/blog-los-4-blancos-1200x675.jpg" alt="Vino Blanco" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-2">Blancos</h3>
              <p className="text-gray-300 mb-4">Chardonnay, Sauvignon Blanc y otras variedades refrescantes.</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">Ver Lista</button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img src="https://www.coravin.com.es/cdn/shop/articles/AdobeStock_791180394_e089621f-6b1a-41ed-abd3-c1477ba88e2a.jpg?v=1732042022&width=1080" alt="Espumante" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-2">Espumantes</h3>
              <p className="text-gray-300 mb-4">Champagnes y espumantes de alta gama para celebraciones.</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">Ver Lista</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineSelection;

// DONE