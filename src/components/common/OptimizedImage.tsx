import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'portrait' | 'landscape' | 'square' | 'tall' | 'wide' | 'auto';
  fallbackText?: string;
  wrapperClassName?: string;
  showShimmer?: boolean;
}

const aspectClasses: Record<string, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[16/10]',
  square: 'aspect-square',
  tall: 'aspect-[2/3]',
  wide: 'aspect-[21/9]',
  auto: '',
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt = 'Photography by Charudatta Arya Studios',
  aspectRatio = 'auto',
  className = '',
  wrapperClassName = '',
  loading = 'lazy',
  decoding = 'async',
  fallbackText = 'Fine Art Capture',
  showShimmer = true,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const ratioClass = aspectClasses[aspectRatio] || '';

  return (
    <div
      className={`relative overflow-hidden bg-[var(--surface)] ${ratioClass} ${wrapperClassName}`}
    >
      {/* Shimmer Placeholder while loading */}
      {showShimmer && !isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-900/40 animate-pulse pointer-events-none flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-neutral-700/60 border-t-[var(--accent)] animate-spin opacity-40" />
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[var(--surface)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
          <svg
            className="w-8 h-8 mb-2 opacity-50 text-[var(--accent)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs uppercase tracking-widest font-mono text-[var(--accent)]">
            {fallbackText}
          </span>
          <span className="text-[11px] mt-1 opacity-60">High Resolution Asset</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding={decoding}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
