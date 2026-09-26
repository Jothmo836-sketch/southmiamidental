import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, CheckCircle2, Sparkles, Phone } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface ProjectModalProps {
  projectTitle: string | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ projectTitle, onClose, onOpenContact }) => {
  if (!projectTitle) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl rounded-3xl bg-[#1C1814] border border-[#3C342C] p-6 sm:p-8 shadow-2xl text-[#F5F2EB] max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#3C342C] flex items-center justify-center text-[#B5ABA0] hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-6">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#E2B79A] uppercase block mb-1">
                CLINICAL SMILE CASE STUDY • DR. JUAN CUTINO, DDS
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                {projectTitle}
              </h3>
              <div className="flex items-center gap-4 text-xs text-[#A99E92] mt-2">
                <span className="flex items-center gap-1 text-[#D4AF87]">
                  <Sparkles className="w-3.5 h-3.5" /> Custom Ceramic Artistry
                </span>
              </div>
            </div>

            <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#3A3229]">
              <img 
                src={IMAGES.radiantSmile} 
                alt={projectTitle} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#C8BEB2] leading-relaxed">
              <p>
                Treatment performed by Dr. Juan Cutino DDS using ultra-conservative preparation principles. Every restoration is custom-crafted to mirror the micro-translucency, subtle surface texturing, and warmth of natural healthy teeth.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#25201A] border border-[#3A3229] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2B79A] shrink-0" />
                  <span className="text-xs">Biocompatible Ceramics</span>
                </div>
                <div className="p-3 rounded-xl bg-[#25201A] border border-[#3A3229] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E2B79A] shrink-0" />
                  <span className="text-xs">Painless Chairside Protocol</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#3A3229] flex flex-wrap items-center justify-between gap-3">
              <a
                href="tel:3056672633"
                className="text-xs text-[#E2B79A] hover:text-white flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(305) 667-2633</span>
              </a>

              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#A99E92] hover:text-white border border-[#3A3229] cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-semibold text-[#181512] bg-[#E8C5AF] hover:bg-[#F3D6C3] cursor-pointer"
                >
                  Book Smile Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
