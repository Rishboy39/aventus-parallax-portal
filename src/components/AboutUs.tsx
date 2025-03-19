
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';
import RevealText from './ui/RevealText';
import { 
  Card, 
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Plus, Minus } from 'lucide-react';

interface CardItem {
  title: string;
  description: string;
}

const cards: CardItem[] = [
  {
    title: "Who We Are",
    description: "Our belief and group philosophy depends on cooperation, which permits singular ability to bloom and abilities to create to the greatest potential. Our team is built on values, such as cooperation, teamwork, hard work and love for the competition."
  },
  {
    title: "Team Identity",
    description: "Our shared goal is: 'Talent wins games, but teamwork and intelligence win championships.' Inspired by this quotation, our team presents a special spirit of teamwork and partnership, setting common goals and crossing together, as a whole, this path to its end."
  },
  {
    title: "Team Goals",
    description: "Goals are integral to team development and organization; in fact, we have determined the ones most important to our team. Our goals are to attract sponsors, to organize events, and to create a car that is as small in size as possible to reduce weight and maximize speed."
  }
];

export default function AboutUs() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    if (activeCard === index) {
      setActiveCard(null);
    } else {
      setActiveCard(index);
    }
  };

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
              <div className="space-y-4 mt-6">
                {cards.map((card, index) => (
                  <Card 
                    key={index} 
                    className={cn(
                      "overflow-hidden transition-all duration-300", 
                      activeCard === index ? "border-aventus-red shadow-lg" : "border-gray-200"
                    )}
                  >
                    <CardHeader className="p-4 cursor-pointer" onClick={() => toggleCard(index)}>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-aventus-red font-bold">{card.title}</CardTitle>
                        <button 
                          className={cn(
                            "bg-gray-100 rounded-full p-1.5 transition-all",
                            activeCard === index ? "bg-aventus-red text-white" : "text-gray-500"
                          )}
                        >
                          {activeCard === index ? <Minus size={18} /> : <Plus size={18} />}
                        </button>
                      </div>
                    </CardHeader>
                    <div 
                      className={cn(
                        "transition-all duration-300 overflow-hidden",
                        activeCard === index ? "max-h-96" : "max-h-0"
                      )}
                    >
                      <CardContent className="p-4 pt-0">
                        <p className="text-gray-700">{card.description}</p>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}
