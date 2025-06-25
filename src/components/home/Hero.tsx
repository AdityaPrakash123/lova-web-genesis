
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Compass, CircuitBoard, Lightbulb, Rocket, Gauge, LifeBuoy } from 'lucide-react';

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
    icon: LifeBuoy
  }
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center py-16">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-navy/50 z-0"></div>
      
      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Main Headline */}
          <h1 className="mb-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-foreground">Your Problems. </span>
            <br className="block md:hidden" />
            <span className="text-foreground font-bold opacity-100">
              Our Solutions.
            </span>
          </h1>
          
          {/* Sub-headline */}
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-4xl mx-auto">
            AI precision + human heart = challenges solved, goals smashed, and teams smiling.
          </p>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Link to="/book">
              <Button className="btn-primary text-lg px-8 py-4">
                Start the Conversation
              </Button>
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {serviceCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="glass-card p-6 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-0 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-primary/10 transition-colors duration-300">
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
