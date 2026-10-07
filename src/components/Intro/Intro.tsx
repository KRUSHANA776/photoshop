import React from 'react';
import { motion } from 'framer-motion';
import { photographer } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

export const Intro: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Index & Eyebrow */}
        <div className="flex items-center space-x-4 mb-10">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
            {photographer.intro.eyebrow}
          </span>
          <div className="h-[1px] w-16 bg-[var(--border)]" />
        </div>

        {/* Editorial Layout: Statement & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-8 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-[1.18] text-[var(--text-primary)]"
            >
              We don’t just take photographs. <br />
              <span className="italic text-[var(--accent)]">
                We preserve the feeling of a moment.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-base sm:text-lg text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl"
            >
              {photographer.intro.body}
            </motion.p>

            {/* Signature Block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-4 flex flex-col"
            >
              <span className="font-serif italic text-2xl text-[var(--text-primary)] tracking-wide">
                {photographer.intro.signature}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-mono mt-1">
                {photographer.intro.signatureRole}
              </span>
            </motion.div>
          </div>

          {/* Right Editorial Vignette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="relative p-2.5 bg-[var(--surface)] border border-[var(--border)] rounded-sm shadow-xl">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80"
                alt="Intimate Wedding Detail"
                aspectRatio="portrait"
                className="brightness-90 hover:brightness-100 transition-all duration-700"
              />
              <div className="mt-3 px-1 flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                <span>Medium Format Frame</span>
                <span>Ref: 01-A</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
