"use client";

import { motion } from "framer-motion";

export default function ComplianceSection() {
    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-emerald-950 flex items-center justify-center text-center">
            {/* Background with Professional Aesthetic */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" // Professional meeting / documents
                    alt="RERA Compliance Excellence"
                    className="w-full h-full object-cover opacity-40 grayscale-[50%]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-950/40 to-emerald-950/90"></div>
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-gold-400 font-bold tracking-[0.3em] uppercase mb-6 text-sm md:text-base">Excellence in Compliance</h3>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                        Speed. Precision. <br /> <span className="text-gold-400 italic">RERA Approvals.</span>
                    </h2>
                    <p className="text-gray-200 text-lg md:text-xl leading-relaxed font-sans font-light mb-10 max-w-3xl mx-auto">
                        Your dedicated RERA consulting partners, specializing in fast-tracking compliance for luxury developers.
                        Our expertise ensures that every project meets regulatory standards with efficiency, integrity, and absolute transparency.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
