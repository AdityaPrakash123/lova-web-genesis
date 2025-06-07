
import React, { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
  {
    value: 45,
    suffix: "%",
    label: "Reduction in AI deployment time",
    description: "Deploy faster and more efficiently"
  },
  {
    value: 80,
    suffix: "%",
    label: "Improvement in enterprise AI adoption rates",
    description: "Better implementation equals better adoption"
  },
  {
    value: 70,
    suffix: "%",
    label: "Decrease in AI operational costs",
    description: "More efficient, less expensive"
  }
];

const CountUpNumber = ({ target, suffix, delay, isVisible }: { target: number; suffix: string; delay: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const timer = setTimeout(() => {
      const duration = 1500; // Reduced from 2000ms
      const increment = target / (duration / 32); // Reduced frame rate from 16ms to 32ms
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 32);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay, hasAnimated]);

  return (
    <div className="text-5xl md:text-6xl font-bold mb-4 glow-text count-up">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-16 relative" ref={ref}>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="mb-4 text-center">
            AI-Assisted, <span className="glow-text">Human Empowered.</span>
          </h2>
          <p className="text-xl text-center text-muted-foreground max-w-2xl">
            The perfect balance of automation and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`glass-card p-8 flex flex-col items-center staggered-reveal ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <div className="relative">
                <CountUpNumber 
                  target={stat.value} 
                  suffix={stat.suffix}
                  delay={index * 100}
                  isVisible={isVisible}
                />
                <div className="stats-glow"></div>
              </div>
              <div className="text-xl font-medium mb-2 text-center">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-center">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
