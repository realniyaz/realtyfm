// src/components/process/BuyingProcess.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Search,
  Users,
  MapPin,
  FileCheck2,
  Landmark,
  KeyRound,
  ArrowRight,
  ChevronRight,
  RotateCcw,
} from "lucide-react";

interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  icon: React.ElementType;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Shortlist Properties",
    subtitle: "Curated Options",
    description:
      "Share your budget, preferred locations, and space needs. We filter verified residential and commercial projects across Noida, Yamuna Expressway, and Gurugram.",
    image: "/1.avif",
    imageAlt: "Property floor plan review and budget planning",
    objectPosition: "object-center",
    icon: Search,
  },
  {
    number: "02",
    title: "Advisory Briefing",
    subtitle: "Clear Comparisons",
    description:
      "Review floor plans, builder delivery records, and all-inclusive cost sheets side by side with a senior advisor before stepping onto a site.",
    image: "/2.avif",
    imageAlt: "Senior property advisors presenting market analysis",
    objectPosition: "object-center",
    icon: Users,
  },
  {
    number: "03",
    title: "Guided Site Visit",
    subtitle: "See It in Person",
    description:
      "Tour sample apartments, actual construction progress, and surrounding road or metro connectivity with our on-ground specialists.",
    image: "/3.avif",
    imageAlt: "On-site architectural blueprint inspection during site visit",
    objectPosition: "object-[50%_25%]",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Paperwork & Booking",
    subtitle: "Direct Builder Pricing",
    description:
      "Lock in your preferred unit at official developer rates with complete RERA registration and land-title verification.",
    image: "/4.avif",
    imageAlt: "Verified legal property documentation and agreement files",
    objectPosition: "object-center",
    icon: FileCheck2,
  },
  {
    number: "05",
    title: "Home Loan Support",
    subtitle: "Smooth Financing",
    description:
      "Get fast-track sanctioning, minimal paperwork, and competitive interest rates through our pre-approved banking partners.",
    image: "/5.avif",
    imageAlt: "Home loan calculation and mortgage planning",
    objectPosition: "object-center",
    icon: Landmark,
  },
  {
    number: "06",
    title: "Handover & Beyond",
    subtitle: "Ongoing Support",
    description:
      "From demand-note checks and registry execution to final key handover and future leasing, our team stays with you.",
    image: "/6.avif",
    imageAlt: "New home keys handover to property buyer",
    objectPosition: "object-center",
    icon: KeyRound,
  },
];

