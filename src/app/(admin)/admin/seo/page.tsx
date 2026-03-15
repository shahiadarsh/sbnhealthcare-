'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchAllSeo, upsertSeo, deleteSeo } from '@/store/slices/seoSlice';
import { FaSave, FaGlobe, FaTrash, FaPlus, FaLightbulb, FaShareAlt, FaRobot, FaCode, FaLink, FaSitemap, FaExclamationTriangle, FaCheck, FaTimes, FaKeyboard, FaEye } from 'react-icons/fa';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function SeoManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { seoList: seos, loading } = useSelector((state: RootState) => state.seo);
    const [activeTab, setActiveTab] = useState('general');
    const [redirects, setRedirects] = useState<any[]>([]);
    const [robotsTxt, setRobotsTxt] = useState('');
    const [newRedirect, setNewRedirect] = useState({ fromPath: '', toPath: '', code: 301 });
    const [isSavingRobots, setIsSavingRobots] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        _id: '',
        page: '',
        title: '',
        description: '',
        keywords: '',
        primaryKeyword: '',
        slug: '',
        canonicalUrl: '',
        robots: 'index, follow',
        ogTitle: '',
        ogDescription: '',
        ogImage: '',
        twitterCard: 'summary_large_image',
        schemaType: 'None',
        imageAlt: ''
    });

    const schemaOptions = [
        'None', 'Article', 'Product', 'FAQ', 'Breadcrumb', 'Organization', 'Local Business'
    ];

    const suggestions = [
        'home', 'about-us', 'services', 'contact-us', 'rcm-calculator', 'blog',
        'medical-billing', 'medical-coding', 'eligibility-verification',
        'ar-follow-up', 'credentialing', 'credit-balance'
    ];

    const fetchToolsData = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const [redirectsRes, robotsRes] = await Promise.all([
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/redirects`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${process.env.NEXT_PUBLIC_API_URL}/settings/robots_txt`)
            ]);
            setRedirects(redirectsRes.data.data);
            setRobotsTxt(robotsRes.data.data.value);
        } catch (err) {
            console.error('Error fetching tools data:', err);
        }
    };

    useEffect(() => {
        dispatch(fetchAllSeo());
        fetchToolsData();
    }, [dispatch]);

    const showStatus = (type: string, message: string) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    };

    const handleSaveRobots = async () => {
        setIsSavingRobots(true);
        try {
            const token = localStorage.getItem('adminToken');
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/settings`, 
                { key: 'robots_txt', value: robotsTxt },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            showStatus('success', 'Robots.txt saved!');
        } catch (err) {
            showStatus('error', 'Failed to save');
        } finally {
            setIsSavingRobots(false);
        }
    };

    const handleAddRedirect = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('adminToken');
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/redirects`, newRedirect, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNewRedirect({ fromPath: '', toPath: '', code: 301 });
            fetchToolsData();
            showStatus('success', 'Redirect added');
        } catch (err) {
            showStatus('error', 'Error adding redirect');
        }
    };

    const handleDeleteRedirect = async (id: string) => {
        if (!confirm('Delete this redirect?')) return;
        try {
            const token = localStorage.getItem('adminToken');
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/redirects/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            fetchToolsData();
            showStatus('success', 'Redirect deleted');
        } catch (err) {
            showStatus('error', 'Error deleting redirect');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(upsertSeo(formData)).unwrap();
            showStatus('success', 'SEO settings saved!');
            setFormData({
                _id: '',
                page: '',
                title: '',
                description: '',
                keywords: '',
                primaryKeyword: '',
                slug: '',
                canonicalUrl: '',
                robots: 'index, follow',
                ogTitle: '',
                ogDescription: '',
                ogImage: '',
                twitterCard: 'summary_large_image',
                schemaType: 'None',
                imageAlt: ''
            });
            setActiveTab('general');
        } catch (err) {
            showStatus('error', 'Failed to save');
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Delete this SEO entry?')) {
            await dispatch(deleteSeo(id));
            showStatus('success', 'Entry deleted');
        }
    };

    if (loading && seos.length === 0) return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-[var(--primary-color)]"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Indexing Data...</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 rounded-xl mb-4">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">SEO Engine Active</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">SEO Management</h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">Optimize your healthcare website for search engines</p>
                </div>
            </div>

            {/* Status Notifications */}
            <AnimatePresence>
                {status.message && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`fixed bottom-10 right-10 z-[100] px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md ${status.type === 'success' ? 'bg-emerald-500/90' : 'bg-red-500/90'}`}
                    >
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            {status.type === 'success' ? <FaCheck /> : <FaTimes />}
                        </div>
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Editor Section */}
                <div className="lg:col-span-12">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200"
                    >
                        {/* Tab Headers */}
                        <div className="flex flex-wrap border-b border-slate-100 bg-slate-50/30">
                            {[
                                { id: 'general', label: 'Basic Info', icon: <FaGlobe /> },
                                { id: 'social', label: 'Social Media', icon: <FaShareAlt /> },
                                { id: 'advanced', label: 'Advanced Settings', icon: <FaCode /> },
                                { id: 'tools', label: 'Admin Tools', icon: <FaSitemap /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-8 py-6 flex items-center gap-3 font-black text-[10px] uppercase tracking-widest transition-all relative ${activeTab === tab.id
                                        ? 'text-slate-900'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {tab.icon} {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div 
                                            layoutId="seoTabActive"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--primary-color)]"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 lg:p-12">
                            <AnimatePresence mode="wait">
                                {activeTab === 'general' && (
                                    <motion.div 
                                        key="general"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="space-y-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2">
                                                    <FaPlus className="text-[var(--primary-color)]" /> Page Name
                                                </label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                                    value={formData.page}
                                                    onChange={(e) => setFormData({ ...formData, page: e.target.value })}
                                                    placeholder="e.g. home"
                                                    required
                                                />
                                                <div className="pt-3">
                                                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                                        <FaLightbulb className="text-amber-500" /> Suggestions:
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {suggestions.map(s => (
                                                            <button
                                                                key={s}
                                                                type="button"
                                                                onClick={() => setFormData({ ...formData, page: s })}
                                                                className={`text-[9px] px-3 py-1.5 rounded-lg border transition-all font-black uppercase tracking-tighter ${formData.page === s
                                                                    ? 'bg-slate-900 text-white border-slate-900'
                                                                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400'
                                                                    }`}
                                                            >
                                                                {s}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex justify-between items-center">
                                                    <span className="flex items-center gap-2"><FaKeyboard className="text-[var(--primary-color)]" /> Meta Title</span>
                                                    <span className={`px-2 py-0.5 rounded ${formData.title.length > 60 ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>{formData.title.length} / 60</span>
                                                </label>
                                                <input
                                                    className={`w-full px-7 py-4 rounded-xl bg-slate-50 border transition-all font-bold text-slate-800 ${formData.title.length > 60 ? 'border-red-200 focus:border-red-500' : 'border-slate-200 focus:border-[var(--primary-color)]'}`}
                                                    value={formData.title}
                                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                    placeholder="SBN Healthcare | Medical Billing Services"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex justify-between items-center">
                                                    <span>Meta Description</span>
                                                    <span className={`px-2 py-0.5 rounded ${formData.description.length > 160 ? 'bg-red-50 text-red-500' : 'bg-slate-50 text-slate-400'}`}>{formData.description.length} / 160</span>
                                                </label>
                                                <textarea
                                                    className={`w-full px-7 py-4 rounded-2xl bg-slate-50 border transition-all font-bold text-slate-800 resize-none ${formData.description.length > 160 ? 'border-red-200 focus:border-red-500' : 'border-slate-200 focus:border-[var(--primary-color)]'}`}
                                                    rows={4}
                                                    value={formData.description}
                                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                    placeholder="Enter a brief summary for search results..."
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-6">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Main Keyword</label>
                                                    <input
                                                        className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                        value={formData.primaryKeyword}
                                                        onChange={(e) => setFormData({ ...formData, primaryKeyword: e.target.value })}
                                                        placeholder="e.g. medical billing"
                                                    />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">URL Slug (Path)</label>
                                                    <input
                                                        className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                        value={formData.slug}
                                                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                                        placeholder="managed-services"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'social' && (
                                    <motion.div 
                                        key="social"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="space-y-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Social Title</label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                    value={formData.ogTitle}
                                                    onChange={(e) => setFormData({ ...formData, ogTitle: e.target.value })}
                                                    placeholder="Social media heading..."
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Social Description</label>
                                                <textarea
                                                    className="w-full px-7 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800 resize-none"
                                                    rows={2}
                                                    value={formData.ogDescription}
                                                    onChange={(e) => setFormData({ ...formData, ogDescription: e.target.value })}
                                                    placeholder="Brief social share text..."
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Social Image URL</label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                    value={formData.ogImage}
                                                    onChange={(e) => setFormData({ ...formData, ogImage: e.target.value })}
                                                    placeholder="/img/og-preview.jpg"
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Twitter Card Type</label>
                                                <select
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800 appearance-none"
                                                    value={formData.twitterCard}
                                                    onChange={(e) => setFormData({ ...formData, twitterCard: e.target.value })}
                                                >
                                                    <option value="summary">Summary (Small Image)</option>
                                                    <option value="summary_large_image">Summary Large Image</option>
                                                </select>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'advanced' && (
                                    <motion.div 
                                        key="advanced"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="space-y-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Page Type (Schema)</label>
                                                <select
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800 appearance-none"
                                                    value={formData.schemaType}
                                                    onChange={(e) => setFormData({ ...formData, schemaType: e.target.value })}
                                                >
                                                    {schemaOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                                </select>
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Search Bots (Robots)</label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                    value={formData.robots}
                                                    onChange={(e) => setFormData({ ...formData, robots: e.target.value })}
                                                    placeholder="index, follow"
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Canonical URL</label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                    value={formData.canonicalUrl}
                                                    onChange={(e) => setFormData({ ...formData, canonicalUrl: e.target.value })}
                                                    placeholder="https://sbnhealthcare.com/page-name"
                                                />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px]">Image Alt Text</label>
                                                <input
                                                    className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-[var(--primary-color)] focus:outline-none transition-all font-bold text-slate-800"
                                                    value={formData.imageAlt}
                                                    onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                                                    placeholder="Describe your main page image"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === 'tools' && (
                                    <motion.div 
                                        key="tools"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        className="space-y-12"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-[var(--primary-color)] border border-slate-200">
                                                        <FaSitemap size={20} />
                                                    </div>
                                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Sitemap Tool</h4>
                                                </div>
                                                <button 
                                                    type="button" 
                                                    onClick={() => showStatus('success', 'Starting sitemap generation...')}
                                                    className="w-full py-4 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[2px] hover:bg-[var(--primary-color)] transition-all shadow-xl"
                                                >
                                                    Generate Sitemap.xml
                                                </button>
                                            </div>

                                            <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col">
                                                <div className="flex items-center gap-4 mb-6">
                                                    <div className="p-3 bg-white rounded-xl shadow-sm text-slate-700 border border-slate-200">
                                                        <FaRobot size={20} />
                                                    </div>
                                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Robots.txt</h4>
                                                </div>
                                                <textarea 
                                                    className="w-full p-5 rounded-xl bg-white border border-slate-200 font-mono text-xs text-slate-600 mb-4 focus:border-slate-900 outline-none flex-grow min-h-[100px]"
                                                    value={robotsTxt}
                                                    onChange={(e) => setRobotsTxt(e.target.value)}
                                                />
                                                <button 
                                                    type="button" 
                                                    onClick={handleSaveRobots}
                                                    disabled={isSavingRobots}
                                                    className="w-full py-4 bg-slate-900 text-white text-[10px] font-black rounded-xl uppercase tracking-[2px] transition-all disabled:opacity-50"
                                                >
                                                    {isSavingRobots ? 'Saving...' : 'Save Robots.txt'}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="p-3 bg-orange-100 text-orange-600 rounded-xl shadow-sm border border-orange-200">
                                                    <FaLink size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-none">Redirects Manager</h4>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[2px] mt-2">Manage page forwarding (301/302)</p>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
                                                <input 
                                                    className="md:col-span-1 px-6 py-4 rounded-xl text-xs font-bold border border-slate-200 bg-white focus:border-orange-400 outline-none"
                                                    placeholder="/old-link"
                                                    value={newRedirect.fromPath}
                                                    onChange={(e) => setNewRedirect({...newRedirect, fromPath: e.target.value})}
                                                />
                                                <input 
                                                    className="md:col-span-1 px-6 py-4 rounded-xl text-xs font-bold border border-slate-200 bg-white focus:border-orange-400 outline-none"
                                                    placeholder="/new-link"
                                                    value={newRedirect.toPath}
                                                    onChange={(e) => setNewRedirect({...newRedirect, toPath: e.target.value})}
                                                />
                                                <select 
                                                    className="px-6 py-4 rounded-xl text-[10px] font-black border border-slate-200 bg-white focus:border-orange-400 outline-none appearance-none"
                                                    value={newRedirect.code}
                                                    onChange={(e) => setNewRedirect({...newRedirect, code: parseInt(e.target.value)})}
                                                >
                                                    <option value={301}>301 (Permanent)</option>
                                                    <option value={302}>302 (Temporary)</option>
                                                </select>
                                                <button 
                                                    type="button" 
                                                    onClick={handleAddRedirect}
                                                    className="bg-orange-500 text-white font-black rounded-xl uppercase tracking-[2px] text-[10px] hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20"
                                                >
                                                    Add Redirect
                                                </button>
                                            </div>

                                            <div className="space-y-3">
                                                {redirects.map((r: any) => (
                                                    <motion.div 
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        key={r._id} 
                                                        className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 group shadow-sm"
                                                    >
                                                        <div className="flex items-center gap-6 overflow-hidden">
                                                            <span className={`px-3 py-1 rounded-lg text-[10px] font-black tracking-widest uppercase ${r.code === 301 ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'}`}>
                                                                {r.code}
                                                            </span>
                                                            <div className="flex items-center gap-4">
                                                                <p className="text-[11px] font-black text-slate-900">{r.fromPath}</p>
                                                                <FaLink className="text-slate-300 text-[10px]" />
                                                                <p className="text-[11px] font-black text-[var(--primary-color)]">{r.toPath}</p>
                                                            </div>
                                                        </div>
                                                        <button 
                                                            type="button" 
                                                            onClick={() => handleDeleteRedirect(r._id)}
                                                            className="w-9 h-9 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                        >
                                                            <FaTrash size={12} />
                                                        </button>
                                                    </motion.div>
                                                ))}
                                                {redirects.length === 0 && <p className="text-center py-10 text-[10px] font-bold text-slate-300 uppercase tracking-widest italic">No redirects found</p>}
                                            </div>
                                        </div>

                                        <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden group">
                                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                                                <div>
                                                    <div className="flex items-center gap-4 mb-4">
                                                        <div className="p-3 bg-amber-400 text-slate-900 rounded-xl">
                                                            <FaExclamationTriangle />
                                                        </div>
                                                        <h4 className="text-lg font-black uppercase tracking-tight">Broken Links Monitor</h4>
                                                    </div>
                                                    <p className="text-slate-400 text-xs font-bold leading-relaxed max-w-xl">
                                                        Our system scans for 404 errors daily. Keeping links healthy prevents search engine penalties.
                                                    </p>
                                                </div>
                                                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shrink-0">
                                                    <p className="text-emerald-400 text-[10px] font-black uppercase tracking-[3px] flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                                                        Scan Status: 100% Healthy
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-12 pt-10 border-t border-slate-100 flex justify-end">
                                <button type="submit" className="bg-slate-900 text-white font-black px-12 py-5 rounded-2xl uppercase tracking-[3px] text-xs shadow-2xl hover:bg-[var(--primary-color)] transition-all">
                                    <FaSave className="inline-block mr-3" /> Save SEO Settings
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>

                {/* Database List */}
                <div className="lg:col-span-12 mt-10">
                    <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[4px] px-6 mb-8">Metadata Repository ({seos.length})</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {seos.map((seo: any, idx: number) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                key={seo._id} 
                                className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm flex items-start gap-6 group hover:border-slate-400 transition-all hover:shadow-xl"
                            >
                                <div className="w-14 h-14 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                                    <FaGlobe />
                                </div>
                                <div className="flex-grow min-w-0">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="truncate pr-4">
                                            <span className="bg-slate-100 text-slate-600 text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border border-slate-200">{seo.page}</span>
                                            <h3 className="text-lg font-black text-slate-900 mt-3 leading-tight truncate capitalize">{seo.title}</h3>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => {
                                                    setFormData({ ...seo, keywords: seo.keywords || '' });
                                                    setActiveTab('general');
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm"
                                            >
                                                <FaPlus size={14} title="Load into editor" />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(seo._id)}
                                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-red-300 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100 italic">
                                            Keyword: {seo.primaryKeyword || 'Untracked'}
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-xs font-bold leading-relaxed line-clamp-2 opacity-80">{seo.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
