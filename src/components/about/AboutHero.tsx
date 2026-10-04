"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Building2, Users2, Trophy, Sparkles } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] pt-20 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 text-[#1A1815] overflow-hidden border-b border-[#B89246]/25">
      {/* Background Architectural Luxury Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B89246]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-[#D4AB47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B89246]/35 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-5 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
          <span>The Institutional Standard</span>
        </motion.div>

        {/* Unified Anchor Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1A1815] tracking-tight leading-[1.1]"
        >
          Architects of Generational <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#865F27]">Real Estate Wealth.</span>
        </motion.h1>

        {/* Corporate Manifesto */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl font-light leading-relaxed"
        >
          Bridging discerning investors with premier residential landmark developments, strategic pre-launch allocations, and institutional wealth guidance across Delhi NCR and Dubai.
        </motion.p>

        {/* Credibility Benchmark Strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 w-full max-w-3xl pt-8 border-t border-[#B89246]/25 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">
              2,000+
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-600 font-medium mt-1">
              Satisfied Families
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">
              50+
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-600 font-medium mt-1">
              Specialist Advisors
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">
              12+
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-600 font-medium mt-1">
              Developer Alliances
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-serif font-bold text-[#865F27]">
              Dual
            </span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-600 font-medium mt-1">
              India & Dubai Desks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}