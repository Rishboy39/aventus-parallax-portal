import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';

interface SponsorType {
  name: string;
  logo: string;
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
}

const sponsors: SponsorType[] = [
  {
    name: 'Teracube',
    logo: 'https://placehold.co/200x100/333/white?text=TeraCube',
    tier: 'platinum'
  },
  {
    name: 'Oasiss',
    logo: 'https://placehold.co/200x100/333/white?text=Oasis',
    tier: 'gold'
  },
  {
    name: 'Blue Rigger',
    logo: 'https://placehold.co/200x100/333/white?text=BlueRigger',
    tier: 'gold'
  },
  {
    name: 'Elevate',
    logo: 'https://placehold.co/200x100/333/white?text=BlueRigger',
    tier: 'gold'
  },

];

const tiers = [
  {
    name: 'Platinum',
    benefits: [
      'Logo prominence on car and team uniform',
      'Featured on all marketing materials',
      'Social media promotion',
      'Team visits to sponsor location',
      'Exclusive access to team events'
    ],
    color: 'bg-gradient-to-r from-gray-200 to-gray-400'
  },
  {
    name: 'Gold',
    benefits: [
      'Logo on car and team uniform',
      'Featured on marketing materials',
      'Social media mentions',
      'Team representation at sponsor events'
    ],
    color: 'bg-gradient-to-r from-yellow-300 to-yellow-500'
  },
  {
    name: 'Silver',
    benefits: [
      'Logo on Pit Display',
      'Logo on Uniform',
      'Social media recognition'
    ],
    color: 'bg-gradient-to-r from-gray-300 to-gray-500'
  },
  {
    name: 'Bronze',
    benefits: [
      'Logo on Pit Display',
      'Mentioned in team presentations'
    ],
    color: 'bg-gradient-to-r from-amber-700 to-amber-900'
  }
];

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
        
        {/* Current Sponsors */}
        {sponsors.length > 0 && (
          <RevealText delay={600}>
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 md:mb-8 text-center">Current Partners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {sponsors.map((sponsor, index) => (
                  <div 
                    key={index} 
                    className="bg-aventus-gray-light rounded-xl p-4 md:p-6 flex items-center justify-center border border-white/5 hover:border-aventus-red/30 transition-all duration-300 hover:shadow-lg"
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="max-w-full max-h-[60px] md:max-h-[80px] object-contain" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealText>
        )}
        
        {/* Sponsorship Tiers */}
        <RevealText delay={800}>
          <div className="mb-12 md:mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 md:mb-8 text-center">Sponsorship Opportunities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {tiers.map((tier, index) => (
                <div key={index} className="bg-aventus-gray-light rounded-xl overflow-hidden border border-white/5 flex flex-col h-full hover:border-aventus-red/30 transition-all duration-300">
                  <div className={cn("h-2 md:h-3", tier.color)}></div>
                  <div className="p-4 md:p-6">
                    <h4 className="text-lg md:text-xl font-bold text-white mb-4">{tier.name}</h4>
                    <ul className="space-y-2 mb-4 md:mb-6 flex-grow">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="text-white/70 text-sm flex items-start">
                          <span className="inline-block mr-2 text-aventus-red">•</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealText>
        
        {/* Call to Action */}
        <RevealText delay={1000}>
          <div className="bg-aventus-gray-light rounded-2xl p-6 md:p-12 text-center border border-white/5 hover:border-aventus-red/30 transition-all duration-300">
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
