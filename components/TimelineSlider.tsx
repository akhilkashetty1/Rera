"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const PROJECTS_TIMELINE = [
    {
        title: "Prema Enclave",
        promoter: "Aakaarinfra Enterprises",
        location: "Bangalore, KA",
        approvalDays: "10 Days",
        image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
        title: "Amberstone Illumina",
        promoter: "Srivari Dwellings",
        location: "Bangalore, KA",
        approvalDays: "11 Days",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
        title: "Jeya Green Horizon",
        promoter: "Jeya Developers",
        location: "Bangalore, KA",
        approvalDays: "12 Days",
        image: "https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg",
    },
    {
        title: "Amberstone Elanza",
        promoter: "Srivari Ventures",
        location: "Bangalore, KA",
        approvalDays: "13 Days",
        image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
    },
    {
        title: "Reflections 66",
        promoter: "House of Colors Developers",
        location: "Bangalore, KA",
        approvalDays: "15 Days",
        image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
        title: "Ventara Residences",
        promoter: "Amberstone Properties",
        location: "Bangalore, KA",
        approvalDays: "24 Days",
        image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
    },
    {
        title: "NVG Rakshak",
        promoter: "At Homes Enterprises",
        location: "Bangalore, KA",
        approvalDays: "112 Days",
        image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
];

export default function TimelineSlider() {
    return (
        <div className="container mx-auto px-6 relative py-12">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/20 -translate-y-1/2 hidden md:block z-0"></div>

            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-12 timeline-swiper"
            >
                {PROJECTS_TIMELINE.map((item, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="relative z-10 p-8 border border-gold-400/30 bg-emerald-900/50 backdrop-blur-sm rounded-lg hover:bg-emerald-800 transition-colors duration-300 group cursor-pointer"
                            whileHover={{ y: -10 }}
                        >
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gold-300 to-transparent opacity-20 absolute -top-4 right-4 group-hover:opacity-40 transition-opacity">
                                {item.approvalDays.split(' ')[0]}D
                            </div>

                            <div className="text-gold-400 font-bold text-2xl mb-1 font-serif">Approved in {item.approvalDays}</div>
                            <h4 className="text-lg text-white font-bold mb-1">{item.title}</h4>
                            <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">{item.promoter}</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Successfully obtained RERA compliance for this premium {item.location} project in record time.
                            </p>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Styles */}
            <style jsx global>{`
           .timeline-swiper .swiper-button-next, .timeline-swiper .swiper-button-prev {
              color: #D4AF37; 
           }
        `}</style>
        </div>
    );
}
