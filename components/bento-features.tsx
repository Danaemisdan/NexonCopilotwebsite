"use client";

import { motion } from "framer-motion";
import { PhoneCall, DatabaseZap, Workflow, Globe2, Sparkles } from "lucide-react";

const FeatureCard = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className={`group relative overflow-hidden bg-bg-card rounded-2xl border border-white/5 hover:border-white/20 transition-colors p-8 flex flex-col ${className}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
        {children}
    </motion.div>
);

export function BentoFeatures() {
    return (
        <section id="features" className="py-32 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-medium mb-6 text-white tracking-tight"
                    >
                        A cohesive <span className="text-text-muted">intelligence.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-muted max-w-xl text-lg font-light leading-relaxed"
                    >
                        We don't sell disconnected tools. We provide a single orchestrated platform
                        seamlessly handling every touchpoint of your customer lifecycle.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[320px]">

                    {/* AI Voice Agent - Span 4 */}
                    <FeatureCard className="md:col-span-4" delay={0.1}>
                        <div className="mb-auto">
                            <PhoneCall className="w-6 h-6 text-white/80 mb-6" strokeWidth={1.5} />
                            <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">AI Voice Agent</h3>
                            <p className="text-text-muted text-base leading-relaxed max-w-md font-light">
                                Human-like inbound and outbound calling. Qualifies leads, schedules appointments, and handles support continuously.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* Omnichannel - Span 2 */}
                    <FeatureCard className="md:col-span-2 bg-[#050505]" delay={0.2}>
                        <div className="mb-auto">
                            <Globe2 className="w-6 h-6 text-white/50 mb-6" strokeWidth={1.5} />
                            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Omnichannel</h3>
                            <p className="text-[#666] text-sm leading-relaxed font-light">
                                Real-time engagement across WhatsApp, SMS, and Instagram DM.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* Campaign Engine - Span 2 */}
                    <FeatureCard className="md:col-span-2 bg-[#050505]" delay={0.3}>
                        <div className="mb-auto">
                            <Sparkles className="w-6 h-6 text-white/50 mb-6" strokeWidth={1.5} />
                            <h3 className="text-xl font-medium text-white mb-2 tracking-tight">Campaigns</h3>
                            <p className="text-[#666] text-sm leading-relaxed font-light">
                                Multi-step sequences that follow up relentlessly with AI logic until closed.
                            </p>
                        </div>
                    </FeatureCard>


                    {/* AI CRM - Span 4 */}
                    <FeatureCard className="md:col-span-4" delay={0.4}>
                        <div className="mb-auto">
                            <DatabaseZap className="w-6 h-6 text-white/80 mb-6" strokeWidth={1.5} />
                            <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">AI-Powered CRM</h3>
                            <p className="text-text-muted text-base leading-relaxed max-w-md font-light">
                                The absolute source of truth. Automatic semantic tagging, predictive lead scoring, and pipeline orchestration based on historical data.
                            </p>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
}
