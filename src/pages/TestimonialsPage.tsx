
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "MARCS DiGITAL delivered an AI solution that has transformed how we interact with our customers. The automation workflows they implemented have saved us countless hours and improved our response times significantly.",
    name: "Sarah Johnson",
    title: "CTO, TechVision Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    quote: "Working with MARCS DiGITAL was a game-changer for our marketing strategy. Their AI-powered analytics gave us insights we didn't know were possible, and we've seen a 40% increase in conversion rates since implementation.",
    name: "Michael Chen",
    title: "Marketing Director, GrowthSpot",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    quote: "The custom web application that MARCS DiGITAL built for us has streamlined our entire operation. Their team was responsive, professional, and delivered exactly what we needed, on time and on budget.",
    name: "Alex Rivera",
    title: "Operations Manager, LogisticsPlus",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&h=150&auto=format&fit=crop"
  },
  {
    quote: "MARCS DiGITAL's chatbot solution has reduced our customer service load by 60% while maintaining high satisfaction rates. Their understanding of AI technology and customer needs is unparalleled.",
    name: "Patricia Nguyen",
    title: "Customer Success Lead, ServicePro",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop"
  }
];

const TestimonialsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  React.useEffect(() => {
    document.title = "Client Testimonials - MARCS DiGITAL Solutions";
  }, []);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Client Success Stories</h1>
            <p className="text-xl text-muted-foreground">
              Hear from businesses that have transformed their operations with MARCS DiGITAL Solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured testimonial slider */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-secondary/30 border border-border rounded-2xl p-8 md:p-12">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-teal/10 rounded-full blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-teal flex-shrink-0">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <blockquote className="text-lg md:text-xl mb-6">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div>
                  <div className="font-semibold">{testimonials[currentIndex].name}</div>
                  <div className="text-muted-foreground">{testimonials[currentIndex].title}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 border border-border rounded-full hover:border-teal/50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === currentIndex ? "bg-teal" : "bg-muted"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextTestimonial}
                className="p-2 border border-border rounded-full hover:border-teal/50 transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-secondary/20 border border-border rounded-xl p-6 animate-fade-in"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <blockquote className="text-muted-foreground mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TestimonialsPage;
