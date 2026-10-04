import CompanyOverview from "@/components/hero/CompanyOverview";
import ContactCTA from "@/components/hero/ContactCTA";
import FeaturedProjectsSlider from "@/components/hero/FeaturedProjectsSlider";
import Hero from "@/components/hero/Hero";
import PartnersStrip from "@/components/hero/PartnersStrip";
import WhyRealtyFM from "@/components/hero/WhyRealtyFm";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d0e]">
      {/* Top offset matching the global fixed scroller + navbar height */}
      <div className="pt-[86px] sm:pt-[94px]">
        <Hero />
        <PartnersStrip/>
        <CompanyOverview/>
        <FeaturedProjectsSlider/>
        <WhyRealtyFM/>
        <ContactCTA/>
      </div>
    </main>
  );
}