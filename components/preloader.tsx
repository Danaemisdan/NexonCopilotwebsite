"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500); // 2.5 seconds total loading animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#7c3aed]"
                >
                    <div className="flex items-center justify-center overflow-hidden">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0, rotate: -90 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                        >
                            <Image
                                src="/logo.svg"
                                alt="Nexon Copilot Logo"
                                width={120}
                                height={120}
                                priority
                            />
                        </motion.div>

                        {/* Text Reveal Animation */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "auto", opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <span className="text-6xl font-bold tracking-tight text-white whitespace-nowrap pl-4">
                                Nexon Copilot.
                            </span>
                        </motion.div>
                    </div>

                    {/* Subtle loading bar */}
                    <motion.div
                        className="absolute bottom-1/3 w-64 h-[2px] bg-white/20 overflow-hidden rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="h-full bg-white rounded-full"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
