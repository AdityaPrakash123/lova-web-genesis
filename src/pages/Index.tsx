
import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';

const Index = () => {
  // Update document title for SEO
  React.useEffect(() => {
    document.title = "MARCS DiGITAL Solutions - Your Problems. Our Solutions.";
  }, []);
  
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Services />
    </main>
  );
};

export default Index;
