
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-32 grid-pattern">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-navy z-0"></div>
      
      {/* Glowing dots */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-teal rounded-full animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-cyan rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-highlight rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="mb-6 animate-fade-in">
            Transform Your Business with{" "}
            <span className="block mt-2 glow-text">MARCS DiGITAL</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Your Problems. Our Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link to="/services">
              <Button className="btn-primary">Explore Solutions</Button>
            </Link>
            <Link to="/book">
              <Button variant="outline" className="border-teal text-foreground hover:bg-teal/10">
                Book a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
