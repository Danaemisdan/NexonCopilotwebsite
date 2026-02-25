import { CinematicVision } from "@/components/cinematic-vision";

export const metadata = {
    title: "Vision | Nexon Copilot",
    description: "Stop renting attention. Start owning growth.",
};

export default function VisionPage() {
    return (
        <main className="bg-black min-h-screen">
            <CinematicVision />
        </main>
    );
}
