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
      className="relative w-full bg-[#FAF8F5] py-20 sm:py-28 lg:py-32 text-[#1A1815] overflow-hidden border-b border-[#E8DFD1]"
    >
      {/* Ambient luxury lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#B89246]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#B89246]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading & Mobile Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 lg:mb-20 gap-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5EFEB] border border-[#B89246]/35 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
              <span>The Realty FM Advantage</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#1A1815] tracking-tight leading-[1.12]"
            >
              Why Investors Choose{" "}
              <span className="italic text-[#865F27] font-normal">Realty FM.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-xs sm:text-sm lg:text-base text-neutral-600 font-light leading-relaxed max-w-2xl"
            >
              We operate as your private property wealth architect, combining strict legal audit protocols with direct allocations across tier-1 developer inventory.
            </motion.p>
          </div>

          {/* Navigation Controls for Tablets and Mobile */}
          <div className="flex lg:hidden items-center gap-2.5 self-end">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll Left"
              className="p-3 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll Right"
              className="p-3 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 1. DESKTOP VIEW: Structured 3-Column Luxury Architecture Grid (lg and above) */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={`desktop-${adv.title}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative flex flex-col justify-between p-8 xl:p-9 rounded-2xl bg-white border border-[#E8DFD1] hover:border-[#B89246]/60 shadow-[0_4px_20px_rgba(184,146,70,0.05)] hover:shadow-[0_16px_40px_rgba(184,146,70,0.12)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
              >
                {/* Subtle Luxury Number Watermark */}
                <span className="absolute top-4 right-6 font-serif text-5xl font-bold text-neutral-100 group-hover:text-[#B89246]/10 transition-colors pointer-events-none select-none">
                  {adv.num}
                </span>

                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="w-13 h-13 rounded-xl bg-[#FAF7F0] border border-[#B89246]/30 flex items-center justify-center text-[#865F27] group-hover:bg-[#B89246] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#865F27] bg-[#F5EFEB] px-3 py-1 rounded-full border border-[#E8DFD1]">
                      {adv.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl xl:text-2xl font-serif font-bold text-[#1A1815] tracking-tight mb-3 group-hover:text-[#865F27] transition-colors relative z-10">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed font-light relative z-10">
                    {adv.description}
                  </p>
                </div>

                {/* Footer Accent */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#865F27] relative z-10">
                  <span className="tracking-wide">Institutional Standard</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89246]/40 group-hover:bg-[#B89246] group-hover:scale-125 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. MOBILE & TABLET VIEW: Smooth Horizontal Swipe Track (<lg) */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScrollBounds}
          className="lg:hidden flex items-stretch gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar select-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={`mobile-${adv.title}`}
                className="snap-start shrink-0 w-[84vw] sm:w-[380px] flex flex-col justify-between p-7 rounded-2xl bg-white border border-[#E8DFD1] shadow-[0_4px_20px_rgba(184,146,70,0.06)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF7F0] border border-[#B89246]/30 flex items-center justify-center text-[#865F27]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#865F27] bg-[#F5EFEB] px-2.5 py-1 rounded-md border border-[#E8DFD1]">
                      {adv.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#1A1815] mb-2.5">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#865F27]">
                  <span>Pillar {adv.num}</span>
                  <div className="w-2 h-2 rounded-full bg-[#B89246]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Guidance Bar */}
        <div className="flex lg:hidden items-center justify-center gap-1.5 mt-2 text-neutral-400 text-[11px] uppercase tracking-wider font-medium">
          <span>Swipe horizontally to view all pillars</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </div>

        {/* Bottom Executive CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 lg:mt-24 rounded-3xl bg-gradient-to-r from-[#14171A] via-[#1E232A] to-[#14171A] p-8 sm:p-12 lg:p-14 text-[#FAF8F5] flex flex-col lg:flex-row items-center justify-between gap-8 border border-[#B89246]/30 shadow-2xl"
        >
          <div className="text-center lg:text-left space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#E0C675] font-semibold block">
              Private Portfolio Evaluation
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight">
              Ready to allocate in verified, high-yield assets?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm lg:text-base font-light leading-relaxed">
              Schedule a one-on-one session with our senior investment managers to assess pre-launch allotments, prime expressway plots, and luxury residences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full lg:w-auto">
            <a
              href={COMPANY_DATA.primaryContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <div className="relative w-4 h-4">
                <Image
                  src="/wh.png"
                  alt="WhatsApp"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span>WhatsApp Advisor</span>
            </a>

            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#B89246] hover:bg-[#A47B30] text-[#0C0D0E] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md active:scale-95"
            >
              <span>Schedule Desk Meet</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}