import React, { useState } from 'react';
import { X, Plus, Sparkles, Building2 } from 'lucide-react';
import { useBrands } from '../../context/BrandContext';

export default function AddBrandModal() {
  const { isAddModalOpen, setIsAddModalOpen, addBrand, sectors } = useBrands();
  const [formData, setFormData] = useState({
    name: '',
    sector: 'Skincare',
    traffic: 100000,
    aov: 65,
    website: '',
    instagramHandle: '',
    email: '',
    tagline: ''
  });

  if (!isAddModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    addBrand(formData);
    setIsAddModalOpen(false);
    setFormData({
      name: '',
      sector: 'Skincare',
      traffic: 100000,
      aov: 65,
      website: '',
      instagramHandle: '',
      email: '',
      tagline: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/[0.08] flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white tracking-tight">
                Add Target D2C Brand
              </h3>
              <p className="text-xs text-zinc-400">
                Enrich pipeline with new high-growth brand metrics
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsAddModalOpen(false)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Brand Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rare Beauty"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Sector
              </label>
              <select
                value={formData.sector}
                onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-500"
              >
                {sectors.filter(s => s !== 'All').map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
                <option value="Luxury Wellness">Luxury Wellness</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Monthly Traffic (Sessions)
              </label>
              <input
                type="number"
                min="1000"
                step="5000"
                value={formData.traffic}
                onChange={(e) => setFormData({ ...formData, traffic: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Estimated AOV ($)
              </label>
              <input
                type="number"
                min="5"
                step="5"
                value={formData.aov}
                onChange={(e) => setFormData({ ...formData, aov: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm font-mono focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Instagram Handle
              </label>
              <input
                type="text"
                placeholder="@brand"
                value={formData.instagramHandle}
                onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-zinc-400 block mb-1">
                Contact Email
              </label>
              <input
                type="email"
                placeholder="vip@brand.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-zinc-400 block mb-1">
              Tagline / Product Highlight
            </label>
            <input
              type="text"
              placeholder="e.g. Next-generation hydration therapy and barrier repair"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3 py-2 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 border border-indigo-400/40 transition-all flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Pipeline</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
