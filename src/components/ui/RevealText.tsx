
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function RevealText({
  children,
  className,
  delay = 0,
  direction = 'up',
}: RevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(20px)';
      case 'down':
        return 'translateY(-20px)';
      case 'left':
        return 'translateX(20px)';
      case 'right':
        return 'translateX(-20px)';
      default:
        return 'translateY(20px)';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden transition-opacity duration-700',
        { 'opacity-0': !isVisible, 'opacity-100': isVisible },
        className
      )}
    >
      <div
        className="transition-transform duration-700"
        style={{
          transform: isVisible ? 'translate(0)' : getTransform(),
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default RevealText;
