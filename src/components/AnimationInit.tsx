
import React, { useEffect } from 'react';

const AnimationInit = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        
        // Element is visible if it's top is below 20% of the viewport height
        // and its bottom is above 20% of the viewport height from the bottom
        if (
          rect.top <= windowHeight * 0.8 && 
          rect.bottom >= windowHeight * 0.2
        ) {
          element.classList.add('visible');
        }
      });
    };
    
    // Run once on load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return null; // This component doesn't render anything
};

export default AnimationInit;
