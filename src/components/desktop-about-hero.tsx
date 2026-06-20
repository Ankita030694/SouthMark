"use client";

import React from "react";

export const DesktopAboutHero = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto relative flex flex-col items-center justify-center bg-[#fffff0] py-20 lg:py-32 overflow-hidden z-10">
      <div className="relative flex items-center justify-center w-[90%] max-w-[1056px] aspect-square">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/circle.png" 
            alt="About Us Circular Graphic" 
            className="w-full h-full object-contain pointer-events-none select-none animate-[spin_20s_linear_infinite]"
          />
        </div>
        
        {/* Centered Text */}
        <div className="relative z-10 flex items-center justify-center">
          <p className="font-medium text-[24px] md:text-[30px] tracking-tight text-black uppercase">
            <span className="text-[#ff5100]">[</span>
            <span className="mx-2 md:mx-3 tracking-[-0.48px]">About Us</span>
            <span className="text-[#ff5100]">]</span>
          </p>
        </div>
      </div>
    </div>
  );
};
