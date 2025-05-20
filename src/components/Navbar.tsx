
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'Testimonials', path: '/testimonials' },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-lg bg-navy/80">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-foreground">
              MARCS <span className="glow-text">DiGiTAL</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </Link>
          ))}
          <Link to="/book">
            <Button className="btn-primary">Let's Talk</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-navy/95 backdrop-blur-lg border-t border-border/40">
          <div className="container px-4 py-8 flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <Link to="/book" onClick={() => setIsMenuOpen(false)}>
              <Button className="btn-primary w-full">Let's Talk</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
