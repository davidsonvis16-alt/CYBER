import React, { useState } from 'react';
import { MOCK_TRACKING_SAMPLES, SERVICES_DATA } from '../data/servicesData';
import { OrderStatus } from '../types';

interface TrackerPageProps {
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const TrackerPage: React.FC<TrackerPageProps> = ({ onOpenOrderModal }) => {
  const [queryCode, setQueryCode] = useState('FLX-8829');
  const [activeResult, setActiveResult] = useState<OrderStatus | null>(
    MOCK_TRACKING_SAMPLES['FLX-8829']
  );
  const [searchAttempted, setSearchAttempted] = useState(true);

  // Fee Calculator State
  const [selectedServiceSlug, setSelectedServiceSlug] = useState(SERVICES_DATA[0].slug);
  const [copyCount, setCopyCount] = useState(1);

  const selectedService = SERVICES_DATA.find((s) => s.slug === selectedServiceSlug) || SERVICES_DATA[0];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = queryCode.trim().toUpperCase();
    if (MOCK_TRACKING_SAMPLES[clean]) {
      setActiveResult(MOCK_TRACKING_SAMPLES[clean]);
    } else {
      setActiveResult(null);
    }
    setSearchAttempted(true);
  };

  const calculatedTotalFee = selectedService.priceKes * (selectedService.category === 'printing' ? copyCount : 1);

  return (
    <div className="w-full bg-[#0D0D0D] text-[#F7F7F5] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* HEADER */}
        <div className="border-b-2 border-[#222220] pb-8 space-y-4">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block">
            FLEXFLARES SYSTEM TELEMETRY
          </span>
          <h1 className="hero-statement text-[#F7F7F5]">
            REAL-TIME TRACKER & CALCULATOR.
          </h1>
          <p className="font-mono text-sm text-[#7A7A76] max-w-2xl uppercase">
            ENTER YOUR FLEXFLARES REFERENCE NUMBER TO INSPECT APPLICATION MILESTONES OR COMPUTE ESTIMATED SERVICE FEES.
          </p>
        </div>

        {/* TWO SECTION GRID: STATUS SEARCH & FEE CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* TRACKER PANEL */}
          <div className="bg-[#181818] border-2 border-[#333330] p-8 space-y-8">
            <div className="border-b border-[#333330] pb-4">
              <span className="font-mono text-xs text-[#E31B23] font-bold uppercase block">
                01 // APPLICATION STATUS INSPECTOR
              </span>
              <h2 className="font-display text-3xl uppercase text-[#F7F7F5]">
                LOOKUP REFERENCE CODE
              </h2>
            </div>

            <form onSubmit={handleSearch} className="space-y-4">
              <div>
                <label className="block font-mono text-xs uppercase text-[#7A7A76] font-bold mb-1">
                  ENTER REF CODE (E.G. FLX-8829, FLX-9012, FLX-7741)
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={queryCode}
                    onChange={(e) => setQueryCode(e.target.value)}
                    placeholder="E.G. FLX-8829"
                    className="w-full bg-[#0D0D0D] border border-[#333330] text-[#F7F7F5] p-4 font-mono text-base uppercase outline-none focus:border-[#E31B23]"
                  />
                  <button
                    type="submit"
                    className="bg-[#E31B23] text-[#F7F7F5] font-display text-lg px-6 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] cursor-pointer shrink-0"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>

            {/* TRACKING RESULT DISPLAY */}
            {activeResult ? (
              <div className="bg-[#0D0D0D] border-2 border-[#E31B23] p-6 space-y-6 font-mono text-xs">
                <div className="flex justify-between items-start border-b border-[#222220] pb-4">
                  <div>
                    <span className="text-[#7A7A76] block text-[10px] uppercase">
                      REFERENCE CODE
                    </span>
                    <span className="font-display text-2xl text-[#E31B23]">
                      {activeResult.trackingId}
                    </span>
                  </div>
                  <span className="bg-[#E31B23] text-[#F7F7F5] px-3 py-1 font-bold text-xs">
                    {activeResult.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-[#F7F7F5] font-bold text-sm">
                    {activeResult.serviceName}
                  </div>
                  <div className="text-[#7A7A76]">CLIENT: {activeResult.clientName}</div>
                  <div className="text-[#7A7A76]">
                    LAST SYSTEM LOG: {activeResult.lastUpdated}
                  </div>
                </div>

                {/* PROGRESS BAR */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#7A7A76]">PROGRESS COMPLETION</span>
                    <span className="text-[#E31B23] font-bold">
                      {activeResult.progressPercent}%
                    </span>
                  </div>
                  <div className="w-full bg-[#222220] h-3">
                    <div
                      className="bg-[#E31B23] h-3 transition-all duration-300"
                      style={{ width: `${activeResult.progressPercent}%` }}
                    ></div>
                  </div>
                </div>

                {/* NOTES BOX */}
                <div className="bg-[#181818] p-4 border border-[#333330] space-y-1">
                  <span className="text-[#E31B23] font-bold uppercase block text-[10px]">
                    STATUS DISPATCH REMARK:
                  </span>
                  <p className="text-[#F7F7F5]">{activeResult.notes}</p>
                </div>
              </div>
            ) : searchAttempted ? (
              <div className="bg-[#0D0D0D] border border-red-500 p-6 font-mono text-xs text-red-400 space-y-2">
                <span className="font-bold text-sm block">REFERENCE CODE NOT FOUND</span>
                <p>
                  No active application matches "{queryCode}". Try testing sample codes <span className="text-[#F7F7F5] font-bold">FLX-8829</span> or <span className="text-[#F7F7F5] font-bold">FLX-9012</span>, or submit a new application.
                </p>
              </div>
            ) : null}
          </div>

          {/* FEE CALCULATOR PANEL */}
          <div className="bg-[#181818] border-2 border-[#333330] p-8 space-y-8">
            <div className="border-b border-[#333330] pb-4">
              <span className="font-mono text-xs text-[#E31B23] font-bold uppercase block">
                02 // SERVICE COST ESTIMATOR
              </span>
              <h2 className="font-display text-3xl uppercase text-[#F7F7F5]">
                FEE CALCULATOR
              </h2>
            </div>

            <div className="space-y-6 font-mono text-xs uppercase">
              <div>
                <label className="block text-[#7A7A76] font-bold mb-1">
                  SELECT SERVICE
                </label>
                <select
                  value={selectedServiceSlug}
                  onChange={(e) => setSelectedServiceSlug(e.target.value)}
                  className="w-full bg-[#0D0D0D] border border-[#333330] text-[#F7F7F5] p-3 text-xs outline-none focus:border-[#E31B23]"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.title} — KES {s.priceKes}
                    </option>
                  ))}
                </select>
              </div>

