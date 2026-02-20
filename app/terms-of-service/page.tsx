export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 px-6 sm:px-12 selection:bg-primary/30 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight mb-8">Terms of Service</h1>
                <p className="text-white/60 mb-8 font-light leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-white/70 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">1. Acceptance of Terms</h2>
                        <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials on Nexon Copilot's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">3. Limitations</h2>
                        <p>In no event shall Nexon Copilot or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
