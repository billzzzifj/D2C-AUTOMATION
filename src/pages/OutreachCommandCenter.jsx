import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import { useBrands } from '../context/BrandContext';
import { calculateRevenueImpact, formatCurrency, formatNumber, formatPercent } from '../utils/revenueMath';
import { 
  Download, 
  Search, 
  ExternalLink, 
  Copy, 
  Check, 
  Mail, 
  FileText, 
  ShieldAlert, 
  ChevronRight, 
  ChevronLeft, 
  Eye, 
  RefreshCw, 
  Building, 
  ArrowRight, 
  User, 
  Target, 
  Crosshair 
} from 'lucide-react';

export default function OutreachCommandCenter() {
  const { theme } = useTheme();
  const {
    brands,
    allBrands,
    stages,
    selectedBrand,
    selectedBrandId,
    setSelectedBrandId,
    viewMode,
    setViewMode,
    activeTier,
    setActiveTier,
    activeSector,
    setActiveSector,
    searchQuery,
    setSearchQuery,
    aggregateMetrics,
    updateBrandStatus,
    updateBrandContacts,
    updateBrandMetrics,
    togglePincerStep,
    resetAllToDefaults,
    exportMasterCSV,
    showToast,
    toastMessage
  } = useBrands();

  const [activeInspectorTab, setActiveInspectorTab] = useState('audit'); // 'audit' | 'sequence' | 'sow'
  const [targetMode, setTargetMode] = useState('founder'); // 'founder' | 'brand' (default founder direct)
  const [copiedTouchIndex, setCopiedTouchIndex] = useState(null);
  const [copiedLinkType, setCopiedLinkType] = useState(null); // 'demo' | 'proposal'
  const [copiedPincerStep, setCopiedPincerStep] = useState(null);
  const [lockThemeToLink, setLockThemeToLink] = useState(true);

  // Stepper & keyboard navigation through filtered brands
  const currentBrandIndex = brands.findIndex(b => b.id === selectedBrand.id);
  const hasPrevBrand = currentBrandIndex > 0;
  const hasNextBrand = currentBrandIndex >= 0 && currentBrandIndex < brands.length - 1;

  const selectPrevBrand = React.useCallback(() => {
    if (hasPrevBrand) {
      setSelectedBrandId(brands[currentBrandIndex - 1].id);
    }
  }, [hasPrevBrand, brands, currentBrandIndex, setSelectedBrandId]);

  const selectNextBrand = React.useCallback(() => {
    if (hasNextBrand) {
      setSelectedBrandId(brands[currentBrandIndex + 1].id);
    }
  }, [hasNextBrand, brands, currentBrandIndex, setSelectedBrandId]);

  // Keyboard navigation: Esc to unfocus, ArrowUp/k for Prev Brand, ArrowDown/j for Next Brand
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target?.tagName)) return;
      if (e.key === 'ArrowUp' || e.key === 'k') {
        e.preventDefault();
        selectPrevBrand();
      } else if (e.key === 'ArrowDown' || e.key === 'j') {
        e.preventDefault();
        selectNextBrand();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectPrevBrand, selectNextBrand]);

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

  // Extract Founder Intelligence for direct executive recon
  const primaryFounder = selectedBrand.founders?.[0] || {
    name: selectedBrand.executiveOutreach?.primaryFounderName || "Founder",
    role: selectedBrand.executiveOutreach?.primaryFounderRole || "Founder & CEO",
    personalIG: selectedBrand.executiveOutreach?.primaryPersonalIG || selectedBrand.instagram.handle,
    personalIGUrl: selectedBrand.executiveOutreach?.primaryPersonalIGUrl || selectedBrand.instagram.url,
    directEmail: selectedBrand.executiveOutreach?.directEmail || selectedBrand.email,
    linkedinUrl: selectedBrand.executiveOutreach?.linkedinSearchUrl || selectedBrand.linkedinSearchUrl,
    founderHook: selectedBrand.executiveOutreach?.founderHook || "Direct-to-consumer brand craft and conversion architecture."
  };
  const founderFirstName = primaryFounder.name.split(' ')[0] || primaryFounder.name;
  const pincerProgress = selectedBrand.pincerProgress || [false, false, false];
  const pincerCompletedCount = pincerProgress.filter(Boolean).length;
  const isPincerComplete = pincerCompletedCount === 3;

  const copyPincerSnippet = (text, stepKey) => {
    navigator.clipboard.writeText(text);
    setCopiedPincerStep(stepKey);
    showToast(`Copied ${stepKey === 'step2' ? '2-Line IG DM' : 'LinkedIn Note'} to clipboard`);
    setTimeout(() => setCopiedPincerStep(null), 2500);
  };

  const themeQuery = lockThemeToLink ? `?theme=${theme}` : '';
  const demoLink = `${window.location.origin}${window.location.pathname}#/demo/${selectedBrand.slug}${themeQuery}`;
  const proposalLink = `${window.location.origin}${window.location.pathname}#/proposal/${selectedBrand.slug}${themeQuery}`;

  const copyLinkWithFeedback = (url, type) => {
    navigator.clipboard.writeText(url);
    setCopiedLinkType(type);
    showToast(`Copied ${type === 'demo' ? 'Client Audit' : 'Proposal'} link to clipboard`);
    setTimeout(() => setCopiedLinkType(null), 2000);
  };

  // 4-Stage Automated Sequence Scripts (Dynamic: Founder-Direct vs. Brand Desk + Zero-Web vs. Scaled)
  const isZeroWebOrDrop = selectedBrand.webStatus === "IG DM / Linktree Only (No Website)" || selectedBrand.webStatus === "Password-Locked Drop Site";

  const sequenceTouches = isZeroWebOrDrop ? (
    targetMode === 'founder' ? [
      {
        step: "TOUCH 01",
        day: "Day 1",
        channel: "Founder Personal IG DM",
        title: "Founder Direct Bypass // The Flagship Wireframe",
        subject: "Direct Message",
        body: `Hey ${founderFirstName} — huge respect for what you've built with ${selectedBrand.name} (${primaryFounder.founderHook}). Noticed you're currently routing orders through ${selectedBrand.webStatus}, which means you're likely losing ~60% of impulse international buyers who won't wait on manual DM replies or locked drop pages. I built a working prototype of a custom editorial flagship + automated configurator tailored specifically for ${selectedBrand.name} showing how it unlocks +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in captured orders: ${demoLink}`
      },
      {
        step: "TOUCH 02",
        day: "Day 3",
        channel: "Founder Direct Email",
        title: "The Zero-to-One Flagship SOW",
        subject: `Flagship blueprint: +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo by replacing ${selectedBrand.name}'s ${selectedBrand.webStatus}`,
        body: `Hey ${founderFirstName},

I’m the Principal E-Commerce Systems Architect at Billy Benjamin Consulting. 

${primaryFounder.founderHook}

We audited ${selectedBrand.name} and modeled how replacing manual ${selectedBrand.webStatus} friction with a ${selectedBrand.metrics.turnaroundDays}-day turnkey editorial flagship captures an estimated +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in net-new GMV (+${formatCurrency(selectedCalc.annualRevenueRecovered)}/year).

Our architecture compounds 3 turnkey systems:
1. ${selectedBrand.solutions[0].title} (+${selectedBrand.solutions[0].liftPercentage}% CVR lever)
2. ${selectedBrand.solutions[1].title} (+${selectedBrand.solutions[1].liftPercentage}% AOV lever)
3. ${selectedBrand.solutions[2].title} (+${selectedBrand.solutions[2].liftPercentage}% LTV lever)

At a fixed engagement fee of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the architecture achieves full payback in ${selectedCalc.retainerPaybackDays} business days.

We deployed the working prototype and interactive wireframes here:
${demoLink}

Open to sending over a 3-minute technical walkthrough if you're exploring launching a permanent storefront.

Billy Benjamin
Principal Architect, Billy Benjamin Consulting`
      },
      {
        step: "TOUCH 03",
        day: "Day 5",
        channel: "LinkedIn Founder InMail",
        title: "Founder / Managing Director Note",
        subject: `${selectedBrand.name} flagship transition & ${formatCurrency(selectedCalc.annualRevenueRecovered)} captured GMV`,
        body: `Hi ${founderFirstName} — huge admirer of ${selectedBrand.name}'s craft and aesthetic positioning in ${selectedBrand.sector}.

We engineer high-converting editorial flagships for independent cult labels. We modeled how transitioning from ${selectedBrand.webStatus} into an automated mobile storefront recaptures an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in leaked conversion revenue.

We deployed a private working prototype and Statement of Work here:
${demoLink}

Would love to share the technical wireframe with you if you have 5 minutes this week.`
      },
      {
        step: "TOUCH 04",
        day: "Day 8",
        channel: "Breakup Email",
        title: "Closing File & Flagship SOW",
        subject: `Closing file: ${selectedBrand.name} ${selectedCalc.retainerPaybackDays}-day payback window`,
        body: `Hey ${founderFirstName},

Closing out your architectural file for now. At ${selectedBrand.metrics.turnaroundDays} business days turnaround and a fixed investment of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the projected ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in recaptured revenue achieves full payback in exactly ${selectedCalc.retainerPaybackDays} days post-launch.

Whenever you're ready to transition off ${selectedBrand.webStatus} to a scalable flagship, your interactive audit and scope remain live here:
${proposalLink}

Best of luck with the upcoming drops,
Billy Benjamin`
      }
    ] : [
      {
        step: "TOUCH 01",
        day: "Day 1",
        channel: "Instagram DM",
        title: "Brand Desk DM // The Flagship Prototype",
        subject: "Instagram Direct Message",
        body: `Hey ${selectedBrand.name} team — huge respect for the craft and visual direction. Noticed you're currently routing orders through ${selectedBrand.webStatus}, which means you're likely losing ~60% of impulse international buyers who won't wait on manual DM replies or locked drop pages. I built a working prototype of a custom editorial flagship + automated configurator tailored specifically for ${selectedBrand.name} showing how it unlocks +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in captured orders: ${demoLink}`
      },
      {
        step: "TOUCH 02",
        day: "Day 3",
        channel: "Cold Email",
        title: "The Zero-to-One Flagship SOW",
        subject: `Flagship blueprint: +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo by replacing ${selectedBrand.name}'s ${selectedBrand.webStatus}`,
        body: `Hey ${selectedBrand.name} team,

I’m the Principal E-Commerce Systems Architect at Billy Benjamin Consulting. 

We audited ${selectedBrand.name} and modeled how replacing manual ${selectedBrand.webStatus} friction with a ${selectedBrand.metrics.turnaroundDays}-day turnkey editorial flagship captures an estimated +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in net-new GMV (+${formatCurrency(selectedCalc.annualRevenueRecovered)}/year).

Our architecture compounds 3 turnkey systems:
1. ${selectedBrand.solutions[0].title} (+${selectedBrand.solutions[0].liftPercentage}% CVR lever)
2. ${selectedBrand.solutions[1].title} (+${selectedBrand.solutions[1].liftPercentage}% AOV lever)
3. ${selectedBrand.solutions[2].title} (+${selectedBrand.solutions[2].liftPercentage}% LTV lever)

At a fixed engagement fee of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the architecture achieves full payback in ${selectedCalc.retainerPaybackDays} business days.

We deployed the working prototype and interactive wireframes here:
${demoLink}

Open to sending over a 3-minute technical walkthrough if you're exploring launching a permanent storefront.

Billy Benjamin
Principal Architect, Billy Benjamin Consulting`
      },
      {
        step: "TOUCH 03",
        day: "Day 5",
        channel: "LinkedIn InMail",
        title: "Managing Director Note",
        subject: `${selectedBrand.name} flagship transition & ${formatCurrency(selectedCalc.annualRevenueRecovered)} captured GMV`,
        body: `Hi team — huge admirer of ${selectedBrand.name}'s craft and aesthetic positioning in ${selectedBrand.sector}.

We engineer high-converting editorial flagships for independent cult labels. We modeled how transitioning from ${selectedBrand.webStatus} into an automated mobile storefront recaptures an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in leaked conversion revenue.

We deployed a private working prototype and Statement of Work here:
${demoLink}

Would love to share the technical wireframe with your leadership if you have 5 minutes this week.`
      },
      {
        step: "TOUCH 04",
        day: "Day 8",
        channel: "Breakup Email",
        title: "Closing File & Flagship SOW",
        subject: `Closing file: ${selectedBrand.name} ${selectedCalc.retainerPaybackDays}-day payback window`,
        body: `Hey ${selectedBrand.name} team,

Closing out your architectural file for now. At ${selectedBrand.metrics.turnaroundDays} business days turnaround and a fixed investment of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the projected ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in recaptured revenue achieves full payback in exactly ${selectedCalc.retainerPaybackDays} days post-launch.

Whenever you're ready to transition off ${selectedBrand.webStatus} to a scalable flagship, your interactive audit and scope remain live here:
${proposalLink}

Best of luck with the upcoming drops,
Billy Benjamin`
      }
    ]
  ) : (
    targetMode === 'founder' ? [
      {
        step: "TOUCH 01",
        day: "Day 1",
        channel: "Founder Direct Email",
        title: "Founder-Direct Forensic Revenue Audit",
        subject: `Forensic audit: $${Math.round(selectedCalc.monthlyRevenueRecovered / 1000)}k/mo conversion leak on ${selectedBrand.name}'s mobile storefront`,
        body: `Hey ${founderFirstName},

I’m the Principal CRO Systems Architect at Billy Benjamin Consulting. 

${primaryFounder.founderHook}

We conducted a technical architectural audit of ${selectedBrand.name}'s mobile storefront. Our models isolated a primary bottleneck: "${selectedBrand.forensicAudit.primaryFrictionHeadline}"

With an estimated ${formatNumber(selectedBrand.metrics.monthlyTraffic)} monthly sessions and $${selectedBrand.metrics.currentAOV} AOV, compounding 3 engineering interventions:
1. ${selectedBrand.solutions[0].title} (+${selectedBrand.solutions[0].liftPercentage}% CVR)
2. ${selectedBrand.solutions[1].title} (+${selectedBrand.solutions[1].liftPercentage}% AOV)
3. ${selectedBrand.solutions[2].title} (+${selectedBrand.solutions[2].liftPercentage}% LTV)

recaptures an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in net-new GMV (${formatCurrency(selectedCalc.annualRevenueRecovered)}/year). Full payback achieved in ${selectedCalc.retainerPaybackDays} business days at a fixed fee of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}.

We modeled the interactive architecture report and wireframes here:
${demoLink}

Open to sending over a 3-minute technical teardown if you're interested in reviewing the live model.

Billy Benjamin
Principal Architect, Billy Benjamin Consulting`
      },
      {
        step: "TOUCH 02",
        day: "Day 3",
        channel: "Founder Personal IG DM",
        title: "Visual & Mobile Checkout Teardown",
        subject: "Direct Message",
        body: `Hey ${founderFirstName} — obsessed with your recent catalog releases for ${selectedBrand.name}. I'm a principal e-commerce systems architect and isolated a specific mobile checkout friction point costing ${selectedBrand.name} an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in leaked conversion revenue. We mapped the technical wireframe solution and interactive math here: ${demoLink}`
      },
      {
        step: "TOUCH 03",
        day: "Day 5",
        channel: "LinkedIn Founder InMail",
        title: "Founder / Executive Director Note",
        subject: `${selectedBrand.name} conversion engineering & ${formatCurrency(selectedCalc.annualRevenueRecovered)} leak`,
        body: `Hi ${founderFirstName} — huge admirer of ${selectedBrand.name}'s positioning in ${selectedBrand.sector}. 

Our studio engineers headless storefronts and checkout optimization for high-growth D2C brands. We stress-tested ${selectedBrand.name}'s mobile funnel against our benchmark matrix. 

Current architecture is leaking an estimated ${formatCurrency(selectedCalc.monthlyRevenueRecovered)} every 30 days due to: "${selectedBrand.forensicAudit.primaryFrictionHeadline}".

We built an interactive compound revenue simulator and Statement of Work:
${demoLink}

Would love to share the technical wireframe with you if you have 5 minutes this week.`
      },
      {
        step: "TOUCH 04",
        day: "Day 8",
        channel: "Breakup Email",
        title: "The Breakup & Retainer Payback Math Bump",
        subject: `Closing file: ${selectedBrand.name} ${selectedCalc.retainerPaybackDays}-day payback window`,
        body: `Hey ${founderFirstName},

Assuming this isn't an active priority for Q2/Q3, so I will close out your diagnostic file.

Final takeaway: At ${selectedBrand.metrics.turnaroundDays} days implementation turnaround and a fixed investment of ${formatCurrency(selectedBrand.metrics.implementationFeeUSD)}, the projected ${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in recaptured revenue achieves full payback in exactly ${selectedCalc.retainerPaybackDays} days post-launch.

If you ever wish to deploy this architecture, the full dossier and SOW remain accessible here:
${proposalLink}

Best of luck with the upcoming drops,
Billy Benjamin`
      }
    ] : [
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
        title: "E-Com Director Note",
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
    ]
  );

  const copySequenceTouch = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedTouchIndex(index);
    updateBrandStatus(selectedBrand.id, 'Sequence Active');
    showToast(`Copied Touch ${index + 1} and moved to Sequence Active`);
    setTimeout(() => setCopiedTouchIndex(null), 2500);
  };

  const sectors = ["All", ...Array.from(new Set(allBrands.map(b => b.sector)))];

  return (
    <div className="min-h-screen bg-[#F7F7F5] dark:bg-[#0B0B0C] text-zinc-950 dark:text-zinc-50 transition-colors duration-150 flex flex-col font-sans selection:bg-zinc-950 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-950">
      
      {/* Top Institutional Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#F7F7F5]/95 dark:bg-[#0B0B0C]/95 backdrop-blur-sm border-b border-zinc-200/90 dark:border-zinc-800/90 transition-colors">
        <div className="w-full px-4 lg:px-6 h-16 flex items-center justify-between gap-4">
          
          {/* Logo & Platform Identifier */}
          <div className="flex items-center gap-4">
            <BrandLogo showBadge={true} />
            <div className="hidden xl:flex items-center pl-4 border-l border-zinc-200/90 dark:border-zinc-800/90 text-xs font-mono text-zinc-500 dark:text-zinc-400">
              <span>GLOBAL D2C REVENUE INTELLIGENCE OS // 50 TARGETS</span>
            </div>
          </div>

          {/* Right Top Actions */}
          <div className="flex items-center gap-3">
            {/* Mechanical Theme Toggle */}
            <ThemeToggle />

            <button
              onClick={resetAllToDefaults}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
              title="Reset all 50 brands back to default data"
            >
              <RefreshCw size={14} strokeWidth={1.5} />
              <span>Reset Archive</span>
            </button>

            <button
              onClick={exportMasterCSV}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 border border-zinc-950 dark:border-zinc-50 transition-colors shadow-sm"
            >
              <Download size={14} strokeWidth={1.5} />
              <span>Export Master CSV</span>
            </button>
          </div>
        </div>

        {/* Top Financial Telemetry Strip (Dieter Rams Architectural Matrix) */}
        <div className="w-full bg-white/80 dark:bg-[#121214]/80 border-t border-b border-zinc-200/90 dark:border-zinc-800/90 grid grid-cols-2 md:grid-cols-4 divide-x divide-zinc-200/90 dark:divide-zinc-800/90 text-left transition-colors">
          
          <div className="p-3.5 lg:px-6">
            <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Total Addressable Leak (50 Targets)
            </span>
            <span className="text-xl lg:text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
              {formatCurrency(aggregateMetrics.totalAddressableAnnualLeak, true)}
              <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400 ml-1">/ yr</span>
            </span>
          </div>

          <div className="p-3.5 lg:px-6">
            <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Active Pipeline Retainer Value
            </span>
            <span className="text-xl lg:text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
              {formatCurrency(aggregateMetrics.activePipelineRetainerValue)}
            </span>
          </div>

          <div className="p-3.5 lg:px-6">
            <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
              Brands In Outbound Sequence
            </span>
            <span className="text-xl lg:text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
              {aggregateMetrics.brandsInSequenceCount} <span className="text-xs font-normal text-zinc-500 dark:text-zinc-400">/ {aggregateMetrics.totalBrandsCount || 50}</span>
            </span>
          </div>

          <div className="p-3.5 lg:px-6 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1">
                Targeted ARR Universe
              </span>
              <span className="text-xl lg:text-2xl font-semibold font-mono text-zinc-900 dark:text-zinc-100 tabular-nums tracking-tight">
                $1M – $100M+
              </span>
            </div>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
          </div>

        </div>
      </header>

      {/* Main Container: Split Grid */}
      <div className="flex-1 flex flex-col lg:flex-row w-full overflow-hidden">
        
        {/* Left Side: Table / Kanban Matrix */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-zinc-200/90 dark:border-zinc-800/90 bg-[#F7F7F5] dark:bg-[#0B0B0C] transition-colors">
          
          {/* Controls Bar: Filters & View Modes */}
          <div className="p-3 lg:px-6 border-b border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] flex flex-col gap-3 transition-colors">
            
            {/* Row 1: Discovery Tier Filter Pills + View Switcher */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="inline-flex items-center border border-zinc-200 dark:border-zinc-800 p-0.5 bg-zinc-100 dark:bg-zinc-900 text-xs font-mono">
                <button
                  onClick={() => setActiveTier('All')}
                  className={`px-3 py-1 font-semibold uppercase tracking-wider transition-colors ${
                    activeTier === 'All'
                      ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                  }`}
                >
                  All 50 Brands
                </button>
                <button
                  onClick={() => setActiveTier('Tier 1')}
                  className={`px-3 py-1 font-semibold uppercase tracking-wider transition-colors ${
                    activeTier === 'Tier 1'
                      ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                  }`}
                >
                  Tier 1: Scaled D2C ({aggregateMetrics.tier1Count || 20})
                </button>
                <button
                  onClick={() => setActiveTier('Tier 2')}
                  className={`px-3 py-1 font-semibold uppercase tracking-wider transition-colors ${
                    activeTier === 'Tier 2'
                      ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 shadow-sm'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                  }`}
                >
                  Tier 2: Undiscovered & Zero-Web Gems ({aggregateMetrics.tier2Count || 30})
                </button>
              </div>

              <div className="flex items-center border border-zinc-200 dark:border-zinc-800 divide-x divide-zinc-200 dark:divide-zinc-800 text-xs font-mono shrink-0">
                <button
                  onClick={() => setViewMode('table')}
                  className={`px-3 py-1.5 transition-colors ${viewMode === 'table' ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                >
                  TABLE ({brands.length})
                </button>
                <button
                  onClick={() => setViewMode('kanban')}
                  className={`px-3 py-1.5 transition-colors ${viewMode === 'kanban' ? 'bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 font-semibold' : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'}`}
                >
                  PIPELINE (5)
                </button>
              </div>
            </div>

            {/* Row 2: Search Input & Sector selector */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="relative w-full sm:w-80">
                <Search size={14} strokeWidth={1.5} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500" />
                <input
                  type="text"
                  placeholder="Search 50 global targets by brand, city, status..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:border-zinc-950 dark:focus:border-zinc-100 focus:outline-none rounded-none"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-[10px] font-mono uppercase text-zinc-500 dark:text-zinc-400 shrink-0">Filter Sector:</span>
                <select
                  value={activeSector}
                  onChange={(e) => setActiveSector(e.target.value)}
                  className="text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 px-2.5 py-1.5 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-100"
                >
                  {sectors.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* View Mode 1: Table Matrix View */}
          {viewMode === 'table' ? (
            <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[calc(100vh-190px)]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-zinc-300 dark:border-zinc-800 bg-[#F7F7F5]/95 dark:bg-[#0B0B0C]/95 backdrop-blur-sm font-mono text-[10px] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider sticky top-0 z-10 transition-colors">
                    <th className="py-3 px-4 font-medium">Brand & Storefront Status</th>
                    <th className="py-3 px-3 font-medium">Sector</th>
                    <th className="py-3 px-3 font-medium text-right">Traffic/Mo</th>
                    <th className="py-3 px-3 font-medium text-right">CVR</th>
                    <th className="py-3 px-3 font-medium text-right">AOV</th>
                    <th className="py-3 px-3 font-medium text-right">Est. Annual Leak</th>
                    <th className="py-3 px-3 font-medium text-right">Retainer</th>
                    <th className="py-3 px-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/90 dark:divide-zinc-800/80 font-mono">
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
                        className={`cursor-pointer transition-colors duration-100 ${
                          isSelected 
                            ? 'bg-zinc-100 dark:bg-zinc-900/90 border-l-2 border-l-zinc-900 dark:border-l-zinc-100 font-medium' 
                            : 'hover:bg-zinc-100/80 dark:hover:bg-zinc-900/60 border-l-2 border-l-transparent'
                        }`}
                      >
                        <td className="py-3.5 px-4">
                          <div className="font-sans font-bold text-zinc-950 dark:text-zinc-50 text-sm leading-tight flex items-center gap-1.5">
                            <span>{brand.name}</span>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-zinc-100" />}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                              {brand.hqLocation}
                            </span>
                            {brand.founders && brand.founders[0] && (
                              <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono truncate max-w-[150px]" title={`Founder: ${brand.founders[0].name} (${brand.founders[0].role})`}>
                                • {brand.founders[0].name}
                              </span>
                            )}
                            {brand.webStatus === "IG DM / Linktree Only (No Website)" ? (
                              <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider border-2 border-zinc-950 dark:border-zinc-100 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950">
                                IG DM ONLY
                              </span>
                            ) : brand.webStatus === "Password-Locked Drop Site" ? (
                              <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider border border-zinc-500 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                                LOCKED DROP
                              </span>
                            ) : (
                              <span className="inline-block px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-wider border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                                MICRO-STORE
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-3 text-zinc-600 dark:text-zinc-300 font-sans">
                          {brand.sector}
                        </td>
                        <td className="py-3.5 px-3 text-right text-zinc-900 dark:text-zinc-100 tabular-nums font-mono">
                          {formatNumber(brand.metrics.monthlyTraffic)}
                        </td>
                        <td className="py-3.5 px-3 text-right text-zinc-900 dark:text-zinc-100 tabular-nums font-mono">
                          {formatPercent(brand.metrics.currentCVR)}
                        </td>
                        <td className="py-3.5 px-3 text-right text-zinc-900 dark:text-zinc-100 tabular-nums font-mono">
                          ${brand.metrics.currentAOV}
                        </td>
                        <td className="py-3.5 px-3 text-right text-zinc-950 dark:text-zinc-50 font-bold tabular-nums font-mono">
                          {formatCurrency(calc.annualRevenueRecovered, true)}
                        </td>
                        <td className="py-3.5 px-3 text-right text-zinc-600 dark:text-zinc-400 tabular-nums font-mono">
                          {formatCurrency(brand.metrics.implementationFeeUSD)}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className={`inline-block px-2 py-0.5 text-[10px] uppercase font-mono border ${
                            brand.status === 'Closed Retainer'
                              ? 'border-zinc-950 bg-black text-white dark:border-zinc-200 dark:bg-white dark:text-zinc-950 font-bold'
                              : brand.status === 'Pincer Sequence Active'
                              ? 'border-zinc-950 bg-zinc-950 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950 font-bold shadow-xs'
                              : brand.status === 'Call Booked'
                              ? 'border-zinc-700 bg-zinc-800 text-zinc-100 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-900'
                              : brand.status === 'Audit Viewed'
                              ? 'border-zinc-500 bg-zinc-700 text-zinc-100 dark:border-zinc-400 dark:bg-zinc-300 dark:text-zinc-900'
                              : brand.status === 'Sequence Active'
                              ? 'border-zinc-400 bg-zinc-200 text-zinc-950 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-100 font-semibold'
                              : 'border-zinc-300 bg-zinc-100 text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
                          }`}>
                            {brand.status === 'Pincer Sequence Active' ? '● PINCER ACTIVE' : brand.status}
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
                  <div key={stage.id} className="w-72 flex flex-col bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 transition-colors">
                    <div className="p-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-zinc-950 dark:text-zinc-50 uppercase tracking-wider">
                        {stage.label}
                      </span>
                      <span className="text-xs font-mono px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700">
                        {stageBrands.length}
                      </span>
                    </div>

                    <div className="p-2 space-y-2 overflow-y-auto flex-1">
                      {stageBrands.map(b => (
                        <div
                          key={b.id}
                          onClick={() => setSelectedBrandId(b.id)}
                          className={`p-3 bg-white dark:bg-zinc-950 border cursor-pointer transition-all ${
                            b.id === selectedBrandId
                              ? 'border-2 border-zinc-950 dark:border-zinc-100 shadow-sm'
                              : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-sans font-bold text-sm text-zinc-950 dark:text-zinc-50">{b.name}</span>
                            <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">${b.metrics.currentAOV}</span>
                          </div>

                          {b.founders && b.founders[0] && (
                            <span className="text-[10px] text-zinc-600 dark:text-zinc-400 font-mono block truncate mt-0.5" title={`Founder: ${b.founders[0].name} (${b.founders[0].role})`}>
                              Attn: {b.founders[0].name}
                            </span>
                          )}
                          
                          <div className="flex items-center justify-between gap-1 mt-1">
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono block">{b.sector}</span>
                            {b.webStatus === "IG DM / Linktree Only (No Website)" ? (
                              <span className="px-1.5 py-0.2 text-[8px] font-mono font-bold uppercase border-2 border-zinc-950 dark:border-zinc-100 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950">IG DM ONLY</span>
                            ) : b.webStatus === "Password-Locked Drop Site" ? (
                              <span className="px-1.5 py-0.2 text-[8px] font-mono font-medium uppercase border border-zinc-500 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">LOCKED DROP</span>
                            ) : null}
                          </div>
                          
                          <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                            <span className="text-zinc-500 dark:text-zinc-400">{formatNumber(b.metrics.monthlyTraffic)}/mo</span>
                            <span className="font-bold text-zinc-950 dark:text-zinc-100">Fee: {formatCurrency(b.metrics.implementationFeeUSD)}</span>
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
          <div className="p-2.5 px-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-[11px] font-mono text-zinc-500 dark:text-zinc-400 flex items-center justify-between transition-colors">
            <span>SHOWING {brands.length} OF {allBrands.length} GLOBAL DOSSIERS ({activeTier === 'All' ? 'TIER 1 + TIER 2' : activeTier})</span>
            <span>DIETER RAMS ARCHITECTURAL MONOCHROME // 50 TARGETS</span>
          </div>
        </div>

        {/* Right Side: Split-Screen Forensic Inspector (680px Width) */}
        <div className="w-full lg:w-[680px] bg-white dark:bg-[#121214] flex flex-col shrink-0 overflow-y-auto max-h-[calc(100vh-140px)] border-l border-zinc-200/90 dark:border-zinc-800/90 transition-colors">
          
          {/* Inspector Header with Stepper */}
          <div className="p-5 border-b border-zinc-200/90 dark:border-zinc-800/90 bg-[#F7F7F5] dark:bg-[#0B0B0C] transition-colors">
            
            {/* Brand Stepper Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-200/80 dark:border-zinc-800/80 text-[11px] font-mono">
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                <span className="px-1.5 py-0.5 bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-200 font-bold">
                  {currentBrandIndex >= 0 ? currentBrandIndex + 1 : 1}
                </span>
                <span>OF {brands.length} TARGETS</span>
                <span className="hidden sm:inline text-zinc-400 dark:text-zinc-500">• [↑ / ↓ to step]</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={selectPrevBrand}
                  disabled={!hasPrevBrand}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono border transition-colors ${
                    hasPrevBrand
                      ? 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'
                      : 'border-zinc-200 dark:border-zinc-800/60 bg-transparent text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
                  }`}
                  title="Previous Brand (ArrowUp or k)"
                >
                  <ChevronLeft size={13} strokeWidth={1.5} />
                  <span>Prev Brand</span>
                </button>

                <button
                  onClick={selectNextBrand}
                  disabled={!hasNextBrand}
                  className={`inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono border transition-colors ${
                    hasNextBrand
                      ? 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer'
                      : 'border-zinc-200 dark:border-zinc-800/60 bg-transparent text-zinc-300 dark:text-zinc-700 cursor-not-allowed'
                  }`}
                  title="Next Brand (ArrowDown or j)"
                >
                  <span>Next Brand</span>
                  <ChevronRight size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black font-sans uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
                    {selectedBrand.name}
                  </h2>
                  <a
                    href={selectedBrand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 p-1 transition-colors"
                    title={`Visit ${selectedBrand.website}`}
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-300 mt-1">
                  <span>{selectedBrand.sector}</span>
                  <span>•</span>
                  <span>{selectedBrand.hqLocation}</span>
                  <span>•</span>
                  <span>Turnaround: {selectedBrand.metrics.turnaroundDays} Days</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                    {selectedBrand.discoveryTier || 'Tier 1: Scaled D2C'}
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 border font-semibold ${
                    selectedBrand.webStatus === "IG DM / Linktree Only (No Website)"
                      ? 'border-2 border-zinc-950 dark:border-zinc-100 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 font-bold'
                      : selectedBrand.webStatus === "Password-Locked Drop Site"
                      ? 'border border-zinc-500 dark:border-zinc-400 bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                      : 'border border-zinc-200/90 dark:border-zinc-800/90 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400'
                  }`}>
                    {selectedBrand.webStatus || 'Unoptimized Micro-Store'}
                  </span>
                </div>
              </div>

              {/* Status Switcher Selector */}
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase">Stage Status</span>
                <select
                  value={selectedBrand.status}
                  onChange={(e) => updateBrandStatus(selectedBrand.id, e.target.value)}
                  className="text-xs font-mono font-semibold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 px-2 py-1 mt-0.5 focus:outline-none focus:border-zinc-950 dark:focus:border-zinc-100"
                >
                  {stages.map(s => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Dual-Target Mode Switcher (Linear.app / Swiss Minimalist Segmented Pill) */}
            <div className="mt-4 p-1.5 bg-zinc-100/90 dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 dark:text-zinc-400 font-bold uppercase px-1">
                <Crosshair size={13} strokeWidth={1.5} className="text-zinc-700 dark:text-zinc-300" />
                <span className="hidden sm:inline">ROUTING TARGET:</span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setTargetMode('founder')}
                  className={`px-2.5 py-1 text-[10.5px] font-mono font-bold uppercase transition-all flex items-center gap-1.5 ${
                    targetMode === 'founder'
                      ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 border border-zinc-950 dark:border-zinc-50 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 bg-transparent'
                  }`}
                >
                  <User size={12} strokeWidth={2} />
                  <span>TARGET: FOUNDER PERSONAL (@{primaryFounder.personalIG.replace('@', '') || founderFirstName})</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
                </button>

                <button
                  onClick={() => setTargetMode('brand')}
                  className={`px-2.5 py-1 text-[10.5px] font-mono font-medium uppercase transition-all flex items-center gap-1.5 ${
                    targetMode === 'brand'
                      ? 'bg-zinc-950 text-white dark:bg-zinc-50 dark:text-zinc-950 border border-zinc-950 dark:border-zinc-50 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-100 bg-transparent'
                  }`}
                >
                  <Building size={12} strokeWidth={1.5} />
                  <span>TARGET: BRAND DESK ({selectedBrand.instagram.handle})</span>
                </button>
              </div>
            </div>

            {/* Quick 1-Click Action Row with Dynamic Routing */}
            <div className="mt-3 pt-3 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
              <Link
                to={`/demo/${selectedBrand.slug}${themeQuery}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 border border-zinc-950 dark:border-zinc-50 transition-colors shadow-sm"
              >
                <Eye size={14} strokeWidth={1.5} />
                <span>Launch Client Audit</span>
              </Link>

              <button
                onClick={() => copyLinkWithFeedback(demoLink, 'demo')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-all ${
                  copiedLinkType === 'demo'
                    ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 font-bold'
                    : 'bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200'
                }`}
                title="Copy client audit URL"
              >
                {copiedLinkType === 'demo' ? (
                  <>
                    <Check size={12} strokeWidth={2} />
                    <span>Copied to Clipboard ✓</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} strokeWidth={1.5} />
                    <span>Copy Audit Link</span>
                  </>
                )}
              </button>

              {/* Dynamic Communication Channels */}
              {targetMode === 'founder' ? (
                <>
                  <a
                    href={primaryFounder.personalIGUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono border border-emerald-600/60 dark:border-emerald-500/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-950 dark:text-emerald-300 hover:bg-emerald-100/60 transition-colors font-medium"
                    title={`Open Founder Personal Instagram: ${primaryFounder.personalIG}`}
                  >
                    <span>Launch Personal IG DM ({primaryFounder.personalIG})</span>
                    <ExternalLink size={12} strokeWidth={1.5} />
                  </a>

                  <a
                    href={`mailto:${primaryFounder.directEmail}?subject=${encodeURIComponent(`Forensic audit: +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo checkout leak on ${selectedBrand.name}'s mobile storefront`)}&body=${encodeURIComponent(`Hey ${founderFirstName},\n\nWe audited ${selectedBrand.name}'s mobile checkout and modeled how fixing high-friction bottlenecks recaptures +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo in GMV:\n${demoLink}\n\nBest,\nBilly Benjamin\nPrincipal Architect, Billy Benjamin Consulting`)}`}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                    title={`Email ${primaryFounder.name} direct: ${primaryFounder.directEmail}`}
                  >
                    <Mail size={13} strokeWidth={1.5} />
                    <span>Email Founder Direct</span>
                  </a>

                  <a
                    href={primaryFounder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                    title="Launch Founder Search on LinkedIn"
                  >
                    <span>Founder LinkedIn</span>
                    <ExternalLink size={12} strokeWidth={1.5} />
                  </a>
                </>
              ) : (
                <>
                  <a
                    href={selectedBrand.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-xs font-mono border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                    title={`Open Instagram: ${selectedBrand.instagram.handle}`}
                  >
                    IG: {selectedBrand.instagram.handle}
                  </a>

                  <a
                    href={`mailto:${selectedBrand.email}?subject=${encodeURIComponent(`Forensic audit: +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo leak on ${selectedBrand.name}'s mobile storefront`)}&body=${encodeURIComponent(`Hey ${selectedBrand.name} team,\n\nWe audited your storefront and wireframed 3 turnkey solutions:\n${demoLink}\n\nBest,\nBilly Benjamin`)}`}
                    className="p-1.5 text-xs font-mono border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                    title={`Email brand desk: ${selectedBrand.email}`}
                  >
                    Brand Email
                  </a>

                  <a
                    href={selectedBrand.linkedinSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-xs font-mono border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
                    title="Search Decision Makers on LinkedIn"
                  >
                    LinkedIn DM
                  </a>
                </>
              )}

              <Link
                to={`/proposal/${selectedBrand.slug}${themeQuery}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors"
              >
                <FileText size={14} strokeWidth={1.5} />
                <span>SOW Proposal</span>
              </Link>

              <button
                onClick={() => copyLinkWithFeedback(proposalLink, 'proposal')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border transition-all ${
                  copiedLinkType === 'proposal'
                    ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 border-zinc-950 dark:border-zinc-100 font-bold'
                    : 'bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200'
                }`}
                title="Copy proposal URL"
              >
                {copiedLinkType === 'proposal' ? (
                  <>
                    <Check size={12} strokeWidth={2} />
                    <span>Copied to Clipboard ✓</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} strokeWidth={1.5} />
                    <span>Copy SOW Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Outreach Link Theme Lock Checkbox */}
            <div className="mt-3 pt-2.5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono">
              <label className="flex items-center gap-2 cursor-pointer text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-100 select-none">
                <input
                  type="checkbox"
                  checked={lockThemeToLink}
                  onChange={(e) => setLockThemeToLink(e.target.checked)}
                  className="rounded-none border-zinc-300 dark:border-zinc-700 accent-zinc-950 dark:accent-zinc-100 cursor-pointer"
                />
                <span>Lock Client Link to Current Theme (?theme={theme})</span>
              </label>

              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase">
                {theme === 'dark' ? 'Obsidian link' : 'Daylight link'}
              </span>
            </div>

          </div>

          {/* Sub-Tabs Recessed Segmented Bar */}
          <div className="p-1 bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200/90 dark:border-zinc-800/90 flex gap-1 text-xs font-mono">
            <button
              onClick={() => setActiveInspectorTab('audit')}
              className={`flex-1 py-1.5 px-2 text-center transition-all ${
                activeInspectorTab === 'audit'
                  ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-semibold shadow-2xs border border-zinc-200/80 dark:border-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-transparent'
              }`}
            >
              01 TEARDOWN & CONTACTS
            </button>
            <button
              onClick={() => setActiveInspectorTab('sequence')}
              className={`flex-1 py-1.5 px-2 text-center transition-all ${
                activeInspectorTab === 'sequence'
                  ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-semibold shadow-2xs border border-zinc-200/80 dark:border-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-transparent'
              }`}
            >
              02 4-STAGE OUTREACH
            </button>
            <button
              onClick={() => setActiveInspectorTab('sow')}
              className={`flex-1 py-1.5 px-2 text-center transition-all ${
                activeInspectorTab === 'sow'
                  ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 font-semibold shadow-2xs border border-zinc-200/80 dark:border-zinc-800'
                  : 'text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 border border-transparent'
              }`}
            >
              03 SOW & CONFIG
            </button>
          </div>

          {/* Inspector Content Body */}
          <div className="p-5 flex-1 overflow-y-auto space-y-6">
            
            {/* SUB-TAB A: TEARDOWN & CONTACTS */}
            {activeInspectorTab === 'audit' && (
              <div className="space-y-6 text-xs">
                
                {/* 00: FOUNDER INTELLIGENCE & EXECUTIVE RECON CARD */}
                <div className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] p-4 space-y-3.5 shadow-2xs">
                  <div className="flex items-center justify-between pb-2.5 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <div className="flex items-center gap-2">
                      <Crosshair size={13} strokeWidth={1.5} className="text-zinc-950 dark:text-zinc-100" />
                      <h4 className="text-[11px] font-mono text-zinc-900 dark:text-zinc-100 uppercase tracking-wider font-bold">
                        Founder Intelligence // Executive Recon
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[9px] font-mono font-bold uppercase border border-emerald-600/50 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Direct Bypass Active
                    </span>
                  </div>

                  {/* Founder Identity & Role */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-sans font-bold text-zinc-950 dark:text-zinc-50">
                          {primaryFounder.name}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 font-medium">
                          {primaryFounder.role}
                        </span>
                      </div>
                      <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Target Entity: {selectedBrand.name} • {selectedBrand.sector} • {selectedBrand.hqLocation}
                      </p>
                    </div>

                    {selectedBrand.founders && selectedBrand.founders.length > 1 && (
                      <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                        Co-Founders: {selectedBrand.founders.slice(1).map(f => `${f.name} (${f.role})`).join(', ')}
                      </div>
                    )}
                  </div>

                  {/* 4-Box Direct Bypass Coordinates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono pt-1">
                    {/* Direct Email */}
                    <div className="p-2.5 bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block">Direct Email</span>
                        <a
                          href={`mailto:${primaryFounder.directEmail}`}
                          className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
                          title="Open mail client"
                        >
                          {primaryFounder.directEmail}
                        </a>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(primaryFounder.directEmail);
                          showToast(`Copied ${primaryFounder.directEmail} to clipboard`);
                        }}
                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors shrink-0"
                        title="Copy direct email"
                      >
                        <Copy size={12} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Personal Instagram */}
                    <div className="p-2.5 bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block">Personal IG Handle</span>
                        <a
                          href={primaryFounder.personalIGUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
                          title="Open Personal Instagram"
                        >
                          {primaryFounder.personalIG}
                        </a>
                      </div>
                      <a
                        href={primaryFounder.personalIGUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors shrink-0"
                        title="Open Instagram Profile"
                      >
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </a>
                    </div>

                    {/* Founder LinkedIn */}
                    <div className="p-2.5 bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block">LinkedIn Profile</span>
                        <a
                          href={primaryFounder.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 hover:underline truncate block"
                          title="Search Decision Maker on LinkedIn"
                        >
                          Search {founderFirstName} on LinkedIn
                        </a>
                      </div>
                      <a
                        href={primaryFounder.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-colors shrink-0"
                        title="Open LinkedIn Search"
                      >
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </a>
                    </div>

                    {/* Operational Base */}
                    <div className="p-2.5 bg-zinc-50/80 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] uppercase text-zinc-500 dark:text-zinc-400 block">Studio Base / Jurisdiction</span>
                        <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 block">
                          {selectedBrand.hqLocation}
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 uppercase font-mono">Verified</span>
                    </div>
                  </div>

                  {/* Founder Strategic Hook Quote */}
                  <div className="p-3 bg-zinc-100/70 dark:bg-[#18181B] border border-zinc-200/80 dark:border-zinc-800/80">
                    <span className="text-[9px] font-mono uppercase text-zinc-500 dark:text-zinc-400 font-bold block mb-1">
                      STRATEGIC FOUNDER HOOK // ZERO-GATEKEEPER ANGLE
                    </span>
                    <p className="text-[12.5px] font-sans text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                      "{primaryFounder.founderHook}"
                    </p>
                  </div>
                </div>

                {/* 01: THE SYNCHRONIZED PINCER PLAY // 3-STEP STRIKE */}
                <div className={`border p-4 space-y-4 transition-all shadow-2xs ${
                  isPincerComplete 
                    ? 'border-zinc-950 dark:border-zinc-100 bg-white dark:bg-[#121214]' 
                    : 'border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214]'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <div>
                      <div className="flex items-center gap-2">
                        <Target size={14} strokeWidth={1.5} className="text-zinc-950 dark:text-zinc-50" />
                        <h4 className="text-[11px] font-mono text-zinc-950 dark:text-zinc-50 uppercase tracking-wider font-bold">
                          The Synchronized Pincer Play // 3-Step Strike
                        </h4>
                      </div>
                      <p className="text-[10.5px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                        Coordinated executive strike: Direct email + 2-line IG DM + LinkedIn network connect.
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono px-2 py-0.5 border font-bold uppercase ${
                        isPincerComplete
                          ? 'border-zinc-950 bg-zinc-950 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
                          : 'border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300'
                      }`}>
                        {pincerCompletedCount} / 3 EXECUTED
                      </span>

                      {isPincerComplete && (
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center gap-1">
                          <Check size={12} strokeWidth={2} />
                          <span>Pincer Active</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 3 Step Interactive Checklist */}
                  <div className="space-y-3 font-mono">
                    
                    {/* STEP 1: Direct Email */}
                    <div className={`p-3 border transition-colors ${
                      pincerProgress[0]
                        ? 'border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/80'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214]'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={pincerProgress[0] || false}
                            onChange={() => togglePincerStep(selectedBrand.id, 0)}
                            className="mt-0.5 rounded-none border-zinc-400 dark:border-zinc-600 accent-zinc-950 dark:accent-zinc-50 cursor-pointer"
                          />
                          <div>
                            <span className="text-xs font-bold text-zinc-950 dark:text-zinc-50 block">
                              STEP 01: Transmit Forensic Audit to Executive Email
                            </span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-sans">
                              Deliver compound revenue model & wireframes directly to <span className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">{primaryFounder.directEmail}</span>.
                            </span>
                          </div>
                        </label>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <a
                            href={`mailto:${primaryFounder.directEmail}?subject=${encodeURIComponent(`Forensic audit: +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo checkout leak on ${selectedBrand.name}'s mobile storefront`)}&body=${encodeURIComponent(`Hey ${founderFirstName},\n\nWe audited ${selectedBrand.name}'s mobile checkout and modeled how fixing high-friction bottlenecks recaptures +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo:\n${demoLink}\n\nBest,\nBilly Benjamin`)}`}
                            className="px-2 py-1 text-[10px] font-bold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            title="Launch pre-filled mail client"
                          >
                            Open Mailto
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* STEP 2: 2-Line Heads-Up IG DM */}
                    <div className={`p-3 border transition-colors ${
                      pincerProgress[1]
                        ? 'border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/80'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214]'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={pincerProgress[1] || false}
                            onChange={() => togglePincerStep(selectedBrand.id, 1)}
                            className="mt-0.5 rounded-none border-zinc-400 dark:border-zinc-600 accent-zinc-950 dark:accent-zinc-50 cursor-pointer"
                          />
                          <div>
                            <span className="text-xs font-bold text-zinc-950 dark:text-zinc-50 block">
                              STEP 02: 2-Line Heads-Up on Founder Personal Instagram
                            </span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-sans">
                              Alert <span className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">{primaryFounder.personalIG}</span> via DM so they prioritize opening their inbox.
                            </span>
                          </div>
                        </label>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => copyPincerSnippet(`Hey ${founderFirstName} — dropped a private architectural teardown and wireframe for ${selectedBrand.name} to ${primaryFounder.directEmail}. No pitch, just mapped how fixing the checkout friction recovers +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo: ${demoLink}`, 'step2')}
                            className="px-2 py-1 text-[10px] font-bold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                          >
                            {copiedPincerStep === 'step2' ? 'Copied ✓' : 'Copy 2-Line DM'}
                          </button>
                          <a
                            href={primaryFounder.personalIGUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            title="Launch Personal IG"
                          >
                            <ExternalLink size={12} strokeWidth={1.5} />
                          </a>
                        </div>
                      </div>

                      {/* Script Preview Box */}
                      <div className="mt-2.5 p-2 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 text-[11px] text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                        <span className="text-zinc-400 font-mono text-[9px] uppercase block mb-0.5">Script Preview:</span>
                        "Hey {founderFirstName} — dropped a private architectural teardown and wireframe for {selectedBrand.name} to {primaryFounder.directEmail}. No pitch, just mapped how fixing the checkout friction recovers +{formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo: {demoLink}"
                      </div>
                    </div>

                    {/* STEP 3: LinkedIn Executive Connect */}
                    <div className={`p-3 border transition-colors ${
                      pincerProgress[2]
                        ? 'border-zinc-400 dark:border-zinc-600 bg-zinc-50 dark:bg-zinc-900/80'
                        : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121214]'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={pincerProgress[2] || false}
                            onChange={() => togglePincerStep(selectedBrand.id, 2)}
                            className="mt-0.5 rounded-none border-zinc-400 dark:border-zinc-600 accent-zinc-950 dark:accent-zinc-50 cursor-pointer"
                          />
                          <div>
                            <span className="text-xs font-bold text-zinc-950 dark:text-zinc-50 block">
                              STEP 03: LinkedIn Executive Connect & Network Strike
                            </span>
                            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block mt-0.5 font-sans">
                              Connect with <span className="font-mono text-zinc-800 dark:text-zinc-200 font-semibold">{primaryFounder.name}</span> with a custom note referencing the audit.
                            </span>
                          </div>
                        </label>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => copyPincerSnippet(`Hi ${founderFirstName} — huge respect for your craft at ${selectedBrand.name}. Modeled a 3-part conversion architecture recovering +${formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo: ${demoLink}. Would love to connect.`, 'step3')}
                            className="px-2 py-1 text-[10px] font-bold border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                          >
                            {copiedPincerStep === 'step3' ? 'Copied ✓' : 'Copy Connect Note'}
                          </button>
                          <a
                            href={primaryFounder.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            title="Launch LinkedIn Search"
                          >
                            <ExternalLink size={12} strokeWidth={1.5} />
                          </a>
                        </div>
                      </div>

                      {/* Script Preview Box */}
                      <div className="mt-2.5 p-2 bg-zinc-100/60 dark:bg-zinc-900/60 border border-zinc-200/70 dark:border-zinc-800/70 text-[11px] text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                        <span className="text-zinc-400 font-mono text-[9px] uppercase block mb-0.5">Script Preview:</span>
                        "Hi {founderFirstName} — huge respect for your craft at {selectedBrand.name}. Modeled a 3-part conversion architecture recovering +{formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo: {demoLink}. Would love to connect."
                      </div>
                    </div>

                  </div>

                  {/* Completed Stamp */}
                  {selectedBrand.pincerTimestamp && (
                    <div className="p-2 bg-zinc-100/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
                      <span>PINCER STRIKE LOGGED:</span>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">{new Date(selectedBrand.pincerTimestamp).toLocaleString()}</span>
                    </div>
                  )}
                </div>

                {/* Executive Primary Leak Box */}
                <div className="p-4 bg-zinc-950 dark:bg-zinc-900 text-white border border-zinc-950 dark:border-zinc-800">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] uppercase mb-1">
                    <ShieldAlert size={14} strokeWidth={1.5} />
                    <span>Primary Architectural Friction Headline</span>
                  </div>
                  <p className="text-[13.5px] font-sans font-medium leading-relaxed">
                    "{selectedBrand.forensicAudit.primaryFrictionHeadline}"
                  </p>
                </div>

                {/* Brand Strengths */}
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <h4 className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                      Validated Brand Equity & Moats
                    </h4>
                    <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">01</span>
                  </div>
                  <ul className="space-y-2 font-sans">
                    {selectedBrand.forensicAudit.brandStrengths.map((str, idx) => (
                      <li key={idx} className="p-3 bg-zinc-50/70 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/90 text-zinc-800 dark:text-zinc-200 flex items-start gap-2.5">
                        <span className="font-mono text-zinc-400 dark:text-zinc-500 font-bold text-xs shrink-0">0{idx + 1}.</span>
                        <span className="text-[13.5px] leading-relaxed text-zinc-700 dark:text-zinc-300">{str}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3 Technical Bottlenecks */}
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
                    <h4 className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                      Granular Technical / UX Failure Modes
                    </h4>
                    <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">02</span>
                  </div>
                  <div className="space-y-2.5">
                    {selectedBrand.forensicAudit.technicalBottlenecks.map((bot, idx) => (
                      <div key={idx} className="p-3.5 border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214]">
                        <span className="font-mono text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold block mb-1">
                          BOTTLENECK 0{idx + 1}
                        </span>
                        <p className="text-[13.5px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">{bot}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inline-Editable Contact Intelligence Form */}
                <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <h4 className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                        Contact & Decision-Maker Intelligence
                      </h4>
                      <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">03</span>
                    </div>
                    <button
                      onClick={saveContacts}
                      className="text-xs font-mono font-bold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 px-2.5 py-1 transition-colors"
                    >
                      Save Contacts
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <div>
                      <label className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">Corporate Email</label>
                      <input
                        type="email"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:border-zinc-950 dark:focus:border-zinc-100 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">Instagram Handle</label>
                      <input
                        type="text"
                        value={editInstagram}
                        onChange={(e) => setEditInstagram(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:border-zinc-950 dark:focus:border-zinc-100 focus:outline-none"
                      />
                    </div>

                    <div className="col-span-2">
                      <label className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">Target Decision Maker Roles</label>
                      <input
                        type="text"
                        value={editTitles}
                        onChange={(e) => setEditTitles(e.target.value)}
                        className="w-full px-2.5 py-1.5 text-xs border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 focus:border-zinc-950 dark:focus:border-zinc-100 focus:outline-none font-sans"
                      />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* SUB-TAB B: 4-STAGE OUTREACH SEQUENCE GENERATOR */}
            {activeInspectorTab === 'sequence' && (
              <div className="space-y-4">
                <div className="p-3 bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200/90 dark:border-zinc-800/90 text-xs font-mono flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Crosshair size={13} strokeWidth={1.5} className="text-zinc-950 dark:text-zinc-50" />
                    <span className="font-bold text-zinc-950 dark:text-zinc-50 uppercase">
                      {targetMode === 'founder'
                        ? `FOUNDER-DIRECT SEQUENCE // ATTN: ${founderFirstName.toUpperCase()} (${primaryFounder.role.toUpperCase()})`
                        : `BRAND DESK SEQUENCE // ATTN: ${selectedBrand.name.toUpperCase()} TEAM`}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-zinc-500 dark:text-zinc-400">
                    4 TOUCHPOINTS ARMED
                  </span>
                </div>

                {sequenceTouches.map((touch, idx) => (
                  <div key={idx} className="border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214]">
                    <div className="p-3 bg-[#F7F7F5] dark:bg-zinc-900/70 border-b border-zinc-200/90 dark:border-zinc-800/90 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-black bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 px-1.5 py-0.5">
                          {touch.step}
                        </span>
                        <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{touch.day}</span>
                        <span className="font-sans font-semibold text-xs text-zinc-900 dark:text-zinc-100">• {touch.title}</span>
                      </div>
                      <span className="text-[10px] font-mono border border-zinc-300 dark:border-zinc-700 px-2 py-0.5 uppercase bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
                        {touch.channel}
                      </span>
                    </div>

                    <div className="p-3.5 space-y-2.5">
                      <div className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 bg-zinc-50 dark:bg-zinc-900/50 p-2 border border-zinc-100 dark:border-zinc-800">
                        <span className="text-zinc-500 dark:text-zinc-400">Subject: </span>{touch.subject}
                      </div>

                      <textarea
                        readOnly
                        rows={8}
                        value={touch.body}
                        className="w-full p-3 text-[13.5px] font-mono bg-zinc-50/60 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800/90 focus:outline-none resize-none leading-relaxed text-zinc-800 dark:text-zinc-200"
                      />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                        <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
                          Live +{formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo calculation
                        </span>

                        <div className="flex items-center gap-2 flex-wrap">
                          {touch.channel.includes('Instagram') && (
                            <a
                              href={targetMode === 'founder' ? primaryFounder.personalIGUrl : selectedBrand.instagram.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            >
                              <span>Open IG</span>
                              <ExternalLink size={12} strokeWidth={1.5} />
                            </a>
                          )}

                          {touch.channel.includes('Email') && (
                            <a
                              href={`mailto:${targetMode === 'founder' ? primaryFounder.directEmail : selectedBrand.email}?subject=${encodeURIComponent(touch.subject)}&body=${encodeURIComponent(touch.body)}`}
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            >
                              <Mail size={12} strokeWidth={1.5} />
                              <span>Open Mail</span>
                            </a>
                          )}

                          {touch.channel.includes('LinkedIn') && (
                            <a
                              href={targetMode === 'founder' ? primaryFounder.linkedinUrl : selectedBrand.linkedinSearchUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-mono border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 transition-colors"
                            >
                              <span>LinkedIn</span>
                              <ExternalLink size={12} strokeWidth={1.5} />
                            </a>
                          )}

                          <button
                            onClick={() => copySequenceTouch(touch.body, idx)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold transition-all ${
                              copiedTouchIndex === idx
                                ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 border border-zinc-950 dark:border-zinc-100'
                                : 'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 border border-zinc-950 dark:border-zinc-50'
                            }`}
                          >
                            {copiedTouchIndex === idx ? (
                              <>
                                <Check size={12} strokeWidth={2} />
                                <span>Copied ✓</span>
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
                  </div>
                ))}
              </div>
            )}

            {/* SUB-TAB C: SOW & RETAINER CONFIGURATOR */}
            {activeInspectorTab === 'sow' && (
              <div className="space-y-6 text-xs font-mono">
                
                <div className="p-4 bg-zinc-50/70 dark:bg-[#18181B] border border-zinc-200/90 dark:border-zinc-800/90 space-y-3">
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold">
                    Custom Retainer & SLA Variables
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">Fixed Retainer Fee (USD)</label>
                      <input
                        type="number"
                        step="500"
                        value={editFee}
                        onChange={(e) => setEditFee(e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 text-sm font-bold"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-zinc-500 dark:text-zinc-400 block mb-1">Turnaround Days (SLA)</label>
                      <input
                        type="number"
                        step="1"
                        value={editDays}
                        onChange={(e) => setEditDays(e.target.value)}
                        className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 text-sm font-bold"
                      />
                    </div>
                  </div>

                  <button
                    onClick={saveMetrics}
                    className="w-full py-2 bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Save & Update SOW Parameters
                  </button>
                </div>

                {/* Live Payback & ROI Summary */}
                <div className="p-4 border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-[#121214] space-y-2">
                  <span className="text-[10px] uppercase text-zinc-500 dark:text-zinc-400 font-semibold block">SOW Commercial Telemetry</span>
                  <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-zinc-600 dark:text-zinc-300">Fixed Architecture Investment:</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">{formatCurrency(selectedBrand.metrics.implementationFeeUSD)}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-zinc-600 dark:text-zinc-300">Projected Monthly GMV Lift:</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">+{formatCurrency(selectedCalc.monthlyRevenueRecovered)}/mo</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-zinc-100 dark:border-zinc-800/80">
                    <span className="text-zinc-600 dark:text-zinc-300">Payback Timeline Window:</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">{selectedCalc.retainerPaybackDays} Business Days</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-zinc-600 dark:text-zinc-300">First-Year Net ROI Multiple:</span>
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 tabular-nums">
                      {(selectedCalc.annualRevenueRecovered / selectedBrand.metrics.implementationFeeUSD).toFixed(1)}x Multiple
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`/proposal/${selectedBrand.slug}${themeQuery}`}
                    className="w-full py-2.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-bold flex items-center justify-center gap-2 transition-colors"
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
        <div className="fixed bottom-6 right-6 z-50 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 text-xs font-mono px-4 py-2.5 shadow-xl border border-zinc-800 dark:border-zinc-300 flex items-center gap-2">
          <Check size={14} className="text-emerald-400 dark:text-emerald-600" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
