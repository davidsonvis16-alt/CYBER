import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceSlug?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceSlug,
}) => {
  const initialService =
    SERVICES_DATA.find((s) => s.slug === preselectedServiceSlug) ||
    SERVICES_DATA[0];

  const [selectedService, setSelectedService] = useState<ServiceItem>(initialService);
  const [clientName, setClientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleServiceChange = (slug: string) => {
    const s = SERVICES_DATA.find((item) => item.slug === slug);
    if (s) setSelectedService(s);
  };

  const generateWhatsAppMessage = () => {
    const refCode = `FLX-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(refCode);

    const message = `*FLEXFLARES SERVICE REQUEST [${refCode}]*
------------------------------
*SERVICE:* ${selectedService.title}
*CLIENT NAME:* ${clientName || 'N/A'}
*PHONE:* ${phoneNumber || 'N/A'}
*ID / REG:* ${idNumber || 'N/A'}
*SERVICE FEE:* KES ${selectedService.priceKes}
*TURNAROUND:* ${selectedService.turnaroundTime}
*NOTES:* ${notes || 'None'}

Please initiate my application immediately.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/254113910480?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D0D0D]/90 backdrop-none">
      <div className="bg-[#0D0D0D] border-2 border-[#F7F7F5] w-full max-w-2xl text-[#F7F7F5] p-6 md:p-8 relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#F7F7F5] text-[#0D0D0D] font-mono text-xs font-bold px-3 py-1 hover:bg-[#E31B23] hover:text-[#F7F7F5] transition-colors cursor-pointer"
        >
          [CLOSE X]
        </button>

        <div className="border-b-2 border-[#F7F7F5] pb-4 mb-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#E31B23] font-bold block mb-1">
            EXPRESS APPLICATION GATEWAY
          </span>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight">
            SUBMIT SERVICE REQUEST
          </h2>
        </div>

        {submittedRef ? (
          <div className="space-y-6 py-4">
            <div className="bg-[#181818] border border-[#E31B23] p-6 text-center space-y-3">
              <span className="font-mono text-xs uppercase text-[#E31B23] font-bold block">
                REFERENCE CODE GENERATED
              </span>
              <span className="font-display text-5xl tracking-tight text-[#F7F7F5] block">
                {submittedRef}
              </span>
              <p className="text-sm font-mono text-[#7A7A76]">
                Your request has been prepared and WhatsApp dispatch triggered. Use this code to track real-time progress on our Status Tracker.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmittedRef(null);
                onClose();
              }}
              className="w-full bg-[#F7F7F5] text-[#0D0D0D] font-display text-lg py-3 uppercase font-bold hover:bg-[#E31B23] hover:text-[#F7F7F5] cursor-pointer"
            >
              RETURN TO SITE
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              generateWhatsAppMessage();
            }}
            className="space-y-5"
          >
            {/* SERVICE SELECTION */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-wider text-[#7A7A76] mb-1 font-bold">
                SELECT SERVICE *
              </label>
              <select
                value={selectedService.slug}
                onChange={(e) => handleServiceChange(e.target.value)}
                className="w-full bg-[#181818] border border-[#333330] text-[#F7F7F5] p-3 text-sm font-mono focus:border-[#E31B23] outline-none uppercase font-semibold"
              >
                {SERVICES_DATA.map((service) => (
                  <option key={service.id} value={service.slug}>
                    [{service.categoryName}] {service.title} (KES {service.priceKes})
                  </option>
                ))}
              </select>
            </div>

            {/* ESTIMATED TURNAROUND & PRICE */}
            <div className="grid grid-cols-2 gap-4 bg-[#181818] p-4 border border-[#222220]">
              <div>
                <span className="block font-mono text-[10px] text-[#7A7A76] uppercase">
                  ESTIMATED TURNAROUND
                </span>
                <span className="font-display text-xl text-[#F7F7F5]">
                  {selectedService.turnaroundTime}
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-[#7A7A76] uppercase">
                  SERVICE FEE
                </span>
                <span className="font-display text-xl text-[#E31B23]">
                  KES {selectedService.priceKes}
                </span>
              </div>
            </div>

            {/* CLIENT DETAILS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-xs uppercase text-[#7A7A76] mb-1 font-bold">
                  YOUR FULL NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="E.G. JOHN KAMAU NDIRANGU"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-[#181818] border border-[#333330] text-[#F7F7F5] p-3 text-sm font-mono focus:border-[#E31B23] outline-none uppercase"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase text-[#7A7A76] mb-1 font-bold">
                  PHONE / WHATSAPP NUMBER *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="E.G. 0712 345 678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-[#181818] border border-[#333330] text-[#333330] text-[#F7F7F5] p-3 text-sm font-mono focus:border-[#E31B23] outline-none uppercase"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs uppercase text-[#7A7A76] mb-1 font-bold">
                NATIONAL ID / KRA PIN / REG NUMBER
              </label>
              <input
                type="text"
                placeholder="E.G. ID 38291029 OR A001928374M"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                className="w-full bg-[#181818] border border-[#333330] text-[#F7F7F5] p-3 text-sm font-mono focus:border-[#E31B23] outline-none uppercase"
              />
            </div>

            {/* REQUIRED DOCUMENTS CHECKLIST PREVIEW */}
            <div>
              <span className="block font-mono text-xs uppercase text-[#7A7A76] mb-2 font-bold">
                REQUIRED DOCUMENTS CHECKLIST
              </span>
              <ul className="bg-[#181818] border border-[#222220] p-3 text-xs font-mono text-[#F7F7F5] space-y-1">
                {selectedService.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#E31B23] font-bold">[✓]</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ACTION BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#E31B23] text-[#F7F7F5] font-display text-xl py-3.5 uppercase font-bold tracking-wider hover:bg-[#F7F7F5] hover:text-[#0D0D0D] transition-colors cursor-pointer"
            >
              DISPATCH VIA WHATSAPP DESK
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
