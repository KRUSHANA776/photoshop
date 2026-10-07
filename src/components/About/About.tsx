import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';
import { photographer, DEMO_MODE } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
            {photographer.about.eyebrow}
          </span>
          <div className="h-[1px] w-12 bg-[var(--border)]" />
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photographer Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-3 bg-[var(--surface)] border border-[var(--border)] rounded-sm shadow-2xl">
              <OptimizedImage
                src={photographer.about.portraitImage}
                alt={photographer.name}
                aspectRatio="portrait"
                className="filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
              />
              <div className="mt-3 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                <span>Charudatta Arya</span>
                <span>Visual Artist</span>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-5 -right-5 hidden sm:block bg-[var(--surface)] border border-[var(--border)] p-4 rounded-sm shadow-xl backdrop-blur-md">
              <div className="flex items-center space-x-2 text-xs font-mono text-[var(--accent)] mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Base Studio</span>
              </div>
              <span className="text-xs text-[var(--text-primary)]">Pune, India</span>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--accent)]">
                {photographer.about.subtitle}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[var(--text-primary)] leading-tight">
                {photographer.about.title}
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base text-[var(--text-secondary)] font-light leading-relaxed">
              <p>{photographer.about.bioP1}</p>
              <p>{photographer.about.bioP2}</p>
            </div>

            {/* Artistic Philosophy Blockquote */}
            <div className="p-6 rounded bg-[var(--surface)] border-l-2 border-[var(--accent)] text-xs md:text-sm italic font-serif text-[var(--text-primary)] leading-relaxed">
              "{photographer.about.philosophy}"
            </div>

            <div className="flex items-center space-x-2 text-xs text-[var(--text-muted)] font-mono">
              <Globe className="w-4 h-4 text-[var(--accent)]" />
              <span>{photographer.about.availableFor}</span>
            </div>

            {/* Stats Metrics Grid */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-2 sm:grid-cols-4 gap-6">
              {photographer.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl md:text-4xl font-light text-[var(--accent)]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-[var(--text-secondary)] font-mono uppercase tracking-wider">
                    {stat.label}
                  </div>
                  {DEMO_MODE && stat.isDemo && (
                    <span className="text-[9px] text-[var(--text-muted)] font-mono block">
                      (sample metric)
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
