// src/components/hero/Hero.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Search, MapPin, Building2, ArrowRight, X } from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { COMPANY_DATA } from "@/data/company";

interface HeroProps {
  onSelectProject?: (project: Project) => void;
}

export default function Hero({ onSelectProject }: HeroProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const scrollToPortfolio = (projectToSelect?: Project) => {
    setIsDropdownOpen(false);

    if (projectToSelect && onSelectProject) {
      onSelectProject(projectToSelect);
    }

    const portfolioElement = document.getElementById("portfolio");
    if (portfolioElement) {
      const navOffset = 85;
      const elementPosition = portfolioElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      window.location.hash = "#portfolio";
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const cleanTerm = searchTerm.trim().toLowerCase();
  const filteredProjects = cleanTerm
    ? PROJECTS_DATA.filter((project) => {
        return (
          project.title.toLowerCase().includes(cleanTerm) ||
          project.developer.toLowerCase().includes(cleanTerm) ||
          project.location.toLowerCase().includes(cleanTerm) ||
          project.tagline?.toLowerCase().includes(cleanTerm) ||
          project.configurations?.some((cfg) => cfg.toLowerCase().includes(cleanTerm))
        );
      }).slice(0, 5)
    : [];

  return (
    // relative z-30 guarantees Hero's dropdown paints over Overview (which has z-10)
    <section className="relative z-30 w-full min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#0c0d0e]">
      
      {/* 1. Full-Bleed Wallpaper */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
        <Image
          src="/main.png"
          alt="Luxury Real Estate Skyline"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-transparent" />
      </div>

      {/* 2. Content Centerfold */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-24 flex flex-col items-center text-center">
        
        {/* Verification Pill */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-black/45 backdrop-blur-md mb-6 shadow-lg">
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#f5eed6] uppercase font-sans">
            India&apos;s #1 Real Estate Partner
          </span>
        </div>

        {/* Serif Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-serif uppercase leading-[1.08] drop-shadow-md">
          Find Your Next <br />
          <span className="text-gold-gradient font-serif font-bold">
            Prime Property.
          </span>
        </h1>

        <p className="mt-4 sm:mt-5 text-sm sm:text-lg md:text-xl text-neutral-100 max-w-2xl font-sans font-normal leading-relaxed drop-shadow">
          Direct access to the finest residential homes, commercial hubs, and luxury developments across Noida, Yamuna Expressway, and Gurugram.
        </p>

        {/* 3. Search Bar Console Container */}
        <div ref={searchContainerRef} className="relative w-full max-w-3xl mt-8 sm:mt-10">
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              scrollToPortfolio();
            }}
            className="relative z-20 rounded-2xl bg-[#f8f9fa] border border-[#e0c675]/80 p-2 sm:p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              
              {/* Input */}
              <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-white border border-[#e5e7eb] rounded-xl focus-within:border-[#b89246] transition-colors relative">
                <Search className="w-5 h-5 text-[#865f27] shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsDropdownOpen(true);
                  }}
                  onFocus={() => {
                    if (searchTerm.trim().length > 0) setIsDropdownOpen(true);
                  }}
                  placeholder="Search project name, builder, or location (e.g. Ace, Gaur, Noida)..."
                  className="w-full bg-transparent text-[#0c0d0e] placeholder:text-neutral-500 text-sm sm:text-base font-medium outline-none font-sans pr-6"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchTerm("");
                      setIsDropdownOpen(false);
                    }}
                    className="absolute right-3 text-neutral-400 hover:text-neutral-700"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
              >
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* 4. Dropdown Anchored Directly Below Search Box */}
          {isDropdownOpen && cleanTerm.length > 0 && (
            <>
              {/* Global Backdrop Click Dismissal */}
              <div 
                className="fixed inset-0 z-40 bg-transparent"
                onClick={() => setIsDropdownOpen(false)}
              />

              <div className="absolute left-0 right-0 top-[calc(100%+8px)] bg-white border border-[#e5e7eb] rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden z-[100] text-left">
                {filteredProjects.length > 0 ? (
                  <div className="divide-y divide-neutral-100 max-h-60 overflow-y-auto">
                    {filteredProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => scrollToPortfolio(project)}
                        className="px-4 py-2.5 sm:px-5 sm:py-3 flex items-center justify-between gap-3 hover:bg-[#fbf7ee] transition-colors cursor-pointer group"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm sm:text-base font-bold text-[#0c0d0e] group-hover:text-[#a47b30] transition-colors truncate">
                            {project.title}
                          </p>
                          <div className="flex items-center gap-3 mt-0.5 text-xs text-neutral-500">
                            <span className="inline-flex items-center gap-1 font-medium text-neutral-700 truncate">
                              <Building2 className="w-3.5 h-3.5 text-[#b89246] shrink-0" />
                              {project.developer}
                            </span>
                            <span className="inline-flex items-center gap-1 truncate">
                              <MapPin className="w-3.5 h-3.5 text-[#b89246] shrink-0" />
                              {project.location}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <p className="text-xs sm:text-sm font-bold text-[#865f27] tracking-tight whitespace-nowrap">
                            {project.priceRange || "Price on Request"}
                          </p>
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#f5eed6] text-[#865f27]">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-sm text-neutral-600 font-sans">
                    No matching properties found. Contact our advisory desk at{" "}
                    <a
                      href={COMPANY_DATA.primaryContact.phoneLink}
                      className="text-[#865f27] font-semibold underline underline-offset-2"
                    >
                      {COMPANY_DATA.primaryContact.phoneDisplay}
                    </a>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Quick Selection Tags */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs relative z-10">
            <span className="text-neutral-200 font-medium drop-shadow">Popular:</span>
            {["Noida Expressway", "Yamuna Expressway", "Greater Noida West", "Gurugram"].map((place) => (
              <button
                key={place}
                type="button"
                onClick={() => {
                  setSearchTerm(place);
                  setIsDropdownOpen(true);
                }}
                className="px-3 py-1 rounded-full bg-black/40 border border-white/25 text-neutral-100 hover:text-white hover:border-[#b89246] transition-colors backdrop-blur-md cursor-pointer"
              >
                {place}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}