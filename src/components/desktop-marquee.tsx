"use client";

import React from "react";

const StarIcon = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
    <path d="M15 0L17.5 10L27.5 12.5L17.5 15L15 25L12.5 15L2.5 12.5L12.5 10L15 0Z" fill="white"/>
  </svg>
);

export const DesktopMarquee = () => {
  const blackStripItems = [
    "Trusted by Global Startups",
    "Conversion-First Approach",
    "Built for Scale",
    "Fast Turnaround",
    "Results That Matter",
    "Trusted by Global Startups", // duplicate for infinite scroll effect if needed
    "Conversion-First Approach",
    "Built for Scale",
    "Fast Turnaround",
    "Results That Matter",
  ];

  const orangeStripItems = [
    "Web Development",
    "UI/UX Design",
    "Conversion-Focused Design",
    "Digital Marketing",
    "Branding",
    "High-Performance Websites",
    "Web Development", // duplicate for infinite scroll effect if needed
    "UI/UX Design",
    "Conversion-Focused Design",
    "Digital Marketing",
    "Branding",
    "High-Performance Websites",
  ];

  return (
    <section className="w-full bg-[#fffff0] h-[500px] relative flex items-center justify-center overflow-hidden z-10 my-20">
      
      {/* Background Dark Strip (-6.5deg) */}
      <div 
        className="absolute w-[120%] bg-[#2a2a2a] shadow-[0px_10px_20px_rgba(0,0,0,0.3)] flex py-5 z-0"
        style={{ transform: "rotate(-6.5deg)" }}
      >
        <div className="flex items-center gap-[40px] whitespace-nowrap overflow-hidden relative">
          {/* We use a simple flex row for the marquee. In a real app, you might animate this. */}
          <div className="flex items-center gap-[40px] px-4">
            {blackStripItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-[32px] lg:text-[38px] font-bold tracking-wide">
                  {item}
                </span>
                <StarIcon />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Orange Strip (4.6deg) */}
      <div 
        className="absolute w-[120%] bg-[#ff5100] shadow-[0px_10px_30px_rgba(0,0,0,0.4)] flex py-5 z-10"
        style={{ transform: "rotate(4.6deg)" }}
      >
        <div className="flex items-center gap-[40px] whitespace-nowrap overflow-hidden relative">
          <div className="flex items-center gap-[40px] px-4">
            {orangeStripItems.map((item, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-[32px] lg:text-[38px] font-bold tracking-wide">
                  {item}
                </span>
                <StarIcon />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
