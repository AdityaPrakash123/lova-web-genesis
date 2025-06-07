
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);

  // Auto night mode detection
  useEffect(() => {
    const checkTimeAndSetNightMode = () => {
      const hour = new Date().getHours();
      const shouldBeNightMode = hour >= 18 || hour < 6;
      setIsNightMode(shouldBeNightMode);
      
      if (shouldBeNightMode) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
    };

    checkTimeAndSetNightMode();
    const interval = setInterval(checkTimeAndSetNightMode, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle('night-mode');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-card border-b border-white/10">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold text-foreground">
              MARCS <span className="glow-text">DIGITAL SOLUTIONS</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
            >
              {item.title}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          <button
            onClick={toggleNightMode}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle night mode"
          >
            {isNightMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-400" />
            )}
          </button>
          
          <Link to="/book">
            <Button className="btn-primary">Let's Talk</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleNightMode}
            className="p-2 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Toggle night mode"
          >
            {isNightMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-400" />
            )}
          </button>
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
        <div className="md:hidden fixed inset-0 top-16 glass-card border-t border-white/10 z-40">
          <div className="container px-4 py-8 flex flex-col gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-foreground hover:text-accent transition-colors"
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
