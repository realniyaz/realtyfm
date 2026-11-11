// src/components/faq/FAQ.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: "How do I know if a property is a good investment?",
    answer:
      "A sound real estate investment depends on infrastructure triggers (like expressway connectivity or metro expansion), developer delivery track record, rental yields, and legal approvals. At RealtyFM, our team underwrites land titles, historical appreciation trends, and upcoming infrastructure so you invest only in assets with strong capital protection and growth.",
  },
  {
    question: "What are the additional costs involved in buying a property?",
    answer:
      "Beyond the basic sale price, buyers should budget for Stamp Duty & Registration (typically 5%–7% based on jurisdiction), GST on under-construction units (1% for affordable, 5% for standard residential), IFMS (Interest-Free Maintenance Security), meter charges, and documentation costs. We provide a 100% transparent cost sheet upfront with zero hidden charges.",
  },
  {
    question: "Can I trust the developer's project timeline and quality?",
    answer:
      "We exclusively partner with Grade-A, institutional builders (Gaurs, ACE, Sobha, Godrej, Max Estates) that possess active RERA registrations and proven delivery histories. We audit escrow account compliance and construction velocity before listing any project.",
  },
  {
    question: "How do I apply for a home loan?",
    answer:
      "Our in-house desk coordinates directly with leading institutional banks (SBI, HDFC, ICICI, Axis). Because our listed inventory is pre-approved by major lenders, sanctioning is expedited with minimal paperwork and competitive interest rates tailored to your eligibility.",
  },
  {
    question: "Will I get support after the property is purchased?",
    answer:
      "Yes. Our advisory continues through demand-note verifications, builder updates, registry documentation, physical handover inspections, and secondary leasing or resale services if you are an investor.",
  },
  {
    question: "Are non-resident Indians (NRIs) eligible to buy property through RealtyFM?",
    answer:
      "Yes. NRIs can freely invest in residential and commercial properties in India via NRE/NRO accounts. Through our dedicated Dubai desk, we handle remote power of attorney (POA), digital agreements, FEMA guidelines, and repatriation guidance seamlessly.",
  },
  {
    question: "What is the difference between Pre-Launch and Ready-to-Move investments?",
    answer:
      "Pre-launch assets offer lower entry prices, staggered construction-linked payment plans (CLP), and high capital appreciation potential before handover. Ready-to-move homes offer immediate possession and immediate rental income without construction delays.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 bg-[#fbf7ee] text-[#0c0d0e] overflow-hidden">
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block: Centered across all devices */}
        <div className="flex flex-col items-center text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider">
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-[#0c0d0e] uppercase tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-base text-neutral-600 max-w-xl font-sans font-normal leading-relaxed">
            Clear answers to common questions about real estate investments, financing, and ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-white border-[#b89246] shadow-[0_8px_25px_rgba(184,146,70,0.12)]"
                    : "bg-white/80 border-[#ecdda9] hover:border-[#b89246]/60 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-sm sm:text-lg text-[#0c0d0e] leading-snug">
                    {faq.question}
                  </span>

                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#b89246] text-white"
                        : "bg-[#f5eed6] text-[#865f27]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2.5]" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed border-t border-[#f5eed6]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Help Trigger */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-600 font-sans">
            Have a question that isn&apos;t listed here?{" "}
            <a
              href={COMPANY_DATA.primaryContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#865f27] hover:text-[#a47b30] font-bold underline underline-offset-4 transition-colors"
            >
              Ask our advisory desk directly on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}