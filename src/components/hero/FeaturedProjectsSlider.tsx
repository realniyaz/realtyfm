// src/components/portfolio/Portfolio.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Building2, 
  PhoneCall, 
  ArrowUpRight, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/projects";

const CATEGORIES = [
  "All Assets",
  "Luxury Residential",
  "Premium Apartments",
  "Plotted Development",
  "Resort Living",
] as const;

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<string>("All Assets");
  const [batchPage, setBatchPage] = useState(0);

  // Mobile Single-Card Infinite Cycle State
  const [mobileIndex, setMobileIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState<number>(0);

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === "All Assets") return true;
    return project.type === activeCategory;
  });

  const totalFiltered = filteredProjects.length;
  const itemsPerBatch = 3;
  const totalBatches = Math.max(1, Math.ceil(totalFiltered / itemsPerBatch));

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setBatchPage(0);
    setMobileIndex(0);
  };

  const handleNextBatch = () => {
    setBatchPage((prev) => (prev + 1) % totalBatches);
  };

  const handlePrevBatch = () => {
    setBatchPage((prev) => (prev === 0 ? totalBatches - 1 : prev - 1));
  };

  // Infinite circular cycle navigation for mobile
  const handleNextMobile = () => {
    setDragDirection(1);
    setMobileIndex((prev) => (prev + 1) % totalFiltered);
  };

  const handlePrevMobile = () => {
    setDragDirection(-1);
    setMobileIndex((prev) => (prev === 0 ? totalFiltered - 1 : prev - 1));
  };

  const scrollToContact = (projectName: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navOffset = 85;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.hash = "#contact";
    }

    window.dispatchEvent(
      new CustomEvent("realtyfm:select_project", { detail: { projectName } })
    );
  };

  const currentBatch = filteredProjects.slice(
    batchPage * itemsPerBatch,
    batchPage * itemsPerBatch + itemsPerBatch
  );

  return (
    <section id="portfolio" className="relative w-full py-16 sm:py-28 bg-[#fbf7ee] text-[#0c0d0e] overflow-hidden">
      
      {/* Background Micro-Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between items-center text-center md:text-left gap-6 pb-6 sm:pb-8 border-b border-[#ecdda9]">
          <div className="max-w-2xl space-y-2 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-[#0c0d0e] uppercase leading-tight">
              Featured Properties
            </h2>
            <p className="text-xs sm:text-base text-neutral-600 font-sans">
              Handpicked developments across Noida, Yamuna Expressway, and Gurugram with clear titles and direct developer access.
            </p>
          </div>

          {/* Desktop Pagination Controls */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest font-sans">
               {batchPage + 1} of {totalBatches}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevBatch}
                className="w-11 h-11 rounded-full border border-[#ecdda9] bg-white hover:bg-[#f5eed6] hover:border-[#b89246] flex items-center justify-center text-[#0c0d0e] transition-all shadow-sm active:scale-90 cursor-pointer"
                aria-label="Previous batch"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextBatch}
                className="w-11 h-11 rounded-full border border-[#ecdda9] bg-white hover:bg-[#f5eed6] hover:border-[#b89246] flex items-center justify-center text-[#0c0d0e] transition-all shadow-sm active:scale-90 cursor-pointer"
                aria-label="Next batch"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Desktop Only) */}
        <div className="hidden md:flex mt-8 items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-[#b89246] text-white shadow-md"
                  : "bg-white border border-[#ecdda9] text-neutral-700 hover:border-[#b89246] hover:text-[#0c0d0e]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* =========================================================================
            DESKTOP VIEW: 3-BY-3 BATCH (No Descriptions)
           ========================================================================= */}
        <div className="hidden md:block mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={batchPage + activeCategory}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-3 gap-6 lg:gap-8 items-stretch"
            >
              {currentBatch.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-3xl bg-white border border-[#ecdda9] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_16px_45px_rgb(184,146,70,0.12)] hover:border-[#b89246] transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative w-full h-64 overflow-hidden bg-[#14171a]">
                      <Image
                        src={project.image || "/main.png"}
                        alt={project.title}
                        fill
                        sizes="380px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-neutral-100 uppercase tracking-wider">
                          {project.developer}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-[#b89246] text-[#0c0d0e] text-[10px] font-extrabold uppercase tracking-widest shadow">
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 right-4">
                        <span className="text-xs font-black text-white bg-black/65 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-sans tracking-tight">
                          {project.priceRange || "Price on Request"}
                        </span>
                      </div>
                    </div>

                    {/* Meta Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#865f27] uppercase tracking-wider mb-1">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{project.type}</span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-[#0c0d0e] group-hover:text-[#865f27] transition-colors leading-snug line-clamp-1">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mt-2 text-xs text-neutral-600">
                        <MapPin className="w-3.5 h-3.5 text-[#b89246] shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>

                      {project.configurations && (
                        <div className="mt-4 flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100">
                          {project.configurations.map((cfg) => (
                            <span
                              key={cfg}
                              className="px-2.5 py-0.5 rounded-md bg-[#f5eed6] text-[#865f27] text-[11px] font-semibold"
                            >
                              {cfg}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Brand Gold CTA */}
                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={() => scrollToContact(project.title)}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Inquire Property</span>
                      <ArrowUpRight className="w-4 h-4 ml-auto" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          {totalBatches > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              {Array.from({ length: totalBatches }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setBatchPage(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    batchPage === idx
                      ? "w-8 bg-[#b89246]"
                      : "w-2 bg-[#ecdda9] hover:bg-[#b89246]/50"
                  }`}
                  aria-label={`Go to batch ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>


        {/* =========================================================================
            MOBILE VIEW: ONE-BY-ONE INFINITE CYCLE SWIPE (No Extra Space, No Description)
           ========================================================================= */}
        <div className="block md:hidden mt-6">
          {totalFiltered > 0 && (
            <div className="relative w-full max-w-sm mx-auto">
              
              <div className="overflow-hidden py-1">
                <AnimatePresence initial={false} custom={dragDirection} mode="wait">
                  <motion.div
                    key={filteredProjects[mobileIndex].id}
                    custom={dragDirection}
                    variants={{
                      enter: (direction: number) => ({
                        x: direction > 0 ? 180 : -180,
                        opacity: 0,
                        scale: 0.96,
                      }),
                      center: {
                        x: 0,
                        opacity: 1,
                        scale: 1,
                      },
                      exit: (direction: number) => ({
                        x: direction > 0 ? -180 : 180,
                        opacity: 0,
                        scale: 0.96,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 320, damping: 30 },
                      opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -40) handleNextMobile();
                      if (info.offset.x > 40) handlePrevMobile();
                    }}
                    className="rounded-3xl bg-white border border-[#ecdda9] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Area */}
                      <div className="relative w-full h-56 overflow-hidden bg-[#14171a]">
                        <Image
                          src={filteredProjects[mobileIndex].image || "/main.png"}
                          alt={filteredProjects[mobileIndex].title}
                          fill
                          sizes="100vw"
                          priority
                          className="object-cover object-center pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                          <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-bold text-neutral-100 uppercase tracking-wider">
                            {filteredProjects[mobileIndex].developer}
                          </span>
                          <span className="px-2 py-0.5 rounded bg-[#b89246] text-[#0c0d0e] text-[10px] font-extrabold uppercase tracking-widest shadow">
                            {filteredProjects[mobileIndex].status}
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3.5">
                          <span className="text-xs font-black text-white bg-black/65 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 font-sans tracking-tight">
                            {filteredProjects[mobileIndex].priceRange || "Price on Request"}
                          </span>
                        </div>
                      </div>

                      {/* Details (No Description) */}
                      <div className="p-5">
                        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#865f27] uppercase tracking-wider mb-1">
                          <Building2 className="w-3 h-3" />
                          <span>{filteredProjects[mobileIndex].type}</span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#0c0d0e] leading-snug">
                          {filteredProjects[mobileIndex].title}
                        </h3>

                        <div className="flex items-center gap-1.5 mt-1.5 text-xs text-neutral-600">
                          <MapPin className="w-3.5 h-3.5 text-[#b89246] shrink-0" />
                          <span className="truncate">{filteredProjects[mobileIndex].location}</span>
                        </div>

                        {filteredProjects[mobileIndex].configurations && (
                          <div className="mt-3 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                            {filteredProjects[mobileIndex].configurations.map((cfg) => (
                              <span
                                key={cfg}
                                className="px-2.5 py-0.5 rounded-md bg-[#f5eed6] text-[#865f27] text-[11px] font-semibold"
                              >
                                {cfg}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Brand Gold CTA */}
                    <div className="px-5 pb-5 pt-1">
                      <button
                        onClick={() => scrollToContact(filteredProjects[mobileIndex].title)}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#b89246] active:bg-[#a47b30] text-white font-bold text-xs uppercase tracking-wider shadow-sm active:scale-95 transition-all"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        <span>Inquire Property</span>
                        <ArrowUpRight className="w-4 h-4 ml-auto" />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Compact Swipe Controls & Circular Counter */}
              <div className="mt-4 flex items-center justify-between px-2">
                <button
                  onClick={handlePrevMobile}
                  className="w-10 h-10 rounded-full border border-[#ecdda9] bg-white flex items-center justify-center text-[#0c0d0e] active:scale-90 transition-all shadow-sm"
                  aria-label="Previous property"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-[11px] font-bold text-neutral-600 uppercase tracking-widest font-sans">
                  {mobileIndex + 1} of {totalFiltered}
                </div>

                <button
                  onClick={handleNextMobile}
                  className="w-10 h-10 rounded-full border border-[#ecdda9] bg-white flex items-center justify-center text-[#0c0d0e] active:scale-90 transition-all shadow-sm"
                  aria-label="Next property"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}