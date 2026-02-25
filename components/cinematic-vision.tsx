"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { GlowingCard } from "@/components/ui/glowing-card"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { MessageSquare, Video, LineChart, Globe, Zap, Users, TrendingUp, DollarSign, BrainCircuit, Activity, Scissors } from "lucide-react"

const sequence = [
    { id: "s1", text: "Dashboards don't execute.", duration: 1200, type: "flash" },
    { id: "s2", text: "Charts don't post.", duration: 1200, type: "flash" },
    { id: "s3", text: "Suggestions don't close deals.", duration: 1500, type: "flash" },
    { id: "s4", text: "While others suggest...", duration: 1500, type: "hero", subtitle: "" },
    { id: "s5", text: "We Execute.", duration: 2500, type: "hero", subtitle: "At machine scale. Around the clock." },

    // Pillars with Visuals
    { id: "p1", type: "pillar", title: "Omni-Channel Scale", desc: "Manage up to 100 accounts per platform. Surround the entire market.", duration: 3500, visual: "orbit" },
    { id: "p2", type: "pillar", title: "AI Creative Studio", desc: "Long videos to short viral clips automatically. You just need direction.", duration: 3500, visual: "video" },
    { id: "p3", type: "pillar", title: "Autonomous Lead Gen", desc: "Identifies prospects. Warms them up. Starts conversations. 24/7.", duration: 3500, visual: "chat" },
    { id: "p4", type: "pillar", title: "Authority Engine", desc: "Owned media. SEO-rich networks. Leverage that compounds.", duration: 3500, visual: "chart" },
    { id: "p5", type: "pillar", title: "The Apex Hub", desc: "Traffic turns into revenue—not clicks. Your central brand ecosystem.", duration: 3500, visual: "hub" },

    { id: "s6", type: "reveal" }
]

// Mini-components for Graphics

const OrbitGraphic = () => (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-[#a3e635]/20 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-12 rounded-full border border-[#7c3aed]/30 animate-[spin_8s_linear_infinite]" />

        <div className="bg-black z-10 p-4 rounded-full border border-white/20 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
            <Globe className="w-12 h-12 text-[#a3e635]" />
        </div>

        {/* Orbiting Elements */}
        <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"><Users size={20} /></div>
        </motion.div>
        <motion.div initial={{ rotate: 120 }} animate={{ rotate: 480 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"><MessageSquare size={20} /></div>
        </motion.div>
        <motion.div initial={{ rotate: 240 }} animate={{ rotate: 600 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white"><Video size={20} /></div>
        </motion.div>
    </div>
)

const VideoGraphic = () => (
    <div className="w-full max-w-sm flex flex-col items-center gap-4">
        <motion.div
            initial={{ width: "100%", height: "120px" }}
            animate={{ width: ["100%", "100%", "30%", "30%"], height: ["120px", "120px", "200px", "200px"] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-white/5 border border-white/20 rounded-xl flex items-center justify-center relative overflow-hidden"
        >
            <Video className="w-10 h-10 text-neutral-500 absolute" />
            <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute top-0 bottom-0 w-1 bg-[#a3e635] shadow-[0_0_15px_rgba(163,230,53,1)] z-10 flex items-center justify-center"
            >
                <Scissors className="text-[#a3e635] absolute -top-4 w-4 h-4" />
            </motion.div>
        </motion.div>
        <div className="flex gap-4 w-full justify-center">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 1.5 }} className="w-16 h-24 bg-gradient-to-t from-[#7c3aed]/40 to-transparent border border-[#7c3aed] rounded-md" />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }} className="w-16 h-24 bg-gradient-to-t from-[#a3e635]/40 to-transparent border border-[#a3e635] rounded-md" />
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, repeat: Infinity, repeatType: "reverse", duration: 1.5 }} className="w-16 h-24 bg-gradient-to-t from-[#7c3aed]/40 to-transparent border border-[#7c3aed] rounded-md" />
        </div>
    </div>
)

const ChatGraphic = () => (
    <div className="w-full max-w-sm flex flex-col gap-3 relative">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="self-start bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/5 text-sm w-3/4 flex gap-3">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a3e635] flex items-center justify-center shrink-0"><BrainCircuit className="w-3 h-3 text-white" /></div>
            <div className="h-4 bg-white/20 rounded w-full animate-pulse mt-1" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="self-end bg-[#7c3aed]/20 p-3 rounded-2xl rounded-tr-none border border-[#7c3aed]/30 text-sm w-3/4">
            <div className="h-4 bg-white/20 rounded w-full animate-pulse mt-1" />
            <div className="h-4 bg-white/20 rounded w-2/3 animate-pulse mt-2" />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} className="absolute -right-4 -bottom-4 bg-[#a3e635] text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_20px_rgba(163,230,53,0.5)] flex items-center gap-1">
            <Zap className="w-3 h-3 fill-black" /> Meeting Booked!
        </motion.div>
    </div>
)

