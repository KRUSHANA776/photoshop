import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Camera, ArrowRight, Maximize2 } from 'lucide-react';
import type { PortfolioProject } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

interface ProjectViewerProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenImageInLightbox: (index: number) => void;
  onEnquireForProject: (category: string) => void;
}

export const ProjectViewer: React.FC<ProjectViewerProps> = ({
  project,
  onClose,
  onOpenImageInLightbox,
  onEnquireForProject,
}) => {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[90000] bg-[var(--bg)]/98 backdrop-blur-2xl overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-12 py-5 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)]">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
              {project.category}
            </span>
            <span className="text-[var(--border)]">•</span>
            <span className="font-serif text-lg tracking-wide text-[var(--text-primary)]">
              {project.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors flex items-center space-x-2"
            aria-label="Close Project View"
          >
            <span className="text-xs uppercase tracking-widest hidden sm:inline">Close</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Project Content Container */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-16">
          {/* Hero Banner */}
          <div className="relative group overflow-hidden rounded border border-[var(--border)]">
            <OptimizedImage
              src={project.coverImage}
              alt={project.title}
              aspectRatio="wide"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 md:p-12">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                  {project.subtitle}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-light">
                  {project.title}
                </h1>
              </div>
            </div>
            <button
              onClick={() => onOpenImageInLightbox(0)}
              className="absolute top-4 right-4 p-3 rounded-full bg-black/60 text-white hover:bg-black/90 transition-all opacity-0 group-hover:opacity-100"
              title="Expand Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Metadata & Narrative Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 border-y border-[var(--border-subtle)] py-12">
            {/* Meta Attributes */}
            <div className="md:col-span-4 space-y-6 text-xs text-[var(--text-secondary)] font-mono border-b md:border-b-0 md:border-r border-[var(--border-subtle)] pb-8 md:pb-0 md:pr-8">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                  Location
                </span>
                <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                  <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                  Year
                </span>
                <div className="flex items-center space-x-2 text-[var(--text-primary)]">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{project.year}</span>
                </div>
              </div>

              {project.equipment && (
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                    Captured On
                  </span>
                  <div className="flex items-start space-x-2 text-[var(--text-primary)]">
                    <Camera className="w-3.5 h-3.5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <span>{project.equipment}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Narrative Story */}
            <div className="md:col-span-8 space-y-6">
              <p className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] font-light leading-snug">
                {project.description}
              </p>
              <div className="space-y-4 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
                {project.story.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Cinematic Gallery Sequence */}
          <div className="space-y-12">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                Curated Visual Stills ({project.images.length})
              </span>
              <span className="text-xs text-[var(--text-muted)]">
                Click any frame to inspect
              </span>
            </div>

            <div className="space-y-10">
              {project.images.map((img, idx) => {
                const isFull = img.aspect === 'full';
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group cursor-pointer relative"
                    onClick={() => onOpenImageInLightbox(idx)}
                    data-cursor="VIEW"
                  >
                    <div className="overflow-hidden rounded border border-[var(--border)] bg-[var(--surface)]">
                      <OptimizedImage
                        src={img.url}
                        alt={img.caption}
                        aspectRatio={isFull ? 'wide' : 'landscape'}
                        className="group-hover:scale-103 transition-transform duration-700"
                      />
                    </div>
                    {img.caption && (
                      <div className="mt-3 flex items-center justify-between text-xs text-[var(--text-secondary)]">
                        <span className="font-serif italic text-sm text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                          {img.caption}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--accent)]">
                          Fig. {String(idx + 1).padStart(2, '0')}
                        </span>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* End Project CTA */}
          <div className="py-16 border-t border-[var(--border)] text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] block">
              Inquire About {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--text-primary)]">
              Let’s create your story.
            </h2>
            <p className="max-w-md mx-auto text-sm text-[var(--text-secondary)]">
              Every commission begins with an open conversation about your aesthetic preferences and timeline.
            </p>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => {
                  onClose();
                  onEnquireForProject(project.category);
                }}
                className="px-8 py-3.5 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center space-x-3 shadow-xl hover:bg-[var(--accent-hover)] transition-all"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
