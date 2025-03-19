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
      "fixed left-8 top-1/2 -translate-y-1/2 z-50 transition-all duration-500",
      scrolled ? "translate-x-0" : "translate-x-0"
    )}>
      <div className={cn(
        "flex flex-col items-center gap-6 py-4 px-2 rounded-full transition-all duration-300",
        scrolled ? "glass-dark shadow-lg" : "bg-transparent"
      )}>
        {navItems.map(({ icon: Icon, label, href }) => {
          const isActive = activeSection === (label.toLowerCase() === 'home' ? 'home' : label.toLowerCase());
          const isContactPage = href === '/contact';
          const linkHref = isContactPage ? href : href.includes('#') ? href : `/#${label.toLowerCase()}`;
          
          return (
            <Link
              key={label}
              to={linkHref}
              aria-label={label}
              className={cn(
                "relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                isActive 
                  ? "bg-aventus-red text-white shadow-md" 
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className={cn(
                "absolute left-full ml-2 whitespace-nowrap px-2 py-1 rounded-md text-sm transition-all duration-300",
                "opacity-0 pointer-events-none translate-x-2 bg-aventus-black text-white",
                "group-hover:opacity-100 group-hover:translate-x-0"
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
