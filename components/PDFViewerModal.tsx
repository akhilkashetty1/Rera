"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Download } from "lucide-react";

interface PDFViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfUrl: string | null;
    title: string | null;
}

export default function PDFViewerModal({ isOpen, onClose, pdfUrl, title }: PDFViewerModalProps) {
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
                                    <p className="text-[10px] text-gold-400 uppercase font-bold tracking-widest">
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
                        <div className="flex-1 bg-gray-100 relative overflow-hidden">
                            <iframe
                                src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                                className="w-full h-full border-none"
                                title="PDF Viewer"
                            />
                        </div>

                        {/* Footer / Status Bar */}
                        <div className="bg-emerald-900/5 px-6 py-3 flex items-center justify-center border-t border-emerald-900/10">
                            <p className="text-[10px] text-emerald-950/60 font-bold uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Secured & Verified Compliance
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
