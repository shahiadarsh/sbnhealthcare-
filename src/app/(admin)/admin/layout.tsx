'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/AdminAuthProvider';
import { FaTachometerAlt, FaBlog, FaEnvelope, FaSearch, FaSignOutAlt, FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { logout, loading, admin } = useAdminAuth();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    
    // Auth Guard
    const hasToken = typeof window !== 'undefined' && localStorage.getItem('adminToken');
    
    if (pathname === '/admin') return <>{children}</>;

    if (loading && !admin && hasToken) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0A0F1D]">
                <div className="flex flex-col items-center gap-6">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-[var(--primary-color)] border-t-transparent rounded-full animate-spin"></div>
                        <div className="absolute inset-4 border-4 border-white/10 border-b-transparent rounded-full animate-spin [animation-duration:2s]"></div>
                    </div>
                    <div className="text-center">
                        <p className="text-white font-black text-xs uppercase tracking-[4px]">Nexus System</p>
                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-2">Authenticating Profile...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!admin && !loading) return null;

    const navItems = [
        { name: 'Dashboard', href: '/admin/dashboard', icon: <FaTachometerAlt /> },
        { name: 'Blogs', href: '/admin/blogs', icon: <FaBlog /> },
        { name: 'Inquiries', href: '/admin/contacts', icon: <FaEnvelope /> },
        { name: 'SEO Engine', href: '/admin/seo', icon: <FaSearch /> },
    ];

    return (
        <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-72 min-w-[288px] flex-shrink-0 bg-[#080C14] text-white flex-col h-full relative z-40 shadow-[20px_0_80px_rgba(0,0,0,0.4)] border-r border-white/5">
                {/* Brand Identity */}
                <div className="pt-16 pb-12 px-8">
                    <div className="flex items-center gap-4 group cursor-default">
                        <div className="w-12 h-12 relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(var(--primary-color-rgb),0.1)] border border-white/10 group-hover:rotate-6 transition-all duration-700">
                            <Image src="/img/logo.jpg" alt="Logo" fill className="object-cover scale-110" />
                        </div>
                        <div className="min-w-0">
                            <h2 className="text-lg font-black text-white tracking-[4px] leading-none uppercase -mb-0.5">Nexus</h2>
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-[4px] mt-1.5 opacity-60">Control Panel</p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-grow px-5 py-2 overflow-y-auto custom-scrollbar space-y-8">
                    <div>
                        <p className="text-[9px] font-black text-slate-700 uppercase tracking-[4px] mb-6 px-4">Core Application</p>
                        <ul className="space-y-2">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black transition-all duration-500 relative group ${isActive
                                                ? 'text-white'
                                                : 'text-slate-500 hover:text-slate-300'
                                                }`}
                                        >
                                            {isActive && (
                                                <motion.div 
                                                    layoutId="activeGlow"
                                                    className="absolute inset-0 bg-white/[0.04] border border-white/[0.08] rounded-2xl z-0"
                                                    initial={false}
                                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                                />
                                            )}
                                            {isActive && (
                                                <motion.div 
                                                    layoutId="indicator"
                                                    className="absolute left-0 w-1 h-6 bg-[var(--primary-color)] rounded-r-full z-10"
                                                    initial={false}
                                                />
                                            )}
                                            <span className={`relative z-10 text-[18px] transition-all duration-500 ${isActive ? 'text-[var(--primary-color)] scale-110 shadow-[0_0_15px_rgba(var(--primary-color-rgb),0.5)]' : 'group-hover:text-slate-300'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="relative z-10 tracking-[2px] uppercase">{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <p className="text-[9px] font-black text-slate-700 uppercase tracking-[4px] mb-6 px-4">System Identity</p>
                        <div className="px-6 py-5 bg-white/[0.02] rounded-2xl border border-white/[0.04] cursor-default mx-2">
                            <p className="text-[9px] font-black text-emerald-500 uppercase tracking-[2px] flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" /> 
                                Node Connection: Active
                            </p>
                        </div>
                    </div>
                </nav>

                {/* Footer Section */}
                <div className="p-6 mt-auto">
                    <div className="mb-6 p-5 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.08] relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[var(--primary-color)]/10 rounded-full blur-2xl group-hover:bg-[var(--primary-color)]/20 transition-all duration-1000" />
                        
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-2xl bg-[#1A1F2E] border border-white/10 flex items-center justify-center text-slate-400 group-hover:border-[var(--primary-color)]/30 transition-all">
                                    <FaUserCircle size={22} className="group-hover:text-white transition-colors" />
                                </div>
                                <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-[#080C14] rounded-full flex items-center justify-center border-2 border-[#080C14]">
                                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]" />
                                </span>
                            </div>
                            <div className="min-w-0">
                                <p className="text-[11px] font-black text-white truncate uppercase tracking-widest">{admin?.user?.split('@')[0] || 'System'}</p>
                                <p className="text-[8px] text-slate-600 font-black uppercase tracking-[2px] mt-1">Super User</p>
                            </div>
                        </div>
                    </div>
                    
                    <button
                        onClick={logout}
                        className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl text-[10px] font-black text-slate-500 hover:text-white hover:bg-red-500 transition-all duration-700 group border border-white/[0.03] hover:border-red-400 w-full uppercase tracking-[3px]"
                    >
                        <FaSignOutAlt className="text-sm group-hover:-translate-x-1 transition-transform" />
                        <span>Terminate</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-20 bg-white/70 backdrop-blur-2xl border-b border-slate-200/50 z-50 px-6 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 relative rounded-xl overflow-hidden shadow-lg border border-slate-200">
                        <Image src="/img/logo.jpg" alt="Logo" fill className="object-cover" />
                    </div>
                    <div>
                        <h2 className="text-[13px] font-black text-slate-900 uppercase tracking-[3px] leading-none">Nexus</h2>
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-[2px] mt-1">Admin Panel</p>
                    </div>
                </div>
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-slate-900 text-white shadow-xl active:scale-90 transition-all"
                >
                    {isMobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
                        />
                        <motion.aside 
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-[#080C14] text-white z-[70] lg:hidden flex flex-col shadow-[20px_0_60px_rgba(0,0,0,0.5)] border-r border-white/5"
                        >
                            <div className="p-8 border-b border-white/5">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 relative rounded-xl overflow-hidden border border-white/10">
                                        <Image src="/img/logo.jpg" alt="Logo" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h2 className="text-base font-black text-white tracking-[3px] leading-none uppercase">Nexus</h2>
                                        <p className="text-[9px] font-black text-[var(--primary-color)] uppercase tracking-[2px] mt-1">Navigation System</p>
                                    </div>
                                </div>
                            </div>
                            
                            <nav className="flex-grow mt-10 px-6">
                                <ul className="space-y-3">
                                    {navItems.map((item) => {
                                        const isActive = pathname === item.href;
                                        return (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`flex items-center gap-4 px-6 py-5 rounded-2xl text-[12px] font-black transition-all relative overflow-hidden ${isActive
                                                        ? 'bg-white/[0.05] text-white border border-white/[0.08]'
                                                        : 'text-slate-500 hover:text-white'
                                                        }`}
                                                >
                                                    {isActive && (
                                                        <div className="absolute left-0 w-1 h-6 bg-[var(--primary-color)] rounded-r-full" />
                                                    )}
                                                    <span className={`text-[20px] ${isActive ? 'text-[var(--primary-color)]' : 'text-slate-700'}`}>{item.icon}</span>
                                                    <span className="uppercase tracking-[2px]">{item.name}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            <div className="p-8 border-t border-white/5 space-y-6">
                                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                    <div className="w-9 h-9 rounded-xl bg-[#1A1F2E] flex items-center justify-center text-slate-500">
                                        <FaUserCircle size={20} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] font-black text-white uppercase tracking-widest">{admin?.user?.split('@')[0] || 'User'}</p>
                                        <p className="text-[8px] text-slate-600 font-bold uppercase tracking-[2px] mt-0.5">Admin Access</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => { logout(); setIsMobileMenuOpen(false); }}
                                    className="flex items-center justify-center gap-4 px-6 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[3px] text-slate-400 hover:text-white hover:bg-red-500 transition-all border border-white/[0.03] w-full"
                                >
                                    <FaSignOutAlt />
                                    Log Out Session
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="flex-grow overflow-y-auto bg-slate-50 pt-16 lg:pt-0 custom-scrollbar">
                <div className="max-w-[1600px] mx-auto p-4 lg:p-10">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminAuthProvider>
            <DashboardLayoutContent>{children}</DashboardLayoutContent>
        </AdminAuthProvider>
    );
}
