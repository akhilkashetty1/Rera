"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ContactCollageHero from "@/components/ContactCollageHero";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-white">
            <ContactCollageHero />

            {/* Contact Form Section */}
            <ContactForm />

            {/* Map Section */}
            <MapSection />

            {/* Footer */}
            <Footer />
        </main>
    );
}
