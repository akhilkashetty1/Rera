"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Will use placeholder for now

export default function AboutSummary() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-gold-400 font-sans uppercase tracking-widest text-sm font-bold mb-2">
                            Who We Are
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-serif text-emerald-950 font-bold leading-tight">
                            A Legacy of <span className="italic text-gold-600">Compliance & Precision</span>
                        </h2>
                        <div className="w-20 h-1 bg-gold-400 my-6"></div>
                        <p className="text-gray-600 font-sans leading-relaxed text-lg">
                            RERA Consultants by Pooja Gowda M & Associates is dedicated to empowering developers and agents through expert regulatory guidance. With over
                            5 years of deep-rooted expertise, we specialize in navigating the complex RERA landscape to ensure your projects are registered, compliant, and market-ready.
                            Our mission is to provide surgical precision in compliance, protecting your investments and building institutional trust.
                        </p>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] w-full bg-gray-200 overflow-hidden"
                    >
                        {/* Image - Architectural Blueprint/Planning Context */}
                        <img
                            src="https://images.pexels.com/photos/3806749/pexels-photo-3806749.jpeg"
                            alt="Architectural Planning and RERA Compliance"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                        />

                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gold-400 p-4 hidden md:flex flex-col justify-center items-center text-center text-emerald-950 z-10 shadow-xl">
                            <span className="text-4xl font-serif font-bold display-block">5+</span>
                            <span className="text-xs uppercase tracking-widest font-sans mt-1">Years of Expertise</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
