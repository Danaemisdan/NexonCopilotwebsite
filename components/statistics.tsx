"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
    {
        label: "Customer Acquisition Cost",
        value: "-40%",
        trend: "improvement",
        description: "Lower acquisition costs through automated qualifying and follow-ups.",
    },
    {
        label: "Lead Response Time",
        value: "< 1s",
        trend: "improvement",
        description: "Instantaneous responses across voice, SMS, and WhatsApp 24/7.",
    },
    {
        label: "Meeting Show Rate",
        value: "85%",
        trend: "increase",
        description: "Higher attendance through intelligent SMS reminders and confirmations.",
    },
    {
        label: "Sales Conversion Rate",
        value: "+25%",
        trend: "increase",
        description: "Lift in closed deals attributed to relentless, AI-driven outreach.",
    },
];

export function Statistics() {
    return (
        <section className="py-32 relative z-10 border-t border-white/5 bg-bg-dark">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row gap-12 justify-between mb-20">
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-medium mb-6 text-white tracking-tight"
                        >
                            The numbers <br />
                            <span className="text-text-muted">speak for themselves.</span>
                        </motion.h2>
                    </div>
                    <div className="md:w-1/2 md:mt-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-text-muted text-lg font-light leading-relaxed"
                        >
                            By replacing human latency with AI automation, businesses experience
                            immediate compounding returns across their entire revenue pipeline.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                            className="bg-bg-dark p-8 flex flex-col group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="flex items-center justify-between mb-8 text-white/40 group-hover:text-white/80 transition-colors">
                                <span className="text-sm font-medium tracking-wide uppercase">{stat.label}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>

                            <div className="mt-auto mb-4">
                                <span className="text-5xl font-medium tracking-tighter text-white">
                                    {stat.value}
                                </span>
                            </div>

                            <p className="text-sm text-[#666] font-light leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
