// src/components/navbar/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

// 1. Updated Custom WhatsApp Icon (as provided)
export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M24.504 7.504A11.88 11.88 0 0 0 16.05 4C9.465 4 4.1 9.36 4.1 15.945a11.9 11.9 0 0 0 1.594 5.973L4 28.109l6.336-1.664a11.96 11.96 0 0 0 5.71 1.457h.005c6.586 0 11.945-5.359 11.949-11.949c0-3.191-1.242-6.191-3.496-8.45zM16.05 25.883h-.004a9.93 9.93 0 0 1-5.055-1.383l-.363-.215l-3.762.985l1.004-3.665l-.234-.375a9.9 9.9 0 0 1-1.52-5.285c0-5.472 4.457-9.925 9.938-9.925a9.86 9.86 0 0 1 7.02 2.91a9.88 9.88 0 0 1 2.905 7.023c0 5.477-4.457 9.93-9.93 9.93zm5.445-7.438c-.297-.148-1.766-.87-2.039-.968c-.273-.102-.473-.149-.672.148c-.2.3-.77.973-.945 1.172c-.172.195-.348.223-.645.074c-.3-.148-1.261-.465-2.402-1.484c-.887-.79-1.488-1.77-1.66-2.067c-.176-.3-.02-.46.129-.61c.136-.132.3-.347.449-.523c.148-.171.2-.296.3-.496c.098-.199.048-.375-.027-.523c-.074-.148-.671-1.621-.921-2.219c-.243-.582-.489-.5-.672-.511c-.172-.008-.371-.008-.57-.008c-.2 0-.524.074-.798.375c-.273.297-1.043 1.02-1.043 2.488c0 1.469 1.07 2.89 1.22 3.09c.148.195 2.105 3.21 5.1 4.504a17 17 0 0 0 1.7.629c.715.226 1.367.195 1.883.12c.574-.085 1.765-.722 2.015-1.421c.247-.695.247-1.293.172-1.418c-.074-.125-.273-.2-.574-.352"
    />
  </svg>
);

// 2. Facebook Vector Icon
export const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
    />
  </svg>
);

// 3. X (formerly Twitter) Vector Icon
export const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
    />
  </svg>
);

// 4. Instagram Vector Icon
export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
    />
  </svg>
);

// 5. LinkedIn Vector Icon
export const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
    />
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
  }, [mobileMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? "bg-[#0c0d0e]/95 backdrop-blur-md py-3 shadow-2xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              onClick={scrollToTop}
              className="relative z-50 flex items-center group cursor-pointer"
            >
              <div className="relative w-44 sm:w-56 h-12 sm:h-14 transition-opacity hover:opacity-95">
                <Image
                  src="/newlogo.png"
                  alt={COMPANY_DATA.brandName}
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
              <button
                onClick={scrollToTop}
                className="relative group py-1 text-xs font-semibold text-neutral-200 hover:text-white uppercase tracking-widest transition-colors cursor-pointer"
              >
                Home
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b89246] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
              </button>

              {[
                { name: "About Us", href: "#about" },
                { name: "Portfolio", href: "#portfolio" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group py-1 text-xs font-semibold text-neutral-200 hover:text-white uppercase tracking-widest transition-colors"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b89246] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center" />
                </Link>
              ))}
            </nav>

            {/* Social Icons & Direct Phone CTA */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-2.5">
              {/* WhatsApp */}
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/40 text-neutral-300 hover:text-[#25D366] hover:border-[#25D366] transition-all backdrop-blur-sm"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/realtyfmofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/40 text-neutral-300 hover:text-[#1877F2] hover:border-[#1877F2] transition-all backdrop-blur-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>

              {/* X (Twitter) */}
              {/* <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/40 text-neutral-300 hover:text-white hover:border-white transition-all backdrop-blur-sm"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-3 h-3" />
              </a> */}

              {/* Instagram */}
              <a
                href="https://www.instagram.com/realtyfm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/40 text-neutral-300 hover:text-[#E4405F] hover:border-[#E4405F] transition-all backdrop-blur-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/realtyfmofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/40 text-neutral-300 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all backdrop-blur-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>

              {/* Phone CTA */}
              <a
                href={COMPANY_DATA.primaryContact.phoneLink}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#b89246]/80 bg-black/40 hover:bg-[#b89246] text-[#f5eed6] hover:text-[#0c0d0e] transition-all text-xs font-bold uppercase tracking-wider backdrop-blur-sm ml-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{COMPANY_DATA.primaryContact.phoneDisplay}</span>
              </a>
            </div>

            {/* Mobile Actions & Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-black/40 border border-white/15 text-[#25D366]"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a> */}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-4 flex flex-col justify-between items-end">
                  <span
                    className={`h-[2px] bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "w-6 rotate-45 translate-y-[7px] bg-[#d4ab47]" : "w-6"
                    }`}
                  />
                  <span
                    className={`h-[2px] bg-white transition-all duration-200 ${
                      mobileMenuOpen ? "opacity-0" : "w-4"
                    }`}
                  />
                  <span
                    className={`h-[2px] bg-white transition-all duration-300 ${
                      mobileMenuOpen ? "w-6 -rotate-45 -translate-y-[7px] bg-[#d4ab47]" : "w-5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0c0d0e]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-6 lg:hidden">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-bold text-[#b89246] uppercase tracking-widest pl-1">
              Navigation
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-between py-3 text-xl font-serif font-bold text-neutral-100 hover:text-[#d4ab47] border-b border-[#282c34] text-left cursor-pointer"
            >
              <span>Home</span>
              <ArrowUpRight className="w-5 h-5 text-[#b89246]" />
            </button>

            {[
              { name: "About Us", href: "#about" },
              { name: "Portfolio", href: "#portfolio" },
              { name: "Why Choose Us", href: "#why-us" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 text-xl font-serif font-bold text-neutral-100 hover:text-[#d4ab47] border-b border-[#282c34]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-5 h-5 text-[#b89246]" />
              </Link>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-[#282c34]">
            {/* Mobile Social Row */}
            <div className="flex items-center justify-center gap-3 py-1 text-neutral-300">
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#14171a] border border-[#282c34] hover:text-[#25D366]"
                aria-label="WhatsApp"
              >
                <WhatsappIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/realtyfmofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#14171a] border border-[#282c34] hover:text-[#1877F2]"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              {/* <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#14171a] border border-[#282c34] hover:text-white"
                aria-label="X (Twitter)"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a> */}
              <a
                href="https://www.instagram.com/realtyfm_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#14171a] border border-[#282c34] hover:text-[#E4405F]"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/realtyfmofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#14171a] border border-[#282c34] hover:text-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href={COMPANY_DATA.primaryContact.phoneLink}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#b89246] text-[#0c0d0e] font-bold text-xs uppercase tracking-wider w-full shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Advisory Desk</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}