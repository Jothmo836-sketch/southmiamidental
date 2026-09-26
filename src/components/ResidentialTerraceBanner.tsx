import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface ResidentialTerraceBannerProps {
  onLearnMore: () => void;
}

export const ResidentialTerraceBanner: React.FC<ResidentialTerraceBannerProps> = ({ onLearnMore }) => {
  return (
    <section className="relative w-full min-h-[560px] sm:min-h-[640px] flex items-center justify-center px-4 sm:px-8 md:px-16 overflow-hidden select-none">
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.southMiamiTerrace} 
          alt="South Miami Dental Clinic Setting" 
          className="w-full h-full object-cover object-center filter brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/35 pointer-events-none" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl rounded-3xl p-6 sm:p-8 bg-[#0B1015]/85 backdrop-blur-xl border border-white/20 shadow-2xl text-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 space-y-3">
            <span className="text-[11px] font-mono text-[#D4AF87] uppercase tracking-wider font-bold block">
              SOUTH MIAMI DENTAL
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              7311 SW 62nd Ave, Suite 203
            </h3>
            <p className="text-xs sm:text-sm text-[#C8D1DB] leading-relaxed max-w-md">
              Convenient on-site parking. Accepting new patients, families, and most major dental PPO insurance plans.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#9AA8B6]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF87]" /> Same-day emergencies
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF87]" /> Early 8:00 AM appointments
              </span>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
            <button
              onClick={onLearnMore}
              className="w-full py-3 px-6 rounded-full bg-[#D4AF87] text-[#0B1015] font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#E2C29E] transition-all cursor-pointer shadow-lg active:scale-98"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="tel:3056672633"
              className="w-full py-3 px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono font-medium text-xs flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF87]" />
              <span>(305) 667-2633</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
