import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export interface LightboxImage {
  url: string;
  caption?: string;
  title?: string;
}

interface LightboxProps {
  isOpen: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const current = images[currentIndex] || images[0];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !current) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100000] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Fullscreen Image Lightbox"
      >
        {/* Top Header Controls */}
        <div className="flex items-center justify-between text-white/80 z-20">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs tracking-widest text-[var(--accent)] font-semibold">
              {String(currentIndex + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
            {current.title && (
              <span className="text-xs uppercase tracking-wider text-neutral-400 hidden sm:inline border-l border-neutral-700 pl-3">
                {current.title}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => {
                if (!document.fullscreenElement) {
                  document.documentElement.requestFullscreen().catch(() => {});
                } else {
                  document.exitFullscreen().catch(() => {});
                }
              }}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Toggle Fullscreen"
              aria-label="Toggle Fullscreen"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-300 hover:text-white transition-colors"
              title="Close (Esc)"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 flex items-center justify-center my-2 max-h-[82vh]">
          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={onPrev}
              className="absolute left-2 md:left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-all hover:scale-105"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Image Display with smooth transition */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full flex items-center justify-center p-2"
          >
            <img
              src={current.url}
              alt={current.caption || 'Photography work'}
              className="max-h-[78vh] max-w-full object-contain rounded-sm shadow-2xl"
              draggable={false}
            />
          </motion.div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 md:right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-all hover:scale-105"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption & Controls */}
        <div className="text-center z-20">
          {current.caption && (
            <p className="font-serif italic text-sm md:text-base text-neutral-300 max-w-2xl mx-auto">
              "{current.caption}"
            </p>
          )}
          <p className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase mt-2">
            Use Arrow Keys to Navigate • Esc to Exit
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
