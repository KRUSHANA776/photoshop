import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';
import { photographer, DEMO_MODE } from '../../data/photographer';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section
      id="packages"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
              Curated Investment
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)]">
            Tailored Wedding Collections
          </h2>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
            Every celebration has its own cadence. We offer transparent baseline collections that can be modified to match your celebration’s exact itinerary.
          </p>
          {DEMO_MODE && (
            <div className="inline-block px-3 py-1 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--accent)]/30 text-[10px] font-mono uppercase tracking-widest">
              Demo Mode: Sample Pricing for Demonstration Only
            </div>
          )}
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {photographer.packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-sm p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-[var(--surface)] border-2 border-[var(--accent)] shadow-2xl scale-[1.02]'
                  : 'bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--border-subtle)] shadow-sm'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[var(--accent)] text-black font-semibold text-[10px] font-mono uppercase tracking-widest flex items-center space-x-1 shadow-md">
                  <Star className="w-3 h-3 fill-black" />
                  <span>Most Chosen</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-[var(--border-subtle)] pb-6 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-1">
                    {pkg.recommendedFor}
                  </span>
                  <h3 className="font-serif text-3xl text-[var(--text-primary)] font-light mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] font-light leading-relaxed">
                    {pkg.tagline}
                  </p>

                  <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                      Estimated Investment
                    </span>
                    <span className="font-serif text-2xl md:text-3xl font-light text-[var(--accent)]">
                      {pkg.samplePrice}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-primary)] block">
                    Coverage Scope & Artifacts:
                  </span>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start space-x-3 text-xs text-[var(--text-secondary)] leading-normal"
                      >
                        <Check className="w-3.5 h-3.5 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectPackage(pkg.name)}
                className={`w-full py-3.5 rounded text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center space-x-2 transition-all duration-300 ${
                  pkg.isPopular
                    ? 'bg-[var(--accent)] text-black hover:bg-[var(--accent-hover)] font-semibold'
                    : 'border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]'
                }`}
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
