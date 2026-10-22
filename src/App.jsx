import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import OutreachCommandCenter from './pages/OutreachCommandCenter';
import ClientForensicAuditView from './pages/ClientForensicAuditView';
import CommercialProposalView from './pages/CommercialProposalView';
import NotFoundView from './pages/NotFoundView';

export default function App() {
  return (
    <BrandProvider>
      <HashRouter>
        <Routes>
          {/* Route 1: Billy Benjamin Consulting // Outreach Command Center */}
          <Route path="/" element={<OutreachCommandCenter />} />

          {/* Route 2: Client-Facing Forensic Audit & Compound ROI Simulator */}
          <Route path="/demo/:slug" element={<ClientForensicAuditView />} />

          {/* Route 3: Print-Ready Commercial SOW & Implementation Roadmap */}
          <Route path="/proposal/:slug" element={<CommercialProposalView />} />

          {/* Fallback Graceful Boundary */}
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </HashRouter>
    </BrandProvider>
  );
}
