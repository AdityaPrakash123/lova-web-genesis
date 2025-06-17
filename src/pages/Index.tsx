
import React from 'react';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';

const Index = () => {
  // Update document title for SEO
  React.useEffect(() => {
    document.title = "MARCS DiGITAL Solutions - Your Problems. Our Solutions.";
  }, []);
  
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
    </main>
  );
};

export default Index;
