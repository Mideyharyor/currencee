import React from 'react';

export function ShowcasePanel() {
  return (
    <div className="lg:col-span-5 space-y-8 lg:mt-0">
      {/* CSS Mobile Phone Mockup - Deep Tech Style */}
      <div className="relative mx-auto border-[#1a1a1a] bg-[#050505] border-[10px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl shadow-cyan-900/20 flex flex-col overflow-hidden ring-1 ring-white/10 transform hover:scale-[1.01] transition-transform duration-700 animate-float hidden md:flex">
        {/* Glowing border effect around phone */}
        <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/5 pointer-events-none z-40"></div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-[28px] w-[100px] bg-[#1a1a1a] rounded-b-2xl z-30"></div>

        {/* Screen Content */}
        <div className="flex-1 bg-[#050505] relative overflow-hidden flex flex-col font-sans">
          {/* Status Bar */}
          <div className="h-12 w-full flex justify-between items-center px-6 pt-3 z-20 text-white">
            <span className="text-[12px] font-bold tracking-wider">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-4 rounded-full border border-white/30"></div>
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
          </div>

          {/* Mobile App Header */}
          <div className="px-6 pb-4 pt-2 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center bg-cyan-500/20 rounded-lg">
                <svg className="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">Currencee</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center ring-1 ring-white/10">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </div>
          </div>

          {/* App Content - Dashboard Replica */}
          <div className="p-4 flex-1 overflow-y-auto no-scrollbar">

            {/* Dashboard Widget Replica */}
            <div className="bg-[#111] p-5 rounded-3xl mb-4 border border-white/10 shadow-lg relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px]"></div>

              {/* Input 1 */}
              <div className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">From</span>
                </div>
                <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                  <span className="text-xl font-light text-white">1,000</span>
                  <div className="flex items-center gap-2 bg-[#222] px-2 py-1 rounded-lg">
                    <img src="https://flagcdn.com/w40/gb.png" className="w-4 h-4 rounded-full object-cover" alt="gbp" />
                    <span className="text-xs font-bold text-white">GBP</span>
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative h-4 flex items-center justify-center mb-4">
                <div className="absolute w-full h-px bg-white/5"></div>
                <div className="bg-[#111] p-1.5 rounded-full border border-white/10 relative z-10">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                </div>
              </div>

              {/* Input 2 */}
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">To</span>
                </div>
                <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                  <span className="text-xl font-light text-cyan-400">1,154.20</span>
                  <div className="flex items-center gap-2 bg-[#222] px-2 py-1 rounded-lg">
                    <img src="https://flagcdn.com/w40/eu.png" className="w-4 h-4 rounded-full object-cover" alt="eur" />
                    <span className="text-xs font-bold text-white">EUR</span>
                    <svg className="w-3 h-3 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                  <span className="text-[10px] text-slate-400">1 GBP = <span className="text-cyan-400">1.1542 EUR</span></span>
                </div>
              </div>

              <button className="w-full bg-cyan-600 text-white font-bold py-3 rounded-xl shadow-lg text-sm">Convert Now</button>
            </div>

            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest ml-2 mb-3 block">Recent Rates</span>
            <div className="space-y-2">
              {[
                { code: 'USD', name: 'US Dollar', val: '1.27', change: '+0.05%' },
                { code: 'JPY', name: 'Japanese Yen', val: '188.42', change: '-0.12%' },
                { code: 'AUD', name: 'Australian Dollar', val: '1.92', change: '+0.01%' },
              ].map((item, i) => (
                <div key={i} className="bg-[#111] p-3 rounded-xl flex justify-between items-center border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center text-[10px] text-slate-400 font-bold">{item.code[0]}</div>
                    <div>
                      <div className="font-bold text-xs text-white">{item.code}</div>
                      <div className="text-[9px] text-slate-500 uppercase">{item.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xs text-white">{item.val}</div>
                    <div className={`text-[9px] font-bold ${item.change.startsWith('+') ? 'text-cyan-400' : 'text-red-400'}`}>{item.change}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tab Bar */}
          <div className="h-16 bg-[#050505]/90 backdrop-blur-xl flex justify-around items-center px-6 border-t border-white/5">
            <div className="flex flex-col items-center gap-1 text-cyan-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <div className="flex flex-col items-center gap-1 text-slate-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Card */}
      <div className="bg-[#0A0A0A]/60 backdrop-blur-xl rounded-3xl p-8 text-white relative overflow-hidden border border-white/5 group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-600/20 transition-all duration-700"></div>
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Beta Access
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Global Transfers 2.0</h3>
          <p className="text-slate-400 mb-8 text-sm leading-relaxed">
            We're building the future of cross-border payments. Instant, fee-free, and powered by the same infrastructure used by major central banks.
          </p>
          <button className="w-full bg-[#111] hover:bg-[#151515] border border-white/10 text-white font-bold py-4 px-6 rounded-xl transition-all flex justify-between items-center group/btn">
            Join the Waitlist
            <svg className="w-5 h-5 text-cyan-500 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
