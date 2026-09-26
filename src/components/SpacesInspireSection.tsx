import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Sparkles, Pause, Play } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface InspireSlide {
  id: number;
  label: string;
  title: string;
  description: string;
  image: string;
}

export const SpacesInspireSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const slides: InspireSlide[] = [
    {
      id: 0,
      label: 'Cosmetic Veneers',
      title: 'Radiant Facial Harmony',
      description: 'Custom porcelain veneers designed to reflect natural tooth luminescence, lip symmetry, and personal individuality.',
      image: IMAGES.radiantSmile,
    },
    {
      id: 1,
      label: 'Painless Care',
      title: 'Gentle Restorations',
      description: 'Gentle root canals, tooth-colored fillings, and crowns performed with Dr. Cutino’s calming, virtually painless touch.',
      image: IMAGES.drCutino,
    },
    {
      id: 2,
      label: 'Implant Precision',
      title: 'Dental Implant Stability',
      description: 'Permanent tooth replacements integrating biocompatible foundations with handcrafted ceramic crowns matching adjacent teeth.',
      image: IMAGES.ceramicRestorations,
    },
    {
      id: 3,
      label: 'Family Wellness',
      title: 'Lifelong Oral Health',
      description: 'Preventive cleanings and periodontal care safeguarding oral health for generations of South Miami families.',
      image: IMAGES.southMiamiTerrace,
    },
  ];

  // Auto-moving interval (moves every 3.2s, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3200);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const getSlideAt = (offset: number) => {
    const idx = (currentIndex + offset + slides.length) % slides.length;
    return slides[idx];
  };

  const leftSlide = getSlideAt(-1);
  const centerSlide = getSlideAt(0);
  const rightSlide = getSlideAt(1);

  return (
    <section 
      className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0B1015] text-[#F6F4F0] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header with Fade-In-Up entrance on scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#17232E] text-[#D4AF87] border border-[#273B4D] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTFOLIO SPOTLIGHT</span>
        </div>
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#FAF7F2] tracking-tight leading-[1.05] mb-5">
          SMILES THAT INSPIRE
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#9AA8B6] max-w-xl mx-auto leading-relaxed">
          We craft healthy, radiant smiles that balance facial aesthetics, biological longevity, and confidence with Dr. Juan Cutino's gentle expertise.
        </p>

        {/* Interactive Segmented Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {slides.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentIndex(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#D4AF87] text-[#0B1015] shadow-lg shadow-[#D4AF87]/20 scale-105'
                  : 'bg-[#141E26] text-[#A6B5C5] hover:text-white border border-[#233341]'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* 3D Perspective Moving Stage */}
      <motion.div 
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-6xl mx-auto flex items-center justify-center min-h-[380px] sm:min-h-[440px]"
      >
        {/* Left Tilted Card */}
        <div 
          onClick={prevSlide}
          className="hidden sm:block absolute left-2 md:left-12 z-10 w-64 md:w-80 h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer opacity-40 hover:opacity-75 transition-all duration-500 scale-85 [transform:perspective(1000px)_rotateY(16deg)] border border-[#233341]"
        >
          <img 
            src={leftSlide.image} 
            alt={leftSlide.title} 
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-[#0B1015]/40" />
        </div>

        {/* Center Focused Card with Luminous Frame */}
        <div className="relative z-20 w-[310px] sm:w-[420px] md:w-[480px] h-[270px] sm:h-[330px] md:h-[370px] flex items-center justify-center p-2">
          <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-[#D4AF87]/80 shadow-2xl shadow-black/90 relative gold-glow">
            <AnimatePresence mode="wait">
              <motion.img
                key={centerSlide.id}
                src={centerSlide.image}
                alt={centerSlide.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B1015]/80 backdrop-blur-md border border-white/20 text-[#D4AF87] text-[10px] font-mono font-bold uppercase">
              {centerSlide.label}
            </div>

            {/* Subtle moving progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
              <motion.div
                key={centerSlide.id}
                initial={{ width: '0%' }}
                animate={{ width: isPaused ? '0%' : '100%' }}
                transition={{ duration: 3.2, ease: 'linear' }}
                className="h-full bg-[#D4AF87]"
              />
            </div>
          </div>
        </div>

        {/* Right Tilted Card */}
        <div 
          onClick={nextSlide}
          className="hidden sm:block absolute right-2 md:right-12 z-10 w-64 md:w-80 h-64 md:h-80 rounded-3xl overflow-hidden cursor-pointer opacity-40 hover:opacity-75 transition-all duration-500 scale-85 [transform:perspective(1000px)_rotateY(-16deg)] border border-[#233341]"
        >
          <img 
            src={rightSlide.image} 
            alt={rightSlide.title} 
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-[#0B1015]/40" />
        </div>
      </motion.div>

      {/* Navigation Controls & Dynamic Text Caption below */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="max-w-xl mx-auto mt-8 sm:mt-12 text-center flex flex-col items-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={centerSlide.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="space-y-2 mb-6"
          >
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              {centerSlide.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#9AA8B6] leading-relaxed max-w-md mx-auto">
              {centerSlide.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center gap-4">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="w-10 h-10 rounded-full border border-[#233341] flex items-center justify-center text-[#D4AF87] hover:bg-[#17232E] hover:border-[#D4AF87] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#233341] text-[11px] font-mono text-[#D4AF87] hover:border-[#D4AF87] transition-colors cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            <span>0{currentIndex + 1} / 0{slides.length}</span>
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="w-10 h-10 rounded-full border border-[#233341] flex items-center justify-center text-[#D4AF87] hover:bg-[#17232E] hover:border-[#D4AF87] transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
