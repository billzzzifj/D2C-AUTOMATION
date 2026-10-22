import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BrandProvider } from './context/BrandContext';
import CommandCenter from './pages/CommandCenter';
import ClientDemo from './pages/ClientDemo';

export default function App() {
  return (
    <BrandProvider>
      <HashRouter>
        <Routes>
          {/* Internal Agency CRM Kanban Command Center */}
          <Route path="/" element={<CommandCenter />} />
          
          {/* Personalized Client Demo Environment */}
          <Route path="/demo/:slug" element={<ClientDemo />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </BrandProvider>
  );
}
