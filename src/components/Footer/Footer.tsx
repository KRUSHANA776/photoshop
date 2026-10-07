import { ArrowUp, MessageCircle } from 'lucide-react';
import { photographer } from '../../data/photographer';

interface FooterProps {
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[var(--bg)] border-t border-[var(--border)] pt-20 pb-28 md:pb-16 px-6 md:px-12 text-xs">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[var(--border-subtle)]">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-4">
              <span className="font-serif text-2xl uppercase tracking-[0.2em] font-light text-[var(--text-primary)] block">
                {photographer.name}
              </span>
              <p className="text-[var(--text-secondary)] font-light max-w-sm leading-relaxed text-xs">
                Fine art editorial and documentary wedding studio capturing timeless, heartfelt moments across India and worldwide.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[var(--text-muted)] space-y-1">
                <p>{photographer.contact.address}</p>
                <p>{photographer.phone} • {photographer.email}</p>
              </div>
            </div>

            {/* Quick Links: Portfolio */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block">
                Portfolio
              </span>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                {photographer.categories.slice(1, 6).map((cat) => (
                  <li key={cat}>
                    <a
                      href="#portfolio"
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links: Services */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block">
                Services
              </span>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                {photographer.services.slice(0, 5).map((srv) => (
                  <li key={srv.id}>
                    <a
                      href="#services"
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {srv.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links: Socials & Back to Top */}
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block">
                Connect
              </span>
              <ul className="space-y-2 text-[var(--text-secondary)]">
                {photographer.contact.socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--accent)] transition-colors flex items-center justify-between"
                    >
                      <span>{social.name}</span>
                      <span className="text-[10px] text-[var(--text-muted)] font-mono">
                        {social.handle}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToTop}
                className="pt-4 flex items-center space-x-2 text-[10px] uppercase font-mono tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Sub-footer Row */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[var(--text-muted)] gap-4">
            <p>
              © {new Date().getFullYear()} {photographer.brandName}. All rights reserved.
            </p>

            {/* Subtle KSJ Technologies Craft Attribution */}
            <div className="flex items-center space-x-2">
              <span>{photographer.agencyCredit.text}</span>
              <a
                href={photographer.agencyCredit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[var(--accent)] hover:underline"
              >
                ksjtechnologies.in
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Mobile CTA Bar (Requirement 33) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden bg-[var(--bg)]/95 backdrop-blur-lg border-t border-[var(--border)] p-3 px-4 flex items-center gap-3">
        <a
          href={`https://wa.me/${photographer.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded border border-emerald-600/50 text-emerald-400 font-medium text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={onOpenEnquiry}
          className="flex-1 py-3 rounded bg-[var(--accent)] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 shadow-lg"
        >
          <span>Enquire Now</span>
        </button>
      </div>
    </>
  );
};
