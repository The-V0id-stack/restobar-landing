import React, { useState, useEffect } from 'react';

const StarDishes = () => {
  const [dishes] = useState([
    {
      id: 1,
      name: "Tomahawk 900g",
      description: "Corte premium madurado 28 días, servido con papas rusticas y espárragos",
      price: "89.99",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
    },
    {
      id: 2,
      name: "Ribeye Wagyu",
      description: "Auténtica carne Wagyu A5, marmoleo perfecto, acompañado de puré de trufa",
      price: "149.99",
      image: "https://images.unsplash.com/photo-1600891964092-4316c5330325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
    },
    {
      id: 3,
      name: "Bife de Chorizo",
      description: "Corte argentino clásico, 400g de pura ternura, con chimichurri artesanal",
      price: "59.99",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1398&q=80"
    },
    {
      id: 4,
      name: "Costillas BBQ",
      description: "Cocción lenta 12 horas, glaseado con nuestra salsa secreta",
      price: "49.99",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
    }
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dishes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [dishes.length]);

  return (
    <section className="py-20 px-4 bg-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-900 mb-12">
          Nuestros Platos Estrella
        </h2>
        
        <div className="relative overflow-hidden rounded-xl shadow-2xl h-96">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={dish.image} 
                alt={dish.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-3xl font-serif font-medium">{dish.name}</h3>
                <p className="text-lg text-amber-200 mb-4">{dish.description}</p>
                <p className="text-2xl font-bold">${dish.price}</p>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-8 right-8 flex space-x-2">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-amber-500' : 'bg-white bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarDishes;