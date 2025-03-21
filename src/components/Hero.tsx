import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { handleSpotlightMouseMove } from '@/lib/animations';
import { ArrowDown } from 'lucide-react';
import RevealText from './ui/RevealText';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Image URL - replace with your actual image URL
  const imageUrl = '/hero.png'; // Update this with your image path

  const scrollToNextSection = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleSpotlightMouseMove}
    >
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Aventus Racing background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aventus-black/40 via-aventus-black/70 to-aventus-black/90"></div>
      </div>
      
      {/* Spotlight effect */}
      <div className="spotlight"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center text-white">
        <RevealText delay={300}>
          <p className="text-xl font-medium mb-4 text-aventus-red uppercase tracking-wider">
            F1 in Schools
          </p>
        </RevealText>
        
        <RevealText delay={600}>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="block">Aventus</span>
            <span className="text-gradient-red">Racing</span>
          </h1>
        </RevealText>
        
        <RevealText delay={900} className="max-w-2xl">
          <p className="text-xl md:text-2xl text-white/80 mb-12">
            Pushing the boundaries of innovation and performance on and off the track
          </p>
        </RevealText>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNextSection}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-sm font-medium">Discover</span>
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
