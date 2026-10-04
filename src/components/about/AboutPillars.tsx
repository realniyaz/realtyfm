"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Scale, Award, Sparkles } from "lucide-react";

const PILLARS = [
  {
    icon: TrendingUp,
    badge: "Disciplined Strategy",
    title: "Capital Appreciation Focus",
    description:
      "We selectively advise on locations and configurations with proven rental yields, high infrastructure velocity, and strong appreciation potential.",
  },
  {
    icon: ShieldCheck,
    badge: "Direct Allotment",
    title: "Zero Intermediary Friction",
    description:
      "Our direct institutional developer tie-ups give our clients priority unit allotments, pre-launch price locks, and direct inventory visibility.",
  },
  {
    icon: Scale,
    badge: "100% Scrutiny",
    title: "Uncompromising Legal Integrity",
    description:
      "Every project is audited for RERA compliance, title safety, builder delivery records, and bank approvals before recommendation.",
  },
  {
    icon: Award,
    badge: "Long-term Wealth",
    title: "End-to-End Asset Management",
    description:
      "From site selection, booking, and financing advisory to final possession and leasing management, we steward your capital at every stage.",
  },
];

export default function AboutPillars() {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 text-[#1A1815] overflow-hidden border-b border-[#E8DFD1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/35 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
            <span>Guiding Principles</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#1A1815] tracking-tight leading-tight max-w-3xl">
            The Pillars of Our <span className="italic text-[#865F27] font-normal">Advisory Standard.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 max-w-xl font-light">
            Every client consultation and portfolio recommendation is anchored in four operational cornerstones.
          </p>
          <div className="h-0.5 w-16 bg-[#B89246] mt-6" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#B89246]/60 shadow-[0_4px_20px_rgba(184,146,70,0.06)] hover:shadow-[0_12px_36px_rgba(184,146,70,0.14)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-[#B89246]/30 flex items-center justify-center text-[#865F27] group-hover:bg-[#B89246] group-hover:text-white transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#865F27] bg-[#F5EFEB] px-2.5 py-1 rounded-md border border-[#E8DFD1]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A1815] mb-2.5 group-hover:text-[#865F27] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs text-[#865F27] font-semibold">
                  <span>Pillar 0{idx + 1}</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89246]/40 group-hover:bg-[#B89246] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}