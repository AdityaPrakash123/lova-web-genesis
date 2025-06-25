
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              MARCS <span className="text-primary">DIGITAL SOLUTIONS</span>
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
                <Link to="/book" className="text-muted-foreground hover:text-foreground transition-colors">
                  Let's Talk
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground">
                Email: <a href="mailto:info@marcsdigitalsolutions.com" className="hover:text-foreground transition-colors">
                  info@marcsdigitalsolutions.com
                </a>
              </li>
              <li className="text-muted-foreground">
                Address: 505 Albert Street, Kingston ON K7K 4M5, Canada
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MARCS DIGITAL Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
