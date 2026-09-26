import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, ShieldCheck, Star, Heart, Award } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface HeroToGallerySectionProps {
  onOpenContact: () => void;
}

export const HeroToGallerySection: React.FC<HeroToGallerySectionProps> = ({ onOpenContact }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hero fade-out
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const heroTextY = useTransform(scrollYProgress, [0, 0.22], [0, -80]);
  const heroTextBlur = useTransform(scrollYProgress, [0, 0.22], ['blur(0px)', 'blur(10px)']);
  const bottomBarOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);

  // Background Pearl transition
  const pearlBgOpacity = useTransform(scrollYProgress, [0.12, 0.42], [0, 1]);

  // Card shrink
  const cardScale = useTransform(scrollYProgress, [0.08, 0.48], [1, 0.42]);
  const cardBorderRadius = useTransform(scrollYProgress, [0.08, 0.48], ['0px', '32px']);
  const cardBorderWidth = useTransform(scrollYProgress, [0.15, 0.48], ['0px', '3px']);
  const cardShadow = useTransform(
    scrollYProgress,
    [0.15, 0.48],
    ['0px 0px 0px rgba(0,0,0,0)', '0px 30px 70px rgba(11,16,21,0.28)']
  );

  // Direct headline below card
  const headlineOpacity = useTransform(scrollYProgress, [0.38, 0.58], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0.38, 0.58], [40, 0]);

  // Badges fade-in & parallax
  const badgesFadeIn = useTransform(scrollYProgress, [0.3, 0.48], [0, 1]);
  const yDriftFast = useTransform(scrollYProgress, [0.35, 1], [160, -380]);
  const yDriftMedium = useTransform(scrollYProgress, [0.35, 1], [110, -250]);

  const clinicalBadges = [
    { id: 1, icon: <ShieldCheck className="w-4 h-4 text-[#C59B6D]" />, text: 'Honest Diagnostics', x: '8%', yBase: '18%', speed: 'fast' },
    { id: 2, icon: <Star className="w-4 h-4 text-[#C59B6D] fill-[#C59B6D]" />, text: '5.0 ★ Rated Care', x: '14%', yBase: '68%', speed: 'medium' },
    { id: 3, icon: <Heart className="w-4 h-4 text-[#C59B6D]" />, text: 'Painless Touch', x: '76%', yBase: '22%', speed: 'fast' },
    { id: 4, icon: <Award className="w-4 h-4 text-[#C59B6D]" />, text: 'Master Ceramics', x: '72%', yBase: '72%', speed: 'medium' },
  ];

  return (
    <div ref={containerRef} className="relative w-full h-[240vh] bg-[#0B1015] select-none">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Background Pearl Overlay */}
        <motion.div 
          style={{ opacity: pearlBgOpacity }}
          className="absolute inset-0 z-0 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE7] to-[#FAF7F2] pointer-events-none transition-colors"
        />

        {/* Floating Minimal Badges */}
        <motion.div 
          style={{ opacity: badgesFadeIn }}
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        >
          {clinicalBadges.map((b) => {
            const yDrift = b.speed === 'fast' ? yDriftFast : yDriftMedium;

            return (
              <motion.div
                key={b.id}
                style={{ left: b.x, top: b.yBase, y: yDrift }}
                className="pointer-events-auto absolute hidden md:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/95 border border-[#E3DDD1] shadow-lg shadow-slate-900/5 hover:scale-105 transition-transform"
              >
                <div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                  {b.icon}
                </div>
                <span className="text-xs font-bold text-[#141E26]">
                  {b.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Central Shrinking Clinic Container */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <motion.div
            style={{
              scale: cardScale,
              borderRadius: cardBorderRadius,
              borderWidth: cardBorderWidth,
              boxShadow: cardShadow,
            }}
            className="w-full h-full origin-center overflow-hidden border-white/90 pointer-events-auto relative cursor-pointer group"
            onClick={() => {
              window.scrollTo({ top: window.innerHeight * 1.35, behavior: 'smooth' });
            }}
          >
            <img 
              src={IMAGES.hero} 
              alt="South Miami Dental Studio" 
              className="w-full h-full object-cover object-center scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/35 pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-xl bg-[#0B1015]/85 backdrop-blur-md border border-white/20 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
              <span className="font-semibold text-[#F6F4F0]">Dr. Juan Cutino, DDS • South Miami</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4AF87]" />
            </div>
          </motion.div>
        </div>

        {/* Hero Kinetic Title */}
        <motion.div 
          style={{ opacity: heroTextOpacity, y: heroTextY, filter: heroTextBlur }}
          className="relative z-30 flex-1 flex flex-col justify-center items-start px-6 sm:px-10 md:px-14 lg:px-24 pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-12 pointer-events-none"
        >
          <div className="w-full max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#14202B]/85 text-[#D4AF87] border border-[#2B3E50] backdrop-blur-md mb-3 sm:mb-5 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#D4AF87] animate-pulse" />
              <span>Dr. Juan Cutino, DDS • South Miami</span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1 
                initial={{ opacity: 0, y: 70, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-5xl sm:text-7xl md:text-[5.5rem] lg:text-9xl xl:text-[11rem] leading-[0.88] tracking-tight text-[#FAF7F2] drop-shadow-2xl select-none"
              >
                RADIANT
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-1 sm:mt-2 md:mt-3">
              <motion.h1 
                initial={{ opacity: 0, y: 70, filter: 'blur(16px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black text-5xl sm:text-7xl md:text-[5.5rem] lg:text-9xl xl:text-[11rem] leading-[0.88] tracking-tight text-[#FAF7F2] drop-shadow-2xl pl-0.5 sm:pl-1 md:pl-2 select-none"
              >
                SMILES
              </motion.h1>
            </div>
          </div>
        </motion.div>

        {/* Direct Narrative Headline Below Card */}
        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-0 right-0 z-30 max-w-xl md:max-w-2xl mx-auto px-6 text-center pointer-events-none"
        >
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#111A22] leading-tight">
            Honest care. Gentle hands. Lasting confidence.
          </h2>
        </motion.div>

        {/* Hero Bottom Bar */}
        <motion.div 
          style={{ opacity: bottomBarOpacity }}
          className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-24 pb-6 sm:pb-8 pt-4 pointer-events-none"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4 text-xs font-medium text-[#C8D1DB] border-t border-white/10 pt-4 sm:pt-5">
            <div className="flex items-center gap-2 sm:gap-3 tracking-wider uppercase text-[11px] sm:text-xs">
              <span className="text-[#D4AF87] font-semibold">South Miami</span>
              <span>|</span>
              <a href="tel:3056672633" className="pointer-events-auto hover:text-white transition-colors underline decoration-[#D4AF87]">
                (305) 667-2633
              </a>
              <span className="hidden md:inline">|</span>
              <span className="hidden md:inline">7311 SW 62nd Ave</span>
            </div>

            <div 
              className="pointer-events-auto flex flex-col items-center gap-1 cursor-pointer group"
              onClick={() => {
                window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' });
              }}
            >
              <span className="text-[10px] tracking-widest uppercase text-[#D4AF87] group-hover:text-white transition-colors">
                Scroll
              </span>
              <div className="w-1 h-6 bg-white/20 relative overflow-hidden rounded-full">
                <motion.div 
                  animate={{ y: [0, 24, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                  className="w-full h-2.5 bg-[#D4AF87] rounded-full"
                />
              </div>
            </div>

            <div className="tracking-wide text-xs text-[#FAF7F2]">
              <span className="font-bold text-[#D4AF87]">15,000+</span> Smiles Restored
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
