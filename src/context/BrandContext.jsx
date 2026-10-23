import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { GLOBAL_D2C_TARGETS, PIPELINE_STAGES } from '../data/globalD2CTargets';
import { calculateRevenueImpact } from '../utils/revenueMath';

const BrandContext = createContext(null);
const STORAGE_KEY = 'billy_benjamin_d2c_archive_v5';

export function BrandProvider({ children }) {
  const [brands, setBrands] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === GLOBAL_D2C_TARGETS.length) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load targets from localStorage', e);
    }
    return GLOBAL_D2C_TARGETS;
  });

  const [selectedBrandId, setSelectedBrandId] = useState(GLOBAL_D2C_TARGETS[0].id);
  const [viewMode, setViewMode] = useState('table'); // 'table' | 'kanban'
  const [activeTier, setActiveTier] = useState('All'); // 'All' | 'Tier 1' | 'Tier 2'
  const [activeSector, setActiveSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(brands));
    } catch (e) {
      console.error('Failed to save targets to localStorage', e);
    }
  }, [brands]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const updateBrandStatus = (brandId, newStatus) => {
    setBrands(prev => prev.map(b => b.id === brandId ? { ...b, status: newStatus } : b));
    showToast(`Status updated to: ${newStatus}`);
  };

  const updateBrandContacts = (brandId, contacts) => {
    setBrands(prev => prev.map(b => {
      if (b.id !== brandId) return b;
      return {
        ...b,
        email: contacts.email !== undefined ? contacts.email : b.email,
        decisionMakerTitles: contacts.decisionMakerTitles !== undefined ? contacts.decisionMakerTitles : b.decisionMakerTitles,
        instagram: {
          ...b.instagram,
          handle: contacts.instagramHandle !== undefined ? contacts.instagramHandle : b.instagram.handle,
          url: contacts.instagramHandle !== undefined ? `https://instagram.com/${contacts.instagramHandle.replace('@', '')}` : b.instagram.url
        },
        linkedinSearchUrl: contacts.linkedinSearchUrl !== undefined ? contacts.linkedinSearchUrl : b.linkedinSearchUrl
      };
    }));
    showToast('Contact intelligence saved to local storage');
  };

  const updateBrandMetrics = (brandId, newMetrics) => {
    setBrands(prev => prev.map(b => {
      if (b.id !== brandId) return b;
      return {
        ...b,
        metrics: {
          ...b.metrics,
          ...newMetrics
        }
      };
    }));
    showToast('Architectural metrics updated');
  };

  const resetAllToDefaults = () => {
    if (window.confirm('Reset all 50 brands back to master default archive state?')) {
      setBrands(GLOBAL_D2C_TARGETS);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Master archive restored to factory defaults (50 targets)');
    }
  };

  // Export Master CSV
  const exportMasterCSV = () => {
    const headers = [
      "Brand Name",
      "Slug",
      "Discovery Tier",
      "Storefront Status",
      "Sector",
      "HQ Location",
      "Website",
      "Instagram",
      "Contact Email",
      "Pipeline Status",
      "Monthly Traffic",
      "Current CVR (%)",
      "Current AOV ($)",
      "Repeat Rate (%)",
      "Implementation Retainer ($)",
      "Turnaround (Days)",
      "Est. Annual Recovered ($)",
      "Primary UX Leak"
    ];

    const rows = brands.map(b => {
      const calc = calculateRevenueImpact({
        traffic: b.metrics.monthlyTraffic,
        baseCVR: b.metrics.currentCVR,
        baseAOV: b.metrics.currentAOV,
        baseRepeatRate: b.metrics.repeatPurchaseRate,
        solutions: b.solutions,
        activeSolutionIds: b.solutions.map(s => s.id),
        implementationFeeUSD: b.metrics.implementationFeeUSD
      });

      return [
        `"${b.name}"`,
        `"${b.slug}"`,
        `"${b.discoveryTier || 'Tier 1: Scaled D2C'}"`,
        `"${b.webStatus || 'Unoptimized Micro-Store'}"`,
        `"${b.sector}"`,
        `"${b.hqLocation}"`,
        `"${b.website}"`,
        `"${b.instagram.handle}"`,
        `"${b.email}"`,
        `"${b.status}"`,
        b.metrics.monthlyTraffic,
        b.metrics.currentCVR,
        b.metrics.currentAOV,
        b.metrics.repeatPurchaseRate,
        b.metrics.implementationFeeUSD,
        b.metrics.turnaroundDays,
        Math.round(calc.annualRevenueRecovered),
        `"${b.forensicAudit.primaryFrictionHeadline.replace(/"/g, '""')}"`
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `BILLY_BENJAMIN_CONSULTING_D2C_TELEMETRY_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Exported Master Pipeline CSV (50 Targets)');
  };

  // Aggregate telemetry
  const aggregateMetrics = useMemo(() => {
    let totalAddressableAnnualLeak = 0;
    let activePipelineRetainerValue = 0;
    let brandsInSequenceCount = 0;
    let tier1Count = 0;
    let tier2Count = 0;

    brands.forEach(b => {
      const calc = calculateRevenueImpact({
        traffic: b.metrics.monthlyTraffic,
        baseCVR: b.metrics.currentCVR,
        baseAOV: b.metrics.currentAOV,
        baseRepeatRate: b.metrics.repeatPurchaseRate,
        solutions: b.solutions,
        activeSolutionIds: b.solutions.map(s => s.id),
        implementationFeeUSD: b.metrics.implementationFeeUSD
      });

      totalAddressableAnnualLeak += calc.annualRevenueRecovered;

      if (b.discoveryTier === 'Tier 1: Scaled D2C') {
        tier1Count++;
      } else {
        tier2Count++;
      }

      if (b.status === 'Sequence Active' || b.status === 'Audit Viewed' || b.status === 'Call Booked') {
        activePipelineRetainerValue += b.metrics.implementationFeeUSD;
        brandsInSequenceCount++;
      } else if (b.status === 'Closed Retainer') {
        activePipelineRetainerValue += b.metrics.implementationFeeUSD;
      }
    });

    return {
      totalAddressableAnnualLeak,
      activePipelineRetainerValue,
      brandsInSequenceCount,
      totalBrandsCount: brands.length,
      tier1Count,
      tier2Count
    };
  }, [brands]);

  // Filtered brands
  const filteredBrands = useMemo(() => {
    return brands.filter(b => {
      const matchesTier = activeTier === 'All' ||
        (activeTier === 'Tier 1' && b.discoveryTier === 'Tier 1: Scaled D2C') ||
        (activeTier === 'Tier 2' && b.discoveryTier === 'Tier 2: Undiscovered / Zero-Web');
      const matchesSector = activeSector === 'All' || b.sector === activeSector;
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query ||
        b.name.toLowerCase().includes(query) ||
        b.sector.toLowerCase().includes(query) ||
        b.instagram.handle.toLowerCase().includes(query) ||
        b.hqLocation.toLowerCase().includes(query) ||
        (b.webStatus && b.webStatus.toLowerCase().includes(query));
      return matchesTier && matchesSector && matchesQuery;
    });
  }, [brands, activeTier, activeSector, searchQuery]);

  const selectedBrand = useMemo(() => {
    // If selectedBrandId is in filteredBrands, pick it, else fallback to first in filteredBrands or all brands
    return filteredBrands.find(b => b.id === selectedBrandId) || filteredBrands[0] || brands[0];
  }, [brands, filteredBrands, selectedBrandId]);

  return (
    <BrandContext.Provider
      value={{
        brands: filteredBrands,
        allBrands: brands,
        stages: PIPELINE_STAGES,
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
        resetAllToDefaults,
        exportMasterCSV,
        toastMessage,
        showToast
      }}
    >
      {children}
    </BrandContext.Provider>
  );
}

export function useBrands() {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error('useBrands must be used within a BrandProvider');
  }
  return context;
}
