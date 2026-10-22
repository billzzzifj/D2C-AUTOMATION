import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { useBrands } from '../context/BrandContext';
import { calculateRevenueImpact, formatCurrency, formatNumber, formatPercent } from '../utils/revenueMath';
import { 
  Download, 
  Search, 
  Sliders, 
  ExternalLink, 
  Copy, 
  Check, 
  Mail, 
  FileText, 
  TrendingUp, 
  ShieldAlert, 
  Clock, 
  DollarSign, 
  ArrowUpRight,
  ChevronRight,
  Eye,
  RefreshCw,
  Send,
  UserCheck,
  Building,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function OutreachCommandCenter() {
  const {
    brands,
    allBrands,
    stages,
    selectedBrand,
    selectedBrandId,
    setSelectedBrandId,
    viewMode,
    setViewMode,
    activeSector,
    setActiveSector,
    searchQuery,
    setSearchQuery,
    aggregateMetrics,
    updateBrandStatus,
    updateBrandContacts,
    updateBrandMetrics,
    resetAllToDefaults,
    exportMasterCSV,
    showToast,
    toastMessage
  } = useBrands();

  const [activeInspectorTab, setActiveInspectorTab] = useState('audit'); // 'audit' | 'sequence' | 'sow'
  const [copiedTouchIndex, setCopiedTouchIndex] = useState(null);

  // Editable contacts state bound to selected brand
  const [editEmail, setEditEmail] = useState(selectedBrand.email);
  const [editInstagram, setEditInstagram] = useState(selectedBrand.instagram.handle);
  const [editTitles, setEditTitles] = useState(selectedBrand.decisionMakerTitles);
  const [editFee, setEditFee] = useState(selectedBrand.metrics.implementationFeeUSD);
  const [editDays, setEditDays] = useState(selectedBrand.metrics.turnaroundDays);

  // Sync edit state when selected brand changes
  React.useEffect(() => {
    setEditEmail(selectedBrand.email);
    setEditInstagram(selectedBrand.instagram.handle);
    setEditTitles(selectedBrand.decisionMakerTitles);
    setEditFee(selectedBrand.metrics.implementationFeeUSD);
    setEditDays(selectedBrand.metrics.turnaroundDays);
  }, [selectedBrand.id]);

  const saveContacts = () => {
    updateBrandContacts(selectedBrand.id, {
      email: editEmail,
      instagramHandle: editInstagram,
      decisionMakerTitles: editTitles
    });
  };

  const saveMetrics = () => {
    updateBrandMetrics(selectedBrand.id, {
      implementationFeeUSD: Number(editFee) || 15000,
      turnaroundDays: Number(editDays) || 21
    });
  };

  // Selected brand revenue math calculation
  const selectedCalc = calculateRevenueImpact({
    traffic: selectedBrand.metrics.monthlyTraffic,
    baseCVR: selectedBrand.metrics.currentCVR,
    baseAOV: selectedBrand.metrics.currentAOV,
    baseRepeatRate: selectedBrand.metrics.repeatPurchaseRate,
    solutions: selectedBrand.solutions,
    activeSolutionIds: selectedBrand.solutions.map(s => s.id),
    implementationFeeUSD: selectedBrand.metrics.implementationFeeUSD
  });

  const demoLink = `${window.location.origin}${window.location.pathname}#/demo/${selectedBrand.slug}`;
  const proposalLink = `${window.location.origin}${window.location.pathname}#/proposal/${selectedBrand.slug}`;

  // 4-Stage Automated Sequence Scripts
  const sequenceTouches = [
    {
      step: "TOUCH 01",
      day: "Day 1",
      channel: "Cold Email",
      title: "The Forensic Revenue Audit",
      subject: `Forensic audit: $${Math.round(selectedCalc.monthlyRevenueRecovered / 1000)}k/mo conversion leak on ${selectedBrand.name}'s mobile storefront`,
      body: `Hey ${selectedBrand.name} team,

I’m the Principal CRO Systems Architect at Billy Benjamin Consulting. 

We conducted a technical architectural audit of ${selectedBrand.name}'s mobile storefront. Our models isolated a primary bottleneck: "${selectedBrand.forensicAudit.primaryFrictionHeadline}"

With an estimated ${formatNumber(selectedBrand.metrics.monthlyTraffic)} monthly sessions and $${selectedBrand.metrics.currentAOV} AOV, compounding 3 engineering interventions:
1. ${selectedBrand.solutions[0].title} (+${selectedBrand.solutions[0].liftPercentage}% CVR)
2. ${selectedBrand.solutions[1].title} (+${selectedBrand.solutions[1].liftPercentage}% AOV)
3. ${selectedBrand.solutions[2].title} (+${selectedBrand.solutions[2].liftPercentage}% LTV)

recaptures an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in net-new GMV (${formatCurrency(selectedCalc.annualRevenueRecovered)}/year).

We modeled the interactive architecture report and wireframes here:
${demoLink}

Open to sending over a 3-minute technical teardown if your e-commerce engineering lead is interested.

Billy Benjamin
Principal Architect, Billy Benjamin Consulting`
    },
    {
      step: "TOUCH 02",
      day: "Day 3",
      channel: "Instagram DM",
      title: "Visual & Mobile Checkout Teardown",
      subject: "Instagram Direct Message",
      body: `Hey ${selectedBrand.name} team—obsessed with your recent catalog releases. I'm a principal e-commerce systems architect and isolated a specific mobile checkout friction point costing ${selectedBrand.name} an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in leaked conversion revenue. We mapped the technical wireframe solution and interactive math here: ${demoLink}`
    },
    {
      step: "TOUCH 03",
      day: "Day 5",
      channel: "LinkedIn InMail",
      title: "Founder / E-Com Director Note",
      subject: `${selectedBrand.name} conversion engineering & ${formatCurrency(selectedCalc.annualRevenueRecovered)} leak`,
      body: `Hi team — huge admirer of ${selectedBrand.name}'s positioning in ${selectedBrand.sector}. 

Our studio engineers headless storefronts and checkout optimization for $5M–$100M D2C brands. We stress-tested ${selectedBrand.name}'s mobile funnel against our benchmark matrix. 

Current architecture is leaking an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)} every 30 days due to: "${selectedBrand.forensicAudit.primaryFrictionHeadline}".

We built an interactive compound revenue simulator and Statement of Work:
${demoLink}

Would love to share the technical wireframe with your Head of E-Commerce if you have 5 minutes this week.`
    },
    {
      step: "TOUCH 04",
      day: "Day 8",
      channel: "Breakup Email",
      title: "The Breakup & Retainer Payback Math Bump",
      subject: `Closing file: ${selectedBrand.name} ${selectedCalc.retainerPaybackDays}-day payback window`,
      body: `Hey ${selectedBrand.name} team,

Assuming this isn't an active priority for Q2/Q3, so I will close out your diagnostic file.

Final takeaway: At ${selectedBrand.metrics.turnaroundDays} days implementation turnaround and a fixed investment of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the projected ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in recaptured revenue achieves full payback in exactly ${selectedCalc.retainerPaybackDays} days post-launch.

If you ever wish to deploy this architecture, the full dossier and SOW remain accessible here:
${proposalLink}

Best of luck with the upcoming drops,
Billy Benjamin`
    }
  ];

  const copySequenceTouch = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedTouchIndex(index);
    updateBrandStatus(selectedBrand.id, 'Sequence Active');
    showToast(`Copied Touch ${index + 1} and moved to Sequence Active`);
    setTimeout(() => setCopiedTouchIndex(null), 2500);
  };

  const sectors = ["All", "Skincare", "Bodycare", "Clinical Skincare", "Medicated Skincare", "Personal Care", "Fashion/Streetwear", "Functional F&B", "Home/Fragrance/Tech"];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 flex flex-col font-sans selection:bg-zinc-950 selection:text-white">
      
      {/* Top Institutional Bar */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-zinc-200">
        <div className="w-full px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Platform Identifier */}
          <div className="flex items-center gap-4">
            <BrandLogo showBadge={true} />
            <div className="hidden xl:flex items-center pl-4 border-l border-zinc-200 text-xs font-mono text-zinc-500">
              <span>GLOBAL D2C REVENUE INTELLIGENCE OS</span>
            </div>
          </div>

          {/* Right Top Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={resetAllToDefaults}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700 transition-colors"
              title="Reset all 20 brands back to default data"
            >
              <RefreshCw size={14} strokeWidth={1.5} />
              <span>Reset Archive</span>
            </button>

            <button
              onClick={exportMasterCSV}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider bg-zinc-950 hover:bg-zinc-800 text-white border border-zinc-950 transition-colors shadow-sm"
            >
              <Download size={14} strokeWidth={1.5} />
              <span>Export Master CSV</span>
            </button>
          </div>
        </div>

        {/* Top Financial Telemetry Strip (Dieter Rams Architectural Matrix) */}
        <div className="w-full bg-zinc-50 border-t border-b border-zinc-200 grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200 text-left">
          
          <div className="p-3.5 lg:px-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
              Total Addressable Leak (20 Brands)
            </span>
            <span className="text-lg lg:text-xl font-bold font-mono text-zinc-950 tabular-nums">
              {formatCurrency(aggregateMetrics.totalAddressableAnnualLeak, true)}
              <span className="text-xs font-normal text-zinc-500 ml-1">/ yr</span>
            </span>
          </div>

          <div className="p-3.5 lg:px-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
              Active Pipeline Retainer Value
            </span>
            <span className="text-lg lg:text-xl font-bold font-mono text-zinc-950 tabular-nums">
              {formatCurrency(aggregateMetrics.activePipelineRetainerValue)}
            </span>
          </div>

          <div className="p-3.5 lg:px-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
              Brands In Outbound Sequence
            </span>
            <span className="text-lg lg:text-xl font-bold font-mono text-zinc-950 tabular-nums">
              {aggregateMetrics.brandsInSequenceCount} <span className="text-xs font-normal text-zinc-500">/ 20</span>
            </span>
          </div>

          <div className="p-3.5 lg:px-6 flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 block">
                Targeted ARR Universe
              </span>
              <span className="text-lg lg:text-xl font-bold font-mono text-zinc-950 tabular-nums">
                $5M – $100M+
              </span>
            </div>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          </div>

        </div>
      </header>

      {/* Main Container: Split Grid */}
      <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        
        {/* Left Side: Table / Kanban Matrix */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-zinc-200 bg-white">
          
          {/* Controls Bar: Filters & View Modes */}
          <div className="p-3 lg:px-6 border-b border-zinc-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search size={14} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Search 20 global targets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs font-mono border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:border-zinc-900 rounded-none"
              />
            </div>

            {/* Sector Filters & View Mode */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <div className="flex items-center border border-zinc-200 divide-x divide-zinc-200 text-xs font-mono">
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 transition-colors ${viewMode === 'table' ? 'bg-zinc-950 text-white font-semibold' : 'bg-white text-zinc-600 hover:bg-zinc-50'}`}
                >
                  TABLE
                </button>
                <button
                  onClick={() => setViewMode('kanban')}
                  className={`px-3 py-1.5 transition-colors ${viewMode === 'kanban' ? 'bg-zinc-950 text-white font-semibold' : 'bg-white text-zinc-600 hover:bg-zinc-50'}`}
                >
                  PIPELINE (5)
                </button>
              </div>

              {/* Sector selector dropdown */}
              <select
                value={activeSector}
                onChange={(e) => setActiveSector(e.target.value)}
                className="text-xs font-mono border border-zinc-200 bg-white px-2.5 py-1.5 focus:outline-none focus:border-zinc-900"
              >
                {sectors.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          {/* View Mode 1: Table Matrix View */}
          {viewMode === 'table' ? (
            <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[calc(100vh-190px)]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50 font-mono text-[10px] text-zinc-500 uppercase tracking-wider sticky top-0 z-10">
                    <th className="py-2.5 px-4 font-medium">Brand & Location</th>
                    <th className="py-2.5 px-3 font-medium">Sector</th>
                    <th className="py-2.5 px-3 font-medium text-right">Traffic/Mo</th>
                    <th className="py-2.5 px-3 font-medium text-right">CVR</th>
                    <th className="py-2.5 px-3 font-medium text-right">AOV</th>
                    <th className="py-2.5 px-3 font-medium text-right">Est. Annual Leak</th>
                    <th className="py-2.5 px-3 font-medium text-right">Retainer</th>
                    <th className="py-2.5 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 font-mono">
                  {brands.map(brand => {
                    const isSelected = brand.id === selectedBrandId;
                    const calc = calculateRevenueImpact({
                      traffic: brand.metrics.monthlyTraffic,
                      baseCVR: brand.metrics.currentCVR,
                      baseAOV: brand.metrics.currentAOV,
                      baseRepeatRate: brand.metrics.repeatPurchaseRate,
                      solutions: brand.solutions,
                      activeSolutionIds: brand.solutions.map(s => s.id),
                      implementationFeeUSD: brand.metrics.implementationFeeUSD
                    });

                    return (
                      <tr
                        key={brand.id}
                        onClick={() => setSelectedBrandId(brand.id)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-zinc-100 font-medium' : 'hover:bg-zinc-50'
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="font-sans font-bold text-zinc-950 text-sm leading-tight flex items-center gap-1.5">
                            <span>{brand.name}</span>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950" />}
                          </div>
                          <span className="text-[11px] text-zinc-500 font-mono block">
                            {brand.hqLocation}
                          </span>
                        </td>
                        <td className="py-3 px-3 text-zinc-600 font-sans">
                          {brand.sector}
                        </td>
                        <td className="py-3 px-3 text-right text-zinc-900 tabular-nums font-mono">
                          {formatNumber(brand.metrics.monthlyTraffic)}
                        </td>
                        <td className="py-3 px-3 text-right text-zinc-900 tabular-nums font-mono">
                          {formatPercent(brand.metrics.currentCVR)}
                        </td>
                        <td className="py-3 px-3 text-right text-zinc-900 tabular-nums font-mono">
                          ${brand.metrics.currentAOV}
                        </td>
                        <td className="py-3 px-3 text-right text-zinc-950 font-bold tabular-nums font-mono">
                          {formatCurrency(calc.annualRevenueRecovered, true)}
                        </td>
                        <td className="py-3 px-3 text-right text-zinc-600 tabular-nums font-mono">
                          {formatCurrency(brand.metrics.implementationFeeUSD)}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-2 py-0.5 text-[10px] uppercase font-mono border ${
                            stages.find(s => s.id === brand.status)?.badge || 'border-zinc-200 bg-zinc-50'
                          }`}>
                            {brand.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            /* View Mode 2: Kanban Pipeline View (5 Stages) */
            <div className="flex-1 p-4 overflow-x-auto flex gap-4 min-w-max max-h-[calc(100vh-190px)]">
              {stages.map(stage => {
                const stageBrands = brands.filter(b => b.status === stage.id);
                return (
                  <div key={stage.id} className="w-72 flex flex-col bg-zinc-50 border border-zinc-200">
                    <div className="p-3 border-b border-zinc-200 bg-white flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-zinc-950 uppercase tracking-wider">
                        {stage.label}
                      </span>
                      <span className="text-xs font-mono px-1.5 py-0.5 bg-zinc-100 border border-zinc-200">
                        {stageBrands.length}
                      </span>
                    </div>

                    <div className="p-2 space-y-2 overflow-y-auto flex-1">
                      {stageBrands.map(b => (
                        <div
                          key={b.id}
                          onClick={() => setSelectedBrandId(b.id)}
                          className={`p-3 bg-white border cursor-pointer transition-all ${
                            b.id === selectedBrandId
                              ? 'border-zinc-950 shadow-sm'
                              : 'border-zinc-200 hover:border-zinc-400'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans font-bold text-sm text-zinc-950">{b.name}</span>
                            <span className="text-[10px] font-mono text-zinc-500">${b.metrics.currentAOV}</span>
                          </div>
                          <span className="text-[11px] text-zinc-500 font-mono block mt-0.5">{b.sector}</span>
                          
                          <div className="mt-2 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-zinc-500">{formatNumber(b.metrics.monthlyTraffic)}/mo</span>
                            <span className="font-bold text-zinc-950">Fee: {formatCurrency(b.metrics.implementationFeeUSD)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Left Footer: Brand Counter */}
          <div className="p-2.5 px-4 border-t border-zinc-200 bg-zinc-50 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
            <span>SHOWING {brands.length} OF 20 VERIFIED GLOBAL ACCOUNTS</span>
            <span>DIETER RAMS ARCHITECTURAL MONOCHROME v4.0</span>
          </div>
        </div>

        {/* Right Side: Split-Screen Forensic Inspector (680px Width) */}
        <div className="w-full lg:w-[680px] bg-white flex flex-col shrink-0 overflow-y-auto max-h-[calc(100vh-140px)] border-l border-zinc-200">
          
          {/* Inspector Header */}
          <div className="p-5 border-b border-zinc-200 bg-zinc-50">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black font-sans uppercase tracking-tight text-zinc-950">
                    {selectedBrand.name}
                  </h2>
                  <a
                    href={selectedBrand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-950 p-1"
                    title={`Visit ${selectedBrand.website}`}
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 mt-1">
                  <span>{selectedBrand.sector}</span>
                  <span>•</span>
                  <span>{selectedBrand.hqLocation}</span>
                  <span>•</span>
                  <span>Turnaround: {selectedBrand.metrics.turnaroundDays} Days</span>
                </div>
              </div>

              {/* Status Switcher Selector */}
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">Stage Status</span>
                <select
                  value={selectedBrand.status}
                  onChange={(e) => updateBrandStatus(selectedBrand.id, e.target.value)}
                  className="text-xs font-mono font-semibold border border-zinc-300 bg-white px-2 py-1 mt-0.5 focus:outline-none focus:border-zinc-950"
                >
                  {stages.map(s => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick 1-Click Action Row */}
            <div className="mt-4 pt-3 border-t border-zinc-200 flex flex-wrap items-center gap-2">
              <Link
                to={`/demo/${selectedBrand.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-zinc-950 text-white hover:bg-zinc-800 transition-colors"
              >
                <Eye size={14} strokeWidth={1.5} />
                <span>Launch Client Audit (/#/demo/{selectedBrand.slug})</span>
              </Link>

              <Link
                to={`/proposal/${selectedBrand.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-zinc-300 bg-white hover:bg-zinc-100 text-zinc-900 transition-colors"
              >
                <FileText size={14} strokeWidth={1.5} />
                <span>SOW Proposal (/#/proposal/{selectedBrand.slug})</span>
              </Link>

              <a
                href={selectedBrand.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700"
                title={`Open Instagram: ${selectedBrand.instagram.handle}`}
              >
                IG: {selectedBrand.instagram.handle}
              </a>

              <a
                href={selectedBrand.linkedinSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-xs font-mono border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-700"
                title="Search Decision Makers on LinkedIn"
              >
                LinkedIn DM
              </a>
            </div>
          </div>

          {/* Sub-Tabs Selector */}
          <div className="flex border-b border-zinc-200 bg-white text-xs font-mono">
            <button
              onClick={() => setActiveInspectorTab('audit')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeInspectorTab === 'audit'
                  ? 'border-zinc-950 text-zinc-950 font-bold bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 bg-zinc-50'
              }`}
            >
              SUB-TAB A: TEARDOWN & CONTACTS
            </button>
            <button
              onClick={() => setActiveInspectorTab('sequence')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeInspectorTab === 'sequence'
                  ? 'border-zinc-950 text-zinc-950 font-bold bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 bg-zinc-50'
              }`}
            >
              SUB-TAB B: 4-STAGE OUTREACH
            </button>
            <button
              onClick={() => setActiveInspectorTab('sow')}
              className={`flex-1 py-2.5 text-center transition-colors border-b-2 ${
                activeInspectorTab === 'sow'
                  ? 'border-zinc-950 text-zinc-950 font-bold bg-white'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 bg-zinc-50'
              }`}
            >
              SUB-TAB C: SOW & CONFIG
            </button>
          </div>

          {/* Inspector Content Body */}
          <div className="p-5 flex-1 overflow-y-auto space-y-6">
            
            {/* SUB-TAB A: TEARDOWN & CONTACTS */}
            {activeInspectorTab === 'audit' && (
              <div className="space-y-6 text-xs">
                
                {/* Executive Primary Leak Box */}
                <div className="p-4 bg-zinc-950 text-white border border-zinc-950">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] uppercase mb-1">
                    <ShieldAlert size={14} strokeWidth={1.5} />
                    <span>Primary Architectural Friction Headline</span>
                  </div>
                  <p className="text-sm font-sans font-medium leading-snug">
                    "{selectedBrand.forensicAudit.primaryFrictionHeadline}"
                  </p>
                </div>

                {/* Brand Strengths */}
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Validated Brand Equity & Moats
                  </h4>
                  <ul className="space-y-1.5 font-sans">
                    {selectedBrand.forensicAudit.brandStrengths.map((str, idx) => (
                      <li key={idx} className="p-2.5 bg-zinc-50 border border-zinc-200 text-zinc-800 flex items-start gap-2">
                        <span className="font-mono text-zinc-400 font-bold">{idx + 1}.</span>
                        <span>{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3 Technical Bottlenecks */}
                <div>
                  <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-2">
                    Granular Technical / UX Failure Modes
                  </h4>
                  <div className="space-y-2">
                    {selectedBrand.forensicAudit.technicalBottlenecks.map((bot, idx) => (
                      <div key={idx} className="p-3 border border-zinc-200 bg-white">
                        <span className="font-mono text-[10px] uppercase text-zinc-500 block mb-1">
                          BOTTLENECK {idx + 1}
                        </span>
                        <p className="text-zinc-800 leading-relaxed font-sans">{bot}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline-Editable Contact Intelligence Form */}
                <div className="pt-4 border-t border-zinc-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Contact & Decision-Maker Intelligence
                    </h4>
                    <button
                      onClick={saveContacts}
                      className="text-xs font-mono font-bold bg-zinc-900 text-white px-2.5 py-1 hover:bg-zinc-800 transition-colors"
                    >
                      Save Contacts
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Corporate Email</label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:border-zinc-950"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Instagram Handle</label>
                      <input
                        type="text"
                        value={editInstagram}
                        onChange={(e) => setEditInstagram(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:border-zinc-950"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="text-[10px] text-zinc-500 block mb-1">Target Decision Maker Roles</label>
                      <input
                        type="text"
                        value={editTitles}
                        onChange={(e) => setEditTitles(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-200 bg-zinc-50 focus:bg-white focus:outline-none focus:border-zinc-950 font-sans"
                      />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* SUB-TAB B: 4-STAGE OUTREACH SEQUENCE GENERATOR */}
            {activeInspectorTab === 'sequence' && (
              <div className="space-y-4">
                <div className="p-3 bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-600 flex items-center justify-between">
                  <span>AUTONOMOUS SEQUENCE GENERATOR</span>
                  <span className="font-bold text-zinc-950">4 TOUCHPOINTS READY</span>
                </div>

                {sequenceTouches.map((touch, idx) => (
                  <div key={idx} className="border border-zinc-200 bg-white">
                    <div className="p-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black bg-zinc-950 text-white px-1.5 py-0.5">
                          {touch.step}
                        </span>
                        <span className="font-mono text-xs text-zinc-500">{touch.day}</span>
                        <span className="font-sans font-semibold text-xs text-zinc-900">• {touch.title}</span>
                      </div>
                      <span className="text-[10px] font-mono border border-zinc-300 px-2 py-0.5 uppercase bg-white">
                        {touch.channel}
                      </span>
                    </div>

                    <div className="p-3 space-y-2">
                      <div className="text-[11px] font-mono text-zinc-600 bg-zinc-50 p-2 border border-zinc-100">
                        <span className="text-zinc-400">Subject: </span>{touch.subject}
                      </div>

                      <textarea
                        readOnly
                        rows={8}
                        value={touch.body}
                        className="w-full p-2.5 text-xs font-mono bg-white border border-zinc-200 focus:outline-none resize-none leading-relaxed text-zinc-800"
                      />

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[10px] font-mono text-zinc-500">
                          Injects live {formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo calculation
                        </span>

                        <button
                          onClick={() => copySequenceTouch(touch.body, idx)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono font-bold bg-zinc-950 hover:bg-zinc-800 text-white transition-colors"
                        >
                          {copiedTouchIndex === idx ? (
                            <>
                              <Check size={12} strokeWidth={2} />
                              <span>COPIED & ACTIVE</span>
                            </>
                          ) : (
                            <>
                              <Copy size={12} strokeWidth={1.5} />
                              <span>Copy Script & Mark Active</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SUB-TAB C: SOW & RETAINER CONFIGURATOR */}
            {activeInspectorTab === 'sow' && (
              <div className="space-y-6 text-xs font-mono">
                
                <div className="p-4 bg-zinc-50 border border-zinc-200 space-y-3">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    Custom Retainer & SLA Variables
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Fixed Retainer Fee (USD)</label>
                      <input
                        type="number"
                        step="500"
                        value={editFee}
                        onChange={(e) => setEditFee(e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-300 bg-white text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-1">Turnaround Days (SLA)</label>
                      <input
                        type="number"
                        step="1"
                        value={editDays}
                        onChange={(e) => setEditDays(e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-300 bg-white text-sm font-bold"
                      />
                    </div>
                  </div>

                  <button
                    onClick={saveMetrics}
                    className="w-full py-2 bg-zinc-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-zinc-800 transition-colors"
                  >
                    Save & Update SOW Parameters
                  </button>
                </div>

                {/* Live Payback & ROI Summary */}
                <div className="p-4 border border-zinc-200 bg-white space-y-2">
                  <span className="text-[10px] uppercase text-zinc-500 block">SOW Commercial Telemetry</span>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Fixed Architecture Investment:</span>
                    <span className="font-bold text-zinc-950">{formatCurrency(selectedBrand.metrics.implementationFeeUSD)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Projected Monthly GMV Lift:</span>
                    <span className="font-bold text-zinc-950">{formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-600">Payback Timeline Window:</span>
                    <span className="font-bold text-zinc-950">{selectedCalc.retainerPaybackDays} Business Days</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-600">First-Year Net ROI Multiple:</span>
                    <span className="font-bold text-zinc-950">
                      {(selectedCalc.annualRevenueRecovered / selectedBrand.metrics.implementationFeeUSD).toFixed(1)}x Multiple
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/proposal/${selectedBrand.slug}`}
                    className="w-full py-2.5 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 text-zinc-950 font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Print-Ready Commercial Proposal</span>
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </Link>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-950 text-white text-xs font-mono px-4 py-2.5 shadow-xl border border-zinc-800 flex items-center gap-2">
          <Check size={14} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
