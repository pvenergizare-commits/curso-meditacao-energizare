import React from 'react';
import { COPY } from '../constants';

export const Quote: React.FC = () => {
  return (
    <div className="py-20 bg-brand-900 text-center px-4 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-800 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="text-gold-300 text-6xl font-serif leading-none opacity-50">“</span>
        <h2 className="font-serif text-3xl md:text-5xl text-white/95 font-light leading-tight my-4">
          {COPY.quote}
        </h2>
        <span className="text-gold-300 text-6xl font-serif leading-none opacity-50">”</span>
      </div>
    </div>
  );
};
