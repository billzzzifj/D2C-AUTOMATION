import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Download,
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { formatCurrency } from '../../utils/formatters';

export default function BookingModal({ isOpen, onClose, brand, monthlyBleed }) {
  const [step, setStep] = useState('form'); // 'form' | 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    email: brand.email || '',
    slot: 'Tuesday 2:00 PM EST',
    focus: '14-Day Mobile CVR Overhaul Sprint'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366F1', '#10B981', '#FAFAFA']
      });
    } catch (err) {
      console.log('Confetti trigger', err);
    }
  };

  const slots = [
    'Tomorrow, 11:00 AM EST',
    'Thursday, 2:00 PM EST',
    'Friday, 1:30 PM EST',
    'Next Monday, 10:00 AM EST'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl bg-zinc-950 border border-white/15 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white tracking-tight">
                {step === 'form' ? 'Reserve Architecture Sprint' : 'Sprint Consultation Reserved'}
              </h3>
              <p className="text-xs text-zinc-400">
                14-Day High-Converting D2C Deployment for <span className="text-white font-medium">{brand.name}</span>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            
            {/* Bleed reminder banner */}
            <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/20 flex items-center justify-between text-xs">
              <span className="text-red-400 font-medium">Estimated Monthly Bleed:</span>
              <span className="font-bold text-red-300 font-mono text-sm">
                {formatCurrency(monthlyBleed, true)}/mo
              </span>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Your Name & Title *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Morgan, Head of eCommerce"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1.5">
                Select 30-Minute Architecture Review Slot
              </label>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFormData({ ...formData, slot: s })}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                      formData.slot === s
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm'
                        : 'bg-black/50 border-white/10 text-zinc-400 hover:text-white hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Clock className="w-3 h-3" />
                      <span>30 min</span>
                    </div>
                    <div className="font-semibold text-white truncate">{s}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-zinc-300 block mb-1">
                Primary Sprint Focus
              </label>
              <select
                value={formData.focus}
                onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-black border border-white/15 text-white text-sm focus:outline-none focus:border-emerald-500"
              >
                <option value="14-Day Mobile CVR Overhaul Sprint">14-Day Mobile CVR Overhaul Sprint</option>
                <option value="AI 3D Campaign Visualizer Engine">AI 3D Campaign Visualizer Engine</option>
                <option value="Full D2C Conversion OS Deployment">Full D2C Conversion OS Deployment</option>
              </select>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Zero obligations • Strict NDA protected
              </span>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 shadow-lg shadow-emerald-500/25 border border-emerald-400/40 transition-all flex items-center gap-2"
              >
                <span>Confirm Session</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-white tracking-tight">
              Session Confirmed for {brand.name}
            </h4>

            <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
              We have locked in your 30-minute architecture review for <span className="text-white font-medium">{formData.slot}</span>. A calendar invitation and brief teardown brief have been sent to <span className="text-emerald-400 font-mono">{formData.email}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-zinc-500">Scheduled For:</span>
                <span className="text-white font-medium">{formData.name || brand.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Target Monthly Recovery:</span>
                <span className="text-emerald-400 font-mono font-bold">{formatCurrency(monthlyBleed)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Deployment SLA:</span>
                <span className="text-white font-medium">14 Business Days</span>
              </div>
            </div>

            <div className="pt-2 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-zinc-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
