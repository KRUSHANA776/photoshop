import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { photographer, type ServiceDetail } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesProps {
  onOpenEnquiry: (serviceTitle?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenEnquiry }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section
      id="services"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] bg-[var(--surface)]/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                03 — SERVICES
              </span>
              <div className="h-[1px] w-12 bg-[var(--border)]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)]">
              Artistic Disciplines
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
            Every genre demands its own rhythm, lighting chemistry, and psychological intimacy. Explore our dedicated studio offerings.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photographer.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col justify-between p-6 rounded bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 shadow-sm hover:shadow-xl"
            >
              <div>
                {/* Service Image */}
                <div
                  className="overflow-hidden rounded border border-[var(--border-subtle)] mb-6 cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <OptimizedImage
                    src={service.coverImage}
                    alt={service.title}
                    aspectRatio="landscape"
                    className="group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Service Title & Copy */}
                <div className="space-y-2 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block">
                    0{index + 1} // Archive
                  </span>
                  <h3 className="font-serif text-2xl text-[var(--text-primary)] font-light group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-serif italic text-sm text-[var(--text-secondary)]">
                    "{service.tagline}"
                  </p>
                </div>

                <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Service Action Button */}
              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs uppercase font-mono tracking-widest text-[var(--text-primary)] hover:text-[var(--accent)] flex items-center space-x-2 transition-colors"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Drawer */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onEnquire={(title) => {
          setSelectedService(null);
          onOpenEnquiry(title);
        }}
      />
    </section>
  );
};
