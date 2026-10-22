import React from 'react';
import { 
  TrendingDown, 
  TrendingUp, 
  ArrowRight, 
  DollarSign, 
  ShoppingCart, 
  Zap, 
  AlertTriangle,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { formatCurrency, formatNumber, formatPercent } from '../../utils/formatters';

export default function RevenueBleedVisualizer({ 
  brand, 
  traffic, 
  setTraffic, 
  aov, 
  setAov, 
  currentCvr, 
  setCurrentCvr, 
  optimizedCvr, 
  setOptimizedCvr 
}) {
  // Financial Calculations
  const currentMonthlyOrders = traffic * (currentCvr / 100);
  const currentMonthlyRevenue = currentMonthlyOrders * aov;
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  const optimizedMonthlyOrders = traffic * (optimizedCvr / 100);
  const optimizedMonthlyRevenue = optimizedMonthlyOrders * aov;
  const optimizedAnnualRevenue = optimizedMonthlyRevenue * 12;

  const monthlyBleed = Math.max(0, optimizedMonthlyRevenue - currentMonthlyRevenue);
  const annualBleed = monthlyBleed * 12;
  const monthlyLostOrders = Math.max(0, optimizedMonthlyOrders - currentMonthlyOrders);
  const dailyBleed = monthlyBleed / 30.4;

  // Max revenue for visual scale
  const maxRevenue = Math.max(optimizedMonthlyRevenue * 1.05, 1);
  const currentBarWidth = Math.min(100, Math.max(8, (currentMonthlyRevenue / maxRevenue) * 100));
  const optimizedBarWidth = Math.min(100, Math.max(12, (optimizedMonthlyRevenue / maxRevenue) * 100));

  // Reset to original brand metrics
  const resetDefaults = () => {
    setTraffic(brand.customMetrics?.traffic || 100000);
    setAov(brand.customMetrics?.aov || 65);
    setCurrentCvr(1.2);
    setOptimizedCvr(2.8);
  };

  return (
    <section id="revenue-bleed" className="relative scroll-mt-20">
      {/* Glow backdrop */}
      <div className="absolute inset-0 bg-red-600/[0.03] blur-3xl rounded-3xl pointer-events-none" />

      <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
              <TrendingDown className="w-3.5 h-3.5" />
              <span>Module 1 // The Revenue Bleed Visualizer</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              Funnel Conversion Gap Analysis
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-xl">
              Adjust traffic, average order value, and conversion targets to simulate the verified monthly revenue currently lost to mobile UX friction.
            </p>
          </div>

          <button
            onClick={resetDefaults}
            className="self-start md:self-auto text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] transition-all"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset {brand.name} Baseline</span>
          </button>
        </div>

        {/* Top Interactive Sliders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          
          {/* Traffic Input */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Monthly Traffic
              </label>
              <span className="text-sm font-bold text-white font-mono tabular-nums">
                {formatNumber(traffic)}
              </span>
            </div>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="5000"
              value={traffic}
              onChange={(e) => setTraffic(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1.5">
              <span>10k</span>
              <span>500k</span>
              <span>1M+</span>
            </div>
          </div>

          {/* AOV Input */}
          <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.06]">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Average Order Value
              </label>
              <span className="text-sm font-bold text-white font-mono tabular-nums">
                ${aov}
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="400"
              step="5"
              value={aov}
              onChange={(e) => setAov(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1.5">
              <span>$20</span>
              <span>$200</span>
              <span>$400+</span>
            </div>
          </div>

          {/* Current CVR Input */}
          <div className="p-4 rounded-2xl bg-black/60 border border-red-500/20">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-red-400 uppercase tracking-wider">
                Current Mobile CVR
              </label>
              <span className="text-sm font-bold text-red-300 font-mono tabular-nums">
                {formatPercent(currentCvr)}
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.2"
              step="0.1"
              value={currentCvr}
              onChange={(e) => setCurrentCvr(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1.5">
              <span>0.5% (Low)</span>
              <span>1.2% (Benchmark)</span>
              <span>2.2%</span>
            </div>
          </div>

          {/* Target Optimized CVR Input */}
          <div className="p-4 rounded-2xl bg-black/60 border border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Target Optimized CVR
              </label>
              <span className="text-sm font-bold text-emerald-300 font-mono tabular-nums">
                {formatPercent(optimizedCvr)}
              </span>
            </div>
            <input
              type="range"
              min="1.8"
              max="4.5"
              step="0.1"
              value={optimizedCvr}
              onChange={(e) => setOptimizedCvr(Number(e.target.value))}
              className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-600 font-mono mt-1.5">
              <span>1.8%</span>
              <span>2.8% (Target)</span>
              <span>4.5% (Elite)</span>
            </div>
          </div>

        </div>

        {/* Visual Revenue Comparison Bar Chart */}
        <div className="mb-8 p-6 rounded-2xl bg-black/70 border border-white/[0.08] relative">
          <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-6 flex items-center justify-between">
            <span>Visual Revenue Trajectory (Monthly Comparison)</span>
            <span className="text-zinc-500">Scale normalized to monthly volume</span>
          </div>

          <div className="space-y-6">
            {/* Bar 1: Current Architecture */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
                  <span className="text-zinc-300 font-medium">
                    Current Architecture ({formatPercent(currentCvr)} CVR)
                  </span>
                  <span className="text-zinc-500 font-mono">
                    • {formatNumber(currentMonthlyOrders)} orders/mo
                  </span>
                </div>
                <span className="font-bold text-zinc-300 font-mono tabular-nums text-sm">
                  {formatCurrency(currentMonthlyRevenue)} / mo
                </span>
              </div>
              <div className="h-9 w-full bg-zinc-900 rounded-xl overflow-hidden p-1 border border-white/[0.04]">
                <div 
                  className="h-full rounded-lg bg-zinc-700 transition-all duration-300 ease-out flex items-center justify-end pr-3"
                  style={{ width: `${currentBarWidth}%` }}
                >
                  <span className="text-[10px] text-zinc-300 font-mono font-medium hidden sm:inline">
                    Current
                  </span>
                </div>
              </div>
            </div>

            {/* Bar 2: Optimized UI Architecture */}
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-300 font-medium">
                    AURA Optimized Architecture ({formatPercent(optimizedCvr)} CVR)
                  </span>
                  <span className="text-emerald-500 font-mono">
                    • {formatNumber(optimizedMonthlyOrders)} orders/mo
                  </span>
                </div>
                <span className="font-bold text-emerald-400 font-mono tabular-nums text-sm">
                  {formatCurrency(optimizedMonthlyRevenue)} / mo
                </span>
              </div>
              <div className="h-9 w-full bg-zinc-900 rounded-xl overflow-hidden p-1 border border-emerald-500/20">
                <div 
                  className="h-full rounded-lg bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 shadow-lg shadow-emerald-500/20 transition-all duration-300 ease-out flex items-center justify-end pr-3"
                  style={{ width: `${optimizedBarWidth}%` }}
                >
                  <span className="text-[10px] text-white font-mono font-bold tracking-wider">
                    TARGET
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The Revenue Bleed Delta Callout */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Callout A: Monthly Lost Revenue */}
            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30">
              <div className="flex items-center gap-1.5 text-red-400 mb-1">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Monthly Lost Revenue
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono tabular-nums tracking-tight">
                {formatCurrency(monthlyBleed)}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Leaking <span className="text-red-300 font-semibold">{formatCurrency(dailyBleed)} every single day</span>
              </p>
            </div>

            {/* Callout B: Annual Cumulative Bleed */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                <TrendingDown className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Annual Cumulative Bleed
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {formatCurrency(annualBleed, true)}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                Compounded over 12 billing cycles without UI overhaul
              </p>
            </div>

            {/* Callout C: Abandoned Orders */}
            <div className="p-4 rounded-xl bg-black/60 border border-white/[0.08]">
              <div className="flex items-center gap-1.5 text-zinc-400 mb-1">
                <ShoppingCart className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  Monthly Uncaptured Orders
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-zinc-200 font-mono tabular-nums tracking-tight">
                {formatNumber(monthlyLostOrders)}
              </div>
              <p className="text-[11px] text-zinc-400 mt-1">
                High-intent shoppers who bounced at cart drawer or checkout
              </p>
            </div>
          </div>
        </div>

        {/* 3 High-Impact Conversion Leaks in standard D2C stacks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2 text-indigo-400">
              <Zap className="w-4 h-4" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                1-Tap Apple Pay Bypass
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard Shopify/WooCommerce checkouts force 4 form fields before presenting digital wallets. Anchoring native Apple Pay on PDP recovers ~18% of mobile drop-offs.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2 text-emerald-400">
              <Sparkles className="w-4 h-4" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Dynamic Tiered Bundle Drawer
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Replacing static variant pickers with an animated slide-in bundle tier directly elevates Average Order Value from ${aov} to ${(aov * 1.25).toFixed(0)}.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/[0.06]">
            <div className="flex items-center gap-2 mb-2 text-red-400">
              <AlertTriangle className="w-4 h-4" />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Sub-Second LCP Asset Loading
              </h4>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Every 100ms of visual latency on mobile PDPs degrades CVR by 0.7%. Replacing bulky uncompressed hero video with WebGL/AVIF cuts LCP to &lt;600ms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
