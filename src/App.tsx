/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { VSCodeTopBar } from './components/VSCodeTopBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { OrderModal } from './components/OrderModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { TrackerPage } from './pages/TrackerPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeServiceSlug, setActiveServiceSlug] = useState<string | undefined>(undefined);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const [preselectedModalSlug, setPreselectedModalSlug] = useState<string | undefined>(undefined);

  // Sync window scroll when page changes
  const handlePageChange = (page: string, serviceSlug?: string) => {
    setCurrentPage(page);
    if (serviceSlug) {
      setActiveServiceSlug(serviceSlug);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderModal = (serviceSlug?: string) => {
    setPreselectedModalSlug(serviceSlug);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0D0D0D] text-[#F7F7F5] selection:bg-[#E31B23] selection:text-[#F7F7F5]">
      {/* VS CODE CODE EDITOR TOP HEADER */}
      <VSCodeTopBar currentPage={currentPage} onPageChange={handlePageChange} />

      {/* PRIMARY STICKY HIGH-CONTRAST NAVBAR */}
      <Navbar
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onOpenOrderModal={handleOpenOrderModal}
      />

      {/* DYNAMIC PAGE VIEWS */}
      <main className="flex-grow w-full">
        {currentPage === 'home' && (
          <HomePage
            onPageChange={handlePageChange}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onPageChange={handlePageChange}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            slug={activeServiceSlug || 'kra-pin-registration'}
            onPageChange={handlePageChange}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onPageChange={handlePageChange}
            onOpenOrderModal={handleOpenOrderModal}
          />
        )}

        {currentPage === 'tracker' && (
          <TrackerPage onOpenOrderModal={handleOpenOrderModal} />
        )}
      </main>

      {/* FOOTER */}
      <Footer onPageChange={handlePageChange} onOpenOrderModal={handleOpenOrderModal} />

      {/* FLOATING SHARP SQUARE WHATSAPP DESK */}
      <WhatsAppButton />

      {/* EXPRESS ORDER / APPLICATION MODAL */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        preselectedServiceSlug={preselectedModalSlug}
      />
    </div>
  );
}
