
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
  "Facial Treatment",
  "Hair Styling",
  "Manicure & Pedicure",
  "Makeup Service",
  "Body Treatment",
  "Waxing"
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
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
      title: "Booking Request Received",
      description: "We'll contact you shortly to confirm your appointment.",
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
          <h2 className="section-title">Book an Appointment</h2>
          <p className="section-subtitle">Schedule your beauty treatment today</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-salon-darkgray font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-salon-darkgray font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="phone" className="block text-salon-darkgray font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="service" className="block text-salon-darkgray font-medium mb-2">Service</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink bg-white"
                required
              >
                <option value="" disabled>Select a service</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-salon-darkgray font-medium mb-2">Preferred Date</label>
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
                    {date ? format(date, "PPP") : <span>Select a date</span>}
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
              <label htmlFor="time" className="block text-salon-darkgray font-medium mb-2">Preferred Time</label>
              <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink bg-white"
                required
              >
                <option value="" disabled>Select a time</option>
                {timeSlots.map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            
            <div className="mb-4 md:col-span-2">
              <label htmlFor="message" className="block text-salon-darkgray font-medium mb-2">Additional Information</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-salon-pink"
                rows={4}
                placeholder="Any special requests or information we should know?"
              ></textarea>
            </div>
            
            <div className="md:col-span-2">
              <button type="submit" className="w-full btn-primary py-4">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
