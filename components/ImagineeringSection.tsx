"use client";

import { motion } from "framer-motion";

export default function ImagineeringSection() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/2 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-black font-serif text-emerald-950 leading-none mb-8"
                        >
                            IMAGINEERING <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                THE FUTURE
                            </span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans"
                        >
                            <p>
                                At RERA Consultants, we believe that true luxury lies in the details.
                                <span className="font-bold text-emerald-900"> &ldquo;Imagineering&rdquo;</span> is our core philosophy&mdash;a seamless blend of
                                unbound imagination and precise engineering.
                            </p>
                            <p>
                                We don&apos;t just build structures; we craft ecosystems where nature and
                                architecture coexist in perfect harmony. Every project is a testament
                                to our commitment to innovation, sustainability, and the art of fine living.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-10 p-6 border-l-4 border-gold-400 bg-gray-50 italic text-gray-700"
                        >
                            &ldquo;We build dreams that last a lifetime, ensuring every square foot resonates with passion and purpose.&rdquo;
                        </motion.div>
                    </div>

                    {/* Staggered Images */}
                    <div className="lg:w-1/2 relative mt-12 lg:mt-0">
                        <div className="relative h-[600px] w-full">
                            {/* Large Vertical Image */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="absolute top-0 right-0 w-3/4 h-5/6 z-10 shadow-2xl rounded-sm overflow-hidden"
                            >
                                <img
                                    src="https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg"
                                    alt="Modern Architecture"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Small Overlapping Image */}
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="absolute bottom-10 left-0 w-3/5 h-2/5 z-20 shadow-2xl border-8 border-white rounded-sm overflow-hidden"
                            >
                                <img
                                    src="https://images.pexels.com/photos/8134849/pexels-photo-8134849.jpeg"
                                    alt="Interior Detail"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Decorative Element */}
                            <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-gold-400 opacity-50 z-0"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
