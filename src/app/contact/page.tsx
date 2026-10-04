import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact & Advisory Desks",
  description:
    "Connect with Realty FM senior investment consultants at Noida Sector-90 Headquarters or our Dubai Global Desk.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Top offset matching the global fixed navbar */}
      <div className="pt-[86px] sm:pt-[94px]">
        <ContactHero />
        <ContactSection />
      </div>
    </main>
  );
}