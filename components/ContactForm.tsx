"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import LeadForm from "./LeadForm";

export default function ContactForm() {
    return (
        <section className="relative py-32 bg-emerald-950 overflow-hidden">
            {/* Abstract Background Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
                    alt="Abstract Luxury Architecture"
                    className="w-full h-full object-cover opacity-20 blur-sm scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-950 via-transparent to-emerald-950" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Floating Luxury Card */}
                    <div className="flex flex-col lg:flex-row bg-white rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/10 group">

                        {/* Info Panel - Deep Emerald */}
                        <div className="lg:w-5/12 bg-emerald-950 p-12 md:p-16 flex flex-col justify-between relative overflow-hidden">
                            {/* Decorative Gold Glow */}
                            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gold-400/10 rounded-full blur-[80px]" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="w-8 h-px bg-gold-400" />
                                    <span className="text-gold-400 font-bold uppercase tracking-[0.3em] text-[10px]">Concierge Services</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                                    Let's Begin <br /> Your <span className="text-gold-400 italic">Journey.</span>
                                </h2>
                                <p className="text-gray-300 text-sm leading-relaxed mb-12 max-w-sm">
                                    Our expert consultants are ready to guide you through the complexities of RERA compliance and luxury real estate management.
                                </p>

                                <div className="space-y-8">
                                    <ContactItem
                                        icon={<Phone className="text-gold-400" size={20} />}
                                        label="Call Us"
                                        value="+91 76910 30591 / 76910 70555"
                                    />
                                    <ContactItem
                                        icon={<Mail className="text-gold-400" size={20} />}
                                        label="Write to Us"
                                        value="info@rerabypooja.com"
                                    />
                                    <ContactItem
                                        icon={<MapPin className="text-gold-400" size={20} />}
                                        label="Visit Our Studio"
                                        value="Jayanagar 2nd Block, Bengaluru, KA"
                                    />
                                </div>
                            </div>

                            {/* Bottom Badge */}
                            <div className="mt-16 pt-8 border-t border-white/5 relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full border border-gold-400/30 flex items-center justify-center">
                                        <Globe className="text-gold-400" size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Global Reach</p>
                                        <p className="text-xs text-white">Serving Developers Pan India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Panel - Clean White */}
                        <div className="lg:w-7/12 bg-[#FBFBFA] p-12 md:p-16">
                            <div className="max-w-md mx-auto">
                                <div className="mb-10">
                                    <h3 className="text-2xl font-serif font-bold text-emerald-950 mb-2">Request a Consultation</h3>
                                    <p className="text-gray-500 text-sm">Please provide your details and we will reach out shortly.</p>
                                </div>
                                <LeadForm />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) {
    return (
        <div className="flex gap-4 group/item">
            <div className="w-12 h-12 rounded-xl bg-emerald-900/50 border border-white/5 flex items-center justify-center group-hover/item:border-gold-400/50 transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-[10px] text-gold-400/60 uppercase font-bold tracking-widest mb-1">{label}</p>
                <p className="text-white font-medium">{value}</p>
            </div>
        </div>
    );
}
