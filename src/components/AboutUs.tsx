
import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function AboutUs() {
  return (
    <ParallaxSection 
      id="about"
      className="py-24 bg-white"
      speed={0.08}
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <RevealText>
            <p className="text-aventus-red font-medium uppercase tracking-wider mb-3">
              About Us
            </p>
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-aventus-black">
              Our <span className="text-gradient-red">Story</span>
            </h2>
          </RevealText>
          
          <RevealText delay={400}>
            <p className="text-gray-700 text-lg">
              Aventus Racing is a dynamic F1 in Schools team dedicated to pushing the boundaries of innovation and performance. 
              Founded with a passion for engineering and racing, we bring together diverse talents to create cutting-edge solutions.
            </p>
          </RevealText>
        </div>
        
        {/* Main Content with Images and Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* First Row */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <RevealText>
              <div className="bg-gradient-to-br from-aventus-red/10 to-aventus-red/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-aventus-red mb-4">Who We Are</h3>
                <p className="text-gray-700">
                  Our belief and group philosophy depends on cooperation, which permits singular ability 
                  to bloom and abilities to create to the greatest potential. Our team is built on values, 
                  such as cooperation, teamwork, hard work and love for the competition.
                </p>
                <p className="text-gray-700 mt-4">
                  Each member brings unique skills and perspectives, allowing us to approach challenges 
                  from multiple angles and develop innovative solutions that set us apart in the competition.
                </p>
              </div>
            </RevealText>
          </div>
          
          <div className="lg:col-span-7">
            <RevealText delay={300}>
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <AspectRatio ratio={16/9}>
                  <img 
                    src="https://images.unsplash.com/photo-1635428433739-53ac707f3d2c?q=80&w=2000&auto=format&fit=crop" 
                    alt="Team working on F1 car" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </RevealText>
          </div>
          
          {/* Second Row (Reversed on Desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <RevealText delay={500}>
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=1000&auto=format&fit=crop" 
                      alt="F1 Car Design" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-xl">
                  <AspectRatio ratio={3/4}>
                    <img 
                      src="https://images.unsplash.com/photo-1504051771394-dd2e66b2e08f?q=80&w=1000&auto=format&fit=crop" 
                      alt="Racing Competition" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
              </div>
            </RevealText>
          </div>
          
          <div className="lg:col-span-5 flex flex-col justify-center order-1 lg:order-2">
            <RevealText delay={400}>
              <div className="bg-gradient-to-br from-aventus-red/10 to-aventus-red/5 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-aventus-red mb-4">Team Identity</h3>
                <p className="text-gray-700">
                  Our shared goal is: 'Talent wins games, but teamwork and intelligence win championships.' 
                  Inspired by this quotation, our team presents a special spirit of teamwork and partnership, 
                  setting common goals and crossing together, as a whole, this path to its end.
                </p>
                <p className="text-gray-700 mt-4">
                  The Aventus Racing identity is built on innovation, precision, and the relentless pursuit 
                  of excellence - values that drive us both on and off the track.
                </p>
              </div>
            </RevealText>
          </div>
          
          {/* Third Row - Full Width Content */}
          <div className="lg:col-span-12 mt-8">
            <RevealText delay={700}>
              <div className="bg-aventus-red/5 p-8 rounded-2xl border border-aventus-red/10">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="overflow-hidden rounded-2xl shadow-xl">
                    <AspectRatio ratio={4/3}>
                      <img 
                        src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?q=80&w=1000&auto=format&fit=crop" 
                        alt="Team Goals" 
                        className="w-full h-full object-cover"
                      />
                    </AspectRatio>
                  </div>
                  
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-aventus-red mb-4">Team Goals</h3>
                    <p className="text-gray-700">
                      Goals are integral to team development and organization; in fact, we have determined the ones most 
                      important to our team. Our goals are to attract sponsors, to organize events, and to create a car 
                      that is as small in size as possible to reduce weight and maximize speed.
                    </p>
                    <p className="text-gray-700 mt-4">
                      Beyond competition, we aim to inspire the next generation of engineers and designers, sharing our 
                      passion for motorsport and technological innovation. Each challenge we face becomes an opportunity 
                      to grow and improve, pushing the boundaries of what's possible in F1 in Schools.
                    </p>
                  </div>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
