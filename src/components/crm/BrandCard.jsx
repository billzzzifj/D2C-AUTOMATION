import React from 'react';
import { 
  Mail, 
  ExternalLink, 
  Sparkles, 
  TrendingDown, 
  ArrowRight, 
  ChevronRight,
  ChevronLeft,
  Eye,
  Flame,
  Globe
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../common/SocialIcons';
import { useBrands } from '../../context/BrandContext';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export default function BrandCard({ brand }) {
  const { updateBrandStatus, setSelectedPitchBrand, columns } = useBrands();

  const traffic = brand.customMetrics?.traffic || 0;
  const aov = brand.customMetrics?.aov || 0;
  // Bleed from 1.2% to 2.8% CVR
  const monthlyBleed = traffic * 0.016 * aov;
  const annualBleed = monthlyBleed * 12;

  const currentColumnIndex = columns.findIndex(c => c.id === brand.status);

  const moveLeft = (e) => {
    e.stopPropagation();
    if (currentColumnIndex > 0) {
      updateBrandStatus(brand.id, columns[currentColumnIndex - 1].id);
    }
  };

  const moveRight = (e) => {
    e.stopPropagation();
    if (currentColumnIndex < columns.length - 1) {
      updateBrandStatus(brand.id, columns[currentColumnIndex + 1].id);
    }
  };

  // Demo link with pre-bound URL search params
  const demoUrl = `#/demo/${brand.slug}?traffic=${traffic}&aov=${aov}`;

  return (
    <div
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', brand.id);
      }}
      className="group relative rounded-xl p-4 bg-zinc-950/70 hover:bg-zinc-900/90 border border-white/[0.08] hover:border-white/[0.2] transition-all duration-200 shadow-md hover:shadow-xl cursor-grab active:cursor-grabbing backdrop-blur-md"
    >
      {/* Top row: Sector pill & Stage mover */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">
          {brand.sector}
        </span>

        {/* Quick Stage Shifters */}
        <div className="flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
          {currentColumnIndex > 0 && (
            <button
              onClick={moveLeft}
              title={`Move back to ${columns[currentColumnIndex - 1].title}`}
              className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
          )}
          {currentColumnIndex < columns.length - 1 && (
            <button
              onClick={moveRight}
              title={`Advance to ${columns[currentColumnIndex + 1].title}`}
              className="p-1 rounded hover:bg-white/10 text-zinc-400 hover:text-emerald-400 transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Brand Title and Tagline */}
      <div className="mb-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold text-base text-white tracking-tight group-hover:text-indigo-300 transition-colors">
            {brand.name}
          </h4>
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${brand.website}`}
            className="text-zinc-500 hover:text-zinc-300 transition-colors p-0.5"
            onClick={(e) => e.stopPropagation()}
          >
            <Globe className="w-3.5 h-3.5" />
          </a>
        </div>
        <p className="text-[11px] text-zinc-400 line-clamp-1 mt-0.5">
          {brand.tagline || brand.heroProduct}
        </p>
      </div>

      {/* Traffic & AOV Metrics Grid */}
      <div className="grid grid-cols-2 gap-2 mb-3 p-2 rounded-lg bg-black/40 border border-white/[0.04]">
        <div>
          <span className="text-[10px] text-zinc-500 block uppercase font-mono">Monthly Traffic</span>
          <span className="text-xs font-semibold text-zinc-200 tabular-nums font-mono">
            {formatNumber(traffic)}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-zinc-500 block uppercase font-mono">Average Order</span>
          <span className="text-xs font-semibold text-zinc-200 tabular-nums font-mono">
            ${aov}
          </span>
        </div>
      </div>

      {/* Calculated Revenue Bleed Banner */}
      <div className="mb-3.5 p-2 rounded-lg bg-red-950/20 border border-red-500/20 flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-red-400">
          <TrendingDown className="w-3.5 h-3.5 shrink-0" />
          <span className="text-[10px] font-medium uppercase tracking-wide">Est. Revenue Bleed</span>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-red-300 tabular-nums font-mono">
            {formatCurrency(monthlyBleed, true)}/mo
          </span>
        </div>
      </div>

      {/* Contact & Enrichment Action Bar */}
      <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between gap-1">
        {/* 1-Click Social Channels */}
        <div className="flex items-center gap-1">
          <a
            href={brand.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open IG: ${brand.instagram.handle}`}
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-pink-500/20 text-zinc-400 hover:text-pink-400 border border-white/[0.06] hover:border-pink-500/30 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={brand.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="Search Brand LinkedIn"
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-blue-500/20 text-zinc-400 hover:text-blue-400 border border-white/[0.06] hover:border-blue-500/30 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${brand.email}?subject=${encodeURIComponent(`Quick question on ${brand.name}'s mobile checkout CVR`)}&body=${encodeURIComponent(`Hey ${brand.name} team,\n\nNoticed a mobile checkout friction point that is likely costing ${brand.name} ${formatCurrency(monthlyBleed)} in lost monthly revenue. Prepared a custom audit and 3D visualizer.\n\nLink: ${window.location.origin}${window.location.pathname}${demoUrl}\n\nBest,\nBilly Benjamin Consulting Digital Director`)}`}
            title={`Email: ${brand.email}`}
            className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-amber-500/20 text-zinc-400 hover:text-amber-400 border border-white/[0.06] hover:border-amber-500/30 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Pitch Generator & Client Demo buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSelectedPitchBrand(brand)}
            title="Generate custom outreach pitch"
            className="px-2 py-1 rounded-lg text-[11px] font-medium text-indigo-300 hover:text-white bg-indigo-500/10 hover:bg-indigo-600/30 border border-indigo-500/30 transition-all flex items-center gap-1"
          >
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>Pitch</span>
          </button>

          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Launch personalized client demo environment"
            className="px-2 py-1 rounded-lg text-[11px] font-medium text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-600/30 border border-emerald-500/30 transition-all flex items-center gap-1"
          >
            <Eye className="w-3 h-3 text-emerald-400" />
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
