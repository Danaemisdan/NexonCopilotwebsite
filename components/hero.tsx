"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { AIWaveBackground } from "@/components/ui/ai-wave-bg";
import { ArrowRight } from "lucide-react";

export function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        gsap.set([titleRef.current, descRef.current, ctaRef.current], {
            y: 30,
            opacity: 0,
            filter: "blur(10px)",
        });

        tl.to(titleRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 }, 0.2)
            .to(descRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 }, 0.4)
            .to(ctaRef.current, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 }, 0.6);

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative min-h-[90vh] flex flex-col items-center justify-center -mx-[max(calc(50vw-50%),0px)] px-[max(calc(50vw-50%),0px)] pt-32 pb-24 overflow-hidden"
        >
            {/* Background Graphic */}
            <div className="absolute inset-0 w-full h-full bg-bg-dark -z-20" />
            <AIWaveBackground />

            <div className="container px-4 md:px-6 z-10 mx-auto max-w-7xl relative">
                <div className="flex flex-col items-start text-left max-w-3xl">

                    <h1
                        ref={titleRef}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-extralight tracking-tight text-white leading-[1.05] mb-6"
                    >
                        Deploy your growth
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-white via-primary/80 to-primary bg-clip-text text-transparent"> copilot for free.</span>
                    </h1>

                    <p
                        ref={descRef}
                        className="text-lg sm:text-xl md:text-xl text-white/60 max-w-2xl leading-relaxed font-light mb-12"
                    >
                        We don't just provide tools; we deliver an absolute, autonomous workforce. Nexon Copilot is the definitive intelligence distinguishing industry leaders from the rest.
                    </p>

                    <div
                        ref={ctaRef}
                        className="flex flex-wrap items-center gap-4 w-full justify-start"
                    >
                        <a
                            href="/waitlist"
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-tight text-sm overflow-hidden transition-all hover:bg-gray-200 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
                        >
                            Start for free
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="/waitlist"
                            className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                        >
                            View architecture
                        </a>
                    </div>

                </div>
            </div>

            {/* Fade out bottom overlay */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg-dark to-transparent z-10" />
        </section>
    );
}
