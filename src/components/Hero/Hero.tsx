import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { photographer } from '../../data/photographer';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDesktop) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX / width - 0.5) * 20;
    const y = (clientY / height - 0.5) * 20;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden select-none"
      id="hero"
    >
      {/* Cinematic Hero Background with Ken Burns & Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: backgroundY }}
      >
        <motion.div
          animate={{
            scale: [1.02, 1.08, 1.02],
            x: mouseOffset.x * -0.5,
            y: mouseOffset.y * -0.5,
          }}
          transition={{
            scale: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
            x: { type: 'spring', damping: 20, stiffness: 60 },
            y: { type: 'spring', damping: 20, stiffness: 60 },
          }}
          className="w-full h-full relative"
        >
          <img
            src={photographer.hero.image}
            alt={photographer.hero.headline}
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            loading="eager"
            fetchPriority="high"
          />

          {/* Gradients & Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-black/20 to-black/80 pointer-events-none" />
        </motion.div>
      </motion.div>

      {/* Hero Foreground Content */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center mt-12 md:mt-0"
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-[var(--border)] bg-black/30 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3 h-3 text-[var(--accent)]" />
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.35em] text-[var(--accent)]">
            {photographer.hero.eyebrow}
          </span>
        </motion.div>

        {/* Studio / Artist Name */}
        <motion.div
          initial={{ opacity: 0, letterSpacing: '0.6em' }}
          animate={{ opacity: 0.85, letterSpacing: '0.35em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-xs md:text-sm font-mono uppercase text-[var(--text-secondary)] mb-3"
        >
          {photographer.hero.title}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[var(--text-primary)] leading-[1.06] tracking-tight max-w-4xl"
        >
          Stories Worth <br />
          <span className="italic font-light text-[var(--accent)]">Remembering.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="mt-6 md:mt-8 max-w-xl text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed tracking-wide"
        >
          {photographer.hero.supportingCopy}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[var(--text-primary)] text-[var(--bg)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-xs uppercase tracking-[0.25em] font-medium shadow-2xl hover:scale-[1.02]"
          >
            Explore Portfolio
          </button>
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded border border-[var(--border)] bg-black/30 backdrop-blur-md text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 text-xs uppercase tracking-[0.25em] font-medium"
          >
            Book a Session
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto cursor-pointer"
        onClick={onExploreClick}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[var(--text-muted)] mb-2">
          {photographer.hero.scrollIndicator}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
