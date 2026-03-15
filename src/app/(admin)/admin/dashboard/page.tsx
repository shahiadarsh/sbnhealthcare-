'use client';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBlog, FaEnvelope, FaEye, FaUsers } from 'react-icons/fa';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs } from '@/store/slices/blogSlice';
import { fetchContacts } from '@/store/slices/contactSlice';

import { motion } from 'framer-motion';

export default function DashboardOverview() {
    const { blogs, loading: blogsLoading } = useSelector((state: RootState) => state.blogs);
    const { contacts, loading: contactsLoading } = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchBlogs());
        dispatch(fetchContacts());
    }, [dispatch]);

    const totalBlogs = blogs.length;
    const totalContacts = contacts.length;
    const newContacts = contacts.filter((c: any) => c.status === 'New').length;

    const loading = blogsLoading || contactsLoading;

    const cards = [
        { name: 'Repository Content', value: totalBlogs, label: 'Published Blogs', icon: <FaBlog />, trend: '+4.2%', color: 'from-blue-600 to-indigo-600' },
        { name: 'Total Inquiries', value: totalContacts, label: 'Patient Leads', icon: <FaEnvelope />, trend: '+12.5%', color: 'from-emerald-600 to-teal-600' },
        { name: 'Hot Leads', value: newContacts, label: 'Awaiting Action', icon: <FaEye />, trend: 'Urgent', color: 'from-orange-600 to-rose-600' },
        { name: 'Active Sessions', value: 1, label: 'System Admins', icon: <FaUsers />, trend: 'Stable', color: 'from-slate-700 to-slate-900' },
    ];

    if (loading) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 border-4 border-slate-200 border-t-[var(--primary-color)] rounded-full animate-spin" />
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Mapping Domain Data...</p>
            </div>
        );
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
        >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 rounded-xl mb-4">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">System Online</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">Dashboard</h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">SBN Healthcare Management Overview</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Standard Time (IST)</p>
                    <p className="text-xl font-black text-slate-900">{new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
            </div>

            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={card.name} 
                        className="bg-white group cursor-pointer border border-slate-200 rounded-[2rem] overflow-hidden flex flex-col hover:border-slate-400 transition-all duration-300 shadow-sm hover:shadow-xl"
                    >
                        <div className={`h-1 w-full bg-gradient-to-r ${card.color}`} />
                        <div className="p-7">
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-slate-50 border border-slate-100 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                                    {card.icon}
                                </div>
                                <span className={`text-[9px] font-black tracking-widest px-2.5 py-1 rounded-xl uppercase ${card.trend.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-500'}`}>
                                    {card.trend}
                                </span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2 leading-none">{card.name}</p>
                                <h3 className="text-4xl font-black text-slate-900 leading-none mb-3">{card.value}</h3>
                                <p className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{card.label}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Detailed Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-sm">
                    <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
                        <h3 className="text-[13px] font-black text-slate-900 uppercase tracking-[3px]">Recent Activity</h3>
                        <button className="text-[10px] font-black text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors">View All</button>
                    </div>
                    <div className="p-10 text-center">
                        <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-100">
                            <FaEye className="text-slate-200 text-2xl" />
                        </div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-[2px] italic">No recent activity detected...</p>
                    </div>
                </div>

                <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                        <FaUsers size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-[10px] font-black uppercase tracking-[4px] text-[var(--primary-color)] mb-4">Security Notice</h3>
                        <p className="text-sm font-bold leading-relaxed mb-8">Access to this panel is restricted to SBN Healthcare Executive Admins. All telemetry is being logged.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">ENCRYPTION: AES-256</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                <span className="text-[10px] font-black tracking-widest uppercase text-slate-400">STATUS: AUDITED</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-6 border-t border-white/5 relative z-10">
                        <p className="text-[9px] font-bold text-slate-500 uppercase tracking-[2px]">Nexus Console v4.2.0</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
