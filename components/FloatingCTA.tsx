import React, { useEffect, useState } from 'react';
import { Button } from './UI/Button';

export const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-brand-100 z-50 flex items-center justify-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden animate-fade-in-up">
      <Button 
        onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}
        className="w-full py-3 text-base shadow-none"
      >
        Restaurar Minha Energia
      </Button>
    </div>
  );
};
