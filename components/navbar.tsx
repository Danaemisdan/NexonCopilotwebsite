"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bot, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "absolute top-0 inset-x-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "py-3 bg-bg-dark/80 backdrop-blur-md border-b border-primary/20 shadow-[0_0_15px_rgba(124,58,237,0.15)]"
                        : "py-5 bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/logo.svg"
                            alt="Nexon Go Pilot Logo"
                            width={96}
                            height={96}
                            className="transition-transform group-hover:scale-105"
                        />
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="/waitlist">Features</NavLink>
                        <NavLink href="/waitlist">Industries</NavLink>
                        <NavLink href="/waitlist">Safety</NavLink>
                        <NavLink href="/waitlist">Pricing</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/waitlist"
                            className="px-5 py-2 rounded-full font-medium text-sm text-text-muted hover:text-white transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/waitlist"
                            className="px-6 py-2 rounded-full font-medium text-sm bg-white text-black hover:bg-gray-200 transition-colors"
                        >
                            Get Started
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-text-main"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Backdrop */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] bg-bg-dark/95 backdrop-blur-xl md:hidden overflow-hidden">
                    <div className="flex justify-between items-center p-6">
                        <Link href="/" className="flex items-center gap-3">
                            <Image src="/logo.svg" alt="Logo" width={72} height={72} />
                        </Link>
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <X className="w-6 h-6 text-text-muted hover:text-white" />
                        </button>
                    </div>
                    <nav className="flex flex-col items-center gap-8 pt-12">
                        <MobileNavLink href="/waitlist" onClick={() => setMobileMenuOpen(false)}>Features</MobileNavLink>
                        <MobileNavLink href="/waitlist" onClick={() => setMobileMenuOpen(false)}>Industries</MobileNavLink>
                        <MobileNavLink href="/waitlist" onClick={() => setMobileMenuOpen(false)}>Safety</MobileNavLink>
                        <MobileNavLink href="/waitlist" onClick={() => setMobileMenuOpen(false)}>Pricing</MobileNavLink>

                        <div className="flex flex-col gap-4 w-full px-12 mt-4">
                            <Link href="/waitlist" className="w-full py-3 text-center rounded-full border border-primary/30 text-text-main">Sign In</Link>
                            <Link href="/waitlist" className="w-full py-3 text-center rounded-full bg-primary text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]">Get Started</Link>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-text-muted hover:text-white transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full rounded-full"></span>
        </Link>
    );
}

function MobileNavLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-xl font-medium text-text-muted hover:text-white transition-colors"
        >
            {children}
        </Link>
    );
}
