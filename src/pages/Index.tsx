
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TeamMembers from '@/components/TeamMembers';
import AboutUs from '@/components/AboutUs';
import Sponsors from '@/components/Sponsors';

export default function Index() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation (scroll to section)
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="relative bg-aventus-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <TeamMembers />
      <AboutUs />
      <Sponsors />
    </div>
  );
}
