'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactDetails() {
    return (
        <div className="flex flex-col justify-center">
            <div className="max-w-[500px]">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                    viewport={{ once: true }}
                >
                    <div className="space-y-4">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-[var(--primary-color)] font-black text-[10px] tracking-[5px] uppercase block"
                        >
                            Global Reach
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] leading-[1.1] tracking-tight">
                            We're Here to <br /> Support Your Practice.
                        </h2>
                        <p className="text-slate-500 font-medium leading-relaxed">
                            Our dedicated RCM specialists are available across all US time zones to ensure your revenue cycle never stops moving.
                        </p>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-slate-100">
                        {/* Email */}
                        <div className="group flex items-start gap-6">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email Address</h4>
                                <p className="text-lg font-black text-[var(--secondary-color)]">info@sbnhealthcaresolution.com</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group flex items-start gap-6">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone Support</h4>
                                <p className="text-lg font-black text-[var(--secondary-color)]">+1 (805) 426-4609</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="group flex items-start gap-6">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-[var(--primary-color)] group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Headquarters</h4>
                                <p className="text-lg font-bold text-[var(--secondary-color)] leading-snug">
                                    1309 Coffeen Avenue Ste 1200<br />
                                    Sheridan, WY 82801
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
