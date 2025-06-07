
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useDebouncedMouse } from '@/hooks/useScrollReveal';
import { Ear, Target, Zap } from 'lucide-react';

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

const ValueCard = ({ icon: Icon, title, description, delay }: { 
  icon: any; 
  title: string; 
  description: string; 
  delay: number;
}) => {
  return (
    <div 
      className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4 flex justify-center">
        <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
          <Icon className="h-8 w-8 text-accent" />
        </div>
      </div>
      <h3 className="text-xl font-bold mb-3 glow-text">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
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
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <h1 className="mb-6 animate-fade-in text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-foreground">AI-Assisted, </span>
            <span className="glow-text">
              <KineticText>Human Empowered.</KineticText>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            The perfect balance of automation and expertise.
          </p>

          {/* Our Values section */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl md:text-3xl mb-4 text-foreground font-bold">Our Values</h2>
            <p className="text-xl md:text-2xl mb-8 text-foreground font-medium leading-relaxed">
              We Listen. We Tailor. We Deliver.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Listening to your challenges, crafting personalized solutions, and helping you put them into action.
            </p>

            {/* Interactive Values Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full max-w-4xl">
              <ValueCard
                icon={Ear}
                title="We Listen"
                description="Your challenges become our mission. We dive deep to understand your unique needs and pain points."
                delay={0.4}
              />
              <ValueCard
                icon={Target}
                title="We Tailor"
                description="No cookie-cutter solutions. Every strategy is crafted specifically for your business goals."
                delay={0.5}
              />
              <ValueCard
                icon={Zap}
                title="We Deliver"
                description="From concept to execution, we turn ideas into reality with speed and precision."
                delay={0.6}
              />
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <Link to="/book">
              <Button className="btn-primary holographic-border text-lg px-8 py-4">
                Start the Conversation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
