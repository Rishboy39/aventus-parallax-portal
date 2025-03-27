"use client";

import React, { useState } from 'react';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

// Simplified interface for gallery items
interface GalleryItem {
  title: string;
  description: string;
  image: string;
  category: 'all'|'car' | 'parts' | 'other';
}

// Sample gallery items
const galleryItems: GalleryItem[] = [
  {
    title: "2025 Nationals Car",
    description: "Render of our car",
    image: "/renders/render4.png",
    category: 'car'
  },
  {
    title: "2025 National Car",
    description: "A different render of car",
    image: "/renders/render2.png",
    category: 'car'
  },
  {
    title: "2025 Race Car Design",
    description: "Experimental Colors",
    image: "/renders/render5.png",
    category: 'car'
  },
  {
    title: "Back Wing Desgin",
    description: "This is with sponsor logo",
    image: "/renders/back.png",
    category: 'parts'
  },
  {
    title: "Car while it is getting CNCed",
    description: "The car gettting manufactured",
    image: "/renders/ana.png",
    category: 'other',
  },
  {
    title: "Project Manager working on the car",
    description: "Bhrugu is working on the car",
    image: "/renders/working.png",
    category: 'other',
  },
  {
    title: "First time 3d printing wheels",
    description: "Wheels in the printer",
    image: "/renders/wheel1.png",
    category: 'parts',
  },
  {
    title: "Render",
    description: "...",
    image: "/renders/render3.png",
    category: 'car',
  },
  // Add more items...
];

const categories = [
  { id: 'car', label: 'Full Car' },
  { id: 'parts', label: 'Components' },
  { id: 'other', label: 'Other' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      <section className="bg-aventus-black text-white">
        <div className="min-h-[60vh] lg:max-h-[500px] w-screen lg:p-32 py-12 lg:gap-32 flex max-lg:flex-col items-center justify-center relative">
          <motion.div
            className='lg:w-1/2 max-lg:px-16'
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-4xl leading-none font-bold mb-4 max-lg:pt-32"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Image Gallery
            </motion.h1>
            <motion.p
              className="text-lg lg:mr-32 text-white/70"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our collection of design renders and concepts.
            </motion.p>
          </motion.div>

          {/* Featured Image Section */}
          <motion.div
            className='lg:w-1/2 w-full max-lg:px-8'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={galleryItems[0].image} 
                alt="Featured Design" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <ParallaxSection
        id="gallery"
        className="py-24 bg-aventus-gray"
        speed={0.05}
      >
        {/* Category Filter */}
        <RevealText delay={500}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-aventus-red text-white"
                    : "bg-aventus-gray-light text-white/70 hover:text-white hover:bg-aventus-red/20"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </RevealText>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-24">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div 
                className="group cursor-pointer bg-aventus-gray-light rounded-2xl overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden">
                  <AspectRatio ratio={4/3}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </AspectRatio>
                  <div className="absolute inset-0 bg-gradient-to-t from-aventus-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="max-w-4xl w-full bg-aventus-gray-light rounded-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={selectedItem.image} 
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/50 rounded-full p-2"
                >
                  ✕
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.title}</h3>
                <p className="text-white/70">{selectedItem.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </ParallaxSection>
    </>
  );
}