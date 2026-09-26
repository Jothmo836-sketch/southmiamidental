import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Quote, Play, Pause, Volume2, Star, CheckCircle, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  videoThumb: string;
  quote: string;
  audioTime: string;
}

export const TestimonialsSection: React.FC = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sophia Bennett',
      role: 'South Miami Resident',
      avatar: IMAGES.sophia,
      videoThumb: IMAGES.sophia,
      quote: 'Dr. Cutino is hands down the most honest and kind dentist in Miami. He never pushes unnecessary procedures, explains everything clearly, and treats you like family.',
      audioTime: '0:42',
    },
    {
      id: 2,
      name: 'Daniel Carter',
      role: 'Coral Gables Patient',
      avatar: IMAGES.executiveOffice,
      videoThumb: IMAGES.executiveOffice,
      quote: 'I had severe dental anxiety for years. Dr. Cutino’s gentle approach and calm demeanor made my restorative crown and root canal completely painless.',
      audioTime: '0:38',
    },
    {
      id: 3,
      name: 'Olivia Parker',
      role: 'Pinecrest Resident',
      avatar: IMAGES.olivia,
      videoThumb: IMAGES.olivia,
      quote: 'The porcelain veneers Dr. Cutino crafted look so natural and vibrant. People compliment my smile constantly. The staff is warm and accommodating!',
      audioTime: '0:55',
    },
    {
      id: 4,
      name: 'Carlos Martinez',
      role: 'Miami Professional',
      avatar: IMAGES.southMiamiTerrace,
      videoThumb: IMAGES.southMiamiTerrace,
      quote: 'Fair, transparent pricing, zero corporate sales pressure, and master-level dental work. My entire family has trusted Dr. Cutino for over 12 years.',
      audioTime: '0:48',
    },
    {
      id: 5,
      name: 'Elena Rodriguez',
      role: 'Kendall Patient',
      avatar: IMAGES.radiantSmile,
      videoThumb: IMAGES.radiantSmile,
      quote: 'From emergency tooth relief to routine cleanings, Dr. Cutino always makes time to listen. A true community gem in South Miami.',
      audioTime: '0:34',
    },
  ];

  // Double list for infinite loop
  const infiniteList = [...testimonials, ...testimonials];

  const togglePlay = (id: number) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section id="reviews" className="relative w-full py-28 sm:py-36 bg-gradient-to-b from-[#FAF7F2] via-[#F3ECE1] to-[#FAF7F2] text-[#0B1015] overflow-hidden select-none">
      {/* Header with Fade-In-Up entrance on scroll */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto mb-14 sm:mb-18 flex flex-col md:flex-row md:items-end justify-between gap-6 px-6 sm:px-12"
      >
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-[#C59B6D]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#8C7A68] uppercase">
              PATIENT VOICES
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#4E5C68]">
              5.0 Star Rated on Google
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0B1015] tracking-tight">
            Voices of Trust in South Miami
          </h2>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#71808F] hidden sm:block">
            {isHovered ? 'Paused on hover' : 'Continuous scroll'}
          </span>
          <div className="w-2 h-2 rounded-full bg-[#C59B6D] animate-ping" />
        </div>
      </motion.div>

      {/* Continuously Moving Carousel Stage */}
      <div 
        className="w-full relative overflow-hidden py-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Soft edge blur vignettes */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF7F2] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF7F2] to-transparent z-20 pointer-events-none" />

        <motion.div 
          animate={{ x: isHovered ? undefined : ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 35,
              ease: 'linear',
            },
          }}
          className="flex gap-7 w-max px-6"
        >
          {infiniteList.map((t, idx) => {
            const isPlaying = playingId === t.id;

            return (
              <div
                key={`${t.id}-${idx}`}
                className="w-[300px] sm:w-[340px] md:w-[360px] rounded-3xl bg-white border border-[#E3DDD1] p-6 flex flex-col justify-between shadow-xl shadow-slate-900/6 hover:shadow-2xl hover:border-[#D4AF87] transition-all duration-300 shrink-0"
              >
                {/* Top Section: Avatar, Name, Quote */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF87] shadow-sm">
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <h4 className="font-display font-bold text-sm text-[#0B1015]">
                            {t.name}
                          </h4>
                          <CheckCircle className="w-3.5 h-3.5 text-[#C59B6D] fill-[#C59B6D]/20" />
                        </div>
                        <p className="text-[11px] text-[#71808F]">
                          {t.role}
                        </p>
                      </div>
                    </div>
                    <Quote className="w-6 h-6 text-[#C59B6D]/40" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#3C4A57] leading-relaxed mb-6 font-normal">
                    "{t.quote}"
                  </p>
                </div>

                {/* Bottom Section: Interactive Video & Audio Voice Note Player */}
                <div>
                  <div 
                    className="relative h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#E3DDD1] bg-black/10 group cursor-pointer mb-3"
                    onClick={() => togglePlay(t.id)}
                  >
                    <motion.img 
                      src={t.videoThumb} 
                      alt={t.name}
                      animate={isPlaying ? { scale: [1, 1.05, 1], filter: ['brightness(1)', 'brightness(1.06)', 'brightness(1)'] } : { scale: 1 }}
                      transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015]/80 via-transparent to-black/20" />

                    {/* Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/95 text-[#0B1015] flex items-center justify-center shadow-2xl group-hover:scale-110 active:scale-95 transition-transform">
                        {isPlaying ? (
                          <Pause className="w-5 h-5 fill-current" />
                        ) : (
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        )}
                      </div>
                    </div>

                    {/* Live Audio Waves Indicator */}
                    {isPlaying && (
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1015]/85 text-[#D4AF87] text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm border border-[#233341]">
                        <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                        <span>Voice Preview ({t.audioTime})</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
