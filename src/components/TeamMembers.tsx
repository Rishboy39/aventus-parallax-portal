
import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  delay: number;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Team Member 1',
    role: 'Team Principal',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=500&auto=format&fit=crop',
    delay: 100,
  },
  {
    name: 'Team Member 2',
    role: 'Manufacturing Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop',
    delay: 200,
  },
  {
    name: 'Team Member 3',
    role: 'Design Engineer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
    delay: 300,
  },
  {
    name: 'Team Member 4',
    role: 'Resource Manager',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
    delay: 400,
  },
  {
    name: 'Team Member 5',
    role: 'Graphic Designer',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=500&auto=format&fit=crop',
    delay: 500,
  },
  {
    name: 'Team Member 6',
    role: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
    delay: 600,
  },
];

export default function TeamMembers() {
  return (
    <ParallaxSection 
      id="team"
      className="py-24 bg-gradient-to-b from-aventus-black to-aventus-gray"
      speed={0.05}
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <RevealText>
            <p className="text-aventus-red font-medium uppercase tracking-wider mb-3">
              Meet The Team
            </p>
          </RevealText>
          <RevealText delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The Driving Force
            </h2>
          </RevealText>
          <RevealText delay={400} className="max-w-2xl mx-auto">
            <p className="text-white/70 text-lg">
              Our team of dedicated innovators pushing the boundaries of F1 in Schools competition
            </p>
          </RevealText>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <RevealText key={index} delay={member.delay}>
              <div 
                className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-aventus-black via-transparent to-transparent opacity-70 z-10"></div>
                
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-[400px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-aventus-red font-medium">
                    {member.role}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-aventus-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              </div>
            </RevealText>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
