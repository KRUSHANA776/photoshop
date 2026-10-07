import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { photographer } from '../../data/photographer';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface FinalCTAProps {
  onOpenEnquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEnquiry }) => {
  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 overflow-hidden flex items-center justify-center border-b border-[var(--border)]">
      {/* Background Image with Cinematic Dark Grading */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={photographer.hero.secondaryImage}
          alt="Cinematic Vow Atmosphere"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.15]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]" />
      </div>

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[var(--accent)] block">
          Begin The Journey
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          Your Story Deserves More <br />
          <span className="italic text-[var(--accent)]">Than a Photograph.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
          Let’s create something you will want to hold, remember, and cherish across generations.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto px-9 py-4 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-3 shadow-2xl hover:bg-[var(--accent-hover)] transition-all"
          >
            <span>Start Your Enquiry</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto px-8 py-4 rounded border border-white/20 bg-black/40 backdrop-blur-md text-white hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};
