import React from 'react';

interface AboutPageProps {
  onPageChange: (page: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onPageChange, onOpenOrderModal }) => {
  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO COMPANY STORY STATEMENT BLOCK (BLACK #0D0D0D)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] text-[#F7F7F5] py-20 px-6 md:px-12 border-b-2 border-[#222220]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="border-l-4 border-[#E31B23] pl-4 py-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#F7F7F5] font-black block">
              ABOUT FLEXFLARES CYBER SERVICES • NAIROBI, KENYA
            </span>
          </div>

          <h1 className="hero-statement text-[#F7F7F5]">
            BUILT TO ELIMINATE BUREAUCRACY.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 border-t border-[#222220] font-mono text-sm text-[#A0A09C] leading-relaxed">
            <p className="text-[#F7F7F5]">
              FlexFlares Cyber Services was founded with one single mandate: to provide Kenyans and local businesses with uncompromisingly fast, accurate, and reliable access to eCitizen government portals and digital ICT support services.
            </p>
            <p>
              We operate an ultra-efficient dual desk system — a high-speed physical cyber hub located on Kimathi Street in Nairobi CBD, combined with a nationwide 24/7 online WhatsApp processing engine serving clients across all 47 counties and diaspora.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST METRICS AS OVERSIZED NUMERALS (ANTON) (WHITE #F7F7F5)
          ========================================================================= */}
      <section className="bg-[#F7F7F5] text-[#0D0D0D] py-24 px-6 md:px-12 border-b-2 border-[#0D0D0D]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="border-b-4 border-[#0D0D0D] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#6B6B66] font-bold block mb-2">
              01 // PERFORMANCE PROOF
            </span>
            <h2 className="section-statement text-[#0D0D0D]">
              TRUST METRICS IN NUMBERS.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-l-4 border-[#0D0D0D] pl-6 py-2">
              <span className="font-display text-7xl md:text-8xl text-[#0D0D0D] block leading-none">
                15K+
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#E31B23] tracking-widest block mt-2">
                PROCESSED APPLICATIONS
              </span>
              <p className="font-mono text-[11px] text-[#6B6B66] uppercase mt-1">
                KRA PINs, TAX RETURNS, PASSPORTS & DLs ISSUED.
              </p>
            </div>

            <div className="border-l-4 border-[#0D0D0D] pl-6 py-2">
              <span className="font-display text-7xl md:text-8xl text-[#0D0D0D] block leading-none">
                99.8%
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#E31B23] tracking-widest block mt-2">
                FIRST-TIME ACCURACY
              </span>
              <p className="font-mono text-[11px] text-[#6B6B66] uppercase mt-1">
                RIGOROUS VERIFICATION BEFORE PORTAL SUBMISSION.
              </p>
            </div>

            <div className="border-l-4 border-[#0D0D0D] pl-6 py-2">
              <span className="font-display text-7xl md:text-8xl text-[#0D0D0D] block leading-none">
                10 MIN
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#E31B23] tracking-widest block mt-2">
                AVERAGE SPEED
              </span>
              <p className="font-mono text-[11px] text-[#6B6B66] uppercase mt-1">
                RAPID TURNAROUND ON STANDARD ECITIZEN TASKS.
              </p>
            </div>

            <div className="border-l-4 border-[#0D0D0D] pl-6 py-2">
              <span className="font-display text-7xl md:text-8xl text-[#0D0D0D] block leading-none">
                24/7
              </span>
              <span className="font-mono text-xs uppercase font-bold text-[#E31B23] tracking-widest block mt-2">
                WHATSAPP DESK
              </span>
              <p className="font-mono text-[11px] text-[#6B6B66] uppercase mt-1">
                CONTINUOUS APPLICATION DISPATCH & ASSISTANCE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: BUSINESS HOURS & LOCATION TABLE WITH VS CODE THEMED HEADER (BLACK #0D0D0D)
          ========================================================================= */}
      <section className="bg-[#0D0D0D] text-[#F7F7F5] py-24 px-6 md:px-12 border-b-2 border-[#222220]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="border-b-2 border-[#222220] pb-6">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block mb-2">
              02 // OPERATIONAL SCHEDULE & SHOP LOCATION
            </span>
            <h2 className="section-statement text-[#F7F7F5]">
              WHEN & WHERE TO FIND US.
            </h2>
          </div>

          {/* VS CODE CODE EDITOR CONTAINER STYLE TABLE */}
          <div className="border-2 border-[#333330] bg-[#181818] overflow-hidden font-mono text-xs">
            {/* VS Code Window Control Header */}
            <div className="bg-[#0D0D0D] px-4 py-2 border-b border-[#333330] flex items-center justify-between text-[#7A7A76]">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 bg-[#E31B23] inline-block"></span>
                <span className="w-3 h-3 bg-[#555] inline-block"></span>
                <span className="w-3 h-3 bg-[#888] inline-block"></span>
                <span className="ml-2 font-bold text-[#F7F7F5] uppercase">
                  operating_hours_matrix.json — VS CODE EDITOR
                </span>
              </div>
              <span className="text-[10px] text-[#E31B23] font-bold uppercase">
                STATUS: ACCEPTING ONLINE ORDERS
              </span>
            </div>

            {/* TABLE */}
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#333330] text-[#E31B23]">
                    <th className="py-3 px-4 font-bold uppercase">DAY OF THE WEEK</th>
                    <th className="py-3 px-4 font-bold uppercase">PHYSICAL SHOP (CBD)</th>
                    <th className="py-3 px-4 font-bold uppercase">ONLINE WHATSAPP DESK</th>
                    <th className="py-3 px-4 font-bold uppercase">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222220] text-[#F7F7F5]">
                  <tr>
                    <td className="py-4 px-4 font-bold">MONDAY - FRIDAY</td>
                    <td className="py-4 px-4">7:00 AM - 8:00 PM</td>
                    <td className="py-4 px-4 text-[#E31B23] font-bold">24 HOURS OPEN</td>
                    <td className="py-4 px-4 text-green-400 font-bold">[FULL CAPACITY]</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">SATURDAY</td>
                    <td className="py-4 px-4">8:00 AM - 7:00 PM</td>
                    <td className="py-4 px-4 text-[#E31B23] font-bold">24 HOURS OPEN</td>
                    <td className="py-4 px-4 text-green-400 font-bold">[FULL CAPACITY]</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold">SUNDAY</td>
                    <td className="py-4 px-4 text-[#7A7A76]">CLOSED (APPOINTMENT ONLY)</td>
                    <td className="py-4 px-4 text-[#E31B23] font-bold">8:00 AM - 10:00 PM</td>
                    <td className="py-4 px-4 text-yellow-400 font-bold">[ONLINE DESK ONLY]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* PHYSICAL LOCATION DETAILS & MAP CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="bg-[#181818] border-2 border-[#222220] p-8 space-y-4">
              <span className="font-mono text-xs uppercase text-[#E31B23] font-bold block">
                NAIROBI CBD SHOP
              </span>
              <h3 className="card-title-statement text-[#F7F7F5]">
                KIMATHI STREET HUB
              </h3>
              <p className="font-mono text-xs text-[#7A7A76] uppercase leading-relaxed">
                OPPOSITE HUDUMA CENTRE, NEAR NATION CENTRE. HIGH-SPEED SCANNING, BULK COLOR PRINTING, THESIS TYPING, AND IN-PERSON ECITIZEN ADVISORY.
              </p>
              <div className="pt-2 text-xs font-mono text-[#F7F7F5] font-bold">
                TEL: +254 113 910 480
              </div>
            </div>

            <div className="bg-[#E31B23] text-[#F7F7F5] border-2 border-[#E31B23] p-8 space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs uppercase bg-[#0D0D0D] px-2 py-1 inline-block font-bold">
                  EXPRESS SERVICE
                </span>
                <h3 className="card-title-statement text-[#F7F7F5] mt-2">
                  NEED URGENT ASSISTANCE RIGHT NOW?
                </h3>
                <p className="font-mono text-xs text-[#F7F7F5] uppercase leading-relaxed">
                  DIRECT SUBMISSION VIA OUR ONLINE GATEWAY GUARANTEES IMMEDIATE QUEUE ASSIGNMENT TO OUR ON-DUTY AGENTS.
                </p>
              </div>

              <button
                onClick={() => onOpenOrderModal()}
                className="w-full bg-[#0D0D0D] text-[#F7F7F5] font-display text-lg py-3 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer mt-4"
              >
                DISPATCH SERVICE REQUEST
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
