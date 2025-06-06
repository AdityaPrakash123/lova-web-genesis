
import React, { useEffect, useRef, useState } from 'react';
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

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 75);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className={`glass-card p-6 flex flex-col h-full staggered-reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="text-4xl mb-4 breathe-icon">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
      <Link 
        to={service.link} 
        className="flex items-center gap-2 text-accent hover:text-glow transition-all duration-300 group mt-auto relative"
      >
        <span className="relative">
          Learn more
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
        </span>
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="container-section">
      <div className="flex flex-col items-center mb-16">
        <h2 className="mb-4 text-center">Our Services</h2>
        <p className="text-xl text-center text-muted-foreground max-w-2xl">
          We empower your business with AI-driven solutions that drive growth, security, and digital success.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 masonry-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
      
      <div className="flex justify-center mt-12">
        <Link to="/services" className="btn-primary holographic-border">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default Services;
