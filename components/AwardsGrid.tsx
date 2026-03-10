"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Star, ShieldCheck } from "lucide-react";

const AWARDS = [
    { id: 1, title: "Best Luxury Developer", year: "2023", org: "Real Estate Awards", icon: <Trophy size={40} /> },
    { id: 2, title: "Excellence in Design", year: "2022", org: "Architectural Digest", icon: <Award size={40} /> },
    { id: 3, title: "Most Trusted Builder", year: "2021", org: "Consumer Choice", icon: <ShieldCheck size={40} /> },
    { id: 4, title: "Green Building Award", year: "2020", org: "Sustainability Council", icon: <Star size={40} /> },
];

export default function AwardsGrid() {
    return (
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {AWARDS.map((award, index) => (
                    <motion.div
                        key={award.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-100 shadow-lg p-8 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 rounded-xl"
                    >
                        <div className="mb-6 p-4 bg-gold-50 rounded-full text-gold-500 group-hover:bg-gold-400 group-hover:text-emerald-950 transition-colors duration-300">
                            {award.icon}
                        </div>
                        <h4 className="text-xl font-serif font-bold text-emerald-950 mb-2">{award.title}</h4>
                        <p className="text-gray-500 text-sm mb-4">{award.org}</p>
                        <span className="inline-block px-4 py-1 bg-emerald-950 text-gold-400 text-xs font-bold rounded-full">
                            {award.year}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white border-2 border-emerald-950 text-emerald-950 font-bold uppercase tracking-widest hover:bg-emerald-950 hover:text-white transition-all duration-300">
                    Load More Awards
                </button>
            </div>
        </div>
    );
}
