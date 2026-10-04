"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Users2, Award } from "lucide-react";
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
    <section id="about" className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 text-[#14171A] overflow-hidden">
      {/* Subtle luxury ambient watermarks */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[#B89246]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#B89246]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Tag */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/30 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-4"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89246]" />
            <span>Overview - RealtyFm</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#14171A] tracking-tight leading-tight max-w-3xl"
          >
            Invest Only to <span className="italic text-[#A47B30] font-normal">Gain Profit.</span>
          </motion.h2>
          <div className="h-0.5 w-20 bg-[#B89246] mt-4" />
        </div>

        {/* Two-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-neutral-700"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#14171A] tracking-tight">
                About Realty FM
              </h3>
              
              <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                Realty FM is a trusted name in residential real estate, known for bringing together a team of expert consultants who offer a wide range of property services. Under the visionary leadership of our founder <strong className="text-[#14171A] font-semibold">Anirudh Poddar</strong>, we have emerged as one of the leading real estate consultants for residential flats.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                With an impressive track record of exceptional sales and an unwavering commitment to customer satisfaction, Realty FM has set new standards in the real estate industry. Our team of over <strong className="text-[#14171A] font-semibold">50+ experienced professionals</strong> collaborates with renowned developers such as <span className="text-[#865F27] font-semibold">Ace, Gaur, Arihant, CRC, Tata Housing, ATS</span>, and many more.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-neutral-700">
                This partnership enables us to offer a diverse portfolio of high-quality apartments and flats tailored to meet various client preferences. With a client base of over <strong className="text-[#14171A] font-semibold">2,000+ satisfied customers</strong>, Realty FM has become a trusted choice for individuals seeking to buy or invest in residential properties.
              </p>
            </div>

            {/* Credibility Key Takeaways */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>2,000+ Satisfied Property Investors</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>50+ Elite Advisory Professionals</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>Strategic Developer Direct Allocations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                <span>End-to-End Asset & Financial Advisory</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              {/* Contact / Consultation CTA */}
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#14171A] hover:bg-[#282C34] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl"
              >
                <span>Connect With An Advisor</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89246]" />
              </a>

              {/* Read More Link */}
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#F5EFEB] border border-[#B89246]/50 text-[#14171A] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 shadow-sm"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-[#865F27]" />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Executive Visual Card & Developer Emblems */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Stat Showcase Card */}
            <div className="rounded-2xl bg-white p-7 sm:p-9 border border-[#B89246]/30 shadow-[0_12px_36px_rgba(0,0,0,0.04)] relative">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#865F27] block mb-2">
                Executive Leadership
              </span>
              <h4 className="text-2xl font-serif font-bold text-[#14171A]">
                Anirudh Poddar
              </h4>
              <p className="text-xs text-neutral-500 font-medium mb-6">
                Founder & Managing Director, Realty FM
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-[#B89246]">2,000+</span>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">Satisfied Customers</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif font-bold text-[#B89246]">50+</span>
                  <span className="text-[11px] text-neutral-500 uppercase tracking-wider mt-1">Consultants Team</span>
                </div>
              </div>
            </div>

            {/* Developer Partner Badges Grid */}
            <div className="rounded-2xl bg-white/70 backdrop-blur-md p-6 border border-[#B89246]/25">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#865F27] font-bold mb-4 text-center">
                Authorized Advisory Network
              </p>
              <div className="grid grid-cols-3 gap-3">
                {DEVELOPER_BADGES.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center h-14 bg-white rounded-lg border border-[#E8DFD1] p-2 hover:border-[#B89246] transition-colors"
                  >
                    <div className="relative w-full h-8">
                      <Image
                        src={item.logo}
                        alt={item.name}
                        fill
                        className="object-contain filter grayscale contrast-125 hover:grayscale-0 transition-all duration-200"
                        sizes="(max-width: 640px) 90px, 120px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}