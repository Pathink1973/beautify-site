
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-salon-beige to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-4 animate-fade-in">
              Descubra a Sua Verdadeira Beleza
            </h1>
            <p className="text-lg md:text-xl text-salon-darkgray/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experimente tratamentos de beleza premium num ambiente luxuoso e relaxante. A nossa equipa de especialistas dedica-se a realçar a sua beleza natural.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#book" className="btn-primary text-center">Marcar Consulta</a>
              <a href="#services" className="btn-secondary text-center">Explorar Serviços</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-salon-pink rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Salão de beleza" 
                className="rounded-lg shadow-xl relative z-10 w-full"
              />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-salon-gold rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
