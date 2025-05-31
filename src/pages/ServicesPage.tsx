
import React from 'react';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    icon: "💻",
    title: "Apps & Websites",
    description: "Custom web applications and responsive websites built with modern frameworks and best practices. We deliver scalable, secure, and user-friendly digital products that elevate your brand."
  },
  {
    icon: "⚙️",
    title: "Automations",
    description: "Streamline your business operations with custom automation solutions. From document processing to customer engagement workflows, we help you save time and reduce errors."
  },
  {
    icon: "🤖",
    title: "AI Bots",
    description: "Intelligent chatbots and virtual assistants that understand natural language and provide personalized experiences. Available 24/7 to assist your customers and team."
  },
  {
    icon: "📈",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that increase visibility and drive conversions. Our AI-powered approach optimizes campaigns for maximum ROI."
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    description: "Transform your data into actionable insights. Our analytics solutions help you understand customer behavior and make informed business decisions."
  },
  {
    icon: "🔍",
    title: "SEO Optimization",
    description: "Improve your online visibility and attract more organic traffic. Our SEO experts use proven techniques to help your website rank higher in search results."
  },
  {
    icon: "📦",
    title: "Data Migration",
    description: "Seamlessly transfer your data between systems with our secure migration services. We ensure data integrity and minimize downtime during the transition process."
  },
  {
    icon: "💼",
    title: "IT Consulting",
    description: "Expert guidance on technology strategy, implementation, and optimization. We help you make the right technology decisions for your business goals."
  }
];

const ServicesPage = () => {
  React.useEffect(() => {
    document.title = "Our Services - MARCS DIGITAL Solutions";
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Full list of digital transformation services to help your business thrive in the digital age.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services grid */}
      <section className="container-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glow-card rounded-xl p-8 flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-secondary/30 border-y border-border py-16">
        <div className="container max-w-7xl mx-auto px-4 text-center">
          <h2 className="mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Let's discuss how our services can be tailored to meet your specific business needs.
          </p>
          <a 
            href="/book" 
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Book a Consultation <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
