"use client";

import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";

export default function FloatingContact() {
    const { isEnquiryModalOpen, openEnquiryModal, closeEnquiryModal } = useModal();
    const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'Enquire Now Modal' })
            });

            if (response.ok) {
                alert("Thank you! Your inquiry has been sent to our consultants. We will get back to you shortly.");
                setFormData({ name: "", email: "", phone: "" });
                closeEnquiryModal();
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.error || 'Failed to send inquiry. Please try again later.'}`);
            }
        } catch (error) {
            console.error('Submission Error:', error);
            alert("Something went wrong. Please check your internet connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/917691030591"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="text-white w-8 h-8" />
            </a>

            {/* Enquire Now Sidebar Toggler - Vertical Desktop */}
            <button
                onClick={openEnquiryModal}
                className="fixed top-1/2 right-0 -translate-y-1/2 z-[100] bg-gold-400 text-emerald-950 font-bold uppercase text-[10px] tracking-[0.2em] py-6 px-1.5 rounded-l-xl shadow-2xl hover:bg-white hover:text-emerald-950 transition-all duration-300 hidden md:flex items-center justify-center border-l border-emerald-950 group"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
                <span className="group-hover:translate-x-1 transition-transform">Enquire Now</span>
            </button>

            {/* Mobile Enquire Button */}
            <div className="fixed bottom-0 left-0 w-full bg-emerald-950 p-2 z-40 md:hidden flex justify-around items-center border-t border-gold-400">
                <a href="tel:+917691030591" className="flex items-center gap-2 text-white text-sm font-bold uppercase">
                    <Phone size={16} className="text-gold-400" /> Call Now
                </a>
                <div className="h-6 w-px bg-gray-600"></div>
                <button
                    onClick={openEnquiryModal}
                    className="flex items-center gap-2 text-gold-400 text-sm font-bold uppercase"
                >
                    Enquire
                </button>
            </div>

            <AnimatePresence>
                {isEnquiryModalOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeEnquiryModal}
                            className="fixed inset-0 z-[110] bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[480px] z-[120] bg-white shadow-2xl flex flex-col"
                        >
                            <div className="relative h-full flex flex-col">
                                {/* Fixed Close Button with higher visibility */}
                                <button
                                    onClick={closeEnquiryModal}
                                    className="absolute top-8 right-8 z-[130] text-emerald-950 hover:text-gold-400 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full p-3 transition-all duration-300 border border-emerald-950/10 shadow-xl"
                                    aria-label="Close Enquiry Form"
                                >
                                    <X size={24} />
                                </button>

                                {/* Modal Header */}
                                <div className="bg-emerald-950 p-12 text-center text-white relative overflow-hidden shrink-0">
                                    <div className="relative z-10">
                                        <h3 className="text-gold-400 font-bold tracking-[0.4em] uppercase text-[10px] mb-4">Contact Our Experts</h3>
                                        <h2 className="text-4xl font-serif font-bold mb-2">Request Information</h2>
                                        <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-6"></div>
                                    </div>
                                    {/* Decorative UI Elements */}
                                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-emerald-900/40 rounded-full blur-3xl z-0"></div>
                                    <div className="absolute top-20 -left-10 w-24 h-24 bg-gold-400/5 rounded-full blur-xl z-0"></div>
                                </div>

                                <div className="p-10 md:p-14 flex-grow overflow-y-auto">
                                    <p className="text-gray-500 mb-10 text-center text-sm font-light leading-relaxed">
                                        Experience the luxury of seamless RERA compliance. Leave your details below and our lead consultants will reach out within 24 hours.
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="relative group">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-950/40 mb-1 transition-colors group-focus-within:text-gold-600">Full Name</label>
                                            <input
                                                type="text" required
                                                className="w-full border-b border-gray-200 py-3 text-emerald-950 focus:outline-none focus:border-gold-400 transition-colors placeholder-gray-300 bg-transparent"
                                                placeholder="Enter your name"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-950/40 mb-1 transition-colors group-focus-within:text-gold-600">Email Address</label>
                                            <input
                                                type="email" required
                                                className="w-full border-b border-gray-200 py-3 text-emerald-950 focus:outline-none focus:border-gold-400 transition-colors placeholder-gray-300 bg-transparent"
                                                placeholder="example@luxury.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-950/40 mb-1 transition-colors group-focus-within:text-gold-600">Mobile Number</label>
                                            <input
                                                type="tel" required
                                                className="w-full border-b border-gray-200 py-3 text-emerald-950 focus:outline-none focus:border-gold-400 transition-colors placeholder-gray-300 bg-transparent"
                                                placeholder="+91"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>

                                        <div className="pt-8">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-emerald-950 text-white py-5 rounded-lg font-bold uppercase tracking-[0.3em] text-[11px] hover:bg-gold-400 hover:text-emerald-950 transition-all duration-500 disabled:opacity-70 shadow-xl shadow-emerald-950/10 active:scale-[0.98]"
                                            >
                                                {isSubmitting ? "Processing..." : "Submit Inquiry"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
