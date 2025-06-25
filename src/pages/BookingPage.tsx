
import React, { useEffect, useState } from 'react';

// Extend Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: any) => void;
    };
  }
}

const BookingPage = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    document.title = "Book a Consultation - MARCS DIGITAL Solutions";
    
    const loadCalendly = () => {
      // Check if Calendly is already loaded
      if (window.Calendly) {
        setIsScriptLoaded(true);
        initializeCalendlyWidget();
        return;
      }

      // Load Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        setIsScriptLoaded(true);
        // Small delay to ensure Calendly is fully initialized
        setTimeout(() => {
          initializeCalendlyWidget();
        }, 100);
      };
      
      script.onerror = () => {
        console.error('Failed to load Calendly script');
      };
      
      document.head.appendChild(script);
    };

    const initializeCalendlyWidget = () => {
      if (window.Calendly) {
        try {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/marcsdigitalsolutions-info',
            parentElement: document.querySelector('.calendly-inline-widget'),
            prefill: {},
            utm: {}
          });
          setIsCalendlyLoaded(true);
        } catch (error) {
          console.error('Error initializing Calendly widget:', error);
        }
      }
    };

    loadCalendly();
    
    return () => {
      // Clean up
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
                <div className="mb-6">
                  <img 
                    src="/lovable-uploads/9e0dbbac-0b0d-4873-9920-efbb9705966a.png" 
                    alt="MARCS Digital Solutions Logo" 
                    className="w-24 h-24 mx-auto logo-spin"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">Loading Calendar...</p>
                  <p className="text-sm text-muted-foreground">
                    {!isScriptLoaded ? 'Initializing Calendly...' : 'Setting up your booking interface...'}
                  </p>
                </div>
              </div>
            </div>
          )}
          <div 
            className={`calendly-inline-widget transition-opacity duration-500 ${
              isCalendlyLoaded ? 'opacity-100' : 'opacity-0 h-0'
            }`}
            style={{ 
              minWidth: '320px', 
              height: isCalendlyLoaded ? '700px' : '0px',
              border: isCalendlyLoaded ? '1px solid hsl(var(--border))' : 'none',
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
