// src/components/layout/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    // { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <footer className="relative w-full bg-[#0c0d0e] text-neutral-300 border-t border-[#22252a]">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 sm:pt-16 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Column 1: Brand & Summary (Desktop 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <div className="relative w-44 sm:w-52 h-12 sm:h-14">
              <Image
                src="/logodark.png"
                alt={COMPANY_DATA.brandName}
                fill
                sizes="208px"
                className="object-contain object-center md:object-left brightness-0 invert"
              />
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed max-w-sm">
              Your trusted partner for buying verified residential apartments, commercial spaces, and luxury plots across Noida, Yamuna Expressway, and Gurugram.
            </p>
          </div>

          {/* Column 2: Contact Information (Desktop 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="inline-block">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Contact Us
              </h4>
              <div className="h-0.5 w-8 bg-[#b89246] mt-1 mx-auto md:mx-0" />
            </div>

            <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start justify-center md:justify-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b89246] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_DATA.offices.india.fullAddress}
                </span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-[#b89246] shrink-0" />
                <a
                  href={`tel:${COMPANY_DATA.offices.india.phone.raw}`}
                  className="hover:text-white transition-colors"
                >
                  CALL: {COMPANY_DATA.offices.india.phone.display}
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-[#b89246] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DATA.primaryContact.email}`}
                  className="hover:text-white transition-colors"
                >
                  MAIL: {COMPANY_DATA.primaryContact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Menu Navigation (Desktop 2 Cols) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="inline-block">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Menu
              </h4>
              <div className="h-0.5 w-8 bg-[#b89246] mt-1 mx-auto md:mx-0" />
            </div>

            <ul className="space-y-2 pt-1 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#f5eed6] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal & Policies (Desktop 2 Cols - Blogs Removed) */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="inline-block">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                Legal
              </h4>
              <div className="h-0.5 w-8 bg-[#b89246] mt-1 mx-auto md:mx-0" />
            </div>

            <ul className="space-y-2 pt-1 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-neutral-400 hover:text-[#f5eed6] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-neutral-400 hover:text-[#f5eed6] transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-neutral-400 hover:text-[#f5eed6] transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* RERA Disclaimer & Copyright Bar */}
      <div className="border-t border-[#1a1d21] bg-[#08090a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center space-y-3">
          <p className="text-[11px] text-neutral-400 leading-relaxed max-w-4xl mx-auto">
            <strong className="text-neutral-300">Disclaimer:</strong> {COMPANY_DATA.brandName} operates as an independent real estate advisory and channel partner. The project details, floor plans, specifications, and images shown on this website are for informational purposes only and sourced from developer brochures. REALTYFM
          </p>

          <p className="text-[11px] text-neutral-400 pt-1">
            &copy; {currentYear} {COMPANY_DATA.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}