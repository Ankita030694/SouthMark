"use client";

import React from "react";
import Link from "next/link";

const ArrowRightIcon = () => (
  <svg className="w-[21px] h-[21px] text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
  </svg>
);

export const DesktopCaseStudies = () => {
  return (
    <section className="w-full relative h-[1120px] bg-[#f6f6f6] overflow-hidden">
      
      <style>{`
        @keyframes slideRight {
          0% { transform: translateX(calc(-50% - 1.25rem)); }
          100% { transform: translateX(0); }
        }
        @keyframes slideLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1.25rem)); }
        }
      `}</style>

      {/* Background Portfolio Grid */}
      <div className="absolute w-full h-full inset-0 pointer-events-none">
        {/* Row 1 (Top Row sliding left to right) */}
        <div className="absolute top-[48px] left-[-800px] flex gap-8 w-max" style={{ animation: 'slideRight 60s linear infinite' }}>
          {[...[1, 2, 3, 4, 5, 6, 7], ...[1, 2, 3, 4, 5, 6, 7]].map((imgIdx, i) => (
            <img key={`r1-${i}`} src={`/casestudies/${imgIdx}.jpg`} alt={`Case Study ${imgIdx}`} className="w-[800px] h-[448px] object-cover rounded-[12px] opacity-80 shrink-0" />
          ))}
        </div>
        
        {/* Row 2 (Bottom Row sliding right to left) */}
        <div className="absolute top-[544px] left-[-800px] flex gap-8 w-max" style={{ animation: 'slideLeft 60s linear infinite' }}>
          {[...[8, 9, 10, 11, 12, 13, 14], ...[8, 9, 10, 11, 12, 13, 14]].map((imgIdx, i) => (
            <img key={`r2-${i}`} src={`/casestudies/${imgIdx}.jpg`} alt={`Case Study ${imgIdx}`} className="w-[800px] h-[448px] object-cover rounded-[12px] opacity-80 shrink-0" />
          ))}
        </div>
      </div>

      {/* Center Circle Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-[#f9f9f9] rounded-full shadow-[0px_0px_24px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center justify-center z-10 p-8 text-center">
        
        {/* Text Group */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-baseline gap-3 justify-center">
            <span className="text-[88px] leading-[1] font-normal text-black tracking-tight">50+</span>
            <span className="text-[52px] leading-[1] font-normal text-black tracking-tight">Detailed</span>
          </div>
          <span className="text-[52px] leading-[1] font-normal text-black tracking-tight mt-2">Case Studies</span>
        </div>

        {/* Explore Projects Button */}
        <Link href="/contact">
          <button 
            className="relative w-[254px] h-[72px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_5px_13px_rgba(255,81,0,0.35)] hover:shadow-[0px_6px_16px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
            aria-label="Explore Projects"
          >
            {/* Inner Left Pill */}
            <div className="absolute left-0 top-0 w-[180px] h-[72px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[3px_0px_5px_rgba(0,0,0,0.25)] flex items-center pl-[28px] gap-[5px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <div className="w-[6px] h-[6px] rounded-full bg-[#00ff00] shrink-0 shadow-[0_0_6px_#00ff00] animate-pulse" />
              <span className="font-medium text-[20px] text-white tracking-tight">
                Explore Projects
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[28px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[4px] transition-transform duration-300 z-0">
              <ArrowRightIcon />
            </div>
          </button>
        </Link>

      </div>
    </section>
  );
};
