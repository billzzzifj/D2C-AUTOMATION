import React from 'react';
import BrandCard from './BrandCard';
import { useBrands } from '../../context/BrandContext';
import { formatCurrency } from '../../utils/formatters';

export default function KanbanColumn({ column, brands }) {
  const { updateBrandStatus } = useBrands();

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const brandId = e.dataTransfer.getData('text/plain');
    if (brandId) {
      updateBrandStatus(brandId, column.id);
    }
  };

  // Calculate total monthly bleed for brands in this column
  const totalColumnBleed = brands.reduce((acc, b) => {
    const traffic = b.customMetrics?.traffic || 0;
    const aov = b.customMetrics?.aov || 0;
    return acc + (traffic * 0.016 * aov);
  }, 0);

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex flex-col h-full rounded-2xl bg-zinc-950/40 border border-white/[0.06] backdrop-blur-md overflow-hidden min-w-[280px]"
    >
      {/* Column Header */}
      <div className={`p-4 border-b border-white/[0.06] bg-gradient-to-r ${column.color}`}>
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm text-white tracking-tight">
              {column.title}
            </h3>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold tabular-nums ${column.badge}`}>
              {brands.length}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-zinc-400">
          <span>Est. Stage Bleed:</span>
          <span className="font-mono font-medium text-zinc-300 tabular-nums">
            {formatCurrency(totalColumnBleed, true)}/mo
          </span>
        </div>
      </div>

      {/* Droppable Card Container */}
      <div className="flex-1 p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-280px)] scrollbar-thin">
        {brands.length === 0 ? (
          <div className="h-32 border-2 border-dashed border-white/[0.06] rounded-xl flex items-center justify-center p-4 text-center">
            <span className="text-xs text-zinc-600">
              Drag brand here to move to {column.title}
            </span>
          </div>
        ) : (
          brands.map(brand => (
            <BrandCard key={brand.id} brand={brand} />
          ))
        )}
      </div>
    </div>
  );
}
