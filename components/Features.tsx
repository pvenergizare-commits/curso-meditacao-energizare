import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';

export const Features: React.FC = () => {
  return (
    <Section background="violet">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-2">
          {COPY.why.title}
        </h2>
        <p className="text-brand-700 font-medium italic">
          {COPY.why.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COPY.why.items.map((item, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/50 hover:border-brand-200 flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="font-serif text-xl text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
