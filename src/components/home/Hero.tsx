
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useDebouncedMouse } from '@/hooks/useScrollReveal';
import { Compass, CircuitBoard, Lightbulb, Rocket, Gauge, Lifebuoy } from 'lucide-react';

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

const serviceCards = [
  {
    title: "Discovery Deep-Dive",
    description: "We listen first, mapping every pain point and wish.",
    icon: Compass
  },
  {
    title: "Tailored Tech Stack",
    description: "Custom AI workflows built just for you—no cookie cutters.",
    icon: CircuitBoard
  },
  {
    title: "Human Insight Layer",
    description: "Experts refine outputs, adding empathy and nuance.",
    icon: Lightbulb
  },
  {
    title: "Rapid Prototyping",
    description: "Working solutions in days, not months.",
    icon: Rocket
  },
  {
    title: "Impact Dashboard",
    description: "Live metrics prove ROI and spark continuous wins.",
    icon: Gauge
  },
  {
    title: "Forever Support",
    description: "Friendly help that never clocks out.",
    icon: Lifebuoy
  }
];

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
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-16">
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
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="mb-8 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Your Problems. </span>
            <br className="block md:hidden" />
            <span className="text-foreground font-bold opacity-100">
              <KineticText>Our Solutions.</KineticText>
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI precision + human heart = challenges solved, goals smashed, and teams smiling.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in mb-16" style={{ animationDelay: '0.3s' }}>
            <Link to="/book">
              <Button className="btn-primary holographic-border text-lg px-8 py-4">
                Start the Conversation
              </Button>
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {serviceCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="glass-card service-card group p-6 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
