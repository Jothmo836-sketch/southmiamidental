import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Phone } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Do you accept dental insurance?',
      answer: 'Yes. We accept most major PPO dental plans (Delta Dental, Cigna, MetLife, Aetna, Guardian, and Humana) and handle all claims directly for you.',
    },
    {
      question: 'Are treatments pain-free?',
      answer: 'Yes. Dr. Cutino uses gentle local numbing and a calming chairside pace to guarantee your complete comfort.',
    },
    {
      question: 'Do you handle dental emergencies?',
      answer: 'Yes. We reserve daily emergency slots for immediate relief. Call us directly at (305) 667-2633.',
    },
    {
      question: 'Why choose an independent practice?',
      answer: 'Zero corporate quotas. We practice conservative dentistry—protecting your natural teeth without pushing unnecessary procedures.',
    },
    {
      question: 'Where are you located?',
      answer: '7311 SW 62nd Ave, Suite 203, South Miami, FL 33143. Convenient on-site parking. Open Monday through Friday.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full py-24 sm:py-32 px-6 sm:px-12 md:px-20 lg:px-28 bg-[#0B1015] text-[#F6F4F0] select-none border-t border-[#19242E]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4AF87] uppercase mb-3">
            <span>// DIRECT ANSWERS</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl text-[#FAF7F2] tracking-tight leading-none mb-4">
            Common Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#9AA8B6] mb-6">
            Questions about your visit or insurance? Reach our South Miami team directly.
          </p>
          <a
            href="tel:3056672633"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#D4AF87] border border-[#233341] hover:border-[#D4AF87] transition-all font-mono"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>(305) 667-2633</span>
          </a>
        </motion.div>

        {/* Right Column: Accordion */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 divide-y divide-[#1E2B37]"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer gap-4"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display text-base sm:text-lg font-medium transition-colors ${
                    isOpen ? 'text-[#D4AF87]' : 'text-[#FAF7F2] group-hover:text-[#D4AF87]'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className="w-7 h-7 rounded-full border border-[#233341] flex items-center justify-center shrink-0 text-[#D4AF87] group-hover:border-[#D4AF87] transition-colors">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-xs sm:text-sm text-[#C8D1DB] leading-relaxed max-w-xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
