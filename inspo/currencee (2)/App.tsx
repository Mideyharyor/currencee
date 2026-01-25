import React, { useState, useEffect, useMemo } from 'react';
import { fetchCurrencyList, fetchExchangeRates } from './services/currencyService';
import { CurrencyMap, Rates } from './types';
import { POPULAR_CURRENCIES } from './constants';
import { Dropdown } from './components/Dropdown';
import { TravelVisualizer } from './components/TravelVisualizer';

export function App() {
  const [currencyList, setCurrencyList] = useState<CurrencyMap>({});
  const [rates, setRates] = useState<Rates>({});
  const [amount, setAmount] = useState<string>('1000');
  const [fromCurrency, setFromCurrency] = useState<string>('gbp');
  const [toCurrency, setToCurrency] = useState<string>('eur');
  
  // Load initial currency list
  useEffect(() => {
    const loadCurrencies = async () => {
      const list = await fetchCurrencyList();
      setCurrencyList(list);
    };
    loadCurrencies();
  }, []);

  // Fetch rates when 'fromCurrency' changes
  useEffect(() => {
    const loadRates = async () => {
      if (!fromCurrency) return;
      const fetchedRates = await fetchExchangeRates(fromCurrency);
      setRates(fetchedRates);
    };
    loadRates();
  }, [fromCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const convertedAmount = useMemo(() => {
    if (!amount || isNaN(parseFloat(amount)) || !rates[toCurrency]) return '---';
    const val = parseFloat(amount) * rates[toCurrency];
    return val.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }, [amount, rates, toCurrency]);

  const singleUnitRate = useMemo(() => {
     if (!rates[toCurrency]) return '...';
     return rates[toCurrency].toFixed(5);
  }, [rates, toCurrency]);

  const currencyOptions = useMemo(() => {
    const allKeys = Object.keys(currencyList);
    const popular = allKeys.filter(c => POPULAR_CURRENCIES.includes(c));
    const others = allKeys.filter(c => !POPULAR_CURRENCIES.includes(c)).sort();
    return [...popular, ...others];
  }, [currencyList]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#050505] text-white overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      
      {/* Paradigm-inspired Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-cyan-900/20 blur-[120px] rounded-[100%] pointer-events-none opacity-60 z-0"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-600/30 blur-[100px] pointer-events-none z-0"></div>
      
      {/* Navigation */}
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
            <button className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Log in</button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-5 py-2 rounded-full text-sm font-bold transition-all backdrop-blur-md hover:border-cyan-500/50">Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-12 lg:pt-20 pb-32 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto text-center mb-16 relative">
             <div className="inline-block mb-4 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Next Gen Finance
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
                Currency exchange <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">reimagined for speed.</span>
             </h1>
             <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
                Experience the world's most advanced currency infrastructure. Real-time rates, zero latency, and AI-powered insights.
             </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
              
              {/* Left Column: Converter Widget */}
              <div className="lg:col-span-7">
                  {/* Glass Card Container */}
                  <div className="bg-[#0A0A0A]/60 backdrop-blur-2xl rounded-3xl p-1 border border-white/10 shadow-2xl shadow-cyan-900/10">
                      <div className="bg-[#0F0F0F]/80 rounded-[22px] p-6 md:p-8 relative overflow-hidden group">
                            {/* Decorative lighting effect */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>

                            {/* Tab Switcher */}
                            <div className="relative flex gap-8 mb-8 border-b border-white/5 pb-1 z-10">
                                <button className="text-cyan-400 border-b-2 border-cyan-500 pb-3 font-bold text-sm flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v3.268a1 1 0 01-2 0V12.677a7.001 7.001 0 01-11.593-1.554.999.999 0 01.593-1.066z" clipRule="evenodd" />
                                    </svg>
                                    Convert
                                </button>
                                <button className="text-slate-500 hover:text-slate-300 pb-3 font-bold text-sm flex items-center gap-2 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    Charts
                                </button>
                            </div>

                            {/* Input Area */}
                            <div className="space-y-3 relative z-10">
                                {/* FROM */}
                                <div className="relative group/input">
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">You send</label>
                                    <div className="flex bg-black/40 border border-white/5 rounded-xl hover:border-cyan-500/30 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all">
                                        <input 
                                            type="number" 
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="flex-1 bg-transparent text-3xl font-light text-white p-5 outline-none w-full placeholder-slate-700 font-sans tracking-tight"
                                        />
                                        <div className="border-l border-white/5 p-2 flex items-center">
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
                                <div className="absolute left-8 top-[48%] -translate-y-1/2 z-20 hidden sm:block">
                                    {/* Decorative line */}
                                </div>
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
                                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Recipient gets</label>
                                    <div className="flex bg-black/40 border border-white/5 rounded-xl hover:border-cyan-500/30 focus-within:border-cyan-500 focus-within:ring-1 focus-within:ring-cyan-500/20 transition-all">
                                        <input 
                                            type="text" 
                                            value={convertedAmount}
                                            readOnly
                                            className="flex-1 bg-transparent text-3xl font-light text-cyan-400 p-5 outline-none w-full cursor-default font-sans tracking-tight"
                                        />
                                        <div className="border-l border-white/5 p-2 flex items-center">
                                             <Dropdown 
                                                options={currencyOptions} 
                                                selected={toCurrency} 
                                                onSelect={setToCurrency}
                                                currencyNames={currencyList}
                                             />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rate Info */}
                            <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10">
                                <div className="text-sm">
                                    <p className="text-white font-medium flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)] inline-block animate-pulse"></span>
                                        1 {fromCurrency.toUpperCase()} = <span className="text-cyan-300 font-mono">{singleUnitRate}</span> {toCurrency.toUpperCase()}
                                    </p>
                                    <p className="text-slate-600 text-xs mt-1.5">Mid-market rate • Live updates</p>
                                </div>
                                <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                                    Track Currency
                                </button>
                            </div>
                      </div>
                  </div>
                  
                  {/* Travel Visualizer Integration */}
                  <div className="mt-8">
                      <TravelVisualizer targetCurrency={toCurrency} currencyName={currencyList[toCurrency]} />
                  </div>
              </div>

              {/* Right Column: Mobile Screenshot & Marketing */}
              <div className="lg:col-span-5 space-y-8 lg:mt-0">
                 
                 {/* CSS Mobile Phone Mockup - Deep Tech Style */}
                 <div className="relative mx-auto border-[#1a1a1a] bg-[#050505] border-[10px] rounded-[3rem] h-[640px] w-[320px] shadow-2xl shadow-cyan-900/20 flex flex-col overflow-hidden ring-1 ring-white/10 transform hover:scale-[1.01] transition-transform duration-700 animate-float">
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
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">You Send</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                                         <span className="text-xl font-light text-white">1,000</span>
                                         <div className="flex items-center gap-2 bg-[#222] px-2 py-1 rounded-lg">
                                             <img src="https://flagcdn.com/w40/gb.png" className="w-4 h-4 rounded-full object-cover" />
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
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Recipient Gets</span>
                                    </div>
                                    <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex justify-between items-center">
                                         <span className="text-xl font-light text-cyan-400">1,154.20</span>
                                         <div className="flex items-center gap-2 bg-[#222] px-2 py-1 rounded-lg">
                                             <img src="https://flagcdn.com/w40/eu.png" className="w-4 h-4 rounded-full object-cover" />
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
                                    { code: 'AUD', name: 'Australian Dollar', val: '1.92', change: '+0.01%' }
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
          </div>
      </div>
    </div>
  );
}