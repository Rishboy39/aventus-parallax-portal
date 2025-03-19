
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
    
    let startScrollPosition = 0;
    let ticking = false;
    
    const handleParallax = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!section || !content) return;
          
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Check if section is in view
          if (rect.top < windowHeight && rect.bottom > 0) {
            const scrollPosition = window.scrollY - startScrollPosition;
            const translateValue = direction === 'up' 
              ? scrollPosition * speed * (reverse ? -1 : 1)
              : scrollPosition * speed * (reverse ? 1 : -1);
              
            content.style.transform = `translate3d(0, ${translateValue}px, 0)`;
          }
          
          ticking = false;
        });
        
        ticking = true;
      }
    };
    
    // Store initial position
    startScrollPosition = window.scrollY;
    
    window.addEventListener('scroll', handleParallax, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, [speed, direction, reverse]);
  
  return (
    <div 
      ref={sectionRef} 
      className={cn("parallax-wrapper relative overflow-hidden w-full", className)}
      id={id}
      {...props}
    >
      <div 
        ref={contentRef} 
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}

export default ParallaxSection;
