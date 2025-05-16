import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Fundado en 2010, Bodega Prime nació de la pasión por los cortes premium y los vinos excepcionales. 
              Cada plato cuenta una historia de tradición y excelencia.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Nuestros chefs, con más de 20 años de experiencia, seleccionan personalmente cada corte para garantizar 
              la máxima calidad y sabor.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Horario</p>
                  <p className="text-gray-600">Lun-Dom: 12pm - 12am</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-amber-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Av. Gourmet 1234, Capital</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Interior del restaurante" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-2xl font-serif font-medium">Ambiente Exclusivo</h3>
                <p className="text-amber-200">Diseño contemporáneo con toques rústicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;