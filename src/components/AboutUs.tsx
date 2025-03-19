
import React from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';

export default function AboutUs() {
  return (
    <ParallaxSection 
      id="about"
      className="py-24 bg-white"
      speed={0.08}
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <RevealText>
              <div className="relative z-10 overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1635428433739-53ac707f3d2c?q=80&w=2000&auto=format&fit=crop"
                  alt="F1 Car" 
                  className="w-full h-auto object-cover rounded-2xl shadow-xl"
                />
              </div>
            </RevealText>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-aventus-red/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-aventus-red/10 rounded-full blur-2xl -z-10"></div>
          </div>
          
          <div>
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
              <p className="text-gray-700 text-lg mb-6">
                Aventus Racing is a dynamic F1 in Schools team dedicated to pushing the boundaries of innovation and performance. Founded with a passion for engineering and racing, we bring together diverse talents to create cutting-edge solutions.
              </p>
            </RevealText>
            
            <RevealText delay={600}>
              <p className="text-gray-700 text-lg mb-8">
                Our approach combines rigorous engineering principles with creative design thinking. We're not just building miniature race cars; we're developing the next generation of engineers, designers, and leaders in motorsport.
              </p>
            </RevealText>
            
            <RevealText delay={800}>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h3 className="text-aventus-red font-bold text-2xl mb-1">Innovation</h3>
                  <p className="text-gray-600">Pioneering new solutions through creative engineering</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <h3 className="text-aventus-red font-bold text-2xl mb-1">Performance</h3>
                  <p className="text-gray-600">Optimizing every aspect for maximum speed and efficiency</p>
                </div>
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
