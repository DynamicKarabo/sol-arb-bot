import React from 'react';
import DarkModeToggle from '@/components/DarkModeToggle';

function App() {
    return (
        <div className="min-h-screen p-8 dark:bg-slate-900">
            <header className="flex justify-between items-center mb-12">
                <div className="logo">SolArbBot</div>
                <div className="flex gap-4">
                    <DarkModeToggle />
                </div>
            </header>

            <main className="max-w-4xl mx-auto">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                    <h1 className="text-3xl font-bold mb-4 dark:text-white">Dashboard</h1>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Welcome to the Solana Arbitrage Bot Control Panel.
                        Monitor active strategies and performance in real-time.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                                <h3 className="font-semibold mb-2 dark:text-white">Metric {i}</h3>
                                <div className="text-2xl font-bold text-[#7C3AED]">Running</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
