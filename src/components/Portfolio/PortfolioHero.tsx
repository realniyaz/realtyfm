"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Building2, MapPin, ShieldCheck } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] pt-20 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 text-[#1A1815] overflow-hidden border-b border-[#B89246]/25">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B89246]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AB47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B89246]/35 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
          <span>Curated Developer Inventory</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1A1815] tracking-tight leading-[1.1]"
        >
          RealtyFM <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#865F27]">Portfolio.</span>
        </motion.h1>

        {/* Descriptor */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl font-light leading-relaxed"
        >
          Explore premier residential towers, resort-style havens, and plotted enclaves across Noida, Yamuna Expressway, Greater Noida, and Gurugram.
        </motion.p>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-600"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8DFD1]">
            <Building2 className="w-3.5 h-3.5 text-[#865F27]" />
            <span>16+ Verified Developments</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8DFD1]">
            <MapPin className="w-3.5 h-3.5 text-[#865F27]" />
            <span>Prime Growth Corridors</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8DFD1]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#865F27]" />
            <span>Direct Developer Allocations</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}