import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface ProjectRow {
  id: number;
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
  image: string;
  afterImage: string;
}

interface ServicesIntentSectionProps {
  onOpenApproach: () => void;
}

export const ServicesIntentSection: React.FC<ServicesIntentSectionProps> = ({ onOpenApproach }) => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [showRenovated, setShowRenovated] = useState<boolean>(true);

  const projects: ProjectRow[] = [
    {
      id: 0,
      title: 'Porcelain Veneers',
      metric: '98%',
      metricLabel: 'Shade Match',
      description: 'Ultra-thin custom porcelain bonded to enhance symmetry and brightness naturally.',
      image: IMAGES.radiantSmile,
      afterImage: IMAGES.radiantSmile,
    },
    {
      id: 1,
      title: 'Dental Implants',
      metric: '99%',
      metricLabel: 'Stability',
      description: 'Permanent titanium foundations paired with custom zirconia crowns for lifelong chewing strength.',
      image: IMAGES.ceramicRestorations,
      afterImage: IMAGES.ceramicRestorations,
    },
    {
      id: 2,
      title: 'Ceramic Crowns',
      metric: '100%',
      metricLabel: 'Metal-Free',
      description: 'Biocompatible ceramic shields protecting fractured or weakened teeth while preserving healthy roots.',
      image: IMAGES.drCutino,
      afterImage: IMAGES.radiantSmile,
    },
    {
      id: 3,
      title: 'Periodontal Care',
      metric: '95%',
      metricLabel: 'Tissue Health',
      description: 'Ultrasonic deep cleanings and laser therapy to halt bone loss and restore healthy gums.',
      image: IMAGES.officeWorkspace,
      afterImage: IMAGES.radiantSmile,
    },
  ];

  const current = projects[activeProject];

  return (
    <section id="services" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0B1015] text-[#F6F4F0] select-none">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-14 sm:mb-18 text-center flex flex-col items-center"
      >
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF87] uppercase mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROVEN RESULTS</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] tracking-tight">
          Restoring with Intention
        </h2>
      </motion.div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        
        {/* Left Sticky Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col z-20"
        >
          <div 
            className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-3xl overflow-hidden border border-[#1E2B37] bg-[#10171F] shadow-2xl shadow-black/80 cursor-pointer group"
            onClick={() => setShowRenovated(!showRenovated)}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={`${activeProject}-${showRenovated ? 'after' : 'before'}`}
                src={showRenovated ? current.afterImage : IMAGES.smileBefore}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            <div className="absolute top-4 left-4 z-20">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0B1015]/85 backdrop-blur-md text-[#FAF7F2] border border-white/20 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF87]" />
                <span>{showRenovated ? 'Completed Smile' : 'Before Treatment'}</span>
              </span>
            </div>

            <div className="absolute bottom-4 right-4 z-20">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowRenovated(!showRenovated);
                }}
                className="text-[11px] font-mono tracking-wider text-white bg-black/60 hover:bg-black/80 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 cursor-pointer"
              >
                Tap to toggle
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xs text-[#9AA8B6]">
              Personalized treatment plans designed for facial balance.
            </span>
            <button
              onClick={onOpenApproach}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF87] hover:text-white transition-colors cursor-pointer"
            >
              <span>Our Approach</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Stack of 4 Cards */}
        <div className="lg:col-span-6 flex flex-col gap-4 z-10">
          {projects.map((proj, idx) => {
            const isSelected = activeProject === idx;

            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => {
                  setActiveProject(idx);
                  setShowRenovated(true);
                }}
                onClick={() => {
                  setActiveProject(idx);
                  setShowRenovated(true);
                }}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? 'border-[#D4AF87] bg-[#111A22] shadow-xl shadow-black/50 scale-[1.01]' 
                    : 'border-[#1E2B37] bg-[#10171F] hover:border-[#2C3F50]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-base text-white">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono text-sm font-bold text-[#D4AF87]">{proj.metric}</span>
                    <span className="text-[10px] text-[#71808F] uppercase font-mono">{proj.metricLabel}</span>
                  </div>
                </div>
                <p className="text-xs text-[#C8D1DB] leading-relaxed">
                  {proj.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
