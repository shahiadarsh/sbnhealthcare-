'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const pathname = usePathname();

    // Hide footer on admin pages
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className="footer-enterprise pt-[80px] pb-[40px] text-white overflow-hidden">
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--primary-color)]/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-12 gap-12 mb-[60px] text-center min-[480px]:text-left">
                    {/* Brand Info */}
                    <div className="lg:col-span-4 flex flex-col items-center min-[480px]:items-start">
                        <div className="mb-6 p-1 bg-white rounded-lg shadow-xl inline-flex">
                            <img
                                src="/img/logo.jpg"
                                alt="SBN Healthcare Solution"
                                className="h-[60px] md:h-[70px] w-auto"
                            />
                        </div>
                        <p className="text-white/70 text-[0.95rem] leading-[1.8] mb-8 max-w-[320px] mx-auto min-[480px]:mx-0">
                            Accelerating revenue cycles and improving financial health for modern healthcare practices through expert RCM solutions.
                        </p>
                        <div className="flex gap-4 justify-center min-[480px]:justify-start">
                            {[
                                { icon: <FaFacebook />, href: "https://www.facebook.com/BillingGiant/" },
                                { icon: <FaTwitter />, href: "https://twitter.com/sbnhealthcare" },
                                { icon: <FaLinkedin />, href: "https://in.linkedin.com/company/sbn-healthcare-solution-llc" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-xl text-white/50 hover:bg-[var(--primary-color)] hover:text-white hover:border-[var(--primary-color)] transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Solutions */}
                    <div className="lg:col-span-3 lg:ml-auto flex flex-col items-center min-[480px]:items-start">
                        <h4 className="text-[1rem] md:text-[1.1rem] font-black uppercase tracking-[2px] text-white mb-8 inline-block border-b-2 border-[var(--primary-color)] pb-2">
                            Solutions
                        </h4>
                        <ul className="flex flex-col gap-4 list-none p-0 w-full items-center min-[480px]:items-start">
                            {[
                                { name: 'Eligibility Verification', href: '/services/eligibility-verification' },
                                { name: 'Medical Billing', href: '/services/medical-billing' },
                                { name: 'Medical Coding', href: '/services/medical-coding' },
                                { name: 'AR & Denials', href: '/services/ar-follow-up-and-denial-management' },
                                { name: 'Credentialing', href: '/services/credentialing-and-contracting' },
                                { name: 'Credit Resolution', href: '/services/credit-balance-resolution' }
                            ].map((item) => (
                                <li key={item.name} className="flex justify-center min-[480px]:justify-start">
                                    <Link
                                        href={item.href}
                                        className="text-white/60 text-[0.95rem] font-bold hover:text-[var(--primary-color)] transition-all flex items-center gap-2 group no-underline"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] hidden min-[480px]:block opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Corporate */}
                    <div className="lg:col-span-2 lg:ml-auto flex flex-col items-center min-[480px]:items-start">
                        <h4 className="text-[1rem] md:text-[1.1rem] font-black uppercase tracking-[2px] text-white mb-8 inline-block border-b-2 border-[var(--primary-color)] pb-2">
                            Quick Links
                        </h4>
                        <ul className="flex flex-col gap-4 list-none p-0 w-full items-center min-[480px]:items-start">
                            {[
                                { name: 'About Us', href: '/about-us' },
                                { name: 'Insights', href: '/blog' },
                                { name: 'RCM Tool', href: '/rcm-calculator' },
                                { name: 'Pricing', href: '/pricing' }
                            ].map((item) => (
                                <li key={item.name} className="flex justify-center min-[480px]:justify-start">
                                    <Link
                                        href={item.href}
                                        className="text-white/60 text-[0.95rem] font-bold hover:text-[var(--primary-color)] transition-all flex items-center gap-2 group no-underline"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] hidden min-[480px]:block opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* HQ */}
                    <div className="lg:col-span-3 lg:ml-auto flex flex-col items-center min-[480px]:items-start">
                        <h4 className="text-[1rem] md:text-[1.1rem] font-black uppercase tracking-[2px] text-white mb-8 inline-block border-b-2 border-[var(--primary-color)] pb-2">
                            Headquarters
                        </h4>
                        <div className="space-y-6 flex flex-col items-center min-[480px]:items-start w-full">
                            <div className="text-white/50 text-[0.95rem] md:text-[1rem] leading-[1.8]">
                                1309 Coffeen Avenue Ste 1200<br />
                                Sheridan, WY 82801
                            </div>
                            <div className="space-y-3 w-full flex flex-col items-center min-[480px]:items-start">
                                <p className="text-white/50 text-[0.95rem] flex items-center gap-3">
                                    <strong className="text-white font-black text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">PH</strong>
                                    (805) 426-4609
                                </p>
                                <p className="text-white/50 text-[0.95rem] flex items-center gap-3">
                                    <strong className="text-white font-black text-[10px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded">EX</strong>
                                    info@sbnhealthcaresolution.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 pb-4 text-center text-white/30 text-[0.85rem] font-medium">
                <div className="container mx-auto px-4">
                    &copy; {new Date().getFullYear()} SBN Healthcare Solution. Certified Medical Billing Services.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
