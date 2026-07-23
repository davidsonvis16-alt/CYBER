import React, { useState, useEffect } from 'react';
import ffLogo from '../assets/images/ff-logo.png';
import ffLogoWhite from '../assets/images/ff-logo-white.png';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onPageChange,
  onOpenOrderModal,
}) => {
  const [isScrolledWhiteSection, setIsScrolledWhiteSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find elements with white background and check if top navbar overlaps
      const lightSelector = `.${CSS.escape('bg-[#F7F7F5]')}, .bg-light-section, .bg-paper-white`;
      const whiteSections = document.querySelectorAll(lightSelector);
      let overWhite = false;
      const navHeight = 120;

      whiteSections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          overWhite = true;
        }
      });

      setIsScrolledWhiteSection(overWhite);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightNav = isScrolledWhiteSection;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-150 border-b ${
        isLightNav
          ? 'bg-[#F7F7F5] text-[#0D0D0D] border-[#0D0D0D]'
          : 'bg-[#0D0D0D] text-[#F7F7F5] border-[#222220]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => {
            onPageChange('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-left cursor-pointer group flex items-center gap-2"
        >
          <img
            src={isLightNav ? ffLogo : ffLogoWhite}
            alt="FlexFlares"
            className="w-8 h-8 md:w-10 md:h-10 object-contain"
          />
          <div>
            <span className="font-display text-2xl md:text-3xl tracking-wider uppercase font-black block leading-none">
              FLEXFLARES
            </span>
            <span
              className={`text-[10px] font-mono tracking-widest block uppercase font-bold mt-1 ${
                isLightNav ? 'text-[#6B6B66]' : 'text-[#7A7A76]'
              }`}
            >
              CYBER SERVICES • KENYA
            </span>
          </div>
        </button>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center space-x-10 lg:space-x-12">
          <button
            onClick={() => onPageChange('home')}
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentPage === 'home'
                ? isLightNav
                  ? 'border-b-2 border-[#0D0D0D] pb-1'
                  : 'border-b-2 border-[#E31B23] pb-1 text-[#E31B23]'
                : isLightNav
                ? 'text-[#6B6B66] hover:text-[#0D0D0D]'
                : 'text-[#7A7A76] hover:text-[#F7F7F5]'
            }`}
          >
            HOME
          </button>

          <button
            onClick={() => onPageChange('services')}
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentPage === 'services'
                ? isLightNav
                  ? 'border-b-2 border-[#0D0D0D] pb-1'
                  : 'border-b-2 border-[#E31B23] pb-1 text-[#E31B23]'
                : isLightNav
                ? 'text-[#6B6B66] hover:text-[#0D0D0D]'
                : 'text-[#7A7A76] hover:text-[#F7F7F5]'
            }`}
          >
            SERVICES
          </button>

          <button
            onClick={() => onPageChange('about')}
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentPage === 'about'
                ? isLightNav
                  ? 'border-b-2 border-[#0D0D0D] pb-1'
                  : 'border-b-2 border-[#E31B23] pb-1 text-[#E31B23]'
                : isLightNav
                ? 'text-[#6B6B66] hover:text-[#0D0D0D]'
                : 'text-[#7A7A76] hover:text-[#F7F7F5]'
            }`}
          >
            ABOUT
          </button>

          <button
            onClick={() => onPageChange('tracker')}
            className={`text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              currentPage === 'tracker'
                ? isLightNav
                  ? 'border-b-2 border-[#0D0D0D] pb-1'
                  : 'border-b-2 border-[#E31B23] pb-1 text-[#E31B23]'
                : isLightNav
                ? 'text-[#6B6B66] hover:text-[#0D0D0D]'
                : 'text-[#7A7A76] hover:text-[#F7F7F5]'
            }`}
          >
            STATUS TRACKER
          </button>

          {/* SINGLE HIGH-VOLTAGE CTA BUTTON */}
          <button
            onClick={() => onOpenOrderModal()}
            className="bg-[#E31B23] text-[#F7F7F5] border-2 border-[#E31B23] px-6 py-2.5 font-display text-sm tracking-wider uppercase font-bold cursor-pointer hover:bg-[#0D0D0D] hover:border-[#0D0D0D] transition-colors"
          >
            SUBMIT REQUEST
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden px-3 py-2 font-mono font-bold text-xs uppercase border cursor-pointer ${
            isLightNav
              ? 'border-[#0D0D0D] bg-[#0D0D0D] text-[#F7F7F5]'
              : 'border-[#F7F7F5] bg-[#F7F7F5] text-[#0D0D0D]'
          }`}
        >
          {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-t py-6 px-6 space-y-4 font-mono ${
            isLightNav
              ? 'bg-[#F7F7F5] border-[#0D0D0D] text-[#0D0D0D]'
              : 'bg-[#0D0D0D] border-[#222220] text-[#F7F7F5]'
          }`}
        >
          <button
            onClick={() => {
              onPageChange('home');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-base font-bold uppercase tracking-wider border-b border-[#333330]"
          >
            01 // HOME
          </button>
          <button
            onClick={() => {
              onPageChange('services');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-base font-bold uppercase tracking-wider border-b border-[#333330]"
          >
            02 // SERVICES CATALOG
          </button>
          <button
            onClick={() => {
              onPageChange('about');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-base font-bold uppercase tracking-wider border-b border-[#333330]"
          >
            03 // ABOUT & HOURS
          </button>
          <button
            onClick={() => {
              onPageChange('tracker');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-base font-bold uppercase tracking-wider border-b border-[#333330]"
          >
            04 // TRACK STATUS
          </button>
          <button
            onClick={() => {
              onOpenOrderModal();
              setMobileMenuOpen(false);
            }}
            className="w-full bg-[#E31B23] text-[#F7F7F5] font-display text-lg py-3 uppercase font-bold text-center mt-4"
          >
            SUBMIT SERVICE REQUEST
          </button>
        </div>
      )}
    </header>
  );
};