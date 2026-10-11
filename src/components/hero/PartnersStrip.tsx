"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Partner {
  name: string;
  logo: string;
}

const PARTNERS: Partner[] = [
  { name: "Birla Estates", logo: "/Birla-Estate.webp" },
  { name: "DLF", logo: "/DLF.webp" },
  { name: "Godrej Properties", logo: "/Godrej-Properties.webp" },
  { name: "Max Estates", logo: "/MAX-ESTATES.webp" },
  { name: "Sobha Realty", logo: "/Sobha-Realty.webp" },
  { name: "Lodha", logo: "/Lodha.webp" },
  { name: "Eldeco", logo: "/ELDECO.webp" },
  { name: "Kolte Patil", logo: "/Kolte-Patil.webp" },
  { name: "Signature Global", logo: "/Signature-Global.webp" },
  { name: "Nirala India Parivar", logo: "/Nirala-India-Parivar-1.webp" },
  { name: "Tata Value Homes", logo: "/Tata-Value-Homes.webp" },
  { name: "VTP Realty", logo: "/VTP-Realty.webp" },
];

export default function PartnersStrip() {
  const tickerItems = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF8F5] via-[#F5EFEB] to-[#FAF8F5] border-y border-[#B89246]/25 py-6 sm:py-10 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-4 sm:mb-6 text-center">
        <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#865F27] font-bold">
          Our Partnerships & Authorised Network
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Soft Left & Right Light Vignette Masks */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-12 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-3 sm:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 34,
            repeat: Infinity,
          }}
        >
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex items-center justify-center min-w-[130px] sm:min-w-[180px] h-14 sm:h-20 px-4 sm:px-6 rounded-xl bg-white border border-[#B89246]/35 shadow-[0_2px_12px_rgba(184,146,70,0.06)]"
            >
              <div className="relative w-full h-8 sm:h-10">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 640px) 110px, 160px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}