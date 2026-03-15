import React from 'react';
import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import RCMCalculator from '@/components/tools/RCMCalculator';
import { getDynamicMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('rcm-calculator');
    return {
        title: dynamic?.title || 'RCM Calculator - SBN Healthcare Solution',
        description: dynamic?.description || 'Calculate your potential savings and revenue increase with our RCM tools.',
    };
}

export default function RCMCalculatorPage() {
    return (
        <main className="bg-slate-50 min-h-screen">
            <PageHeader
                title="Denial & ROI Calculator"
                subtitle="Financial Intelligence"
                description="Quantify your revenue leakage. Our interactive calculator uses industry benchmarks to visualize your recovery potential and the impact of optimized billing."
                bgImage="/img/RCM calculator.jpg"
            />

            <section className="py-24 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-[800px] mx-auto">
                        <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-[4px] mb-4 block">Interactive Tool</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight mb-6">
                            Visualize Your Revenue Potential
                        </h2>
                        <p className="text-lg text-slate-500 font-medium leading-relaxed">
                            Adjust the sliders below based on your current practice metrics. Our algorithm will instantly project the financial impact of improved denial management.
                        </p>
                    </div>

                    <div className="max-w-[1100px] mx-auto">
                        <RCMCalculator />
                    </div>

                    {/* Disclaimer / Note */}
                    <div className="mt-16 max-w-[800px] mx-auto text-center">
                        <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm inline-block">
                            <p className="text-sm text-slate-400 font-medium leading-relaxed">
                                <span className="text-slate-600 font-bold block mb-2 underline decoration-[var(--primary-color)] decoration-2 underline-offset-4">Calculation Methodology:</span>
                                These results are estimates based on average healthcare billing benchmarks and historical performance data.
                                Actual recovery amounts depend on payer mix, specialty, and data quality. For a precise clinical audit,
                                please speak with an SBN analyst.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
