"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ContactCollageHero from "@/components/ContactCollageHero";
import ContactForm from "@/components/ContactForm";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact RERA Experts in Bangalore | Pooja Gowda M & Associates",
    description: "Connect with Bangalore's leading RERA consultants for expert project registration, agent licensing, and compliance audits. Located in Jayanagar, Bangalore.",
};

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
