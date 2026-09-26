import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { IMAGES } from '../assets.ts';

interface FloatingCardItem {
  id: number;
  src: string;
  alt: string;
  xDesktop: string;
  yStart: number;
  speed: number;
  size: string;
  rotate: number;
}

export const FloatingGallerySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms for floating cards
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -220]);
  const yMedium = useTransform(scrollYProgress, [0, 1], [100, -150]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [60, -90]);

  // Center card entrance & scale
  const centerScale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.85, 1, 0.95]);

  const floatingCards: FloatingCardItem[] = [
    // Top Left cluster
    { id: 1, src: IMAGES.coastalVilla, alt: 'Coastal Villa', xDesktop: '12%', yStart: 40, speed: 1.4, size: 'w-24 sm:w-32 md:w-36 h-20 sm:h-24 md:h-28', rotate: -3 },
    { id: 2, src: IMAGES.roomEmptyBefore, alt: 'Studio Interior', xDesktop: '22%', yStart: 180, speed: 0.9, size: 'w-20 sm:w-28 h-18 sm:h-24', rotate: 2 },
    { id: 3, src: IMAGES.terrace, alt: 'Panoramic Terrace', xDesktop: '8%', yStart: 340, speed: 1.6, size: 'w-28 sm:w-36 md:w-44 h-20 sm:h-28', rotate: -2 },
    
    // Bottom Left cluster
    { id: 4, src: IMAGES.structure, alt: 'Structural Frame', xDesktop: '18%', yStart: 560, speed: 1.2, size: 'w-24 sm:w-32 h-24 sm:h-32', rotate: 4 },
    { id: 5, src: IMAGES.materialTextures, alt: 'Material Textures', xDesktop: '7%', yStart: 720, speed: 1.5, size: 'w-20 sm:w-28 h-20 sm:h-28', rotate: -4 },
    
    // Top Right cluster
    { id: 6, src: IMAGES.officeWorkspace, alt: 'Architect Workspace', xDesktop: '72%', yStart: 60, speed: 1.3, size: 'w-24 sm:w-32 md:w-36 h-20 sm:h-28', rotate: 3 },
    { id: 7, src: IMAGES.spanishVilla, alt: 'Spanish Courtyard', xDesktop: '84%', yStart: 200, speed: 1.7, size: 'w-28 sm:w-40 h-22 sm:h-30', rotate: -2 },
    { id: 8, src: IMAGES.luxuryBedroom, alt: 'Master Suite', xDesktop: '76%', yStart: 360, speed: 1.0, size: 'w-26 sm:w-36 h-24 sm:h-32', rotate: 1 },

    // Bottom Right cluster
    { id: 9, src: IMAGES.baroqueDoor, alt: 'Baroque Entrance', xDesktop: '82%', yStart: 580, speed: 1.5, size: 'w-22 sm:w-32 h-26 sm:h-36', rotate: -3 },
    { id: 10, src: IMAGES.executiveOffice, alt: 'Executive Lounge', xDesktop: '68%', yStart: 720, speed: 1.1, size: 'w-24 sm:w-36 h-22 sm:h-30', rotate: 2 },

    // Middle floating accents
    { id: 11, src: IMAGES.waitingLounge, alt: 'Curved Lounge', xDesktop: '30%', yStart: 780, speed: 1.8, size: 'w-24 sm:w-32 h-20 sm:h-26', rotate: -2 },
    { id: 12, src: IMAGES.sketchingBlueprint, alt: 'Blueprint Plans', xDesktop: '58%', yStart: 820, speed: 1.6, size: 'w-24 sm:w-32 h-20 sm:h-26', rotate: 3 },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[140vh] py-28 sm:py-36 bg-[#FCD8C5] text-[#221C17] overflow-hidden flex flex-col items-center justify-center transition-colors duration-500"
    >
      {/* Background Soft Grain & Warmth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FCD8C5] via-[#FDDECD] to-[#FCD8C5] pointer-events-none" />

      {/* Floating Parallax Cards Scattered Across Viewport */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingCards.map((card) => {
          const yTransform = card.speed > 1.4 ? yFast : card.speed > 1.1 ? yMedium : ySlow;
          
          return (
            <motion.div
              key={card.id}
              style={{
                left: card.xDesktop,
                top: `${card.yStart}px`,
                y: yTransform,
                rotate: card.rotate,
              }}
              className={`pointer-events-auto absolute ${card.size} rounded-xl sm:rounded-2xl overflow-hidden shadow-lg shadow-amber-950/15 border-2 border-white/60 hover:scale-110 hover:shadow-2xl hover:z-30 transition-all duration-300 cursor-pointer hidden sm:block`}
            >
              <img 
                src={card.src} 
                alt={card.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Central Focused Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Central Focused Card (The Desert Pavilion Villa) */}
        <motion.div 
          style={{ scale: centerScale }}
          className="w-[300px] sm:w-[420px] md:w-[480px] h-[190px] sm:h-[260px] md:h-[300px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-[#3B2C24]/30 border-4 border-white/80 relative group cursor-pointer"
        >
          <img 
            src={IMAGES.hero} 
            alt="Central Architecture Anchor" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white text-xs font-medium">
            <span>Aroclux Signature Desert Residence</span>
          </div>
        </motion.div>

        {/* Headline Below Center Card matching video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 sm:mt-16 max-w-2xl"
        >
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-5xl leading-[1.18] tracking-tight text-[#221C17] text-balance">
            Designing thoughtful spaces that blend beauty, function, and modern living
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
