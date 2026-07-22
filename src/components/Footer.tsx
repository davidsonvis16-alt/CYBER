import React from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange, onOpenOrderModal }) => {
  return (
    <footer className="bg-[#0D0D0D] text-[#F7F7F5] border-t-4 border-[#F7F7F5] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* BIG STATEMENT IN FOOTER */}
        <div className="border-b-2 border-[#222220] pb-12 mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block mb-2">
            SPEED • RELIABILITY • PRECISION
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            FLEXFLARES CYBER SERVICES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 font-mono text-xs">
          {/* COL 1: ABOUT */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-[#F7F7F5] uppercase tracking-wide">
              PHYSICAL SHOP
            </h3>
            <p className="text-[#7A7A76] leading-relaxed">
              KIMATHI STREET, CBD<br />
              NAIROBI, KENYA<br />
              OPPOSITE HUDUMA CENTRE
            </p>
            <p className="text-[#F7F7F5] font-bold">
              ONLINE DESK: NATIONWIDE COVERAGE
            </p>
          </div>

          {/* COL 2: HOURS */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-[#F7F7F5] uppercase tracking-wide">
              OPERATING HOURS
            </h3>
            <div className="space-y-2 text-[#7A7A76]">
              <div className="flex justify-between border-b border-[#222220] pb-1">
                <span>MON - FRI:</span>
                <span className="text-[#F7F7F5]">7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#222220] pb-1">
                <span>SATURDAY:</span>
                <span className="text-[#F7F7F5]">8:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-[#222220] pb-1">
                <span>SUNDAY:</span>
                <span className="text-[#E31B23]">WHATSAPP DESK ONLY</span>
              </div>
            </div>
          </div>

          {/* COL 3: QUICK LINKS */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-[#F7F7F5] uppercase tracking-wide">
              SYSTEM DIRECTORY
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onPageChange('home')}
                  className="text-[#7A7A76] hover:text-[#E31B23] uppercase cursor-pointer"
                >
                  01 // HOME
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('services')}
                  className="text-[#7A7A76] hover:text-[#E31B23] uppercase cursor-pointer"
                >
                  02 // SERVICES CATALOG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('about')}
                  className="text-[#7A7A76] hover:text-[#E31B23] uppercase cursor-pointer"
                >
                  03 // ABOUT & HOURS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange('tracker')}
                  className="text-[#7A7A76] hover:text-[#E31B23] uppercase cursor-pointer"
                >
                  04 // REAL-TIME TRACKER
                </button>
              </li>
            </ul>
          </div>

          {/* COL 4: CONTACT & EMERGENCY */}
          <div className="space-y-4">
            <h3 className="font-display text-xl text-[#F7F7F5] uppercase tracking-wide">
              DIRECT DESK
            </h3>
            <div className="space-y-2">
              <p className="text-[#7A7A76]">
                TEL: <span className="text-[#F7F7F5] font-bold">+254 113 910 480</span>
              </p>
              <p className="text-[#7A7A76]">
                EMAIL: <span className="text-[#F7F7F5]">flexflarescyberservices@gmail.com</span>
              </p>
            </div>
            <button
              onClick={() => onOpenOrderModal()}
              className="w-full bg-[#E31B23] text-[#F7F7F5] font-display text-sm py-3 uppercase tracking-wider font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              SUBMIT SERVICE REQUEST
            </button>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="border-t border-[#222220] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-mono text-[#7A7A76]">
          <div>
            © {new Date().getFullYear()} FLEXFLARES CYBER SERVICES. ALL RIGHTS RESERVED.
          </div>
          <div className="mt-2 md:mt-0 uppercase tracking-widest font-semibold text-[#F7F7F5]">
            FAST • RELIABLE • AFFORDABLE • PROFESSIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};
