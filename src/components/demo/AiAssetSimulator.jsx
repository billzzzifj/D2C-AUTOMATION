import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  Camera, 
  Cpu, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  Maximize2, 
  Sun, 
  Moon, 
  Smartphone, 
  RotateCw,
  Clock,
  DollarSign
} from 'lucide-react';
import { formatCurrency } from '../../utils/formatters';

export default function AiAssetSimulator({ brand }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeArchetype, setActiveArchetype] = useState('orbit');
  const [lightingPreset, setLightingPreset] = useState('noir');
  const [rotationAngle, setRotationAngle] = useState(45);
  const sliderRef = useRef(null);

  // Mouse / Touch handlers for before-after slider
  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPos((x / rect.width) * 100);
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const stopDragging = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mouseup', stopDragging);
      window.addEventListener('touchend', stopDragging);
    }
    return () => {
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging]);

  return (
    <section id="ai-assets" className="relative scroll-mt-20">
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
        
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Module 2 // AI Visual Asset Simulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
              $25k Traditional Studio vs $5k AI 3D Pipeline
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              Compare legacy agency photoshoot economics against our proprietary 3D neural campaign engine engineered specifically for {brand.name}’s hero catalog.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSliderPos(15)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
            >
              Show $25k Studio
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all"
            >
              50/50 Split
            </button>
            <button
              onClick={() => setSliderPos(85)}
              className="text-xs px-2.5 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 hover:text-white border border-indigo-500/40 transition-all font-medium"
            >
              Show $5k AI Pipeline
            </button>
          </div>
        </div>

        {/* Comparison Slider Element */}
        <div 
          ref={sliderRef}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative h-80 sm:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl mb-8 group"
        >
          {/* Right Layer: AI Pipeline ($5k) */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-zinc-900 to-black p-6 sm:p-8 flex flex-col justify-between">
            <div className="flex justify-end items-start">
              <div className="px-3 py-1.5 rounded-xl bg-indigo-500/20 backdrop-blur-md border border-indigo-500/40 text-indigo-300 text-xs font-semibold flex items-center gap-2 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                <span>Billy Benjamin Consulting 3D AI Pipeline ($4,800)</span>
              </div>
            </div>

            {/* Visual simulation representation of 3D / AI photorealism */}
            <div className="flex items-center justify-center my-auto">
              <div className="relative text-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-3xl bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-emerald-400/20 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl shadow-indigo-500/20 transform hover:scale-105 transition-transform duration-500">
                  <div className="text-center p-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-300 block mb-1">
                      {brand.sector}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {brand.heroProduct || brand.name}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-[9px] font-mono text-emerald-400 border border-emerald-500/30">
                      4K SPATIAL 3D
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-indigo-200">
                  <RotateCw className="w-3 h-3 animate-spin text-indigo-400" />
                  <span>360° Realtime NeRF Model • 120+ Multi-Ratio Cuts</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end text-[11px] text-zinc-400 font-mono">
              Turnaround: <span className="text-emerald-400 ml-1 font-bold">48 Hours</span>
            </div>
          </div>

          {/* Left Layer: Traditional Photoshoot ($25k) (Clipped by slider position) */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-neutral-900 p-6 sm:p-8 flex flex-col justify-between overflow-hidden border-r border-white/30"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="flex justify-start items-start">
              <div className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 text-xs font-semibold flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-zinc-400" />
                <span>Traditional Studio Shoot ($25,000)</span>
              </div>
            </div>

            {/* Static photoshoot representation */}
            <div className="flex items-center justify-center my-auto min-w-[280px]">
              <div className="relative text-center grayscale opacity-75">
                <div className="w-28 h-28 sm:w-36 sm:h-36 mx-auto rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <div className="text-center p-3">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block mb-1">
                      Static Flat Lay
                    </span>
                    <span className="text-xs font-medium text-zinc-300 block">
                      Single Angle 4:5
                    </span>
                    <span className="mt-2 inline-block px-2 py-0.5 rounded bg-zinc-700 text-[9px] font-mono text-zinc-400">
                      STATIC JPG
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-[11px] text-zinc-500 font-mono">
                  12 Static Photos • 0 Interactive 3D • Re-shoot impossible
                </div>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 font-mono">
              Turnaround: <span className="text-red-400 ml-1 font-bold">4 to 6 Weeks</span>
            </div>
          </div>

          {/* Slider Divider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl pointer-events-none flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 -ml-3.5 rounded-full bg-white text-black shadow-xl flex items-center justify-center text-xs font-bold font-mono">
              ↔
            </div>
          </div>

          {/* Prompt hint */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full bg-black/75 border border-white/10 text-[10px] text-zinc-400 tracking-wider uppercase font-mono">
            Drag Slider or Click Presets Above
          </div>
        </div>

        {/* Detailed Side-by-Side Economics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* Legacy Studio Economics */}
          <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.06] space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-zinc-400" />
                <h4 className="font-semibold text-sm text-zinc-200">
                  Legacy Production Overhead
                </h4>
              </div>
              <span className="text-lg font-bold text-zinc-300 font-mono tabular-nums">
                $25,000
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  Studio space rental (Brooklyn / DTLA)
                </span>
                <span className="font-mono text-zinc-300">$4,500</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  Commercial photographer day-rate
                </span>
                <span className="font-mono text-zinc-300">$8,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  Stylist, hair, makeup & prop sourcing
                </span>
                <span className="font-mono text-zinc-300">$3,000</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  Talent casting agency fees & buyouts
                </span>
                <span className="font-mono text-zinc-300">$5,500</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  Post-production retouching turnaround (3 wks)
                </span>
                <span className="font-mono text-zinc-300">$4,000</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-zinc-900/60 text-[11px] text-zinc-400 flex items-center justify-between">
              <span>Final deliverable yield:</span>
              <span className="font-semibold text-white">12 static photos</span>
            </div>
          </div>

          {/* AI 3D Pipeline Economics */}
          <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <h4 className="font-semibold text-sm text-indigo-200">
                  Billy Benjamin Consulting 3D AI Pipeline Retainer
                </h4>
              </div>
              <span className="text-lg font-bold text-emerald-400 font-mono tabular-nums">
                $4,800
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Photorealistic NeRF 3D geometry extraction
                </span>
                <span className="font-mono text-emerald-300">Included</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Infinite virtual lighting moods (Noir, Golden, Neon)
                </span>
                <span className="font-mono text-emerald-300">Included</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  9:16 TikTok / Meta Reels dynamic video cutdowns
                </span>
                <span className="font-mono text-emerald-300">Included</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Interactive 3D product orbit embed for Shopify PDP
                </span>
                <span className="font-mono text-emerald-300">Included</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Instant asset variations delivered in 48 hours
                </span>
                <span className="font-mono text-emerald-300">Included</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-indigo-900/40 text-[11px] text-indigo-200 flex items-center justify-between border border-indigo-500/20">
              <span>Final deliverable yield:</span>
              <span className="font-semibold text-emerald-400">120+ omnichannel assets (80% cost savings)</span>
            </div>
          </div>

        </div>

        {/* Interactive Asset Archetype Showcase */}
        <div className="p-6 rounded-2xl bg-black/60 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h4 className="text-sm font-semibold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Simulated Asset Archetypes for {brand.name}</span>
              </h4>
              <p className="text-xs text-zinc-400">
                Switch between campaign asset configurations generated in our 3D engine.
              </p>
            </div>

            {/* Archetype switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-white/[0.06] overflow-x-auto">
              <button
                onClick={() => setActiveArchetype('orbit')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeArchetype === 'orbit'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                3D Spatial Orbit
              </button>
              <button
                onClick={() => setActiveArchetype('macro')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeArchetype === 'macro'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Macro Specular
              </button>
              <button
                onClick={() => setActiveArchetype('lighting')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeArchetype === 'lighting'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Dynamic Lighting
              </button>
              <button
                onClick={() => setActiveArchetype('omnichannel')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeArchetype === 'omnichannel'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                9:16 Social Cutdown
              </button>
            </div>
          </div>

          {/* Archetype 1: 3D Spatial Orbit */}
          {activeArchetype === 'orbit' && (
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06] text-center">
              <div className="max-w-md mx-auto">
                <div className="h-48 rounded-xl bg-gradient-to-b from-zinc-900 to-black border border-white/10 flex items-center justify-center relative overflow-hidden mb-4">
                  <div 
                    className="w-32 h-32 rounded-2xl bg-indigo-500/20 border border-indigo-400/40 backdrop-blur-xl flex items-center justify-center shadow-2xl transition-transform duration-200"
                    style={{ transform: `rotateY(${rotationAngle}deg)` }}
                  >
                    <div className="text-center p-2">
                      <span className="text-[10px] text-indigo-300 font-mono block">3D MESH</span>
                      <span className="text-xs font-bold text-white block mt-1">{brand.heroProduct || brand.name}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 text-[10px] text-zinc-500 font-mono">
                    Rotation: {rotationAngle}°
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-400 font-mono">0°</span>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={rotationAngle}
                    onChange={(e) => setRotationAngle(Number(e.target.value))}
                    className="flex-1 h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                  />
                  <span className="text-xs text-zinc-400 font-mono">360°</span>
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Drag slider to test 360-degree spatial interaction on product details.
                </p>
              </div>
            </div>
          )}

          {/* Archetype 2: Macro Specular */}
          {activeArchetype === 'macro' && (
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                <div className="h-48 rounded-xl bg-gradient-to-tr from-zinc-900 via-indigo-950 to-neutral-900 border border-white/10 p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono text-[10px]">
                      8K SUB-SURFACE SCATTERING
                    </span>
                    <span className="text-emerald-400 font-mono text-xs font-semibold">100% Raytraced</span>
                  </div>
                  <div className="text-center my-auto">
                    <span className="text-xs text-zinc-400 block font-mono">Formula Micro-Viscosity</span>
                    <span className="text-sm font-bold text-white mt-1 block">Tactile Texture Simulation</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">Micro-droplet refractive index: 1.333</span>
                </div>
                <div className="space-y-3">
                  <h5 className="font-semibold text-sm text-white">Why Macro Simulation Converts:</h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Mobile shoppers can't physically touch your {brand.sector.toLowerCase()} goods. High-precision subsurface scattering and specular reflections trigger haptic desire, elevating mobile cart-add intent by 27%.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-zinc-300 font-mono border border-white/10">AVIF Compressed</span>
                    <span className="px-2 py-1 rounded-md bg-white/5 text-[10px] text-zinc-300 font-mono border border-white/10">&lt;45kb payload</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Archetype 3: Dynamic Lighting */}
          {activeArchetype === 'lighting' && (
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                  Select Virtual Lighting Environment
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLightingPreset('noir')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      lightingPreset === 'noir'
                        ? 'bg-zinc-800 text-white border border-white/20'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    Studio Noir
                  </button>
                  <button
                    onClick={() => setLightingPreset('sunset')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      lightingPreset === 'sunset'
                        ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    Golden Hour Sunset
                  </button>
                  <button
                    onClick={() => setLightingPreset('cyber')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      lightingPreset === 'cyber'
                        ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40'
                        : 'text-zinc-500 hover:text-white'
                    }`}
                  >
                    Neon Tokyo
                  </button>
                </div>
              </div>

              <div className={`h-40 rounded-xl p-4 flex items-center justify-center transition-all duration-500 border border-white/10 ${
                lightingPreset === 'noir'
                  ? 'bg-gradient-to-b from-neutral-900 to-black text-white'
                  : lightingPreset === 'sunset'
                  ? 'bg-gradient-to-r from-amber-950 via-red-950 to-neutral-900 text-amber-200'
                  : 'bg-gradient-to-r from-purple-950 via-indigo-950 to-blue-950 text-purple-200'
              }`}>
                <div className="text-center">
                  <span className="text-xs uppercase font-mono tracking-widest block opacity-75">
                    Lighting Rig Preset: {lightingPreset.toUpperCase()}
                  </span>
                  <span className="text-base font-bold mt-1 block">
                    {brand.name} Campaign Asset #{lightingPreset === 'noir' ? '01' : lightingPreset === 'sunset' ? '02' : '03'}
                  </span>
                  <span className="text-[10px] mt-2 inline-block font-mono opacity-60">
                    Calculated lux: {lightingPreset === 'noir' ? '450 lx' : lightingPreset === 'sunset' ? '1,800 lx' : '900 lx'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Archetype 4: Omnichannel Cutdown */}
          {activeArchetype === 'omnichannel' && (
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-white/[0.06]">
              <div className="grid grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-black border border-white/10 text-center">
                  <div className="h-28 w-16 mx-auto rounded-lg bg-indigo-900/40 border border-indigo-500/30 flex items-center justify-center mb-2">
                    <span className="text-[9px] font-mono text-indigo-300">9:16 REELS</span>
                  </div>
                  <span className="text-[11px] font-medium text-white block">TikTok & Meta</span>
                  <span className="text-[10px] text-zinc-500">Auto-framing active</span>
                </div>

                <div className="p-3 rounded-xl bg-black border border-white/10 text-center">
                  <div className="h-20 w-20 mx-auto rounded-lg bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center mb-2">
                    <span className="text-[9px] font-mono text-emerald-300">1:1 SQUARE</span>
                  </div>
                  <span className="text-[11px] font-medium text-white block">Shopify PDP</span>
                  <span className="text-[10px] text-zinc-500">Zoom-ready resolution</span>
                </div>

                <div className="p-3 rounded-xl bg-black border border-white/10 text-center">
                  <div className="h-16 w-28 mx-auto rounded-lg bg-purple-900/40 border border-purple-500/30 flex items-center justify-center mb-2">
                    <span className="text-[9px] font-mono text-purple-300">21:9 HERO</span>
                  </div>
                  <span className="text-[11px] font-medium text-white block">Desktop Billboard</span>
                  <span className="text-[10px] text-zinc-500">Cinematic wide angle</span>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
