"use client";

import { motion } from "framer-motion";
import { Filter, Droplets, Hexagon } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <Filter className="w-12 h-12 text-primary" />,
        title: "Multi-stage Filtration",
        description: "Water passes through activated carbon and sediment filters to remove macroscopic impurities, chlorine, and odors.",
    },
    {
        number: "02",
        icon: <Hexagon className="w-12 h-12 text-primary" />,
        title: "Reverse Osmosis",
        description: "High-pressure RO membranes strip away dissolved solids, heavy metals, and harmful microscopic contaminants at a molecular level.",
    },
    {
        number: "03",
        icon: <Droplets className="w-12 h-12 text-primary" />,
        title: "UV & Ozonation",
        description: "Final sterilization using Ultraviolet light and Ozonation ensures zero bacterial presence, leaving pure, crisp drinking water.",
    },
];

export default function QualityProcess() {
    return (
        <section id="quality" className="py-24 bg-slate-900 relative text-white overflow-hidden">
            {/* Abstract Background Waves */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <svg viewBox="0 0 1440 320" className="w-full absolute bottom-0 text-primary" preserveAspectRatio="none">
                    <path fill="currentColor" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,213.3C672,192,768,160,864,154.7C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-secondary font-bold tracking-wide uppercase text-sm mb-2">Our Quality Promise</h2>
                        <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                            Rigorous 3-Step Purification
                        </h3>
                        <p className="text-slate-400 mt-4 text-lg">
                            We leave nothing to chance. Discover the intensive process that guarantees your water is perfectly balanced and 100% safe.
                        </p>
                    </motion.div>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-3 gap-12 relative">

                    {/* Connector Line (visible on desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10 -translate-y-[20px]">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary w-full opacity-50"></div>
                    </div>

                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            className="relative group text-center"
                        >
                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -left-4 font-black text-6xl text-slate-800/80 group-hover:text-primary/20 transition-colors duration-500 pointer-events-none z-0">
                                {step.number}
                            </div>

                            <div className="relative z-10 mb-8 mx-auto w-24 h-24 bg-slate-800 rounded-full border-4 border-slate-900 shadow-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {step.icon}
                            </div>

                            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-3xl h-full shadow-lg group-hover:border-primary/50 transition-colors duration-300">
                                <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
