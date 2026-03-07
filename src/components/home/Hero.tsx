'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroData } from '@/data/home';

const Hero = () => {
    return (
        <section className="hero-enterprise-bg min-h-screen py-[120px] lg:py-0 flex items-center overflow-hidden border-b border-white/5">
            {/* Layer 2: Subtle Motion Video */}
            <video
                src="/img/v1.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-[0.15] pointer-events-none z-0"
            />

            {/* Layer 1.5: Radial Highlight */}
            <div className="hero-radial-glow"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
                    {/* Layer 4: Content (Left) */}
                    <div className="text-center lg:text-left pt-10 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[4px] mb-8 px-5 py-2 rounded-full backdrop-blur-md"
                        >
                            <span className="w-1.5 h-1.5 bg-[var(--primary-color)] rounded-full animate-pulse"></span>
                            {heroData.subheadline}
                        </motion.div>

                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-[-0.03em]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Next-Generation <br className="hidden xl:block" />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">RCM Infrastructure</span> <br />
                            <span className="text-[var(--primary-color)]">for Modern Practices</span>
                        </motion.h1>

                        <motion.p
                            className="text-[1.1rem] md:text-[1.3rem] text-white/70 mb-12 max-w-[600px] mx-auto lg:mx-0 leading-relaxed font-medium"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            Unified eligibility, billing, denial management, and analytics —
                            engineered to accelerate cash flow and eliminate administrative friction.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <div className="flex flex-col gap-4 items-center lg:items-start">
                                <Link href="/contact-us" className="btn-gold group no-underline">
                                    Analyze Solution
                                </Link>
                                <div className="trust-indicator">
                                    <span>HIPAA Compliant</span>
                                    <span>98.5% Clean Claims</span>
                                    <span>US-Based</span>
                                </div>
                            </div>

                            <Link href="/services" className="text-white/60 hover:text-white font-black text-[11px] uppercase tracking-[3px] transition-colors no-underline flex items-center gap-2 group/link border-b border-transparent hover:border-white/20 pb-1">
                                Explore Platform
                                <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Layer 3: Platform Visual Anchor (Right) */}
                    <motion.div
                        className="relative lg:block"
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="relative group">
                            {/* Glow effect behind dashboard */}
                            <div className="absolute inset-0 bg-[var(--primary-color)]/20 rounded-[3rem] blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity duration-1000 -z-10"></div>

                            <img
                                src="/img/dashboard-mockup.png"
                                alt="SBN RCM Dashboard"
                                className="w-full h-auto max-w-[850px] mx-auto float-animation drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 rounded-[2.5rem]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3 opacity-20"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
