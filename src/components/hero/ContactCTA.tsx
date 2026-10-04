"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Phone,
  Building2,
  Send,
  Loader2,
  CheckCircle2,
  Globe2,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA } from "@/data/projects";

export default function ContactCTA() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit your inquiry at this moment.");
      }

      // Redirect client to the confirmation page
      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("An unexpected error occurred. Please reach out via WhatsApp directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] py-20 sm:py-28 text-[#1A1815] overflow-hidden border-t border-[#B89246]/25"
    >
      {/* Background architectural aura */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#B89246]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-[#D4AB47]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B89246]/40 text-[#865F27] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B89246]" />
            <span>Private Advisory Mandate</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#1A1815] tracking-tight leading-tight max-w-3xl">
            Initiate Your Next <span className="italic text-[#865F27] font-normal">Strategic Acquisition.</span>
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-neutral-600 max-w-2xl font-light leading-relaxed">
            Schedule a private portfolio briefing with our senior consultants or request confidential pre-launch allocations.
          </p>
          <div className="h-0.5 w-16 bg-[#B89246] mt-6" />
        </div>

        {/* 2-Column Luxury Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT: Dual Global Desks & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* India HQ Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_6px_25px_rgba(184,146,70,0.08)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#865F27] bg-[#FAF7F0] px-3 py-1 rounded-md border border-[#E8DFD1]">
                  {COMPANY_DATA.offices.india.badge}
                </span>
                <Globe2 className="w-4 h-4 text-[#B89246]" />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1A1815] mb-2">
                {COMPANY_DATA.offices.india.name}
              </h3>

              <div className="flex items-start gap-2.5 text-xs text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#B89246] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.india.fullAddress}</span>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={COMPANY_DATA.offices.india.phone.raw ? `tel:${COMPANY_DATA.offices.india.phone.raw}` : COMPANY_DATA.primaryContact.phoneLink}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/30 text-xs font-semibold text-[#1A1815] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#865F27]" />
                  <span>{COMPANY_DATA.offices.india.phone.display}</span>
                </a>

                <a
                  href={COMPANY_DATA.offices.india.whatsapp?.link || COMPANY_DATA.primaryContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#137333] text-xs font-bold transition-colors"
                >
                  <div className="relative w-3.5 h-3.5">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Dubai Desk Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_6px_25px_rgba(184,146,70,0.08)]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#865F27] bg-[#FAF7F0] px-3 py-1 rounded-md border border-[#E8DFD1]">
                  {COMPANY_DATA.offices.dubai.badge}
                </span>
                <Globe2 className="w-4 h-4 text-[#B89246]" />
              </div>

              <h3 className="text-xl font-serif font-bold text-[#1A1815] mb-2">
                {COMPANY_DATA.offices.dubai.name}
              </h3>

              <div className="flex items-start gap-2.5 text-xs text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#B89246] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.dubai.fullAddress}</span>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center">
                <a
                  href={`tel:${COMPANY_DATA.offices.dubai.phone.raw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/30 text-xs font-semibold text-[#1A1815] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#865F27]" />
                  <span>Call Dubai: {COMPANY_DATA.offices.dubai.phone.display}</span>
                </a>
              </div>
            </div>

            {/* Operational Timing & RERA Audit Tag */}
            <div className="p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E8DFD1] flex items-center justify-between text-xs text-neutral-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#865F27]" />
                <span>Monday – Sunday: 9:30 AM – 7:30 PM IST</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#137333] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>RERA Verified</span>
              </div>
            </div>

          </div>

          {/* RIGHT: High-Conversion Acquisition Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#B89246]/45 shadow-[0_16px_45px_rgba(184,146,70,0.12)] relative">
              
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1815]">
                   Consultation Request
                </h3>
                <p className="text-xs text-neutral-500 mt-1">
                  Fill in your requirements below. Our advisory lead will revert within 2 business hours.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs mb-6">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors"
                    />
                  </div>

                  {/* Project of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Project Selection
                    </label>
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors"
                    >
                      <option value="">General Portfolio Advisory</option>
                      {PROJECTS_DATA.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                    Specific Requirements or Budget Scope
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Specify configurations, timeline to purchase, or capital allocation goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#B89246]" />
                      <span>Transmitting Consultation Dossier...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Consultation Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-neutral-500 pt-1">
                  We guarantee total privacy. Your contact details are never shared with third parties.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}