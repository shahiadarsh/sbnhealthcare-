'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    {
        name: 'Solutions',
        href: '#',
        dropdown: [
            { name: 'Eligibility & Front Office', href: '/services/eligibility-verification' },
            { name: 'Revenue Cycle Management', href: '/services/medical-billing' },
            { name: 'Denial Management', href: '/services/ar-follow-up-and-denial-management' },
            { name: 'Coding Accuracy', href: '/services/medical-coding' },
            { name: 'Credentialing', href: '/services/credentialing-and-contracting' },
            { name: 'More Solutions', href: '/services' },
        ]
    },
    {
        name: 'Specialties',
        href: '#',
        dropdown: [
            { name: 'Behavioral Health', href: '/specialties/behavioral-health' },
            { name: 'DME / Orthopedics', href: '/specialties/dme-orthopedics' },
            { name: 'Urgent Care & Telehealth', href: '/specialties/urgent-care-telehealth' },
            { name: 'Small–Mid Practices', href: '/specialties/small-mid-practices' },
        ]
    },
    { name: 'Resources', href: '/white-paper' },
    { name: 'Compliance & Security', href: '/security' },
    { name: 'RCM Calculator', href: '/rcm-calculator' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact-us' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <div className="bg-[#06121e] text-slate-300 py-[10px] text-[14px]">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <span className="mr-[20px]">(805)426-4609</span>
                        <span>info@sbnhealthcaresolution.com</span>
                    </div>
                    {/* Social icons would go here */}
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#0f172a] to-[#0ea5a4] h-[80px] flex items-center border-b border-white/10 relative">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="w-full px-4 lg:px-6 xl:px-8 flex justify-between items-center h-full gap-4 relative z-10">
                    <Link href="/" className="flex items-center gap-2 no-underline group py-1 flex-shrink-0">
                        <img src="/img/logo.jpg" alt="SBN Healthcare Solution" className="max-h-[55px] w-auto transition-transform group-hover:scale-105" />
                        <div className="flex flex-col justify-center leading-none min-w-fit">
                            <span className="text-white font-black text-[14px] xl:text-[18px] tracking-[1px] uppercase">
                                SBN Healthcare
                            </span>
                            <span className="text-[var(--primary-color)] font-black text-[9px] xl:text-[11px] tracking-[3px] uppercase mt-0.5">
                                Solution
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:block h-full">
                        <ul className="flex gap-0 h-full items-center m-0 p-0 list-none">
                            {navLinks.map((link) => (
                                <li key={link.name} className="relative h-full flex items-center group">
                                    <Link
                                        href={link.href}
                                        className="text-[#ffffff] font-semibold hover:text-[#22d3ee] px-[12px] 2xl:px-[18px] h-[80px] flex items-center uppercase text-[12px] 2xl:text-[13px] tracking-[1px] transition-all duration-300 whitespace-nowrap relative group/link"
                                    >
                                        <span className="relative z-10 pt-1">
                                            {link.name}
                                            {link.dropdown && (
                                                <FaAngleDown className="absolute left-1/2 -translate-x-1/2 -bottom-3 text-[9px] opacity-60" />
                                            )}
                                        </span>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#22d3ee] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                                    </Link>

                                    {link.dropdown && (
                                        <ul className="absolute top-full left-0 bg-white min-w-[250px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] py-[15px] hidden group-hover:block border-t-[3px] border-t-[var(--primary-color)] z-[1100]">
                                            {link.dropdown.map((subLink) => (
                                                <li key={subLink.name}>
                                                    <Link
                                                        href={subLink.href}
                                                        className="block py-[10px] px-[20px] text-[var(--text-color)] text-[14px] border-b border-[#f1f1f1] transition-all duration-300 hover:bg-[#f9f9f9] hover:text-[var(--primary-color)] hover:pl-[25px]"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* CTA Button & Mobile Menu */}
                    <div className="flex items-center gap-6">
                        <button
                            className="xl:hidden bg-transparent border-none text-[1.5rem] text-white cursor-pointer hover:text-[#22d3ee] transition-colors"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="xl:hidden absolute top-full left-0 right-0 bg-white p-[20px] shadow-md z-[1001]"
                    >
                        <ul className="flex flex-col gap-[15px] p-0 m-0 list-none">
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.dropdown ? (
                                        <>
                                            <span className="text-[1.1rem] font-bold text-[var(--text-color)] block cursor-default">
                                                {link.name}
                                            </span>
                                            <ul className="mt-[10px] mb-[10px] flex flex-col gap-[10px]">
                                                {link.dropdown.map(subLink => (
                                                    <li key={subLink.name}>
                                                        <Link
                                                            href={subLink.href}
                                                            className="text-[0.9em] font-medium text-[var(--text-color)] block pl-[30px]"
                                                            onClick={toggleMenu}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-[1.1rem] font-medium text-[var(--text-color)] block"
                                            onClick={toggleMenu}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
