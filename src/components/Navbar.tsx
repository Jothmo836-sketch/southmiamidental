import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, Phone, MapPin } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-3 sm:pt-5 pointer-events-none">
      <div 
        className={`pointer-events-auto w-full max-w-7xl transition-all duration-300 rounded-full px-5 sm:px-7 py-3 flex items-center justify-between border ${
          scrolled 
            ? 'bg-[#0B1015]/92 backdrop-blur-md border-[#233341] shadow-2xl shadow-black/60' 
            : 'bg-[#0F161D]/85 backdrop-blur-sm border-[#1F2C37]'
        }`}
      >
        {/* Brand Logo & Doctor Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8.5 h-8.5 rounded-xl bg-gradient-to-br from-[#D4AF87] to-[#B38B62] flex items-center justify-center text-[#0B1015] font-black shadow-md shadow-[#D4AF87]/20 group-hover:scale-105 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 8 3 12 1 2.5 2 2 3 0 1 2 2 2.5 3 0 1.5-4 3-8.5 3-12 0-3.5-2.5-6-6-6z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-[#F6F4F0] uppercase leading-none">
              SOUTH MIAMI DENTAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-[#C1C9D2] tracking-wider uppercase">
          <a href="#" className="hover:text-[#F6F4F0] transition-colors relative py-1">
            Home
          </a>
          <a href="#approach" className="hover:text-[#F6F4F0] transition-colors relative py-1">
            Philosophy
          </a>
          <a href="#work" className="hover:text-[#F6F4F0] transition-colors relative py-1">
            Smile Gallery
          </a>
        </nav>

        {/* Right CTA Area: Book Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold tracking-wide text-[#0B1015] bg-[#D4AF87] hover:bg-[#E2C29E] rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Book Visit</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:3056672633"
            className="p-2 text-[#D4AF87] hover:text-white"
            aria-label="Call office"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#C1C9D2] hover:text-white cursor-pointer"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#111A22] border border-[#233341] rounded-3xl p-6 shadow-2xl flex flex-col gap-4 text-[#E3DFD7] lg:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#1F2C37]">
              <div>
                <span className="font-display font-bold text-sm block text-white">South Miami Dental</span>
              </div>
              <a
                href="https://maps.google.com/?cid=14013122087556566575"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#9AA8B6] flex items-center gap-1"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D4AF87]" />
                <span>Map</span>
              </a>
            </div>

            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1F2C37] font-medium"
            >
              Home
            </a>
            <a 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1F2C37] font-medium"
            >
              Our Philosophy
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1F2C37] font-medium"
            >
              Services (Cosmetic & General)
            </a>
            <a 
              href="#work" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#1F2C37] font-medium"
            >
              Smile Gallery
            </a>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href="tel:3056672633"
                className="w-full py-3 text-center bg-[#1A2530] text-[#D4AF87] border border-[#283949] rounded-full font-mono text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (305) 667-2633</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 text-center bg-[#D4AF87] text-[#0B1015] rounded-full font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
