
import React, { useEffect, useState, useRef } from 'react';

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

const CountUpNumber = ({ target, suffix, delay }: { target: number; suffix: string; delay: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, target, delay]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold mb-4 glow-text count-up">
      {count}{suffix}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 relative">
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
              className="glass-card p-8 flex flex-col items-center staggered-reveal"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative">
                <CountUpNumber 
                  target={stat.value} 
                  suffix={stat.suffix}
                  delay={index * 200}
                />
                <div 
                  className="absolute inset-0 rounded-full opacity-20 blur-xl"
                  style={{
                    background: `radial-gradient(circle, var(--glow) 0%, transparent 70%)`,
                    transform: 'scale(1.5)'
                  }}
                ></div>
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
