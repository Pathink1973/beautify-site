
import React from 'react';

const servicesData = [
  {
    id: 1,
    title: "Facial Treatments",
    description: "Rejuvenate your skin with our customized facial treatments tailored to your skin type and concerns.",
    price: "From $79",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Hair Styling",
    description: "Get the perfect look with our professional hair styling services, from cuts to coloring and treatments.",
    price: "From $49",
    image: "https://images.unsplash.com/photo-1560869713-7d9baaf7b7fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Manicure & Pedicure",
    description: "Pamper your hands and feet with our luxurious manicure and pedicure services.",
    price: "From $39",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Makeup Services",
    description: "Look your best for any occasion with our professional makeup services using premium products.",
    price: "From $59",
    image: "https://images.unsplash.com/photo-1631730359585-93c523261570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Body Treatments",
    description: "Relax and rejuvenate with our range of body treatments, from massages to scrubs and wraps.",
    price: "From $89",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Waxing",
    description: "Achieve smooth skin with our professional and gentle waxing services for all body areas.",
    price: "From $29",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-salon-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Discover our range of premium beauty treatments</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card animate-on-scroll">
              <div className="relative h-48 mb-4 overflow-hidden rounded">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{service.title}</h3>
              <p className="text-salon-darkgray/70 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-salon-gold font-semibold">{service.price}</span>
                <a href="#book" className="text-salon-darkgray hover:text-salon-pink transition-colors font-medium">Book Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
