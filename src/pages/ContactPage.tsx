
import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  React.useEffect(() => {
    document.title = "Contact Us - MARCS DiGITAL Solutions";
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions or ready to start your digital transformation journey? Reach out to our team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact form and info */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a 
                    href="mailto:contact@marcsdigital.com" 
                    className="hover:text-teal transition-colors"
                  >
                    contact@marcsdigital.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  <a 
                    href="tel:+11234567890" 
                    className="hover:text-teal transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  123 Tech Avenue<br />
                  Digital City, DC 12345<br />
                  United States
                </p>
              </div>
            </div>
            
            {/* Map embed placeholder - in a real project, this would be an actual map integration */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border h-64 bg-secondary/20">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Map Embed Would Go Here
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
