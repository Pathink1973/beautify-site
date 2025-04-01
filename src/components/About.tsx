
import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Emma Roberts",
    role: "Estilista Principal",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Com mais de 10 anos de experiência, Emma é especialista em coloração de cabelo e técnicas de penteado de vanguarda."
  },
  {
    id: 2,
    name: "Olivia Chen",
    role: "Especialista em Cuidados da Pele",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Olivia é certificada em tratamentos faciais avançados e já ajudou inúmeros clientes a alcançar os seus objetivos de cuidados da pele."
  },
  {
    id: 3,
    name: "David Kim",
    role: "Maquilhador",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A abordagem criativa de David à maquilhagem tornou-o um favorito entre os clientes para ocasiões especiais e sessões fotográficas."
  },
  {
    id: 4,
    name: "Sophia Martinez",
    role: "Técnica de Unhas",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A atenção aos detalhes e o talento artístico de Sophia fazem com que os seus designs de unhas se destaquem verdadeiramente e durem mais tempo."
  }
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Sobre Nós</h2>
          <p className="section-subtitle">Conheça a nossa equipa de profissionais de beleza</p>
        </div>
        
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-playfair font-semibold mb-4">A Nossa História</h3>
              <p className="text-salon-darkgray/80 mb-4">
                Fundada em 2015, a BeautifyNow começou com uma missão simples: proporcionar serviços de beleza de alta qualidade num ambiente acolhedor e luxuoso. 
                O que começou como um pequeno salão cresceu para se tornar um destino de beleza de primeira linha, confiado pelos clientes pelo nosso compromisso com a excelência e cuidado personalizado.
              </p>
              <p className="text-salon-darkgray/80 mb-4">
                A nossa equipa consiste em profissionais experientes que são apaixonados pelo seu ofício e atualizam continuamente as suas competências com as técnicas e tendências mais recentes na indústria da beleza.
              </p>
              <p className="text-salon-darkgray/80">
                Na BeautifyNow, acreditamos que todos merecem sentir-se bonitos e confiantes. Utilizamos apenas produtos premium e proporcionamos uma experiência personalizada adaptada às necessidades e preferências únicas de cada cliente.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Interior do salão" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1614159102662-94e9632263dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Produtos de beleza" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Equipamento do salão" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                  alt="Tratamento facial" 
                  className="rounded-lg shadow-md h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-playfair font-semibold mb-8 text-center">A Nossa Equipa</h3>
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
