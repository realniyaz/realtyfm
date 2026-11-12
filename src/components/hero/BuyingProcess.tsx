// src/components/process/BuyingProcess.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  Users,
  MapPin,
  FileCheck2,
  Landmark,
  KeyRound,
  ArrowRight,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Shortlist Properties",
    subtitle: "Curated Options",
    description:
      "Share your budget, preferred locations, and space needs. We filter verified residential and commercial projects across Noida, Yamuna Expressway, and Gurugram.",
    icon: Search,
  },
  {
    number: "02",
    title: "Advisory Briefing",
    subtitle: "Clear Comparisons",
    description:
      "Review floor plans, builder delivery records, and all-inclusive cost sheets side by side with a senior advisor before stepping onto a site.",
    icon: Users,
  },
  {
    number: "03",
    title: "Guided Site Visit",
    subtitle: "See It in Person",
    description:
      "Tour sample apartments, actual construction progress, and surrounding road or metro connectivity with our on-ground specialists.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Paperwork & Booking",
    subtitle: "Direct Builder Pricing",
    description:
      "Lock in your preferred unit at official developer rates with complete RERA registration and land-title verification.",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Home Loan Support",
    subtitle: "Smooth Financing",
    description:
      "Get fast-track sanctioning, minimal paperwork, and competitive interest rates through our pre-approved banking partners.",
    icon: Landmark,
  },
  {
    number: "06",
    title: "Handover & Beyond",
    subtitle: "Ongoing Support",
    description:
      "From demand-note checks and registry execution to final key handover and future leasing, our team stays with you.",
    icon: KeyRound,
  },
];

export default function BuyingProcess() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section
      id="process"
      className="relative w-full py-16 sm:py-28 bg-[#fbf7ee] text-[#0c0d0e] border-t border-[#ecdda9]/60 overflow-hidden"
    >
      {/* Subtle Background Micro-Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-20">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#b89246] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            How It Works
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight leading-tight max-w-2xl">
            Your Path to <span className="text-[#a47b30] italic font-normal">Property Ownership</span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 max-w-xl font-sans leading-relaxed">
            A straightforward, six-step buying process built around transparency, legal clarity, and zero guesswork.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: ALTERNATING CENTER-SPINE TIMELINE (lg and above)
           ========================================================================= */}
        <div className="hidden lg:block relative">
          {/* Central Vertical Hairline Spine */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-6 bottom-6 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#ecdda9] via-[#b89246] to-[#ecdda9]"
          />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="grid grid-cols-[1fr_88px_1fr] items-center"
                >
                  {/* Left Slot */}
                  <div className={isLeft ? "pr-4" : ""}>
                    {isLeft && (
                      <div className="group relative p-7 rounded-3xl bg-white border border-[#ecdda9] hover:border-[#b89246] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(184,146,70,0.12)] transition-all duration-300">
                        <div
                          aria-hidden="true"
                          className="absolute top-1/2 -right-4 w-4 h-[1.5px] bg-[#b89246]/60"
                        />

                        <div className="flex items-center justify-between gap-3 mb-3.5">
                          <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#b89246] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                            {step.subtitle}
                          </span>
                          <div className="w-10 h-10 rounded-xl bg-[#f5eed6] border border-[#ecdda9] flex items-center justify-center text-[#865f27] group-hover:bg-[#b89246] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5 stroke-[1.8]" />
                          </div>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#0c0d0e] mb-2">
                          {step.title}
                        </h3>

                        <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Numbered Node */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#b89246] border-4 border-[#fbf7ee] shadow-[0_4px_15px_rgba(184,146,70,0.3)] flex items-center justify-center">
                      <span className="font-serif font-bold text-sm text-white tracking-wider">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Right Slot */}
                  <div className={!isLeft ? "pl-4" : ""}>
                    {!isLeft && (
                      <div className="group relative p-7 rounded-3xl bg-white border border-[#ecdda9] hover:border-[#b89246] shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_14px_35px_rgba(184,146,70,0.12)] transition-all duration-300">
                        <div
                          aria-hidden="true"
                          className="absolute top-1/2 -left-4 w-4 h-[1.5px] bg-[#b89246]/60"
                        />

                        <div className="flex items-center justify-between gap-3 mb-3.5">
                          <div className="w-10 h-10 rounded-xl bg-[#f5eed6] border border-[#ecdda9] flex items-center justify-center text-[#865f27] group-hover:bg-[#b89246] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5 stroke-[1.8]" />
                          </div>
                          <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#b89246] text-white text-[11px] font-bold uppercase tracking-wider shadow-2xs">
                            {step.subtitle}
                          </span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#0c0d0e] mb-2">
                          {step.title}
                        </h3>

                        <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE VIEW: FULL-WIDTH ARCHITECTURAL CARDS WITH INTEGRATED STEP BADGE
           ========================================================================= */}
        <div className="block lg:hidden space-y-4">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="relative p-5 sm:p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-[0_6px_20px_rgba(0,0,0,0.03)]"
              >
                {/* Top Bar: Step Number + Solid Logo-Gold Tag + Right Icon */}
                <div className="flex items-center justify-between gap-2.5 mb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-[#0c0d0e] text-[#d4ab47] font-serif font-bold text-xs flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#b89246] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-[#f5eed6] border border-[#ecdda9] flex items-center justify-center text-[#865f27] shrink-0">
                    <Icon className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>

                {/* Title & Copy */}
                <h3 className="text-lg font-serif font-bold text-[#0c0d0e] mb-1.5">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Action Trigger */}
        <div className="mt-10 sm:mt-16 text-center">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span>CONTACT US</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}