import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-white border-t border-gold-400/20">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <img src="/rera-logo.png" alt="RERA Consultants" className="h-16 w-auto" /> {/* Removed filter to show original logo */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-serif font-bold text-gold-400 leading-none">RERA</h2>
                                <span className="text-xs text-white uppercase tracking-widest">Consultants</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            By Pooja Gowda M & Associates. <br />
                            Redefining luxury real estate with integrity, transparency, and excellence.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Instagram size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gold-400 font-sans uppercase tracking-widest text-sm font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><a href="/" className="hover:text-gold-400 transition-colors">Home</a></li>
                            <li><a href="/#projects" className="hover:text-gold-400 transition-colors">Residential Projects</a></li>
                            <li><a href="/#projects" className="hover:text-gold-400 transition-colors">Commercial</a></li>
                            <li><a href="/about-us" className="hover:text-gold-400 transition-colors">About Us</a></li>
                            <li><a href="/contact-us" className="hover:text-gold-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Recent Projects */}
                    <div>
                        <h3 className="text-gold-400 font-sans uppercase tracking-widest text-sm font-bold mb-6">Recent Projects</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li><Link href="/#projects" className="hover:text-gold-400 transition-colors">Prema Enclave</Link></li>
                            <li><Link href="/#projects" className="hover:text-gold-400 transition-colors">Ventara Residences</Link></li>
                            <li><Link href="/#projects" className="hover:text-gold-400 transition-colors">NVG Rakshak</Link></li>
                            <li><Link href="/#projects" className="hover:text-gold-400 transition-colors">Reflections 66</Link></li>
                            <li><Link href="/#projects" className="hover:text-gold-400 transition-colors">Jeya Green Horizon</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-gold-400 font-sans uppercase tracking-widest text-sm font-bold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-300">
                            <li className="flex gap-3">
                                <MapPin className="text-gold-400 flex-shrink-0" size={18} />
                                <span>1st floor, No.29, Shop Street, 9th Cross, 8th Main Rd, 2nd Block, Jayanagar, Bengaluru, KA 560011</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-gold-400 flex-shrink-0" size={18} />
                                <span>+91 76910 30591 | +91 76910 70555</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-gold-400 flex-shrink-0" size={18} />
                                <span>info@rerabypooja.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-emerald-950 border-t border-white/10 py-6 text-center">
                <p className="text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} RERA Consultants. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:border-gold-400 hover:text-gold-400 hover:bg-emerald-900 transition-all duration-300">
            {icon}
        </a>
    );
}
