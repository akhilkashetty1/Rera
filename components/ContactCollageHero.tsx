"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const COLLAGE_IMAGES = [
    { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg", alt: "Team Collaboration", span: "row-span-2 col-span-2" },
    { src: "https://images.pexels.com/photos/159353/construction-site-build-construction-worker-159353.jpeg", alt: "Construction Site", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg", alt: "Legal Consulting", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/3771097/pexels-photo-3771097.jpeg", alt: "Documents", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg", alt: "Architect Plans", span: "row-span-2 col-span-1" },
    { src: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg", alt: "Site Inspection", span: "row-span-1 col-span-2" },
    { src: "https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg", alt: "Office Meeting", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg", alt: "Urban Development", span: "row-span-2 col-span-1" },
    { src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg", alt: "Premium Apartment", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg", alt: "Architecture Detail", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/7070/space-desk-office-workspace.jpg", alt: "Professional Workspace", span: "row-span-1 col-span-1" },
    { src: "https://images.pexels.com/photos/159832/law-library-court-the-legal-system-books-159832.jpeg", alt: "Law Library", span: "row-span-1 col-span-1" },
];

export default function ContactCollageHero() {
    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-emerald-950">
            {/* Collage Grid */}
            <div className="absolute inset-0 z-0 grid grid-cols-4 md:grid-cols-6 grid-rows-4 md:grid-rows-3 gap-2 p-2 opacity-50">
                {COLLAGE_IMAGES.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05, duration: 0.8 }}
                        className={`relative overflow-hidden rounded-xl border border-white/5 ${img.span}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="h-full w-full object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-700 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-emerald-950/20 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-emerald-950/60 z-10" />

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-px bg-gold-400" />
                        <span className="text-gold-400 font-bold uppercase tracking-[0.4em] text-[10px]">Your Compliance Partners</span>
                        <div className="w-12 h-px bg-gold-400" />
                    </div>

                    <h1 className="text-4xl md:text-7xl font-serif font-bold tracking-tight text-white mb-8 leading-[1.1]">
                        Seamless Integration of <br />
                        <span className="text-gold-400">Legal & Construction</span> Expertise
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Curating excellence in RERA compliance through a collaborative fusion of specialized consulting and site-level management.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="absolute bottom-12 cursor-pointer"
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.75, behavior: 'smooth' })}
                >
                    <div className="flex flex-col items-center animate-bounce gap-3">
                        <span className="text-[10px] tracking-[0.3em] text-gold-200 font-bold">DISCOVER</span>
                        <div className="w-10 h-10 border border-gold-400/30 rounded-full flex items-center justify-center">
                            <ArrowDown size={14} className="text-gold-400" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
