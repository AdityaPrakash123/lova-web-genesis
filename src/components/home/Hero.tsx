
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const KineticText = ({ children }: { children: string }) => {
  return (
    <span className="kinetic-text">
      {children.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.05}s` }}>
          {char}
        </span>
      ))}
    </span>
  );
};

const TechTicker = () => {
  const techTerms = ['AI Solutions', 'Low Code Platforms', 'Workflow Automations', 'Web3 Integration', 'Cloud Architecture', 'Digital Transformation'];
  
  return (
    <div className="relative overflow-hidden w-full py-4 mt-8">
      <div className="tech-ticker">
        {techTerms.map((term, index) => (
          <React.Fragment key={index}>
            <span className="text-xl font-medium text-muted-foreground whitespace-nowrap">
              {term}
            </span>
            <span className="text-2xl text-accent">•</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-navy/50 z-0"></div>
      
      {/* Floating orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent rounded-full opacity-60"
        style={{ 
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          animation: 'glowPulse 4s ease-in-out infinite'
        }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-glow rounded-full opacity-40"
        style={{ 
          transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
          animationDelay: '1s'
        }}
      ></div>
      <div 
        className="absolute top-2/3 left-1/3 w-2 h-2 bg-highlight rounded-full opacity-50"
        style={{ 
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          animationDelay: '2s'
        }}
      ></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="mb-6 animate-fade-in">
            Transform Your Business with{" "}
            <span className="block mt-2 glow-text">
              <KineticText>MARCS DiGITAL</KineticText>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your Problems. Our Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/services">
              <Button className="btn-primary holographic-border">Explore Solutions</Button>
            </Link>
            <Link to="/book">
              <Button className="btn-secondary">
                Book a Consultation
              </Button>
            </Link>
          </div>

          <TechTicker />
        </div>
      </div>
    </section>
  );
};

export default Hero;
