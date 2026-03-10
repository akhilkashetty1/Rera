"use client";

import { motion } from "framer-motion";
import { Quote, Trophy, Users, ShieldCheck } from "lucide-react";

const LEADER = {
    name: "Pooja Gowda M",
    title: "Chairperson & Managing Director",
    bio: "A visionary leader who has quickly redefined the standard of RERA consulting in Bangalore through a unique 'Imagineering' philosophy. Her focus remains on delivering transparent, efficient, and luxury-grade compliance solutions for modern developers.",
    experience: "5+ Years",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
};

const STATS = [
    { icon: <Trophy size={18} />, label: "Excellence", value: "5+ Years" },
    { icon: <Users size={18} />, label: "Developer Trust", value: "500+" },
    { icon: <ShieldCheck size={18} />, label: "Compliance Rate", value: "100%" }
];

export default function LeadershipTabs() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50/30 -skew-x-12 translate-x-32 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Visual Pillar - Left Side (Asymmetric) */}
                    <div className="w-full lg:w-5/12 relative">
                        {/* Dramatic Image Frame */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 border border-gold-400/30 rounded-2xl transform rotate-3" />
                            <div className="absolute -inset-4 border border-emerald-900/10 rounded-2xl transform -rotate-2" />

                            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl z-10">
                                <motion.img
                                    initial={{ scale: 1.2 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 2 }}
                                    src={LEADER.image}
                                    alt={LEADER.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />

                                {/* Floating Experience Badge */}
                                <div className="absolute bottom-8 left-8 bg-gold-400 p-6 rounded-tr-[40px] shadow-2xl">
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-950 opacity-70">Experience</p>
                                    <p className="text-3xl font-serif font-bold text-emerald-950">{LEADER.experience}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Gold Seal / Signature Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, rotate: -20 }}
                            whileInView={{ opacity: 1, rotate: 0 }}
                            className="absolute -top-12 -left-12 w-32 h-32 hidden xl:flex items-center justify-center"
                        >
                            <div className="w-full h-full rounded-full border-2 border-dashed border-gold-400/40 flex items-center justify-center p-2">
                                <div className="w-full h-full rounded-full bg-gold-400 flex flex-col items-center justify-center shadow-lg">
                                    <span className="text-emerald-950 font-serif font-bold text-2xl italic leading-none">PG</span>
                                    <span className="text-[8px] text-emerald-950 font-bold uppercase tracking-tighter">Associates</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Content Column - Right Side */}
                    <div className="w-full lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-px bg-gold-400" />
                                <span className="text-gold-600 font-bold uppercase tracking-[0.3em] text-[11px]">Leadership Spotlight</span>
                            </div>

                            <h2 className="text-5xl md:text-7xl font-serif font-bold text-emerald-950 mb-4 leading-tight">
                                {LEADER.name}
                            </h2>
                            <p className="text-xl text-emerald-800 font-medium mb-12 tracking-wide font-sans italic opacity-80">
                                {LEADER.title}
                            </p>

                            <div className="relative mb-12">
                                <Quote className="absolute -top-8 -left-8 text-gold-400/20 w-16 h-16" />
                                <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light relative z-10">
                                    "{LEADER.bio}"
                                </p>
                            </div>

                            {/* Tactical Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                                {STATS.map((stat, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="p-6 rounded-2xl bg-emerald-50 border border-emerald-100 hover:border-gold-400/50 transition-colors group"
                                    >
                                        <div className="text-gold-600 mb-3 group-hover:scale-110 transition-transform">
                                            {stat.icon}
                                        </div>
                                        <p className="text-2xl font-serif font-bold text-emerald-950 mb-1">{stat.value}</p>
                                        <p className="text-[10px] uppercase font-bold tracking-widest text-emerald-800/60">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                                Strategically curating RERA solutions that bridge the gap between regulatory intent and developer execution. Her approach ensures that every project under Pooja Gowda M & Associates receives meticulous attention to detail and a commitment to absolute compliance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