export default function BuyingProcess() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const mobileCarouselRef = useRef<HTMLDivElement>(null);
  const [activeMobileStep, setActiveMobileStep] = useState(0);

  // Smooth scroll-linked progress line for desktop vertical spine
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

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

  // Detect active snapped card cleanly during horizontal swipe
  const handleMobileScroll = () => {
    const container = mobileCarouselRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    const cardNodes = Array.from(
      container.querySelectorAll<HTMLElement>("[data-step-card]")
    );
    if (!cardNodes.length) return;

    let closestIdx = 0;
    let minDistance = Infinity;

    cardNodes.forEach((node, idx) => {
      const cardCenter = node.offsetLeft + node.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeMobileStep) {
      setActiveMobileStep(closestIdx);
    }
  };

  // Smoothly scroll to a target step card
  const goToMobileStep = (idx: number) => {
    const targetIdx =
      ((idx % PROCESS_STEPS.length) + PROCESS_STEPS.length) % PROCESS_STEPS.length;
    setActiveMobileStep(targetIdx);

    const container = mobileCarouselRef.current;
    if (!container) return;

    const targetCard = container.querySelector<HTMLElement>(
      `[data-step-card="${targetIdx}"]`
    );
    if (targetCard) {
      const scrollTarget =
        targetCard.offsetLeft - (container.clientWidth - targetCard.offsetWidth) / 2;
      container.scrollTo({
        left: scrollTarget,
        behavior: "smooth",
      });
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
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-20"
        >
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#b89246] text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            How It Works
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight leading-tight max-w-2xl">
            Your Path to{" "}
            <span className="text-[#a47b30] italic font-normal">
              Property Ownership
            </span>
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 max-w-xl font-sans leading-relaxed">
            A straightforward, six-step buying process built around transparency, legal clarity, and zero guesswork.
          </p>
        </motion.div>

        {/* =========================================================================
            DESKTOP VIEW: ANIMATED ALTERNATING SPINE + VISUAL CARDS (lg and above)
           ========================================================================= */}
        <div ref={timelineRef} className="hidden lg:block relative">
          {/* Base Track Line */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-[#ecdda9]"
          />

          {/* Animated Gold Fill Line */}
          <motion.div
            aria-hidden="true"
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-[2px] bg-[#b89246]"
          />

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, idx) => {
              const isLeft = idx % 2 === 0;
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-[1fr_92px_1fr] items-center"
                >
                  {/* Left Slot */}
                  <div className={isLeft ? "pr-5" : ""}>
                    {isLeft && (
                      <div className="group relative rounded-3xl bg-white border border-[#ecdda9] hover:border-[#b89246] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(184,146,70,0.14)] transition-all duration-300 overflow-hidden">
                        {/* Horizontal Connector Tick */}
                        <div
                          aria-hidden="true"
                          className="absolute top-1/2 -right-5 w-5 h-[2px] bg-[#b89246]/70"
                        />

                        {/* Step Image Header */}
                        <div className="relative w-full h-48 overflow-hidden bg-[#f5eed6]">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            fill
                            sizes="(max-width: 1200px) 45vw, 480px"
                            className={`object-cover ${step.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                          {/* Solid Brand Gold Tag & Icon */}
                          <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between">
                            <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#b89246] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                              {step.subtitle}
                            </span>
                            <div className="w-9 h-9 rounded-xl bg-white/95 text-[#865f27] flex items-center justify-center shadow-sm">
                              <Icon className="w-4 h-4 stroke-[2]" />
                            </div>
                          </div>
                        </div>

                        {/* Card Copy */}
                        <div className="p-6">
                          <h3 className="text-xl font-serif font-bold text-[#0c0d0e] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Center Numbered Node */}
                  <div className="relative z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.85, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35 }}
                      className="w-12 h-12 rounded-full bg-[#b89246] border-4 border-[#fbf7ee] shadow-[0_6px_18px_rgba(184,146,70,0.35)] flex items-center justify-center"
                    >
                      <span className="font-serif font-bold text-sm text-white tracking-wider">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Right Slot */}
                  <div className={!isLeft ? "pl-5" : ""}>
                    {!isLeft && (
                      <div className="group relative rounded-3xl bg-white border border-[#ecdda9] hover:border-[#b89246] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(184,146,70,0.14)] transition-all duration-300 overflow-hidden">
                        {/* Horizontal Connector Tick */}
                        <div
                          aria-hidden="true"
                          className="absolute top-1/2 -left-5 w-5 h-[2px] bg-[#b89246]/70"
                        />

                        {/* Step Image Header */}
                        <div className="relative w-full h-48 overflow-hidden bg-[#f5eed6]">
                          <Image
                            src={step.image}
                            alt={step.imageAlt}
                            fill
                            sizes="(max-width: 1200px) 45vw, 480px"
                            className={`object-cover ${step.objectPosition || "object-center"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                          {/* Solid Brand Gold Tag & Icon */}
                          <div className="absolute bottom-3.5 left-5 right-5 flex items-center justify-between">
                            <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#b89246] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                              {step.subtitle}
                            </span>
                            <div className="w-9 h-9 rounded-xl bg-white/95 text-[#865f27] flex items-center justify-center shadow-sm">
                              <Icon className="w-4 h-4 stroke-[2]" />
                            </div>
                          </div>
                        </div>

                        {/* Card Copy */}
                        <div className="p-6">
                          <h3 className="text-xl font-serif font-bold text-[#0c0d0e] mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm text-neutral-600 font-sans leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE VIEW: CLEAN HORIZONTAL CONNECTED CYCLE (< lg)
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="block lg:hidden"
        >
          {/* Horizontal Snap-Scroll Track */}
          <div
            ref={mobileCarouselRef}
            onScroll={handleMobileScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth -mx-4 px-[7vw] sm:px-[14vw] pb-2 gap-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeMobileStep === idx;
              const isPassed = idx <= activeMobileStep;
              const isFirst = idx === 0;
              const isLast = idx === PROCESS_STEPS.length - 1;

              return (
                <div
                  key={step.number}
                  data-step-card={idx}
                  className="snap-center shrink-0 w-[86vw] max-w-[380px] flex flex-col"
                >
                  {/* Integrated Horizontal Node & Connecting Line */}
                  <div className="relative flex items-center justify-center h-12 mb-2.5">
                    {/* Left Half Connector Line */}
                    {!isFirst && (
                      <div
                        aria-hidden="true"
                        className={`absolute -left-2 right-1/2 top-1/2 -translate-y-1/2 h-[2px] transition-colors duration-300 ${
                          isPassed ? "bg-[#b89246]" : "bg-[#ecdda9]"
                        }`}
                      />
                    )}

                    {/* Right Half Connector Line */}
                    {!isLast ? (
                      <div
                        aria-hidden="true"
                        className={`absolute left-1/2 -right-2 top-1/2 -translate-y-1/2 h-[2px] transition-colors duration-300 ${
                          idx < activeMobileStep ? "bg-[#b89246]" : "bg-[#ecdda9]"
                        }`}
                      />
                    ) : (
                      /* Dashed Cycle Loop-Back Tail on Final Step */
                      <div
                        aria-hidden="true"
                        className="absolute left-1/2 right-2 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-[#b89246]/50"
                      />
                    )}

                    {/* Circular Step Node */}
                    <motion.button
                      type="button"
                      onClick={() => goToMobileStep(idx)}
                      animate={{
                        scale: isCurrent ? 1.12 : 0.96,
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={`relative z-10 w-10 h-10 rounded-full font-serif font-bold text-xs flex items-center justify-center transition-colors duration-300 cursor-pointer ${
                        isCurrent
                          ? "bg-[#b89246] text-white ring-4 ring-[#b89246]/25 shadow-md"
                          : isPassed
                          ? "bg-[#0c0d0e] text-[#d4ab47] border-2 border-[#b89246]"
                          : "bg-white text-[#865f27] border-2 border-[#ecdda9]"
                      }`}
                    >
                      {step.number}
                    </motion.button>

                    {/* Vertical Stem Connecting Node to Card */}
                    <div
                      aria-hidden="true"
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-1.5 transition-colors duration-300 ${
                        isCurrent ? "bg-[#b89246]" : "bg-[#ecdda9]"
                      }`}
                    />
                  </div>

                  {/* Step Card */}
                  <motion.article
                    animate={{
                      y: isCurrent ? 0 : 4,
                      opacity: isCurrent ? 1 : 0.88,
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className={`flex-1 rounded-3xl bg-white border transition-colors duration-300 overflow-hidden flex flex-col ${
                      isCurrent
                        ? "border-[#b89246] shadow-[0_14px_32px_rgba(184,146,70,0.16)]"
                        : "border-[#ecdda9] shadow-sm"
                    }`}
                  >
                    {/* Visual Banner */}
                    <div className="relative w-full h-44 bg-[#f5eed6] overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.imageAlt}
                        fill
                        priority={idx < 2}
                        loading={idx < 2 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 86vw, 380px"
                        className={`object-cover ${step.objectPosition || "object-center"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                      {/* Bottom Overlay: Solid Brand Gold Badge + Icon */}
                      <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#b89246] text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          {step.subtitle}
                        </span>

                        <div className="w-8 h-8 rounded-lg bg-white/95 text-[#865f27] flex items-center justify-center shadow-sm shrink-0">
                          <Icon className="w-4 h-4 stroke-[2]" />
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-serif font-bold text-[#0c0d0e] mb-1.5">
                          {step.title}
                        </h3>
                        <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Clean Card Footer Action */}
                      <div className="mt-4 pt-3 border-t border-[#f5eed6] flex items-center justify-between text-[11px] font-semibold">
                        <span className="text-neutral-400">
                          Swipe to explore
                        </span>

                        {!isLast ? (
                          <button
                            type="button"
                            onClick={() => goToMobileStep(idx + 1)}
                            className="inline-flex items-center gap-1 text-[#865f27] font-bold uppercase tracking-wider cursor-pointer"
                          >
                            <span>Next</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => goToMobileStep(0)}
                            className="inline-flex items-center gap-1 text-[#865f27] font-bold uppercase tracking-wider cursor-pointer"
                          >
                            <RotateCcw className="w-3 h-3" />
                            <span>Start Over</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.article>
                </div>
              );
            })}
          </div>

          {/* Minimal Bottom Progress Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.number}
                type="button"
                onClick={() => goToMobileStep(idx)}
                aria-label={`Go to step ${step.number}`}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeMobileStep === idx
                    ? "w-6 bg-[#b89246]"
                    : "w-1.5 bg-[#d4ab47]/40"
                }`}
              />
            ))}
          </div>
        </motion.div>

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