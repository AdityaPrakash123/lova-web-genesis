
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="glow-card rounded-xl p-6 flex flex-col h-full animate-fade-in"
            style={{ animationDelay: `${0.2 * index}s` }}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
            <Link 
              to={service.link} 
              className="flex items-center gap-2 text-teal hover:text-cyan transition-colors group mt-auto"
            >
              Learn more 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Link to="/services" className="btn-primary">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default Services;
