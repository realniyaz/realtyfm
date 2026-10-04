import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutDescription from "@/components/about/AboutDescription";
import AboutPartnersStrip from "@/components/about/AboutPartnersStrip";
import AboutPillars from "@/components/about/AboutPillars";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About Realty FM — Corporate Heritage & Leadership",
  description:
    "Discover Realty FM's vision, leadership under Anirudh Poddar, institutional alliances with India's premier developers, and our investment philosophy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Top offset matching fixed global navbar */}
      <div className="pt-[86px] sm:pt-[94px]">
        <AboutHero />
        <AboutDescription />
        <AboutPartnersStrip />
        <AboutPillars />
        <AboutCTA />
      </div>
    </main>
  );
}