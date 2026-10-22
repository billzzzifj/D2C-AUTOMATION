import React from 'react';
import { TrendingDown, Users, DollarSign, Award, ArrowUpRight, Flame } from 'lucide-react';
import { useBrands } from '../../context/BrandContext';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export default function StatsOverview() {
  const { stats } = useBrands();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {/* Metric 1: Monthly Bleed Across Pipeline */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-red-500/30 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/20 transition-all" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Total Pipeline Bleed
          </span>
          <div className="p-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            <TrendingDown className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums font-sans">
          {formatCurrency(stats.totalMonthlyBleed, true)}
          <span className="text-xs font-normal text-zinc-500 ml-1.5">/ mo</span>
        </div>
        <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
          <span className="text-red-400 font-medium">{formatCurrency(stats.totalAnnualBleed, true)}/yr</span> addressable GMV leakage
        </p>
      </div>

      {/* Metric 2: Total Pipeline Addressable Traffic */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-indigo-500/30 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-all" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Addressable Sessions
          </span>
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Flame className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums font-sans">
          {formatNumber(stats.totalTraffic)}
        </div>
        <p className="text-[11px] text-zinc-500 mt-1">
          Monthly verified visitor volume across {stats.totalBrands} brands
        </p>
      </div>

      {/* Metric 3: Active Outreach Stages */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-amber-500/30 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            In Active Engagement
          </span>
          <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Users className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight tabular-nums font-sans">
          {stats.pitchSentCount + stats.reviewingCount}
          <span className="text-xs font-normal text-zinc-500 ml-1.5">brands</span>
        </div>
        <p className="text-[11px] text-zinc-500 mt-1">
          {stats.pitchSentCount} pitches sent • {stats.reviewingCount} auditing live demo
        </p>
      </div>

      {/* Metric 4: Closed / Won Revenue Recovered */}
      <div className="glass-panel rounded-2xl p-4 sm:p-5 relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
            Retained & Won
          </span>
          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Award className="w-4 h-4" />
          </div>
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight tabular-nums font-sans">
          {stats.closedCount} <span className="text-sm font-medium text-zinc-400">({stats.winRate}%)</span>
        </div>
        <p className="text-[11px] text-zinc-500 mt-1">
          {formatCurrency(stats.closedWonValue, true)} GMV under agency management
        </p>
      </div>
    </div>
  );
}
