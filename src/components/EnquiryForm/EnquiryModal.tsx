import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { DEMO_MODE } from '../../data/photographer';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  location: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  message?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    eventType: initialService || 'Weddings',
    eventDate: '',
    location: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, eventType: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setErrors({});
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for date check';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 8) {
      errs.phone = 'Please enter a valid phone number';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.eventType) {
      errs.eventType = 'Please select an event category';
    }

    if (!formData.eventDate) {
      errs.eventDate = 'Approximate event date is required';
    }

    if (formData.message && formData.message.length < 10) {
      errs.message = 'Please provide at least 10 characters describing your plans';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift network call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleWhatsAppRedirect = () => {
    const url = buildWhatsAppUrl({
      eventType: formData.eventType,
      name: formData.name,
      date: formData.eventDate,
      location: formData.location,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-label="Commission Enquiry Form"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[var(--bg)] border border-[var(--border)] rounded-sm p-6 sm:p-10 shadow-2xl my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="space-y-2 mb-8 pr-8">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--accent)] block">
                  Studio Inquiries & Commissions
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] font-light">
                  Reserve Your Date
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-light">
                  We accept a curated number of commissions annually to protect artistic excellence.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Radhika Sharma"
                      className={`w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                        errors.name ? 'border-red-500/80' : 'border-[var(--border)]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98000 00000"
                      className={`w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                        errors.phone ? 'border-red-500/80' : 'border-[var(--border)]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="radhika@example.com"
                      className={`w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                        errors.email ? 'border-red-500/80' : 'border-[var(--border)]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Category *
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    >
                      <option value="Weddings">Destination / Luxury Wedding</option>
                      <option value="Pre-Weddings">Pre-Wedding Story</option>
                      <option value="Portraits">Editorial Portrait</option>
                      <option value="Fashion">Haute Couture / Editorial</option>
                      <option value="Events">Private Soirée / Gala</option>
                      <option value="Commercial">Brand Campaign</option>
                      <option value="Products">Jewelry / Product Still Life</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Approximate Date *
                    </label>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) =>
                        setFormData({ ...formData, eventDate: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors ${
                        errors.eventDate
                          ? 'border-red-500/80'
                          : 'border-[var(--border)]'
                      }`}
                    />
                    {errors.eventDate && (
                      <span className="text-[10px] text-red-400 mt-1 block">
                        {errors.eventDate}
                      </span>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                      Destination / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      placeholder="e.g. Udaipur, Pune, Mumbai"
                      className="w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="">Select an estimated investment bracket</option>
                    <option value="₹1.5L - ₹3.0L">₹1.5L – ₹3.0L (Single day / Intimate)</option>
                    <option value="₹3.0L - ₹5.0L">₹3.0L – ₹5.0L (Signature 2-day Wedding)</option>
                    <option value="₹5.0L+">₹5.0L+ (Bespoke Grand / Destination Multi-day)</option>
                    <option value="Custom Portrait">₹35k – ₹75k (Portraits / Pre-wedding)</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-1">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Share details about the venue, ceremonies, or aesthetic tone you envision..."
                    className="w-full px-3.5 py-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-[10px] text-red-400 mt-1 block">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center space-x-2 shadow-xl hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Send Enquiry'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="py-3.5 px-6 rounded border border-emerald-600/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </button>
                </div>

                {DEMO_MODE && (
                  <div className="flex items-center space-x-2 text-[10px] text-[var(--text-muted)] font-mono">
                    <AlertCircle className="w-3 h-3 text-[var(--accent)]" />
                    <span>
                      Demo Mode Active: Form simulates real submission without sending cold emails.
                    </span>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* Success confirmation */
            <div className="text-center py-12 px-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[var(--badge-bg)] border border-[var(--accent)]/40 flex items-center justify-center text-[var(--accent)] mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)] block">
                  Enquiry Recorded
                </span>
                <h4 className="font-serif text-3xl text-[var(--text-primary)] font-light">
                  Thank You, {formData.name || 'Valued Client'}
                </h4>
                <p className="max-w-md mx-auto text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                  Your enquiry has been received. In a live production setting, our studio manager responds within 24 business hours with custom availability.
                </p>
              </div>

              {DEMO_MODE && (
                <div className="p-3.5 rounded bg-[var(--surface)] border border-[var(--border)] max-w-md mx-auto text-[11px] text-[var(--text-muted)] font-mono">
                  [DEMO_MODE] Simulated client lead captured for "{formData.eventType || 'Photography'}".
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="px-6 py-3 rounded bg-emerald-600 text-white font-medium text-xs uppercase tracking-widest flex items-center justify-center space-x-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-xs uppercase tracking-widest"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
