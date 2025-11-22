import React from 'react';
import { AlertBar } from './components/AlertBar';
import { Hero } from './components/Hero';
import { Audience } from './components/Audience';
import { Features } from './components/Features';
import { Quote } from './components/Quote';
import { Curriculum } from './components/Curriculum';
import { Guarantee } from './components/Guarantee';
import { OfferStack } from './components/OfferStack';
import { FAQ } from './components/FAQ';
import { Bio } from './components/Bio';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-offwhite selection:bg-brand-200 selection:text-brand-900">
      <AlertBar />
      
      <main>
        <Hero />
        <Audience />
        <Features />
        <Quote />
        <Curriculum />
        <Guarantee />
        <OfferStack />
        <Bio />
        <FAQ />
      </main>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
