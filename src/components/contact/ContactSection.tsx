"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Send,
  Loader2,
  Building2,
  Globe2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA } from "@/data/projects";

export default function ContactSection() {
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
        throw new Error(data.error || "Failed to submit request.");
      }

      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Unable to transmit dossier. Please contact us via WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-[#FAF8F5] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-[#1A1815]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: Physical Locations & Map (Col span: 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* India Headquarters Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_6px_25px_rgba(184,146,70,0.08)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#865F27] bg-[#FAF7F0] px-3 py-1 rounded-md border border-[#E8DFD1]">
                  Corporate Headquarters
                </span>
                <Building2 className="w-4 h-4 text-[#B89246]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1815] mb-2">
                {COMPANY_DATA.offices.india.name}
              </h2>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#B89246] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.india.fullAddress}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-neutral-100">
                <a
                  href={COMPANY_DATA.primaryContact.phoneLink}
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/30 text-xs font-semibold text-[#1A1815] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#865F27]" />
                  <span>Call India HQ</span>
                </a>

                <a
                  href={COMPANY_DATA.primaryContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#137333] text-xs font-bold transition-colors"
                >
                  <div className="relative w-3.5 h-3.5">
                    <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                  </div>
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Dubai Global Desk Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#B89246]/35 shadow-[0_6px_25px_rgba(184,146,70,0.08)]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#865F27] bg-[#FAF7F0] px-3 py-1 rounded-md border border-[#E8DFD1]">
                  International Office
                </span>
                <Globe2 className="w-4 h-4 text-[#B89246]" />
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1815] mb-2">
                {COMPANY_DATA.offices.dubai.name}
              </h2>

              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#B89246] flex-shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.dubai.fullAddress}</span>
              </div>

              <div className="pt-3 border-t border-neutral-100">
                <a
                  href={`tel:${COMPANY_DATA.offices.dubai.phone.raw}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/30 text-xs font-semibold text-[#1A1815] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#865F27]" />
                  <span>Call Dubai: {COMPANY_DATA.offices.dubai.phone.display}</span>
                </a>
              </div>
            </div>

            {/* Google Map Tagged to Alphathum Sector-90 */}
            <div className="rounded-2xl bg-white border border-[#B89246]/35 overflow-hidden shadow-sm">
              <div className="p-4 bg-[#FAF7F0] border-b border-[#E8DFD1] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#865F27]">
                  <MapPin className="w-3.5 h-3.5 text-[#B89246]" />
                  <span>Headquarters Coordinates</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Alphathum+Sector+90+Noida+UP+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#865F27] hover:underline flex items-center gap-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="w-full h-64 sm:h-72">
                <iframe
                  title="Realty FM HQ Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.467472099307!2d77.40871957549586!3d28.49557457573981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce7dc3088b4eb%3A0xe5c75bf6fe5df26!2sAlphathum%2C%20Sector%2090%2C%20Noida%2C%20Uttar%20Pradesh%20201305!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Acquisition Intake Form (Col span: 7) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#B89246]/45 shadow-[0_16px_45px_rgba(184,146,70,0.12)]">
              <div className="mb-8">
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#865F27] block mb-1">
                  Confidential Advisory
                </span>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#1A1815] tracking-tight">
                  Schedule Private Briefing
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed">
                  Provide your portfolio requirements below. A designated senior advisor will connect with you with customized investment memorandums.
                </p>
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs mb-6">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
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

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Contact Number *
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
                      placeholder="client@investmentfirm.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors"
                    />
                  </div>

                  {/* Project of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-[#865F27]">
                      Project or Focus Area
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
                    Requirements & Investment Goals
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Specify preferred configurations, target allocation amount, or return timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF7F0] border border-[#E8DFD1] focus:border-[#B89246] focus:outline-none text-xs sm:text-sm text-[#1A1815] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl bg-[#14171A] hover:bg-[#B89246] text-white hover:text-[#0C0D0E] font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 shadow-md active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
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

                <div className="pt-2 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#865F27]" />
                  <span>Strict NDA and client privacy guaranteed.</span>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}