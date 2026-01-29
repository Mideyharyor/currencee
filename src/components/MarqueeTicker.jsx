import React from 'react';

export function MarqueeTicker({ tickerItems, tickerBase, getFlagUrl, formatTickerRate }) {
  return (
    <div className="relative z-40 border-y border-white/5 bg-[#060606]/80 backdrop-blur-md">

      <div className="ticker border-t border-white/5">
        <div className="ticker-track">
          <div className="ticker-group">
            {tickerItems.map((item) => (
              <div key={`ticker-${item.code}`} className="flex items-center gap-3">
                <img
                  src={getFlagUrl(item.code)}
                  alt={`${item.code.toUpperCase()} flag`}
                  className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10"
                />
                <span className="text-sm font-semibold text-white">{item.code.toUpperCase()}</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider hidden sm:inline">{item.name}</span>
                <span className="text-sm text-cyan-300 font-mono">
                  1 {tickerBase.toUpperCase()} = {formatTickerRate(item.rate)}
                </span>
              </div>
            ))}
          </div>
          <div className="ticker-group" aria-hidden="true">
            {tickerItems.map((item) => (
              <div key={`ticker-dup-${item.code}`} className="flex items-center gap-3">
                <img
                  src={getFlagUrl(item.code)}
                  alt=""
                  className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10"
                />
                <span className="text-sm font-semibold text-white">{item.code.toUpperCase()}</span>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider hidden sm:inline">{item.name}</span>
                <span className="text-sm text-cyan-300 font-mono">
                  1 {tickerBase.toUpperCase()} = {formatTickerRate(item.rate)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
