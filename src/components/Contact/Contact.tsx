import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, Navigation } from 'lucide-react';
import { photographer } from '../../data/photographer';

interface ContactProps {
  onOpenEnquiry: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="contact"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] bg-[var(--surface)]/20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
            {photographer.contact.eyebrow}
          </span>
          <div className="h-[1px] w-12 bg-[var(--border)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Direct Information */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl sm:text-5xl font-light text-[var(--text-primary)]">
                Start Your Story
              </h2>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed">
                Whether you are orchestrating an ancestral palace celebration or a silent mountain elopement, we would love to hear your story.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 text-sm">
              {/* Studio Location */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    Studio Address
                  </span>
                  <p className="text-[var(--text-primary)] font-light mt-0.5">
                    {photographer.contact.address}
                  </p>
                </div>
              </div>

              {/* Phone & Call */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    Telephone
                  </span>
                  <a
                    href={`tel:${photographer.contact.phoneCall}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-mono mt-0.5 block"
                  >
                    {photographer.contact.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    Electronic Mail
                  </span>
                  <a
                    href={`mailto:${photographer.contact.email}`}
                    className="text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors font-mono mt-0.5 block"
                  >
                    {photographer.contact.email}
                  </a>
                </div>
              </div>

              {/* Studio Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded bg-[var(--surface)] border border-[var(--border)] text-[var(--accent)] mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                    Visiting Hours
                  </span>
                  <p className="text-[var(--text-secondary)] font-light mt-0.5 text-xs">
                    {photographer.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-[0.2em] shadow-lg hover:bg-[var(--accent-hover)] transition-all flex items-center justify-center space-x-2"
              >
                <span>Open Date Enquiry</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={`https://wa.me/${photographer.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded border border-emerald-600/40 text-emerald-400 hover:bg-emerald-600 hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Studio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps & Location Card */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-2xl relative"
            >
              {/* Map Frame */}
              <div className="w-full h-[380px] relative bg-neutral-900">
                <iframe
                  title="Studio Arya Pune Location"
                  src={photographer.contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(0.85) invert(0.9) contrast(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
                />

                {/* Overlaid Location Badge */}
                <div className="absolute top-4 left-4 bg-[var(--bg)]/90 backdrop-blur-md border border-[var(--border)] px-4 py-3 rounded shadow-xl max-w-xs">
                  <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-[var(--accent)]">
                    <MapPin className="w-3 h-3" />
                    <span>Studio Arya Atelier</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-light">
                    Koregaon Park, Pune, Maharashtra
                  </p>
                </div>

                {/* Get Directions External Button */}
                <a
                  href={photographer.contact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-[var(--accent)] text-black px-4 py-2.5 rounded shadow-xl text-xs font-mono uppercase tracking-widest flex items-center space-x-2 hover:bg-[var(--accent-hover)] transition-all font-semibold"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>

              {/* Studio Notes Footnote */}
              <div className="p-5 flex items-center justify-between text-xs text-[var(--text-muted)] font-mono border-t border-[var(--border-subtle)]">
                <span>Coordinates: 18.5362° N, 73.8940° E</span>
                <span className="text-[var(--accent)]">Private Consultations Welcomed</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
