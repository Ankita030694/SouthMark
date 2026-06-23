"use client";

import React from "react";

// Fallback SVG Icons to match the requested services
const CodeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const DesignIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const MarketingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="11 19 2 12 11 5 11 19"></polygon>
    <path d="M22 12h-4"></path>
    <path d="M11 5a10 10 0 0 1 0 14"></path>
  </svg>
);

const SeoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h4l3-9 5 18 3-9h5"></path>
  </svg>
);

export const DesktopServices = () => {
  const services = [
    {
      title: "CUSTOM CODE",
      description: "Custom websites and mobile applications built for speed, scalability, and seamless experiences that support business growth.",
      icon: <CodeIcon />
    },
    {
      title: "UI/UX DESIGN",
      description: "Intuitive and user-focused designs that enhance engagement, improve usability, and create memorable digital experiences.",
      icon: <DesignIcon />
    },
    {
      title: "DIGITAL MARKETING",
      description: "Data-driven marketing strategies designed to increase visibility, attract customers, and generate measurable business results.",
      icon: <MarketingIcon />
    },
    {
      title: "SEO OPTIMIZATION",
      description: "Strategic SEO solutions that improve search rankings, drive organic traffic, and help businesses grow sustainably online.",
      icon: <SeoIcon />
    }
  ];

  return (
    <section className="w-full bg-[#fffff0] pb-20 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* New Compact Services Header (Inspired by Services Page) */}
      <div className="flex flex-col w-full mb-16 lg:mb-24 items-center relative pt-16 gap-8 md:gap-10 z-10">
        <div className="w-full h-px bg-black/10 relative" />
        
        <h2 className="text-[50px] md:text-[80px] lg:text-[130px] font-semibold text-black text-center w-full leading-[1.1] lg:leading-[130px] tracking-tight px-4 mt-12 lg:mt-16">
          SERVICES & EXPERTISE
        </h2>
      </div>

      {/* Old Top Section: Graphic & Title (Commented out as requested) */}
      {/*
      <div className="flex w-full mb-24 items-start relative pt-16">
        
        <div className="absolute top-0 left-0 w-[45%] lg:w-[40%] flex h-[350px] gap-4 lg:gap-6">
          <div className="w-[48px] lg:w-[64px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[48px] lg:w-[64px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[48px] lg:w-[64px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[48px] lg:w-[64px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
        </div>

        <div className="w-full ml-[50%] lg:ml-[45%] pl-8 xl:pl-16 flex flex-col items-start max-w-[700px] z-10">
          <p className="font-medium text-[19px] lg:text-[24px] mb-5 tracking-wide">
            <span className="text-[#ff5100]">[</span>
            <span className="text-black mx-2">SERVICES</span>
            <span className="text-[#ff5100]">]</span>
          </p>
          
          <h2 className="text-[56px] lg:text-[80px] xl:text-[104px] font-semibold text-black leading-[0.9] tracking-tight mb-8">
            WHAT WE<br />DO BEST
          </h2>
          
          <p className="text-[16px] lg:text-[21px] xl:text-[24px] text-black/65 font-normal leading-[1.3] max-w-[560px]">
            From web development and branding to SEO and marketing, we create digital solutions designed to drive measurable growth.
          </p>
        </div>
      </div>
      */}

      {/* Bottom Section: Services Bento Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10 max-w-[1280px] mx-auto">
        {services.map((service, index) => {
          const isLong = index === 0 || index === 3;
          
          return (
            <div 
              key={index} 
              className={`flex ${isLong ? 'lg:col-span-2 flex-col md:flex-row md:items-center lg:gap-12' : 'lg:col-span-1 flex-col'} bg-white rounded-[32px] p-8 lg:p-12 border border-black/5 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative`}
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5100]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className={`w-[80px] h-[80px] shrink-0 bg-[#ff5100] rounded-[24px] flex items-center justify-center shadow-[0_4px_20px_rgba(255,81,0,0.3)] group-hover:scale-105 group-hover:-rotate-3 transition-transform duration-500 relative z-10 ${isLong ? 'mb-8 md:mb-0 md:mr-4' : 'mb-8'}`}>
                <div className="scale-90">
                  {service.icon}
                </div>
              </div>
              
              <div className="flex flex-col relative z-10 flex-1">
                <h3 className={`font-semibold text-black leading-tight tracking-tight group-hover:text-[#ff5100] transition-colors duration-300 ${isLong ? 'text-[32px] lg:text-[40px] mb-4' : 'text-[28px] lg:text-[32px] mb-4'}`}>
                  {service.title}
                </h3>
                <p className={`text-black/65 leading-[1.6] font-normal ${isLong ? 'text-[16px] lg:text-[18px] max-w-[600px]' : 'text-[15px] lg:text-[16px]'}`}>
                  {service.description}
                </p>
              </div>
              
              {/* Decorative corner icon for long bentos */}
              {isLong && (
                <div className="hidden lg:flex absolute top-8 right-8 w-12 h-12 rounded-full border border-black/5 items-center justify-center group-hover:bg-[#ff5100] group-hover:border-[#ff5100] transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-black/30 group-hover:stroke-white transition-colors duration-300">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};
