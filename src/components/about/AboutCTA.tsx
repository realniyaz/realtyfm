"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function AboutCTA() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-[#1A1815] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B89246]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AB47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
          <span>Consult With Senior Advisors</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1A1815] tracking-tight leading-tight">
          Ready to Allocate With <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#865F27]">Total Conviction?</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl font-light leading-relaxed">
          Connect with our advisory leadership in Noida Sector-90 or our Dubai Global Desk to evaluate premium inventory, off-market opportunities, and high-yield plans.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Direct WhatsApp Consultation */}
          <a
            href={COMPANY_DATA.primaryContact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
          >
            <div className="relative w-4 h-4">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
            </div>
            <span>Instant WhatsApp Desk</span>
          </a>

          {/* Schedule Consultation Link */}
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
          >
            <span>Schedule Desk Briefing</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Direct Phone Indicator */}
        <p className="mt-6 text-xs text-neutral-500 font-medium flex items-center gap-2">
          <PhoneCall className="w-3.5 h-3.5 text-[#865F27]" />
          <span>India HQ: {COMPANY_DATA.primaryContact.phoneDisplay} • Dubai Desk: {COMPANY_DATA.offices.dubai.phone.display}</span>
        </p>
      </div>
    </section>
  );
}