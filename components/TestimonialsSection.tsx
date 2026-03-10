"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Aakaarinfra Enterprises",
        title: "Managing Director",
        project: "Prema Enclave",
        quote: "RERA Consultants by Pooja Gowda M & Associates streamlined our entire registration process. Getting Prema Enclave approved in just 10 days was beyond our collective expectations for such a complex filing.",
        image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    {
        id: 2,
        name: "Amberstone Properties",
        title: "CEO",
        project: "Ventara Residences",
        quote: "Their expertise in Section 4 compliance and audit management is unparalleled. We've partnered with them for multiple luxury projects, and their attention to regulatory detail is truly remarkable.",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    },
    {
        id: 3,
        name: "Jeya Developers",
        title: "Principal Architect",
        project: "Jeya Green Horizon",
        quote: "Navigating RERA for sustainable housing projects required specific technical nuances. The team handled it with precision, securing our approval for Green Horizon in record time while maintaining absolute transparency.",
        image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Success Stories</h3>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">Happy Customers</h2>
            </div>

            <div className="container mx-auto px-6">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={40}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="pb-16 testimonials-swiper"
                >
                    {TESTIMONIALS.map((item) => (
                        <SwiperSlide key={item.id} className="h-full">
                            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                                <Quote className="absolute top-6 right-6 text-gold-200 w-10 h-10 group-hover:text-gold-400 transition-colors" />

                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-gold-400"
                                    />
                                    <div>
                                        <h4 className="font-serif font-bold text-lg text-emerald-950">{item.name}</h4>
                                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-1">{item.title}</p>
                                        <span className="text-[10px] text-gold-500 font-bold uppercase tracking-wider">{item.project}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 italic leading-relaxed flex-grow">
                                    "{item.quote}"
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
          .testimonials-swiper .swiper-pagination-bullet { return }
          .testimonials-swiper .swiper-pagination-bullet-active { background-color: #D4AF37; }
       `}</style>
        </section>
    );
}
