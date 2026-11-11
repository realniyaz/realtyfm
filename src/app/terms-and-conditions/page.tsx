// src/app/terms-and-conditions/page.tsx
import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import Footer from "@/components/navigation/Footer";

export const metadata = {
  title: `Terms & Conditions | ${COMPANY_DATA.brandName}`,
  description: `Terms and conditions governing the use of ${COMPANY_DATA.brandName} services and website.`,
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>Usage Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-neutral-500 font-sans">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-700 font-sans text-sm sm:text-base leading-relaxed">
          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or submitting an inquiry through <strong>{COMPANY_DATA.brandName}</strong> (&quot;the Platform&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you acknowledge and agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using this website.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              2. Scope of Advisory Services
            </h2>
            <p>
              {COMPANY_DATA.brandName} provides real estate consultation, property discovery assistance, direct developer coordination, and site visit scheduling across designated regions. We act solely as a facilitative channel partner and do not enter into property sales contracts as a principal developer.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              3. User Inquiries and Communications
            </h2>
            <p>
              When submitting your personal information (including name, telephone number, email address, or project preferences) through our forms or interactive buttons, you consent to receive communications, calls, and WhatsApp updates from our verified property consultants regarding your inquiry.
            </p>
            <p>
              You agree to provide accurate, current, and complete details when submitting any consultation form.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              4. Bookings, Payments, and Contracts
            </h2>
            <p>
              All property bookings, token advances, formal applications, and execution of Builder-Buyer Agreements (BBA) are conducted directly between the buyer and the licensed real estate developer.
            </p>
            <p>
              {COMPANY_DATA.brandName} does not collect purchase consideration or property sale installments into its personal accounts. All financial payments for property allotments must be made strictly in favor of the developer&apos;s designated RERA escrow bank account.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              5. Intellectual Property
            </h2>
            <p>
              The layout, design, text, custom styling, graphics, and code of this website are the intellectual property of {COMPANY_DATA.brandName}. Logos, trademarks, project names, and developer graphics belong to their respective corporate owners and are used strictly for informational identification and channel promotion.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              6. Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall {COMPANY_DATA.brandName}, its directors, or its representatives be liable for any direct, indirect, incidental, or consequential damages resulting from project delivery delays, construction modifications, developer insolvency, price fluctuations, or regulatory changes made by planning authorities.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-[#0c0d0e]">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms and Conditions shall be governed and interpreted in accordance with the laws of the Republic of India. Any disputes arising from the use of this website or advisory services shall be subject to the exclusive jurisdiction of the competent courts in Gautam Buddha Nagar (Noida), Uttar Pradesh.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer/>
    </div>
  );
}