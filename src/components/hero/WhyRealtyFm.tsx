// src/components/why-choose-us/WhyChooseUs.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Curated cinematic assets uploaded for the slideshow
const SLIDESHOW_IMAGES = [
  { src: "/banner_1.png", alt: "Signature High-Rise Towers" },
  { src: "/banner1.png", alt: "Skyline Night Architecture" },
  { src: "/banner2.png", alt: "Luxury Sunset Infinity Deck" },
  { src: "/banner3 (2).png", alt: "Grand Designer Clubhouse" },
  { src: "/banner3.png", alt: "Resort Living Poolside Residences" },
  { src: "/hero-banner-1.jpg", alt: "Master-Planned Luxury Township" },
];

const DiamondIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[1.8]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 3h12l4 6-10 12L2 9l4-6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 9h20M10 3l-2 6 4 12 4-12-2-6" />
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[1.8]">
    <circle cx="12" cy="13" r="8" />
    <path strokeLinecap="round" d="M12 9v4l2.5 2.5M12 2v3M9 2h6" />
  </svg>
);

const HandshakeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 fill-none stroke-current stroke-[1.8]">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0 1 10 0v4" />
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <circle cx="12" cy="16" r="1.5" />
  </svg>
);

const REASONS = [
  {
    id: "pricing",
    icon: DiamondIcon,
    badgeColor: "bg-[#b89246] text-white shadow-[#b89246]/25",
    title: "Direct Builder Pricing",
    description:
      "Direct inventory access with zero hidden markups. You get genuine developer pricing, official launch schemes, and transparent payment plans.",
  },
  {
    id: "legal",
    icon: SpeedIcon,
    badgeColor: "bg-[#865f27] text-white shadow-[#865f27]/25",
    title: "100% Legal & RERA Verified",
    description:
      "Every project is pre-screened for approved layouts, encumbrance certificates, and RERA compliance before we recommend it.",
  },
  {
    id: "management",
    icon: HandshakeIcon,
    badgeColor: "bg-[#0c0d0e] text-white shadow-black/25",
    title: "Complete Advisory Support",
    description:
      "We handle everything from site visits and price negotiations to bank loan disbursements and legal registry handover.",
  },
];

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeHover, setActiveHover] = useState<number | null>(null);

  // 2-second automatic cinematic slideshow loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

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
    <section id="why-us" className="relative w-full py-16 sm:py-28 bg-[#fbf7ee] text-[#0c0d0e] overflow-hidden">
      
      {/* Background Micro-Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            DESKTOP VIEW: CURVED FRAME WITH AUTOMATIC 2S CINEMATIC SLIDESHOW (lg and up)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[580px]">
          
          {/* Left Column: Pinned Cinematic Display */}
          <div className="col-span-6 relative h-[560px] flex items-center">
            
            <div className="relative w-full h-full rounded-[42px] overflow-hidden border border-[#ecdda9] shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-[#0c0d0e]">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={SLIDESHOW_IMAGES[currentSlide].src}
                    alt={SLIDESHOW_IMAGES[currentSlide].alt}
                    fill
                    priority
                    sizes="(max-width: 1200px) 50vw, 620px"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Luxury Tint Vignette */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0c0d0e]/90 via-[#0c0d0e]/45 to-transparent z-10 pointer-events-none" />

              {/* Title & Micro-Indicators */}
              <div className="absolute inset-0 p-10 flex flex-col justify-between z-20 pointer-events-none">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 border border-white/25 text-[#f5eed6] text-xs font-bold uppercase tracking-wider backdrop-blur-md self-start">
                  REALTYFM
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-4xl xl:text-5xl font-serif font-bold text-white uppercase tracking-tight leading-tight">
                      Why <br />
                      <span className="text-gold-gradient italic font-normal">Choose Us</span>
                    </h2>
                    <p className="text-sm text-neutral-200 max-w-sm font-sans leading-relaxed">
                      A finance-first approach to real estate acquisitions, ensuring every transaction is secure and value-driven.
                    </p>
                  </div>

                  {/* Slideshow Progress Bar Strip */}
                  <div className="flex items-center gap-1.5 pt-2">
                    {SLIDESHOW_IMAGES.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          currentSlide === idx ? "w-7 bg-[#b89246]" : "w-1.5 bg-white/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Accent Curve */}
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-[82%] border-r-2 border-dashed border-[#b89246]/40 rounded-r-full pointer-events-none" />
          </div>

          {/* Right Column: Feature Badges */}
          <div className="col-span-6 pl-4 xl:pl-8 space-y-6">
            {REASONS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                onMouseEnter={() => setActiveHover(idx)}
                onMouseLeave={() => setActiveHover(null)}
                className={`relative flex items-start gap-5 p-6 rounded-3xl transition-all duration-300 border ${
                  activeHover === idx
                    ? "bg-white border-[#b89246] shadow-[0_15px_35px_rgba(184,146,70,0.12)] translate-x-1"
                    : "bg-white/80 border-[#ecdda9] shadow-sm hover:border-[#b89246]/50"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 ${
                    item.badgeColor
                  } ${activeHover === idx ? "scale-110" : ""}`}
                >
                  <item.icon />
                </div>

                <div className="space-y-1.5 flex-1">
                  <h3 className="text-lg xl:text-xl font-serif font-bold text-[#0c0d0e]">
                    {item.title}
                  </h3>
                  <p className="text-xs xl:text-sm text-neutral-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="pt-2 pl-2">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#865f27] hover:text-[#a47b30] uppercase tracking-wider group cursor-pointer"
              >
                <span>Discuss Your Property Requirements</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>


        {/* =========================================================================
            MOBILE VIEW: CENTERED HEADER & AUTOMATIC SLIDESHOW (< lg)
           ========================================================================= */}
        <div className="block lg:hidden space-y-6">
          
          {/* Centered Mobile Top Header Block */}
          <div className="flex flex-col items-center text-center space-y-2 mb-4">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider">
              REALTYFM
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0c0d0e] uppercase tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-xs text-neutral-600 max-w-sm font-sans leading-relaxed">
              Transparent guidance, direct developer pricing, and verified documents.
            </p>
          </div>

          {/* Cinematic Slideshow Box for Mobile */}
          <div className="relative w-full h-64 rounded-3xl overflow-hidden border border-[#ecdda9] shadow-md bg-[#0c0d0e]">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={SLIDESHOW_IMAGES[currentSlide].src}
                  alt={SLIDESHOW_IMAGES[currentSlide].alt}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Overlay Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10 pointer-events-none" />

            {/* Slide Position Counter */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5eed6]">
                {SLIDESHOW_IMAGES[currentSlide].alt}
              </span>
              <div className="flex items-center gap-1">
                {SLIDESHOW_IMAGES.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "w-4 bg-[#b89246]" : "w-1 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Feature Timeline List */}
          <div className="space-y-3.5 pt-2">
            {REASONS.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#ecdda9] shadow-sm"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-md ${item.badgeColor}`}
                >
                  <item.icon />
                </div>

                <div className="space-y-1 flex-1">
                  <h3 className="text-base font-serif font-bold text-[#0c0d0e]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="pt-2 text-center">
            <button
              onClick={scrollToContact}
              className="w-full py-3.5 px-5 rounded-xl bg-[#b89246] active:bg-[#a47b30] text-white font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}