import React, { useState, useEffect } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      // Get elements at bottom right
      const x = window.innerWidth - 60;
      const y = window.innerHeight - 60;
      const el = document.elementFromPoint(x, y);

      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const lightSelector = `.${CSS.escape('bg-[#F7F7F5]')}, .bg-light-section, .bg-paper-white`;
        // Check if light background (e.g. rgb(247, 247, 245) or white)
        if (
          bg.includes('247') ||
          bg.includes('255') ||
          bg.includes('f7f7f5') ||
          Boolean(el.closest(lightSelector))
        ) {
          setIsLightSection(true);
        } else {
          setIsLightSection(false);
        }
      }
    };

    window.addEventListener('scroll', checkBackground, { passive: true });
    checkBackground();
    return () => window.removeEventListener('scroll', checkBackground);
  }, []);

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello FlexFlares Cyber Desk, I need immediate assistance with an eCitizen / Cyber Service.'
    );
    window.open(`https://wa.me/254113910480?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={openWhatsApp}
        className={`px-5 py-4 font-mono font-black text-xs uppercase tracking-widest border-2 flex items-center space-x-2 transition-all cursor-pointer group ${
          isLightSection
            ? 'bg-[#0D0D0D] text-[#F7F7F5] border-[#0D0D0D] hover:bg-[#E31B23] hover:border-[#E31B23]'
            : 'bg-[#F7F7F5] text-[#0D0D0D] border-[#F7F7F5] hover:bg-[#E31B23] hover:text-[#F7F7F5] hover:border-[#E31B23]'
        }`}
      >
        <span className="w-2.5 h-2.5 bg-[#E31B23] inline-block animate-pulse"></span>
        <span className="font-bold">WHATSAPP DESK [24/7]</span>
      </button>
    </div>
  );
};
