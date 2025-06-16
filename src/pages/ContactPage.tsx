
import React from 'react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  React.useEffect(() => {
    document.title = "Contact Us - MARCS DIGITAL Solutions";
  }, []);
  
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="bg-navy-dark py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">How can we help you?</h1>
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
                    href="mailto:info@marcsdigitalsolutions.com" 
                    className="hover:text-teal transition-colors"
                  >
                    info@marcsdigitalsolutions.com
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-muted-foreground">
                  505 Albert Street<br />
                  Kingston ON K7K 4M5<br />
                  Canada
                </p>
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
