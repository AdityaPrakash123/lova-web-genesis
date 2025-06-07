
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useDebouncedMouse } from '@/hooks/useScrollReveal';

const KineticText = ({ children }: { children: string }) => {
  return (
    <span className="kinetic-text">
      {children.split('').map((char, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.03}s` }}>
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
  const mousePosition = useDebouncedMouse(150);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    // Reduce animations on low-end devices
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;
    
    if (prefersReducedMotion || isLowEndDevice) {
      setShouldAnimate(false);
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-navy/50 z-0"></div>
      
      {/* Optimized floating orbs - only if animations are enabled */}
      {shouldAnimate && (
        <>
          <div 
            className="floating-orb floating-orb-1"
            style={{ 
              transform: `translate3d(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px, 0)`,
            }}
          ></div>
          <div 
            className="floating-orb floating-orb-2"
            style={{ 
              transform: `translate3d(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px, 0)`,
            }}
          ></div>
          <div 
            className="floating-orb floating-orb-3"
            style={{ 
              transform: `translate3d(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px, 0)`,
            }}
          ></div>
        </>
      )}
      
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
