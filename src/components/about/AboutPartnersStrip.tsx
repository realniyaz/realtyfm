"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PARTNERS = [
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
  // Additional premier partners from the portfolio roster
  { name: "Tata Value Homes", logo: "/Tata-Value-Homes.webp" },
  { name: "VTP Realty", logo: "/VTP-Realty.webp" },
];

export default function AboutPartnersStrip() {
  const tickerItems = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] border-y border-[#B89246]/30 py-9 sm:py-12 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-[#865F27] font-bold">
          Institutional Alliances & Developer Portfolios
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Soft edge masking */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-r from-[#FAF7F0] via-[#FAF7F0]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-l from-[#FAF7F0] via-[#FAF7F0]/80 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex items-center gap-4 sm:gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 32,
            repeat: Infinity,
          }}
        >
          {tickerItems.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="group flex items-center justify-center min-w-[155px] sm:min-w-[195px] h-16 sm:h-20 px-6 sm:px-8 rounded-xl bg-white border border-[#B89246]/40 hover:border-[#B89246] shadow-[0_4px_20px_rgba(184,146,70,0.08)] hover:shadow-[0_8px_25px_rgba(184,146,70,0.18)] transition-all duration-300"
            >
              <div className="relative w-full h-9 sm:h-11">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain filter grayscale contrast-125 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  sizes="(max-width: 640px) 140px, 180px"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}