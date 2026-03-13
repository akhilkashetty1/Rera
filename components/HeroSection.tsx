"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden bg-emerald-950 text-white">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/hero-poster.png"
                    onLoadedData={() => setVideoLoaded(true)}
                    className={`h-full w-full object-cover transition-opacity duration-1500 ${videoLoaded ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {mounted && (
                        <source
                            src="/homePage.mp4"
                            type="video/mp4"
                        />
                    )}
                </video>
                {/* Fallback dark overlay / backdrop */}
                {!videoLoaded && (
                    <div className="absolute inset-0 bg-emerald-950 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-gold-400/20 border-t-gold-400 rounded-full animate-spin" />
                    </div>
                )}
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                {/* Animated Logo / Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Logo Image */}
                    <motion.div
                        className="mb-8"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <img
                            src="/rera-logo.png"
                            alt="RERA Consultants Logo"
                            className="h-40 w-auto object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-wider text-gold-400 mb-4 drop-shadow-md">
                        RERA CONSULTANTS
                    </h1>
                    <p className="text-lg md:text-xl font-sans font-light tracking-widest text-gold-100 uppercase">
                        By Pooja Gowda M & Associates
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
                <span className="text-xs uppercase tracking-widest text-gold-200">Scroll Down</span>
                <div className="rounded-full border border-gold-400 p-2 text-gold-400">
                    <ArrowDown className="h-4 w-4" />
                </div>
            </motion.div>
        </section>
    );
}
