import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { GLOBAL_D2C_TARGETS } from '../data/globalD2CTargets';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFoundView() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-950 flex flex-col font-mono selection:bg-zinc-950 selection:text-white">
      <header className="w-full bg-white border-b border-zinc-200 py-4 px-6 flex items-center justify-between">
        <Link to="/">
          <BrandLogo showBadge={true} />
        </Link>
        <Link to="/" className="text-xs font-mono text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5">
          <ArrowLeft size={14} />
          <span>Back to Command Center</span>
        </Link>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <span className="inline-block px-2.5 py-1 text-xs bg-zinc-200 text-zinc-800 uppercase font-bold tracking-wider">
          ERROR 404 // FILE NOT FOUND
        </span>

        <h1 className="text-3xl font-black font-sans uppercase tracking-tight text-zinc-950">
          Target Diagnostic Dossier Not Found
        </h1>

        <p className="text-xs text-zinc-600 max-w-md mx-auto leading-relaxed">
          The requested URL path does not correspond to an indexed e-commerce brand. Select any of the 20 active target brand audits below:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left pt-4">
          {GLOBAL_D2C_TARGETS.map(brand => (
            <Link
              key={brand.id}
              to={`/demo/${brand.slug}`}
              className="p-3 bg-white border border-zinc-200 hover:border-zinc-950 transition-colors block text-xs"
            >
              <span className="font-sans font-bold text-zinc-950 block truncate">{brand.name}</span>
              <span className="text-[10px] text-zinc-500 block">{brand.sector}</span>
            </Link>
          ))}
        </div>

        <div className="pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors"
          >
            <span>Return to Outreach Command Center</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
