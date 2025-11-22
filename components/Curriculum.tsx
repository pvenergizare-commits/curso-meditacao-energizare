import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';
import { PlayCircle } from 'lucide-react';

export const Curriculum: React.FC = () => {
  return (
    <Section background="offwhite">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-brand-900 mb-4">
          Como funciona sua jornada
        </h2>
        <p className="text-gray-600">Passo a passo para recuperar sua vitalidade</p>
      </div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 md:-ml-px"></div>

        {COPY.timeline.map((item, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-brand-500 rounded-full transform -translate-x-1/2 shadow-sm z-10"></div>

            {/* Spacer for one side on desktop */}
            <div className="hidden md:block w-1/2"></div>

            {/* Content Card */}
            <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-widest">Módulo {index + 1}</span>
                  {item.duration && (
                    <span className="text-xs bg-peach-100 text-brand-800 px-2 py-0.5 rounded-full flex items-center">
                       {item.duration}
                    </span>
                  )}
                </div>
                <h3 className="font-serif text-xl text-brand-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className={`flex items-center text-brand-600 text-xs font-semibold cursor-pointer hover:text-brand-800 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                   <PlayCircle className="w-4 h-4 mr-1" />
                   Prévia da aula
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
