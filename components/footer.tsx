import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <Image src="/logo.svg" alt="Logo" width={36} height={36} className="opacity-80 hover:opacity-100 transition-opacity" />
                        </Link>
                        <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                            The private AI-powered revenue operating system for modern businesses. Centralize and automate your entire CRM workflow.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Platform</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/waitlist">AI Voice Agent</FooterLink>
                            <FooterLink href="/waitlist">AI CRM</FooterLink>
                            <FooterLink href="/waitlist">Omnichannel</FooterLink>
                            <FooterLink href="/waitlist">Campaign Engine</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Company</h4>
                        <ul className="space-y-4">
                            <FooterLink href="#">About Us</FooterLink>
                            <FooterLink href="/waitlist">Industries</FooterLink>
                            <FooterLink href="#">Partners</FooterLink>
                            <FooterLink href="/waitlist">Contact</FooterLink>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
                            <FooterLink href="/compliance">Security & Compliance</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-muted text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Nexon Copilot. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <SocialLink href="#" label="Twitter" />
                        <SocialLink href="#" label="LinkedIn" />
                        <SocialLink href="#" label="GitHub" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-sm text-text-muted hover:text-white transition-colors duration-200">
                {children}
            </Link>
        </li>
    );
}

function SocialLink({ href, label }: { href: string; label: string }) {
    return (
        <a href={href} className="text-text-muted hover:text-white transition-colors text-sm font-medium">
            {label}
        </a>
    );
}
