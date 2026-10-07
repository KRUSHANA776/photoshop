import { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, Sparkles } from 'lucide-react';
import { photographer } from '../../data/photographer';

export const BeforeAfter: React.FC = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = photographer.beforeAfter[activeItemIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section
      id="craft"
      className="py-28 md:py-36 px-6 md:px-12 border-b border-[var(--border-subtle)] bg-[var(--surface)]/20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[var(--accent)]">
                The Post-Production Alchemy
              </span>
              <div className="h-[1px] w-12 bg-[var(--border)]" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[var(--text-primary)]">
              Before & After Color Grade
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--text-secondary)] font-light leading-relaxed">
            Drag the center divider horizontally to observe our proprietary film curve emulation and natural texture preservation.
          </p>
        </div>

        {/* Comparison Selection Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {photographer.beforeAfter.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveItemIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded text-xs uppercase font-mono tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                activeItemIndex === idx
                  ? 'bg-[var(--accent)] text-black font-semibold'
                  : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text-primary)]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="relative rounded overflow-hidden border border-[var(--border)] bg-black shadow-2xl select-none">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onClick={(e) => handleMove(e.clientX)}
            className="relative w-full aspect-[16/10] md:aspect-[21/10] cursor-ew-resize overflow-hidden"
          >
            {/* After (Graded) Image - Full background */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={activeItem.afterImage}
                alt={`${activeItem.title} After Color Grade`}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute bottom-6 right-6 px-3 py-1.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-widest text-[var(--accent)] uppercase border border-white/10 pointer-events-none">
                AFTER: Master Film Grade
              </div>
            </div>

            {/* Before (Raw / Flat) Image - Clipped layer */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="absolute inset-0"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : '100%' }}
              >
                <img
                  src={activeItem.beforeImage}
                  alt={`${activeItem.title} Before Raw`}
                  className="w-full h-full object-cover max-w-none"
                  draggable={false}
                />
              </div>
              <div className="absolute bottom-6 left-6 px-3 py-1.5 rounded bg-black/75 backdrop-blur-md text-[10px] font-mono tracking-widest text-neutral-300 uppercase border border-white/10 pointer-events-none">
                BEFORE: Flat Camera Raw
              </div>
            </div>

            {/* Draggable Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-[var(--accent)] shadow-[0_0_12px_rgba(197,168,128,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black/90 border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-2xl backdrop-blur-md">
                <SlidersHorizontal className="w-4 h-4 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[var(--text-secondary)] gap-3 bg-[var(--surface)] p-4 rounded border border-[var(--border-subtle)]">
          <div className="space-y-1">
            <span className="font-semibold text-[var(--text-primary)]">
              {activeItem.category}
            </span>
            <p className="font-light text-[var(--text-muted)]">{activeItem.description}</p>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] flex-shrink-0">
            {activeItem.technique}
          </div>
        </div>
      </div>
    </section>
  );
};
