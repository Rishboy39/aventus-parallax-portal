import React from 'react';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';

// Define the type for gallery items
interface GalleryItem {
  title: string;
  description: string;
  image: string;
  modelViewer?: string; // URL for 3D model viewer if implemented
  category: 'car' | 'parts' | 'concept';
}

// Sample gallery items (replace with your actual 3D renders)
const galleryItems: GalleryItem[] = [
  {
    title: "2024 Race Car Design",
    description: "Our latest F1 in Schools car design featuring improved aerodynamics",
    image: "https://images.unsplash.com/photo-1635428433739-53ac707f3d2c?q=80&w=2000&auto=format&fit=crop",
    category: 'car'
  },
  // Add more items here
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
    <ParallaxSection
      id="gallery"
      className="py-24 bg-aventus-gray"
      speed={0.05}
    >
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <RevealText>
            <p className="text-aventus-red font-medium uppercase tracking-wider mb-3">
              Our Designs
            </p>
          </RevealText>
          
          <RevealText delay={200}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              3D <span className="text-gradient-red">Gallery</span>
            </h2>
          </RevealText>
          
          <RevealText delay={400} className="max-w-2xl mx-auto">
            <p className="text-white/70 text-lg">
              Explore our collection of 3D renders and designs
            </p>
          </RevealText>
        </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <RevealText key={index} delay={600 + (index * 100)}>
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
            </RevealText>
          ))}
        </div>

        {/* Modal for detailed view */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
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
          </div>
        )}
      </div>
    </ParallaxSection>
  );
} 