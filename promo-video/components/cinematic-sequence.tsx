"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// The sequence of text/screens to flash through
const sequence = [
    { id: "s1", text: "Acquire Customers.", duration: 800, type: "flash" },
    { id: "s2", text: "Nurture Leads.", duration: 800, type: "flash" },
    { id: "s3", text: "Fulfill Orders.", duration: 800, type: "flash" },
    { id: "s4", text: "Get Paid.", duration: 1200, type: "flash" },
    { id: "s5", text: "All on autopilot.", duration: 1500, type: "hero", subtitle: "The manual era is over." },
    { id: "s6", type: "reveal" }
]

export function CinematicSequence() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex >= sequence.length - 1) return // Stop at the last slide

        const currentSlide = sequence[currentIndex]

        // Auto-advance based on the duration defined in the sequence array
        const timer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
        }, currentSlide.duration || 2000)

        return () => clearTimeout(timer)
    }, [currentIndex])

    const currentSlide = sequence[currentIndex]

    return (
        <div className="fixed inset-0 bg-black overflow-hidden flex flex-col items-center justify-center">

            {/* Background ambient glow that appears during the reveal */}
            <AnimatePresence>
                {currentSlide.type === "reveal" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_60%)] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">

                {/* FAST CUT FLASHES */}
                {currentSlide.type === "flash" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute flex items-center justify-center w-full"
                    >
                        <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white">
                            {currentSlide.text}
                        </h1>
                    </motion.div>
                )}

                {/* HERO PAUSE */}
                {currentSlide.type === "hero" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute flex flex-col items-center justify-center w-full text-center"
                    >
                        <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter text-[#a3e635] leading-none mb-4">
                            {currentSlide.text}
                        </h1>
                        <p className="text-3xl md:text-5xl text-neutral-500 font-medium tracking-tight">
                            {currentSlide.subtitle}
                        </p>
                    </motion.div>
                )}

                {/* FINAL REVEAL (NEXON COPILOT) */}
                {currentSlide.type === "reveal" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="absolute flex flex-col items-center justify-center w-full z-10"
                    >
                        <motion.div
                            initial={{ rotate: -90, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
                            className="mb-10 relative"
                        >
                            <div className="absolute inset-0 bg-[#a3e635] blur-[100px] opacity-20 rounded-full" />
                            <Image
                                src="/logo.svg"
                                alt="Nexon Copilot"
                                width={180}
                                height={180}
                                className="relative z-10 w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_25px_rgba(163,230,53,0.4)]"
                            />
                        </motion.div>

                        <div className="overflow-hidden mb-6">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                className="text-7xl md:text-9xl font-black tracking-tighter text-white"
                            >
                                Nexon <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Copilot.</span>
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="text-2xl md:text-4xl text-neutral-400 font-medium tracking-tight text-center max-w-4xl mb-12"
                        >
                            End-to-end automation. <br className="md:hidden" />From customer acquisition to getting paid.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="flex gap-6 items-center"
                        >
                            <button
                                onClick={() => window.location.reload()}
                                className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold hover:bg-white/5 transition-colors flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                Replay
                            </button>
                            <a
                                href="https://nexoncopilot.com"
                                className="px-10 py-4 bg-[#7c3aed] text-white rounded-full font-bold text-lg hover:bg-[#6d28d9] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:-translate-y-1 transition-all flex items-center gap-2"
                            >
                                Enter Platform
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </motion.div>

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
