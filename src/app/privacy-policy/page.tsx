// src/app/privacy-policy/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, Lock } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";

export const metadata = {
  title: `Privacy Policy | ${COMPANY_DATA.brandName}`,
  description: `Privacy Policy and data protection standards for ${COMPANY_DATA.brandName}.`,
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              1. Our Privacy Commitment
            </h2>
            <p>
              At <strong>{COMPANY_DATA.brandName}</strong>, your privacy and trust are of paramount importance. This Privacy Policy details how we collect, process, safeguard, and use the personal information you share with us through our website, contact forms, and digital communication channels.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              2. Information We Collect
            </h2>
            <p>We only collect personal information that you provide voluntarily when requesting consultations, pricing, or brochures:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Full Name</li>
              <li>Phone number, country calling code, and WhatsApp contact</li>
              <li>Email address</li>
              <li>Property preferences (configurations, budget, preferred locations)</li>
              <li>Specific inquiries or feedback submitted via our message forms</li>
            </ul>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              3. Purpose of Data Processing
            </h2>
            <p>Your details are used exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Provide personalized real estate advisory and requested cost sheets.</li>
              <li>Schedule physical site visits and virtual property briefings.</li>
              <li>Coordinate with developer project representatives on your behalf.</li>
              <li>Send critical property updates, pre-launch alerts, and official RERA disclosures.</li>
            </ul>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              4. No Selling or Unauthorized Sharing of Data
            </h2>
            <p>
              We maintain a strict anti-spam policy. <strong>We do not sell, rent, trade, or distribute your personal contact details to external marketing agencies or unauthorized third parties.</strong>
            </p>
            <p>
              Your contact data is accessed only by authorized {COMPANY_DATA.brandName} advisors and the direct developer sales desks associated with the specific property you inquired about.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard encryption protocols (HTTPS/TLS) and secure storage infrastructure to safeguard your information from unauthorized access, disclosure, or loss during transmission and storage.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              6. Your Data Rights &amp; Opt-Out
            </h2>
            <p>
              You maintain full control over your personal communication preferences. If you wish to review, update, or remove your contact information from our active consultation registry, simply reply &quot;STOP&quot; on WhatsApp or email our desk at:
            </p>
            <div className="pt-2 text-xs sm:text-sm space-y-1 text-neutral-800 font-semibold">
              <p>Phone: {COMPANY_DATA.primaryContact.phoneDisplay}</p>
              <p>Subject: Privacy &amp; Data Removal Request</p>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer/>
</div>
  )
}