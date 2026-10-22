/**
 * COMPOUND REVENUE MATHEMATICS ENGINE
 * Billy Benjamin Consulting // Systems Architecture
 */

export function calculateRevenueImpact({
  traffic = 100000,
  baseCVR = 1.5,
  baseAOV = 60,
  baseRepeatRate = 25,
  solutions = [],
  activeSolutionIds = [],
  implementationFeeUSD = 15000
}) {
  const numTraffic = Number(traffic) || 0;
  const numBaseCVR = Number(baseCVR) || 0;
  const numBaseAOV = Number(baseAOV) || 0;
  const numBaseRepeat = Number(baseRepeatRate) || 0;
  const numFee = Number(implementationFeeUSD) || 15000;

  // 1. Current Baseline
  const currentMonthlyOrders = numTraffic * (numBaseCVR / 100);
  const currentMonthlyDirectRevenue = currentMonthlyOrders * numBaseAOV;
  const currentMonthlyTotalRevenue = currentMonthlyDirectRevenue * (1 + (numBaseRepeat / 100) * 0.5);
  const currentAnnualTotalRevenue = currentMonthlyTotalRevenue * 12;

  // 2. Active Solution Lifts
  const activeSolutions = solutions.filter(s => activeSolutionIds.includes(s.id));

  const cvrLift = activeSolutions
    .filter(s => s.lever === 'CVR')
    .reduce((sum, s) => sum + (Number(s.liftPercentage) || 0), 0);

  const aovLift = activeSolutions
    .filter(s => s.lever === 'AOV')
    .reduce((sum, s) => sum + (Number(s.liftPercentage) || 0), 0);

  const ltvLift = activeSolutions
    .filter(s => s.lever === 'LTV')
    .reduce((sum, s) => sum + (Number(s.liftPercentage) || 0), 0);

  // 3. Compounded Projected Metrics
  const newCVR = numBaseCVR * (1 + cvrLift / 100);
  const newAOV = numBaseAOV * (1 + aovLift / 100);
  const newRepeatRate = numBaseRepeat * (1 + ltvLift / 100);

  // 4. Projected Recovered Output
  const projectedMonthlyOrders = numTraffic * (newCVR / 100);
  const projectedMonthlyDirectRevenue = projectedMonthlyOrders * newAOV;
  const projectedMonthlyTotalRevenue = projectedMonthlyDirectRevenue * (1 + (newRepeatRate / 100) * 0.5);
  const projectedAnnualTotalRevenue = projectedMonthlyTotalRevenue * 12;

  const monthlyRevenueRecovered = Math.max(0, projectedMonthlyTotalRevenue - currentMonthlyTotalRevenue);
  const annualRevenueRecovered = monthlyRevenueRecovered * 12;

  const retainerPaybackDays = monthlyRevenueRecovered > 0 
    ? Math.max(1, Math.round((numFee / monthlyRevenueRecovered) * 30))
    : 90;

  return {
    traffic: numTraffic,
    baseCVR: numBaseCVR,
    baseAOV: numBaseAOV,
    baseRepeatRate: numBaseRepeat,
    cvrLift,
    aovLift,
    ltvLift,
    newCVR,
    newAOV,
    newRepeatRate,
    currentMonthlyOrders,
    currentMonthlyDirectRevenue,
    currentMonthlyTotalRevenue,
    currentAnnualTotalRevenue,
    projectedMonthlyOrders,
    projectedMonthlyDirectRevenue,
    projectedMonthlyTotalRevenue,
    projectedAnnualTotalRevenue,
    monthlyRevenueRecovered,
    annualRevenueRecovered,
    retainerPaybackDays,
    implementationFeeUSD: numFee
  };
}

export function formatCurrency(amount, compact = false) {
  if (amount === undefined || amount === null || isNaN(amount)) return "$0";
  
  if (compact) {
    if (Math.abs(amount) >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(1)}M`;
    }
    if (Math.abs(amount) >= 1_000) {
      return `$${(amount / 1_000).toFixed(0)}k`;
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatNumber(num) {
  if (num === undefined || num === null || isNaN(num)) return "0";
  return new Intl.NumberFormat('en-US').format(Math.round(num));
}

export function formatPercent(val) {
  if (val === undefined || val === null || isNaN(val)) return "0.0%";
  return `${Number(val).toFixed(1)}%`;
}
