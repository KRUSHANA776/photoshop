import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { photographer, DEMO_MODE } from '../../data/photographer';

export const Testimonials: React.FC = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] bg-[var(--surface)]/20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)] block">
              Client Perspectives
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-light text-[var(--text-primary)]">
              Words From Our Patrons
            </h2>
            {DEMO_MODE && (
              <span className="inline-block px-3 py-1 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--accent)]/30 text-[10px] font-mono uppercase tracking-widest">
                Sample Client Reviews (Demo Mode)
              </span>
            )}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographer.testimonials.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all relative"
              >
                <div>
                  <Quote className="w-6 h-6 text-[var(--accent)]/40 mb-6" />

                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(item.rating)].map((_, rIdx) => (
                      <Star
                        key={rIdx}
                        className="w-3.5 h-3.5 fill-[var(--accent)] text-[var(--accent)]"
                      />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="font-serif italic text-base sm:text-lg text-[var(--text-primary)] leading-relaxed mb-6 font-light">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center space-x-3">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.client}
                      className="w-10 h-10 rounded-full object-cover border border-[var(--border)]"
                    />
                  )}
                  <div>
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] tracking-wide">
                      {item.client}
                    </h4>
                    <span className="text-[11px] text-[var(--text-muted)] font-mono block">
                      {item.event} • {item.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Quote Section */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden border-b border-[var(--border)]">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={photographer.quoteSection.image}
            alt="Cinematic Still"
            className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/80" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6"
        >
          <p className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-light leading-tight">
            "Every photograph has a story. <br />
            <span className="italic text-[var(--accent)]">
              Every story deserves to be remembered."
            </span>
          </p>
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-neutral-400 block">
            — {photographer.quoteSection.author}
          </span>
        </motion.div>
      </section>
    </>
  );
};
