
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Brush, Sparkles, Star, Clock, CalendarDays } from 'lucide-react';

const beautyServicesData = [
  {
    id: 1,
    title: "Tratamento Facial Luxuoso",
    description: "Revitalize a sua pele com este tratamento premium que inclui limpeza profunda, esfoliação, máscara e hidratação.",
    duration: "60 min",
    price: "85€",
    rating: 4.9,
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Corte e Estilo Premium",
    description: "Um corte personalizado seguido de styling profissional para realçar as suas características naturais.",
    duration: "45 min",
    price: "55€",
    rating: 4.8,
    icon: Scissors,
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Maquilhagem Profissional",
    description: "Maquilhagem completa para qualquer ocasião, utilizando produtos de alta qualidade para um resultado duradouro.",
    duration: "50 min",
    price: "65€",
    rating: 4.9,
    icon: Brush,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const BeautyServices = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-3 text-salon-darkgray">
            Serviços em Destaque
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
          <p className="text-lg text-salon-darkgray/80 max-w-xl mx-auto">
            Descubra os nossos serviços mais populares, concebidos para realçar a sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beautyServicesData.map((service) => (
            <Card key={service.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg group border-none shadow-md rounded-xl">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-medium backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                    Ver detalhes
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-playfair font-semibold text-salon-darkgray">
                    {service.title}
                  </h3>
                  <service.icon className="text-purple-400 h-5 w-5" />
                </div>
                
                <p className="text-salon-darkgray/70 mb-4 text-sm">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1 text-sm text-salon-darkgray/80">
                    <Clock className="h-4 w-4 text-purple-400" />
                    <span>{service.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm text-salon-darkgray/80">
                    <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                    <span>{service.rating}</span>
                  </div>
                  
                  <span className="text-lg font-semibold text-salon-gold">
                    {service.price}
                  </span>
                </div>
                
                <button className="w-full mt-5 py-3 rounded-full font-medium text-white bg-gradient-to-r from-purple-400 to-pink-400 hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                  Marcar Agora
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 text-salon-darkgray hover:text-purple-500 transition-colors font-medium">
            <CalendarDays className="h-5 w-5" />
            Ver todos os serviços
          </a>
        </div>
      </div>
    </section>
  );
};

export default BeautyServices;
