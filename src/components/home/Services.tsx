import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "App & Website Dev",
    description: "Custom digital solutions tailored to your specific business needs with modern tech stacks.",
    icon: "💻",
    link: "/services"
  },
  {
    title: "Automations & Workflows",
    description: "Streamline processes, save time, and reduce costs with intelligent workflow automation.",
    icon: "⚙️",
    link: "/services"
  },
  {
    title: "AI Marketing Bots",
    description: "Engage customers 24/7 with intelligent bots that convert visitors into loyal customers.",
    icon: "🤖",
    link: "/services"
  }
];

const Services = () => {
  return (
    <section className="container-section">
      <div className="flex flex-col items-center mb-16">
        <h2 className="mb-4 text-center">Our Services</h2>
        <p className="text-xl text-center text-muted-foreground max-w-2xl">
          We empower your business with AI-driven solutions that drive growth, security, and digital success.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="theme-card hover:scale-105">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="text-4xl mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group mt-auto"
              >
                <span>Learn more</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Link to="/services">
          <Button className="btn-primary">
            View All Services
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
