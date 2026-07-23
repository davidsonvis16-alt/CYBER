import React, { useState } from 'react';
import { SERVICES_DATA, TESTIMONIALS, FAQS, MOCK_TRACKING_SAMPLES } from '../data/servicesData';
import { ServiceCategory } from '../types';

interface HomePageProps {
  onPageChange: (page: string, serviceSlug?: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onPageChange, onOpenOrderModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [trackingInput, setTrackingInput] = useState('');
  const [trackingResult, setTrackingResult] = useState<typeof MOCK_TRACKING_SAMPLES['FLX-8829'] | null>(null);
  const [trackingError, setTrackingError] = useState(false);

  const categories: { key: ServiceCategory; title: string; count: number; desc: string }[] = [
    {
      key: 'government',
      title: 'GOVERNMENT & ECITIZEN',
      count: 7,
      desc: 'KRA PIN, iTax Returns, NTSA Smart DL, Passport Booking, HELB, KUCCPS, SHA & NSSF Registration.',
    },
    {
      key: 'business',
      title: 'BUSINESS & LEGAL REGISTRATION',
      count: 3,
      desc: 'Business Name Registration (BN2), Limited Company Setup, CR12 Official Company Search.',
    },
    {
      key: 'printing',
      title: 'PRINTING, TYPING & SCANNING',
      count: 2,
      desc: 'Commercial Laser Printing, Optical OCR Scanning, Professional Thesis & Contract Typing.',
    },
    {
      key: 'design',
      title: 'CREATIVE & CV BRANDING',
      count: 2,
      desc: 'ATS-Compliant Resume Restructuring, Vector Logo Design, Marketing Posters & Branding.',
    },
    {
      key: 'ict',
      title: 'ICT & TECH SUPPORT',
      count: 2,
      desc: 'Windows OS Re-installation, System Optimization, Antivirus Purge & Data Recovery.',
    },
  ];

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCode = trackingInput.trim().toUpperCase();
    if (MOCK_TRACKING_SAMPLES[cleanCode]) {
      setTrackingResult(MOCK_TRACKING_SAMPLES[cleanCode]);
      setTrackingError(false);
    } else {
      setTrackingResult(null);
      setTrackingError(true);
    }
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO SECTION (PURE BLACK #0D0D0D)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] text-[#F7F7F5] min-h-[90vh] flex flex-col justify-between py-16 px-6 md:px-12 border-b-2 border-[#222220]">
        <div className="max-w-7xl mx-auto w-full space-y-8 my-auto">
          {/* TAGLINE OVERHEAD STATEMENT */}
          <div className="border-l-4 border-[#E31B23] pl-4 py-1">
            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#F7F7F5] font-black block">
              KENYA ECITIZEN & ICT SERVICE ENGINE • ZERO BS. NO QUEUES.
            </span>
          </div>

          {/* GIANT PUNCHY HEADLINE */}
          <h1 className="hero-statement tracking-normal text-[#F7F7F5] uppercase max-w-6xl">
            GET YOUR KRA, NTSA & PASSPORT FILED IN 10 MINUTES.
          </h1>

          {/* BLUNT DECLARATIVE STATEMENT */}
          <p className="font-mono text-base md:text-xl text-[#A0A09C] max-w-3xl leading-relaxed">
            We eliminate government red tape. Instant eCitizen applications, business registration, professional CV writing & ICT support. Fast • Reliable • Affordable • Professional.
          </p>

          {/* ACTION BUTTONS */}
          <div className="pt-4 flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => onOpenOrderModal()}
              className="bg-[#E31B23] text-[#F7F7F5] border-2 border-[#E31B23] px-10 py-5 font-display text-2xl uppercase tracking-wider font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer text-center"
            >
              SUBMIT SERVICE REQUEST NOW
            </button>
            <button
              onClick={() => onPageChange('services')}
              className="bg-[#F7F7F5] text-[#0D0D0D] border-2 border-[#F7F7F5] px-10 py-5 font-display text-2xl uppercase tracking-wider font-bold hover:bg-[#0D0D0D] hover:text-[#F7F7F5] transition-colors cursor-pointer text-center"
            >
              EXPLORE ALL 18+ SERVICES
            </button>
          </div>
        </div>

        {/* BOTTOM METRICS BAR */}
        <div className="max-w-7xl mx-auto w-full pt-16 border-t border-[#222220] grid grid-cols-2 md:grid-cols-4 gap-6 font-mono text-xs">
          <div>
            <span className="text-[#7A7A76] block uppercase">AVERAGE SPEED</span>
            <span className="font-display text-3xl text-[#F7F7F5] block">10 MINS</span>
          </div>
          <div>
            <span className="text-[#7A7A76] block uppercase">COMPLETED REQUESTS</span>
            <span className="font-display text-3xl text-[#F7F7F5] block">---</span>
          </div>
          <div>
            <span className="text-[#7A7A76] block uppercase">ACCURACY RATE</span>
            <span className="font-display text-3xl text-[#E31B23] block">--%</span>
          </div>
          <div>
            <span className="text-[#7A7A76] block uppercase">WHATSAPP DESK</span>
            <span className="font-display text-3xl text-[#F7F7F5] block">24/7 LIVE</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: WHY CHOOSE US (PURE WHITE #F7F7F5)
          ========================================================================= */}
      <section className="bg-[#F7F7F5] text-[#0D0D0D] py-24 px-6 md:px-12 border-b-2 border-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b-4 border-[#0D0D0D] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B66] font-bold block mb-2">
              01 // CORE COMPETENCIES
            </span>
            <h2 className="section-statement text-[#0D0D0D]">
              WHY FLEXFLARES OUTPERFORMS STANDARD CYBER SHOPS.
            </h2>
          </div>

          {/* 4 ASYMMETRIC BLOCKS WITH THICK UNDERLINE DIVIDERS INSTEAD OF ICONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-4">
              <span className="font-mono text-sm font-black text-[#E31B23] block">
                01 // INSTANT EXECUTION
              </span>
              <h3 className="card-title-statement text-[#0D0D0D]">
                NO WAITING IN QUEUES
              </h3>
              <div className="w-full h-1 bg-[#0D0D0D]"></div>
              <p className="font-mono text-sm text-[#6B6B66] leading-relaxed uppercase">
                DIRECT HIGH-SPEED SYSTEM INTEGRATION WITH ECITIZEN, ITAX KRA, AND NTSA TIMS PORTALS. YOUR DOCUMENTATION IS LODGED IN REAL TIME.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-sm font-black text-[#E31B23] block">
                02 // 100% ACCURACY
              </span>
              <h3 className="card-title-statement text-[#0D0D0D]">
                ZERO APPLICATION REJECTIONS
              </h3>
              <div className="w-full h-1 bg-[#0D0D0D]"></div>
              <p className="font-mono text-sm text-[#6B6B66] leading-relaxed uppercase">
                EVERY PASSPORT DOSSIER, KRA RETURN, OR BUSINESS REGISTRATION FORM IS VERIFIED BY CERTIFIED ICT SPECIALISTS BEFORE SUBMISSION.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-sm font-black text-[#E31B23] block">
                03 // NATIONWIDE ONLINE DESK
              </span>
              <h3 className="card-title-statement text-[#0D0D0D]">
                SERVED FROM ANYWHERE IN KENYA
              </h3>
              <div className="w-full h-1 bg-[#0D0D0D]"></div>
              <p className="font-mono text-sm text-[#6B6B66] leading-relaxed uppercase">
                WHETHER YOU ARE IN NAIROBI CBD, MOMBASA, KISUMU, ELDORET, OR DIASPORA — TRANSMIT YOUR DETAILS VIA WHATSAPP AND RECEIVE OFFICIAL PDF CERTIFICATES INSTANTLY.
              </p>
            </div>

            <div className="space-y-4">
              <span className="font-mono text-sm font-black text-[#E31B23] block">
                04 // TRANSPARENT PRICING
              </span>
              <h3 className="card-title-statement text-[#0D0D0D]">
                FIXED RATES. NO HIDDEN FEES
              </h3>
              <div className="w-full h-1 bg-[#0D0D0D]"></div>
              <p className="font-mono text-sm text-[#6B6B66] leading-relaxed uppercase">
                CLEAR TRANSPARENT PRICING FROM KES 250. WE SEPARATE OUR CYBER PROCESSING FEE FROM STATUTORY GOVERNMENT PORTAL CHARGES.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SERVICES CATALOG TILES (PURE BLACK #0D0D0D)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] text-[#F7F7F5] py-24 px-6 md:px-12 border-b-2 border-[#222220]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#222220] pb-8 gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block mb-2">
                02 // SERVICE CATEGORIES
              </span>
              <h2 className="section-statement text-[#F7F7F5]">
                SELECT YOUR SERVICE CATEGORY.
              </h2>
            </div>
            <button
              onClick={() => onPageChange('services')}
              className="bg-[#F7F7F5] text-[#0D0D0D] font-display text-lg px-8 py-3 uppercase font-bold hover:bg-[#E31B23] hover:text-[#F7F7F5] transition-colors cursor-pointer self-start md:self-auto"
            >
              VIEW FULL CATALOG →
            </button>
          </div>

          {/* BOLD COLOR-BLOCKED TILES (SOLID BLOCKS WITH WHITE TEXT) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <div
                key={cat.key}
                onClick={() => onPageChange('services')}
                className="bg-[#181818] border-2 border-[#333330] p-8 flex flex-col justify-between hover:border-[#F7F7F5] transition-colors cursor-pointer group relative overflow-hidden"
              >
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-[#333330] pb-4">
                    <span className="font-mono text-xs font-bold text-[#E31B23]">
                      0{index + 1} // CATEGORY
                    </span>
                    <span className="font-mono text-xs font-bold bg-[#222220] text-[#F7F7F5] px-2 py-1">
                      {cat.count} SERVICES
                    </span>
                  </div>

                  <h3 className="card-title-statement text-[#F7F7F5] group-hover:text-[#E31B23] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="font-mono text-xs text-[#7A7A76] leading-relaxed uppercase">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-8 flex justify-between items-center border-t border-[#222220] mt-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#F7F7F5]">
                    BROWSE CATEGORY
                  </span>
                  <span className="font-display text-xl text-[#E31B23] group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            ))}

            {/* SPECIAL PROMO TILE */}
            <div className="bg-[#E31B23] text-[#F7F7F5] border-2 border-[#E31B23] p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <span className="font-mono text-xs font-bold bg-[#0D0D0D] text-[#F7F7F5] px-2 py-1 inline-block">
                  EXPRESS WHATSAPP DESK
                </span>
                <h3 className="card-title-statement text-[#F7F7F5]">
                  NEED CUSTOM ICT SUPPORT OR URGENT FILING?
                </h3>
                <p className="font-mono text-xs text-[#F7F7F5] leading-relaxed uppercase">
                  MESSAGE OUR SENIOR CYBER AGENTS DIRECTLY FOR CUSTOM QUOTES, HEAVY DOCUMENT PROCESSING, OR EMERGENCY DEADLINE SUBMISSIONS.
                </p>
              </div>

              <button
                onClick={() => onOpenOrderModal()}
                className="mt-8 bg-[#0D0D0D] text-[#F7F7F5] font-display text-lg py-4 px-6 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer w-full text-center"
              >
                OPEN DIRECT AGENT CHAT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TESTIMONIALS (PURE WHITE #F7F7F5)
          ========================================================================= */}
      <section className="bg-[#F7F7F5] text-[#0D0D0D] py-24 px-6 md:px-12 border-b-2 border-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b-4 border-[#0D0D0D] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B66] font-bold block mb-2">
              03 // VERIFIED REVIEWS
            </span>
            <h2 className="section-statement text-[#0D0D0D]">
              REAL KENYANS. ZERO DELAYS.
            </h2>
          </div>

          {/* LARGE BOLD PULL QUOTES IN ANTON WITH THICK DIVIDER RULES */}
          <div className="space-y-16">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.id} className="space-y-6">
                <blockquote className="font-display text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-[#0D0D0D] leading-snug">
                  "{t.quote}"
                </blockquote>

                <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase">
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-[#E31B23] text-sm">
                      {t.clientName}
                    </span>
                    <span className="text-[#6B6B66]">// {t.clientRole}</span>
                    <span className="text-[#6B6B66]">({t.location})</span>
                  </div>

                  <span className="bg-[#0D0D0D] text-[#F7F7F5] px-3 py-1 font-bold">
                    SERVICE: {t.serviceUsed}
                  </span>
                </div>

                {i < TESTIMONIALS.length - 1 && (
                  <div className="w-full h-1 bg-[#0D0D0D] mt-12"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FAQ (PURE BLACK #0D0D0D)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] text-[#F7F7F5] py-24 px-6 md:px-12 border-b-2 border-[#222220]">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="border-b-2 border-[#222220] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block mb-2">
              04 // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="section-statement text-[#F7F7F5]">
              CLEAR ANSWERS. NO GUESSWORK.
            </h2>
          </div>

          {/* FAQ ITEMS WITH THIN WHITE DIVIDERS AND BOLD SANS + / - */}
          <div className="space-y-4">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border-b border-[#333330] pb-6 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center text-left py-4 cursor-pointer group"
                  >
                    <span className="font-display text-xl sm:text-2xl md:text-3xl text-[#F7F7F5] group-hover:text-[#E31B23] transition-colors uppercase pr-4">
                      {faq.question}
                    </span>
                    <span className="font-display text-3xl font-black text-[#E31B23] px-3 py-1 border border-[#333330] bg-[#181818] min-w-[44px] text-center">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-2 pb-4 font-mono text-sm text-[#7A7A76] leading-relaxed uppercase border-l-2 border-[#E31B23] pl-4 mt-2">
                      <p>{faq.answer}</p>
                      <span className="inline-block mt-3 text-[10px] bg-[#181818] text-[#E31B23] px-2 py-1 font-bold">
                        CATEGORY: {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: REAL-TIME APPLICATION TRACKER & FEE CHECKER (PURE WHITE #F7F7F5)
          ========================================================================= */}
      <section className="bg-[#F7F7F5] text-[#0D0D0D] py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="border-b-4 border-[#0D0D0D] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B66] font-bold block mb-2">
              05 // REAL-TIME SYSTEM ENGINE
            </span>
            <h2 className="section-statement text-[#0D0D0D]">
              TRACK APPLICATION STATUS OR CALCULATE FEES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* TRACKING BOX */}
            <div className="bg-[#0D0D0D] text-[#F7F7F5] p-8 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#E31B23] font-bold block uppercase mb-1">
                  LIVE STATUS TRACKER
                </span>
                <h3 className="font-display text-2xl uppercase">
                  ENTER FLEXFLARES REF CODE
                </h3>
                <p className="font-mono text-xs text-[#7A7A76] uppercase mt-1">
                  Try sample codes: <span className="text-[#F7F7F5] font-bold">FLX-8829</span>, <span className="text-[#F7F7F5] font-bold">FLX-9012</span>, or <span className="text-[#F7F7F5] font-bold">FLX-7741</span>.
                </p>
              </div>

              <form onSubmit={handleTrackSearch} className="space-y-4">
                <input
                  type="text"
                  placeholder="E.G. FLX-8829"
                  value={trackingInput}
                  onChange={(e) => setTrackingInput(e.target.value)}
                  className="w-full bg-[#181818] border border-[#333330] text-[#F7F7F5] p-4 font-mono text-sm uppercase outline-none focus:border-[#E31B23]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#E31B23] text-[#F7F7F5] font-display text-lg py-3 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] cursor-pointer"
                >
                  INSPECT STATUS
                </button>
              </form>

              {trackingResult && (
                <div className="bg-[#181818] border border-[#E31B23] p-4 space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-[#E31B23] font-bold">
                    <span>REF: {trackingResult.trackingId}</span>
                    <span>[{trackingResult.status}]</span>
                  </div>
                  <div className="text-[#F7F7F5] font-bold">{trackingResult.serviceName}</div>
                  <div className="text-[#7A7A76]">CLIENT: {trackingResult.clientName}</div>
                  <div className="w-full bg-[#333330] h-2 mt-2">
                    <div
                      className="bg-[#E31B23] h-2"
                      style={{ width: `${trackingResult.progressPercent}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] text-[#7A7A76] pt-1">
                    NOTE: {trackingResult.notes}
                  </div>
                </div>
              )}

              {trackingError && (
                <div className="bg-[#181818] border border-red-500 p-4 font-mono text-xs text-red-400">
                  CODE NOT FOUND. PLEASE CHECK YOUR REFERENCE CODE OR CONTACT WHATSAPP DESK.
                </div>
              )}
            </div>

            {/* INSTANT FEE ESTIMATOR PREVIEW */}
            <div className="border-2 border-[#0D0D0D] p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-[#E31B23] font-bold block uppercase mb-1">
                  TRANSPARENT FEE MATRIX
                </span>
                <h3 className="font-display text-2xl uppercase text-[#0D0D0D]">
                  POPULAR SERVICE RATES
                </h3>
                <ul className="mt-4 space-y-3 font-mono text-xs uppercase">
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>KRA PIN CREATION / RETRIEVAL</span>
                    <span className="font-bold text-[#E31B23]">KES 300</span>
                  </li>
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>KRA TAX RETURNS FILING</span>
                    <span className="font-bold text-[#E31B23]">KES 250</span>
                  </li>
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>NTSA SMART DL APPOINTMENT</span>
                    <span className="font-bold text-[#E31B23]">KES 500</span>
                  </li>
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>ECITIZEN PASSPORT DOSSIER</span>
                    <span className="font-bold text-[#E31B23]">KES 1,000</span>
                  </li>
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>BUSINESS NAME REGISTRATION (BN2)</span>
                    <span className="font-bold text-[#E31B23]">KES 1,500</span>
                  </li>
                  <li className="flex justify-between border-b border-[#0D0D0D] pb-2">
                    <span>PROFESSIONAL ATS CV RESTRUCTURE</span>
                    <span className="font-bold text-[#E31B23]">KES 800</span>
                  </li>
                </ul>
              </div>

              <button
                onClick={() => onOpenOrderModal()}
                className="w-full bg-[#0D0D0D] text-[#F7F7F5] font-display text-lg py-4 uppercase font-bold hover:bg-[#E31B23] transition-colors cursor-pointer"
              >
                REQUEST CUSTOM ESTIMATE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
