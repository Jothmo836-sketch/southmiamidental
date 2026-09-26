import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar.tsx';
import { HeroToGallerySection } from './components/HeroToGallerySection.tsx';
import { ApproachSection } from './components/ApproachSection.tsx';
import { ServicesIntentSection } from './components/ServicesIntentSection.tsx';
import { SpacesInspireSection } from './components/SpacesInspireSection.tsx';
import { InteractiveServicesSection } from './components/InteractiveServicesSection.tsx';
import { ResidentialTerraceBanner } from './components/ResidentialTerraceBanner.tsx';
import { PortfolioSection } from './components/PortfolioSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { FooterSection } from './components/FooterSection.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Initialize Lenis for smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#181512] text-[#F5F2EB] selection:bg-[#E8C5AF] selection:text-[#181512] font-sans">
      {/* Floating Top Navigation */}
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main>
        {/* 1 & 2. Continuous Hero Kinetic Intro & Scroll-Driven Shrink into Floating Parallax Gallery */}
        <HeroToGallerySection onOpenContact={() => setContactOpen(true)} />

        {/* 3. Our Philosophy: 3 Interactive Cards with Smooth Crosshair Reticle & Fade-In-Up */}
        <ApproachSection />

        {/* 4. Restoring with Intention: Interactive Split Before/After Morphing Showcase */}
        <ServicesIntentSection onOpenApproach={() => setContactOpen(true)} />

        {/* 5. Smiles That Inspire: 3D Perspective Carousel */}
        <SpacesInspireSection />

        {/* 6. Interactive Services: Large Kinetic Typography Hover Accordion */}
        <InteractiveServicesSection 
          onViewWork={() => {
            const el = document.getElementById('work');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} 
        />

        {/* 7. South Miami Clinic Pavilion Banner with Frosted Glass Overlay */}
        <ResidentialTerraceBanner onLearnMore={() => setSelectedProject('South Miami Dental Practice')} />

        {/* 8. Smile Gallery with "Gentle" Italic Accent & Fade-In-Up Entrance */}
        <PortfolioSection onSelectProject={(title) => setSelectedProject(title)} />

        {/* 9. Real Patient Video Reviews Carousel */}
        <TestimonialsSection />

        {/* 10. Patient Questions: FAQ Accordion with Fade-In-Up */}
        <FaqSection />
      </main>

      {/* 11. Luxury Architectural Footer with Giant "SMILE" Wordmark */}
      <FooterSection onOpenContact={() => setContactOpen(true)} />

      {/* Interactive Modals */}
      <ContactModal 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
      />

      <ProjectModal 
        projectTitle={selectedProject} 
        onClose={() => setSelectedProject(null)} 
        onOpenContact={() => setContactOpen(true)} 
      />
    </div>
  );
}
