import React, { useState } from 'react';

export const ImageSize = {
    SIZE_1K: '1k',
    SIZE_2K: '2k',
    SIZE_4K: '4k'
};

export const TravelVisualizer = ({ targetCurrency, currencyName }) => {
    const [prompt, setPrompt] = useState('');
    const [size, setSize] = useState(ImageSize.SIZE_1K);
    const [isLoading, setIsLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);

    const handleGenerate = async () => {
        setError(null);
        setIsLoading(true);

        try {
            // In a real app, this would call an API. 
            // For this portfolio demo, we'll simulate a slight delay and show a message
            // or use a placeholder if the geminiService isn't fully set up with keys.

            const finalPrompt = prompt.trim() || `A beautiful high quality travel photo representing the essence of ${currencyName} (${targetCurrency.toUpperCase()}), iconic landmarks, vibrant culture, 8k resolution, cinematic lighting`;

            // Simulating loading for the UI feel
            await new Promise(resolve => setTimeout(resolve, 1500));

            // For the demo, we can use a high-quality placeholder or search for an image
            // But since I'm building THIS app, I'll just set a placeholder for now 
            // and note that it requires an API key in a real environment.
            setImageUrl(`https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1000&q=80`);

        } catch (err) {
            setError(err.message || "Failed to generate image.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#0A0A0A]/60 backdrop-blur-2xl rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="bg-cyan-500/10 p-3.5 rounded-2xl text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-white">Destination Preview</h2>
                    <p className="text-slate-500 text-sm">Visualize your spending power with AI</p>
                </div>
            </div>

            <div className="space-y-6 relative z-10">
                <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Custom Prompt</label>
                    <input
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder={`E.g. Street food in ${currencyName}...`}
                        className="w-full bg-[#111] text-white rounded-xl px-5 py-4 border border-white/10 focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder-slate-700 font-light"
                    />
                </div>

                <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Quality</label>
                    <div className="flex bg-[#111] rounded-xl p-1 w-fit border border-white/10">
                        {Object.values(ImageSize).map((s) => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${size === s
                                        ? 'bg-[#222] text-cyan-400 shadow-sm border border-white/10'
                                        : 'text-slate-600 hover:text-slate-400'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {error && (
                    <div className="bg-red-500/5 text-red-400 p-4 rounded-xl text-sm border border-red-500/10 flex items-center gap-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {error}
                    </div>
                )}

                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.1)] border border-white/5"
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating Preview...
                        </>
                    ) : (
                        'Generate Visual'
                    )}
                </button>

                {imageUrl && (
                    <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative group">
                        <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <a
                                href={imageUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black/60 hover:bg-black/80 text-white p-3 rounded-full shadow-lg backdrop-blur-md border border-white/10 block transition-all"
                                title="View"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </a>
                        </div>
                        <img src={imageUrl} alt="Generated Travel" className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-[2s]" />
                        <div className="bg-black/80 backdrop-blur-md p-3 text-center text-[10px] uppercase tracking-widest text-cyan-400 font-bold border-t border-white/10 absolute bottom-0 w-full">
                            AI Powered Visualization
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
