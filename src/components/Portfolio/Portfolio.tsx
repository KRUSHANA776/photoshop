import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Grid3X3, LayoutGrid } from 'lucide-react';
import { photographer, type PortfolioProject } from '../../data/photographer';
import { OptimizedImage } from '../common/OptimizedImage';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

  const filteredProjects =
    selectedCategory === 'All'
      ? photographer.portfolio
      : photographer.portfolio.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header & Section Index */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                02 — SELECTED WORK
              </span>
              <div className="h-[1px] w-12 bg-[var(--border)]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)]">
              Visual Archives
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-2 self-start md:self-auto bg-[var(--surface)] p-1 rounded border border-[var(--border)]">
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-1.5 rounded transition-colors text-xs flex items-center space-x-1.5 ${
                viewMode === 'masonry'
                  ? 'bg-[var(--accent)] text-black font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Masonry Rhythm"
              aria-label="Masonry Rhythm"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider hidden sm:inline">
                Masonry
              </span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded transition-colors text-xs flex items-center space-x-1.5 ${
                viewMode === 'grid'
                  ? 'bg-[var(--accent)] text-black font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              title="Editorial Grid"
              aria-label="Editorial Grid"
            >
              <Grid3X3 className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase font-mono tracking-wider hidden sm:inline">
                Editorial
              </span>
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-12 no-scrollbar scroll-smooth">
          {photographer.categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-mono transition-all duration-300 flex-shrink-0 ${
                  isActive
                    ? 'text-black font-bold'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border)]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-[var(--accent)] rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span>{category}</span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Gallery Layout */}
        <motion.div
          layout
          className={
            viewMode === 'masonry'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 auto-rows-[340px]'
              : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
          }
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              // Rhythmic layout classes for masonry
              const spanClass =
                viewMode === 'masonry'
                  ? idx === 0
                    ? 'md:col-span-2 md:row-span-2'
                    : idx === 1
                    ? 'md:row-span-2'
                    : idx === 4
                    ? 'md:col-span-2 md:row-span-1'
                    : 'md:col-span-1 md:row-span-1'
                  : '';

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.45 }}
                  onClick={() => onSelectProject(project)}
                  data-cursor="OPEN"
                  className={`group relative overflow-hidden rounded-sm border border-[var(--border)] bg-[var(--surface)] cursor-pointer flex flex-col justify-end shadow-lg ${spanClass}`}
                >
                  {/* Image Presentation */}
                  <div className="absolute inset-0 w-full h-full">
                    <OptimizedImage
                      src={project.coverImage}
                      alt={project.title}
                      aspectRatio="auto"
                      className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out brightness-[0.92] group-hover:brightness-100"
                    />
                  </div>

                  {/* Dark Vignette & Dynamic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center space-x-2">
                    <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-[var(--accent)] border border-white/10">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/60">
                      {project.year}
                    </span>
                  </div>

                  {/* Card Bottom Meta Details */}
                  <div className="relative z-10 p-6 md:p-8 flex items-end justify-between transform group-hover:translate-y-0 transition-transform duration-300">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--accent)] block mb-1">
                        {project.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl text-white font-light group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-300 line-clamp-1 max-w-sm font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-all duration-300 flex-shrink-0 ml-4 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
