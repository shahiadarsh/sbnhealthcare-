'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaExpand } from 'react-icons/fa';

const OfficeOperations = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const togglePlay = () => {
        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleFullscreen = () => {
        if (videoRef.current) {
            videoRef.current.requestFullscreen();
        }
    };

    return (
        <section className="py-24 md:py-32 bg-gradient-to-b from-[#0B1F33] to-[#071624] overflow-hidden relative border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block bg-white/5 border border-white/10 text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[6px] mb-6 px-6 py-2 rounded-full backdrop-blur-md">
                        Behind The Scenes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-8 leading-tight">
                        Sovereign Operations Center
                    </h2>
                    <p className="text-lg text-slate-300 font-medium max-w-[750px] mx-auto leading-relaxed">
                        A look inside our state-of-the-art infrastructure where precision meets performance. Our expert analysts work around the clock to ensure your revenue cycles remain friction-less.
                    </p>
                </div>

                {/* Video Player */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.6)] border border-white/10 group">
                        <video
                            ref={videoRef}
                            src="/img/workflow.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full aspect-video object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                        {/* Controls */}
                        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-6">
                                <button
                                    onClick={togglePlay}
                                    className="w-14 h-14 bg-white/10 backdrop-blur-xl hover:bg-[var(--primary-color)] text-white rounded-2xl flex items-center justify-center border border-white/20 transition-all duration-300"
                                >
                                    {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} className="ml-0.5" />}
                                </button>
                                <span className="text-white text-[11px] font-black uppercase tracking-[3px] opacity-80">
                                    SBN Global Logistics Center
                                </span>
                            </div>
                            <button
                                onClick={handleFullscreen}
                                className="w-12 h-12 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white rounded-2xl flex items-center justify-center border border-white/20 transition-all duration-300"
                            >
                                <FaExpand size={16} />
                            </button>
                        </div>

                        {/* SBN Watermark */}
                        <div className="absolute top-8 left-8 pointer-events-none">
                            <span className="text-[10px] font-black text-white/40 uppercase tracking-[4px]">SBN Enterprise System</span>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Below Video */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-4xl mx-auto text-center">
                    {[
                        { value: '200+', label: 'Billing Specialists' },
                        { value: '24/7/365', label: 'Operations Coverage' },
                        { value: '11+ Yrs', label: 'Market Leadership' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="relative"
                        >
                            <div className="text-4xl md:text-5xl font-black text-[var(--accent-color)] tracking-tighter mb-2">{stat.value}</div>
                            <div className="text-slate-400 font-black uppercase text-[10px] tracking-[4px]">{stat.label}</div>
                            {i < 2 && <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-px h-12 bg-white/10"></div>}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfficeOperations;
