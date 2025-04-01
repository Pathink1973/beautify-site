
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 md:pt-0 min-h-screen flex items-center bg-gradient-to-br from-salon-beige to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold leading-tight mb-4 animate-fade-in">
              Discover Your True Beauty
            </h1>
            <p className="text-lg md:text-xl text-salon-darkgray/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience premium beauty treatments in a luxurious and relaxing environment. Our expert team is dedicated to enhancing your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#book" className="btn-primary text-center">Book Appointment</a>
              <a href="#services" className="btn-secondary text-center">Explore Services</a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-4 -left-4 w-64 h-64 bg-salon-pink rounded-full opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1596178060810-72a0b15d7609?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Beauty salon" 
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
