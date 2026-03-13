"use client";

import { motion } from "framer-motion";

const STATS = [
    { label: "Years of Experience", value: "8+" },
    { label: "Ongoing Projects", value: "25+" },
    { label: "Happy Customers", value: "500+" },
    { label: "Compliance Audits", value: "150+" },
];

export default function StatsCounter() {
    return (
        <section className="bg-gold-400 py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-2">
                                {stat.value}
                            </span>
                            <span className="text-sm uppercase tracking-widest text-emerald-900 font-sans font-medium">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
