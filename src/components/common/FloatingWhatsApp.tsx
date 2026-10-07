import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const url = buildWhatsAppUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
      {/* Tooltip greeting */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="mr-3 p-3 rounded-lg bg-[var(--surface)] text-[var(--text-primary)] border border-[var(--border)] shadow-2xl backdrop-blur-md max-w-[200px] text-xs relative"
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-1.5 right-1.5 text-[var(--text-muted)] hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-medium text-[11px] pr-3 text-[var(--accent)] font-mono uppercase">
              Arya Studios Direct
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] mt-1">
              Have questions regarding dates or pricing? Send a message on WhatsApp.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 relative group"
        aria-label="Direct WhatsApp Conversation"
        title="Chat with Charudatta Arya on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping opacity-75" />
          <span className="w-2 bg-emerald-500 rounded-full absolute" />
        </span>
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </motion.button>
    </div>
  );
};
