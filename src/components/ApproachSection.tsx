import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Scan, HeartHandshake, Sparkles, Plus, Shield } from 'lucide-react';
import { IMAGES } from '../assets.ts';

interface ApproachStep {
  id: string;
  badge: string;
  title: string;
  statement: string;
  image: string;
  icon: React.ReactNode;
}

export const ApproachSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<string>('02');

  const steps: ApproachStep[] = [
    {
      id: '01',
      badge: '01 • INTEGRITY',
      title: 'Honest Diagnostics',
      statement: 'Precision 3D imaging and transparent plans. We never recommend procedures you do not need.',
      image: IMAGES.drCutino,
      icon: <Scan className="w-5 h-5 text-[#D4AF87]" />,
    },
    {
      id: '02',
      badge: '02 • COMFORT',
      title: 'Gentle Touch',
      statement: 'A calm bedside manner and virtually painless anesthesia for a relaxed, stress-free visit.',
      image: IMAGES.radiantSmile,
      icon: <HeartHandshake className="w-5 h-5 text-[#D4AF87]" />,
    },
    {
      id: '03',
      badge: '03 • ARTISTRY',
      title: 'Custom Ceramics',
      statement: 'Handcrafted porcelain veneers and crowns engineered for natural luminescence and longevity.',
      image: IMAGES.ceramicRestorations,
      icon: <Sparkles className="w-5 h-5 text-[#D4AF87]" />,
    },
  ];

  return (
    <section id="approach" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0B1015] text-[#F6F4F0] select-none">
      {/* Direct Narrative Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-[#1E2B37] pb-8"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF87] uppercase mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>OUR PHILOSOPHY</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] tracking-tight leading-none">
            Honest. Gentle. Conservative.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#9AA8B6] max-w-sm leading-relaxed">
          Dr. Juan Cutino DDS treats every patient like family—protecting your natural teeth with minimal intervention.
        </p>
      </motion.div>

      {/* 3 Streamlined Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => {
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <CardWithMouseFollower
                step={step}
                isActive={activeStep === step.id}
                onActivate={() => setActiveStep(step.id)}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

interface CardWithMouseFollowerProps {
  step: ApproachStep;
  isActive: boolean;
  onActivate: () => void;
}

const CardWithMouseFollower: React.FC<CardWithMouseFollowerProps> = ({ step, isActive, onActivate }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 24, stiffness: 220 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={(e) => {
        setIsHovered(true);
        onActivate();
        handleMouseMove(e);
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onActivate}
      className={`relative h-[360px] sm:h-[420px] rounded-3xl p-7 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 border ${
        isActive 
          ? 'border-[#D4AF87] bg-[#111A22] shadow-2xl shadow-black/80 scale-[1.01]' 
          : 'border-[#1E2B37] bg-[#10171F]/90 hover:border-[#2C3F50]'
      }`}
    >
      <div 
        className={`absolute inset-0 z-0 transition-opacity duration-700 ease-out ${
          isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        }`}
      >
        <img 
          src={step.image} 
          alt={step.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1015] via-[#0B1015]/75 to-[#0B1015]/60" />
      </div>

      {/* Reticle */}
      {isActive && isHovered && (
        <motion.div 
          style={{ left: smoothX, top: smoothY, x: '-50%', y: '-50%' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          className="pointer-events-none absolute z-20 w-14 h-14 rounded-full border border-[#D4AF87]/60 bg-black/50 backdrop-blur-md flex items-center justify-center shadow-xl"
        >
          <Plus className="w-5 h-5 text-[#D4AF87] stroke-[2]" />
        </motion.div>
      )}

      {/* Top Meta info */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs tracking-wider text-[#D4AF87] uppercase font-bold">
          {step.badge}
        </span>
        <div className="w-8 h-8 rounded-xl bg-[#17232E] border border-[#243647] flex items-center justify-center">
          {step.icon}
        </div>
      </div>

      {/* Bottom Card Title & Direct Statement */}
      <div className="relative z-10 mt-auto pt-6">
        <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2 tracking-tight">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-[#C8D1DB] leading-relaxed">
          {step.statement}
        </p>
      </div>
    </div>
  );
};
