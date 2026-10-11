"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  Users2,
  BadgeCheck,
  Scale,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const ADVANTAGES = [
  {
    num: "01",
    icon: TrendingUp,
    badge: "Maximum Yield",
    title: "Disciplined Profit Strategy",
    description:
      "Every asset in our portfolio undergoes rigorous capital appreciation analysis and rental telemetry. We believe in one unwavering philosophy: Invest only to gain profit.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    badge: "Direct Allocation",
    title: "Authorized Developer Access",
    description:
      "Direct institutional alliances with tier-1 developers such as Gaurs, Ace, Max Estates, Godrej, DLF, and Sobha ensure first-look pricing, zero middleman friction, and priority unit allotment.",
  },
  {
    num: "03",
    icon: Users2,
    badge: "50+ Specialists",
    title: "Institutional Wealth Advisory",
    description:
      "Our multi-disciplinary team of 50+ experienced real estate consultants, financial planners, and legal advisors guide clients through end-to-end tax structuring and acquisition compliance.",
  },
  {
    num: "04",
    icon: Building2,
    badge: "Noida & Dubai",
    title: "Global Cross-Border Desks",
    description:
      "Dual advisory desks operating seamlessly out of Alphathum Sector-90 Noida and Latifa Tower, Sheikh Zayed Road Dubai, giving investors both domestic stability and global yield opportunities.",
  },
  {
    num: "05",
    icon: BadgeCheck,
    badge: "2,000+ Families",
    title: "Unmatched Delivery Record",
    description:
      "Over 2,000 satisfied investors and families have built generational property wealth through our bespoke portfolio consulting and post-handover asset management.",
  },
  {
    num: "06",
    icon: Scale,
    badge: "Due Diligence",
    title: "100% Legal & RERA Scrutiny",
    description:
      "Complete title verification, developer track record audits, and infrastructure milestone tracking so your capital is always safeguarded with zero operational risk.",
  },
];

export default function WhyRealtyFM() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollBounds();
    window.addEventListener("resize", checkScrollBounds);
    return () => window.removeEventListener("resize", checkScrollBounds);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollOffset = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollOffset : scrollOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="advantages"
      className="relative w-full bg-[#FAF8F5] py-14 sm:py-20 lg:py-28 text-[#1A1815] overflow-hidden border-b border-[#E8DFD1]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Mobile Top Bar Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 sm:mb-12 gap-5">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/35 text-[#865F27] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
              <span>The Realty FM Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#1A1815] tracking-tight leading-tight">
              Why Investors Choose{" "}
              <span className="italic text-[#865F27] font-normal">Realty FM.</span>
            </h2>

            <p className="mt-2 text-xs sm:text-sm md:text-base text-neutral-600 font-light leading-relaxed max-w-2xl">
              We operate as your private property wealth architect, combining strict legal audit protocols with direct allocations across tier-1 developer inventory.
            </p>
          </div>

          {/* Navigation Buttons (Aligned properly on mobile) */}
          <div className="flex lg:hidden items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium sm:hidden">
              Swipe to explore
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Scroll Left"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Scroll Right"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 1. Desktop 3-Column Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={`desktop-${adv.title}`}
                className="group relative flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#B89246]/60 shadow-[0_4px_20px_rgba(184,146,70,0.05)] hover:shadow-[0_12px_30px_rgba(184,146,70,0.12)] transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF7F0] border border-[#B89246]/30 flex items-center justify-center text-[#865F27] group-hover:bg-[#B89246] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#865F27] bg-[#F5EFEB] px-2.5 py-1 rounded-md border border-[#E8DFD1]">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1A1815] tracking-tight mb-2 group-hover:text-[#865F27] transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#865F27]">
                  <span className="tracking-wide">Institutional Standard</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89246]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Mobile Horizontal Swipe Track (Fixed Dimensions & Snapping) */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollBounds}
          className="lg:hidden flex items-stretch gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={`mobile-${adv.title}`}
                className="snap-center shrink-0 w-[84vw] max-w-[320px] sm:w-[350px] flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E8DFD1] shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#B89246]/30 flex items-center justify-center text-[#865F27]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#865F27] bg-[#F5EFEB] px-2 py-0.5 rounded-md border border-[#E8DFD1]">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-serif font-bold text-[#1A1815] mb-1.5 leading-snug">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-light">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#865F27]">
                  <span>Pillar {adv.num}</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89246]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner (Properly Aligned & Stacked on Mobile) */}
        <div className="mt-10 sm:mt-16 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#14171A] via-[#1E232A] to-[#14171A] p-6 sm:p-10 text-[#FAF8F5] flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#B89246]/30 shadow-xl">
          <div className="text-center lg:text-left space-y-2 w-full lg:max-w-xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#E0C675] font-semibold block">
              Private Portfolio Evaluation
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white tracking-tight">
              Ready to allocate in verified, high-yield assets?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed">
              Schedule a consultation with our senior investment managers to assess pre-launch allotments and prime locations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
            <a
              href={COMPANY_DATA.primaryContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
              </div>
              <span className="whitespace-nowrap">WhatsApp Advisor</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#B89246] hover:bg-[#a47b30] text-[#0C0D0E] text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-98"
            >
              <span className="whitespace-nowrap">Schedule Desk Meet</span>
              <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}