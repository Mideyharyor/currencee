import React, { useState, useEffect, useMemo } from 'react';
import { fetchCurrencyList, fetchExchangeRates } from './services/currencyService';
import { CURRENCY_TO_COUNTRY, POPULAR_CURRENCIES, TICKER_CURRENCIES } from './constants';
import { Navigation } from './components/Navigation';
import { MarqueeTicker } from './components/MarqueeTicker';
import { HeroSection } from './components/HeroSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  const [currencyList, setCurrencyList] = useState({});
  const [rates, setRates] = useState({});
  const [tickerRates, setTickerRates] = useState({});
  const [amount, setAmount] = useState('1000');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('eur');
  const [showChart, setShowChart] = useState(false);
  const tickerBase = 'usd';

  const getFlagUrl = (currency) => {
    const countryCode = CURRENCY_TO_COUNTRY[currency?.toLowerCase()];
    if (countryCode) {
      return `https://flagcdn.com/w40/${countryCode}.png`;
    }
    return 'https://via.placeholder.com/40x30?text=$';
  };

  useEffect(() => {
    const loadCurrencies = async () => {
      const list = await fetchCurrencyList();
      setCurrencyList(list);
    };
    loadCurrencies();
  }, []);

  useEffect(() => {
    const loadRates = async () => {
      if (!fromCurrency) return;
      const fetchedRates = await fetchExchangeRates(fromCurrency);
      setRates(fetchedRates);
    };
    loadRates();
  }, [fromCurrency]);

  useEffect(() => {
    const loadTickerRates = async () => {
      const fetchedRates = await fetchExchangeRates(tickerBase);
      setTickerRates(fetchedRates);
    };
    loadTickerRates();
  }, [tickerBase]);

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
    const popular = allKeys.filter((c) => POPULAR_CURRENCIES.includes(c));
    const others = allKeys.filter((c) => !POPULAR_CURRENCIES.includes(c)).sort();
    return [...popular, ...others];
  }, [currencyList]);

  const tickerItems = useMemo(() => {
    return TICKER_CURRENCIES.map((code) => ({
      code,
      name: currencyList[code] || code.toUpperCase(),
      rate: tickerRates[code],
    }));
  }, [currencyList, tickerRates]);

  const formatTickerRate = (rate) => {
    const numericRate = Number(rate);
    if (!Number.isFinite(numericRate)) return '---';
    return numericRate.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#050505] text-white overflow-x-hidden relative selection:bg-cyan-500 selection:text-black">
      {/* Paradigm-inspired Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[500px] bg-cyan-900/20 blur-[120px] rounded-[100%] pointer-events-none opacity-60 z-0"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-blue-600/30 blur-[100px] pointer-events-none z-0"></div>
      
       <Navigation />

      <MarqueeTicker
        tickerItems={tickerItems}
        tickerBase={tickerBase}
        getFlagUrl={getFlagUrl}
        formatTickerRate={formatTickerRate}
      />

      <HeroSection
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

      <FooterSection />
    </div>
  );
}
