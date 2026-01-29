import React from 'react';
import { Dropdown } from './Dropdown';
import { CurrencyChart } from './CurrencyChart';

export function ConverterWidget({
  amount,
  setAmount,
  currencyOptions,
  currencyList,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
  handleSwap,
  convertedAmount,
  singleUnitRate,
  showChart,
  setShowChart,
}) {
  return (
    <div className="lg:col-span-7">
      {/* Glass Card Container */}
      <div className="bg-[#0A0A0A]/60 backdrop-blur-2xl rounded-3xl p-1 border border-white/10 shadow-2xl shadow-cyan-900/10">
        <div className="bg-[#0F0F0F]/80 rounded-[22px] p-6 md:p-8 relative z-20 group">
          {/* Decorative lighting effect */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>

          {/* Info Header */}
          <div className="relative flex items-center justify-between mb-8 border-b border-white/5 pb-4 z-10">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v3.268a1 1 0 01-2 0V12.677a7.001 7.001 0 01-11.593-1.554.999.999 0 01.593-1.066z" clipRule="evenodd" />
              </svg>
              Real-time Converter
            </div>
          </div>

          {/* Converter Content */}
          <div className="relative z-10">
            <div className="space-y-3 relative z-30">
              {/* FROM */}
              <div className="relative group/input">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">From</label>
                <div className="flex bg-black/40 border border-white/5 rounded-xl hover:border-cyan-500/30 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="flex-1 bg-transparent text-lg sm:text-2xl md:text-3xl font-light text-white px-2.5 py-4 md:p-5 outline-none w-full placeholder-slate-700 font-sans tracking-tight [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                  <div className="relative border-l border-white/5 p-1 sm:p-2 flex items-center">
                    <Dropdown
                      options={currencyOptions}
                      selected={fromCurrency}
                      onSelect={setFromCurrency}
                      currencyNames={currencyList}
                    />
                  </div>
                </div>
              </div>

              {/* SWAP BUTTON */}
              <div className="relative h-6 flex items-center justify-center z-20 my-2">
                <button
                  onClick={handleSwap}
                  className="bg-[#1a1a1a] border border-white/10 rounded-full p-2 text-cyan-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500 transition-all shadow-xl shadow-black group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </button>
              </div>

              {/* TO */}
              <div className="relative">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">To</label>
                <div className="flex bg-black/40 border border-white/5 rounded-xl hover:border-cyan-500/30 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all">
                  <input
                    type="text"
                    value={convertedAmount}
                    readOnly
                    className="flex-1 bg-transparent text-lg sm:text-2xl md:text-3xl font-light text-cyan-400 px-2.5 py-4 md:p-5 outline-none w-full cursor-default font-sans tracking-tight"
                  />
                  <div className="relative border-l border-white/5 p-1 sm:p-2 flex items-center">
                    <Dropdown
                      options={currencyOptions}
                      selected={toCurrency}
                      onSelect={setToCurrency}
                      currencyNames={currencyList}
                    />
                  </div>
                </div>
              </div>

              {/* Rate Info & Action Section */}
              <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10 transition-all">
                <div className="text-sm">
                  <div className="text-white font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] inline-block animate-pulse"></span>
                    1 {fromCurrency.toUpperCase()} = <span className="text-cyan-300 font-mono">{singleUnitRate}</span> {toCurrency.toUpperCase()}
                  </div>
                  <p className="text-slate-600 text-xs mt-1.5">Mid-market rate • Live updates</p>
                </div>
                <button
                  onClick={() => setShowChart(!showChart)}
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                  {showChart ? 'Hide History' : 'View Rate History'}
                </button>
              </div>

              {/* Expandable Chart Section */}
              {showChart && (
                <div className="mt-8 pt-8 border-t border-white/5 animate-fade-in-down">
                  <CurrencyChart from={fromCurrency} to={toCurrency} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-4">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">✓</span> 150+ Currencies
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">✓</span> Crypto Supported
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">✓</span> Live Rates
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <span className="text-cyan-400">✓</span> Free Forever
        </div>
      </div>
    </div>
  );
}
