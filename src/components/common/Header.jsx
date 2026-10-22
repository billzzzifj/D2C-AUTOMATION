import React from 'react';
import { Plus, RefreshCw, Sparkles } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useBrands } from '../../context/BrandContext';

export default function Header() {
  const { stats, setIsAddModalOpen, resetToDefaults } = useBrands();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-black/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand identity: BILLY BENJAMIN CONSULTING */}
        <div className="flex items-center gap-3">
          <div className="flex items-center px-3 py-1.5 rounded-xl bg-white shadow-md border border-white/20 select-none">
            <BrandLogo />
          </div>
          
          <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-white/[0.08]">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Pipeline
            </span>
            <span className="text-[11px] text-zinc-400 font-sans">
              D2C Revenue Optimization & AI Strategy
            </span>
          </div>
        </div>

        {/* Global actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={resetToDefaults}
            title="Reset pipeline back to default 20 D2C brands"
            className="p-2 sm:px-3 sm:py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-1.5"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 shadow-md shadow-indigo-600/25 border border-indigo-400/30 transition-all flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Target Brand</span>
          </button>
        </div>
      </div>
    </header>
  );
}
