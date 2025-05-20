
import React from 'react';

const stats = [
  {
    value: "45%",
    label: "Reduction in AI deployment time",
    description: "Deploy faster and more efficiently"
  },
  {
    value: "80%",
    label: "Improvement in enterprise AI adoption rates",
    description: "Better implementation equals better adoption"
  },
  {
    value: "70%",
    label: "Decrease in AI operational costs",
    description: "More efficient, less expensive"
  }
];

const Stats = () => {
  return (
    <section className="py-16 bg-navy-dark">
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
              className="flex flex-col items-center p-8 rounded-lg bg-secondary/30 border border-border backdrop-blur-sm hover:border-teal/30 transition-colors animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-4 glow-text">
                {stat.value}
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
