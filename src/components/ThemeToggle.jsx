import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`inline-flex items-center border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-none select-none ${className}`}>
      
      {/* Daylight Option */}
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={
          theme === 'light'
            ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest cursor-pointer flex items-center gap-1.5 transition-colors'
        }
        title="Switch to Daylight Studio Mode"
      >
        <Sun size={13} strokeWidth={1.5} />
        <span>DAYLIGHT</span>
      </button>

      {/* Obsidian Option */}
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={
          theme === 'dark'
            ? 'bg-white dark:bg-zinc-950 text-zinc-950 dark:text-zinc-50 border border-zinc-200 dark:border-zinc-700 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-sm'
            : 'text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest cursor-pointer flex items-center gap-1.5 transition-colors'
        }
        title="Switch to Obsidian Studio Mode"
      >
        <Moon size={13} strokeWidth={1.5} />
        <span>OBSIDIAN</span>
      </button>

    </div>
  );
}
