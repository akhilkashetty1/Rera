"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PDFViewerModal from "./PDFViewerModal";

const PROJECTS = [
    {
        id: 1,
        title: "Prema Enclave",
        promoter: "Aakaarinfra Enterprises Pvt Ltd",
        location: "Bangalore, KA",
        approvalDays: "10 Days",
        applied: "23-12-2025",
        approved: "02-01-2026",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
        type: "Residential Apartments",
        certificateUrl: "/certificates/prema-enclave.pdf"
    },
    {
        id: 2,
        title: "Ventara Residences",
        promoter: "Amberstone Properties",
        location: "Bangalore, KA",
        approvalDays: "24 Days",
        applied: "11-11-2024",
        approved: "05-12-2024",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        type: "Luxury Living",
        certificateUrl: "/certificates/ventara-residences.pdf"
    },
    {
        id: 3,
        title: "NVG Rakshak",
        promoter: "At Homes Enterprises",
        location: "Bangalore, KA",
        approvalDays: "112 Days",
        applied: "19-06-2024",
        approved: "09-10-2024",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
        type: "Premium Residential",
        certificateUrl: "/certificates/nvg-rakshak.pdf"
    },
    {
        id: 4,
        title: "Reflections 66",
        promoter: "House of Colors Developers Pvt Ltd",
        location: "Bangalore, KA",
        approvalDays: "15 Days",
        applied: "18-12-2025",
        approved: "02-01-2026",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        type: "Modern Apartments",
        certificateUrl: "/certificates/reflections-66.pdf"
    },
    {
        id: 5,
        title: "Jeya Green Horizon",
        promoter: "Jeya Developers",
        location: "Bangalore, KA",
        approvalDays: "12 Days",
        applied: "09-01-2026",
        approved: "21-01-2026",
        image: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg",
        type: "Sustainable Housing",
        certificateUrl: "/certificates/jeya-green-horizon.pdf"
    },
    {
        id: 6,
        title: "Amberstone Illumina",
        promoter: "Srivari Dwellings",
        location: "Bangalore, KA",
        approvalDays: "11 Days",
        applied: "05-09-2025",
        approved: "16-09-2025",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
        type: "Boutique Homes",
        certificateUrl: "/certificates/amberstone-illumina.pdf"
    },
    {
        id: 7,
        title: "Amberstone Elanza",
        promoter: "Srivari Ventures",
        location: "Bangalore, KA",
        approvalDays: "13 Days",
        applied: "05-09-2025",
        approved: "18-09-2025",
        image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
        type: "Premium Residences",
        certificateUrl: "/certificates/amberstone-elanza.pdf"
    }
];

const TABS = ["All Projects"];

export default function ProjectCarousel() {
    const [activeTab, setActiveTab] = useState("All Projects");
    const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
    const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (pdfUrl: string, title: string) => {
        setSelectedPdf(pdfUrl);
        setSelectedTitle(title);
        setIsModalOpen(true);
    };

    return (
        <section id="projects" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-400 via-transparent to-transparent opacity-20" />
            </div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <motion.h4
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-gold-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4"
                        >
                            Success Stories
                        </motion.h4>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-serif font-bold leading-tight"
                        >
                            Speeding Up <span className="text-gold-400">RERA Compliance</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            <div className="pl-6 md:pl-0">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={35}
                    slidesPerView={1.2}
                    breakpoints={{
                        640: { slidesPerView: 2.2 },
                        1024: { slidesPerView: 3.5 },
                    }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    loop={true}
                    className="pb-20"
                >
                    {PROJECTS.map(project => (
                        <SwiperSlide key={project.id}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative h-[550px] w-full overflow-hidden rounded-[40px] border border-white/10 bg-emerald-900/20"
                            >
                                {/* Image with subtle zoom */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 grayscale-[30%] group-hover:grayscale-0 group-hover:opacity-100"
                                />

                                {/* Luxury Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-emerald-950/95"></div>
                                <div className="absolute inset-0 border-[10px] border-emerald-950/20 pointer-events-none rounded-[40px] group-hover:border-gold-400/10 transition-colors duration-500"></div>

                                {/* Approval Badge */}
                                <div className="absolute top-8 right-8 z-20">
                                    <div className="flex flex-col items-center justify-center w-20 h-20 bg-gold-400 rounded-full shadow-2xl transform group-hover:rotate-[15deg] transition-transform duration-500">
                                        <span className="text-[10px] text-emerald-950 font-bold uppercase tracking-tighter opacity-60">Approved</span>
                                        <span className="text-lg text-emerald-950 font-serif font-bold leading-none">{project.approvalDays.split(' ')[0]}</span>
                                        <span className="text-[10px] text-emerald-950 font-bold uppercase tracking-tighter opacity-60">Days</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-10 z-20">
                                    <motion.div className="md:translate-y-6 md:group-hover:translate-y-0 translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="w-6 h-px bg-gold-400" />
                                            <span className="text-gold-400 text-[10px] font-bold uppercase tracking-widest">
                                                {project.promoter}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                                            {project.title}
                                        </h3>

                                        <div className="flex items-center text-gray-400 text-xs mb-6 font-light uppercase tracking-widest">
                                            <MapPin className="w-3 h-3 mr-2 text-gold-400" />
                                            {project.location}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-white/10 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity duration-500">
                                            <div>
                                                <p className="text-[8px] text-gold-400/60 uppercase font-bold mb-1">Applied</p>
                                                <p className="text-xs text-white/80 font-serif">{project.applied}</p>
                                            </div>
                                            <div>
                                                <p className="text-[8px] text-gold-400/60 uppercase font-bold mb-1">Approved</p>
                                                <p className="text-xs text-white/80 font-serif">{project.approved}</p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => openModal(project.certificateUrl, project.title)}
                                            className="w-full flex items-center justify-center py-4 rounded-xl border border-gold-400/40 text-gold-400 text-[10px] font-bold uppercase tracking-[0.2em] gap-3 bg-white/5 hover:bg-gold-400 hover:text-emerald-950 transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 opacity-100"
                                        >
                                            View RERA Certificate <ArrowRight className="w-3 h-3" />
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <PDFViewerModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                pdfUrl={selectedPdf}
                title={selectedTitle}
            />
        </section>
    );
}
