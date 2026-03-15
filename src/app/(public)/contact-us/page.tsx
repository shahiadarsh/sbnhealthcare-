import React from 'react';
import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactDetails from '@/components/contact/ContactDetails';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('contact-us');
    return {
        title: dynamic?.title || 'Contact Us - SBN Healthcare Solution',
        description: dynamic?.description || 'Get in touch with SBN Healthcare Solution for your medical billing needs.',
    };
}

export default function ContactUs() {
    return (
        <div className="bg-white">
            <PageHeader
                title="Speak With Our Experts"
                subtitle="Contact Us"
                description="Have questions about our services or need a customized quote? Join our network of successful providers by getting in touch today."
            />

            <div className="container mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
