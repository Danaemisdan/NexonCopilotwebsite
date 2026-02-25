"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <motion.span
            className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto]",
                className
            )}
            animate={{
                backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {text}
        </motion.span>
    );
}
