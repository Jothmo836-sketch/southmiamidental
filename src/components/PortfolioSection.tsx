import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface PortfolioItem {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

interface PortfolioSectionProps {
  onSelectProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const projects: PortfolioItem[] = [
    {
      id: 'porcelain-veneers',
      title: 'Porcelain Veneers',
      location: 'South Miami, FL',
      image: IMAGES.radiantSmile,
      category: 'Cosmetic',
    },
    {
      id: 'implant-crown',
      title: 'Implant Restoration',
      location: 'Coral Gables, FL',
      image: IMAGES.ceramicRestorations,
      category: 'Restorative',
    },
    {
      id: 'full-smile-rehab',
      title: 'Smile Rejuvenation',
      location: 'Pinecrest, FL',
      image: IMAGES.drCutino,
      category: 'Cosmetic',
    },
    {
      id: 'conservative-restoration',
      title: 'Ceramic Bonding',
      location: 'Miami, FL',
      image: IMAGES.hero,
      category: 'General',
    },
  ];

  return (
    <section id="work" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0B1015] text-[#F6F4F0] select-none">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-14 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF87] uppercase mb-3">
            <span>// SMILE GALLERY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] tracking-tight leading-none">
            Crafted with Purpose
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#9AA8B6] max-w-xs leading-relaxed">
          We listen first, diagnose honestly, and design smiles that endure.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative">
        
        {/* Floating Italic Wordmark */}
        <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <motion.span 
            animate={{ y: [-6, 6, -6], rotate: [-1, 1, -1] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="font-serif-italic text-7xl xl:text-8xl text-[#D4AF87] drop-shadow-2xl tracking-wide select-none"
          >
            Gentle
          </motion.span>
        </div>

        {/* Left Column */}
        <div className="md:col-span-6 flex flex-col space-y-10 md:space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            onClick={() => onSelectProject(projects[0].title)}
            className="group cursor-pointer"
          >
            <div className="w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#1E2B37] bg-[#111A22] shadow-xl relative">
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
              <span className="font-semibold text-white tracking-wide group-hover:text-[#D4AF87] transition-colors">{projects[0].title}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => onSelectProject(projects[2].title)}
            className="group cursor-pointer"
          >
            <div className="w-full h-[280px] sm:h-[340px] rounded-3xl overflow-hidden border border-[#1E2B37] bg-[#111A22] shadow-xl relative">
              <img 
                src={projects[2].image} 
                alt={projects[2].title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
              <span className="font-semibold text-white tracking-wide group-hover:text-[#D4AF87] transition-colors">{projects[2].title}</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-6 flex flex-col space-y-10 md:space-y-16 md:pt-14">
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onClick={() => onSelectProject(projects[1].title)}
            className="group cursor-pointer"
          >
            <div className="w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#1E2B37] bg-[#111A22] shadow-xl relative">
              <img 
                src={projects[1].image} 
                alt={projects[1].title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
              <span className="font-semibold text-white tracking-wide group-hover:text-[#D4AF87] transition-colors">{projects[1].title}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => onSelectProject(projects[3].title)}
            className="group cursor-pointer"
          >
            <div className="w-full h-[320px] sm:h-[400px] rounded-3xl overflow-hidden border border-[#1E2B37] bg-[#111A22] shadow-xl relative">
              <img 
                src={projects[3].image} 
                alt={projects[3].title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out" 
              />
            </div>
            <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
              <span className="font-semibold text-white tracking-wide group-hover:text-[#D4AF87] transition-colors">{projects[3].title}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
