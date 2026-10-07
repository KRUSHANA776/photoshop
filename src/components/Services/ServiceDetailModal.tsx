import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Clock, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { type ServiceDetail, DEMO_MODE } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

interface ServiceDetailModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onEnquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onEnquire,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (service) {
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
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[90000] bg-black/80 backdrop-blur-xl flex justify-end"
        role="dialog"
        aria-modal="true"
        aria-label={service.title}
      >
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 260 }}
          className="w-full max-w-2xl bg-[var(--bg)] h-full overflow-y-auto border-l border-[var(--border)] p-6 md:p-10 flex flex-col justify-between"
        >
          <div>
            {/* Top Close Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                Service Syllabus
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[var(--surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Service Header */}
            <div className="py-8 space-y-3">
              <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] font-light">
                {service.title}
              </h2>
              <p className="font-serif italic text-lg text-[var(--accent)]">
                {service.tagline}
              </p>
            </div>

            {/* Cover Image */}
            <div className="rounded overflow-hidden border border-[var(--border)] mb-8">
              <OptimizedImage
                src={service.coverImage}
                alt={service.title}
                aspectRatio="landscape"
              />
            </div>

            {/* Deep Overview */}
            <div className="space-y-4 mb-8 text-sm md:text-base text-[var(--text-secondary)] leading-relaxed font-light">
              <p>{service.detailedOverview}</p>
            </div>

            {/* Demo Price Badge */}
            <div className="p-4 rounded bg-[var(--surface)] border border-[var(--border)] mb-8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[var(--text-muted)] block">
                  Investment Guidance
                </span>
                <span className="text-sm md:text-base font-semibold text-[var(--text-primary)]">
                  {service.samplePrice}
                </span>
              </div>
              {DEMO_MODE && (
                <span className="text-[9px] uppercase font-mono px-2 py-0.5 rounded bg-[var(--badge-bg)] text-[var(--accent)] border border-[var(--accent)]/30">
                  Sample Pricing
                </span>
              )}
            </div>

            {/* Inclusions List */}
            <div className="mb-8">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-primary)] mb-4 flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                <span>What’s Included</span>
              </h3>
              <ul className="space-y-2.5">
                {service.inclusions.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 text-xs md:text-sm text-[var(--text-secondary)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Timeline */}
            <div className="mb-8 p-4 rounded bg-[var(--surface)] border border-[var(--border-subtle)]">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Typical Turnaround</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">{service.timeline}</p>
            </div>

            {/* FAQ Accordion */}
            {service.faq && service.faq.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--text-primary)] mb-4 flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-[var(--accent)]" />
                  <span>Frequently Asked Questions</span>
                </h3>
                <div className="space-y-3">
                  {service.faq.map((item, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div
                        key={idx}
                        className="rounded border border-[var(--border-subtle)] bg-[var(--surface)] overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                          className="w-full text-left p-3.5 text-xs font-medium text-[var(--text-primary)] flex justify-between items-center"
                        >
                          <span>{item.q}</span>
                          <span className="text-[var(--accent)] font-mono ml-2">
                            {isOpen ? '—' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="p-3.5 pt-0 text-xs text-[var(--text-secondary)] border-t border-[var(--border-subtle)] leading-relaxed font-light">
                            {item.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-[var(--border)]">
            <button
              onClick={() => {
                onClose();
                onEnquire(service.title);
              }}
              className="w-full py-4 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-3 shadow-xl hover:bg-[var(--accent-hover)] transition-all"
            >
              <span>Enquire For {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
