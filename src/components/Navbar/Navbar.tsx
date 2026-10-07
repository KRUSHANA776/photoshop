import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Palette } from 'lucide-react';
import { photographer } from '../../data/photographer';
import { THEMES, type ThemeMode } from '../../config/theme';

interface NavbarProps {
  currentTheme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
  onOpenEnquiry: (eventType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTheme,
  onThemeChange,
  onOpenEnquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Before & After', href: '#craft' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--border)] shadow-sm'
            : 'py-6 md:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Studio Brand / Name */}
          <a
            href="#"
            className="group flex flex-col tracking-wider focus:outline-none"
            aria-label={photographer.brandName}
          >
            <span className="font-serif text-xl md:text-2xl tracking-[0.2em] font-light uppercase text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {photographer.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[var(--text-muted)] -mt-0.5">
              Fine Art & Editorial
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9 text-xs uppercase tracking-[0.2em] font-medium text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[var(--accent)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="p-2.5 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors flex items-center justify-center"
                title="Switch Editorial Theme"
                aria-label="Switch Editorial Theme"
              >
                <Palette className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {themeDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-48 py-2 bg-[var(--surface)] border border-[var(--border)] rounded shadow-2xl backdrop-blur-xl z-50"
                  >
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-[var(--text-muted)] border-b border-[var(--border-subtle)]">
                      Aesthetic Theme
                    </div>
                    {(Object.keys(THEMES) as ThemeMode[]).map((themeKey) => {
                      const t = THEMES[themeKey];
                      const active = currentTheme === themeKey;
                      return (
                        <button
                          key={themeKey}
                          onClick={() => {
                            onThemeChange(themeKey);
                            setThemeDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-2 text-xs flex items-center justify-between transition-colors ${
                            active
                              ? 'text-[var(--accent)] font-semibold bg-[var(--badge-bg)]'
                              : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-hover)]'
                          }`}
                        >
                          <span>{t.name}</span>
                          {active && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className="px-5 py-2.5 rounded border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-300 text-[11px] uppercase tracking-[0.25em] font-medium flex items-center space-x-2"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              type="button"
              onClick={() => {
                const nextTheme =
                  currentTheme === 'dark'
                    ? 'light'
                    : currentTheme === 'light'
                    ? 'warm'
                    : 'dark';
                onThemeChange(nextTheme);
              }}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)]"
              aria-label="Toggle Theme"
            >
              <Palette className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--accent)] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
            exit={{ opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[var(--bg)] flex flex-col justify-between px-8 pt-28 pb-10 lg:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--accent)] font-mono block">
                Directory
              </span>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-serif text-3xl tracking-wide text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors py-1 flex items-center justify-between border-b border-[var(--border-subtle)]"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      0{idx + 1}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="pt-8 space-y-4 border-t border-[var(--border)]">
              <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                <span>Current Palette:</span>
                <span className="text-[var(--accent)] uppercase font-mono">
                  {THEMES[currentTheme].name}
                </span>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-4 text-center rounded bg-[var(--accent)] text-black font-semibold text-xs tracking-[0.25em] uppercase shadow-lg"
              >
                Book a Session
              </button>
              <p className="text-center text-[10px] text-[var(--text-muted)] tracking-wider">
                {photographer.location} • {photographer.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
