import React from 'react';
import { ArrowRight, AlertTriangle, Sparkles } from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export default function StickyConversionFooter({ onOpenBooking, dailyBleed, brand }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/85 backdrop-blur-2xl shadow-2xl py-3.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Left message & live bleed ticker */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden md:flex h-9 w-9 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 items-center justify-center shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-semibold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
              <span>Stop bleeding revenue.</span>
              <span className="text-zinc-400 hidden sm:inline">
                Deploy this UI/UX architecture for {brand.name} in 14 days.
              </span>
            </div>
            <div className="text-[11px] text-zinc-400 flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
              <span>Accumulating</span>
              <span className="text-red-400 font-mono font-bold tabular-nums">
                {formatCurrency(dailyBleed)}
              </span>
              <span>in lost sales each passing day.</span>
            </div>
          </div>
        </div>

        {/* Right CTA Button */}
        <button
          onClick={onOpenBooking}
          className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300 shadow-xl shadow-emerald-500/25 border border-emerald-400/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shrink-0"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Book Strategy Session</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>

      </div>
    </div>
  );
}
