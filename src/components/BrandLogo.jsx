import React from 'react';

export default function BrandLogo({ showBadge = false, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="inline-flex flex-col select-none group cursor-pointer">
        <span className="text-zinc-950 dark:text-zinc-50 font-black uppercase tracking-tighter text-lg leading-none transition-colors">
          BILLY BENJAMIN
        </span>
        <span className="text-zinc-500 dark:text-zinc-400 font-mono font-medium uppercase tracking-[0.24em] text-[10px] leading-none mt-1 transition-colors">
          CONSULTING
        </span>
      </div>

      {showBadge && (
        <span className="hidden sm:inline-flex border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-zinc-600 dark:text-zinc-400 rounded-none transition-colors">
          CRO // SYSTEMS ARCHIVE v4.0
        </span>
      )}
    </div>
  );
}
