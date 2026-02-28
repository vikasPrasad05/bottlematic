"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Local Resident",
        review: "The water quality is exceptional and tastes incredibly fresh. Delivery is always on time, which has made our lives so much easier. Highly recommend PureDrop!",
        rating: 5,
    },
    {
        name: "Sneha Verma",
        role: "Office Manager",
        review: "We switched to PureDrop for our office supply 6 months ago. The dispensers are clean, and the monthly subscription saves us a lot of money and hassle.",
        rating: 5,
    },
    {
        name: "Amit Patel",
        role: "Fitness Enthusiast",
        review: "I rely on their alkaline water for post-workout hydration. It's noticeably lighter and refreshing compared to regular RO water from local vendors.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Customer Stories</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                            Trusted by Thousands
                        </h3>
                        <p className="text-slate-600 mt-4 text-lg">
                            Don&apos;t just take our word for it. Here&apos;s what our community has to say about their experience with PureDrop.
                        </p>
                    </motion.div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-slate-100 group-hover:text-primary/10 transition-colors duration-300" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-200"
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Review Text */}
                            <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic text-[15px]">
                                &quot;{testimonial.review}&quot;
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4 mt-auto border-t border-slate-50 pt-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-md shadow-primary/20">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 leading-tight mb-0.5">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
