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
    { id: "p1", type: "pillar", title: "Omni-Channel Scale", desc: "Surround the entire market simultaneously.", duration: 4000, visual: "orbit" },
    { id: "p2", type: "pillar", title: "AI Creative Studio", desc: "Long-form to viral shorts. Fully automated.", duration: 4000, visual: "video" },
    { id: "p3", type: "pillar", title: "Autonomous Lead Gen", desc: "Finds, warms, and books meetings. 24/7.", duration: 4000, visual: "chat" },
    { id: "p4", type: "pillar", title: "Authority Engine", desc: "SEO-rich networks that compound leverage.", duration: 4000, visual: "chart" },
    { id: "p5", type: "pillar", title: "The Apex Hub", desc: "Centralized ecosystem. Traffic turns into revenue.", duration: 4000, visual: "hub" },

    { id: "s6", type: "reveal" }
]

// Massive Graphics Upgrade - "Show Don't Tell"

const OrbitGraphic = () => (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center scale-75 md:scale-100">
        <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_20s_linear_infinite]" />
        <div className="absolute inset-8 rounded-full border border-[#a3e635]/10 animate-[spin_15s_linear_infinite_reverse]" />
        <div className="absolute inset-16 rounded-full border border-[#7c3aed]/20 animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-24 bg-gradient-to-br from-[#7c3aed]/10 to-[#a3e635]/10 rounded-full blur-2xl animate-pulse" />

        <div className="bg-black/80 backdrop-blur-md z-10 p-6 rounded-full border border-white/10 shadow-[0_0_50px_rgba(163,230,53,0.3)]">
            <Globe className="w-16 h-16 text-[#a3e635]" />
        </div>

        {/* Dynamic Nodes Flowing */}
        {[...Array(12)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ rotate: i * 30, scale: 0, opacity: 0 }}
                animate={{ rotate: i * 30 + 360, scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
                className="absolute inset-0"
            >
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#a3e635] rounded-full shadow-[0_0_15px_#a3e635] blur-[2px]" />
            </motion.div>
        ))}

        {/* Orbiting Platforms */}
        {[Users, MessageSquare, Video, LineChart].map((Icon, index) => (
            <motion.div key={index} initial={{ rotate: index * 90 }} animate={{ rotate: index * 90 + 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-20">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#111] p-4 rounded-2xl border border-white/10 text-white shadow-xl shadow-black/50 backdrop-blur-xl">
                    <Icon size={24} className={index % 2 === 0 ? "text-[#7c3aed]" : "text-[#a3e635]"} />
                </div>
            </motion.div>
        ))}
    </div>
)

const VideoGraphic = () => (
    <div className="w-full max-w-lg flex flex-col items-center gap-6 scale-90 md:scale-100 relative mt-12 md:mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/20 to-transparent blur-3xl rounded-full" />

        {/* Source Video Editor Mockup */}
        <motion.div
            initial={{ width: "100%", height: "160px" }}
            animate={{ width: ["100%", "100%", "40%", "40%"], height: ["160px", "160px", "300px", "300px"], borderRadius: ["16px", "16px", "24px", "24px"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#0a0a0a] border border-white/10 flex flex-col relative overflow-hidden shadow-2xl z-10"
        >
            {/* Fake Video UI Header */}
            <div className="h-8 border-b border-white/5 flex flex-col justify-center px-4 w-full opacity-50">
                <div className="w-1/3 h-1.5 bg-white/20 rounded-full" />
            </div>

            <div className="flex-1 flex items-center justify-center relative bg-black/50">
                <Video className="w-12 h-12 text-neutral-600 absolute" />
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center z-10"
                >
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
                </motion.div>
            </div>

            {/* AI Scissor Cut Line */}
            <motion.div
                animate={{ x: ["-100%", "300%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#a3e635] to-transparent shadow-[0_0_20px_rgba(163,230,53,1)] z-20 flex items-center justify-center"
            >
                <Scissors className="text-[#a3e635] absolute w-6 h-6 drop-shadow-[0_0_10px_#a3e635]" />
            </motion.div>

            {/* Rendering Progress Bar */}
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#a3e635]"
            />
        </motion.div>

        {/* Viral Output Items */}
        <div className="flex gap-4 w-full justify-center absolute -bottom-16 z-20">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.9], y: [50, 0, 0, 10] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 + (i * 0.2), times: [0, 0.2, 0.8, 1] }}
                    className="w-24 h-36 bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl flex flex-col justify-end p-2 relative"
                >
                    <div className={`absolute inset-0 opacity-20 bg-gradient-to-t ${i % 2 === 0 ? "from-[#a3e635]" : "from-[#7c3aed]"}`} />
                    <div className="w-full flex justify-between items-center z-10">
                        <div className="w-2 h-2 rounded bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white tracking-wider">1.2M</span>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
)

const ChatGraphic = () => (
    <div className="w-full max-w-lg h-[350px] flex flex-col gap-4 relative bg-[#050505] p-6 text-2xl border border-white/5 rounded-3xl shadow-2xl drop-shadow-[0_20px_50px_rgba(124,58,237,0.15)] overflow-hidden scale-90 md:scale-100">

        {/* Top Fade */}
        <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[#050505] to-transparent z-10" />

        <div className="flex flex-col justify-end h-full relative z-0 pb-16">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="self-start bg-[#111] p-4 rounded-2xl rounded-tl-none border border-white/5 w-[85%] flex gap-4 mb-4 items-start shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a3e635] flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    <BrainCircuit className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                    <div className="text-white text-sm font-semibold mb-2">System AI</div>
                    <div className="h-2 bg-white/20 rounded-full w-full animate-pulse mb-2" />
                    <div className="h-2 bg-white/20 rounded-full w-[90%] animate-pulse" />
                </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }} className="self-end bg-[#7c3aed]/10 p-4 rounded-2xl rounded-tr-none border border-[#7c3aed]/20 w-[75%] mb-4 shadow-lg backdrop-blur-md">
                <div className="text-[#a3e635] text-sm font-semibold mb-2 text-right">High-Value Target</div>
                <div className="flex justify-end mb-2"><div className="h-2 bg-white/20 rounded-full w-[80%] animate-pulse" /></div>
                <div className="flex justify-end"><div className="h-2 bg-white/20 rounded-full w-[60%] animate-pulse" /></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="self-start bg-[#111] p-4 rounded-2xl rounded-tl-none border border-white/5 w-[85%] flex gap-4 items-start shadow-lg">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#a3e635] flex items-center justify-center shrink-0 mt-1 shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                    <BrainCircuit className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 flex flex-col gap-3">
                    <div className="h-2 bg-white/20 rounded-full w-[70%] animate-pulse" />
                    <div className="bg-[#a3e635]/10 border border-[#a3e635]/30 p-3 rounded-xl flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#a3e635]/20 rounded flex items-center justify-center"><Zap className="w-4 h-4 text-[#a3e635]" /></div>
                        <div>
                            <div className="text-xs text-[#a3e635] font-bold">MEETING BOOKED</div>
                            <div className="text-[10px] text-white/50">Thursday, 2:00 PM EST</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-4 inset-x-6 h-12 bg-[#1a1a1a] rounded-full border border-white/10 flex items-center px-4">
            <div className="h-4 bg-white/10 rounded w-1/3 animate-pulse" />
        </div>
    </div>
)

const ChartGraphic = () => (
    <div className="w-full max-w-lg h-64 flex items-end justify-between gap-3 p-6 border-b border-l border-white/10 relative scale-90 md:scale-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7c3aed]/10 via-transparent to-transparent pointer-events-none" />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none flex flex-col justify-between opacity-10 py-6">
            {[...Array(5)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white border-dashed" />)}
        </div>

        {[20, 35, 25, 50, 75, 45, 95].map((h, i) => (
            <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1.5, delay: i * 0.15, ease: "circOut" }}
                className="w-full bg-gradient-to-t from-[#7c3aed] to-[#a3e635] relative group"
                style={{ borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
            >
                {/* Glowing Top Cap */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-white shadow-[0_0_15px_white]" />
                {/* Inner Glow Core */}
                <div className="absolute inset-x-1 bottom-0 top-2 bg-white/20 blur-sm" />
            </motion.div>
        ))}

        {/* Compounding Curve Overlay */}
        <motion.svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 2, delay: 1, ease: "easeInOut" }}>
            <path d="M 30,220 Q 200,200 450,20" fill="none" stroke="#a3e635" strokeWidth="4" strokeLinecap="round" className="drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
        </motion.svg>

        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, type: "spring" }}
            className="absolute -top-8 -right-8 bg-black/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-white/10 flex flex-col gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
            <div className="text-xs text-neutral-400 font-bold tracking-widest uppercase">Organic Lift</div>
            <div className="flex items-center gap-2">
                <TrendingUp className="text-[#a3e635] w-8 h-8 drop-shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                <span className="font-black text-4xl text-white tracking-widest">+12x</span>
            </div>
        </motion.div>
    </div>
)

const HubGraphic = () => (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center scale-75 md:scale-100 mt-20 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/30 to-[#a3e635]/30 rounded-full blur-[100px] animate-pulse" />

        <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-40 h-40 bg-[#0a0a0a] border border-white/10 shadow-[0_0_80px_rgba(124,58,237,0.4)] rounded-[2.5rem] z-20 flex items-center justify-center relative overflow-hidden backdrop-blur-3xl"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)]" />
            <Image src="/logo.svg" alt="Nexon" width={80} height={80} className="drop-shadow-[0_0_25px_rgba(163,230,53,0.8)] z-10" />
        </motion.div>

        {/* Data Streams Converging */}
        {[...Array(16)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, x: Math.cos(i * 22.5 * Math.PI / 180) * 250, y: Math.sin(i * 22.5 * Math.PI / 180) * 250 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0], x: 0, y: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className={`absolute w-1 h-8 rounded-full z-10`}
                style={{
                    transform: `rotate(${i * 22.5}deg)`,
                    backgroundColor: i % 2 === 0 ? '#a3e635' : '#7c3aed',
                    boxShadow: `0 0 20px ${i % 2 === 0 ? '#a3e635' : '#7c3aed'}`
                }}
            />
        ))}

        {/* Output Beam */}
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 200, opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-[80%] md:top-1/2 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-b from-[#a3e635]/80 to-transparent blur-md -translate-y-[20%] md:-translate-y-full z-30 transform origin-bottom"
        />

        <motion.div
            initial={{ y: 0, opacity: 0, scale: 0.8 }}
            animate={{ y: -160, opacity: [0, 1, 1, 0], scale: [0.8, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute top-[80%] md:top-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1 text-black bg-[#a3e635] px-6 py-2 rounded-full font-black tracking-widest text-2xl shadow-[0_0_30px_rgba(163,230,53,1)] z-40 border-2 border-white/50"
        >
            <DollarSign strokeWidth={3} /> REVENUE
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
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#7c3aed]"
                    >
                        <div className="flex flex-col items-center justify-center -mt-8">
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
                                        width={180}
                                        height={180}
                                        priority
                                        className="w-24 h-24 sm:w-[150px] sm:h-[150px] object-contain drop-shadow-xl"
                                    />
                                </motion.div>

                                {/* Text Reveal Animation */}
                                <motion.div
                                    initial={{ width: 0, opacity: 0 }}
                                    animate={{ width: "auto", opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <span className="text-4xl sm:text-6xl md:text-[6rem] font-bold tracking-tight text-white whitespace-nowrap pl-4 sm:pl-6 leading-none">
                                        Nexon Copilot.
                                    </span>
                                </motion.div>
                            </div>

                            {/* Wait 2.5s then fade in the tag line mimicking a loading freeze */}
                            <motion.p
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, delay: 2.5 }}
                                className="mt-8 text-xl sm:text-3xl text-[#a3e635] font-semibold tracking-tight text-center max-w-2xl px-4 drop-shadow-md"
                            >
                                Stop renting attention. Start owning growth.
                            </motion.p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
