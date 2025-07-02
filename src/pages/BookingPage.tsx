
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

  useEffect(() => {
    document.title = "Book a Consultation - MARCS DIGITAL Solutions";
    
    const loadCalendly = () => {
      // Check if Calendly is already loaded
      if (window.Calendly) {
        console.log('Calendly already available');
        initializeCalendlyWidget();
        return;
      }

      // Load Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Calendly script loaded successfully');
        // Small delay to ensure Calendly is fully initialized
        setTimeout(() => {
          initializeCalendlyWidget();
        }, 500);
      };
      
      script.onerror = () => {
        console.error('Failed to load Calendly script');
        // Set as loaded even on error to hide loading screen
        setIsCalendlyLoaded(true);
      };
      
      document.head.appendChild(script);
    };

    const initializeCalendlyWidget = () => {
      if (window.Calendly) {
        try {
          console.log('Initializing Calendly widget...');
          const widgetElement = document.querySelector('.calendly-inline-widget');
          if (widgetElement) {
            // Clear any existing content
            widgetElement.innerHTML = '';
            
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/marcsdigitalsolutions-info',
              parentElement: widgetElement,
              prefill: {},
              utm: {}
            });
            console.log('Calendly widget initialized');
            
            // Set a reasonable timeout to hide loading screen
            setTimeout(() => {
              console.log('Calendly widget loading complete');
              setIsCalendlyLoaded(true);
            }, 2000);
          } else {
            console.error('Widget element not found');
            setIsCalendlyLoaded(true);
          }
        } catch (error) {
          console.error('Error initializing Calendly widget:', error);
          // Still set as loaded to hide loading screen
          setIsCalendlyLoaded(true);
        }
      } else {
        console.error('Calendly not available');
        setIsCalendlyLoaded(true);
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
                    className="w-24 h-24 mx-auto animate-spin"
                  />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">Loading Calendar...</p>
                  <p className="text-sm text-muted-foreground">Setting up your booking interface...</p>
                </div>
              </div>
            </div>
          )}
          <div 
            className={`calendly-inline-widget transition-opacity duration-500 ${
              isCalendlyLoaded ? 'opacity-100' : 'opacity-0 absolute'
            }`}
            style={{ 
              minWidth: '320px', 
              height: '700px',
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
