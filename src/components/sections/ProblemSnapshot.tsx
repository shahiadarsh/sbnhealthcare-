'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

interface PainPoint {
    title: string;
    description: string;
}

interface ProblemSnapshotProps {
    points: PainPoint[];
    title?: string;
    description?: string;
}

const ProblemSnapshot: React.FC<ProblemSnapshotProps> = ({ points, title, description }) => {
    return (
        <div className="py-24 bg-white border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <span className="text-[var(--primary-color)] font-black uppercase text-[10px] tracking-[4px] mb-4 block flex items-center gap-2">
                            <FaExclamationTriangle /> Critical Challenges
                        </span>
                        <h2 className="text-4xl font-black text-[var(--secondary-color)] tracking-tight mb-6">
                            {title || "The Reality of Modern Revenue Cycles"}
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            {description || "Manual workflows and fragmented data often lead to significant revenue leakage. We identify and neutralize these vulnerabilities."}
                        </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-[2rem] bg-[var(--primary-color)]/5 border border-[var(--primary-color)]/10 group hover:bg-[var(--primary-color)]/10 transition-colors"
                            >
                                <h3 className="text-lg font-black text-[var(--secondary-color)] mb-3 uppercase tracking-wide">
                                    {point.title}
                                </h3>
                                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemSnapshot;
