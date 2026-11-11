// src/app/disclaimer/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: `Disclaimer | ${COMPANY_DATA.brandName}`,
  description: `Official disclaimer and RERA compliance statements for ${COMPANY_DATA.brandName}.`,
};

export default function DisclaimerPage() {
  const lastUpdated = "November 2026";

  return (
    <div className="flex flex-col min-h-screen bg-[#fbf7ee]">
    <main className="min-h-screen bg-[#fbf7ee] text-[#0c0d0e] py-16 sm:py-24">
      {/* Micro-Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#865f27] hover:text-[#a47b30] uppercase tracking-wider mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="pb-8 border-b border-[#ecdda9] mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight">
            Disclaimer
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              1. Independent Channel Partner & Advisory Role
            </h2>
            <p>
              <strong>{COMPANY_DATA.brandName}</strong> operates strictly as an independent real estate marketing partner, consultant, and authorized channel advisor. We are neither the real estate developer, builder, nor owner of the properties listed on this website unless explicitly stated otherwise in writing.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              2. Information & Informational Accuracy
            </h2>
            <p>
              The materials, project details, visual renderings, floor plans, configurations, pricing bands, payment plans, and location maps displayed on this website are provided solely for general informational and conceptual guidance.
            </p>
            <p>
              While we make diligent efforts to keep the information up-to-date and verified directly against builder disclosures, all project details remain subject to change at the sole discretion of the respective developers, authorities, and regulatory bodies without prior notification.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              3. Visual Renderings & Artistic Impressions
            </h2>
            <p>
              Photographs, 3D architectural renders, elevation models, interior mock-ups, and amenity representations shown on this portal are artistic impressions designed to illustrate design concepts. Actual finishes, furniture, fixtures, specifications, and landscapes may vary upon final construction and delivery.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              4. RERA Compliance & Due Diligence
            </h2>
            <p>
              All property purchases in India are subject to the provisions of the Real Estate (Regulation and Development) Act, 2016 (RERA) and respective state RERA authorities (such as UP RERA and HRERA).
            </p>
            <p>
              Buyers and prospective investors are strongly encouraged to independently verify the official RERA registration number, sanctioned building plans, encumbrance certificates, and developer title deeds directly on the official state RERA web portal prior to executing any booking form or financial transaction.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              5. No Financial or Investment Guarantee
            </h2>
            <p>
              Content on this website does not constitute an offer, legal warranty, solicitation, or certified investment advice. Past capital appreciation, historical rental yields, or infrastructure projections mentioned regarding any location (such as Noida, Greater Noida, Yamuna Expressway, or Gurugram) do not guarantee future returns.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              6. Contact
            </h2>
            <p>
              If you have any questions regarding specific project disclosures or need direct verification of developer paperwork, please reach out to our advisory desk:
            </p>
            <div className="pt-2 text-xs sm:text-sm space-y-1 text-neutral-800 font-semibold">
              <p>Helpline: {COMPANY_DATA.primaryContact.phoneDisplay}</p>
              <p>Office: {COMPANY_DATA.offices.india.fullAddress}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
}