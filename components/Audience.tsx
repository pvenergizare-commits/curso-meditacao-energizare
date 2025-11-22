import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';
import { CheckCircle2 } from 'lucide-react';

export const Audience: React.FC = () => {
  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-800 mb-4">
          {COPY.audience.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {COPY.audience.description}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 space-y-4">
          {COPY.audience.items.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start gap-4 p-4 rounded-xl bg-offwhite border border-gray-100 hover:border-brand-200 transition-colors duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-brand-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-200 rounded-full blur-3xl opacity-30"></div>
            <img 
              src="https://picsum.photos/seed/woman_relax/500/600" 
              alt="Mulher relaxada" 
              className="relative z-10 rounded-2xl shadow-xl w-full max-w-md object-cover aspect-[4/5]"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
