import React from 'react';

export function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Left Side: Brand & Builder */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 flex items-center justify-center bg-cyan-500/20 rounded-lg">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Currencee</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Built by <a href="#" className="text-white hover:text-cyan-400 transition-colors underline decoration-white/10 underline-offset-4">Midey Haryor</a>.
              Experience seamless global finance with real-time accuracy and premium design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors" title="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Middle Side: Data Sources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Reliability</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Rates from Fawazahmed0 API
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                Live mid-market data
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                <a href="#" className="hover:text-white transition-colors">Report an issue</a>
              </li>
            </ul>
          </div>

          {/* Right Side: Legal Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Legal</h4>
            <p className="text-slate-600 text-[11px] leading-relaxed italic">
              Disclaimer: Exchange rates provided are for informational purposes only and do not constitute financial advice. We are not responsible for any financial decisions made based on this data.
            </p>
            <div className="pt-4 text-slate-500 text-xs font-medium">
              © 2025 Currencee. All rights reserved.
            </div>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[10px] text-slate-700 uppercase tracking-[0.2em]">
            Designed for the next generation of finance
          </div>
          <div className="flex gap-6 text-[10px] text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
