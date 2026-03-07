'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RCMCalculator = () => {
    // Inputs
    const [monthlyClaims, setMonthlyClaims] = useState(500);
    const [avgBilledAmount, setAvgBilledAmount] = useState(150);
    const [denialRate, setDenialRate] = useState(15);
    const [recoveryPotential, setRecoveryPotential] = useState(65); // Improved recovery % for premium feel

    // Outputs
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);
    const [annualLeakage, setAnnualLeakage] = useState(0);
    const [projectedAnnualRecovery, setProjectedAnnualRecovery] = useState(0);

    useEffect(() => {
        const rev = monthlyClaims * avgBilledAmount;
        const leakage = rev * (denialRate / 100) * 12;
        const recovery = leakage * (recoveryPotential / 100);

        setMonthlyRevenue(rev);
        setAnnualLeakage(leakage);
        setProjectedAnnualRecovery(recovery);
    }, [monthlyClaims, avgBilledAmount, denialRate, recoveryPotential]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(val);
    };

    return (
        <div className="bg-white rounded-[3rem] shadow-[0_60px_120px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left: Configuration Inputs */}
                <div className="p-10 md:p-14 lg:p-20 bg-slate-50/50 backdrop-blur-sm border-r border-slate-100">
                    <div className="mb-14">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-10 h-1 bg-[var(--primary-color)] rounded-full"></span>
                            <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[5px] block">System Data</span>
                        </div>
                        <h3 className="text-4xl font-black text-[var(--secondary-color)] tracking-tight leading-tight">Practice Profile</h3>
                        <p className="text-slate-500 font-medium text-sm mt-4">Adjust the sliders to reflect your current practice metrics for a high-precision ROI analysis.</p>
                    </div>

                    <div className="space-y-16">
                        {/* Monthly Claims */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-[var(--primary-color)] transition-colors">Monthly Claim Volume</label>
                                <motion.span
                                    key={monthlyClaims}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[var(--primary-color)] font-black text-3xl tabular-nums"
                                >
                                    {monthlyClaims.toLocaleString()}
                                </motion.span>
                            </div>
                            <input
                                type="range"
                                min="100"
                                max="10000"
                                step="100"
                                value={monthlyClaims}
                                onChange={(e) => setMonthlyClaims(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>100 Units</span>
                                <span>10,000+ Units</span>
                            </div>
                        </div>

                        {/* Avg Billed Amount */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-[var(--primary-color)] transition-colors">Avg. Revenue per Encounter</label>
                                <motion.span
                                    key={avgBilledAmount}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[var(--primary-color)] font-black text-3xl tabular-nums"
                                >
                                    {formatCurrency(avgBilledAmount)}
                                </motion.span>
                            </div>
                            <input
                                type="range"
                                min="50"
                                max="1000"
                                step="10"
                                value={avgBilledAmount}
                                onChange={(e) => setAvgBilledAmount(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--primary-color)]"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>$50.00</span>
                                <span>$1,000.00</span>
                            </div>
                        </div>

                        {/* Denial Rate */}
                        <div className="group">
                            <div className="flex justify-between items-end mb-6">
                                <label className="text-slate-900 font-black text-xs uppercase tracking-widest group-hover:text-[var(--accent-color)] transition-colors">Current Denial Index (D.I.)</label>
                                <motion.span
                                    key={denialRate}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-[var(--accent-color)] font-black text-3xl tabular-nums"
                                >
                                    {denialRate}%
                                </motion.span>
                            </div>
                            <input
                                type="range"
                                min="1"
                                max="40"
                                step="1"
                                value={denialRate}
                                onChange={(e) => setDenialRate(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[var(--accent-color)]"
                            />
                            <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-black uppercase tracking-tighter">
                                <span>1% (Optimal)</span>
                                <span>40% (Critical Alert)</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-20 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm flex items-center gap-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-[var(--primary-color)]/5 transition-colors"></div>
                        <div className="w-16 h-16 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-2xl flex items-center justify-center flex-shrink-0 border border-[var(--primary-color)]/20 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <div className="relative z-10">
                            <p className="text-[10px] text-slate-400 font-black uppercase tracking-[2px] mb-1">Gross Monthly Revenue</p>
                            <p className="text-3xl font-black text-[var(--secondary-color)] tracking-tighter tabular-nums">{formatCurrency(monthlyRevenue)}</p>
                        </div>
                    </div>
                </div>

                {/* Right: ROI Assessment */}
                <div className="p-10 md:p-14 lg:p-20 bg-[var(--secondary-color)] text-white relative flex flex-col justify-center">
                    {/* Background Decorative Elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-color)]/10 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="mb-14">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="w-10 h-1 bg-[var(--primary-color)] rounded-full"></span>
                                <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[5px] block">Impact Report</span>
                            </div>
                            <h3 className="text-4xl font-black text-white tracking-tight leading-tight">Financial Recovery Potential</h3>
                        </div>

                        <div className="space-y-10">
                            {/* Leakage Assessment */}
                            <motion.div
                                layout
                                className="bg-white/5 backdrop-blur-md rounded-[2.5rem] border border-white/10 p-10 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 21H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2h-3m-6 0V11m0 10l-4-4m4 4l4-4" /></svg>
                                </div>
                                <p className="text-[10px] text-white/50 font-black uppercase tracking-widest mb-4">Baseline Yearly Revenue Leakage</p>
                                <motion.p
                                    key={annualLeakage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-5xl md:text-6xl font-black text-[var(--accent-color)] tracking-tighter tabular-nums"
                                >
                                    {formatCurrency(annualLeakage)}
                                </motion.p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="h-2 flex-grow bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${(denialRate / 40) * 100}%` }}
                                            className="h-full bg-[var(--accent-color)]"
                                        />
                                    </div>
                                    <span className="text-[10px] font-black text-[var(--accent-color)] uppercase tracking-widest whitespace-nowrap">High Exposure</span>
                                </div>
                            </motion.div>

                            {/* Recovery Opportunity */}
                            <motion.div
                                layout
                                className="bg-[var(--primary-color)] rounded-[2.5rem] p-10 shadow-[0_30px_60px_rgba(30,195,195,0.2)] relative overflow-hidden"
                            >
                                <div className="absolute bottom-0 right-0 p-8 opacity-20 rotate-12">
                                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M12 1v22m5-18l-5-5-5 5m10 8l-5 5-5-5" /></svg>
                                </div>
                                <p className="text-[10px] text-white/70 font-black uppercase tracking-widest mb-4">SBN Projected Recovery (65% Target)</p>
                                <motion.p
                                    key={projectedAnnualRecovery}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-5xl md:text-6xl font-black text-white tracking-tighter tabular-nums"
                                >
                                    {formatCurrency(projectedAnnualRecovery)}
                                </motion.p>
                                <div className="mt-10 pt-8 border-t border-white/20">
                                    <button className="btn-premium w-full bg-white text-[var(--secondary-color)] group">
                                        <span className="btn-text-default">Execute Full Audit</span>
                                        <span className="btn-text-hover text-[var(--primary-color)]">Start Analysis</span>
                                    </button>
                                    <p className="text-center mt-6 text-[9px] text-white/50 font-black uppercase tracking-[3px]">
                                        Confidential Consultation Included
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RCMCalculator;
