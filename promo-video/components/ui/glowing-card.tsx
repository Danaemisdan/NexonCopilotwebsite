"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function GlowingCard({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "relative group flex flex-col h-full rounded-3xl overflow-hidden bg-bg-card border border-white/5",
                className
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Animated glowing border effect */}
            <motion.div
                className="absolute -inset-[1px] rounded-3xl z-[-1] opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"
                style={{
                    background: "linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent))",
                    backgroundSize: "200% 200%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            <div className="relative h-full flex flex-col z-10 p-8 bg-bg-dark/50 backdrop-blur-xl rounded-3xl">
                {children}
            </div>
        </div>
    );
}
