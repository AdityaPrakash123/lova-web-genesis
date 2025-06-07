
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      // Start exit animation
      const exitTimer = setTimeout(() => {
        setDisplayLocation(location);
        
        // Start enter animation
        const enterTimer = setTimeout(() => {
          setIsTransitioning(false);
        }, 100);

        return () => clearTimeout(enterTimer);
      }, 200);

      return () => clearTimeout(exitTimer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative">
      {/* Transition overlay */}
      <div 
        className={`fixed inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/90 backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <div className="text-accent font-medium">Transitioning...</div>
          </div>
        </div>
      </div>
      
      {/* Page content */}
      <div 
        className={`transition-all duration-300 ease-out ${
          isTransitioning 
            ? 'opacity-0 transform translate-y-4' 
            : 'opacity-100 transform translate-y-0'
        }`}
        key={displayLocation.pathname}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
