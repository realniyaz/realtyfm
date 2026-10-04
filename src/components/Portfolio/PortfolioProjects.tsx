"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronLeft,
  ChevronRight,
  Eye,
  X,
  MapPin,
  Building,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { PROJECTS_DATA, Project } from "@/data/projects";
import { getWhatsAppInquiryLink } from "@/data/company";

const CARDS_PER_PAGE = 3;

export default function PortfolioProjects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  // Filter projects by query and property type
  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return PROJECTS_DATA.filter((project) => {
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.developer.toLowerCase().includes(q) ||
        project.location.toLowerCase().includes(q) ||
        project.configurations.some((c) => c.toLowerCase().includes(q));

      const matchesType = selectedType === "All" || project.type === selectedType;

      return matchesSearch && matchesType;
    });
  }, [searchQuery, selectedType]);

  const totalPages = Math.ceil(filteredProjects.length / CARDS_PER_PAGE) || 1;

  // Reset to first page when search changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(0);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedProjects = filteredProjects.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section
      id="projects"
      className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#1A1815] border-b border-[#E8DFD1]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SEARCH AND FILTER BAR */}
        <div className="mb-10 sm:mb-14 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#865F27]" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by project name, developer (Gaurs, ACE, Sobha...), or sector..."
                className="w-full pl-11 pr-4 py-3.5 rounded-full bg-white border border-[#B89246]/40 focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] shadow-sm transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between md:justify-end gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#865F27]">
                Page {currentPage + 1} of {totalPages} ({filteredProjects.length} Projects)
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={totalPages <= 1}
                  aria-label="Previous Page"
                  className="p-3 rounded-full bg-white hover:bg-[#FAF7F0] border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={totalPages <= 1}
                  aria-label="Next Page"
                  className="p-3 rounded-full bg-white hover:bg-[#FAF7F0] border border-[#B89246]/40 text-[#865F27] shadow-sm disabled:opacity-40 disabled:cursor-not-allowed transition-all active:scale-95"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {["All", "Luxury Residential", "Premium Apartments", "Plotted Development", "Resort Living"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => {
                    setSelectedType(type);
                    setCurrentPage(0);
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                    selectedType === type
                      ? "bg-[#14171A] text-white"
                      : "bg-white text-neutral-600 border border-[#E8DFD1] hover:border-[#B89246]/50"
                  }`}
                >
                  {type}
                </button>
              )
            )}
          </div>
        </div>

        {/* 3-CARD DISPLAY WITH MOBILE TOUCH SWIPE */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFD1] p-8">
            <p className="text-base text-neutral-600 font-serif">
              No development found matching &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedType("All");
              }}
              className="mt-3 text-xs uppercase tracking-wider font-bold text-[#865F27] hover:underline"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) handleNext();
              if (info.offset.x > 60) handlePrev();
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 cursor-grab active:cursor-grabbing"
          >
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_6px_25px_rgba(184,146,70,0.08)] hover:shadow-[0_12px_36px_rgba(184,146,70,0.18)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
              >
                {/* Visual Header */}
                <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image || "/banner2.png"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                  {/* Status Pills */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#1A1815] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {project.status}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#B89246] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  {/* Eye Modal Trigger */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalProject(project);
                    }}
                    aria-label={`Inspect ${project.title}`}
                    className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-[#B89246] text-[#1A1815] hover:text-white transition-colors duration-200 shadow-md backdrop-blur-sm"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#865F27] text-[11px] font-bold uppercase tracking-wider mb-1">
                      <Building className="w-3.5 h-3.5" />
                      <span>{project.developer}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1815] tracking-tight group-hover:text-[#865F27] transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                      <span className="line-clamp-1">{project.location}</span>
                    </div>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Spec Snapshot */}
                    <div className="grid grid-cols-2 gap-2 py-3 px-3.5 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1]/80 text-[11px]">
                      <div>
                        <span className="text-neutral-400 block uppercase tracking-wider text-[9px] font-semibold">
                          Configurations
                        </span>
                        <span className="font-semibold text-neutral-800 line-clamp-1">
                          {project.configurations.join(", ")}
                        </span>
                      </div>
                      <div>
                        <span className="text-neutral-400 block uppercase tracking-wider text-[9px] font-semibold">
                          Super Area
                        </span>
                        <span className="font-semibold text-neutral-800 line-clamp-1">
                          {project.sizeRange}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center gap-2">
                    <a
                      href={getWhatsAppInquiryLink(project.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#137333] text-xs font-bold transition-colors"
                    >
                      <div className="relative w-3.5 h-3.5">
                        <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                      </div>
                      <span>WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setModalProject(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/40 text-[#1A1815] text-xs font-semibold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#865F27]" />
                      <span>Specs</span>
                    </button>

                    <Link
                      href="/contact"
                      className="p-2.5 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] transition-colors"
                      title="Schedule Consultation"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between mt-5 px-2">
          <span className="text-[11px] uppercase tracking-wider text-neutral-500 font-semibold">
            Swipe left/right to browse
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "w-6 bg-[#865F27]" : "w-1.5 bg-[#B89246]/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DETAILED PROJECT INSPECTION MODAL */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border border-[#B89246]/40 rounded-3xl p-6 sm:p-8 text-[#1A1815] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalProject(null)}
                aria-label="Close Preview"
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#865F27] text-xs font-bold uppercase tracking-widest mb-1">
                <span>{modalProject.developer}</span>
                <span>•</span>
                <span>{modalProject.type}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1815] mb-1">
                {modalProject.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-5">
                <MapPin className="w-3.5 h-3.5 text-[#B89246]" />
                <span>{modalProject.location}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-100 pt-4">
                <p>{modalProject.description}</p>

                <div className="grid grid-cols-2 gap-3 bg-[#FAF7F0] p-4 rounded-xl border border-[#E8DFD1]">
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                      Size Blueprint
                    </span>
                    <span className="font-bold text-[#1A1815]">{modalProject.sizeRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                      Indicative Price
                    </span>
                    <span className="font-bold text-[#865F27]">
                      {modalProject.priceRange || "Available On Request"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Features & Amenities
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {modalProject.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-neutral-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89246]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppInquiryLink(modalProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-all shadow-sm"
                >
                  <div className="relative w-4 h-4">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
                  </div>
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setModalProject(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14171A] hover:bg-[#282C34] text-white text-xs font-bold tracking-wide transition-all"
                >
                  <span>Book Private Briefing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B89246]" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}