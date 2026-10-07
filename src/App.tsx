import { useState, useEffect } from 'react';
import type { ThemeMode } from './config/theme';
import type { PortfolioProject } from './data/photographer';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Intro } from './components/Intro/Intro';
import { Portfolio } from './components/Portfolio/Portfolio';
import { ProjectViewer } from './components/ProjectViewer/ProjectViewer';
import { Lightbox, type LightboxImage } from './components/Lightbox/Lightbox';
import { Services } from './components/Services/Services';
import { Packages } from './components/Packages/Packages';
import { BeforeAfter } from './components/BeforeAfter/BeforeAfter';
import { About } from './components/About/About';
import { Testimonials } from './components/Testimonials/Testimonials';
import { Instagram } from './components/Instagram/Instagram';
import { Contact } from './components/Contact/Contact';
import { FinalCTA } from './components/Footer/FinalCTA';
import { Footer } from './components/Footer/Footer';
import { EnquiryModal } from './components/EnquiryForm/EnquiryModal';
import { CustomCursor } from './components/common/CustomCursor';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';

export function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<LightboxImage[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Enquiry Modal state
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [enquiryCategory, setEnquiryCategory] = useState<string | undefined>(undefined);

  // Synchronize CSS custom attributes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleOpenEnquiry = (category?: string) => {
    setEnquiryCategory(category);
    setEnquiryOpen(true);
  };

  const handleOpenLightbox = (images: LightboxImage[], initialIndex = 0) => {
    setLightboxImages(images);
    setLightboxIndex(initialIndex);
    setLightboxOpen(true);
  };

  const handleOpenProjectLightbox = (index: number) => {
    if (!selectedProject) return;
    const projectImages: LightboxImage[] = selectedProject.images.map((img) => ({
      url: img.url,
      caption: img.caption,
      title: selectedProject.title,
    }));
    handleOpenLightbox(projectImages, index);
  };

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)] transition-colors duration-400">
      {/* Subtle film grain texture overlay */}
      <div className="film-grain" />

      {/* Desktop magnetic custom cursor */}
      <CustomCursor />

      {/* Navigation Bar */}
      <Navbar
        currentTheme={theme}
        onThemeChange={setTheme}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main>
        {/* Cinematic Hero */}
        <Hero
          onExploreClick={() => {
            const el = document.getElementById('portfolio');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onBookClick={() => handleOpenEnquiry()}
        />

        {/* 01 — Introduction */}
        <Intro />

        {/* 02 — Portfolio Piece & Filter */}
        <Portfolio onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* 03 — Services */}
        <Services onOpenEnquiry={handleOpenEnquiry} />

        {/* Curated Packages */}
        <Packages
          onSelectPackage={(pkgName) => handleOpenEnquiry(`Package: ${pkgName}`)}
        />

        {/* Before / After Retouching Craft */}
        <BeforeAfter />

        {/* 04 — Behind the Camera / About */}
        <About />

        {/* Testimonials & Fullscreen Quote */}
        <Testimonials />

        {/* Instagram Visual Grid */}
        <Instagram />

        {/* 05 — Contact & Studio Map */}
        <Contact onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Final Conversion CTA */}
        <FinalCTA onOpenEnquiry={() => handleOpenEnquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Dedicated Project Detail Experience */}
      <ProjectViewer
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenImageInLightbox={handleOpenProjectLightbox}
        onEnquireForProject={(cat) => handleOpenEnquiry(cat)}
      />

      {/* Fullscreen Lightbox Viewer */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev === 0 ? lightboxImages.length - 1 : prev - 1
          )
        }
        onSelectIndex={setLightboxIndex}
      />

      {/* Booking / Commission Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        initialService={enquiryCategory}
      />
    </div>
  );
}

export default App;
