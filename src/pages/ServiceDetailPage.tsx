import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';

interface ServiceDetailPageProps {
  slug: string;
  onPageChange: (page: string, serviceSlug?: string) => void;
  onOpenOrderModal: (serviceSlug?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onPageChange,
  onOpenOrderModal,
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];

  return (
    <div className="w-full bg-[#0D0D0D] text-[#F7F7F5] min-h-screen py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* BREADCRUMB / BACK LINK */}
        <div>
          <button
            onClick={() => onPageChange('services')}
            className="font-mono text-xs uppercase tracking-wider text-[#E31B23] font-bold hover:underline cursor-pointer flex items-center space-x-2"
          >
            <span>← BACK TO ALL SERVICES</span>
          </button>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="border-b-4 border-[#F7F7F5] pb-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase bg-[#E31B23] text-[#F7F7F5] px-3 py-1 font-bold">
              {service.categoryName}
            </span>
            <div className="flex items-center space-x-4 font-mono text-xs">
              <span className="text-[#7A7A76]">TURNAROUND:</span>
              <span className="bg-[#181818] border border-[#333330] text-[#F7F7F5] px-3 py-1 font-bold">
                {service.turnaroundTime}
              </span>
            </div>
          </div>

          <h1 className="hero-statement text-[#F7F7F5]">{service.title}</h1>

          <p className="font-mono text-base md:text-lg text-[#7A7A76] max-w-4xl leading-relaxed uppercase">
            {service.fullDesc}
          </p>

          <div className="flex flex-wrap items-baseline gap-6 pt-4 border-t border-[#222220]">
            <div>
              <span className="font-mono text-xs text-[#7A7A76] uppercase block">
                CYBER SERVICE FEE:
              </span>
              <span className="font-display text-4xl text-[#E31B23] font-bold">
                KES {service.priceKes}
              </span>
            </div>
            {service.priceNote && (
              <span className="font-mono text-xs text-[#7A7A76] uppercase">
                * {service.priceNote}
              </span>
            )}
            {service.officialPortal && (
              <div className="ml-auto font-mono text-xs text-[#7A7A76]">
                PORTAL: <span className="text-[#F7F7F5] font-bold">{service.officialPortal}</span>
              </div>
            )}
          </div>
        </div>

        {/* TWO COLUMN CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* LEFT 2 COLS: REQUIRED DOCS & PROCESS STEPS */}
          <div className="lg:col-span-2 space-y-12">
            {/* REQUIRED DOCUMENTS CHECKLIST */}
            <div className="bg-[#181818] border-2 border-[#222220] p-8 space-y-6">
              <span className="font-mono text-xs uppercase text-[#E31B23] font-bold block">
                DOCUMENTATION CHECKLIST
              </span>
              <h2 className="font-display text-3xl uppercase text-[#F7F7F5]">
                REQUIRED DOCUMENTS & INFORMATION
              </h2>
              <div className="w-full h-1 bg-[#222220]"></div>

              <ul className="space-y-4 font-mono text-xs uppercase text-[#F7F7F5]">
                {service.requiredDocuments.map((doc, idx) => (
                  <li
                    key={idx}
                    className="flex items-start space-x-3 bg-[#0D0D0D] p-4 border border-[#222220]"
                  >
                    <span className="text-[#E31B23] font-black font-display text-lg">
                      [{idx + 1}]
                    </span>
                    <span className="pt-0.5">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* STEP-BY-STEP PROCESS PRESENTED AS NUMBERED BLOCKS (BOLD NUMERALS IN ANTON) */}
            <div className="space-y-8">
              <div className="border-b-2 border-[#222220] pb-4">
                <span className="font-mono text-xs uppercase text-[#E31B23] font-bold block">
                  EXECUTION WORKFLOW
                </span>
                <h2 className="section-statement text-[#F7F7F5]">
                  HOW WE PROCESS THIS SERVICE.
                </h2>
              </div>

              <div className="space-y-6">
                {service.processSteps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="bg-[#181818] border-2 border-[#222220] p-8 flex flex-col md:flex-row gap-6 items-start"
                  >
                    {/* BOLD NUMERAL IN ANTON */}
                    <div className="font-display text-6xl md:text-8xl text-[#E31B23] leading-none shrink-0">
                      0{step.stepNumber}
                    </div>

                    <div className="space-y-2">
                      <h3 className="card-title-statement text-[#F7F7F5]">
                        {step.title}
                      </h3>
                      <p className="font-mono text-xs text-[#7A7A76] leading-relaxed uppercase">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COL: DIRECT CTA BOXES */}
          <div className="space-y-6">
            <div className="bg-[#E31B23] text-[#F7F7F5] border-2 border-[#E31B23] p-8 space-y-6 sticky top-28">
              <span className="font-mono text-xs font-bold uppercase bg-[#0D0D0D] px-2 py-1 inline-block">
                EXPRESS DISPATCH
              </span>

              <h3 className="font-display text-3xl uppercase leading-none">
                READY TO INITIATE YOUR APPLICATION?
              </h3>

              <p className="font-mono text-xs leading-relaxed uppercase">
                SUBMIT YOUR DETAILS ONLINE OR CHAT WITH A SENIOR CYBER AGENT TO HAVE YOUR SERVICE PROCESSED IMMEDIATELY.
              </p>

              <button
                onClick={() => onOpenOrderModal(service.slug)}
                className="w-full bg-[#0D0D0D] text-[#F7F7F5] font-display text-xl py-4 uppercase font-bold hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer text-center block"
              >
                START ONLINE APPLICATION
              </button>

              <div className="border-t border-[#F7F7F5]/30 pt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span>EST. SPEED:</span>
                  <span className="font-bold">{service.turnaroundTime}</span>
                </div>
                <div className="flex justify-between">
                  <span>DISPATCH:</span>
                  <span className="font-bold">WHATSAPP / EMAIL</span>
                </div>
              </div>
            </div>

            {/* NEED HELP BOX */}
            <div className="bg-[#181818] border-2 border-[#222220] p-6 space-y-3 font-mono text-xs text-[#7A7A76] uppercase">
              <span className="text-[#F7F7F5] font-bold block">
                HAVE A QUESTION ABOUT THIS SERVICE?
              </span>
              <p>
                Call or WhatsApp our Nairobi CBD shop desk directly at <span className="text-[#F7F7F5] font-bold">+254 113 910 480</span> for instant guidance on required documents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
