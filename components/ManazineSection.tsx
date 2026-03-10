"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const POSTS = [
    {
        id: 1,
        title: "The Future of Luxury Living in Bangalore",
        category: "Market Trends",
        date: "Oct 12, 2024",
        image: "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg"
    },
    {
        id: 2,
        title: "Sustainability: Why MORS is the New Standard",
        category: "Green Living",
        date: "Sep 28, 2024",
        image: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg"
    },
    {
        id: 3,
        title: "Home Decor Trends for 2025",
        category: "Interiors",
        date: "Sep 15, 2024",
        image: "https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg"
    }
];

export default function ManazineSection() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h3 className="text-gold-400 font-bold tracking-widest uppercase mb-2">Our Blog</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-emerald-950">Manazine</h2>
                    </div>
                    <button className="flex items-center gap-2 text-emerald-950 font-bold uppercase tracking-widest hover:text-gold-400 transition-colors">
                        View All Posts <ArrowRight size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {POSTS.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="overflow-hidden rounded-lg mb-6 shadow-md h-64">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="flex gap-4 mb-3 text-xs font-bold uppercase tracking-wider">
                                <span className="text-gold-400">{post.category}</span>
                                <span className="text-gray-400">{post.date}</span>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-emerald-950 group-hover:text-gold-400 transition-colors leading-tight">
                                {post.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
