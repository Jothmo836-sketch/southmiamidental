import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IMAGES } from '../assets.ts';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Subtly transform text on scroll
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#161310] select-none">
      {/* Background Image with Dark Vignette & Desert Villa */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={IMAGES.hero} 
          alt="Futuristic Desert Pavilion Villa"
          className="w-full h-full object-cover object-center scale-105"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Cinematic Scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161310] via-black/30 to-[#161310]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>

      {/* Center Hero Kinetic Title */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-start px-6 sm:px-12 md:px-20 lg:px-28 pt-24 pb-12">
        <motion.div 
          style={{ opacity: textOpacity, y: textY }}
          className="max-w-4xl"
        >
          {/* Line 1: DESIGN with blur reveal */}
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ opacity: 0, y: 80, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tight text-[#F7D8C6] drop-shadow-2xl"
            >
              DESIGN
            </motion.h1>
          </div>

          {/* Line 2: SPACE with staggered blur reveal */}
          <div className="overflow-hidden mt-1 sm:mt-2">
            <motion.h1 
              initial={{ opacity: 0, y: 80, filter: 'blur(16px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.88] tracking-tight text-[#F7D8C6] drop-shadow-2xl pl-1 sm:pl-3"
            >
              SPACE
            </motion.h1>
          </div>
        </motion.div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 w-full px-6 sm:px-12 md:px-20 lg:px-28 pb-8 pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-medium text-[#E4D5C7]/80 border-t border-white/10 pt-6">
          {/* Left Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center gap-3 tracking-wider uppercase text-xs"
          >
            <span>Creative</span>
            <span className="text-[#E2B79A]">|</span>
            <span>Exhibitions</span>
            <span className="text-[#E2B79A]">|</span>
            <span>2026</span>
          </motion.div>

          {/* Center Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col items-center gap-1.5 cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 0.95, behavior: 'smooth' });
            }}
          >
            <span className="text-[10px] tracking-widest uppercase text-[#E2B79A] group-hover:text-white transition-colors">
              Scroll
            </span>
            <div className="w-[1.5px] h-8 bg-white/20 relative overflow-hidden rounded-full">
              <motion.div 
                animate={{ y: [0, 32, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                className="w-full h-3 bg-[#E2B79A] rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Completed Projects Count */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="tracking-wide text-xs sm:text-sm text-[#F5EBE1]"
          >
            Total : <span className="font-bold text-[#E2B79A]">200 +</span> Projects completed
          </motion.div>
        </div>
      </div>
    </section>
  );
};
