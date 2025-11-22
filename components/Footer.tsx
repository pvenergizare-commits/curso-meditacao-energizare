import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-brand-100 py-12 border-t border-brand-800">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
          <h3 className="font-serif text-2xl text-white mb-2">Energizare</h3>
          <p className="text-sm opacity-70">O seu ritual diário de renovação.</p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
           <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
           <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
           <a href="#" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm opacity-60 mb-8">
          <a href="#" className="hover:text-white hover:underline">Política de Privacidade</a>
          <a href="#" className="hover:text-white hover:underline">Termos de Uso</a>
          <a href="#" className="hover:text-white hover:underline">Suporte</a>
        </div>

        <p className="text-xs opacity-40">
          &copy; {new Date().getFullYear()} Energizare. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
