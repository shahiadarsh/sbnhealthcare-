'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { pricingModels } from '@/data/pricing';

const Pricing = () => {
    return (
        <section className="relative py-32 md:py-48 bg-white overflow-hidden border-t border-slate-100">
            {/* Subtle Tech Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block bg-[var(--secondary-color)]/5 text-[var(--secondary-color)] font-black text-[10px] tracking-[6px] uppercase px-6 py-2 rounded-full mb-6"
                    >
                        Investment Models
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-black text-[var(--secondary-color)] mb-8 tracking-tighter leading-[1.05]">
                        Surgical Pricing Models. <br className="hidden md:block" /> Guaranteed Performance.
                    </h2>
                    <p className="text-slate-500 text-[1.1rem] md:text-[1.25rem] leading-relaxed font-medium tracking-tight max-w-3xl mx-auto">
                        We align our success directly with yours. Our transparent, results-oriented pricing is engineered to eliminate overhead and maximize your bottom line.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {pricingModels.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`group rounded-[2.5rem] overflow-hidden relative text-white transition-all duration-700 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] border border-white/10 ${item.theme === 'red'
                                ? 'bg-gradient-to-br from-[#0B1F33] to-[#06121e] border-t-8 border-t-[var(--accent-color)]'
                                : 'bg-gradient-to-br from-[#0B1F33] to-[#102a43] border-t-8 border-t-[var(--primary-color)]'
                                }`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative background glow */}
                            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-white/10`}></div>

                            <div className="p-12 flex-1 flex flex-col relative z-20">
                                <h3 className="text-2xl font-black mb-6 pb-8 border-b border-white/10 min-h-[100px] flex items-center text-white leading-[1.2] tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-[17px] leading-relaxed text-white/70 mb-10 flex-grow font-medium">
                                    {item.description}
                                </p>
                                <div className="mt-6">
                                    <Link href="/contact-us" className="btn-premium w-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-white group-hover:text-[var(--secondary-color)] transition-all">
                                        <span className="btn-text-default">View Details</span>
                                        <span className="btn-text-hover">Get Quotation</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
