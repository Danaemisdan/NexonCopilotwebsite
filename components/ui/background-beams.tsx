"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function BackgroundBeams() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-dark pointer-events-none">
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 bg-primary"
                animate={{
                    x: mousePosition.x - 400,
                    y: mousePosition.y - 400,
                }}
                transition={{
                    type: "spring",
                    stiffness: 50,
                    damping: 30,
                }}
            />
            <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/v1714558602/grid_yixd9e.svg')] opacity-10 bg-[length:50px_50px]" />
        </div>
    );
}
