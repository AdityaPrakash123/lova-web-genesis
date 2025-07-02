
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
      
      // Show transition for 1 second
      const transitionTimer = setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(transitionTimer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative">
      {/* Transition overlay with logo */}
      {isTransitioning && (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/9e0dbbac-0b0d-4873-9920-efbb9705966a.png" 
                alt="MARCS Digital Solutions Logo" 
                className="w-24 h-24 mx-auto"
              />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-medium text-foreground">Marcs Digital Solutions.</p>
              <p className="text-sm text-muted-foreground">Your Problems Our Solutions.</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Page content */}
      <div key={displayLocation.pathname}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
