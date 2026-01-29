import React from 'react';

export function Navigation() {
  return (
    <nav className="relative z-50 w-full py-6 px-6 lg:px-12 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">Currencee</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <a href="#" className="hover:text-cyan-400 transition-colors">Solutions</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">API</a>
        <a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a>
      </div>
      <div className="flex gap-4">
        <a href="#" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-md hover:border-cyan-500/50">View on GitHub</a>
      </div>
    </nav>
  );
}
