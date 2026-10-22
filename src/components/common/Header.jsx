import React from 'react';
import { Layers, Plus, RefreshCw, Sparkles, ExternalLink, Activity } from 'lucide-react';
import { useBrands } from '../../context/BrandContext';

export default function Header() {
  const { stats, setIsAddModalOpen, resetToDefaults } = useBrands();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-black/75 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-700 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-indigo-400/30">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white font-sans">
                AURA <span className="text-zinc-500 font-normal">/</span> OS
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                D2C Acquisition Engine
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Client Pipeline & Dynamic Revenue Bleed Simulator
            </p>
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
