import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import ThemeToggle from '../components/ThemeToggle';
import { GLOBAL_D2C_TARGETS } from '../data/globalD2CTargets';
import { calculateRevenueImpact, formatCurrency, formatNumber, formatPercent } from '../utils/revenueMath';
import { 
  ArrowRight, 
  Check, 
  Lock, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  AlertOctagon, 
  Sliders, 
  Video, 
  ChevronRight, 
  RotateCcw,
  Clock,
  DollarSign,
  TrendingUp,
  FileText
} from 'lucide-react';

export default function ClientForensicAuditView() {
  const { slug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Find targeted brand
  const brand = useMemo(() => {
    return GLOBAL_D2C_TARGETS.find(b => b.slug.toLowerCase() === (slug || '').toLowerCase()) || null;
  }, [slug]);

  // Read URL parameters or fallback to brand metrics
  const paramTraffic = searchParams.get('traffic');
  const paramCvr = searchParams.get('cvr');
  const paramAov = searchParams.get('aov');
  const paramSols = searchParams.get('sols');

  const defaultActiveIds = brand ? brand.solutions.map(s => s.id) : [];

  const [traffic, setTraffic] = useState(paramTraffic ? Number(paramTraffic) : (brand?.metrics.monthlyTraffic || 100000));
  const [cvr, setCvr] = useState(paramCvr ? Number(paramCvr) : (brand?.metrics.currentCVR || 1.5));
  const [aov, setAov] = useState(paramAov ? Number(paramAov) : (brand?.metrics.currentAOV || 60));
  const [activeSolutionIds, setActiveSolutionIds] = useState(() => {
    if (paramSols) {
      return paramSols.split(',').filter(Boolean);
    }
    return defaultActiveIds;
  });

  const [loomCleanMode, setLoomCleanMode] = useState(false);

  // Sync state to URL search parameters
  useEffect(() => {
    if (!brand) return;
    setSearchParams({
      traffic: traffic.toString(),
      cvr: cvr.toString(),
      aov: aov.toString(),
      sols: activeSolutionIds.join(',')
    }, { replace: true });
  }, [traffic, cvr, aov, activeSolutionIds, brand, setSearchParams]);

  // Toggle individual solution
  const toggleSolution = (id) => {
    setActiveSolutionIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const resetToBrandDefaults = () => {
    if (!brand) return;
    setTraffic(brand.metrics.monthlyTraffic);
    setCvr(brand.metrics.currentCVR);
    setAov(brand.metrics.currentAOV);
    setActiveSolutionIds(brand.solutions.map(s => s.id));
  };

  // If brand is not found, render fallback
  if (!brand) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-950 dark:text-zinc-50 flex flex-col items-center justify-center p-6 text-center font-mono">
        <BrandLogo showBadge={true} className="mb-6" />
        <h1 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">TARGET FILE NOT FOUND</h1>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6 max-w-md">
          No diagnostic audit archive matches the slug "{slug}". Select an active brand dossier from the archive:
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mb-6">
          {GLOBAL_D2C_TARGETS.map(b => (
            <Link
              key={b.id}
              to={`/demo/${b.slug}`}
              className="px-3 py-1.5 text-xs bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-zinc-950 dark:hover:border-zinc-50 font-mono"
            >
              {b.name}
            </Link>
          ))}
        </div>
        <Link to="/" className="text-xs font-bold text-zinc-950 dark:text-zinc-50 underline underline-offset-4">
          Return to Master Command Center →
        </Link>
      </div>
    );
  }

  // Calculate live compound revenue math
  const calc = calculateRevenueImpact({
    traffic,
    baseCVR: cvr,
    baseAOV: aov,
    baseRepeatRate: brand.metrics.repeatPurchaseRate,
    solutions: brand.solutions,
    activeSolutionIds,
    implementationFeeUSD: brand.metrics.implementationFeeUSD
  });

  return (
    <div className="min-h-screen bg-[#F7F7F5] dark:bg-[#0B0B0C] text-zinc-950 dark:text-zinc-50 flex flex-col font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-zinc-50 dark:selection:text-zinc-950 pb-28 transition-colors duration-150">
      
      {/* Top Institutional Bar */}
      <header className={`sticky top-0 z-40 w-full bg-[#F7F7F5]/95 dark:bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-zinc-200/90 dark:border-zinc-800/90 transition-colors ${loomCleanMode ? 'py-1' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Logo Anchor */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <BrandLogo />
            </Link>
            <div className="hidden md:flex items-center pl-4 border-l border-zinc-200/90 dark:border-zinc-800/90 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <Lock size={12} strokeWidth={1.5} className="mr-1.5 text-zinc-700 dark:text-zinc-300" />
              <span>
                {brand.webStatus === "IG DM / Linktree Only (No Website)"
                  ? "ZERO-TO-ONE FLAGSHIP BLUEPRINT"
                  : "CONFIDENTIAL ARCHITECTURAL AUDIT"}
              </span>
            </div>
          </div>

          {/* Center Target Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white dark:bg-[#121214] border border-zinc-200/90 dark:border-zinc-800/90 text-xs font-mono">
            <span className="text-zinc-500 dark:text-zinc-400">PREPARED FOR:</span>
            <span className="font-bold text-zinc-950 dark:text-zinc-50 tracking-wide uppercase">{brand.name}</span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            <ThemeToggle className={loomCleanMode ? 'hidden' : ''} />

            <button
              onClick={() => setLoomCleanMode(prev => !prev)}
              className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-colors ${
                loomCleanMode 
                  ? 'border-zinc-950 dark:border-zinc-50 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950' 
                  : 'border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
              title="Toggle simplified interface for video walkthroughs"
            >
              <Video size={14} strokeWidth={1.5} />
              <span>{loomCleanMode ? 'Loom Mode: Active' : 'Loom Clean Mode'}</span>
            </button>

            <Link
              to={`/proposal/${brand.slug}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 border border-zinc-950 dark:border-zinc-50 transition-colors shadow-sm"
            >
              <span>View SOW & Scope</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

        </div>
      </header>

      {/* Main Audit Document Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        
        {/* Document Header & Reference Block */}
        <div className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] p-6 sm:p-8 transition-colors shadow-2xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                BILLY BENJAMIN CONSULTING // SYSTEMS ARCHITECTURE REPORT
              </span>
              <h1 className="text-3xl sm:text-5xl font-black font-sans uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
                {brand.name}
              </h1>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                HEADQUARTERS: {brand.hqLocation} • SECTOR: {brand.sector} • STOREFRONT: {brand.website.replace('https://', '')}
              </p>
            </div>

            <div className="text-left md:text-right font-mono text-xs">
              <span className="text-zinc-500 dark:text-zinc-400 block text-[10px] uppercase">Audit Classification</span>
              <span className="font-bold text-zinc-950 dark:text-zinc-50 block">
                {brand.webStatus === "IG DM / Linktree Only (No Website)" 
                  ? "ZERO-TO-ONE FLAGSHIP & FUNNEL ARCHITECTURE BLUEPRINT"
                  : brand.discoveryTier === "Tier 2: Undiscovered / Zero-Web"
                  ? "EMERGING FLAGSHIP ARCHITECTURE AUDIT"
                  : "TIER 1 D2C ENTERPRISE"}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px] block mt-0.5">REF: BBC-2026-{brand.slug.toUpperCase()}</span>
            </div>
          </div>

          <p className="text-[13.5px] font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed mt-6 max-w-4xl">
            This confidential diagnostic evaluates the technical, cognitive, and transactional friction points currently limiting {brand.name}'s revenue throughput across mobile and headless touchpoints. Every solution models hard e-commerce compounding mathematics across CVR, AOV, and Repeat LTV.
          </p>
        </div>

        {/* Executive Summary Strip: 3 Instant Takeaways */}
        <div className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] p-5 sm:p-6 transition-colors shadow-2xs">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] font-mono">
            <span className="font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
              EXECUTIVE SUMMARY // 5-SECOND FOUNDER TAKEAWAY
            </span>
            <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px]">HIGH-LEVERAGE SYNTHESIS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            
            {/* Takeaway 01: Primary Bottleneck */}
            <div className="p-4 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold">01. Primary Bottleneck</span>
                  <span className="text-red-600 dark:text-red-400 font-bold uppercase text-[10px]">Active Leak</span>
                </div>
                <p className="text-[13.5px] font-sans font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                  "{brand.forensicAudit.primaryFrictionHeadline}"
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1.5 border-t border-zinc-200/70 dark:border-zinc-800/70">
                Suppressing baseline CVR at {formatPercent(cvr)}
              </span>
            </div>

            {/* Takeaway 02: Proposed Engineering Fix */}
            <div className="p-4 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold">02. Proposed Engineering Fix</span>
                  <span className="text-zinc-900 dark:text-zinc-200 font-bold uppercase text-[10px]">Turnkey System</span>
                </div>
                <p className="text-[13.5px] font-sans font-medium text-zinc-900 dark:text-zinc-100 leading-snug">
                  {brand.solutions[0].title} & {brand.solutions[1].title}
                </p>
              </div>
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 pt-1.5 border-t border-zinc-200/70 dark:border-zinc-800/70">
                {brand.solutions[0].lever} +{brand.solutions[0].liftPercentage}% • {brand.solutions[1].lever} +{brand.solutions[1].liftPercentage}%
              </span>
            </div>

            {/* Takeaway 03: Estimated Monthly Lift & Payback */}
            <div className="p-4 bg-zinc-950 dark:bg-zinc-900 text-white border border-zinc-950 dark:border-zinc-700 flex flex-col justify-between space-y-2">
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 mb-1">
                  <span className="uppercase tracking-wider font-semibold">03. Monthly Lift & Payback</span>
                  <span className="text-emerald-400 font-bold uppercase text-[10px]">Net-New GMV</span>
                </div>
                <div className="text-2xl font-semibold font-mono tabular-nums tracking-tight text-white">
                  +{formatCurrency(calc.monthlyRevenueRecovered)}
                  <span className="text-xs font-normal text-zinc-400 ml-1 font-mono">/ mo</span>
                </div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono pt-1.5 border-t border-zinc-800 text-emerald-400 font-medium">
                <span>Payback Window:</span>
                <span className="font-bold">{calc.retainerPaybackDays} Business Days</span>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 01: EXECUTIVE FORENSIC DIAGNOSIS (2-Column Grid) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 font-mono text-[11px] bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">01</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">
                EXECUTIVE FORENSIC DIAGNOSIS
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">QUALITATIVE & STRUCTURAL AUDIT</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Column 1: Validated Brand Equity */}
            <div className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] p-6 space-y-4 transition-colors">
              <div className="flex items-center gap-2 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                <ShieldCheck size={18} strokeWidth={1.5} className="text-zinc-950 dark:text-zinc-50" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-950 dark:text-zinc-50">
                  Validated Brand Equity & Moats (What Is Working)
                </h3>
              </div>

              <ul className="space-y-3 text-xs">
                {brand.forensicAudit.brandStrengths.map((str, idx) => (
                  <li key={idx} className="p-3 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-100 dark:border-zinc-800/80 flex items-start gap-2.5">
                    <span className="font-mono font-bold text-zinc-950 dark:text-zinc-50">0{idx + 1}.</span>
                    <span className="text-[13.5px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">{str}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Identified Technical & UX Revenue Leaks */}
            <div className="border border-zinc-950 dark:border-zinc-800 bg-zinc-950 dark:bg-zinc-900 text-white p-6 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-zinc-800 dark:border-zinc-700">
                <AlertOctagon size={18} strokeWidth={1.5} className="text-white" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                  Identified Structural UX Revenue Leaks
                </h3>
              </div>

              <div className="p-3 bg-zinc-900 dark:bg-zinc-950 border border-zinc-800 dark:border-zinc-700 text-xs mb-3">
                <span className="text-[10px] font-mono uppercase text-zinc-400 dark:text-zinc-500 block mb-0.5">Primary Friction Mode</span>
                <p className="text-[13.5px] font-sans font-medium text-white leading-relaxed">{brand.forensicAudit.primaryFrictionHeadline}</p>
              </div>

              <ul className="space-y-2 text-xs">
                {brand.forensicAudit.technicalBottlenecks.map((bot, idx) => (
                  <li key={idx} className="p-2.5 bg-zinc-900/60 dark:bg-zinc-950/60 border border-zinc-800/80 dark:border-zinc-800 flex items-start gap-2.5 text-zinc-300">
                    <span className="font-mono font-bold text-zinc-400 dark:text-zinc-500">0{idx + 1}.</span>
                    <span className="text-[13.5px] leading-relaxed font-sans text-zinc-300">{bot}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* SECTION 02: INTERACTIVE 3-LEVER COMPOUND REVENUE SIMULATOR */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 font-mono text-[11px] bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">02</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">
                COMPOUND REVENUE MATHEMATICS ENGINE
              </span>
            </div>
            <button
              onClick={resetToBrandDefaults}
              className="text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 flex items-center gap-1 transition-colors"
            >
              <RotateCcw size={12} strokeWidth={1.5} />
              <span>Reset Brand Baseline</span>
            </button>
          </div>

          <div className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] p-6 sm:p-8 space-y-8 transition-colors shadow-2xs">
            
            {/* 3 Interactive Inputs with Value Pills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 border-b border-zinc-200/80 dark:border-zinc-800/80">
              
              {/* Traffic Input */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Monthly Sessions</label>
                  <span className="px-2 py-0.5 font-mono text-xs font-bold tabular-nums bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
                    {formatNumber(traffic)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="5000"
                  value={traffic}
                  onChange={(e) => setTraffic(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-none accent-zinc-900 dark:accent-zinc-100 cursor-pointer appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>20k (Niche)</span>
                  <span>500k (Scaling)</span>
                  <span>1M+ (Flagship)</span>
                </div>
              </div>

              {/* Baseline CVR */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Baseline CVR (%)</label>
                  <span className="px-2 py-0.5 font-mono text-xs font-bold tabular-nums bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
                    {formatPercent(cvr)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.5"
                  step="0.1"
                  value={cvr}
                  onChange={(e) => setCvr(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-none accent-zinc-900 dark:accent-zinc-100 cursor-pointer appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>0.5% (Weak)</span>
                  <span>1.5% (Median)</span>
                  <span>3.5% (Elite)</span>
                </div>
              </div>

              {/* Baseline AOV */}
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-xs font-mono">
                  <label className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Baseline AOV ($)</label>
                  <span className="px-2 py-0.5 font-mono text-xs font-bold tabular-nums bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/90 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100">
                    ${aov}
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="350"
                  step="2"
                  value={aov}
                  onChange={(e) => setAov(Number(e.target.value))}
                  className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-800 rounded-none accent-zinc-900 dark:accent-zinc-100 cursor-pointer appearance-none"
                />
                <div className="flex justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                  <span>$20</span>
                  <span>$150</span>
                  <span>$350</span>
                </div>
              </div>

            </div>

            {/* High-Contrast Telemetry Board (4 Monospace Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-200/90 dark:border-zinc-800/90">
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                  {brand.webStatus === "IG DM / Linktree Only (No Website)"
                    ? "DM / Linktree Baseline"
                    : "Current Monthly Baseline"}
                </span>
                <span className="text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums block tracking-tight">
                  {formatCurrency(calc.currentMonthlyTotalRevenue)}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 block mt-1">
                  Direct: {formatCurrency(calc.currentMonthlyDirectRevenue)}
                </span>
              </div>

              <div className="p-4 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-200/90 dark:border-zinc-800/90">
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                  {brand.webStatus === "IG DM / Linktree Only (No Website)"
                    ? "Deployed Flagship Storefront"
                    : "Engineered Monthly Projection"}
                </span>
                <span className="text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-50 tabular-nums block tracking-tight">
                  {formatCurrency(calc.projectedMonthlyTotalRevenue)}
                </span>
                <span className="text-[10px] font-mono text-zinc-600 dark:text-zinc-400 block mt-1">
                  Compounded CVR + AOV + LTV
                </span>
              </div>

              <div className="p-4 bg-zinc-950 dark:bg-zinc-900 text-white border border-zinc-950 dark:border-zinc-700">
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 block mb-1">
                  Monthly Recovered Revenue
                </span>
                <span className="text-2xl font-semibold font-mono text-white tabular-nums block tracking-tight">
                  +{formatCurrency(calc.monthlyRevenueRecovered)}
                </span>
                <span className="text-[10px] font-mono text-zinc-400 block mt-1">
                  Net-New Monthly GMV Lift
                </span>
              </div>

              <div className="p-4 bg-zinc-950 dark:bg-zinc-900 text-white border border-zinc-950 dark:border-zinc-700">
                <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400 block mb-1">
                  Annualized Revenue Impact
                </span>
                <span className="text-2xl font-semibold font-mono text-white tabular-nums block tracking-tight">
                  +{formatCurrency(calc.annualRevenueRecovered, true)}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 block mt-1 font-bold">
                  Retainer Payback: {calc.retainerPaybackDays} Business Days
                </span>
              </div>

            </div>

            {/* Horizontal Architectural Comparison Bars */}
            <div className="p-5 border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50/70 dark:bg-[#18181B] space-y-4 font-mono text-xs">
              <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 block font-bold">
                {brand.webStatus === "IG DM / Linktree Only (No Website)"
                  ? "Architectural Multiplier Shifts (DM / Linktree Baseline vs. Deployed Flagship Storefront)"
                  : "Architectural Multiplier Shifts (Current vs. Engineered)"}
              </span>

              {/* CVR Bar */}
              <div>
                <div className="flex justify-between items-center mb-1 text-[11px] text-zinc-700 dark:text-zinc-300">
                  <span>Conversion Rate (CVR)</span>
                  <span>{formatPercent(calc.baseCVR)} ➔ <strong className="text-zinc-950 dark:text-zinc-50">{formatPercent(calc.newCVR)}</strong> (+{calc.cvrLift}%)</span>
                </div>
                <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                  <div 
                    className="h-full bg-zinc-400 dark:bg-zinc-600 absolute left-0"
                    style={{ width: `${Math.min(100, (calc.baseCVR / 4) * 100)}%` }}
                  />
                  <div 
                    className="h-full bg-zinc-950 dark:bg-zinc-100 absolute left-0 opacity-80"
                    style={{ width: `${Math.min(100, (calc.newCVR / 4) * 100)}%` }}
                  />
                </div>
              </div>

              {/* AOV Bar */}
              <div>
                <div className="flex justify-between items-center mb-1 text-[11px] text-zinc-700 dark:text-zinc-300">
                  <span>Average Order Value (AOV)</span>
                  <span>${calc.baseAOV} ➔ <strong className="text-zinc-950 dark:text-zinc-50">${Math.round(calc.newAOV)}</strong> (+{calc.aovLift}%)</span>
                </div>
                <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                  <div 
                    className="h-full bg-zinc-400 dark:bg-zinc-600 absolute left-0"
                    style={{ width: `${Math.min(100, (calc.baseAOV / 300) * 100)}%` }}
                  />
                  <div 
                    className="h-full bg-zinc-950 dark:bg-zinc-100 absolute left-0 opacity-80"
                    style={{ width: `${Math.min(100, (calc.newAOV / 300) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Repeat LTV Bar */}
              <div>
                <div className="flex justify-between items-center mb-1 text-[11px] text-zinc-700 dark:text-zinc-300">
                  <span>Repeat Purchase Frequency (LTV)</span>
                  <span>{formatPercent(calc.baseRepeatRate)} ➔ <strong className="text-zinc-950 dark:text-zinc-50">{formatPercent(calc.newRepeatRate)}</strong> (+{calc.ltvLift}%)</span>
                </div>
                <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 relative overflow-hidden">
                  <div 
                    className="h-full bg-zinc-400 dark:bg-zinc-600 absolute left-0"
                    style={{ width: `${Math.min(100, (calc.baseRepeatRate / 60) * 100)}%` }}
                  />
                  <div 
                    className="h-full bg-zinc-950 dark:bg-zinc-100 absolute left-0 opacity-80"
                    style={{ width: `${Math.min(100, (calc.newRepeatRate / 60) * 100)}%` }}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 03: BESPOKE ARCHITECTURAL INTERVENTIONS (3 TOGGLEABLE CARDS) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 font-mono text-[11px] bg-zinc-200/70 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">03</span>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-950 dark:text-zinc-50">
                BESPOKE ARCHITECTURAL INTERVENTIONS ({activeSolutionIds.length}/3 ACTIVE)
              </span>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">TOGGLE SWITCHES COMPUTE LIVE REVENUE DELTAS</span>
          </div>

          <div className="space-y-6">
            {brand.solutions.map((sol, index) => {
              const isActive = activeSolutionIds.includes(sol.id);

              return (
                <div 
                  key={sol.id}
                  className={`border transition-all ${
                    isActive 
                      ? 'bg-white dark:bg-[#121214] border-zinc-900 dark:border-zinc-700 shadow-sm' 
                      : 'bg-white/60 dark:bg-[#121214]/60 border-zinc-200/80 dark:border-zinc-800/80 opacity-60'
                  }`}
                >
                  {/* Card Header & Toggle Row */}
                  <div className="p-4 sm:p-5 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-[#F7F7F5] dark:bg-zinc-900/60 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-black bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 px-2 py-0.5">
                        {sol.code}
                      </span>
                      <h4 className="font-sans font-bold text-base text-zinc-950 dark:text-zinc-50">
                        {sol.title}
                      </h4>
                      <span className="hidden sm:inline-block font-mono text-xs font-bold px-2 py-0.5 bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200">
                        {sol.lever} +{sol.liftPercentage}%
                      </span>
                    </div>

                    {/* Enable / Disable Toggle Switch */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 hidden sm:inline">
                        {isActive ? 'Included in Model' : 'Excluded'}
                      </span>
                      <button
                        onClick={() => toggleSolution(sol.id)}
                        className={`w-12 h-6 flex items-center p-0.5 transition-colors border ${
                          isActive 
                            ? 'bg-zinc-950 dark:bg-zinc-100 border-zinc-950 dark:border-zinc-100 justify-end' 
                            : 'bg-zinc-200 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700 justify-start'
                        }`}
                      >
                        <div className={`w-5 h-5 shadow-sm ${isActive ? 'bg-white dark:bg-zinc-950' : 'bg-white dark:bg-zinc-400'}`} />
                      </button>
                    </div>
                  </div>

                  {/* Solution Mechanism & Tech Stack */}
                  <div className="p-4 sm:p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block mb-1">
                        Architectural Mechanism
                      </span>
                      <p className="text-[13.5px] font-sans text-zinc-700 dark:text-zinc-300 leading-relaxed">
                        {sol.mechanism}
                      </p>
                    </div>

                    {/* Interactive Before vs After Wireframe Flow */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                      <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 block mb-2">
                        Wireframe State Transition Analysis
                      </span>

                      <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 font-mono text-xs">
                        {/* Current State (Leak) - Subtle Dashed Border */}
                        <div className="flex-1 border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/60 dark:bg-zinc-900/40 p-3.5">
                          <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-bold block mb-1">
                            Current State (Leak)
                          </span>
                          <p className="text-[13.5px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">{sol.beforeState}</p>
                        </div>

                        {/* Transition Arrow Indicator */}
                        <div className="hidden md:flex items-center justify-center text-zinc-400 dark:text-zinc-500 font-mono text-lg shrink-0 px-1">
                          →
                        </div>
                        <div className="flex md:hidden items-center justify-center text-zinc-400 dark:text-zinc-500 font-mono text-base shrink-0 py-0.5">
                          ↓
                        </div>

                        {/* Engineered State (Billy Benjamin Architecture) - Crisp Solid Border */}
                        <div className="flex-1 border border-zinc-900 dark:border-zinc-200 bg-white dark:bg-zinc-950 p-3.5">
                          <span className="text-[10px] uppercase text-zinc-950 dark:text-zinc-100 font-bold block mb-1 flex items-center justify-between">
                            <span>Engineered State (Billy Benjamin Architecture)</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-mono text-[9px] font-bold">SOLVED</span>
                          </span>
                          <p className="text-[13.5px] text-zinc-900 dark:text-zinc-100 leading-relaxed font-sans">{sol.afterState}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Stack Pill Row */}
                    <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                      <span className="font-bold text-zinc-700 dark:text-zinc-300">INFRASTRUCTURE STACK:</span>
                      <span className="p-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                        {sol.techStack}
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Sticky Conversion Footer Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 bg-zinc-950 dark:bg-black text-white border-t border-zinc-800 dark:border-zinc-800 p-3 sm:p-4 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <div className="text-left font-mono">
            <div className="text-xs sm:text-sm font-bold flex items-center gap-2">
              <span>Recapturing +{formatCurrency(calc.monthlyRevenueRecovered)}/mo for {brand.name}</span>
            </div>
            <div className="text-[10px] text-zinc-400 mt-0.5">
              Fixed Retainer: {formatCurrency(brand.metrics.implementationFeeUSD)} • Turnaround: {brand.metrics.turnaroundDays} Days • Payback Window: {calc.retainerPaybackDays} Days
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to={`/proposal/${brand.slug}`}
              className="w-full sm:w-auto px-6 py-2.5 bg-white hover:bg-zinc-100 dark:bg-zinc-100 dark:hover:bg-white text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Approve Architecture & View SOW</span>
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>

        </div>
      </footer>

    </div>
  );
}
