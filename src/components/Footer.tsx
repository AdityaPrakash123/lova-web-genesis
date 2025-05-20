
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-navy-dark">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              MARCS <span className="glow-text">DiGiTAL</span>
            </h3>
            <p className="text-muted-foreground max-w-sm">
              Your Problems. Our Solutions. We deliver digital transformation and technology services that drive innovation.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-muted-foreground hover:text-foreground transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Email: <a href="mailto:contact@marcsdigital.com" className="hover:text-foreground transition-colors">
                  contact@marcsdigital.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Phone: <a href="tel:+11234567890" className="hover:text-foreground transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-muted-foreground">
                Address: 123 Tech Avenue, Digital City, DC 12345
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MARCS DiGITAL Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
