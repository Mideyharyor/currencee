import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { fetchHistoricalRates } from '../services/currencyService';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export function CurrencyChart({ from, to }) {
    const [chartData, setChartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadHistoricalData = async () => {
            setIsLoading(true);
            const data = await fetchHistoricalRates(from, to);

            if (data && data.length > 0) {
                setChartData({
                    labels: data.map(d => {
                        const date = new Date(d.date);
                        return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
                    }),
                    datasets: [
                        {
                            label: `${from.toUpperCase()} to ${to.toUpperCase()}`,
                            data: data.map(d => d.rate),
                            fill: true,
                            borderColor: '#22d3ee',
                            backgroundColor: 'rgba(34, 211, 238, 0.1)',
                            tension: 0.4,
                            pointRadius: 4,
                            pointBackgroundColor: '#22d3ee',
                            borderWidth: 2,
                        },
                    ],
                });
            }
            setIsLoading(false);
        };

        loadHistoricalData();
    }, [from, to]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#0f0f0f',
                titleColor: '#94a3b8',
                bodyColor: '#fff',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        return `Rate: ${context.parsed.y.toFixed(4)}`;
                    }
                }
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    drawBorder: false,
                },
                ticks: {
                    color: '#64748b',
                    font: {
                        size: 10,
                    },
                },
            },
        },
    };

    if (isLoading) {
        return (
            <div className="h-64 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <svg className="animate-spin h-8 w-8 text-cyan-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm text-slate-500 font-medium tracking-widest uppercase">Fetching Historical Data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <div className="flex justify-between items-end">
                <div>
                    <h3 className="text-white font-bold text-lg mb-1">{from.toUpperCase()} to {to.toUpperCase()} Trend</h3>
                    <p className="text-slate-500 text-xs">Past 7 days market activity</p>
                </div>
                <div className="text-right">
                    <div className="text-cyan-400 font-bold text-sm">Live Updates</div>
                    <div className="text-slate-600 text-[10px] uppercase tracking-wider">Mid-market rate</div>
                </div>
            </div>

            <div className="h-64 w-full bg-black/20 rounded-2xl p-4 border border-white/5">
                {chartData ? (
                    <Line options={options} data={chartData} />
                ) : (
                    <div className="h-full flex items-center justify-center text-slate-600 text-sm">
                        No data available for this pair
                    </div>
                )}
            </div>
        </div>
    );
}
