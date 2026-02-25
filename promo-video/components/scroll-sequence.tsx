"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export function ScrollSequence() {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    // Text 1: The old way
    const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.3], [1, 1, 0])
    const scale1 = useTransform(smoothProgress, [0, 0.3], [1, 1.2])

    // Text 2: The problem
    const opacity2 = useTransform(smoothProgress, [0.2, 0.35, 0.5], [0, 1, 0])
    const y2 = useTransform(smoothProgress, [0.2, 0.35, 0.5], [100, 0, -100])

    // Text 3: The solution (Nexon)
    const opacity3 = useTransform(smoothProgress, [0.4, 0.55, 0.7], [0, 1, 0])
    const scale3 = useTransform(smoothProgress, [0.4, 0.55, 0.7], [0.8, 1, 1.2])

    // Text 4: Features explosion
    const opacity4 = useTransform(smoothProgress, [0.6, 0.75, 0.9], [0, 1, 0])
    const y4 = useTransform(smoothProgress, [0.6, 0.75, 0.9], [50, 0, -50])

    // Final CTA
    const opacityFinal = useTransform(smoothProgress, [0.85, 1], [0, 1])
    const scaleFinal = useTransform(smoothProgress, [0.85, 1], [0.9, 1])

    return (
        <div ref={containerRef} className="h-[500vh] bg-black text-white relative">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Phase 1 */}
                <motion.div
                    style={{ opacity: opacity1, scale: scale1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference">
                        Work used to be <br /> <span className="text-neutral-500">manual.</span>
                    </h1>
                </motion.div>

                {/* Phase 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#7c3aed]">
                        Slow. <br /> <span className="text-white">Inefficient.</span>
                    </h1>
                </motion.div>

                {/* Phase 3 */}
                <motion.div
                    style={{ opacity: opacity3, scale: scale3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[#0a0a0a]"
                >
                    <img src="/logo.svg" alt="Nexon" className="w-32 h-32 md:w-48 md:h-48 mb-8 object-contain drop-shadow-[0_0_30px_rgba(163,230,53,0.3)]" />
                    <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        Meet Nexon Copilot.
                    </h1>
                    <p className="mt-6 text-xl md:text-3xl text-neutral-400 font-medium tracking-tight">
                        The ultimate AI workforce platform.
                    </p>
                </motion.div>

                {/* Phase 4 */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 w-full max-w-5xl mx-auto px-4">
                        <div className="text-left">
                            <h2 className="text-4xl md:text-6xl font-bold text-[#a3e635] mb-4">Automate</h2>
                            <p className="text-xl md:text-2xl text-neutral-400">Everything from data entry to complex workflows.</p>
                        </div>
                        <div className="text-left md:text-right mt-12 md:mt-32">
                            <h2 className="text-4xl md:text-6xl font-bold text-[#7c3aed] mb-4">Accelerate</h2>
                            <p className="text-xl md:text-2xl text-neutral-400">Turn hours of work into seconds of generation.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    style={{ opacity: opacityFinal, scale: scaleFinal }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/50 backdrop-blur-sm"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
                        The future is <span className="text-[#a3e635]">now.</span>
                    </h1>
                    <a href="/" className="px-10 py-5 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-full text-2xl font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] flex items-center gap-3">
                        Join the Public Beta
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </a>
                </motion.div>

            </div>
        </div>
    )
}
