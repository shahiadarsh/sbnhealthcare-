import React from 'react';
import type { Metadata } from 'next';
import PricingComponent from '@/components/home/Pricing';
import PageHeader from '@/components/layout/PageHeader';
import { getDynamicMetadata } from '@/utils/seo';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('pricing');
    return {
        title: dynamic?.title || 'Pricing Plans - SBN Healthcare Solution',
        description: dynamic?.description || 'Transparent and competitive pricing for medical billing services.',
    };
}

export default function PricingPage() {
    return (
        <main className="bg-white min-h-screen">
            <PageHeader
                title="Smart Pricing. Fast ROI."
                subtitle="Investment Models"
                description="Choose the best pricing model that fits your practice's needs. We offer flexible plans to ensure you get the best value, reducing your costs while minimizing risk."
                bgImage="/img/pricing.jpg"
            />

            <section className="py-24">
                <div className="container mx-auto px-4">
                    <PricingComponent />
                </div>
            </section>
        </main>
    );
}
