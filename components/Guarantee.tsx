import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';
import { ShieldCheck } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <Section background="peach">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-brand-100">
        <div className="flex-shrink-0">
           <div className="w-32 h-32 bg-brand-50 rounded-full flex items-center justify-center relative">
              <ShieldCheck className="w-16 h-16 text-brand-600" />
              <div className="absolute -bottom-2 bg-brand-700 text-white text-xs font-bold py-1 px-3 rounded-full">
                {COPY.guarantee.badge}
              </div>
           </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl md:text-3xl text-brand-900 mb-4">
            {COPY.guarantee.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {COPY.guarantee.text}
          </p>
        </div>
      </div>
    </Section>
  );
};
