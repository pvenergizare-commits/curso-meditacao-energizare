import React from 'react';
import { Section } from './UI/Section';
import { COPY } from '../constants';
import { Button } from './UI/Button';
import { Check } from 'lucide-react';

export const OfferStack: React.FC = () => {
  return (
    <Section id="offer" background="white" className="bg-gradient-to-b from-white to-brand-50">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-100 relative">
          {/* Decorative Header */}
          <div className="bg-brand-800 py-8 px-6 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-floral-pattern opacity-10"></div>
             <h2 className="font-serif text-3xl text-white relative z-10">{COPY.stack.title}</h2>
          </div>

          <div className="p-8 md:p-12">
            <ul className="space-y-6 mb-10">
              {COPY.stack.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center justify-center bg-offwhite rounded-xl p-6 mb-8 border border-dashed border-brand-200">
              <span className="text-gray-500 text-sm mb-2">Valor total se comprado separadamente: <span className="line-through decoration-red-400">R$ 997,00</span></span>
              <div className="text-center">
                <span className="block text-brand-600 font-bold text-xl mb-1">HOJE POR APENAS</span>
                <span className="font-serif text-5xl md:text-6xl text-brand-900 font-bold">12x R$ 29,90</span>
                <span className="block text-gray-500 text-sm mt-2">ou R$ 297,00 à vista</span>
              </div>
            </div>

            <div className="text-center">
               <p className="text-red-500 font-medium text-sm mb-4 animate-pulse">{COPY.stack.finalCall}</p>
               <Button fullWidth className="max-w-md text-xl py-5 shadow-brand-500/30">
                 QUERO GARANTIR MINHA VAGA
               </Button>
               <div className="mt-6 flex items-center justify-center gap-2">
                 <img src="https://img.shields.io/badge/compra-segura-green?style=flat-square&logo=shield" alt="Compra Segura" className="h-6" />
                 <img src="https://img.shields.io/badge/garantia-7%20dias-blue?style=flat-square" alt="Garantia" className="h-6" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
