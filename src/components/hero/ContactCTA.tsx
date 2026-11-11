// src/components/contact/ContactCTA.tsx
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Phone,
  Send,
  Loader2,
  MapPin,
  Clock,
  Building2,
} from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA } from "@/data/projects";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
    />
  </svg>
);

export default function ContactCTA() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    project: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    const handleProjectSelect = (e: Event) => {
      const customEvent = e as CustomEvent<{ projectName: string }>;
      if (customEvent.detail?.projectName) {
        setFormData((prev) => ({
          ...prev,
          project: customEvent.detail.projectName,
        }));
      }
    };

    window.addEventListener("realtyfm:select_project", handleProjectSelect);
    return () =>
      window.removeEventListener("realtyfm:select_project", handleProjectSelect);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
        body: JSON.stringify({
          ...formData,
          fullPhone: `${formData.countryCode} ${formData.phone}`,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit your request right now.");
      }

      router.push(`/thank-you?name=${encodeURIComponent(formData.name)}`);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Something went wrong. Please call us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#fbf7ee] py-16 sm:py-24 text-[#0c0d0e]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Contact Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight leading-tight">
            Talk to Our Team
          </h2>

          <p className="mt-2 text-xs sm:text-base text-neutral-600 max-w-lg font-sans leading-relaxed">
            Reach out directly for site visits, project brochures, or quick pricing details.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          
          {/* LEFT: Office Locations */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            
            {/* India Office */}
            <div className="p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#865f27] px-2.5 py-1 rounded">
                  India Office
                </span>
                <span className="text-xs font-semibold text-neutral-500">Noida, UP</span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#0c0d0e] mb-1">
                {COMPANY_DATA.offices.india.name}
              </h3>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#865f27] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.india.fullAddress}</span>
              </div>

              {/* Solid Action Buttons */}
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={`tel:${COMPANY_DATA.offices.india.phone.raw}`}
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0c0d0e] hover:bg-[#22252a] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#d4ab47]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={COMPANY_DATA.primaryContact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#128C7E] hover:bg-[#0d6e63] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <WhatsappIcon className="w-4 h-4 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Dubai Office */}
            <div className="p-6 rounded-2xl bg-white border border-[#ecdda9] shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#865f27] px-2.5 py-1 rounded">
                  Dubai Office
                </span>
                <span className="text-xs font-semibold text-neutral-500">UAE Desk</span>
              </div>

              <h3 className="text-lg font-serif font-bold text-[#0c0d0e] mb-1">
                {COMPANY_DATA.offices.dubai.name}
              </h3>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed">
                <MapPin className="w-4 h-4 text-[#865f27] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.offices.dubai.fullAddress}</span>
              </div>

              <a
                href={`tel:${COMPANY_DATA.offices.dubai.phone.raw}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#0c0d0e] hover:bg-[#22252a] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#d4ab47]" />
                <span>Call: {COMPANY_DATA.offices.dubai.phone.display}</span>
              </a>
            </div>

            {/* Operational Timing Strip */}
            <div className="p-3.5 rounded-xl bg-white border border-[#ecdda9] flex items-center gap-2 text-xs font-medium text-neutral-700">
              <Clock className="w-4 h-4 text-[#865f27] shrink-0" />
              <span>Working Hours: Mon – Sun, 9:30 AM to 7:30 PM</span>
            </div>

          </div>

          {/* RIGHT: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-white border border-[#ecdda9] shadow-sm flex flex-col justify-between">
              <div>
                <div className="mb-5">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0c0d0e]">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1">
                    Fill in your contact details below and our team will get in touch with you.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs mb-4">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Amit Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ee] border border-[#ecdda9] focus:border-[#b89246] focus:outline-none text-xs sm:text-sm text-[#0c0d0e]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                        Phone Number *
                      </label>
                      <div className="flex">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="inline-flex items-center px-2 py-2.5 rounded-l-xl border border-r-0 border-[#ecdda9] bg-[#f5eed6] text-[#0c0d0e] text-xs font-semibold focus:outline-none focus:border-[#b89246]"
                        >
                          <option value="+91">IN (+91)</option>
                          <option value="+971">UAE (+971)</option>
                          <option value="+44">UK (+44)</option>
                          <option value="+1">US (+1)</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-r-xl bg-[#fbf7ee] border border-[#ecdda9] focus:border-[#b89246] focus:outline-none text-xs sm:text-sm text-[#0c0d0e]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="amit@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ee] border border-[#ecdda9] focus:border-[#b89246] focus:outline-none text-xs sm:text-sm text-[#0c0d0e]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                        Project of Interest
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ee] border border-[#ecdda9] focus:border-[#b89246] focus:outline-none text-xs sm:text-sm text-[#0c0d0e]"
                      >
                        <option value="">Select a property</option>
                        {PROJECTS_DATA.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.location})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-neutral-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Share your requirements or schedule a site visit..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#fbf7ee] border border-[#ecdda9] focus:border-[#b89246] focus:outline-none text-xs sm:text-sm text-[#0c0d0e] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-neutral-500 pt-1">
                    Your contact information is strictly kept confidential.
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}