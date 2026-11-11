// src/app/page.tsx
import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/hero/Hero";
import Overview from "@/components/hero/CompanyOverview";
import Portfolio from "@/components/hero/FeaturedProjectsSlider";
import ConsultationCTA from "@/components/hero/ConsultationCTA";
import WhyChooseUs from "@/components/hero/WhyRealtyFm";
import FAQ from "@/components/hero/FAQ";
import ContactCTA from "@/components/hero/ContactCTA";
import Footer from "@/components/navigation/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[#0c0d0e] overflow-x-hidden">
      {/* Navbar sits directly on top of the hero image */}
      <Navbar />
      <Hero />
      <Overview/>
      <ConsultationCTA/>
      <Portfolio/>
      
      <WhyChooseUs/>
      <FAQ/>
      <ContactCTA/>
      <Footer/>
      {/* Other sections: About, Portfolio, Why Us, Contact */}
    </main>
  );
}