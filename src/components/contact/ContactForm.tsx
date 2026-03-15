'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                ...formData,
                subject: 'General Inquiry' // Default subject for contact form
            });
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_70px_rgba(0,0,0,0.05)] border border-slate-100"
        >
            <div className="mb-10">
                <h3 className="text-2xl font-black text-[var(--secondary-color)] mb-2 tracking-tight">Request an Audit</h3>
                <p className="text-slate-400 font-medium text-sm">Fill out the form below and an RCM specialist will reach out within 24 hours.</p>
            </div>

            {status.message && (
                <div className={`mb-8 p-6 rounded-2xl text-sm font-bold border ${status.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' :
                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-blue-50 text-blue-600 border-blue-100'
                    }`}>
                    <div className="flex items-center gap-3">
                        {status.type === 'loading' && <span className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></span>}
                        {status.message}
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[var(--primary-color)] focus:bg-white font-medium text-slate-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[var(--primary-color)] focus:bg-white font-medium text-slate-700"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[var(--primary-color)] focus:bg-white font-medium text-slate-700"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-[10px] font-black uppercase text-slate-500 tracking-widest ml-1">Message / Requirements</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="How can we help your practice?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[var(--primary-color)] focus:bg-white font-medium text-slate-700 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full bg-[var(--primary-color)] text-white font-black py-5 rounded-xl uppercase tracking-[3px] text-xs transition-all hover:bg-[var(--secondary-color)] hover:shadow-2xl hover:shadow-[var(--primary-color)]/20 active:scale-[0.98] disabled:opacity-50"
                >
                    {status.type === 'loading' ? 'Sending Request...' : 'Submit Inquiry'}
                </button>
            </form>
        </motion.div>
    );
}
