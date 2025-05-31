
import React, { useEffect } from 'react';

const BookingPage = () => {
  useEffect(() => {
    document.title = "Book a Consultation - MARCS DIGITAL Solutions";
    
    // Initialize Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
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
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/marcsdigitalsolutions-info"
            style={{ 
              minWidth: '320px', 
              height: '700px',
              border: '1px solid var(--border)',
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
