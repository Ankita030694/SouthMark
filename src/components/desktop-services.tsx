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
      
      {/* Top Section: Graphic & Title */}
      <div className="flex w-full mb-24 items-start relative pt-16">
        
        {/* Left Side: Abstract Stripe Graphic (Absolute to touch the top edge of the section) */}
        <div className="absolute top-0 left-0 w-[30%] lg:w-[25%] flex h-[350px] gap-3">
          <div className="w-[32px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[32px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[32px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
          <div className="w-[32px] h-full bg-gradient-to-b from-[#ff5100] to-[#fffff0]" />
        </div>

        {/* Right Side: Title Area (Offset to make room for absolute stripes) */}
        <div className="w-full ml-[30%] lg:ml-[25%] pl-8 xl:pl-16 flex flex-col items-start max-w-[700px] z-10">
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

      {/* Bottom Section: Services List */}
      <div className="w-full flex flex-col relative z-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col">
            {/* Divider Line (not on the first item) */}
            {index !== 0 && (
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ff5100]/20 to-transparent my-8 lg:my-10" />
            )}
            
            <div className="flex flex-col md:flex-row items-start md:items-center w-full gap-6 lg:gap-12">
              {/* Icon */}
              <div className="w-[72px] h-[72px] lg:w-[90px] lg:h-[90px] shrink-0 bg-[#ff5100] rounded-[24px] lg:rounded-[32px] flex items-center justify-center shadow-[0_6px_20px_rgba(255,81,0,0.4)]">
                <div className="scale-75 lg:scale-90">
                  {service.icon}
                </div>
              </div>
              
              {/* Text */}
              <div className="flex flex-col max-w-[1000px]">
                <h3 className="text-[32px] lg:text-[56px] xl:text-[76px] font-semibold text-black leading-none mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[16px] lg:text-[24px] xl:text-[36px] text-black/65 leading-[1.2] font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
