import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { BentoFeatures } from "@/components/bento-features";
import { Statistics } from "@/components/statistics";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/preloader";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-dark flex flex-col font-sans overflow-x-hidden selection:bg-secondary/30 selection:text-white relative">
      <Preloader />
      <Navbar />

      <article className="flex-1 w-full flex flex-col">
        <Hero />

        {/* Decorative divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <BentoFeatures />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        <Statistics />
      </article>

      <Footer />
    </main>
  );
}
