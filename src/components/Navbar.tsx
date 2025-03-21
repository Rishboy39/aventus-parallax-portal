import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Users, Info, Award, Mail, Image } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Users, label: 'Team', href: '/#team' },
  { icon: Info, label: 'About', href: '/#about' },
  { icon: Award, label: 'Sponsors', href: '/#sponsors' },
  { icon: Image, label: 'Gallery', href: '/gallery' },
  { icon: Mail, label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 100);

      // Only do section detection on home page
      if (location.pathname === '/') {
        const sections = ['team', 'about', 'sponsors'];
        
        // Default to home
        let currentSection = 'home';
        
        // Find the current section
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
              currentSection = section;
              break;
            }
          }
        }
        
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Set active section based on route
  useEffect(() => {
    if (location.pathname === '/contact') {
      setActiveSection('contact');
    } else if (location.pathname === '/') {
      // Check if there's a hash
      const hash = location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection('home');
      }
    }
  }, [location]);

  return (
    <nav className={cn(
      "fixed z-50 transition-all duration-500",
      // Desktop: left side positioning, Mobile: bottom
      "left-0 right-0 bottom-0 md:bottom-auto",
      "md:left-8 md:right-auto md:top-1/2 md:-translate-y-1/2",
      scrolled ? "translate-x-0" : "translate-x-0"
    )}>
      <div className={cn(
        "flex transition-all duration-300",
        // Adjust layout and sizing
        "flex-row md:flex-col items-center justify-around md:justify-start",
        "w-full md:w-auto py-2 md:py-4 px-2",
        "gap-1 md:gap-4 md:rounded-full",
        scrolled 
          ? "glass-dark shadow-lg" 
          : "bg-black/80 md:bg-transparent"
      )}>
        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = activeSection === (label.toLowerCase() === 'home' ? 'home' : label.toLowerCase());
          const linkHref = href.startsWith('/#') ? href : href;
          
          return (
            <Link
              key={label}
              to={linkHref}
              aria-label={label}
              className={cn(
                "relative flex items-center justify-center transition-all duration-300",
                // Adjust icon sizes
                "w-10 h-10 md:w-8 md:h-8 rounded-full",
                isActive 
                  ? "bg-aventus-red text-white shadow-md" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
              onClick={(e) => {
                if (href.includes('#')) {
                  e.preventDefault();
                  const element = document.getElementById(label.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <Icon className="w-5 h-5 md:w-4 md:h-4" />
              <span className={cn(
                "absolute whitespace-nowrap px-2 py-1 rounded-md text-xs transition-all duration-300",
                // Adjust tooltip position
                "md:left-full md:ml-2 bottom-full mb-2 md:mb-0 md:bottom-auto",
                "opacity-0 pointer-events-none translate-y-2 md:translate-y-0 md:translate-x-2 bg-aventus-black text-white",
                "group-hover:opacity-100 group-hover:translate-y-0 md:group-hover:translate-x-0"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
