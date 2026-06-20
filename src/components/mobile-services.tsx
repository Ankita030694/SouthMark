"use client";

import React from "react";

const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 8L6 12L10 16M14 8L18 12L14 16M15 5L9 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DesignIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
);

const MegaphoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.07 4.93C20.94 6.8 21.99 9.35 21.99 12C21.99 14.65 20.94 17.2 19.07 19.07M15.54 8.46C16.47 9.4 17 10.66 17 12C17 13.34 16.47 14.6 15.54 15.54" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6"/>
    <path d="M3 20h18"/>
  </svg>
);

export const MobileServices = () => {
  return (
    <div className="w-full relative bg-[#fffff0] pt-16 pb-16 overflow-hidden">
      {/* Orange Bars Graphic */}
      <div className="absolute left-0 top-0 flex gap-1 h-[240px]">
        <div className="w-[18px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]"></div>
        <div className="w-[24px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]"></div>
        <div className="w-[30px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]"></div>
        <div className="w-[36px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]"></div>
      </div>

      <div className="px-5 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-end text-right mb-16">
          <p className="text-[18px] font-medium tracking-wide mb-3">
            <span className="text-[#ff5100]">[</span>
            <span className="text-black mx-1">SERVICE</span>
            <span className="text-[#ff5100]">]</span>
          </p>
          <h2 className="text-[50px] leading-[1.05] font-semibold text-black mb-6 flex flex-col items-end">
            <span>WHAT WE</span>
            <span>DO BEST</span>
          </h2>
          <p className="text-[20px] leading-[1.4] text-black/70 max-w-[95%]">
            From web development and branding to SEO and marketing, we create digital solutions designed to drive measurable growth.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-8">
          
          {/* Custom Code */}
          <div className="flex gap-5 items-start">
            <div className="w-[64px] h-[64px] shrink-0 bg-[#ff5100] rounded-full flex items-center justify-center shadow-md">
              <CodeIcon />
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-[26px] font-semibold text-black uppercase tracking-tight leading-none">Custom Code</h3>
              <p className="text-[16px] leading-[1.4] text-black/70 font-sans mt-1">
                Custom websites and mobile applications built for speed, scalability, and seamless experiences that support business growth.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-[#ff5100]/20"></div>

          {/* UI/UX Design */}
          <div className="flex gap-5 items-start">
            <div className="w-[64px] h-[64px] shrink-0 bg-[#ff5100] rounded-full flex items-center justify-center shadow-md">
              <DesignIcon />
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-[26px] font-semibold text-black uppercase tracking-tight leading-none">UI/UX Design</h3>
              <p className="text-[16px] leading-[1.4] text-black/70 font-sans mt-1">
                Intuitive and user-focused designs that enhance engagement, improve usability, and create memorable digital experiences.
              </p>
            </div>
          </div>
          
          <div className="w-full h-px bg-[#ff5100]/20"></div>

          {/* Digital Marketing */}
          <div className="flex gap-5 items-start">
            <div className="w-[64px] h-[64px] shrink-0 bg-[#ff5100] rounded-full flex items-center justify-center shadow-md">
              <MegaphoneIcon />
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-[26px] font-semibold text-black uppercase tracking-tight leading-none">Digital Marketing</h3>
              <p className="text-[16px] leading-[1.4] text-black/70 font-sans mt-1">
                Data-driven marketing strategies designed to increase visibility, attract customers, and generate measurable business results.
              </p>
            </div>
          </div>

          <div className="w-full h-px bg-[#ff5100]/20"></div>

          {/* SEO Optimization */}
          <div className="flex gap-5 items-start">
            <div className="w-[64px] h-[64px] shrink-0 bg-[#ff5100] rounded-full flex items-center justify-center shadow-md">
              <ChartIcon />
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-[26px] font-semibold text-black uppercase tracking-tight leading-none">SEO Optimization</h3>
              <p className="text-[16px] leading-[1.4] text-black/70 font-sans mt-1">
                Strategic SEO solutions that improve search rankings, drive organic traffic, and help businesses grow sustainably online.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
