import React from 'react';

export default function BrandLogo({ className = "" }) {
  return (
    <div className={`flex flex-col ${className}`.trim()}>
      <span className="text-zinc-900 font-black uppercase tracking-tighter text-lg leading-none">
        BILLY BENJAMIN
      </span>
      <span className="text-zinc-500 font-medium uppercase tracking-[0.2em] text-[0.65rem] leading-none mt-1">
        CONSULTING
      </span>
    </div>
  );
}
