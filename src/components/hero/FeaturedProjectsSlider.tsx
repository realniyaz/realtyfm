"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
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

export default function FeaturedProjectsSlider() {
  const [currentPage, setCurrentPage] = useState(0);
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const totalPages = Math.ceil(PROJECTS_DATA.length / CARDS_PER_PAGE);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedProjects = PROJECTS_DATA.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section id="projects" className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-[#1a1815] overflow-hidden border-b border-[#B89246]/20">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B89246]/15 border border-[#B89246]/30 text-[#865F27] font-semibold text-[10px] sm:text-[11px] uppercase tracking-[0.22em] mb-2">
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a1815] tracking-tight">
              Residential & Investment Assets
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 max-w-xl font-light">
              Direct allocations across high-appreciation development corridors in Delhi NCR, Yamuna Expressway, and Dubai.
            </p>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-3 self-stretch md:self-auto pt-2 md:pt-0">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#865F27]">
              Page {currentPage + 1} of {totalPages}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Page"
                className="p-2.5 sm:p-3 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm active:scale-95 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Page"
                className="p-2.5 sm:p-3 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] shadow-sm active:scale-95 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Cards Container with Touch-Swipe */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) handleNext();
            if (info.offset.x > 60) handlePrev();
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 cursor-grab active:cursor-grabbing"
        >
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_4px_20px_rgba(184,146,70,0.06)] hover:shadow-[0_8px_30px_rgba(184,146,70,0.14)] transition-all duration-300 overflow-hidden"
            >
              {/* Image Banner */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-neutral-100">
                <Image
                  src={project.image || "/banner2.png"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2 py-0.5 rounded-full bg-white/95 text-[#1a1815] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                    {project.status}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-[#B89246] text-[#FAF8F5] text-[9px] sm:text-[10px] font-bold uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalProject(project);
                  }}
                  aria-label={`Inspect ${project.title}`}
                  className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 text-[#1a1815] shadow-md"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#865F27] text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1">
                    <Building className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>{project.developer}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1a1815] tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-3">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 py-2.5 px-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1]/80 text-[10px] sm:text-[11px]">
                    <div>
                      <span className="text-neutral-400 block uppercase tracking-wider text-[8px] sm:text-[9px] font-semibold">
                        Configurations
                      </span>
                      <span className="font-semibold text-neutral-800 line-clamp-1">
                        {project.configurations.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block uppercase tracking-wider text-[8px] sm:text-[9px] font-semibold">
                        Area Range
                      </span>
                      <span className="font-semibold text-neutral-800 line-clamp-1">
                        {project.sizeRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center gap-2">
                  <a
                    href={getWhatsAppInquiryLink(project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#137333] text-xs font-bold transition-colors active:scale-98"
                  >
                    <div className="relative w-3.5 h-3.5 flex-shrink-0">
                      <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                    </div>
                    <span>WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/40 text-[#1a1815] text-xs font-semibold transition-colors active:scale-98"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#865F27]" />
                    <span>Specs</span>
                  </button>

                  <Link
                    href="/contact"
                    className="p-2.5 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] transition-colors flex-shrink-0 active:scale-98"
                    title="Book Advisory Consultation"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-7">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className="py-1 focus:outline-none"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "w-6 bg-[#865F27]" : "w-1.5 bg-[#B89246]/30"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-xl bg-white border border-[#B89246]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-[#1a1815] shadow-2xl max-h-[88svh] overflow-y-auto"
            >
              <button
                onClick={() => setModalProject(null)}
                aria-label="Close Preview"
                className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-100 text-neutral-700"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-[#865F27] text-[10px] font-bold uppercase tracking-widest mb-1">
                <span>{modalProject.developer}</span>
                <span>•</span>
                <span>{modalProject.type}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1815] mb-1">
                {modalProject.title}
              </h3>

              <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#B89246]" />
                <span>{modalProject.location}</span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-100 pt-3">
                <p>{modalProject.description}</p>

                <div className="grid grid-cols-2 gap-2.5 bg-[#FAF7F0] p-3 rounded-xl border border-[#E8DFD1]">
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block font-semibold">
                      Size Blueprint
                    </span>
                    <span className="font-bold text-[#1a1815]">{modalProject.sizeRange}</span>
                  </div>
                  <div>
                    <span className="text-[9px] text-neutral-500 uppercase tracking-wider block font-semibold">
                      Indicative Valuation
                    </span>
                    <span className="font-bold text-[#865F27]">
                      {modalProject.priceRange || "On Request"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 block mb-1.5">
                    Amenities & Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {modalProject.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-1.5 text-xs text-neutral-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getWhatsAppInquiryLink(modalProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-sm active:scale-98"
                >
                  <div className="relative w-4 h-4">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
                  </div>
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setModalProject(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14171A] text-white text-xs font-bold uppercase tracking-wider active:scale-98"
                >
                  <span>Book Consultation</span>
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