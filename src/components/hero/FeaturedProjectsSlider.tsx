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

  // Slice exactly 3 projects for the active page
  const displayedProjects = PROJECTS_DATA.slice(
    currentPage * CARDS_PER_PAGE,
    currentPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  return (
    <section id = "projects" className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#1a1815] overflow-hidden border-b border-[#B89246]/20">
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B89246]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#D4AB47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Editorial Section Header with Page Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B89246]/15 border border-[#B89246]/30 text-[#865F27] font-semibold text-[11px] uppercase tracking-[0.25em] mb-3">
              <span>Curated Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1a1815] tracking-tight">
               Residential & Investment Assets
            </h2>
            <p className="text-neutral-600 text-xs sm:text-sm mt-2 max-w-xl font-light">
              Direct allocations across high-appreciation development corridors in Delhi NCR, Yamuna Expressway, and Dubai.
            </p>
          </div>

          {/* Next / Previous Controls */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#865F27] mr-1">
              Page {currentPage + 1} of {totalPages}
            </span>
            <button suppressHydrationWarning
              onClick={handlePrev}
              aria-label="Previous 3 Projects"
              className="p-3 rounded-full bg-white hover:bg-[#FAF7F0] border border-[#B89246]/40 text-[#1a1815] shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-[#865F27]" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next 3 Projects"
              className="p-3 rounded-full bg-white hover:bg-[#FAF7F0] border border-[#B89246]/40 text-[#1a1815] shadow-sm transition-all duration-200 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-[#865F27]" />
            </button>
          </div>
        </div>

        {/* 3 Cards Container with Touch-Swipe for Mobile */}
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
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
              {/* Card Image Banner */}
              <div className="relative w-full h-56 sm:h-60 overflow-hidden bg-neutral-100">
                <Image
                  src={project.image || "/banner2.png"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Gradient Protection */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/95 text-[#1a1815] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {project.status}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#B89246] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Eye Preview Trigger */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalProject(project);
                  }}
                  aria-label={`Inspect ${project.title}`}
                  className="absolute bottom-3 right-3 p-2.5 rounded-full bg-white/90 hover:bg-[#B89246] text-[#1a1815] hover:text-white transition-colors duration-200 shadow-md backdrop-blur-sm"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-[#865F27] text-[11px] font-bold uppercase tracking-wider mb-1">
                    <Building className="w-3.5 h-3.5" />
                    <span>{project.developer}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1a1815] tracking-tight group-hover:text-[#865F27] transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-neutral-500 text-xs mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Spec Snapshot Strip */}
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
                        Area Range
                      </span>
                      <span className="font-semibold text-neutral-800 line-clamp-1">
                        {project.sizeRange}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action CTAs */}
                <div className="pt-5 mt-4 border-t border-neutral-100 flex items-center gap-2">
                  {/* WhatsApp Quick Inquire */}
                  <a
                    href={getWhatsAppInquiryLink(project.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#137333] text-xs font-bold transition-colors"
                  >
                    <div className="relative w-3.5 h-3.5">
                      <Image
                        src="/wh.png"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span>WhatsApp</span>
                  </a>

                  {/* Eye Specs Button */}
                  <button
                    type="button"
                    onClick={() => setModalProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/40 text-[#1a1815] text-xs font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#865F27]" />
                    <span>Specs</span>
                  </button>

                  {/* Consultation Direct Trigger */}
                  <Link
                    href="/contact"
                    className="p-2.5 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] transition-colors"
                    title="Book Advisory Consultation"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className="py-2 focus:outline-none"
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentPage === idx ? "w-8 bg-[#865F27]" : "w-2 bg-[#B89246]/30 hover:bg-[#B89246]/60"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <AnimatePresence>
        {modalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-white border border-[#B89246]/40 rounded-3xl p-6 sm:p-8 text-[#1a1815] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
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

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1a1815] mb-1">
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
                    <span className="font-bold text-[#1a1815]">{modalProject.sizeRange}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-neutral-500 uppercase tracking-wider block font-semibold">
                      Indicative Valuation
                    </span>
                    <span className="font-bold text-[#865F27]">
                      {modalProject.priceRange || "Available On Request"}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 block mb-2">
                    Key Features & Amenities
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

              {/* Modal CTAs */}
              <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppInquiryLink(modalProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-all shadow-sm"
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src="/wh.png"
                      alt="WhatsApp"
                      fill
                      className="object-contain brightness-0 invert"
                    />
                  </div>
                  <span>Inquire on WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setModalProject(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#14171A] hover:bg-[#282C34] text-white text-xs font-bold tracking-wide transition-all"
                >
                  <span>Book Private Consultation</span>
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