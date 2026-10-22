// Utility formatting functions for currency, numbers, and percentages

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
  if (val === undefined || val === null || isNaN(val)) return "0%";
  return `${Number(val).toFixed(1)}%`;
}
