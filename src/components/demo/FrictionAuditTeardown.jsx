import React from 'react';
import { 
  AlertOctagon, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Smartphone, 
  CreditCard, 
  Sliders, 
  ShieldCheck 
} from 'lucide-react';

export default function FrictionAuditTeardown({ brand }) {
  const frictionList = brand.frictionPoints || [
    "Sub-optimal mobile checkout layout causing CVR drop",
    "Lacks 1-tap Apple Pay anchor on initial view",
    "Static imagery fails to convert mobile product detail page visitors"
  ];

  return (
    <section id="friction-audit" className="relative scroll-mt-20">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
        
        {/* Section Header */}
        <div className="mb-8 pb-6 border-b border-white/[0.08]">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
            <AlertOctagon className="w-3.5 h-3.5" />
            <span>Module 3 // Mobile UX Friction Teardown</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
            Identified Mobile Conversion Friction Points for {brand.name}
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            Our audit isolated 3 specific checkout and product-page bottlenecks currently causing high-intent mobile visitors to abandon purchase intent.
          </p>
        </div>

        {/* 3 Friction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {frictionList.map((point, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-black/60 border border-red-500/20 relative group hover:border-red-500/40 transition-all">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-red-400 font-semibold px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20">
                  Bottleneck #{idx + 1}
                </span>
                <span className="text-xs font-mono text-zinc-500">CVR Impact: -0.4%</span>
              </div>
              <h4 className="text-sm font-semibold text-white mb-2 leading-snug">
                {point}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Mobile sessions experience cognitive friction and layout shift, increasing exit probability before cart authorization.
              </p>
            </div>
          ))}
        </div>

        {/* Before vs After Wireframe Teardown */}
        <div className="p-6 rounded-2xl bg-black/70 border border-white/[0.08]">
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider font-mono">
            Architecture Comparison: Legacy Mobile Flow vs Billy Benjamin Consulting Architecture
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Legacy Column */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-red-500/20 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wide">
                  Current Store Architecture (1.2% CVR)
                </span>
                <span className="text-[10px] font-mono text-zinc-500">Legacy Shopify Flow</span>
              </div>

              <div className="space-y-2 text-xs text-zinc-400">
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.04] flex items-center justify-between">
                  <span>1. First Load & Hero View</span>
                  <span className="text-red-400 font-mono text-[11px]">3.8s LCP (Lag)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.04] flex items-center justify-between">
                  <span>2. Product Exploration</span>
                  <span className="text-red-400 font-mono text-[11px]">Static Flat Imagery</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.04] flex items-center justify-between">
                  <span>3. Add-To-Cart Trigger</span>
                  <span className="text-red-400 font-mono text-[11px]">Unanchored (Requires Scroll)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-white/[0.04] flex items-center justify-between">
                  <span>4. Checkout Authorization</span>
                  <span className="text-red-400 font-mono text-[11px]">4 Required Form Fields</span>
                </div>
              </div>
            </div>

            {/* Billy Benjamin Consulting Column */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Billy Benjamin Consulting Architecture (2.8% CVR)</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">14-Day Deployment</span>
              </div>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex items-center justify-between">
                  <span>1. First Load & Hero View</span>
                  <span className="text-emerald-400 font-mono text-[11px]">540ms LCP (Instant)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex items-center justify-between">
                  <span>2. Product Exploration</span>
                  <span className="text-emerald-400 font-mono text-[11px]">360° Spatial Turntable</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex items-center justify-between">
                  <span>3. Add-To-Cart Trigger</span>
                  <span className="text-emerald-400 font-mono text-[11px]">Sticky 1-Tap Drawer</span>
                </div>
                <div className="p-2.5 rounded-lg bg-black/50 border border-emerald-500/20 flex items-center justify-between">
                  <span>4. Checkout Authorization</span>
                  <span className="text-emerald-400 font-mono text-[11px]">Direct Biometric Apple Pay</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
