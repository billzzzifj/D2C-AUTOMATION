import React from 'react';

export default function BrandLogo({ showBadge = false, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="inline-flex flex-col select-none group cursor-pointer">
        <span className="text-zinc-950 font-black uppercase tracking-tighter text-lg leading-none">
          BILLY BENJAMIN
        </span>
        <span className="text-zinc-500 font-mono font-medium uppercase tracking-[0.24em] text-[10px] leading-none mt-1">
          CONSULTING
        </span>
      </div>

      {showBadge && (
        <span className="hidden sm:inline-flex border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-zinc-600 rounded-none">
          CRO // SYSTEMS ARCHIVE v4.0
        </span>
      )}
    </div>
  );
}
