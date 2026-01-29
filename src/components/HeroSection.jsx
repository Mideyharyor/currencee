import React from 'react';
import { ConverterWidget } from './ConverterWidget';
import { ShowcasePanel } from './ShowcasePanel';

export function HeroSection({
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
    <div className="relative z-10 pt-12 lg:pt-20 pb-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center mb-16 relative">
        <div className="flex flex-wrap justify-center gap-3 mb-6 relative">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
            150+ Currencies
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-blue-950/30 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
            Crypto Supported
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Currency exchange <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">reimagined for speed.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Convert 150+ traditional currencies and cryptocurrencies with real-time exchange rates.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          <ConverterWidget
            amount={amount}
            setAmount={setAmount}
            currencyOptions={currencyOptions}
            currencyList={currencyList}
            fromCurrency={fromCurrency}
            setFromCurrency={setFromCurrency}
            toCurrency={toCurrency}
            setToCurrency={setToCurrency}
            handleSwap={handleSwap}
            convertedAmount={convertedAmount}
            singleUnitRate={singleUnitRate}
            showChart={showChart}
            setShowChart={setShowChart}
          />
          <ShowcasePanel />
        </div>
      </div>
    </div>
  );
}
