"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ImagineeringSection from "@/components/ImagineeringSection";
import LeadershipTabs from "@/components/LeadershipTabs";
import TimelineSlider from "@/components/TimelineSlider";
import AwardsGrid from "@/components/AwardsGrid";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden bg-black text-white">
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover opacity-50"
                    >
                        {/* Nature/Hummingbird theme as per reference */}
                        <source
                            src="/aboutPage.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                </div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-wide text-white uppercase max-w-4xl leading-tight"
                    >
                        Our Spaces Are Curated For The <span className="text-gold-400">Passionates</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute bottom-8 cursor-pointer"
                        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    >
                        <div className="flex flex-col items-center animate-bounce gap-2">
                            <span className="text-xs tracking-[0.2em] text-gold-200">SCROLL</span>
                            <ArrowDown className="text-gold-400" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <ImagineeringSection />

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 mb-12 text-center">
                    <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Leadership</h3>
                    <h2 className="text-4xl font-serif font-bold text-emerald-950">Board of Directors</h2>
                </div>
                <LeadershipTabs />
            </section>

            <section className="py-20 bg-emerald-950 text-white overflow-hidden">
                <div className="container mx-auto px-6 mb-12">
                    <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Success Stories</h3>
                    <h2 className="text-4xl font-serif font-bold text-white">Our Projects</h2>
                </div>
                <TimelineSlider />
            </section>

            <Footer />
        </main>
    );
}
