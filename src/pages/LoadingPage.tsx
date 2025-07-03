
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Get the intended destination from state, default to home if not provided
    const targetPath = location.state?.targetPath || '/';
    
    // Wait 1 second then navigate to the target page
    const timer = setTimeout(() => {
      navigate(targetPath, { replace: true });
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate, location.state]);

  return (
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
  );
};

export default LoadingPage;
