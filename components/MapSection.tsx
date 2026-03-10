"use client";

import { motion } from "framer-motion";

export default function MapSection() {
    return (
        <section className="w-full h-[500px] relative bg-gray-200">
            {/* Google Map Iframe - Pointing to JP Nagar, Bangalore */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.218556636735!2d77.58043621744384!3d12.936306300000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ea1c5d63f7%3A0x5825bc5ed7f44d85!2s2nd%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1711234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(0.8)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0"
            ></iframe>

            {/* Location Overlay */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-10 left-6 md:left-20 z-10 bg-emerald-950 p-8 text-white shadow-2xl max-w-sm border-l-4 border-gold-400"
            >
                <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-1 text-sm">Location</h3>
                <h2 className="text-2xl font-serif font-bold mb-4">Reach Us</h2>
                <p className="text-gray-300 mb-2 font-sans text-sm leading-relaxed">
                    1st floor, No.29, Shop Street,<br />
                    9th Cross, 8th Main Rd, 2nd Block,<br />
                    Jayanagar, Bengaluru - 560011
                </p>
                <a
                    href="https://maps.google.com"
                    target="_blank"
                    className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-gold-400 border-b border-gold-400 pb-1 hover:text-white hover:border-white transition-colors"
                >
                    Get Directions
                </a>
            </motion.div>
        </section>
    );
}
