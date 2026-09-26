import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface FooterSectionProps {
  onOpenContact: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContact }) => {
  return (
    <footer className="relative w-full bg-[#080D11] text-[#F6F4F0] pt-24 pb-12 px-6 sm:px-12 md:px-20 lg:px-28 border-t border-[#19242E] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Top Navigation Grid with Fade-In-Up entrance on scroll */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-20 border-b border-[#19242E]"
        >
          {/* Column 1: Practice Statement & Booking CTA */}
          <div className="md:col-span-7 flex flex-col items-start justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#D4AF87]">
                <ShieldCheck className="w-4 h-4 text-[#D4AF87]" />
                <span>SOUTH MIAMI DENTAL • DR. JUAN CUTINO, DDS</span>
              </div>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#E3DFD7] max-w-sm leading-snug">
                Compassionate dental excellence supporting lifelong wellness and radiant smiles
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-[#0B1015] bg-[#D4AF87] hover:bg-[#E2C29E] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="tel:3056672633"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#D4AF87] border border-[#233341] hover:border-[#D4AF87] transition-all font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(305) 667-2633</span>
              </a>
            </div>
          </div>

          {/* Column 2: Hours & Real-time Location Details */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71808F] block mb-2 font-bold">
              Practice Hours
            </span>
            <div className="space-y-2 text-xs text-[#A6B5C5]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#D4AF87] shrink-0" />
                <span>Mon – Thu: 8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2 pl-5.5">
                <span>Friday: 8:00 AM – 4:30 PM</span>
              </div>
              <div className="flex items-center gap-2 pl-5.5 text-[#71808F]">
                <span>Sat – Sun: Emergency By Phone</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="https://maps.google.com/?cid=14013122087556566575"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF87] hover:text-white transition-colors underline decoration-[#D4AF87]"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Middle Address & Distinctive Dental Brand Wordmark */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="pt-16 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71808F] block font-bold">
              South Miami Practice Locations —
            </span>
            <p className="text-xs sm:text-sm text-[#C8D1DB] font-medium leading-relaxed">
              <strong>Primary Suite:</strong> 7311 SW 62nd Ave, Suite 203, South Miami, FL 33143<br />
              <strong>Secondary Office:</strong> 6080 SW 40th St, #8, Miami, FL 33155
            </p>
          </div>

          {/* Bespoke Architectural Brand Display */}
          <div className="overflow-hidden">
            <h2 className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] tracking-tight text-[#162330] leading-none select-none">
              SOUTH MIAMI
            </h2>
          </div>
        </motion.div>

        {/* Subfooter */}
        <div className="pt-8 border-t border-[#19242E] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5A6977] gap-4">
          <div>
            <span>© {new Date().getFullYear()} South Miami Dental • Dr. Juan Cutino, DDS. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="https://maps.google.com/?cid=14013122087556566575" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#A6B5C5] transition-colors"
            >
              Google Business Profile
            </a>
            <span>/</span>
            <a href="tel:3056672633" className="hover:text-[#A6B5C5] transition-colors">
              (305) 667-2633
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
