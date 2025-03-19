import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
  reverse?: boolean;
  id?: string;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.1,
  direction = 'up',
  reverse = false,
  id,
  ...props
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    
    if (!section || !content) return;
    
    const handleParallax = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Check if section is in view
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = (windowHeight - sectionTop) / (windowHeight + sectionHeight);
        const translateY = (scrollProgress - 0.5) * speed * 100;
        
        content.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }
    };
    
    window.addEventListener('scroll', handleParallax, { passive: true });
    handleParallax(); // Initial position
    
    return () => window.removeEventListener('scroll', handleParallax);
  }, [speed, direction, reverse]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("relative overflow-hidden w-full", className)}
      id={id}
      {...props}
    >
      <div 
        ref={contentRef} 
        className="will-change-transform transition-transform duration-100"
      >
        {children}
      </div>
    </div>
  );
}

export default ParallaxSection;
