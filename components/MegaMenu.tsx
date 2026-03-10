"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Phone } from "lucide-react";
import { SERVICES_DATA } from "@/lib/services-data";

export default function MegaMenu({ isOpen, onClose, category }: { isOpen: boolean; onClose: () => void; category: "rera" | "consulting" }) {
    const filteredServices = Object.entries(SERVICES_DATA).filter(([_, service]) => service.category === category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
            exit={{ opacity: 0, y: 10 }}
            className={`absolute top-full left-0 w-full z-40 bg-white shadow-2xl overflow-hidden pointer-events-auto ${isOpen ? "" : "hidden"}`}
        >
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Links Section */}
                    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                        {filteredServices.map(([slug, service]) => (
                            <Link
                                key={slug}
                                href={`/${slug}`}
                                onClick={onClose}
                                className="group flex items-start gap-4 p-4 rounded-lg hover:bg-emerald-50 transition-all duration-300"
                            >
                                <div className="mt-1 w-8 h-8 rounded-full bg-emerald-950 flex items-center justify-center text-gold-400 group-hover:bg-gold-400 group-hover:text-emerald-950 transition-colors">
                                    <ChevronRight size={16} />
                                </div>
                                <div>
                                    <h4 className="text-emerald-950 font-bold tracking-wide uppercase text-sm mb-1 group-hover:text-gold-500 transition-colors">
                                        {service.title}
                                    </h4>
                                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                                        {service.subtitle}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Featured Image Section */}
                    <div className="md:col-span-4 hidden md:block">
                        <div className="relative group overflow-hidden rounded-xl h-full min-h-[300px]">
                            <img
                                src={category === "rera"
                                    ? "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg"
                                    : "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"}
                                alt={category === "rera" ? "RERA Expert Guidance" : "Strategic Consultation"}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-emerald-950/40 group-hover:bg-emerald-950/20 transition-colors" />
                            <div className="absolute bottom-6 left-6 right-6 text-white">
                                <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest block mb-1">
                                    {category === "rera" ? "Regulatory Compliance" : "Expert Strategy"}
                                </span>
                                <h3 className="text-xl font-serif font-bold">
                                    {category === "rera"
                                        ? "Fast-track your RERA approvals with our experts."
                                        : "Strategic legal and financial advice for developers."}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Bar */}
                <div className="mt-12 bg-emerald-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-100">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-emerald-950">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-emerald-950 font-sans text-sm font-medium">
                                Every project is unique — your RERA solution should be too.
                            </p>
                            <p className="text-gold-600 font-bold tracking-widest uppercase text-xs">Let's create one that fits perfectly.</p>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Talk to an expert</p>
                        <a href="tel:+917691030591" className="text-2xl md:text-3xl font-serif font-bold text-emerald-950 hover:text-gold-500 transition-colors">
                            +91 76910 30591
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
