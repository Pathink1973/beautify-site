
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Emma Roberts",
    role: "Master Stylist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "With over 10 years of experience, Emma specializes in hair coloring and cutting-edge styling techniques."
  },
  {
    id: 2,
    name: "Olivia Chen",
    role: "Skincare Specialist",
    image: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Olivia is certified in advanced facial treatments and has helped countless clients achieve their skincare goals."
  },
  {
    id: 3,
    name: "David Kim",
    role: "Makeup Artist",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "David's creative approach to makeup has made him a favorite among clients for special occasions and photo shoots."
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Nail Technician",
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    description: "Sophia's attention to detail and artistic flair make her nail designs truly stand out and last longer."
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Us</h2>
          <p className="section-subtitle">Meet our team of beauty professionals</p>
        </div>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4">Our Story</h3>
              <p className="text-salon-darkgray/80 mb-4">
                Founded in 2015, BeautyNow began with a simple mission: to provide high-quality beauty services in a welcoming, luxurious environment. 
                What started as a small salon has grown into a premier beauty destination, trusted by clients for our commitment to excellence and personalized care.
              </p>
              <p className="text-salon-darkgray/80 mb-4">
                Our team consists of experienced professionals who are passionate about their craft and continuously update their skills with the latest techniques and trends in the beauty industry.
              </p>
              <p className="text-salon-darkgray/80">
                At BeautyNow, we believe that everyone deserves to feel beautiful and confident. We use only premium products and provide a personalized experience tailored to each client's unique needs and preferences.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Salon interior" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1595867818082-083862f3d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Beauty products" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Salon equipment" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" 
                  alt="Facial treatment" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-salon-lightgray p-6 rounded-lg text-center animate-on-scroll">
              <div className="mb-4 relative mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-salon-pink">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-playfair font-semibold text-xl mb-1">{member.name}</h4>
              <p className="text-salon-gold mb-2">{member.role}</p>
              <p className="text-salon-darkgray/80 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
