// src/components/overview/Overview.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

interface CounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ value, duration = 1600, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-sans font-black tracking-tight tabular-nums text-[#865f27]">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const STATS = [
  {
    target: 2000,
    prefix: "",
    suffix: "+",
    label: "Happy Customers",
    detail: "Families and investors guided into their ideal homes and commercial properties.",
  },
  {
    target: 25,
    prefix: "",
    suffix: "+",
    label: "Grade-A Builders",
    detail: "Direct developer partnerships with Gaurs, ACE, Sobha, Godrej, and Max Estates.",
  },
  {
    target: 100,
    prefix: "",
    suffix: "%",
    label: "RERA Clear Titles",
    detail: "Every listed project is verified for approved plans, clear title, and regulatory compliance.",
  },
  {
    target: 10,
    prefix: "",
    suffix: "+ Years",
    label: "Advisory Experience",
    detail: "A decade of deep market insights and transparent transactions across Delhi-NCR.",
  },
];

export default function Overview() {
  const scrollToPortfolio = () => {
    const el = document.getElementById("portfolio");
    if (el) {
      const navOffset = 80;
      const position = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: position, behavior: "smooth" });
    } else {
      window.location.hash = "#portfolio";
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const navOffset = 80;
      const position = el.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: position, behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  return (
    <section id="about" className="relative z-10 w-full py-20 sm:py-28 bg-[#fbf7ee] text-[#0c0d0e] overflow-hidden">
      
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0c0d0e 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block: Headline on Left, Brand Logo on Right */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#ecdda9]">
          
          {/* Left: Heading & Proposition */}
          <div className="max-w-2xl space-y-3 flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#f5eed6] border border-[#d4ab47]/40 text-[#865f27] text-xs font-bold uppercase tracking-wider">
              Company Overview
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif tracking-tight text-[#0c0d0e] leading-tight">
              More Than Real Estate Agents. <br />
              <span className="text-[#a47b30] italic font-normal">
                Your Strategic Property Partner.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-700 font-sans font-normal leading-relaxed pt-2">
              At {COMPANY_DATA.brandName}, we help homebuyers and investors purchase premium real estate with clarity, direct developer access, and verified documentation. We manage the research, negotiation, and paperwork so you make confident decisions.
            </p>
          </div>

          {/* Right: Brand Emblem Card with Next.js sizes prop */}
            <div className="w-full lg:w-auto flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#ecdda9] shadow-[0_10px_35px_rgba(0,0,0,0.04)]">
              <div className="relative w-56 sm:w-64 h-16 sm:h-20 flex items-center justify-center">
                <Image
                  src="/logodark.png"
                  alt={COMPANY_DATA.brandName}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, 256px"
                  className="object-contain object-center"
                />
              </div>
              <p className="text-xs font-bold text-[#865f27] tracking-widest uppercase mt-3 text-center">
                Trusted Real Estate Advisory
              </p>
            </div>

        </div>

        {/* 2. Bold, Modern Number Tickers */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-[#ecdda9] shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-[#b89246] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-sans font-black tracking-tight leading-none">
                  <Counter
                    value={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0c0d0e]">
                  {stat.label}
                </h3>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-normal">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* 3. Action Buttons */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPortfolio}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#b89246] hover:bg-[#a47b30] text-white font-bold text-sm uppercase tracking-wider shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore Curated Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white border border-[#d4ab47] hover:bg-[#f5eed6] text-[#865f27] font-bold text-sm uppercase tracking-wider shadow-sm active:scale-95 transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Schedule Consultation</span>
          </button>
        </div>

      </div>
    </section>
  );
}