
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useLoadingNavigation } from '@/hooks/useLoadingNavigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const navigateWithLoading = useLoadingNavigation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    navigateWithLoading(path);
    setIsMenuOpen(false);
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <button onClick={() => handleNavigation('/')} className="flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold">
              MARCS <span className="text-primary">DIGITAL SOLUTIONS</span>
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.title}
              onClick={() => handleNavigation(item.path)}
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.title}
            </button>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          
          <Button onClick={() => handleNavigation('/book')} className="btn-primary">Let's Talk</Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-accent transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-6 flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavigation(item.path)}
                className="text-lg font-medium hover:text-primary transition-colors text-left"
              >
                {item.title}
              </button>
            ))}
            <Button onClick={() => handleNavigation('/book')} className="btn-primary w-full">Let's Talk</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
