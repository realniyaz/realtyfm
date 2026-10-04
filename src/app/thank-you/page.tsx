import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

function ThankYouContent() {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl bg-white border border-[#B89246]/40 p-8 sm:p-12 text-[#1A1815] shadow-[0_16px_50px_rgba(184,146,70,0.12)] text-center">
      {/* Icon Badge */}
      <div className="w-16 h-16 rounded-full bg-[#B89246]/15 border border-[#B89246]/40 flex items-center justify-center mx-auto mb-6 text-[#865F27]">
        <CheckCircle2 className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF7F0] border border-[#B89246]/30 text-[#865F27] text-[11px] font-semibold uppercase tracking-widest mb-3">
        <ShieldCheck className="w-3.5 h-3.5 text-[#B89246]" />
        <span>Dossier Received</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1815] tracking-tight">
        Thank You for Your Trust.
      </h1>

      <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-md mx-auto">
        Your advisory request has been dispatched to our senior management team. A designated property finance consultant will reach out within <strong className="text-[#1A1815]">2 business hours</strong>.
      </p>

      {/* Immediate Touchpoint Action Cards */}
      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col sm:flex-row gap-3">
        {/* WhatsApp Immediate Desk */}
        <a
          href={COMPANY_DATA.primaryContact.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm active:scale-95"
        >
          <div className="relative w-4 h-4">
            <Image
              src="/wh.png"
              alt="WhatsApp"
              fill
              className="object-contain brightness-0 invert"
            />
          </div>
          <span>Direct WhatsApp</span>
        </a>

        {/* Call Senior Advisor */}
        <a
          href={COMPANY_DATA.primaryContact.phoneLink}
          className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#FAF7F0] hover:bg-[#F2ECE1] border border-[#B89246]/40 text-[#1A1815] text-xs font-semibold transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-[#865F27]" />
          <span>Call: {COMPANY_DATA.primaryContact.phoneDisplay}</span>
        </a>
      </div>

      {/* Back to Homepage Button */}
      <div className="mt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-500 hover:text-[#865F27] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage Portfolio</span>
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAF7F0] via-[#F4EEDB] to-[#FAF7F0] flex items-center justify-center px-4 py-24 sm:py-32">
      <Suspense fallback={<div className="text-xs text-neutral-400">Loading confirmation...</div>}>
        <ThankYouContent />
      </Suspense>
    </main>
  );
}