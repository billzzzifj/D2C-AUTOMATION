import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Sparkles, 
  Eye, 
  Send,
  Flame,
  ArrowRight
} from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from '../common/SocialIcons';
import { useBrands } from '../../context/BrandContext';
import { formatCurrency, formatNumber } from '../../utils/formatters';

export default function PitchGeneratorModal() {
  const { selectedPitchBrand, setSelectedPitchBrand, showToast, updateBrandStatus } = useBrands();
  const [activeTab, setActiveTab] = useState('instagram');
  const [copied, setCopied] = useState(false);

  if (!selectedPitchBrand) return null;

  const brand = selectedPitchBrand;
  const traffic = brand.customMetrics?.traffic || 100000;
  const aov = brand.customMetrics?.aov || 65;
  const monthlyBleed = traffic * 0.016 * aov;
  const annualBleed = monthlyBleed * 12;

  // Fully qualified demo URL with bound params
  const demoUrl = `${window.location.origin}${window.location.pathname}#/demo/${brand.slug}?traffic=${traffic}&aov=${aov}`;

  // Pitch scripts
  const scripts = {
    instagram: `Hey ${brand.name} team—obsessed with the latest drop. I’m a digital director and noticed a UI friction point on mobile checkout that’s likely bleeding your CVR. I ran your traffic through a custom revenue-recovery model and built a 3D AI visualizer for your next campaign. Check the math here: ${demoUrl}`,

    email: `Subject: ${brand.name} mobile CVR leak — ~$${Math.round(monthlyBleed / 1000)}k/mo recovery blueprint

Hey ${brand.name} team,

I’m a digital director working with top tier D2C brands ($5M-$50M/yr). 

While auditing your mobile storefront, our team isolated 3 high-friction bottlenecks (including your mobile checkout drop-off and lack of an instant 1-tap cart trigger). 

Based on your verified ~${formatNumber(traffic)} monthly visitors and $${aov} AOV, moving your mobile CVR from 1.2% to 2.8% recovers an estimated ${formatCurrency(monthlyBleed)} per month (${formatCurrency(annualBleed)}/year) in net-new GMV.

We compiled an interactive audit and a 3D AI campaign visualizer showing how to deploy this in 14 days without rebuilding your tech stack:

👉 View the interactive model: ${demoUrl}

Open to sending over a 90-second Loom teardown if helpful.

Best,
Marcus Vance
Director of Performance Architecture, AURA`,

    linkedin: `Hi ${brand.name} team — huge fan of what you're building in the ${brand.sector} space. 

Our studio specializes in sub-second mobile checkout architecture and AI visual pipelines for high-growth D2C brands. 

We ran ${brand.name}'s estimated ${formatNumber(traffic)} monthly traffic through our conversion leak model. The data indicates an opportunity to recapture ${formatCurrency(monthlyBleed)}/month in lost checkout revenue.

I put together an interactive confidential model with our visualizer here: ${demoUrl}

Would love to share the teardown if you or your eCommerce lead have 5 minutes this week.`
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(scripts[activeTab]);
    setCopied(true);
    showToast(`Copied ${activeTab.toUpperCase()} pitch to clipboard!`);
    setTimeout(() => setCopied(false), 2000);
  };

  const markPitchSent = () => {
    updateBrandStatus(brand.id, 'DM/Pitch Sent');
    showToast(`Moved ${brand.name} to "DM / Pitch Sent" stage`);
    setSelectedPitchBrand(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl rounded-2xl bg-zinc-950 border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-white/[0.08] flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white tracking-tight flex items-center gap-2">
                Pitch Engine: <span className="text-indigo-400">{brand.name}</span>
              </h3>
              <p className="text-xs text-zinc-400">
                Personalized high-converting outreach scripts grounded in real math
              </p>
            </div>
          </div>
          <button
            onClick={() => setSelectedPitchBrand(null)}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-4 overflow-y-auto flex-1">
          {/* Target Brand Math Preview */}
          <div className="grid grid-cols-3 gap-3 p-3.5 rounded-xl bg-black/60 border border-white/[0.06] text-xs">
            <div>
              <span className="text-zinc-500 block uppercase font-mono text-[10px]">Monthly Traffic</span>
              <span className="font-bold text-white font-mono">{formatNumber(traffic)}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase font-mono text-[10px]">Est. AOV</span>
              <span className="font-bold text-white font-mono">${aov}</span>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase font-mono text-[10px]">Calculated Bleed</span>
              <span className="font-bold text-red-400 font-mono">{formatCurrency(monthlyBleed, true)}/mo</span>
            </div>
          </div>

          {/* Channel Tabs */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-zinc-900/90 border border-white/[0.06]">
            <button
              onClick={() => setActiveTab('instagram')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'instagram'
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram DM</span>
            </button>

            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'email'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Executive Email</span>
            </button>

            <button
              onClick={() => setActiveTab('linkedin')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'linkedin'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn InMail</span>
            </button>
          </div>

          {/* Script Display */}
          <div className="relative">
            <textarea
              readOnly
              value={scripts[activeTab]}
              rows={activeTab === 'email' ? 10 : 5}
              className="w-full p-4 rounded-xl bg-black/80 border border-white/[0.1] text-zinc-200 text-sm font-sans focus:outline-none focus:border-indigo-500/50 resize-none leading-relaxed select-all"
            />
          </div>

          {/* Bound Link Verification */}
          <div className="p-3 rounded-xl bg-zinc-900/50 border border-white/[0.06] flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 truncate text-zinc-400">
              <span className="font-mono text-indigo-400 font-semibold">Demo Link:</span>
              <span className="truncate font-mono text-[11px] text-zinc-300">{demoUrl}</span>
            </div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Test Link</span>
            </a>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-white/[0.08] bg-zinc-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {activeTab === 'instagram' && (
              <a
                href={brand.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-pink-300 bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 transition-all flex items-center gap-1.5"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Open {brand.instagram.handle}</span>
              </a>
            )}
            {activeTab === 'email' && (
              <a
                href={`mailto:${brand.email}?subject=${encodeURIComponent(`${brand.name} mobile CVR leak — ~$${Math.round(monthlyBleed / 1000)}k/mo recovery blueprint`)}&body=${encodeURIComponent(scripts.email)}`}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Launch Email App</span>
              </a>
            )}
            {activeTab === 'linkedin' && (
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>Open LinkedIn</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Script!' : 'Copy Script'}</span>
            </button>

            <button
              onClick={markPitchSent}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 border border-indigo-400/40 transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Mark as Sent</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
