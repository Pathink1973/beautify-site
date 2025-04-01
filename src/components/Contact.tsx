
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from '@/hooks/use-toast';

const serviceOptions = [
  "Tratamento Facial",
  "Penteados",
  "Manicure e Pedicure",
  "Serviço de Maquilhagem",
  "Tratamento Corporal",
  "Depilação"
];

const timeSlots = [
  "9:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00"
];

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    toast({
      title: "Pedido de Marcação Recebido",
      description: "Entraremos em contacto brevemente para confirmar a sua marcação.",
    });
    
    // Reset form
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setDate(undefined);
    setTime('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-16 bg-salon-lightgray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Marcar uma Consulta</h2>
          <p className="section-subtitle">Agende o seu tratamento de beleza hoje</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-salon-darkgray font-medium mb-2">O Seu Nome</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Introduza o seu nome completo"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-salon-darkgray font-medium mb-2">Endereço de Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Introduza o seu email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-salon-darkgray font-medium mb-2">Número de Telemóvel</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Introduza o seu número de telemóvel"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="service" className="block text-salon-darkgray font-medium mb-2">Serviço</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink bg-white"
                required
              >
                <option value="" disabled>Selecione um serviço</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-salon-darkgray font-medium mb-2">Data Preferida</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="mb-4">
              <label htmlFor="time" className="block text-salon-darkgray font-medium mb-2">Hora Preferida</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink bg-white"
                required
              >
                <option value="" disabled>Selecione uma hora</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4 md:col-span-2">
              <label htmlFor="message" className="block text-salon-darkgray font-medium mb-2">Informações Adicionais</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                rows={4}
                placeholder="Algum pedido especial ou informação que devamos saber?"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button type="submit" className="w-full btn-primary py-4">
                Marcar Consulta
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
