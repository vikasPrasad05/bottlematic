"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Droplets, Award } from "lucide-react";

const features = [
    {
        icon: <Droplets className="w-8 h-8 text-primary" />,
        title: "RO Purified",
        description: "Advanced multi-stage Reverse Osmosis purification for 100% safe drinking water.",
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Lab Tested",
        description: "Daily automated quality checks and weekly lab testing to ensure optimal pH and mineral balance.",
    },
    {
        icon: <Award className="w-8 h-8 text-primary" />,
        title: "Certified Quality",
        description: "ISO certified facilities adhering to the highest international standards of hygiene.",
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl opacity-70"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Images/Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="bg-slate-100 rounded-2xl h-64 w-full shadow-md overflow-hidden relative group">
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 bg-blue-100/50 flex items-center justify-center">
                                        <span className="text-slate-400 text-sm font-medium">Quality Testing</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 rounded-2xl h-48 w-full shadow-md overflow-hidden relative group">
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 bg-cyan-100/50 flex items-center justify-center">
                                        <span className="text-slate-400 text-sm font-medium">Bottling Plant</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-slate-100 rounded-2xl h-48 w-full shadow-md overflow-hidden relative group">
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 bg-sky-100/50 flex items-center justify-center">
                                        <span className="text-slate-400 text-sm font-medium">Delivery Fleet</span>
                                    </div>
                                </div>
                                <div className="bg-slate-100 rounded-2xl h-64 w-full shadow-md overflow-hidden relative group">
                                    {/* Placeholder for real image */}
                                    <div className="absolute inset-0 bg-blue-50/80 flex items-center justify-center">
                                        <span className="text-slate-400 text-sm font-medium">Happy Customer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl text-center glass border-none">
                            <div className="text-4xl font-extrabold text-primary mb-1">15+</div>
                            <div className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Years of<br />Trust</div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <h2 className="text-primary font-bold tracking-wide uppercase text-sm">About PureDrop</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                                Committed to <br className="hidden md:block" />
                                <span className="text-primary">Purity & Health</span>
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed pt-4">
                                Since our inception, our mission has been simple: to provide every household and business with pristine, contaminant-free drinking water. We believe access to clean water is a fundamental right, not a luxury.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Our state-of-the-art purification facilities use advanced reverse osmosis, UV treatment, and ozonation to ensure that every drop that reaches your glass is as pure as nature intended, enriched with essential minerals for your wellbeing.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                            {features.map((feature, idx) => (
                                <div key={idx} className={`${idx === 2 ? 'sm:col-span-2' : ''} flex gap-4`}>
                                    <div className="shrink-0 mt-1 bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
