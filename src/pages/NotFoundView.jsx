import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import ThemeToggle from '../components/ThemeToggle';
import { GLOBAL_D2C_TARGETS } from '../data/globalD2CTargets';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFoundView() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-950 dark:text-zinc-50 flex flex-col font-mono selection:bg-zinc-950 selection:text-white dark:selection:bg-zinc-50 dark:selection:text-zinc-950 transition-colors duration-150">
      <header className="w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 py-4 px-6 flex items-center justify-between">
        <Link to="/">
          <BrandLogo showBadge={true} />
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/" className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 flex items-center gap-1.5 transition-colors">
            <ArrowLeft size={14} />
            <span>Back to Command Center</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
        <span className="inline-block px-2.5 py-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 uppercase font-bold tracking-wider">
          ERROR 404 // FILE NOT FOUND
        </span>

        <h1 className="text-3xl font-black font-sans uppercase tracking-tight text-zinc-950 dark:text-zinc-50">
          Target Diagnostic Dossier Not Found
        </h1>

        <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
          The requested URL path does not correspond to an indexed e-commerce brand. Select any of the 20 active target brand audits below:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left pt-4">
          {GLOBAL_D2C_TARGETS.map(brand => (
            <Link
              key={brand.id}
              to={`/demo/${brand.slug}`}
              className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-950 dark:hover:border-zinc-50 transition-colors block text-xs"
            >
              <span className="font-sans font-bold text-zinc-950 dark:text-zinc-50 block truncate">{brand.name}</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 block">{brand.sector}</span>
            </Link>
          ))}
        </div>

        <div className="pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 dark:bg-zinc-50 text-white dark:text-zinc-950 text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors border border-zinc-950 dark:border-zinc-50"
          >
            <span>Return to Outreach Command Center</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
