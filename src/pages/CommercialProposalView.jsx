import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import ThemeToggle from '../components/ThemeToggle';
import { GLOBAL_D2C_TARGETS } from '../data/globalD2CTargets';
import { calculateRevenueImpact, formatCurrency, formatNumber, formatPercent } from '../utils/revenueMath';
import { 
  Printer, 
  ArrowLeft, 
  FileCheck, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  DollarSign, 
  CheckCircle2, 
  Mail,
  ExternalLink
} from 'lucide-react';

export default function CommercialProposalView() {
  const { slug } = useParams();

  const brand = useMemo(() => {
    return GLOBAL_D2C_TARGETS.find(b => b.slug.toLowerCase() === (slug || '').toLowerCase()) || null;
  }, [slug]);

  if (!brand) {
    return (
      <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-950 dark:text-zinc-50 flex flex-col items-center justify-center p-6 text-center font-mono">
        <BrandLogo showBadge={true} className="mb-6" />
        <h1 className="text-xl font-bold text-zinc-950 dark:text-zinc-50 mb-2">PROPOSAL FILE NOT FOUND</h1>
        <Link to="/" className="text-xs font-bold text-zinc-950 dark:text-zinc-50 underline underline-offset-4 mt-4">
          Return to Master Command Center →
        </Link>
      </div>
    );
  }

  // Calculate standard full implementation compound return
  const calc = calculateRevenueImpact({
    traffic: brand.metrics.monthlyTraffic,
    baseCVR: brand.metrics.currentCVR,
    baseAOV: brand.metrics.currentAOV,
    baseRepeatRate: brand.metrics.repeatPurchaseRate,
    solutions: brand.solutions,
    activeSolutionIds: brand.solutions.map(s => s.id),
    implementationFeeUSD: brand.metrics.implementationFeeUSD
  });

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const refId = `BBC-2026-${brand.slug.toUpperCase()}`;

  const acceptMailto = `mailto:billy@billybenjaminconsulting.com?subject=${encodeURIComponent(`[ACCEPTED SOW] ${brand.name} Implementation Kickoff (${refId})`)}&body=${encodeURIComponent(`Hi Billy,

We have reviewed and approved the Commercial Statement of Work (Ref: ${refId}) for ${brand.name}.

Scope Summary:
- Fixed Implementation Retainer: ${formatCurrency(brand.metrics.implementationFeeUSD)}
- Guaranteed Turnaround: ${brand.metrics.turnaroundDays} Business Days
- Primary Solutions:
  1. ${brand.solutions[0].title}
  2. ${brand.solutions[1].title}
  3. ${brand.solutions[2].title}

Please forward the engagement agreement, deposit invoice, and technical onboarding link so we can initiate Week 1 deployment.

Best regards,
${brand.decisionMakerTitles.split(',')[0]}
${brand.name}`)}`;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-950 dark:text-zinc-50 flex flex-col font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-zinc-50 dark:selection:text-zinc-950 pb-20 transition-colors duration-150">
      
      {/* Top Institutional Bar (Hidden in Print) */}
      <header className="sticky top-0 z-40 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 transition-colors no-print">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors p-1" title="Back to Command Center">
              <ArrowLeft size={16} strokeWidth={1.5} />
            </Link>
            <BrandLogo />
            <div className="hidden sm:flex items-center pl-4 border-l border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>COMMERCIAL SOW // LEGAL RECORD</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle className="no-print" />

            <Link
              to={`/demo/${brand.slug}`}
              className="text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 px-3 py-1.5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors"
            >
              Interactive Simulator
            </Link>

            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors"
            >
              <Printer size={14} strokeWidth={1.5} />
              <span>Print / Export PDF Dossier</span>
            </button>

            <a
              href={acceptMailto}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-bold bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 border border-zinc-950 dark:border-zinc-50 transition-colors shadow-sm"
            >
              <FileCheck size={14} strokeWidth={1.5} />
              <span>Accept Scope & Kickoff</span>
            </a>
          </div>

        </div>
      </header>

      {/* Contract Sheet Document */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 w-full">
        
        <div className="border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 sm:p-14 space-y-10 shadow-sm transition-colors print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
          
          {/* Header Metadata */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pb-8 border-b-2 border-zinc-950 dark:border-zinc-700 print:border-black">
            <div>
              <BrandLogo showBadge={false} />
              <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 print:text-zinc-600 mt-2 space-y-0.5">
                <p>BILLY BENJAMIN CONSULTING LLC</p>
                <p>E-COMMERCE SYSTEMS ARCHITECTURE & CRO</p>
                <p>NEW YORK • LONDON • LOS ANGELES</p>
              </div>
            </div>

            <div className="text-left sm:text-right font-mono text-xs space-y-1">
              <span className="inline-block px-2 py-0.5 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 print:bg-black print:text-white font-bold uppercase text-[10px]">
                OFFICIAL STATEMENT OF WORK
              </span>
              <p className="font-bold text-zinc-950 dark:text-zinc-50 print:text-black pt-1">REFERENCE: {refId}</p>
              <p className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">DATE: {currentDate}</p>
              <p className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">CLIENT: {brand.name}</p>
              <p className="text-zinc-500 dark:text-zinc-400 print:text-zinc-600">JURISDICTION: {brand.hqLocation}</p>
            </div>
          </div>

          {/* Engagement Overview Paragraph */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-bold">
              1. Engagement Objective & Scope
            </h2>
            <p className="text-sm font-sans text-zinc-800 dark:text-zinc-200 print:text-black leading-relaxed">
              This Statement of Work ("SOW") authorizes Billy Benjamin Consulting to engineer, deploy, and benchmark 3 bespoke conversion and revenue-architecture systems across {brand.name}'s digital storefront ({brand.website}). All interventions are designed to eradicate existing architectural bottlenecks ("{brand.forensicAudit.primaryFrictionHeadline}") and compound monthly throughput across CVR, AOV, and Repeat LTV{brand.webStatus === "IG DM / Linktree Only (No Website)" ? ', transitioning the brand into a fully automated, high-converting digital flagship' : ''}.
            </p>
          </div>

          {/* Itemized Deliverables Table (Week 1, Week 2, Week 3) */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-bold">
              2. Technical Implementation Roadmap & Weekly Milestones
            </h2>

            <div className="border border-zinc-200 dark:border-zinc-800 print:border-zinc-300 overflow-x-auto">
              <table className="w-full text-left text-xs font-sans border-collapse">
                <thead>
                  <tr className="bg-zinc-50 dark:bg-zinc-900 print:bg-zinc-100 border-b border-zinc-200 dark:border-zinc-800 print:border-zinc-300 font-mono text-[10px] text-zinc-600 dark:text-zinc-400 print:text-zinc-700 uppercase tracking-wider">
                    <th className="py-2.5 px-4 font-bold w-24">Phase</th>
                    <th className="py-2.5 px-4 font-bold">Milestone Focus</th>
                    <th className="py-2.5 px-4 font-bold">Technical Deliverables & Architecture</th>
                    <th className="py-2.5 px-4 font-bold w-28">Sign-off SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 print:divide-zinc-300 text-zinc-800 dark:text-zinc-200 print:text-black">
                  {/* Week 1 */}
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold bg-zinc-50/50 dark:bg-zinc-900/50 print:bg-white text-zinc-950 dark:text-zinc-50 print:text-black">WEEK 01</td>
                    <td className="py-3 px-4 font-semibold text-zinc-950 dark:text-zinc-50 print:text-black">
                      UX Architecture & Wireframe Systems
                    </td>
                    <td className="py-3 px-4 space-y-1">
                      <p>• Architectural teardown and baseline telemetry instrumentation.</p>
                      <p>• High-fidelity wireframe states for <strong>{brand.solutions[0].title}</strong> ({brand.solutions[0].code}) and <strong>{brand.solutions[1].title}</strong> ({brand.solutions[1].code}).</p>
                      <p>• Mobile viewport thumb-zone calibration and cognitive load audit.</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-zinc-600 dark:text-zinc-400 print:text-zinc-700">Day 05</td>
                  </tr>

                  {/* Week 2 */}
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold bg-zinc-50/50 dark:bg-zinc-900/50 print:bg-white text-zinc-950 dark:text-zinc-50 print:text-black">WEEK 02</td>
                    <td className="py-3 px-4 font-semibold text-zinc-950 dark:text-zinc-50 print:text-black">
                      Storefront & Liquid / Headless Code Injection
                    </td>
                    <td className="py-3 px-4 space-y-1">
                      <p>• Implementation of <strong>{brand.solutions[0].title}</strong> (+{brand.solutions[0].liftPercentage}% CVR lever).</p>
                      <p>• Implementation of <strong>{brand.solutions[1].title}</strong> (+{brand.solutions[1].liftPercentage}% AOV lever).</p>
                      <p>• Integration across tech stack: {brand.solutions[0].techStack}.</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-zinc-600 dark:text-zinc-400 print:text-zinc-700">Day 12</td>
                  </tr>

                  {/* Week 3 */}
                  <tr>
                    <td className="py-3 px-4 font-mono font-bold bg-zinc-50/50 dark:bg-zinc-900/50 print:bg-white text-zinc-950 dark:text-zinc-50 print:text-black">WEEK 03</td>
                    <td className="py-3 px-4 font-semibold text-zinc-950 dark:text-zinc-50 print:text-black">
                      QA, Telemetry & Production Launch
                    </td>
                    <td className="py-3 px-4 space-y-1">
                      <p>• Implementation of <strong>{brand.solutions[2].title}</strong> (+{brand.solutions[2].liftPercentage}% LTV retention hook).</p>
                      <p>• Multi-device Safari/Chrome/WebKit regression testing across iPhone 13–16.</p>
                      <p>• Live conversion delta tracking and 30-day telemetry monitoring handoff.</p>
                    </td>
                    <td className="py-3 px-4 font-mono text-zinc-600 dark:text-zinc-400 print:text-zinc-700">Day {brand.metrics.turnaroundDays}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Financial Summary & Payback Table */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 print:text-zinc-600 font-bold">
              3. Commercial Investment & Return Modeling
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              
              <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 print:bg-white print:border-zinc-300">
                <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block">Fixed Retainer Fee</span>
                <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 print:text-black block mt-1">
                  {formatCurrency(brand.metrics.implementationFeeUSD)}
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block mt-0.5">50% at Kickoff / 50% at Launch</span>
              </div>

              <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 print:bg-white print:border-zinc-300">
                <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block">Projected Monthly GMV Lift</span>
                <span className="text-2xl font-black text-zinc-950 dark:text-zinc-50 print:text-black block mt-1">
                  +{formatCurrency(calc.monthlyRevenueRecovered)}
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block mt-0.5">Based on {formatNumber(brand.metrics.monthlyTraffic)} visits/mo</span>
              </div>

              <div className="p-4 border border-zinc-950 dark:border-zinc-700 bg-zinc-950 dark:bg-zinc-900 text-white print:bg-zinc-100 print:text-black print:border-zinc-400">
                <span className="text-[10px] uppercase text-zinc-400 print:text-zinc-600 block">Retainer Payback Window</span>
                <span className="text-2xl font-black text-white print:text-black block mt-1">
                  {calc.retainerPaybackDays} Business Days
                </span>
                <span className="text-[10px] text-emerald-400 print:text-emerald-700 block mt-0.5 font-bold">
                  {(calc.annualRevenueRecovered / brand.metrics.implementationFeeUSD).toFixed(1)}x 12-Month Net Multiple
                </span>
              </div>

            </div>
          </div>

          {/* Legal Sign-Off & Execution Block */}
          <div className="pt-8 border-t-2 border-zinc-950 dark:border-zinc-700 print:border-black space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-xs font-mono">
              
              <div className="space-y-4 border border-zinc-200 dark:border-zinc-800 print:border-zinc-300 p-4">
                <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block font-bold">FOR: BILLY BENJAMIN CONSULTING</span>
                <div className="h-10 border-b border-zinc-300 dark:border-zinc-700 print:border-zinc-400 flex items-end pb-1 font-serif italic text-zinc-950 dark:text-zinc-50 print:text-black text-sm">
                  Billy Benjamin
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                  <p>Name: Billy Benjamin</p>
                  <p>Title: Principal E-Commerce Architect</p>
                  <p>Date: {currentDate}</p>
                </div>
              </div>

              <div className="space-y-4 border border-zinc-200 dark:border-zinc-800 print:border-zinc-300 p-4">
                <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 print:text-zinc-600 block font-bold">FOR: {brand.name.toUpperCase()}</span>
                <div className="h-10 border-b border-zinc-300 dark:border-zinc-700 print:border-zinc-400 flex items-end pb-1 text-zinc-400 dark:text-zinc-500 print:text-zinc-500 italic text-xs">
                  [Authorized Signature]
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 print:text-zinc-700">
                  <p>Target Title: {brand.decisionMakerTitles.split(',')[0]}</p>
                  <p>Entity: {brand.name}</p>
                  <p>Date: Pending Kickoff</p>
                </div>
              </div>

            </div>

            {/* Bottom Accept Button Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                Transmitted via Billy Benjamin Consulting Systems Archive v4.0
              </span>

              <a
                href={acceptMailto}
                className="w-full sm:w-auto px-8 py-3 bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 font-mono font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-lg"
              >
                Accept Statement of Work & Schedule Kickoff →
              </a>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}
