import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Send, Phone, MapPin, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceContext?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, serviceContext }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(serviceContext || 'Comprehensive Exam & Cleaning');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || (!phone && !email)) return;
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      }, 2500);
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-[#1C1814] border border-[#3C342C] p-6 sm:p-8 shadow-2xl text-[#F5F2EB]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[#3C342C] flex items-center justify-center text-[#B5ABA0] hover:text-white hover:border-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-10 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E2B79A] text-[#181512] flex items-center justify-center shadow-lg">
                  <Check className="w-7 h-7 stroke-[3]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Appointment Request Received
                </h3>
                <p className="text-xs sm:text-sm text-[#B3A89C] max-w-sm">
                  Thank you, {name}. Dr. Juan Cutino's South Miami front desk team will contact you at {phone || email} to confirm your scheduled time.
                </p>
                <div className="pt-2 text-xs text-[#E2B79A] font-mono">
                  Need immediate care? Call directly: (305) 667-2633
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-[11px] font-mono tracking-widest text-[#E2B79A] uppercase block mb-1">
                    SOUTH MIAMI DENTAL • DR. JUAN CUTINO, DDS
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                    Request an Appointment
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-[#A99E92] mt-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#E2B79A]" /> 7311 SW 62nd Ave
                    </span>
                    <a href="tel:3056672633" className="flex items-center gap-1 text-[#E2B79A] underline">
                      <Phone className="w-3.5 h-3.5" /> (305) 667-2633
                    </a>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                      Patient Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Maria Gonzalez"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#26211C] border border-[#3C342C] text-sm text-white placeholder-[#786E63] focus:outline-none focus:border-[#E2B79A]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(305) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#26211C] border border-[#3C342C] text-sm text-white placeholder-[#786E63] focus:outline-none focus:border-[#E2B79A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="maria@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#26211C] border border-[#3C342C] text-sm text-white placeholder-[#786E63] focus:outline-none focus:border-[#E2B79A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                        Dental Service Needed
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#26211C] border border-[#3C342C] text-xs text-white focus:outline-none focus:border-[#E2B79A]"
                      >
                        <option value="Comprehensive Exam & Cleaning">Comprehensive Exam & Cleaning</option>
                        <option value="Cosmetic Porcelain Veneers">Cosmetic Porcelain Veneers</option>
                        <option value="Dental Implants & Restoration">Dental Implants & Restoration</option>
                        <option value="Porcelain Crown / Bridge">Porcelain Crown or Bridge</option>
                        <option value="Gentle Root Canal Therapy">Gentle Root Canal Therapy</option>
                        <option value="Emergency Toothache Relief">Emergency Toothache Relief</option>
                        <option value="Professional Teeth Whitening">Professional Teeth Whitening</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                        Preferred Time of Day
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl bg-[#26211C] border border-[#3C342C] text-xs text-white focus:outline-none focus:border-[#E2B79A]"
                      >
                        <option value="Early Morning (8:00 AM - 10:00 AM)">Early Morning (8:00 AM - 10:00 AM)</option>
                        <option value="Late Morning (10:00 AM - 12:00 PM)">Late Morning (10:00 AM - 12:00 PM)</option>
                        <option value="Early Afternoon (1:00 PM - 3:00 PM)">Early Afternoon (1:00 PM - 3:00 PM)</option>
                        <option value="Late Afternoon (3:00 PM - 5:30 PM)">Late Afternoon (3:00 PM - 5:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C8BEB2] mb-1">
                      Notes or Symptoms (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us if you have any tooth sensitivity, pain, or cosmetic goals..."
                      className="w-full px-4 py-2 rounded-xl bg-[#26211C] border border-[#3C342C] text-xs text-white placeholder-[#786E63] focus:outline-none focus:border-[#E2B79A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3 rounded-xl bg-[#E8C5AF] hover:bg-[#F3D6C3] text-[#181512] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg active:scale-98"
                  >
                    <span>Confirm Visit Request</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
