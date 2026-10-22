import React from 'react';
import { Lock, Sparkles } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';

export default function DemoHeader({ brand }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand identity: BILLY BENJAMIN CONSULTING */}
        <div className="flex items-center gap-3">
          <div className="flex items-center px-3 py-1.5 rounded-xl bg-white shadow-md border border-white/20 select-none">
            <BrandLogo />
          </div>
          <div className="hidden md:flex items-center pl-2 border-l border-white/[0.08]">
            <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
              Client Acquisition & Conversion Architecture
            </span>
          </div>
        </div>

        {/* Confidential Client Audit Badge */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium bg-white/[0.04] border border-white/[0.08] text-zinc-300">
            <Lock className="w-3 h-3 text-amber-400" />
            <span className="hidden sm:inline text-zinc-400">CONFIDENTIAL AUDIT //</span>
            <span className="font-semibold text-white tracking-wide">{brand.name}</span>
          </div>

          <a
            href="#revenue-bleed"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-medium text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all"
          >
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Funnel Math</span>
          </a>
        </div>
      </div>
    </header>
  );
}
