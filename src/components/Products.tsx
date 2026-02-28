"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Premium 20L Water Jar",
        capacity: "20 Liters",
        price: "₹80",
        description: "Ideal for homes and offices. Our best-selling standard RO purified water jar.",
        features: ["BPA-Free Plastic", "Sealed for Purity", "Easy to install"],
        imageTheme: "bg-blue-100",
    },
    {
        id: 2,
        name: "Alkaline Water Bottle",
        capacity: "1 Liter",
        price: "₹40",
        description: "pH balanced alkaline water for enhanced hydration and health benefits.",
        features: ["pH 8.5+", "Added Minerals", "Travel Friendly"],
        imageTheme: "bg-cyan-100",
    },
    {
        id: 3,
        name: "PureDrop 500ml Pack",
        capacity: "500 ml x 24",
        price: "₹240",
        description: "Convenient half-liter bottles perfect for events, meetings, and parties.",
        features: ["100% Recyclable", "UV Treated", "Bulk Value"],
        imageTheme: "bg-sky-100",
    },
];

export default function Products() {
    return (
        <section id="products" className="py-24 bg-slate-50 relative">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">Our Products</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
                            Hydration Solutions for Every Need
                        </h3>
                        <p className="text-slate-600 mt-4 text-lg">
                            From large dispensers to travel-friendly bottles, we have the perfect water solution for you.
                        </p>
                    </motion.div>
                </div>

                {/* Product Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full border border-slate-100"
                        >
                            {/* Product Image Placeholder */}
                            <div className={`relative h-64 ${product.imageTheme} flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                                {/* Visual placeholder for product */}
                                <div className="w-32 h-48 bg-white/40 glass rounded-xl border border-white/60 shadow-inner flex flex-col items-center justify-center animate-pulse">
                                    <span className="text-primary-dark font-semibold text-xs text-center">{product.capacity}</span>
                                </div>

                                {/* Price Tag */}
                                <div className="absolute top-4 right-4 bg-white px-4 py-1.5 rounded-full shadow-md font-bold text-primary z-20">
                                    Starts at {product.price}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="p-8 flex-grow flex flex-col">
                                <div className="mb-2">
                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{product.capacity}</span>
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow border-b border-slate-100 pb-6">
                                    {product.description}
                                </p>

                                <ul className="space-y-2 mb-8 mt-auto">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-sm text-slate-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="#contact"
                                    className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-primary text-slate-700 hover:text-white py-3.5 rounded-xl font-semibold transition-colors duration-300 border border-slate-200 hover:border-primary group-hover:shadow-md"
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Order Now
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
