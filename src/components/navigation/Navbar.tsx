"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Why Us", href: "/#advantages" },
  { name: "Global Desks", href: "/#contact" },
  { name: "Consultation", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close drawer upon route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* 1. TOP TICKER / LUXURY ANNOUNCEMENT BAR */}
      <div className="w-full bg-[#121417] border-b border-[#B89246]/25 text-[#E6DFD3] text-[11px] md:text-xs py-1.5 overflow-hidden">
        <div className="flex select-none">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                  <span>Verified Prime Residences: Yamuna Expressway • Noida Expressway • Greater Noida</span>
                </span>
                <span className="text-[#B89246]/50">•</span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#B89246] flex-shrink-0" />
                  <span>Dual Advisory Desks: Noida Sector-90 HQ & Latifa Tower, Sheikh Zayed Rd, Dubai</span>
                </span>
                <span className="text-[#B89246]/50">•</span>
                <span className="text-[#FAF8F5] font-medium tracking-wide">
                  Strategic Wealth Advisory & Exclusive Direct Developer Allocations
                </span>
                <span className="text-[#B89246]/50">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/98 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.06)] border-b border-[#B89246]/25 py-2.5"
            : "bg-[#FAF8F5] border-b border-[#E8DFD1] py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* BRAND LOGO */}
            <Link
              href="/"
              className="group flex items-center relative z-10 select-none flex-shrink-0"
              aria-label="Realty FM Home"
            >
              <div className="relative w-36 sm:w-48 md:w-52 h-9 sm:h-11 md:h-12 transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Realty FM — Your Finance Manager"
                  fill
                  priority
                  quality={95}
                  sizes="(max-width: 640px) 144px, (max-width: 768px) 192px, 208px"
                  className="object-contain object-left drop-shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                />
              </div>
            </Link>

            {/* DESKTOP NAVIGATION LINKS */}
            <div className="hidden lg:flex items-center gap-1 bg-[#F5EFEB]/95 px-3 py-1.5 rounded-full border border-[#B89246]/30 shadow-inner">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setActiveHover(link.name)}
                    onMouseLeave={() => setActiveHover(null)}
                    className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold transition-colors duration-200 ${
                      isActive ? "text-[#865F27]" : "text-[#2C2925] hover:text-[#865F27]"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    {activeHover === link.name && (
                      <motion.div
                        layoutId="navHover"
                        className="absolute inset-0 bg-[#B89246]/15 rounded-full border border-[#B89246]/35"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.18 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* DESKTOP CONTACT CTAs */}
            <div className="hidden md:flex items-center gap-2.5 flex-shrink-0">
              {/* Telephone Contact Button */}
              <a
                href={COMPANY_DATA.primaryContact.phoneLink}
                className="group flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#B89246]/35 bg-[#F5EFEB] text-[#2C2925] text-xs font-semibold hover:border-[#B89246] hover:bg-white transition-all duration-300 shadow-sm"
              >
                <div className="w-5 h-5 rounded-full bg-[#B89246]/15 flex items-center justify-center text-[#865F27] group-hover:bg-[#B89246] group-hover:text-white transition-colors">
                  <Phone className="w-3 h-3" />
                </div>
                <span className="tracking-wide font-sans">{COMPANY_DATA.primaryContact.phoneDisplay}</span>
              </a>

              {/* WhatsApp Advisory Button */}
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-all duration-300 group shadow-sm"
              >
                <div className="relative w-4 h-4 flex-shrink-0 transition-transform group-hover:scale-110">
                  <Image
                    src="/wh.png"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-bold text-[#14532d] leading-none">
                  WhatsApp Desk
                </span>
              </a>
            </div>

            {/* MOBILE QUICK ACTION + DRAWER TOGGLE */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Consultation"
                className="p-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 active:scale-95 transition-transform"
              >
                <div className="relative w-4 h-4">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain" />
                </div>
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-[#F5EFEB] border border-[#B89246]/35 text-[#2C2925] active:scale-95 transition-all focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#865F27]" /> : <Menu className="w-5 h-5 text-[#2C2925]" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE FULL-SCREEN SLIDE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-[78px] sm:top-[86px] h-[calc(100dvh-78px)] sm:h-[calc(100dvh-86px)] bg-[#FAF8F5] border-t border-[#B89246]/20 px-6 py-6 flex flex-col justify-between overflow-y-auto"
          >
            {/* Navigation List */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#865F27] font-bold block">
                Menu Navigation
              </span>

              <div className="flex flex-col space-y-1">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-base sm:text-lg font-serif font-medium tracking-wide text-[#2C2925] hover:text-[#865F27] py-3 border-b border-[#E8DFD1]/80 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B89246]" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 pb-4 space-y-3 border-t border-[#E8DFD1]">
              <a
                href={COMPANY_DATA.primaryContact.phoneLink}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#14171A] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider shadow-sm active:scale-98 transition-transform"
              >
                <Phone className="w-4 h-4 text-[#B89246]" />
                <span>Call Desk: {COMPANY_DATA.primaryContact.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY_DATA.primaryContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider shadow-sm active:scale-98 transition-transform"
              >
                <div className="relative w-4 h-4">
                  <Image src="/wh.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
                </div>
                <span>Direct WhatsApp Consultation</span>
              </a>

              <p className="text-center text-[10px] text-neutral-500 pt-1 leading-tight">
                India HQ: B 625 Alphathum, Sector-90, Noida • Dubai Global Desk
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}