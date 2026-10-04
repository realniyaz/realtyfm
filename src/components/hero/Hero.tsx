"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface SlideData {
  id: number;
  image: string;
  badge: string;
  titleLight: string;
  titleItalic: string;
  description: string;
  location: string;
}

const SLIDES: SlideData[] = [
  {
    id: 0,
    image: "/banner2.png",
    badge: "Signature Living",
    titleLight: "Private Estates &",
    titleItalic: "Luxury Residences",
    description:
      "Direct developer inventory and strategic wealth advisory across premier enclaves in NCR, Yamuna Expressway, and Dubai.",
    location: "Yamuna Corridor & Prime Expressways",
  },
  {
    id: 1,
    image: "/banner1.png",
    badge: "Architectural Grandeur",
    titleLight: "Elevated High-Rise",
    titleItalic: "Sky Sanctuaries",
    description:
      "Engineered for generational value. Access pre-launch allocations, penthouse suites, and trophy commercial assets.",
    location: "Greater Noida & Expressway Hubs",
  },
  {
    id: 2,
    image: "/banner3.png",
    badge: "Resort Sanctuaries",
    titleLight: "Bespoke Wellness &",
    titleItalic: "Expansive Havens",
    description:
      "Exclusive low-density sanctuaries designed around manicured parks, infinity waters, and elite country clubs.",
    location: "Sector 150 & Noida Green Corridor",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[currentSlide];

  return (
    <section className="relative w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#111315]">
      {/* 1. CINEMATIC BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="relative w-full h-full"
          >
            <Image
              src={slide.image}
              alt={slide.titleLight}
              fill
              priority
              quality={95}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Natural Photographic Gradients (Subtle contrast without muddying the images) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e]/90 via-[#0c0d0e]/35 to-transparent z-10" />
        <div className="absolute inset-0 bg-[#0c0d0e]/25 z-10" />
      </div>

      {/* 2. CENTER CONTENT BLOCK */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        
        {/* Clean Editorial Pill */}
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#B89246]/35 text-[#F5EFEB] text-xs uppercase tracking-[0.22em] mb-6 shadow-sm"
        >
          <span className="text-[#E0C675] font-semibold">{slide.badge}</span>
          <span className="text-white/30">|</span>
          <span className="text-neutral-200 font-normal hidden sm:inline">{slide.location}</span>
        </motion.div>

        {/* Main Serif Title */}
        <motion.h1
          key={`heading-${currentSlide}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif tracking-tight text-[#FAF8F5] leading-[1.08] max-w-4xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]"
        >
          {slide.titleLight}{" "}
          <span className="block sm:inline font-normal italic text-gold-gradient">
            {slide.titleItalic}
          </span>
        </motion.h1>

        {/* Executive Subtitle */}
        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-neutral-200 max-w-2xl font-normal leading-relaxed tracking-wide drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
        >
          {slide.description}
        </motion.p>

        {/* Clean CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Action Button */}
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#B89246] hover:bg-[#A47B30] text-[#0C0D0E] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Secondary Advisory Consultation */}
          <a
            href={COMPANY_DATA.primaryContact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 hover:border-[#B89246]/60 text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide transition-all duration-200"
          >
            <div className="relative w-4 h-4">
              <Image
                src="/wh.png"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            <span>Private Advisory Desk</span>
          </a>
        </motion.div>

        {/* 3. CREDIBILITY BENCHMARKS */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-14 sm:mt-16 pt-8 w-full max-w-4xl border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-semibold tracking-tight">
              2000+
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">
              Customers 
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-semibold tracking-tight">
              16+ Premier
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">
              Curated Projects
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-semibold tracking-tight">
              Noida & Dubai
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">
              Dual Advisory Desks
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-[#FAF8F5] font-semibold tracking-tight">
              100% Direct
            </span>
            <span className="text-[11px] uppercase tracking-wider text-neutral-300 mt-1">
              Developer Inventory
            </span>
          </div>
        </motion.div>
      </div>

      {/* 4. SLIDE SELECTORS */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-30 flex items-center gap-2.5">
        {SLIDES.map((s, idx) => (
          <button suppressHydrationWarning
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="group py-2 focus:outline-none"
          >
            <div
              className={`h-1 transition-all duration-300 rounded-full ${
                currentSlide === idx
                  ? "w-7 bg-[#B89246]"
                  : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}