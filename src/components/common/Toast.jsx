import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useBrands } from '../../context/BrandContext';

export default function Toast() {
  const { toastMessage } = useBrands();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/90 border border-white/15 text-white shadow-2xl backdrop-blur-xl text-sm font-medium animate-in fade-in slide-in-from-bottom-3 duration-200">
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
}
