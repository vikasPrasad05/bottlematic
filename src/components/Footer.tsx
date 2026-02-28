import Link from "next/link";
import { Droplet, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 pt-16 pb-8 text-slate-300 border-t border-slate-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Intro */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group mb-6">
                            <div className="bg-primary/20 p-2 rounded-xl">
                                <Droplet className="w-6 h-6 text-primary fill-primary/40" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">
                                La<span className="text-primary">Mok</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            Delivering purity to your doorstep. Premium RO purified water for homes and businesses with a commitment to health and quality.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors hover:text-white" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Products', 'Services', 'Quality Process', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Our Products
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#products" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                    20L Premium Jar
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                    1L Bottled Water
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                    500ml Bottled Water
                                </Link>
                            </li>
                            <li>
                                <Link href="#products" className="text-sm hover:text-primary transition-colors flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                                    Water Dispensers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-6 relative inline-block">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm leading-relaxed text-slate-400">
                                    12,Shanti Nagar,Bhadakmora Near sai temple<br />vapi,valsad 396195
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm text-slate-400">+91 972452560</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm text-slate-400">narayannaru942@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-500">
                        &copy; {currentYear} Lamok Water Supply Co. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
