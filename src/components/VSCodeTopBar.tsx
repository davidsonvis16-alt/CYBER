import React from 'react';

interface VSCodeTopBarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const VSCodeTopBar: React.FC<VSCodeTopBarProps> = ({ currentPage, onPageChange }) => {
  const tabs = [
    { id: 'home', label: '01_HOME.ts', path: '/' },
    { id: 'services', label: '02_SERVICES.ts', path: '/services' },
    { id: 'about', label: '03_ABOUT.ts', path: '/about' },
    { id: 'tracker', label: '04_STATUS_TRACKER.log', path: '/tracker' },
  ];

  return (
    <div className="w-full bg-[#0D0D0D] text-[#F7F7F5] border-b border-[#333330] text-xs font-mono select-none z-50">
      {/* VS Code Title Bar */}
      <div className="px-4 py-1.5 flex items-center justify-between border-b border-[#222220] bg-[#080808] text-[#7A7A76]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-2.5 h-2.5 bg-[#E31B23] inline-block"></span>
            <span className="w-2.5 h-2.5 bg-[#555] inline-block"></span>
            <span className="w-2.5 h-2.5 bg-[#888] inline-block"></span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#F7F7F5] font-semibold pl-2">
            flexflares-cyber-v2.0.1.ts — Kenya eCitizen & ICT Engine
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-[10px] tracking-widest text-[#7A7A76]">
          <span className="text-[#E31B23] font-bold">● LIVE SERVERS ONLINE</span>
          <span>LOCATION: NAIROBI CBD</span>
          <span>AVG RESPONSE: 3 MINS</span>
        </div>
      </div>

      {/* VS Code File Tabs */}
      <div className="flex items-center overflow-x-auto scrollbar-none bg-[#0D0D0D]">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onPageChange(tab.id)}
              className={`px-4 py-2 border-r border-[#222220] flex items-center space-x-2 transition-colors cursor-pointer text-[12px] font-mono tracking-tight whitespace-nowrap ${
                isActive
                  ? 'bg-[#181818] text-[#F7F7F5] border-t-2 border-t-[#E31B23] font-bold'
                  : 'text-[#7A7A76] hover:bg-[#121212] hover:text-[#F7F7F5]'
              }`}
            >
              <span className={isActive ? 'text-[#E31B23]' : 'text-[#555]'}>TS</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
        <div className="ml-auto px-4 text-[11px] text-[#7A7A76] hidden lg:block font-mono">
          UTF-8 | TypeScript 5.8 | Kenya eCitizen Gateway
        </div>
      </div>
    </div>
  );
};
