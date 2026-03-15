'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/store';
import { fetchBlogs, createBlog, updateBlog, deleteBlog } from '@/store/slices/blogSlice';
import { FaPlus, FaEdit, FaTrash, FaCheck, FaTimes, FaImage, FaHashtag, FaNewspaper, FaClock } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogManagement() {
    const dispatch = useDispatch<AppDispatch>();
    const { blogs, loading } = useSelector((state: RootState) => state.blogs);
    const [isEditing, setIsEditing] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        _id: '',
        title: '',
        excerpt: '',
        content: '',
        category: '',
        image: '/img/bg1.jpg',
        readTime: '5 Min Read'
    });

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    const showStatus = (type: string, message: string) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (formData._id) {
                await dispatch(updateBlog({ id: formData._id, data: formData })).unwrap();
                showStatus('success', 'Blog updated successfully!');
            } else {
                const { _id, ...newData } = formData;
                await dispatch(createBlog(newData)).unwrap();
                showStatus('success', 'Blog created successfully!');
            }
            setIsEditing(false);
            setFormData({ _id: '', title: '', excerpt: '', content: '', category: '', image: '/img/bg1.jpg', readTime: '5 Min Read' });
        } catch (err: any) {
            showStatus('error', err || 'Something went wrong');
        }
    };

    const handleEdit = (blog: any) => {
        setFormData(blog);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id: string) => {
        if (!window.confirm('Are you sure you want to delete this blog?')) return;
        try {
            await dispatch(deleteBlog(id)).unwrap();
            showStatus('success', 'Blog deleted successfully!');
        } catch (err: any) {
            showStatus('error', err || 'Failed to delete blog');
        }
    };

    if (loading && blogs.length === 0) return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-slate-100 border-t-[var(--primary-color)]"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px]">Mapping Feed Data...</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-10">
                <div>
                    <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white border border-slate-200 rounded-xl mb-4">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">System Online</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">Blog Management</h1>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">Create and manage your healthcare articles</p>
                </div>
                <AnimatePresence>
                    {!isEditing && (
                        <motion.button
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={() => setIsEditing(true)}
                            className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl hover:bg-[var(--primary-color)] transition-all group"
                        >
                            <FaPlus className="text-sm group-hover:rotate-90 transition-transform duration-500" />
                            <span className="text-xs uppercase tracking-[2px]">Add New Blog</span>
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Status Notifications */}
            <AnimatePresence>
                {status.message && (
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className={`fixed bottom-10 right-10 z-[100] px-8 py-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md ${status.type === 'success' ? 'bg-emerald-500/90' : 'bg-red-500/90'}`}
                    >
                        <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                            {status.type === 'success' ? <FaCheck /> : <FaTimes />}
                        </div>
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Form Section */}
            <AnimatePresence>
                {isEditing && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200"
                    >
                        <div className="h-2 w-full bg-gradient-to-r from-[var(--primary-color)] via-indigo-500 to-[var(--primary-color)]" />
                        <div className="p-8 lg:p-12">
                            <div className="flex justify-between items-center mb-12">
                                <div>
                                    <h2 className="text-xl font-black text-slate-900 flex items-center gap-4 uppercase tracking-tighter">
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[var(--primary-color)] border border-slate-100">
                                            <FaNewspaper size={20} />
                                        </div>
                                        {formData._id ? 'Edit Blog Post' : 'Create New Blog'}
                                    </h2>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[3px] mt-2 ml-14">Fill in the details below</p>
                                </div>
                                <button 
                                    onClick={() => setIsEditing(false)} 
                                    className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center"
                                >
                                    <FaTimes size={18} />
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">
                                            <FaEdit className="text-[var(--primary-color)]" /> Blog Title
                                        </label>
                                        <input
                                            className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800 placeholder:text-slate-300"
                                            placeholder="Healthcare Transformation 2026"
                                            value={formData.title}
                                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">
                                                <FaHashtag className="text-[var(--primary-color)]" /> Category
                                            </label>
                                            <input
                                                className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                                placeholder="Diagnostics"
                                                value={formData.category}
                                                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">
                                                <FaClock className="text-[var(--primary-color)]" /> Read Time
                                            </label>
                                            <input
                                                className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                                placeholder="5 Minutes"
                                                value={formData.readTime}
                                                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">
                                        <FaImage className="text-[var(--primary-color)]" /> Featured Image URL
                                    </label>
                                    <input
                                        className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800"
                                        placeholder="/img/blog/asset_v1.jpg"
                                        value={formData.image}
                                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">Short Excerpt</label>
                                    <textarea
                                        className="w-full px-7 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-bold text-slate-800 resize-none"
                                        rows={2}
                                        placeholder="Brief summary of the article..."
                                        value={formData.excerpt}
                                        onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black uppercase text-slate-500 tracking-[3px] flex items-center gap-2 mb-2">Full Content</label>
                                    <textarea
                                        className="w-full px-7 py-5 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-[var(--primary-color)] focus:bg-white transition-all font-medium text-slate-700 min-h-[400px]"
                                        placeholder="Start writing the blog content here..."
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="flex flex-col md:flex-row gap-4 pt-6">
                                    <button 
                                        type="submit" 
                                        className="flex-1 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-2xl hover:bg-[var(--primary-color)] transition-all uppercase tracking-[2px] text-xs"
                                    >
                                        <FaCheck /> {formData._id ? 'Save Changes' : 'Create Blog'}
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsEditing(false)} 
                                        className="px-10 py-5 rounded-2xl bg-slate-100 text-slate-500 font-black hover:bg-slate-200 transition-all uppercase text-[10px] tracking-[3px]"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* List Section */}
            <div className={`space-y-10 ${isEditing ? 'opacity-20 pointer-events-none scale-[0.98] blur-sm' : 'animate-fadeIn transition-all duration-700'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog: any, index: number) => (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            key={blog._id} 
                            className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img src={blog.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute top-5 left-5">
                                    <span className="bg-[var(--primary-color)]/90 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-[2px] px-4 py-1.5 rounded-lg shadow-xl">
                                        {blog.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-5 right-5 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <button
                                        onClick={() => handleEdit(blog)}
                                        className="w-12 h-12 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-[var(--primary-color)] hover:text-white shadow-2xl transition-all active:scale-95"
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(blog._id)}
                                        className="w-12 h-12 bg-white text-red-500 rounded-xl flex items-center justify-center hover:bg-red-500 hover:text-white shadow-2xl transition-all active:scale-95"
                                    >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                                        {new Date(blog.date).toLocaleDateString()}
                                    </div>
                                    <div className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-md border border-slate-100">
                                        {blog.readTime}
                                    </div>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight mb-4 line-clamp-2 hover:text-[var(--primary-color)] transition-colors cursor-pointer capitalize">{blog.title}</h3>
                                <p className="text-slate-500 text-xs font-bold leading-relaxed line-clamp-3 opacity-80">{blog.excerpt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <div className="text-center py-32 bg-white border border-slate-200 rounded-[3rem] shadow-inner">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-100">
                            <FaNewspaper className="text-slate-200" size={40} />
                        </div>
                        <h3 className="text-2xl font-black text-slate-800 uppercase tracking-tighter">No Blogs Found</h3>
                        <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[3px] mt-4">Start by adding your first article</p>
                    </div>
                )}
            </div>
        </div>
    );
}
