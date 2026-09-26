import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Sparkles, Clock, Check, ChevronRight } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface ServiceItem {
  id: string;
  num: string;
  name: string;
  image: string;
  duration: string;
  description: string;
}

interface InteractiveServicesSectionProps {
  onViewWork: () => void;
}

export const InteractiveServicesSection: React.FC<InteractiveServicesSectionProps> = ({ onViewWork }) => {
  const [activeService, setActiveService] = useState<string>('implants');

  const services: ServiceItem[] = [
    {
      id: 'veneers',
      num: '01',
      name: 'Cosmetic Veneers',
      duration: '2 Visits',
      image: IMAGES.radiantSmile,
      description: 'Handcrafted wafer-thin porcelain shells correcting gaps, chips, and deep staining with radiant translucency.',
    },
    {
      id: 'implants',
      num: '02',
      name: 'Dental Implants',
      duration: 'Permanent Solution',
      image: IMAGES.ceramicRestorations,
      description: 'The gold standard for missing teeth: permanent, stable, and natural-looking titanium foundations with custom crowns.',
    },
    {
      id: 'crowns',
      num: '03',
      name: 'Porcelain Crowns',
      duration: '1–2 Visits',
      image: IMAGES.ceramicRestorations,
      description: 'Full-coverage tooth-colored ceramic shields restoring damaged or root-treated teeth with lifelike strength.',
    },
    {
      id: 'root-canals',
      num: '04',
      name: 'Gentle Root Canals',
      duration: 'Single Visit Relief',
      image: IMAGES.drCutino,
      description: 'Painless, gentle endodontic therapy designed to eliminate infection and save your natural tooth for life.',
    },
    {
      id: 'preventive',
      num: '05',
      name: 'Preventive Cleanings',
      duration: 'Every 6 Months',
      image: IMAGES.hero,
      description: 'Gentle ultrasonic tartar removal, comprehensive periodontal screenings, and proactive oral cancer examinations.',
    },
  ];

  const current = services.find((s) => s.id === activeService) || services[1];

  return (
    <section className="relative w-full py-28 sm:py-36 px-6 sm:px-12 md:px-20 lg:px-28 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF7F2] text-[#0B1015] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Side: Structured Clinical Table with Fade-In-Up */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#9C7952] uppercase mb-6">
            <Sparkles className="w-4 h-4 text-[#9C7952]" />
            <span>CLINICAL SERVICES SCHEDULE</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#0B1015] tracking-tight mb-8">
            Comprehensive Dental Care
          </h2>

          {/* Properly Arranged Table Container */}
          <div className="w-full rounded-2xl bg-white/70 border border-[#E3DDD1] overflow-hidden shadow-sm mb-8 backdrop-blur-sm">
            {/* Table Header Row */}
            <div className="grid grid-cols-12 items-center px-5 py-3 border-b border-[#E3DDD1] text-[11px] font-mono text-[#8C7A68] uppercase tracking-wider font-bold bg-[#FAF7F2]/80">
              <span className="col-span-2">No.</span>
              <span className="col-span-6">Procedure</span>
              <span className="col-span-4 text-right">Timing</span>
            </div>

            {/* Table Body Rows */}
            <div className="divide-y divide-[#EAE4D8]">
              {services.map((item) => {
                const isSelected = activeService === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveService(item.id)}
                    onClick={() => setActiveService(item.id)}
                    className={`grid grid-cols-12 items-center px-5 py-4 cursor-pointer transition-all duration-200 group ${
                      isSelected 
                        ? 'bg-[#FAF7F2] border-l-4 border-l-[#C59B6D]' 
                        : 'hover:bg-[#FAF7F2]/50 border-l-4 border-l-transparent'
                    }`}
                  >
                    {/* Column 1: Index Number */}
                    <span className={`col-span-2 font-mono text-xs font-bold transition-colors ${
                      isSelected ? 'text-[#C59B6D]' : 'text-[#9AA8B6] group-hover:text-[#4E5C68]'
                    }`}>
                      {item.num}
                    </span>

                    {/* Column 2: Procedure Name */}
                    <div className="col-span-6 flex items-center gap-2">
                      <span className={`font-display text-base sm:text-lg tracking-tight transition-colors ${
                        isSelected 
                          ? 'font-bold text-[#0B1015]' 
                          : 'font-medium text-[#4E5C68] group-hover:text-[#0B1015]'
                      }`}>
                        {item.name}
                      </span>
                    </div>

                    {/* Column 3: Timing Badge & Selector */}
                    <div className="col-span-4 flex items-center justify-end gap-2">
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-full border transition-all ${
                        isSelected 
                          ? 'bg-white border-[#C59B6D] text-[#0B1015] font-semibold shadow-xs' 
                          : 'bg-white/80 border-[#E3DDD1] text-[#71808F]'
                      }`}>
                        {item.duration}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                        isSelected ? 'text-[#C59B6D] translate-x-0.5' : 'text-[#C1C9D2] opacity-0 group-hover:opacity-100'
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Subtitle & CTA button */}
          <div className="space-y-5 pt-1">
            <p className="text-xs sm:text-sm text-[#4E5C68] max-w-md leading-relaxed">
              Explore comprehensive dental treatments where clinical mastery, gentle touch, and conservative ethics come together with lasting impact.
            </p>

            <button
              onClick={onViewWork}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#0B1015] hover:bg-[#1E2B37] transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>View Smile Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Right Side: Dynamic Image Canvas with Fade-In-Up entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative w-full h-[400px] sm:h-[480px] md:h-[520px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-slate-900/15 bg-white">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.image}
                alt={current.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Floating Info Pill on image */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0B1015]/88 backdrop-blur-md border border-white/15 text-white flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-[#FAF7F2]">
                  {current.name}
                </span>
                <span className="text-[11px] font-mono text-[#D4AF87] px-2.5 py-0.5 rounded-full bg-[#182633] border border-[#2B3E50]">
                  {current.duration}
                </span>
              </div>
              <span className="text-xs text-[#C8D1DB] font-normal leading-relaxed">
                {current.description}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
