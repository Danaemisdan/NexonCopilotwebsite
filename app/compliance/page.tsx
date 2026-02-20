export default function Compliance() {
    return (
        <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 px-6 sm:px-12 selection:bg-primary/30 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight mb-8">Security & Compliance</h1>
                <p className="text-white/60 mb-8 font-light leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-white/70 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">1. Enterprise-Grade Security</h2>
                        <p>Our infrastructure is built with security-first principles, utilizing end-to-end encryption for both data at rest and data in transit. We follow strict access controls, regular security audits, and continuous monitoring to ensure your data is always protected.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">2. Regulatory Compliance</h2>
                        <p>We adhere to strict global regulatory requirements. By design, our systems are built to support compliance frameworks including SOC2, GDPR, and HIPAA depending on your specific architectural deployment.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">3. Data Residency</h2>
                        <p>We provide flexible deployment options ensuring your data remains in the regions you specify. We never use your proprietary data to train our foundational models without explicit, opt-in consent.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
