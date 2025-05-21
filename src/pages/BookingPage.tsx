
import React, { useEffect } from 'react';

const BookingPage = () => {
  useEffect(() => {
    document.title = "Book a Consultation - MARCS DiGITAL Solutions";
    
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
      
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendly integration */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Schedule a Call</h2>
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/danishaheed48"
              style={{ 
                minWidth: '320px', 
                height: '700px',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                overflow: 'hidden'
              }}
            ></div>
          </div>
          
          {/* Google Form integration */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Have Questions?</h2>
            <div className="border border-border rounded-lg overflow-hidden">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf3-nhJDlb51qQQT9EeOabMXrBX1TocEJVRFEGcVLd7c9bESA/viewform?embedded=true" 
                width="100%" 
                height="700" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="bg-navy-dark"
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>
            By booking a consultation, you agree to our{" "}
            <a href="#" className="text-teal hover:underline">privacy policy</a> and{" "}
            <a href="#" className="text-teal hover:underline">terms of service</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default BookingPage;
