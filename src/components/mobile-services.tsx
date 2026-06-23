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
  const services = [
    {
      title: "Custom Code",
      description: "Custom websites and mobile applications built for speed, scalability, and seamless experiences that support business growth.",
      icon: <CodeIcon />
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and user-focused designs that enhance engagement, improve usability, and create memorable digital experiences.",
      icon: <DesignIcon />
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies designed to increase visibility, attract customers, and generate measurable business results.",
      icon: <MegaphoneIcon />
    },
    {
      title: "SEO Optimization",
      description: "Strategic SEO solutions that improve search rankings, drive organic traffic, and help businesses grow sustainably online.",
      icon: <ChartIcon />
    }
  ];

  return (
    <div className="w-full relative bg-[#fffff0] pt-16 pb-16 overflow-hidden">
      <div className="px-5 relative z-10">
        {/* New Compact Services Header (Inspired by Services Page) */}
        <div className="flex flex-col items-center mb-12 gap-6 w-full z-10 relative mt-4">
          <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative" />
          
          <h2 className="text-[40px] leading-[1.1] font-semibold text-black text-center w-full px-4 mt-10">
            SERVICES & EXPERTISE
          </h2>
        </div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 gap-5 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white rounded-[24px] p-6 sm:p-8 border border-black/5 shadow-sm relative overflow-hidden active:scale-[0.98] transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5100]/[0.02] to-transparent pointer-events-none" />

              <div className="w-[60px] h-[60px] shrink-0 bg-[#ff5100] rounded-[18px] flex items-center justify-center mb-6 shadow-[0_4px_15px_rgba(255,81,0,0.25)] relative z-10">
                <div className="scale-75">
                  {service.icon}
                </div>
              </div>
              
              <div className="flex flex-col relative z-10">
                <h3 className="text-[24px] sm:text-[26px] font-semibold text-black leading-tight mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-black/65 leading-[1.5] font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
