import React from 'react';
import { Play } from 'lucide-react';
import { COPY } from '../constants';
import { Button } from './UI/Button';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-12 pb-20 bg-offwhite">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-floral-pattern opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-peach-100 to-transparent opacity-40 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-100 to-transparent opacity-40 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left fade-in-up">
            <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
              Método Exclusivo
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-900 leading-tight mb-6">
              <span className="block">{COPY.hero.headline.split(' e ')[0]}</span>
              <span className="text-brand-600 italic font-light">e {COPY.hero.headline.split(' e ')[1]}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {COPY.hero.subheadline}
            </p>

            {/* Pain Points Checklist */}
            <ul className="space-y-3 mb-8 text-left inline-block lg:block">
              {COPY.hero.painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-peach-200 flex items-center justify-center text-brand-700 text-xs mt-1">?</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})}>
                {COPY.hero.cta}
              </Button>
              <span className="text-sm text-gray-500 font-medium bg-white/50 px-3 py-1 rounded-md backdrop-blur-sm border border-gray-100">
                {COPY.hero.price}
              </span>
            </div>
          </div>

          {/* Right Content - Video Placeholder */}
          <div className="flex-1 w-full max-w-xl fade-in-up delay-200">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-brand-900 group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/calm/800/450" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-brand-700 ml-1 fill-current" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-serif italic text-lg">Assista ao vídeo de apresentação</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
               {/* Social Proof Logos (Placeholders) */}
               <div className="h-8 w-24 bg-gray-300/50 rounded"></div>
               <div className="h-8 w-24 bg-gray-300/50 rounded"></div>
               <div className="h-8 w-24 bg-gray-300/50 rounded"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
