"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  MapPin,
  Building,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA, Project } from "@/data/projects";

const SEARCH_PROMPTS = ["Gaur", "ACE", "Sobha", "Sector 150", "Yamuna Expressway"];

export default function Hero() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  // Close search dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Instant real-time project matching
  const searchResults: Project[] = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim();
    if (!cleanQuery) return [];

    return PROJECTS_DATA.filter((p) => {
      const matchTitle = p.title.toLowerCase().includes(cleanQuery);
      const matchDev = p.developer.toLowerCase().includes(cleanQuery);
      const matchLoc = p.location.toLowerCase().includes(cleanQuery);
      const matchConfig = p.configurations.some((c) =>
        c.toLowerCase().includes(cleanQuery)
      );
      return matchTitle || matchDev || matchLoc || matchConfig;
    }).slice(0, 4);
  }, [query]);

  return (
    <section className="relative w-full min-h-[85svh] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0C0D0E]">
      {/* 1. PANORAMIC SKYLINE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/main.png"
          alt="Realty FM Prime Skyline"
          fill
          priority
          quality={95}
          className="object-cover object-bottom sm:object-center"
        />
        {/* Soft luxury tint: balances sky brightness while preserving the golden dawn horizon */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-[#0C0D0E]/55 to-black/30 z-10" />
      </div>

      {/* 2. MINIMAL EDITORIAL CONTENT */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex flex-col items-center text-center">
        
        {/* Subtle Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/45 backdrop-blur-md border border-[#B89246]/45 text-[#FAF8F5] text-[10px] sm:text-xs uppercase tracking-[0.22em] mb-4 shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89246]" />
          <span>Institutional Real Estate Advisory</span>
        </motion.div>

        {/* Minimal Serif Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-[#FAF8F5] leading-[1.14] drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]"
        >
          Strategic Wealth in{" "}
          <span className="italic font-normal text-[#D4AB47]">
            Prime Residences.
          </span>
        </motion.h1>

        {/* Short, Direct Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 sm:mt-4 text-xs sm:text-base text-neutral-200 max-w-xl font-light leading-relaxed tracking-wide px-2 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]"
        >
          Direct developer allocations, verified title scrutiny, and high-yield asset advisory across Delhi NCR and Dubai.
        </motion.p>

        {/* 3. SEARCH ENGINE SYSTEM */}
        <div
          ref={searchContainerRef}
          className="relative w-full max-w-xl mt-6 sm:mt-8 z-30"
        >
          {/* Glass Input Field */}
          <div className="relative flex items-center w-full rounded-full bg-white/95 backdrop-blur-xl border border-[#B89246]/60 shadow-[0_10px_35px_rgba(0,0,0,0.35)] p-1.5 transition-all focus-within:border-[#B89246] focus-within:ring-2 focus-within:ring-[#B89246]/20">
            <div className="flex items-center justify-center pl-3.5 pr-2 text-[#865F27]">
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setIsFocused(true);
              }}
              onFocus={() => setIsFocused(true)}
              placeholder="Search properties (Gaur, ACE, Sobha, Sector 150)..."
              className="w-full bg-transparent text-xs sm:text-sm text-[#1A1815] placeholder-neutral-500 focus:outline-none pr-3"
            />

            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear Search"
                className="p-1 rounded-full text-neutral-400 hover:text-neutral-700 mr-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}

            <Link
              href="/portfolio"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#14171A] hover:bg-[#B89246] text-[#FAF8F5] hover:text-[#0C0D0E] text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex-shrink-0"
            >
              <span>Explore</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Prompt Chips */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-2.5 flex-wrap">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-300 font-medium mr-0.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D4AB47]" />
              Popular:
            </span>
            {SEARCH_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => {
                  setQuery(prompt);
                  setIsFocused(true);
                }}
                className="px-2.5 py-0.5 rounded-full bg-black/40 hover:bg-[#B89246] hover:text-[#0C0D0E] border border-white/20 hover:border-[#B89246] text-neutral-200 text-[10px] sm:text-xs tracking-wide transition-all duration-200"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Live Search Modal */}
          <AnimatePresence>
            {isFocused && query.trim().length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.18 }}
                className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white text-[#1A1815] border border-[#B89246]/40 shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-hidden z-50 text-left max-h-[65vh] overflow-y-auto"
              >
                {searchResults.length > 0 ? (
                  <div className="p-3 sm:p-3.5 space-y-2">
                    <div className="flex items-center justify-between pb-1.5 border-b border-neutral-100 px-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-[#865F27]">
                        Verified Matches ({searchResults.length})
                      </span>
                      <span className="text-[10px] text-neutral-400">
                        Live Preview
                      </span>
                    </div>

                    {searchResults.map((proj) => (
                      <div
                        key={proj.id}
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 p-2 rounded-xl hover:bg-[#FAF7F0] border border-transparent hover:border-[#E8DFD1] transition-all"
                      >
                        <div className="flex items-center gap-2.5 w-full sm:w-auto">
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-100">
                            <Image
                              src={proj.image || "/banner2.png"}
                              alt={proj.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1.5 text-[9px] font-bold text-[#865F27] uppercase tracking-wider">
                              <Building className="w-2.5 h-2.5 flex-shrink-0" />
                              <span>{proj.developer}</span>
                            </div>
                            <h4 className="text-xs sm:text-sm font-serif font-bold text-[#1A1815] truncate">
                              {proj.title}
                            </h4>
                            <div className="flex items-center gap-1 text-[10px] text-neutral-500 truncate">
                              <MapPin className="w-3 h-3 text-[#B89246] flex-shrink-0" />
                              <span className="truncate">{proj.location}</span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/portfolio`}
                          onClick={() => setIsFocused(false)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-[#14171A] hover:bg-[#B89246] text-[#FAF8F5] hover:text-[#0C0D0E] text-[10px] font-semibold tracking-wide transition-colors flex-shrink-0 shadow-sm"
                        >
                          <span>View in Portfolio</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </Link>
                      </div>
                    ))}

                    <div className="pt-2 border-t border-neutral-100 text-center">
                      <Link
                        href="/portfolio"
                        onClick={() => setIsFocused(false)}
                        className="text-[11px] font-semibold text-[#865F27] hover:underline"
                      >
                        Browse complete 16+ project portfolio →
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 text-center">
                    <p className="text-xs text-neutral-600 font-serif">
                      No development found matching &quot;{query}&quot;.
                    </p>
                    <Link
                      href="/portfolio"
                      onClick={() => setIsFocused(false)}
                      className="inline-block mt-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#B89246]/40 text-[11px] font-semibold text-[#865F27]"
                    >
                      Browse Master Portfolio
                    </Link>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 4. ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#B89246] hover:bg-[#A47B30] text-[#0C0D0E] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md active:scale-98"
          >
            <span>Explore Portfolio</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href={COMPANY_DATA.primaryContact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md border border-[#B89246]/40 text-[#FAF8F5] text-xs font-medium transition-all duration-200 active:scale-98"
          >
            <div className="relative w-3.5 h-3.5 flex-shrink-0">
              <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
            </div>
            <span>Private Advisory Desk</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}