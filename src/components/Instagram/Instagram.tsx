import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { photographer } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

const InstagramIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Instagram = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)] block">
              Daily Frames & Dispatches
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-[var(--text-primary)]">
              Follow On Instagram
            </h2>
          </div>

          <a
            href={photographer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-xs uppercase font-mono tracking-widest text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors self-start sm:self-auto"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>{photographer.instagramHandle}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-Grid Editorial Image Showcase */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {photographer.instagramGrid.map((item, idx) => (
            <motion.a
              key={idx}
              href={photographer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-sm border border-[var(--border)] aspect-square bg-[var(--surface)] block"
              data-cursor="VIEW"
            >
              <OptimizedImage
                src={item.url}
                alt={item.caption}
                aspectRatio="square"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                <InstagramIcon className="w-5 h-5 text-white mb-2" />
                <span className="text-[10px] font-mono text-white/90 line-clamp-2">
                  {item.caption}
                </span>
                <span className="text-[9px] font-mono text-[var(--accent)] mt-1">
                  ♥ {item.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
