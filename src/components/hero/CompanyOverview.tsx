"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const DEVELOPER_BADGES = [
  { name: "Birla Estates", logo: "/Birla-Estate.webp" },
  { name: "DLF", logo: "/DLF.webp" },
  { name: "Godrej Properties", logo: "/Godrej-Properties.webp" },
  { name: "Max Estates", logo: "/MAX-ESTATES.webp" },
  { name: "Sobha Realty", logo: "/Sobha-Realty.webp" },
  { name: "Lodha", logo: "/Lodha.webp" },
];

export default function CompanyOverview() {
  return (
    <section id="about" className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 text-[#14171A] overflow-hidden border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/30 text-[#865F27] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89246]" />
            <span>Overview • Realty FM</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#14171A] tracking-tight leading-tight max-w-2xl">
            Invest Only to <span className="italic text-[#865F27] font-normal">Gain Profit.</span>
          </h2>
          <div className="h-0.5 w-14 bg-[#B89246] mt-3" />
        </div>

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative & Highlights */}
          <div className="lg:col-span-7 space-y-5 text-neutral-700">
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#14171A] tracking-tight">
              About Realty FM
            </h3>
            
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              Realty FM is a trusted name in residential real estate, known for bringing together a team of expert consultants who offer a wide range of property services. Under the visionary leadership of our founder <strong className="text-[#14171A] font-semibold">Anirudh Poddar</strong>, we have emerged as one of the leading real estate consultants for residential flats.
            </p>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              With an impressive track record of exceptional sales and an unwavering commitment to customer satisfaction, Realty FM has set new standards in the real estate industry. Our team of over <strong className="text-[#14171A] font-semibold">50+ experienced professionals</strong> collaborates with renowned developers such as <span className="text-[#865F27] font-semibold">Ace, Gaur, Arihant, CRC, Tata Housing, ATS</span>, and many more.
            </p>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              This partnership enables us to offer a diverse portfolio of high-quality apartments and flats tailored to meet various client preferences. With a client base of over <strong className="text-[#14171A] font-semibold">2,000+ satisfied customers</strong>, Realty FM has become a trusted choice for individuals seeking to buy or invest in residential properties.
            </p>

            {/* Credibility Key Takeaways */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>2,000+ Satisfied Property Investors</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>50+ Elite Advisory Professionals</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>Strategic Developer Direct Allocations</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>End-to-End Asset & Legal Advisory</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#14171A] hover:bg-[#282C34] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-md active:scale-98"
              >
                <span>Connect With An Advisor</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89246]" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#F5EFEB] border border-[#B89246]/40 text-[#14171A] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-98"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#865F27]" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Executive Visual Card & Developer Badges */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Stat Showcase Card */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 border border-[#B89246]/35 shadow-[0_4px_20px_rgba(184,146,70,0.06)]">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#865F27] block mb-1">
                Executive Leadership
              </span>
              <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#14171A]">
                Anirudh Poddar
              </h4>
              <p className="text-xs text-neutral-500 font-medium mb-5">
                Founder & Managing Director, Realty FM
              </p>

              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">2,000+</span>
                  <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider mt-0.5">Satisfied Customers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">50+</span>
                  <span className="text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider mt-0.5">Consultants Team</span>
                </div>
              </div>
            </div>

            {/* Developer Partner Badges */}
            <div className="rounded-2xl bg-white/80 p-5 border border-[#B89246]/25 shadow-sm">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#865F27] font-bold mb-3.5 text-center">
                Authorized Advisory Network
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                {DEVELOPER_BADGES.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center h-12 bg-white rounded-lg border border-[#E8DFD1] p-1.5"
                  >
                    <div className="relative w-full h-7">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain filter grayscale opacity-90"
                        sizes="(max-width: 640px) 110px, 130px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}