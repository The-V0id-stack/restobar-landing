import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">Bodega Prime</h3>
            <p className="text-gray-400">
              Carnes & Vinos de Excelencia. Una experiencia gastronómica inolvidable.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Horario</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lunes - Viernes: 12pm - 12am</li>
              <li>Sábado - Domingo: 12pm - 1am</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Menú</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Vinos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Eventos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Suscríbete para recibir nuestras promociones.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
              />
              <button className="px-4 py-2 bg-amber-800 hover:bg-amber-700 rounded-r-lg transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Bodega Prime. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;