const ChartGraphic = () => (
    <div className="w-full max-w-sm h-48 flex items-end justify-between gap-2 p-4 border-b border-l border-white/20 relative">
        {[30, 45, 25, 60, 80, 50, 95].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="w-full bg-gradient-to-t from-[#7c3aed] to-[#a3e635] rounded-t-sm relative group"
            >
                <div className="absolute top-0 inset-x-0 h-1 bg-white opacity-50 shadow-[0_0_10px_white]" />
            </motion.div>
        ))}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute -top-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
            <TrendingUp className="text-[#a3e635] w-5 h-5" />
            <span className="font-bold text-white tracking-widest">+420%</span>
        </motion.div>
    </div>
)

const HubGraphic = () => (
    <div className="relative w-64 h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 to-[#a3e635]/20 rounded-full blur-3xl animate-pulse" />
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 bg-black border border-white/20 shadow-[0_0_40px_rgba(124,58,237,0.5)] rounded-2xl z-20 flex items-center justify-center"
        >
            <Image src="/logo.svg" alt="Nexon" width={48} height={48} className="drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
        </motion.div>

        {/* Particles flowing in */}
        {[...Array(6)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: Math.cos(i * 60 * Math.PI / 180) * 150, y: Math.sin(i * 60 * Math.PI / 180) * 150 }}
                animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5], x: 0, y: 0 }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                className="absolute w-3 h-3 bg-[#a3e635] rounded-full shadow-[0_0_10px_rgba(163,230,53,1)] z-10"
            />
        ))}
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[#a3e635] font-black tracking-widest text-2xl drop-shadow-[0_0_10px_rgba(163,230,53,0.5)] z-30"
        >
            <DollarSign /> REVENUE
        </motion.div>
    </div>
)

export function CinematicVision() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex >= sequence.length - 1) return

        const currentSlide = sequence[currentIndex]

        const timer = setTimeout(() => {
            setCurrentIndex(prev => prev + 1)
        }, currentSlide.duration || 2000)

        return () => clearTimeout(timer)
    }, [currentIndex])

    const currentSlide = sequence[currentIndex]
    const showBackground = currentSlide.type === "pillar" || currentSlide.type === "reveal" || currentSlide.type === "hero"

    return (
        <div className="fixed inset-0 bg-black overflow-hidden flex flex-col items-center justify-center font-sans tracking-tight">

            {/* Background ambient glow and Beams from 21st.dev/Aceternity */}
            <AnimatePresence>
                {showBackground && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0 z-0 pointer-events-none"
                    >
                        <BackgroundBeams />
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15)_0%,transparent_80%)] z-10" />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">

                {/* FAST CUT FLASHES */}
                {currentSlide.type === "flash" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute flex items-center justify-center w-full z-10 p-8 text-center"
                    >
                        <h1 className="text-5xl md:text-8xl font-semibold tracking-tight text-white drop-shadow-md">
                            {currentSlide.text}
                        </h1>
                    </motion.div>
                )}

                {/* HERO PAUSE */}
                {currentSlide.type === "hero" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute flex flex-col items-center justify-center w-full text-center z-10 p-8"
                    >
                        <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter text-white leading-tight mb-6 p-4 drop-shadow-xl">
                            {currentSlide.text}
                        </h1>
                        <p className="text-2xl md:text-4xl text-[#a3e635] font-medium tracking-tight">
                            {currentSlide.subtitle}
                        </p>
                    </motion.div>
                )}

                {/* GLOWING CARDS FOR PILLARS WITH GRAPHICS - OpenAI/Apple Style */}
                {currentSlide.type === "pillar" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute flex items-center justify-center w-full max-w-6xl px-4 z-20"
                    >
                        <div className="w-full relative flex flex-col md:flex-row items-center gap-12 md:gap-24 p-8 md:p-12 rounded-[2rem] bg-gradient-to-b from-white/[0.03] to-transparent border-t border-white/[0.05] backdrop-blur-3xl shadow-2xl">

                            {/* Graphic Side */}
                            <div className="flex-1 w-full flex items-center justify-center min-h-[250px]">
                                {currentSlide.visual === "orbit" && <OrbitGraphic />}
                                {currentSlide.visual === "video" && <VideoGraphic />}
                                {currentSlide.visual === "chat" && <ChatGraphic />}
                                {currentSlide.visual === "chart" && <ChartGraphic />}
                                {currentSlide.visual === "hub" && <HubGraphic />}
                            </div>

                            {/* Text Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="flex-1 text-center md:text-left"
                            >
                                <div className="inline-block px-4 py-1.5 bg-white/5 rounded-full text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-6">
                                    Pillar 0{sequence.findIndex(s => s.id === currentSlide.id) - 4}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                                    {currentSlide.title}
                                </h2>
                                <p className="text-xl md:text-2xl text-neutral-400 font-medium leading-relaxed">
                                    {currentSlide.desc}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}

                {/* FINAL REVEAL (NEXON COPILOT) - Splash Screen Style */}
                {currentSlide.type === "reveal" && (
                    <motion.div
                        key={currentSlide.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 flex flex-col items-center justify-center w-full z-30 bg-[#111111]"
                    >
                        <div className="flex flex-col items-center justify-center -mt-16">
                            <div className="flex items-center justify-center overflow-hidden mb-10">
                                {/* Logo Animation (from Preloader) */}
                                <motion.div
                                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                                >
                                    <Image
                                        src="/logo.svg"
                                        alt="Nexon Copilot Logo"
                                        width={180}
                                        height={180}
                                        priority
                                        className="w-24 h-24 sm:w-[150px] sm:h-[150px] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                                    />
                                </motion.div>

                                {/* Text Reveal Animation (from Preloader) */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <span className="text-6xl md:text-[8rem] font-bold tracking-tight text-white whitespace-nowrap pl-4 sm:pl-8">
                                        Nexon <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Copilot.</span>
                                    </span>
                                </motion.div>
                            </div>

                            <motion.p
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1, delay: 1.5 }}
                                className="text-2xl md:text-3xl text-[#a3e635] font-semibold tracking-tight text-center max-w-3xl mb-12 px-4 drop-shadow-md"
                            >
                                Stop renting attention. Start owning growth.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 2.2 }}
                                className="flex flex-col sm:flex-row gap-6 items-center"
                            >
                                <button
                                    onClick={() => setCurrentIndex(0)}
                                    className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all flex items-center gap-2 text-lg backdrop-blur-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg>
                                    Replay Vision
                                </button>
                                <a
                                    href="/waitlist"
                                    className="px-10 py-4 bg-[#7c3aed] text-white rounded-full font-bold text-lg hover:bg-[#6d28d9] hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.6)] transition-all flex items-center gap-2"
                                >
                                    Join the Platform
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
