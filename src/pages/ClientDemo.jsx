import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { GLOBAL_D2C_TARGETS } from '../data/globalD2CTargets';
import DemoHeader from '../components/demo/DemoHeader';
import RevenueBleedVisualizer from '../components/demo/RevenueBleedVisualizer';
import AiAssetSimulator from '../components/demo/AiAssetSimulator';
import FrictionAuditTeardown from '../components/demo/FrictionAuditTeardown';
import StickyConversionFooter from '../components/demo/StickyConversionFooter';
import BookingModal from '../components/demo/BookingModal';
import { 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  Layers,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import { formatCurrency, formatNumber, formatPercent } from '../utils/formatters';

export default function ClientDemo() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // Find target brand by slug (case-insensitive)
  const brand = useMemo(() => {
    const found = GLOBAL_D2C_TARGETS.find(
      b => b.slug.toLowerCase() === (slug || '').toLowerCase() || b.id.toLowerCase() === (slug || '').toLowerCase()
    );
    if (found) return found;

    // Fallback if custom brand or not found
    const formattedName = (slug || 'Brand')
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');

    return {
      id: slug || 'd2c-brand',
      slug: slug || 'd2c-brand',
      name: formattedName,
      sector: 'D2C E-Commerce',
      website: `https://${slug}.com`,
      instagram: { handle: `@${slug}`, url: `https://instagram.com/${slug}` },
      email: `growth@${slug}.com`,
      customMetrics: { traffic: 150000, aov: 75 },
      tagline: 'High-growth direct-to-consumer digital flagship',
      heroProduct: 'Signature Best-Selling Product',
      frictionPoints: [
        'Unanchored add-to-cart button causes drop-off on mobile scroll',
        'Mobile checkout lacks direct 1-tap Apple Pay anchor',
        'Static product imagery fails to communicate material texture'
      ]
    };
  }, [slug]);

  // Read initial values from URL search params or fallback to brand metrics
  const initialTraffic = Number(searchParams.get('traffic')) || brand.customMetrics?.traffic || 100000;
  const initialAov = Number(searchParams.get('aov')) || brand.customMetrics?.aov || 65;
  const initialCurrentCvr = Number(searchParams.get('cvr')) || 1.2;
  const initialOptimizedCvr = Number(searchParams.get('opt_cvr')) || 2.8;

  const [traffic, setTraffic] = useState(initialTraffic);
  const [aov, setAov] = useState(initialAov);
  const [currentCvr, setCurrentCvr] = useState(initialCurrentCvr);
  const [optimizedCvr, setOptimizedCvr] = useState(initialOptimizedCvr);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Sync state back to URL query parameters so copying the link preserves the exact math
  useEffect(() => {
    setSearchParams({
      traffic: traffic.toString(),
      aov: aov.toString(),
      cvr: currentCvr.toString(),
      opt_cvr: optimizedCvr.toString()
    }, { replace: true });
  }, [traffic, aov, currentCvr, optimizedCvr, setSearchParams]);

  // Financial deltas
  const currentMonthlyRevenue = traffic * (currentCvr / 100) * aov;
  const optimizedMonthlyRevenue = traffic * (optimizedCvr / 100) * aov;
  const monthlyBleed = Math.max(0, optimizedMonthlyRevenue - currentMonthlyRevenue);
  const annualBleed = monthlyBleed * 12;
  const dailyBleed = monthlyBleed / 30.4;

  return (
    <div className="min-h-screen bg-black text-[#FAFAFA] relative pb-32 selection:bg-emerald-500/30 selection:text-white">
      
      {/* Ambient background glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-indigo-600/[0.08] blur-[160px] pointer-events-none" />
      <div className="fixed top-[45%] right-0 w-[600px] h-[600px] bg-red-600/[0.04] blur-[180px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-emerald-600/[0.04] blur-[180px] pointer-events-none" />

      {/* Client Header (Zero CRM controls) */}
      <DemoHeader brand={brand} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-16 sm:space-y-24">
        
        {/* Cinematic Hero Section */}
        <section className="relative text-center max-w-4xl mx-auto pt-4 sm:pt-8">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/[0.04] border border-white/10 text-zinc-300 mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Growth & Conversion Audit // {brand.name}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans leading-[1.1] mb-6">
            We modeled your mobile conversion funnel.{' '}
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
              You're bleeding {formatCurrency(annualBleed, true)} every year.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-zinc-400 font-sans leading-relaxed max-w-3xl mx-auto mb-8">
            At <span className="text-white font-semibold font-mono">{formatNumber(traffic)}</span> monthly visits and an average order value of <span className="text-white font-semibold font-mono">${aov}</span>, raising your mobile baseline from <span className="text-red-400 font-semibold">{formatPercent(currentCvr)}</span> to <span className="text-emerald-400 font-semibold">{formatPercent(optimizedCvr)}</span> unlocks <span className="text-emerald-400 font-bold font-mono">{formatCurrency(monthlyBleed)}</span> in net-new monthly recurring GMV.
          </p>

          {/* Quick jump anchor pill row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#revenue-bleed"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center gap-1.5"
            >
              <TrendingDown className="w-3.5 h-3.5 text-red-400" />
              <span>1. Revenue Bleed Visualizer</span>
            </a>

            <a
              href="#ai-assets"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>2. AI 3D Visual Simulator</span>
            </a>

            <a
              href="#friction-audit"
              className="px-4 py-2 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>3. Mobile Friction Teardown</span>
            </a>
          </div>

          {/* Key metrics highlight cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 text-left">
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08]">
              <span className="text-[10px] uppercase font-mono text-zinc-500 block">Monthly Traffic</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">{formatNumber(traffic)}</span>
              <span className="text-[11px] text-zinc-500 block mt-0.5">Verified sessions</span>
            </div>
            <div className="p-4 rounded-2xl bg-black/60 border border-white/[0.08]">
              <span className="text-[10px] uppercase font-mono text-zinc-500 block">Average Order</span>
              <span className="text-xl sm:text-2xl font-bold text-white font-mono">${aov}</span>
              <span className="text-[11px] text-zinc-500 block mt-0.5">Est. catalog basket</span>
            </div>
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
              <span className="text-[10px] uppercase font-mono text-red-400 block">Current CVR</span>
              <span className="text-xl sm:text-2xl font-bold text-red-300 font-mono">{formatPercent(currentCvr)}</span>
              <span className="text-[11px] text-zinc-500 block mt-0.5">Mobile checkout</span>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30">
              <span className="text-[10px] uppercase font-mono text-emerald-400 block">Optimized CVR</span>
              <span className="text-xl sm:text-2xl font-bold text-emerald-300 font-mono">{formatPercent(optimizedCvr)}</span>
              <span className="text-[11px] text-emerald-500 block mt-0.5">Target architecture</span>
            </div>
          </div>

        </section>

        {/* Module 1: The Revenue Bleed Visualizer */}
        <RevenueBleedVisualizer
          brand={brand}
          traffic={traffic}
          setTraffic={setTraffic}
          aov={aov}
          setAov={setAov}
          currentCvr={currentCvr}
          setCurrentCvr={setCurrentCvr}
          optimizedCvr={optimizedCvr}
          setOptimizedCvr={setOptimizedCvr}
        />

        {/* Module 2: AI Visual Asset Simulator */}
        <AiAssetSimulator brand={brand} />

        {/* Module 3: Mobile UX Friction Teardown */}
        <FrictionAuditTeardown brand={brand} />

        {/* Closing Architecture Guarantee Box */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-black border border-white/10 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block">
              14-Day Deployment SLA
            </span>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              Ready to recover {formatCurrency(monthlyBleed)} per month?
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              We deploy our high-performance mobile checkout architecture on top of your existing Shopify / headless store without disruption or code freeze.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="px-8 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-400 hover:from-emerald-500 hover:to-teal-300 shadow-xl shadow-emerald-500/30 border border-emerald-400/40 hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                <span>Book 30-Min Architecture Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </main>

      {/* Sticky Conversion Footer */}
      <StickyConversionFooter
        onOpenBooking={() => setIsBookingOpen(true)}
        dailyBleed={dailyBleed}
        brand={brand}
      />

      {/* Strategy Session Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        brand={brand}
        monthlyBleed={monthlyBleed}
      />

    </div>
  );
}
