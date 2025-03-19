
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { ArrowLeft } from 'lucide-react';
import RevealText from '@/components/ui/RevealText';
import { teamMembers } from '@/data/teamData';

export default function TeamDetail() {
  const { memberId } = useParams();
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState<number>(parseInt(memberId || '0'));
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (memberId) {
      setActiveIndex(parseInt(memberId));
    }
  }, [memberId]);

  const handleBack = () => {
    navigate('/#team');
  };

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % teamMembers.length;
    navigate(`/team/${nextIndex}`);
  };

  const handlePrev = () => {
    const prevIndex = (activeIndex - 1 + teamMembers.length) % teamMembers.length;
    navigate(`/team/${prevIndex}`);
  };

  const member = teamMembers[activeIndex];

  if (!member) {
    return <div>Member not found</div>;
  }

  return (
    <div className="bg-aventus-black min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <button 
          onClick={handleBack}
          className="flex items-center text-white mb-12 group hover:text-aventus-red transition-colors"
        >
          <ArrowLeft className="mr-2 group-hover:translate-x-[-5px] transition-transform" />
          <span>Back to Team</span>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-[600px] object-cover object-center"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-aventus-red/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-aventus-red/10 rounded-full blur-2xl -z-10"></div>
          </div>
          
          <div>
            <RevealText>
              <h1 className="text-5xl font-bold mb-2 text-white">
                {member.name}
              </h1>
            </RevealText>
            
            <RevealText delay={200}>
              <p className="text-aventus-red text-xl font-medium mb-8">
                {member.role}
              </p>
            </RevealText>
            
            <RevealText delay={400}>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-white/80 mb-6">
                  {member.longDescription || "Team member was elected due to their immense passion for the competition and exclusive choice of the members for the formation of our team. Their role is to ensure smooth operation and flow of the team throughout the competition."}
                </p>
                <p className="text-white/80 mb-6">
                  "Our belief and group philosophy depends on cooperation, which permits singular ability to bloom and abilities to create to the greatest potential. Our team is built on values, such as cooperation, teamwork, hard work and love for the competition."
                </p>
                <p className="text-white/80">
                  "Talent wins games, but teamwork and intelligence win championships." Inspired by this quotation, our team presents a special spirit of teamwork and partnership, setting common goals and crossing together, as a whole, this path to its end.
                </p>
              </div>
            </RevealText>
            
            <div className="flex space-x-4 mt-12">
              <button 
                onClick={handlePrev}
                className="px-5 py-3 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors"
              >
                Previous Member
              </button>
              <button 
                onClick={handleNext}
                className="px-5 py-3 bg-aventus-red hover:bg-aventus-red-dark transition-colors rounded-full text-white"
              >
                Next Member
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
