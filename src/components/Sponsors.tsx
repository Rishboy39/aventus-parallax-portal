
import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';

export default function Sponsors() {
  return (
    <ParallaxSection 
      id="sponsors"
      className="py-24 bg-aventus-gray"
      speed={0.07}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <p className="text-aventus-red font-medium uppercase tracking-wider mb-3">
              Our Partners
            </p>
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sponsors & Supporters
            </h2>
          </RevealText>
          
          <RevealText delay={400} className="max-w-2xl mx-auto">
            <p className="text-white/70 text-lg">
              We're grateful to our sponsors who make our journey possible
            </p>
          </RevealText>
        </div>
        
        {/* Placeholder for sponsors */}
        <RevealText delay={600}>
          <div className="bg-aventus-gray-light rounded-2xl p-12 text-center border border-white/5">
            <h3 className="text-2xl font-medium text-white mb-6">
              Become a Sponsor
            </h3>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              Join us on our journey to excellence in F1 in Schools. Support the next generation of engineering talent and gain visibility for your brand.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-aventus-red hover:bg-aventus-red-dark text-white px-8 py-3 rounded-full transition-colors duration-300"
            >
              Get in Touch
            </a>
          </div>
        </RevealText>
      </div>
    </ParallaxSection>
  );
}
