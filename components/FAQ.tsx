import React, { useState } from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section background="offwhite">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-100 mb-4">
           <HelpCircle className="w-6 h-6 text-brand-600" />
        </div>
        <h2 className="font-serif text-3xl text-brand-900">Perguntas Frequentes</h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        {COPY.faq.map((item, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <button 
              className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-brand-900">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-brand-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-400" />
              )}
            </button>
            <div 
              className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-4 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
            >
              <p className="text-gray-600">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
