import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { GLOBAL_D2C_TARGETS, INITIAL_COLUMNS } from '../data/globalD2CTargets';

const BrandContext = createContext(null);

const STORAGE_KEY = 'aura_d2c_targets_v1';

export function BrandProvider({ children }) {
  const [brands, setBrands] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load targets from localStorage', e);
    }
    return GLOBAL_D2C_TARGETS;
  });

  const [activeSector, setActiveSector] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPitchBrand, setSelectedPitchBrand] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(brands));
    } catch (e) {
      console.error('Failed to save targets to localStorage', e);
    }
  }, [brands]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const updateBrandStatus = (id, newStatus) => {
    setBrands(prev =>
      prev.map(b => (b.id === id ? { ...b, status: newStatus } : b))
    );
    showToast(`Updated status to "${newStatus}"`);
  };

  const updateBrandMetrics = (id, newMetrics) => {
    setBrands(prev =>
      prev.map(b => (b.id === id ? { ...b, customMetrics: { ...b.customMetrics, ...newMetrics } } : b))
    );
    showToast(`Updated metrics for brand`);
  };

  const addBrand = (newBrandData) => {
    const slug = newBrandData.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const newBrand = {
      id: slug || `brand-${Date.now()}`,
      slug: slug || `brand-${Date.now()}`,
      name: newBrandData.name,
      sector: newBrandData.sector || 'Skincare',
      website: newBrandData.website || `https://${slug}.com`,
      instagram: {
        handle: newBrandData.instagramHandle || `@${slug}`,
        url: `https://instagram.com/${(newBrandData.instagramHandle || slug).replace('@', '')}`
      },
      linkedin: newBrandData.linkedin || `https://linkedin.com/company/${slug}`,
      email: newBrandData.email || `growth@${slug}.com`,
      status: 'Targeted',
      customMetrics: {
        traffic: Number(newBrandData.traffic) || 100000,
        aov: Number(newBrandData.aov) || 65
      },
      tagline: newBrandData.tagline || 'High-growth direct-to-consumer brand',
      heroProduct: newBrandData.heroProduct || 'Signature Core Product Line',
      frictionPoints: [
        'Sub-optimal mobile checkout layout causing CVR drop',
        'Lacks 1-tap Apple Pay anchor on initial view',
        'Static imagery fails to convert mobile product detail page visitors'
      ]
    };

    setBrands(prev => [newBrand, ...prev]);
    showToast(`Added ${newBrand.name} to Pipeline`);
  };

  const deleteBrand = (id) => {
    setBrands(prev => prev.filter(b => b.id !== id));
    showToast('Brand removed from pipeline');
  };

  const resetToDefaults = () => {
    if (window.confirm('Reset all 20 target brands and pipeline stages back to factory defaults?')) {
      setBrands(GLOBAL_D2C_TARGETS);
      localStorage.removeItem(STORAGE_KEY);
      showToast('Pipeline restored to default 20 D2C brands');
    }
  };

  // Pipeline aggregate statistics
  const stats = useMemo(() => {
    let totalTraffic = 0;
    let totalMonthlyBleed = 0;
    let closedCount = 0;
    let pitchSentCount = 0;
    let reviewingCount = 0;

    brands.forEach(b => {
      const traffic = b.customMetrics?.traffic || 0;
      const aov = b.customMetrics?.aov || 0;
      // Bleed difference: 2.8% - 1.2% = 1.6% (0.016)
      const monthlyBleed = traffic * 0.016 * aov;
      totalTraffic += traffic;
      totalMonthlyBleed += monthlyBleed;

      if (b.status === 'Closed/Won') closedCount++;
      if (b.status === 'DM/Pitch Sent') pitchSentCount++;
      if (b.status === 'Demo Clicked/Reviewing') reviewingCount++;
    });

    const totalAnnualBleed = totalMonthlyBleed * 12;
    const closedWonValue = brands
      .filter(b => b.status === 'Closed/Won')
      .reduce((acc, b) => acc + (b.customMetrics.traffic * 0.016 * b.customMetrics.aov * 12), 0);

    return {
      totalBrands: brands.length,
      totalTraffic,
      totalMonthlyBleed,
      totalAnnualBleed,
      closedCount,
      pitchSentCount,
      reviewingCount,
      closedWonValue,
      winRate: brands.length > 0 ? ((closedCount / brands.length) * 100).toFixed(0) : 0
    };
  }, [brands]);

  // Filtered brands
  const filteredBrands = useMemo(() => {
    return brands.filter(b => {
      const matchesSector = activeSector === 'All' || b.sector.toLowerCase() === activeSector.toLowerCase();
      const query = searchQuery.toLowerCase().trim();
      const matchesQuery = !query ||
        b.name.toLowerCase().includes(query) ||
        b.sector.toLowerCase().includes(query) ||
        b.instagram.handle.toLowerCase().includes(query);
      return matchesSector && matchesQuery;
    });
  }, [brands, activeSector, searchQuery]);

  // Unique sectors for filtering
  const sectors = useMemo(() => {
    const list = Array.from(new Set(GLOBAL_D2C_TARGETS.map(b => b.sector)));
    return ['All', ...list];
  }, []);

  return (
    <BrandContext.Provider
      value={{
        brands: filteredBrands,
        allBrands: brands,
        columns: INITIAL_COLUMNS,
        activeSector,
        setActiveSector,
        searchQuery,
        setSearchQuery,
        sectors,
        stats,
        updateBrandStatus,
        updateBrandMetrics,
        addBrand,
        deleteBrand,
        resetToDefaults,
        selectedPitchBrand,
        setSelectedPitchBrand,
        isAddModalOpen,
        setIsAddModalOpen,
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
