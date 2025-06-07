
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
      
      // Start flip transition
      const flipTimer = setTimeout(() => {
        setDisplayLocation(location);
        
        // Complete the flip
        const completeTimer = setTimeout(() => {
          setIsTransitioning(false);
        }, 300);

        return () => clearTimeout(completeTimer);
      }, 300);

      return () => clearTimeout(flipTimer);
    }
  }, [location, displayLocation]);

  return (
    <div className="relative perspective-1000">
      {/* Page content with 3D flip transition */}
      <div 
        className={`transition-all duration-500 ease-in-out transform-style-preserve-3d ${
          isTransitioning 
            ? 'rotate-y-180 scale-95' 
            : 'rotate-y-0 scale-100'
        }`}
        key={displayLocation.pathname}
      >
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
