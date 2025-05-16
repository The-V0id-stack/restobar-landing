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
            <img src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" alt="Vino Tinto" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-2">Tintos</h3>
              <p className="text-gray-300 mb-4">Selección de los mejores Malbec, Cabernet Sauvignon y blends exclusivos.</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">Ver Lista</button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img src="https://images.unsplash.com/photo-1518818608552-195ed130cdf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Vino Blanco" className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-serif font-medium mb-2">Blancos</h3>
              <p className="text-gray-300 mb-4">Chardonnay, Sauvignon Blanc y otras variedades refrescantes.</p>
              <button className="text-amber-400 hover:text-amber-300 font-medium">Ver Lista</button>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-xl transform transition-all hover:scale-105">
            <img src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Espumante" className="w-full h-64 object-cover" />
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