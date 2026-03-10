"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import LeadForm from "./LeadForm";
import Footer from "./Footer";
import FloatingContact from "./FloatingContact";

interface ServiceProps {
    data: {
        title: string;
        subtitle: string;
        heroImage: string;
        knowMore: { id: string; title: string; description: string }[];
        process: { step: number; title: string; description: string }[];
    };
}

export default function ServiceTemplate({ data }: ServiceProps) {
    return (
        <main className="min-h-screen bg-white overflow-x-hidden">
            {/* Luxury Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden bg-emerald-950/20">
                <div className="absolute inset-0 z-0">
                    <img
                        src={data.heroImage}
                        alt={data.title}
                        className="h-full w-full object-cover opacity-60 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/40 via-transparent to-white" />
                </div>

                <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pt-20">
                    <div className="max-w-4xl">
                        {/* Breadcrumbs */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-2 text-emerald-900 text-[10px] uppercase tracking-[0.3em] font-bold mb-6"
                        >
                            <span>Home</span>
                            <ChevronRight size={10} />
                            <span>RERA Services</span>
                            <ChevronRight size={10} />
                            <span className="text-emerald-950">{data.title}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-serif font-bold text-emerald-950 mb-8 leading-tight"
                        >
                            {data.title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed mb-12 border-l-2 border-gold-400 pl-6 font-light italic"
                        >
                            "{data.subtitle}"
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            onClick={() => window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
                            className="group flex items-center gap-4 text-emerald-950"
                        >
                            <div className="w-12 h-12 rounded-full border border-gold-400 flex items-center justify-center group-hover:bg-gold-400 transition-all duration-300">
                                <ArrowDown className="text-gold-400 group-hover:text-emerald-950 transition-colors" size={20} />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-900">Explore More</span>
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Local Expertise Section */}
            <section className="py-16 bg-white border-y border-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-md">
                            <h4 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">Our Presence</h4>
                            <h2 className="text-3xl font-serif font-bold text-emerald-950 mb-6">Local Expertise Across Southern India</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We provide specialized RERA consulting across major southern states, ensuring compliance with state-specific rules and authorities.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8">
                            {['KARNATAKA', 'ANDHRA PRADESH', 'TELANGANA'].map((state) => (
                                <div key={state} className="px-8 py-4 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100 flex flex-col items-center group hover:bg-emerald-950 transition-colors duration-300">
                                    <span className="text-[10px] font-bold text-emerald-950 tracking-widest group-hover:text-white">{state}</span>
                                    <div className="w-8 h-px bg-gold-400 mt-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Need to Know Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        <div className="lg:w-1/2">
                            <span className="text-sm font-serif text-gray-400 mb-4 block">02/03</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-8">What you need to know?</h2>
                            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                                <p>
                                    At RERA Consultants, we ensure that every client is well-informed about the statutory requirements.
                                    Understanding the fine print of RERA regulations is crucial to maintaining a compliant real estate portfolio.
                                </p>
                                <p>
                                    Our experts break down complex legal jargon into actionable insights, helping you navigate the regulatory landscape with ease.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-8">
                            {data.knowMore.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="p-8 bg-white shadow-sm border border-gray-100 rounded-xl flex gap-6 group hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-400 transition-colors">
                                        <CheckCircle2 size={24} className="text-emerald-950" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif font-bold text-emerald-950 mb-2">{item.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-Step Process Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <h4 className="text-gold-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">The Engagement</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">Our {data.process.length}-Step {data.title} Process</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {data.process.map((step, idx) => (
                            <div key={step.step} className="relative group text-center lg:text-left">
                                <div className="mb-8 relative inline-block">
                                    <div className="w-20 h-20 rounded-2xl bg-emerald-950 flex items-center justify-center text-gold-400 font-serif text-3xl font-bold group-hover:rotate-6 transition-transform">
                                        {step.step}
                                    </div>
                                    {idx < data.process.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-10 w-8 h-px bg-gray-200" />
                                    )}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-emerald-950 mb-4">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Branded Inquiry CTA Section */}
            <section className="py-24 bg-emerald-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-emerald-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* CTA Text */}
                            <div className="p-12 md:p-20 bg-emerald-950 text-white flex flex-col justify-center relative overflow-hidden">
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-900/30 rounded-full -mr-32 -mt-32" />
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold-400/10 rounded-full -ml-24 -mb-24" />

                                <div className="relative z-10">
                                    <h4 className="text-gold-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-6">Take Action</h4>
                                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                                        Don't Let Regulations Delay Your Project Launch.
                                    </h2>

                                    <ul className="space-y-6 mb-12">
                                        {['Zero Compliance Errors', 'Dedicated Relationship Manager', 'Faster RERA Number Issuance'].map(item => (
                                            <li key={item} className="flex items-center gap-4">
                                                <div className="w-5 h-5 rounded-full bg-gold-400 flex items-center justify-center text-emerald-950 flex-shrink-0">
                                                    <CheckCircle2 size={12} />
                                                </div>
                                                <span className="text-white font-bold uppercase tracking-widest text-[11px]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-8 border-t border-white/10">
                                        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-4">Call our experts</p>
                                        <div className="flex flex-wrap items-center gap-6">
                                            <a href="tel:+917795679359" className="text-3xl font-serif font-bold text-white hover:text-gold-400 transition-colors">
                                                +91 77956 79359
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Lead Form */}
                            <div className="p-12 md:p-20 bg-white">
                                <h3 className="text-3xl font-serif font-bold text-emerald-950 mb-2">Get in Touch</h3>
                                <p className="text-gray-500 text-sm mb-10">Schedule a free consultation with our RERA experts today.</p>
                                <LeadForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </main>
    );
}
