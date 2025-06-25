
import React, { useEffect, useState } from 'react';

const BookingPage = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    document.title = "Book a Consultation - MARCS DIGITAL Solutions";
    
    // Preload and initialize Calendly widget faster
    const loadCalendly = () => {
      if (window.Calendly) {
        setIsCalendlyLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setIsCalendlyLoaded(true);
      
      // Add script to head for faster loading
      document.head.appendChild(script);
    };

    // Load immediately without delay
    loadCalendly();
    
    return () => {
      // Clean up - find and remove the script
      const scripts = document.head.querySelectorAll('script[src*="calendly"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Book a Consultation</h1>
            <p className="text-xl text-muted-foreground">
              Schedule a free consultation with our experts to discuss how we can help transform your business.
            </p>
          </div>
        </div>
      </section>
      
      {/* Calendly integration */}
      <section className="container-section">
        <div className="max-w-4xl mx-auto">
          {!isCalendlyLoaded && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading calendar...</p>
              </div>
            </div>
          )}
          <div 
            className={`calendly-inline-widget transition-opacity duration-300 ${
              isCalendlyLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            data-url="https://calendly.com/marcsdigitalsolutions-info"
            style={{ 
              minWidth: '320px', 
              height: '700px',
              border: '1px solid hsl(var(--border))',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          ></div>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
