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
    <section className="w-full relative h-[900px] bg-[#f6f6f6] overflow-hidden">
      
      {/* Background Portfolio Grid (Abstracted as styled blocks like the design) */}
      <div className="absolute w-full h-full inset-0 pointer-events-none">
        {/* Row 1 */}
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[40px] left-[-150px] opacity-80" />
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[40px] left-[630px] opacity-80" />
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[40px] left-[1410px] opacity-80" />
        
        {/* Row 2 (Staggered offset) */}
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[490px] left-[-450px] opacity-80" />
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[490px] left-[330px] opacity-80" />
        <div className="absolute w-[750px] h-[420px] bg-[#ffacac] rounded-[15px] top-[490px] left-[1110px] opacity-80" />
      </div>

      {/* Center Circle Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#f9f9f9] rounded-full shadow-[0px_0px_30px_rgba(0,0,0,0.15)] border border-white/50 flex flex-col items-center justify-center z-10 p-10 text-center">
        
        {/* Text Group */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex items-baseline gap-4 justify-center">
            <span className="text-[110px] leading-[1] font-normal text-black tracking-tight">50+</span>
            <span className="text-[65px] leading-[1] font-normal text-black tracking-tight">Detailed</span>
          </div>
          <span className="text-[65px] leading-[1] font-normal text-black tracking-tight mt-2">Case Studies</span>
        </div>

        {/* Explore Projects Button */}
        <Link href="/contact">
          <button 
            className="relative w-[318px] h-[90px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] overflow-hidden shadow-[0px_6px_16px_rgba(255,81,0,0.35)] hover:shadow-[0px_8px_20px_rgba(255,81,0,0.5)] transition-shadow group cursor-pointer"
            aria-label="Explore Projects"
          >
            {/* Inner Left Pill */}
            <div className="absolute left-0 top-0 w-[225px] h-[90px] rounded-full bg-gradient-to-b from-[#ffa479] to-[#ff5100] drop-shadow-[4px_0px_6px_rgba(0,0,0,0.25)] flex items-center pl-[35px] transform group-hover:translate-x-[3px] transition-transform duration-300 z-10">
              <span className="font-medium text-[25px] text-white tracking-tight">
                Explore Projects
              </span>
            </div>
            
            {/* Right Arrow Icon */}
            <div className="absolute right-[35px] top-1/2 -translate-y-1/2 flex items-center justify-center transform group-hover:translate-x-[5px] transition-transform duration-300 z-0">
              <ArrowRightIcon />
            </div>
          </button>
        </Link>

      </div>
    </section>
  );
};
