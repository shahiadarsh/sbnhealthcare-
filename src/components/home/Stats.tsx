'use client';

import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { statsData } from '@/data/home';

const Counter = ({ value }: { value: string }) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    // Parse number and suffix (matched against starting digits)
    const numericValue = parseInt(value, 10);
    const suffix = value.replace(numericValue.toString(), '');

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { stiffness: 60, damping: 15 });

    React.useEffect(() => {
        if (inView) {
            motionValue.set(numericValue);
        }
    }, [inView, motionValue, numericValue]);

    React.useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                // Formatting: avoid decimals during counting
                ref.current.textContent = `${Math.floor(latest)}${suffix}`;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} className="text-[3rem] font-extrabold mb-2 text-[var(--secondary-color)]">{0}{suffix}</span>;
};

const Stats = () => {
    const statContext: Record<string, string> = {
        "Revenue Improved": "Average lift for our client network",
        "Costs Reduced": "Operational savings via automation",
        "Patient Experience Transformed": "Patient satisfaction score increase",
        "Years of Experience": "Dedicated healthcare expertise"
    };

    return (
        <section className="relative py-24 md:py-40 bg-white overflow-hidden border-t border-slate-100">
            {/* Subtle Tech Pattern */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block bg-[var(--primary-color)]/5 text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[6px] px-6 py-2 rounded-full mb-6"
                    >
                        Network Performance
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tighter leading-tight mb-8">
                        Data-driven outcomes that <br className="hidden md:block" /> define industry leadership.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white p-12 rounded-[3rem] border border-slate-100 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-3 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Decorative Corner Element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary-color)]/5 rounded-bl-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-150 duration-1000"></div>

                            <div className="relative z-10">
                                <div className="mb-0 flex items-baseline gap-1">
                                    <span className="text-[3.5rem] font-black tracking-tighter text-[var(--secondary-color)] leading-none">
                                        <Counter value={stat.value} />
                                    </span>
                                </div>
                                <h3 className="text-[11px] font-black text-[var(--secondary-color)] mb-4 uppercase tracking-[3px] mt-6">
                                    {stat.label}
                                </h3>
                                <div className="w-8 h-1 bg-[var(--primary-color)] mb-6 rounded-full transition-all group-hover:w-16 duration-700"></div>
                                <p className="text-[14px] text-slate-500 font-medium leading-relaxed">
                                    {statContext[stat.label] || "Accelerated financial results through intelligent automation."}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
