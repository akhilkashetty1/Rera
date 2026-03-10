"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MegaMenu from "./MegaMenu";
import { SERVICES_DATA } from "@/lib/services-data";
import { useModal } from "@/context/ModalContext";

const NAV_LINKS = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about-us" },
    { name: "RERA SERVICES", href: "#", hasDropdown: true, category: "rera" as const },
    { name: "CONSULTING SERVICES", href: "#", hasDropdown: true, category: "consulting" as const },
    { name: "PROJECTS", href: "/#projects" },
    { name: "CONTACT", href: "/contact-us" },
];

export default function Header() {
    const { openEnquiryModal } = useModal();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState<"rera" | "consulting" | null>(null);
    const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMegaMenu = (category: "rera" | "consulting") => {
        if (activeCategory === category && isMegaMenuOpen) {
            setIsMegaMenuOpen(false);
        } else {
            setActiveCategory(category);
            setIsMegaMenuOpen(true);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-5"
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 -ml-4 md:-ml-10">
                        <div className="flex items-center gap-3">
                            {/* Logo Image */}
                            <img
                                src="/rera-logo.png"
                                alt="RERA Consultants Logo"
                                className="h-12 w-auto object-contain"
                            />

                            {/* Text */}
                            <div className="flex flex-col">
                                <span className="text-sm md:text-base font-serif font-bold tracking-widest leading-tight text-white uppercase">
                                    RERA CONSULTANTS
                                </span>
                                <span className="text-[7px] md:text-[8px] text-white/80 font-sans font-light uppercase tracking-[0.25em] whitespace-nowrap">
                                    By Pooja Gowda M & Associates
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <div
                                key={link.name}
                                className="relative py-4 cursor-pointer"
                                onClick={() => {
                                    if (link.hasDropdown) {
                                        toggleMegaMenu(link.category!);
                                    }
                                }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={(e) => link.hasDropdown && e.preventDefault()}
                                    className="text-sm font-sans font-bold text-white hover:text-gold-400 tracking-widest transition-colors flex items-center gap-1"
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${isMegaMenuOpen && activeCategory === link.category ? 'rotate-180' : ''}`} />}
                                </Link>
                            </div>
                        ))}
                        <button
                            onClick={openEnquiryModal}
                            className="px-6 py-2 bg-gold-400 text-emerald-950 font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all ml-4 shadow-lg shadow-gold-400/20 rounded-sm"
                        >
                            Enquire Now
                        </button>
                    </nav>

                    {/* Mega Menu Integration */}
                    <div className="absolute top-full left-0 w-full">
                        <AnimatePresence>
                            {isMegaMenuOpen && activeCategory && (
                                <MegaMenu
                                    isOpen={true}
                                    onClose={() => setIsMegaMenuOpen(false)}
                                    category={activeCategory}
                                />
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center space-y-8 md:hidden overflow-y-auto pt-24 pb-12"
                    >
                        {NAV_LINKS.map((link) => (
                            <div key={link.name} className="w-full px-12">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setMobileOpenSection(mobileOpenSection === link.name ? null : link.name)}
                                            className="text-2xl font-serif font-bold text-white hover:text-gold-400 tracking-widest flex items-center justify-between w-full"
                                        >
                                            {link.name} <ChevronDown size={20} className={`text-gold-400 transition-transform ${mobileOpenSection === link.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {mobileOpenSection === link.name && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden flex flex-col space-y-4 pt-4 pl-4"
                                                >
                                                    {Object.entries(SERVICES_DATA)
                                                        .filter(([_, service]) => (service as any).category === link.category)
                                                        .map(([slug, service]: [string, any]) => (
                                                            <Link
                                                                key={slug}
                                                                href={`/${slug}`}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="text-lg font-sans font-medium text-gray-300 hover:text-gold-400 transition-colors"
                                                            >
                                                                {service.title}
                                                            </Link>
                                                        ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-2xl font-serif font-bold text-white hover:text-gold-400 tracking-widest flex items-center justify-between w-full"
                                    >
                                        {link.name} <ChevronRight size={20} className="text-gold-400" />
                                    </Link>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