              {selectedService.category === 'printing' && (
                <div>
                  <label className="block text-[#7A7A76] font-bold mb-1">
                    ESTIMATED PAGE / COPY COUNT
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={copyCount}
                    onChange={(e) => setCopyCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-[#0D0D0D] border border-[#333330] text-[#F7F7F5] p-3 text-xs outline-none focus:border-[#E31B23]"
                  />
                </div>
              )}

              {/* ESTIMATED OUTPUT */}
              <div className="bg-[#0D0D0D] border-2 border-[#333330] p-6 space-y-4">
                <div className="flex justify-between border-b border-[#222220] pb-2">
                  <span className="text-[#7A7A76]">BASE SERVICE FEE:</span>
                  <span className="text-[#F7F7F5] font-bold">
                    KES {selectedService.priceKes}
                  </span>
                </div>

                <div className="flex justify-between border-b border-[#222220] pb-2">
                  <span className="text-[#7A7A76]">ESTIMATED TURNAROUND:</span>
                  <span className="text-[#F7F7F5] font-bold">
                    {selectedService.turnaroundTime}
                  </span>
                </div>

                <div className="flex justify-between text-lg pt-2">
                  <span className="font-bold text-[#F7F7F5]">ESTIMATED TOTAL:</span>
                  <span className="font-display text-3xl text-[#E31B23] font-bold">
                    KES {calculatedTotalFee}
                  </span>
                </div>
              </div>

              <button
                onClick={() => onOpenOrderModal(selectedService.slug)}
                className="w-full bg-[#E31B23] text-[#F7F7F5] font-display text-xl py-4 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer"
              >
                APPLY WITH THIS ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
