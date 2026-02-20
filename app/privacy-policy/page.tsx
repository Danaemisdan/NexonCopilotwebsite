export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-bg-dark text-white pt-32 pb-24 px-6 sm:px-12 selection:bg-primary/30 font-sans">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-extralight tracking-tight mb-8">Privacy Policy</h1>
                <p className="text-white/60 mb-8 font-light leading-relaxed">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-white/70 font-light leading-relaxed">
                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested, delivery notes, and other information you choose to provide.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">2. Use of Information</h2>
                        <p>We may use the information we collect about you to Provide, maintain, and improve our Services, including, for example, to facilitate payments, send receipts, provide products and services you request, develop new features, provide customer support to Users, develop safety features, authenticate users, and send product updates and administrative messages.</p>
                    </section>

                    <section>
                        <h2 className="text-xl text-white font-medium mb-4 tracking-tight">3. Data Security</h2>
                        <p>We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.</p>
                    </section>
                </div>
            </div>
        </main>
    );
}
