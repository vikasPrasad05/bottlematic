"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50 pt-20"
        >
            {/* Background Decor */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute top-1/2 -left-20 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

                {/* Abstract water wave graphic at bottom */}
                <div className="absolute bottom-0 w-full h-32 opacity-30 select-none">
                    <svg viewBox="0 0 1440 320" className="w-full h-full text-primary" preserveAspectRatio="none">
                        <path
                            fill="currentColor"
                            fillOpacity="1"
                            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col space-y-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-2">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                                </span>
                                100% RO Purified & Lab Tested
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                                Pure Water. <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                    Delivered Fresh.
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Experience the highest standard of hydration. We deliver premium, multi-stage purified water directly to your home or workspace with unmatched reliability.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                            <Link
                                href="#products"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-semibold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Order Now
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-primary/50 hover:bg-slate-50 font-semibold shadow-sm transition-all flex items-center justify-center"
                            >
                                Become a Distributor
                            </Link>
                        </div>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-4">
                            {['Free Delivery', 'RO & UV Purified', 'BPA-Free Bottles'].map((feature) => (
                                <div key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image/Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="relative lg:h-[600px] flex items-center justify-center"
                    >
                        {/* Main composition container */}
                        <div className="relative w-full max-w-md aspect-square lg:aspect-auto lg:h-[80%] rounded-3xl overflow-hidden glass shadow-2xl p-4">
                            {/* Replace with actual image later */}
                            <div>
                                <img src="bottle.jpeg" alt="" />
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -top-2 -right-4 glass px-4 py-2 flex items-center gap-2 rounded-xl shadow-lg border-white/50 animate-bounce-slow">
                                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">★</div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">4.9/5 Rating</div>
                                    <div className="text-[10px] text-slate-500">10k+ Happy Customers</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
