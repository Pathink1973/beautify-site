
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="text-salon-darkgray font-playfair text-2xl font-bold">
          Beautify<span className="text-salon-pink">Now</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-salon-darkgray" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li><a href="#home" className="text-salon-darkgray hover:text-salon-pink transition-colors">Início</a></li>
          <li><a href="#services" className="text-salon-darkgray hover:text-salon-pink transition-colors">Serviços</a></li>
          <li><a href="#about" className="text-salon-darkgray hover:text-salon-pink transition-colors">Sobre</a></li>
          <li><a href="#testimonials" className="text-salon-darkgray hover:text-salon-pink transition-colors">Depoimentos</a></li>
          <li><a href="#contact" className="text-salon-darkgray hover:text-salon-pink transition-colors">Contacto</a></li>
          <li><a href="#book" className="btn-primary">Reservar Agora</a></li>
        </ul>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full shadow-md">
          <ul className="py-4 px-6 space-y-4">
            <li><a href="#home" className="block py-2 text-salon-darkgray hover:text-salon-pink transition-colors" onClick={toggleMenu}>Início</a></li>
            <li><a href="#services" className="block py-2 text-salon-darkgray hover:text-salon-pink transition-colors" onClick={toggleMenu}>Serviços</a></li>
            <li><a href="#about" className="block py-2 text-salon-darkgray hover:text-salon-pink transition-colors" onClick={toggleMenu}>Sobre</a></li>
            <li><a href="#testimonials" className="block py-2 text-salon-darkgray hover:text-salon-pink transition-colors" onClick={toggleMenu}>Depoimentos</a></li>
            <li><a href="#contact" className="block py-2 text-salon-darkgray hover:text-salon-pink transition-colors" onClick={toggleMenu}>Contacto</a></li>
            <li><a href="#book" className="btn-primary inline-block mt-2" onClick={toggleMenu}>Reservar Agora</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
