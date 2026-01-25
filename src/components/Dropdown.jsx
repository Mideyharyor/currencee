import React, { useState, useRef, useEffect } from 'react';
import { CURRENCY_TO_COUNTRY } from '../constants';

export const Dropdown = ({ options, selected, onSelect, currencyNames, label, compact = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredOptions = options.filter(opt =>
        opt.toUpperCase().includes(search.toUpperCase()) ||
        (currencyNames[opt] && currencyNames[opt].toUpperCase().includes(search.toUpperCase()))
    );

    const getFlagUrl = (currency) => {
        const curr = currency.toLowerCase();
        const countryCode = CURRENCY_TO_COUNTRY[curr];

        if (countryCode) {
            return `https://flagcdn.com/w40/${countryCode}.png`;
        }

        // If not a known fiat currency, try JSDelivr for crypto icons
        return `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/128/color/${curr}.png`;
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 bg-[#111] hover:bg-[#161616] text-white border border-white/10 rounded-full px-4 py-2.5 transition-all font-semibold group focus:ring-1 focus:ring-cyan-500 focus:outline-none"
            >
                <img
                    src={getFlagUrl(selected)}
                    alt={selected}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://via.placeholder.com/40x30?text=$';
                    }}
                    className="w-5 h-5 object-cover rounded-full shadow-sm opacity-100 transition-all"
                />
                <span className="text-lg tracking-wide">{selected.toUpperCase()}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-slate-500 transition-transform group-hover:text-cyan-400 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-50 mt-2 right-0 w-72 bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl shadow-black max-h-96 overflow-hidden flex flex-col animate-fade-in-down ring-1 ring-white/5">
                    <div className="p-3 border-b border-white/5 sticky top-0 bg-[#0A0A0A] z-10">
                        <input
                            type="text"
                            placeholder="Type a currency..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-[#151515] text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-cyan-500 border border-transparent placeholder-slate-600 font-medium"
                        />
                    </div>
                    <div className="overflow-y-auto flex-1 no-scrollbar p-1">
                        {filteredOptions.length > 0 ? filteredOptions.map(currency => (
                            <button
                                key={currency}
                                onClick={() => {
                                    onSelect(currency);
                                    setIsOpen(false);
                                    setSearch('');
                                }}
                                className={`w-full flex items-center gap-4 px-4 py-3 hover:bg-[#151515] transition-colors text-left rounded-xl group ${selected === currency ? 'bg-cyan-500/10 text-cyan-400' : 'text-slate-300'}`}
                            >
                                <img
                                    src={getFlagUrl(currency)}
                                    alt={currency}
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = 'https://via.placeholder.com/40x30?text=$';
                                    }}
                                    className="w-6 h-6 object-cover rounded-full shadow-sm opacity-100 transition-all"
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold text-sm">{currency.toUpperCase()}</span>
                                    <span className="text-[10px] uppercase tracking-wider opacity-50 truncate w-40">{currencyNames[currency]}</span>
                                </div>
                                {selected === currency && (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </button>
                        )) : (
                            <div className="p-4 text-center text-slate-600 text-sm">No currency found</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
