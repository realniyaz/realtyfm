import PortfolioCTA from "@/components/Portfolio/PortfolioCTA";
import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioProjects from "@/components/Portfolio/PortfolioProjects";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Master Real Estate Portfolio — Verified Developer Inventory",
  description:
    "Explore Realty FM's curated portfolio of luxury residential developments, premium high-rise apartments, and plotted projects across Delhi NCR and Yamuna Expressway.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Top offset matching the fixed navbar */}
      <div className="pt-[86px] sm:pt-[94px]">
        <PortfolioHero/>
        <PortfolioProjects/>
        <PortfolioCTA/>
      </div>
    </main>
  );
}