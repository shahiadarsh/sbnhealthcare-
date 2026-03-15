'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { loginAdmin } from '@/store/slices/authSlice';
import { RootState, AppDispatch } from '@/store';
import { motion } from 'framer-motion';

export default function AdminLoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await dispatch(loginAdmin({ email, password }));
        if (loginAdmin.fulfilled.match(result)) {
            router.push('/admin/dashboard');
        }
    };

    return (
        <div className="min-h-screen bg-[#070B14] flex items-center justify-center relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--primary-color)]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-50" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#070B14] [background:radial-gradient(circle_at_center,_#0D1424_0%,_#070B14_100%)] opacity-50" />
            
            <div className="max-w-[440px] w-full relative z-10 px-4">
                <div className="bg-[#0D1424] border border-white/5 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-3xl overflow-hidden">
                    {/* Header Banner */}
                    <div className="h-1.5 w-full bg-gradient-to-r from-[var(--primary-color)] via-[#4F46E5] to-[var(--primary-color)]" />
                    
                    <div className="p-6 lg:p-8">
                        {/* Internal Branding */}
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-12 h-12 relative mb-3 grayscale brightness-[1.5] group hover:grayscale-0 transition-all duration-700">
                                <img src="/img/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
                            </div>
                            <div className="text-center">
                                <h1 className="text-white text-base font-black tracking-[4px] uppercase mb-1">Admin Login</h1>
                                <p className="text-slate-500 font-bold text-[8px] uppercase tracking-[3px]">SBN Healthcare</p>
                            </div>
                        </div>

                        {error && (
                            <motion.div 
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-red-500/10 border border-red-500/20 px-6 py-4 mb-8 text-red-400 text-[11px] font-black uppercase tracking-widest text-center rounded-lg"
                            >
                                Security Alert: {error}
                            </motion.div>
                        )}

                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <input
                                        type="email"
                                        required
                                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 rounded-xl text-[13px] text-white placeholder-slate-800 focus:outline-none focus:border-[var(--primary-color)]/50 focus:bg-white/[0.04] transition-all font-medium"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[9px] font-black text-slate-500 uppercase tracking-widest ml-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type="password"
                                        required
                                        className="w-full bg-white/[0.02] border border-white/10 px-4 py-3 rounded-xl text-[13px] text-white placeholder-slate-800 focus:outline-none focus:border-[var(--primary-color)]/50 focus:bg-white/[0.04] transition-all font-medium"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="pt-1">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-black font-black py-3.5 rounded-xl text-[10px] uppercase tracking-[4px] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-500 disabled:opacity-20 relative overflow-hidden group shadow-xl"
                                >
                                    <span className="relative z-10">{loading ? 'Verifying...' : 'Login'}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 pt-6 border-t border-white/[0.03] text-center">
                            <p className="text-[8px] text-slate-700 uppercase tracking-[2px]">Secured Access SBN Healthcare</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
