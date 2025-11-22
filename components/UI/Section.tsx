import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'offwhite' | 'peach' | 'violet';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'offwhite' 
}) => {
  
  const backgrounds = {
    white: "bg-white",
    offwhite: "bg-offwhite",
    peach: "bg-peach-50",
    violet: "bg-brand-50/50"
  };

  return (
    <section id={id} className={`py-16 md:py-24 relative overflow-hidden ${backgrounds[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        {children}
      </div>
    </section>
  );
};
