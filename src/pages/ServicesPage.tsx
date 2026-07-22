import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceCategory, ServiceItem } from '../types';

interface ServicesPageProps {
  onPageChange: (page: string, serviceSlug?: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onPageChange, onOpenOrderModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | 'all'>('all');

  const categories: { key: ServiceCategory | 'all'; label: string }[] = [
    { key: 'all', label: 'ALL SERVICES (18+)' },
    { key: 'government', label: 'GOVERNMENT & ECITIZEN' },
    { key: 'business', label: 'BUSINESS & LEGAL' },
    { key: 'printing', label: 'PRINTING & TYPING' },
    { key: 'design', label: 'CREATIVE & CV' },
    { key: 'ict', label: 'ICT & TECH SUPPORT' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full bg-[#0D0D0D] text-[#F7F7F5] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* PAGE HEADER */}
        <div className="border-b-2 border-[#222220] pb-8 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block">
            FLEXFLARES SYSTEM DIRECTORY // ALL 18+ SERVICES
          </span>
          <h1 className="hero-statement text-[#F7F7F5]">
            SYSTEM SERVICES CATALOG.
          </h1>
          <p className="font-mono text-sm text-[#7A7A76] max-w-2xl uppercase">
            SELECT ANY SERVICE TO VIEW REQUIRED DOCUMENTS, PROCESS TIMELINES, STATUTORY FEES, AND SUBMIT DIRECT EXPRESS APPLICATIONS.
          </p>
        </div>

        {/* INSTANT SEARCH BAR: FULL-WIDTH, SHARP-CORNERED, BOLD BORDER */}
        <div className="space-y-2">
          <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A76] font-bold">
            INSTANT SYSTEM SEARCH
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="SEARCH BY KEYWORD: E.G. 'KRA', 'PASSPORT', 'DL', 'CV', 'PRINTING', 'BUSINESS'..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181818] border-2 border-[#F7F7F5] text-[#F7F7F5] p-5 font-mono text-base uppercase outline-none focus:border-[#E31B23] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#F7F7F5] text-[#0D0D0D] font-mono text-xs px-3 py-1 font-bold hover:bg-[#E31B23] hover:text-[#F7F7F5]"
              >
                CLEAR X
              </button>
            )}
          </div>
        </div>

        {/* FILTER TOGGLES: UPPERCASE TEXT BUTTONS WITH THICK UNDERLINE (NO PILL BUTTONS) */}
        <div className="border-b-2 border-[#222220] pb-6 flex flex-wrap gap-8">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`font-mono text-sm font-bold uppercase tracking-wider transition-all cursor-pointer py-2 ${
                  isActive
                    ? 'border-b-4 border-[#E31B23] text-[#E31B23]'
                    : 'text-[#7A7A76] hover:text-[#F7F7F5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* RESULTS GRID */}
        {filteredServices.length === 0 ? (
          <div className="bg-[#181818] border-2 border-[#333330] p-12 text-center space-y-4">
            <span className="font-display text-3xl uppercase text-[#E31B23]">
              NO MATCHING SERVICES FOUND
            </span>
            <p className="font-mono text-xs text-[#7A7A76] uppercase">
              NO SYSTEM ITEM MATCHES YOUR QUERY "{searchQuery}". CONTACT OUR WHATSAPP DESK FOR CUSTOM UNLISTED ICT REQUESTS.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-[#F7F7F5] text-[#0D0D0D] font-display text-sm px-6 py-3 uppercase font-bold hover:bg-[#E31B23] hover:text-[#F7F7F5]"
            >
              RESET SEARCH FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-[#181818] border-2 border-[#222220] p-8 flex flex-col justify-between hover:border-[#F7F7F5] transition-colors relative group"
              >
                <div className="space-y-6">
                  {/* CARD HEADER */}
                  <div className="flex justify-between items-start border-b border-[#222220] pb-4">
                    <span className="font-mono text-[10px] uppercase font-bold text-[#E31B23]">
                      {service.categoryName}
                    </span>
                    <span className="font-mono text-[11px] font-bold bg-[#0D0D0D] text-[#F7F7F5] border border-[#333330] px-2 py-1">
                      {service.turnaroundTime}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="card-title-statement text-[#F7F7F5] group-hover:text-[#E31B23] transition-colors">
                    {service.title}
                  </h3>

                  {/* SHORT DESC */}
                  <p className="font-mono text-xs text-[#7A7A76] leading-relaxed uppercase">
                    {service.shortDesc}
                  </p>

                  {/* REQUIRED DOCS SUMMARY */}
                  <div className="bg-[#0D0D0D] p-3 border border-[#222220] space-y-1">
                    <span className="font-mono text-[10px] text-[#7A7A76] block uppercase font-bold">
                      REQUIRED DOCUMENTS ({service.requiredDocuments.length}):
                    </span>
                    <p className="font-mono text-[11px] text-[#F7F7F5] truncate">
                      • {service.requiredDocuments.join(', ')}
                    </p>
                  </div>
                </div>

                {/* CARD FOOTER */}
                <div className="pt-8 border-t border-[#222220] mt-8 flex flex-col space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-xs text-[#7A7A76] uppercase">
                      SERVICE FEE:
                    </span>
                    <span className="font-display text-2xl text-[#E31B23] font-bold">
                      KES {service.priceKes}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => onPageChange('service-detail', service.slug)}
                      className="bg-[#0D0D0D] text-[#F7F7F5] border border-[#333330] py-3 text-xs font-mono font-bold uppercase hover:border-[#F7F7F5] cursor-pointer"
                    >
                      DETAILS →
                    </button>

                    <button
                      onClick={() => onOpenOrderModal(service.slug)}
                      className="bg-[#E31B23] text-[#F7F7F5] py-3 text-xs font-mono font-bold uppercase hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer"
                    >
                      APPLY NOW
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
