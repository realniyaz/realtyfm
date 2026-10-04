"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Phone, MessageSquare, Clock } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function ContactHero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] pt-20 sm:pt-28 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 text-[#1A1815] overflow-hidden border-b border-[#B89246]/25">
      {/* Background Ambient Glows */}
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
          <span>Private Client Advisory</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-[#1A1815] tracking-tight leading-[1.1]"
        >
          Begin Your  <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#865F27]">Consultation.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-2xl font-light leading-relaxed"
        >
          Whether acquiring your landmark residence, allocating in high-conviction commercial floors, or structuring cross-border portfolios in Dubai, our advisory desks are ready to assist.
        </motion.p>

        {/* Quick Touchpoint Badges */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={COMPANY_DATA.primaryContact.phoneLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#B89246]/30 text-xs sm:text-sm font-semibold text-[#1A1815] hover:border-[#B89246] hover:bg-[#FAF7F0] transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#865F27]" />
            <span>Call: {COMPANY_DATA.primaryContact.phoneDisplay}</span>
          </a>

          <a
            href={COMPANY_DATA.primaryContact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366]/15 border border-[#25D366]/40 text-xs sm:text-sm font-bold text-[#137333] hover:bg-[#25D366]/25 transition-all shadow-sm"
          >
            <div className="relative w-4 h-4">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>Instant WhatsApp Desk</span>
          </a>

          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/70 border border-[#E8DFD1] text-xs text-neutral-500">
            <Clock className="w-3.5 h-3.5 text-[#865F27]" />
            <span>Active Mon–Sun 9:30 AM – 7:30 PM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}