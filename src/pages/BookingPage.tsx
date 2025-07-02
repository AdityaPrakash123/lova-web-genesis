
import React, { useEffect, useState } from 'react';

const BookingPage = () => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    document.title = "Book a Consultation - MARCS DIGITAL Solutions";
    
    // Load Calendly CSS first
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      // Wait a bit longer for Calendly to be fully available
      setTimeout(() => {
        if (window.Calendly) {
          console.log('Calendly is available, initializing widget');
          initializeCalendlyWidget();
        } else {
          console.log('Calendly still not available, using fallback');
          // Fallback: directly inject the iframe
          createCalendlyIframe();
        }
      }, 1000);
    };
    
    script.onerror = () => {
      console.error('Failed to load Calendly script, using fallback');
      createCalendlyIframe();
    };
    
    document.head.appendChild(script);

    const initializeCalendlyWidget = () => {
      try {
        const widgetElement = document.querySelector('.calendly-inline-widget');
        if (widgetElement && window.Calendly) {
          widgetElement.innerHTML = '';
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/marcsdigitalsolutions-info',
            parentElement: widgetElement,
            prefill: {},
            utm: {}
          });
          console.log('Calendly widget initialized successfully');
          setIsCalendlyLoaded(true);
        }
      } catch (error) {
        console.error('Error initializing Calendly widget:', error);
        createCalendlyIframe();
      }
    };

    const createCalendlyIframe = () => {
      console.log('Creating Calendly iframe as fallback');
      const widgetElement = document.querySelector('.calendly-inline-widget');
      if (widgetElement) {
        widgetElement.innerHTML = `
          <iframe 
            src="https://calendly.com/marcsdigitalsolutions-info" 
            width="100%" 
            height="700" 
            frameborder="0"
            style="border: 1px solid hsl(var(--border)); border-radius: 12px;"
          ></iframe>
        `;
        setIsCalendlyLoaded(true);
      }
    };
    
    return () => {
      // Clean up
      const scripts = document.head.querySelectorAll('script[src*="calendly"]');
      scripts.forEach(script => script.remove());
      const links = document.head.querySelectorAll('link[href*="calendly"]');
      links.forEach(link => link.remove());
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
                    className="w-16 h-16 mx-auto animate-pulse"
                  />
                </div>
                <p className="text-sm text-muted-foreground">Loading calendar...</p>
              </div>
            </div>
          )}
          <div 
            className={`calendly-inline-widget transition-opacity duration-500 ${
              isCalendlyLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              minWidth: '320px', 
              height: isCalendlyLoaded ? '700px' : '0px'
            }}
          ></div>
        </div>
      </section>
    </main>
  );
};

// Extend Window interface to include Calendly
declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: any) => void;
    };
  }
}

export default BookingPage;
