import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';

export const Bio: React.FC = () => {
  return (
    <Section background="white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gold-200 rounded-full transform translate-x-3 translate-y-3"></div>
            <img 
              src="https://picsum.photos/seed/man_wise/400/400" 
              alt={COPY.author.name} 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Sobre o Instrutor</h4>
          <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-2">{COPY.author.name}</h2>
          <p className="text-brand-600 font-medium mb-6">{COPY.author.role}</p>
          <p className="text-gray-600 leading-relaxed text-lg">
            {COPY.author.bio}
          </p>
        </div>
      </div>
    </Section>
  );
};
