import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import PageHeader from '@/components/layout/PageHeader';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('security');
    return {
        title: dynamic?.title || 'Security & Compliance - SBN Healthcare Solution',
        description: dynamic?.description || 'Learn how we protect your data and stay compliant with healthcare regulations.',
    };
}

const Security = () => {
    return (
        <div className="bg-white">
            <PageHeader
                title="Security & Compliance"
                subtitle="Vigilant Stewardship"
                description="An innovation-driven governance framework designed to protect the integrity of healthcare data through proactive risk mitigation and audit-ready infrastructure."
                bgImage="/img/complinace&security.jpg"
            />

            {/* HIPAA Leadership Statement */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-[900px]">
                    <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-widest mb-4 block">Governance Standards</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[var(--secondary-color)] leading-tight mb-8 tracking-tight">
                        HIPAA Compliance & Data Sovereignty
                    </h2>
                    <p className="text-[1.2rem] leading-[1.8] text-slate-600 font-medium italic mb-10 border-l-4 border-[var(--primary-color)] pl-8 inline-block text-left mx-auto">
                        "Compliance is not just a requirement; it is the cornerstone of our accountability partner relationship with providers."
                    </p>
                    <p className="text-[1.1rem] leading-[1.8] text-slate-500 mb-6">
                        At SBN Healthcare, our HIPAA compliance strategy is built on the rigorous physical, administrative, and technical safeguards necessary to protect Protected Health Information (PHI). We leverage a multi-layered security architecture that exceeds government standards, ensuring that every transaction and data point is handled with absolute confidentiality.
                    </p>
                </div>
            </section>

            {/* Defense in Depth - Visual Stack */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="bg-white/80 backdrop-blur-sm border border-slate-200 px-4 py-1.5 rounded-full text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 inline-block">Security Architecture</span>
                        <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight">Defense in Depth</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Physical Layer */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative group transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight">Physical Layer</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Hardened data centers with biometric authentication, 24/7 surveillance, and multi-factor physical access protocols.
                            </p>
                            <div className="mt-6 flex gap-2">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">Biometric Access</span>
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">Tier-4 DC</span>
                            </div>
                        </div>

                        {/* Digital Perimeter */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(11,31,51,0.08)] border border-[var(--primary-color)]/20 relative group transition-all duration-500 hover:-translate-y-2 z-20 scale-105 ring-4 ring-[var(--primary-color)]/5">
                            <div className="w-16 h-16 bg-[var(--primary-color)]/10 text-[var(--primary-color)] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[var(--primary-color)] group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight">Digital Perimeter</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                AI-driven firewalls, real-time intrusion detection systems, and automated threat prioritization engines.
                            </p>
                            <div className="mt-6 flex gap-2">
                                <span className="text-[10px] font-bold bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-2 py-0.5 rounded-full uppercase tracking-tighter">AI Firewalls</span>
                                <span className="text-[10px] font-bold bg-[var(--primary-color)]/10 text-[var(--primary-color)] px-2 py-0.5 rounded-full uppercase tracking-tighter">DDoS Shield</span>
                            </div>
                        </div>

                        {/* Data Core */}
                        <div className="bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 relative group transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                            </div>
                            <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tight">Data Core</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                Enterprise-grade encryption at rest and in transit, with Zero-Trust identity governance.
                            </p>
                            <div className="mt-6 flex gap-2">
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">AES-256</span>
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full uppercase tracking-tighter">Zero Trust</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background deco */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary-color)]/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -ml-64 -mb-64"></div>
            </section>

            {/* Proactive Integrity Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-[700px]">
                            <span className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-[3px] mb-3 block">Real-time Safety</span>
                            <h2 className="text-4xl md:text-5xl font-black text-[var(--secondary-color)] tracking-tight">Proactive Integrity Grid</h2>
                        </div>
                        <div className="pb-2">
                            <span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 font-bold text-xs uppercase tracking-widest">Always-On Oversight</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 24/7 Monitoring */}
                        <div className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(11,31,51,0.1)] transition-all duration-500 overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-[var(--primary-color)] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[var(--primary-color)]/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-800 tracking-tight">24/7 Monitoring</h4>
                                </div>
                                <p className="text-slate-500 leading-relaxed font-medium mb-0">
                                    Real-time hawk-eye oversight across every operational tier. Continuous scanning for vulnerabilities and unannounced compliance stress tests to ensure 24/7 vigilance.
                                </p>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-[var(--primary-color)]/5 transition-colors duration-500"></div>
                        </div>

                        {/* Audit-Ready Architecture */}
                        <div className="group p-10 bg-[var(--secondary-color)] rounded-[2rem] border border-slate-700 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all duration-500 overflow-hidden relative text-white">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white text-[var(--secondary-color)] rounded-xl flex items-center justify-center shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>
                                    </div>
                                    <h4 className="text-2xl font-black text-white tracking-tight">Audit-Ready Systems</h4>
                                </div>
                                <p className="text-slate-300 leading-relaxed font-medium mb-0 opacity-90">
                                    Immutable data trails and instant compliance reporting. Every byte captured with audit-ready transparency to eliminate administrative friction during regulatory reviews.
                                </p>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors duration-500"></div>
                        </div>

                        {/* Clinical Sovereignty */}
                        <div className="group p-10 bg-white rounded-[2rem] border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(11,31,51,0.1)] transition-all duration-500 overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-teal-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" y1="8" x2="19" y2="14"></line><line x1="22" y1="11" x2="16" y2="11"></line></svg>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-800 tracking-tight">Clinical Sovereignty</h4>
                                </div>
                                <p className="text-slate-500 leading-relaxed font-medium mb-0">
                                    Granular provider-level data controls and Zero-Trust identity management. Ensuring clinical integrity by restricting data exposure only to authorized care stakeholders.
                                </p>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-slate-50 rounded-full group-hover:bg-teal-500/5 transition-colors duration-500"></div>
                        </div>

                        {/* Innovation Guardrails */}
                        <div className="group p-10 bg-slate-50 rounded-[2rem] border border-slate-200/50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_70px_rgba(11,31,51,0.1)] transition-all duration-500 overflow-hidden relative">
                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
                                    </div>
                                    <h4 className="text-2xl font-black text-slate-800 tracking-tight">Innovation Guardrails</h4>
                                </div>
                                <p className="text-slate-500 leading-relaxed font-medium mb-0">
                                    AI-powered security governance that evolves with emerging threats. Proactive risk mitigation engine that anticipates architectural gaps before they appear.
                                </p>
                            </div>
                            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white rounded-full group-hover:bg-indigo-600/5 transition-colors duration-500"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Security;
