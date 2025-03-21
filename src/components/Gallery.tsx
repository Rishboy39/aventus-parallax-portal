"use client";

import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import ThreeDViewer from './3DViewer';

// Updated interface to include 3D model
interface GalleryItem {
  title: string;
  description: string;
  image: string;
  modelUrl?: string;
  category: 'car' | 'parts' | 'concept';
}

// Updated sample items with 3D models
const galleryItems: GalleryItem[] = [
  {
    title: "2024 Race Car Design",
    description: "Our latest F1 in Schools car design featuring improved aerodynamics",
    image: "https://images.unsplash.com/photo-1635428433739-53ac707f3d2c?q=80&w=2000&auto=format&fit=crop",
    modelUrl: "/path-to-your-3d-model.glb", // Add your 3D model path here
    category: 'car'
  },
  // Add more items...
];

const categories = [
  { id: 'all', label: 'All Designs' },
  { id: 'car', label: 'Full Car' },
  { id: 'parts', label: 'Components' },
  { id: 'concept', label: 'Concepts' }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter(item => 
    activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <>
      <section className="bg-aventus-black text-white">
        <div className="min-h-[90vh] lg:max-h-[750px] w-screen lg:p-32 py-12 lg:gap-32 flex max-lg:flex-col items-center justify-center relative">
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
              3D Gallery
            </motion.h1>
            <motion.p
              className="text-lg lg:mr-32 text-white/70"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Explore our collection of 3D renders and designs. Click and drag to interact with the models.
            </motion.p>
          </motion.div>

          {/* Featured 3D Model Section */}
          <motion.div
            className='lg:w-1/2 w-full max-lg:px-8 relative h-full aspect-square'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center'>
              <Canvas camera={{ position: [-0.7, 0.25, 0.7], fov: 30 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[0, 5, 5]} intensity={1} />
                <OrbitControls enableZoom={false} enablePan={false} enableDamping={true} />
                <Environment preset="city" />
              </Canvas>
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

        {/* Updated Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Updated Modal with 3D Viewer */}
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
              <div className="relative h-[60vh]">
                {selectedItem.modelUrl ? (
                  <ThreeDViewer
                    modelUrl={selectedItem.modelUrl}
                    posterUrl={selectedItem.image}
                    alt={selectedItem.title}
                  />
                ) : (
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                )}
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