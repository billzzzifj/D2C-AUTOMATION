import React from 'react';
import Header from '../components/common/Header';
import StatsOverview from '../components/crm/StatsOverview';
import KanbanBoard from '../components/crm/KanbanBoard';
import PitchGeneratorModal from '../components/crm/PitchGeneratorModal';
import AddBrandModal from '../components/crm/AddBrandModal';
import Toast from '../components/common/Toast';
import { useBrands } from '../context/BrandContext';
import { Search, Sparkles, ShieldCheck } from 'lucide-react';

export function OutreachCommandCenter() {
  const { 
    brands, 
    allBrands, 
    activeSector, 
    setActiveSector, 
    searchQuery, 
    setSearchQuery, 
    sectors 
  } = useBrands();

  return (
    <div className="min-h-screen bg-black text-white relative pb-20 selection:bg-indigo-500/30">
      {/* Background ambient radial gradients */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/[0.07] blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-emerald-600/[0.03] blur-[160px] pointer-events-none" />

      {/* Main Navigation Bar */}
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Page Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/[0.04] border border-white/[0.08] text-zinc-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Billy Benjamin Consulting • Outreach Pipeline</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-sans">
              Global D2C Client Acquisition Engine
            </h1>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              Targeting $1M–$50M/yr brands with automated revenue-bleed audits, AI visualizer simulations, and multi-channel outreach.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.05]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>State Synchronized in LocalStorage</span>
          </div>
        </div>

        {/* Global Pipeline Metrics Overview */}
        <StatsOverview />

        {/* Search & Sector Filters Bar */}
        <div className="mb-6 p-4 rounded-2xl glass-panel flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by brand, sector, or handle..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/60 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500/60"
            />
          </div>

          {/* Sector Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto scrollbar-none py-1">
            {sectors.map(sector => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeSector === sector
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/40'
                    : 'bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/[0.06] border border-white/[0.06]'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Filter count feedback */}
        <div className="mb-4 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Displaying {brands.length} of {allBrands.length} target brands</span>
          <span>Drag cards between pipeline columns to advance deal status</span>
        </div>

        {/* Kanban Board */}
        <KanbanBoard />

      </main>

      {/* Modals & Toasts */}
      <PitchGeneratorModal />
      <AddBrandModal />
      <Toast />
    </div>
  );
}

export default OutreachCommandCenter;
