"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const DEVELOPER_BADGES = [
{ name: "DLF", logo: "/DLF.webp" },
  { name: "Godrej Properties", logo: "/Godrej-Properties.webp" },
  { name: "Max Estates", logo: "/MAX-ESTATES.webp" },
  { name: "Sobha Realty", logo: "/Sobha-Realty.webp" },
  { name: "Lodha", logo: "/Lodha.webp" },
  { name: "Eldeco", logo: "/ELDECO.webp" },
];

export default function AboutDescription() {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 text-[#1A1815] overflow-hidden border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/35 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B89246]" />
            <span>Corporate Heritage</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#1A1815] tracking-tight leading-tight max-w-3xl">
            Invest Only to <span className="italic text-[#865F27] font-normal">Gain Profit.</span>
          </h2>
          <div className="h-0.5 w-16 bg-[#B89246] mt-4" />
        </div>

        {/* Narrative & Leadership Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-neutral-700"
          >
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1815] tracking-tight">
                Our Story & Philosophy
              </h3>

              <p className="text-sm sm:text-base leading-relaxed">
                Realty FM is a trusted name in residential real estate, known for bringing together a team of expert consultants who offer a wide range of property services. Under the visionary leadership of our founder <strong className="text-[#1A1815] font-semibold">Anirudh Poddar</strong>, we have emerged as one of the leading real estate consultants for residential flats.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                With an impressive track record of exceptional sales and an unwavering commitment to customer satisfaction, Realty FM has set new standards in the real estate industry. Our team of over <strong className="text-[#1A1815] font-semibold">50+ experienced professionals</strong> collaborates with renowned developers such as <span className="text-[#865F27] font-semibold">Ace, Gaur, Arihant, CRC, Tata Housing, ATS</span>, and many more.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                This partnership enables us to offer a diverse portfolio of high-quality apartments and flats tailored to meet various client preferences. With a client base of over <strong className="text-[#1A1815] font-semibold">2,000+ satisfied customers</strong>, Realty FM has become a trusted choice for individuals seeking to buy or invest in residential properties.
              </p>
            </div>

            {/* Checklist Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {[
                "2,000+ Satisfied Families Settled",
                "50+ Dedicated Investment Advisors",
                "Tier-1 Developer Priority Allocations",
                "End-to-End Legal & RERA Advisory",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-[#B89246] flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-sm"
              >
                <div className="relative w-4 h-4">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
                </div>
                <span>Advisory WhatsApp Desk</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all shadow-sm"
              >
                <span>Book Office Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Founder Profile Card & Authorized Developers Grid */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Leadership Spotlight Card */}
            <div className="rounded-2xl bg-white p-7 sm:p-9 border border-[#B89246]/35 shadow-[0_10px_35px_rgba(184,146,70,0.06)]">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#865F27] block mb-1">
                Executive Leadership
              </span>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1815]">
                Anirudh Poddar
              </h4>
              <p className="text-xs text-neutral-500 font-medium mb-6">
                Founder & Managing Director, Realty FM
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                <div>
                  <span className="text-3xl font-serif font-bold text-[#865F27]">2,000+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">Satisfied Customers</span>
                </div>
                <div>
                  <span className="text-3xl font-serif font-bold text-[#865F27]">50+</span>
                  <span className="text-[10px] text-neutral-500 uppercase tracking-wider block mt-0.5">Consultants Team</span>
                </div>
              </div>
            </div>

            {/* Developer Network Showcase */}
            <div className="rounded-2xl bg-white/80 p-6 border border-[#B89246]/25 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#865F27] font-bold block mb-4 text-center">
                Authorized Advisory Alliances
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                {DEVELOPER_BADGES.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-center h-12 bg-white rounded-lg border border-[#E8DFD1] p-2 hover:border-[#B89246] transition-colors"
                  >
                    <div className="relative w-full h-7">
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