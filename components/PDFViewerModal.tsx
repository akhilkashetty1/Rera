"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download, Loader2 } from "lucide-react";

interface PDFViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string | null;
    title: string | null;
}

export default function PDFViewerModal({ isOpen, onClose, pdfUrl, title }: PDFViewerModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state when PDF changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
        }
    }, [pdfUrl, isOpen]);

    if (!pdfUrl) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-emerald-950/90 backdrop-blur-md"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-emerald-950 px-6 py-4 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-4">
                                <div className="hidden sm:flex w-10 h-10 rounded-full bg-gold-400 items-center justify-center text-emerald-950">
                                    <ExternalLink size={18} />
                                </div>
                                <div>
                                    <h3 className="text-white font-serif font-bold tracking-wide">
                                        {title || "RERA Certificate"}
                                    </h3>
                                    <p className="text-[10px] text-gold-400 uppercase font-bold tracking-widest text-left">
                                        Official Compliance Document
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <a
                                    href={pdfUrl}
                                    download
                                    className="p-2 text-white/60 hover:text-gold-400 transition-colors"
                                    title="Download Certificate"
                                >
                                    <Download size={20} />
                                </a>
                                <button
                                    onClick={onClose}
                                    className="p-2 text-white/60 hover:text-gold-400 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Body */}
                        <div className="flex-1 bg-gray-100 relative overflow-hidden flex items-center justify-center">
                            {/* Loader */}
                            <AnimatePresence>
                                {isLoading && (
                                    <motion.div
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center text-emerald-950 p-6"
                                    >
                                        <div className="relative mb-8">
                                            {/* Luxury Spinning Ring */}
                                            <div className="w-24 h-24 rounded-full border-[3px] border-emerald-900/5 border-t-gold-400 animate-spin" />
                                            {/* Inner Static Ring */}
                                            <div className="absolute inset-0 w-24 h-24 rounded-full border border-gold-400/20" />
                                            {/* Centered Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-12 h-12 rounded-full bg-emerald-950 flex items-center justify-center text-gold-400 shadow-xl">
                                                    <Loader2 className="w-6 h-6 animate-pulse" />
                                                </div>
                                            </div>
                                        </div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                            className="text-center"
                                        >
                                            <h4 className="text-xl md:text-2xl font-serif font-bold mb-2">
                                                Bringing up certificate for you
                                            </h4>
                                            <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-600 opacity-70">
                                                Verifying Compliance Records
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <iframe
                                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                                className={`w-full h-full border-none transition-opacity duration-700 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                                title="PDF Viewer"
                                onLoad={() => setIsLoading(false)}
                            />
                        </div>

                        {/* Footer / Status Bar */}
                        <div className="bg-emerald-900/5 px-6 py-3 flex items-center justify-center border-t border-emerald-900/10">
                            <p className="text-[10px] text-emerald-950/60 font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${isLoading ? 'bg-gold-400 animate-bounce' : 'bg-emerald-500 animate-pulse'}`} />
                                {isLoading ? 'Requesting Secure Server...' : 'Secured & Verified Compliance'}
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
