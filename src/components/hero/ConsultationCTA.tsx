// src/components/cta/ConsultationCTA.tsx
"use client";

import React from "react";
import Image from "next/image";
import { Phone, Calendar, ArrowRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
    />
  </svg>
);

export default function ConsultationCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section className="relative w-full py-14 sm:py-20 overflow-hidden bg-[#0c0d0e]">
      {/* Background Image with Controlled Warm Vignette */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src="/banner1 (2).png"
          alt="Luxury Community Entrance"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.82] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0e] via-transparent to-[#0c0d0e]/60" />
      </div>

      {/* Content Centerfold */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-white tracking-tight uppercase leading-tight drop-shadow-md">
          Schedule a Free Consultation
        </h2>

        <p className="mt-2.5 sm:mt-3 text-xs sm:text-base md:text-lg text-neutral-100 max-w-xl font-sans font-normal leading-relaxed drop-shadow">
          Speak with our team to find the right property, compare prices, or schedule a site visit today.
        </p>

        {/* 
          Balanced Button Grid:
          - Mobile: Primary "Book Visit" is full-width (w-full max-w-xs), secondary Call & WhatsApp sit side-by-side in a 2-column grid.
          - Desktop (sm+): Balanced 3-column inline row.
        */}
        <div className="mt-6 sm:mt-8 w-full max-w-xs sm:max-w-2xl flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
          
          {/* Action 1: Book Visit */}
          <button
            onClick={scrollToContact}
            className="w-full sm:flex-1 h-11 sm:h-12 flex items-center justify-center gap-1.5 px-4 rounded-xl bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Book Visit</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-0.5" />
          </button>

          {/* Secondary Actions Row for Mobile */}
          <div className="w-full sm:flex-1 grid grid-cols-2 sm:contents gap-2.5">
            {/* Action 2: Direct Call */}
            <a
              href={COMPANY_DATA.primaryContact.phoneLink}
              className="w-full sm:flex-1 h-11 sm:h-12 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-white/90 hover:bg-white text-[#0c0d0e] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#865f27] shrink-0" />
              <span className="truncate">Call</span>
            </a>

            {/* Action 3: WhatsApp */}
                <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 h-11 sm:h-12 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-[#128C7E] hover:bg-[#0d6e63] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md active:scale-95 transition-all"
                aria-label="WhatsApp Us"
                >
                <WhatsappIcon className="w-4 h-4 shrink-0 fill-white" />
                <span>WhatsApp</span>
                </a>
</div>
        </div>
      </div>
    </section>
  );
}