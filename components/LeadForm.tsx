"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface LeadFormProps {
    className?: string;
}

export default function LeadForm({ className = "" }: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, source: 'Contact Page Form' })
            });

            if (response.ok) {
                alert("Thank you! Your inquiry has been sent to our consultants. We will get back to you shortly.");
                setFormData({ name: "", email: "", phone: "", message: "" });
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
        <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2">Your Name</label>
                <input
                    type="text"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gold-400 transition-colors text-emerald-950 placeholder-gray-400 font-sans"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2">Your Email</label>
                <input
                    type="email"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gold-400 transition-colors text-emerald-950 placeholder-gray-400 font-sans"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2">Phone Number</label>
                <input
                    type="tel"
                    required
                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gold-400 transition-colors text-emerald-950 placeholder-gray-400 font-sans"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-emerald-950 mb-2">Message</label>
                <textarea
                    rows={3}
                    className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-gold-400 transition-colors text-emerald-950 placeholder-gray-400 resize-none font-sans"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" required className="accent-gold-400" id="terms-lead" />
                <label htmlFor="terms-lead" className="text-[10px] text-gray-500 font-sans">
                    I authorize RERA Consultants to contact me via phone/email.
                </label>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 font-bold uppercase tracking-widest hover:bg-gold-400 hover:text-emerald-950 transition-all duration-300 disabled:opacity-50 text-xs"
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </button>
        </form>
    );
}
