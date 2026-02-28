"use client";

import { motion } from "framer-motion";
import { Truck, Home, Building2, CalendarSync } from "lucide-react";

const services = [
    {
        icon: <Home className="w-10 h-10 text-primary" />,
        title: "Home Delivery",
        description: "Scheduled daily or weekly deliveries right to your doorstep. Never run out of fresh drinking water again.",
    },
    {
        icon: <Building2 className="w-10 h-10 text-primary" />,
        title: "Corporate Supply",
        description: "Reliable bulk supply for offices of all sizes. Keep your employees hydrated and healthy with minimal hassle.",
    },
    {
        icon: <Truck className="w-10 h-10 text-primary" />,
        title: "Bulk Orders",
        description: "Specialized delivery for events, marriages, and large gatherings. Flexible options at competitive rates.",
    },
    {
        icon: <CalendarSync className="w-10 h-10 text-primary" />,
        title: "Monthly Subscription",
        description: "Set it and forget it! Enjoy discounted rates and prioritize delivery slots with our flexible monthly plans.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Services</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Tailored Hydration for You
                        </h3>
                        <p className="text-slate-600 mt-4 text-lg">
                            We offer a range of flexible delivery options designed to seamlessly integrate into your lifestyle or business operations.
                        </p>
                    </motion.div>
                </div>

                {/* Service Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group p-8 bg-slate-50 hover:bg-white border text-center hover:border-primary/20 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="mx-auto w-20 h-20 mb-6 bg-blue-100 group-hover:bg-primary/10 rounded-2xl flex items-center justify-center transition-colors duration-300 relative group-hover:animate-pulse">
                                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
