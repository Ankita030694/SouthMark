"use client";

import React from "react";
import Link from "next/link";

export const DesktopFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] to-[#ff5100] pt-10 pb-6 px-8 lg:px-[90px] relative z-10 overflow-hidden flex flex-col">
      
      {/* Top Row: Logo & Contact */}
      <div className="flex w-full justify-between items-start mb-10">
        {/* Left: Logo & Description */}
        <div className="flex flex-col max-w-[800px]">
          <h2 className="text-[70px] lg:text-[85px] xl:text-[104px] font-bold leading-[0.9] tracking-tight mb-8">
            <span className="text-[#ff5100]">SOUTHERN</span>
            <br />
            <span className="text-black">MARKETING</span>
          </h2>
          <p className="text-[18px] lg:text-[21px] xl:text-[24px] text-black/65 leading-[1.4] max-w-[650px]">
            Building brands, websites, and growth strategies that help ambitious businesses stand out, scale faster, and stay ahead in a digital-first world.
          </p>
        </div>

        {/* Right: Direct Contact */}
        <div className="flex flex-col items-end text-right pt-4">
          <p className="text-[16px] lg:text-[20px] text-black/65 font-medium mb-2">
            Let's Build Something Great
          </p>
          <a 
            href="mailto:info@southernedgemarketing.com" 
            className="text-[16px] lg:text-[22px] text-black font-normal hover:text-white transition-colors duration-300"
          >
            info@southernedgemarketing.com
          </a>
        </div>
      </div>

      {/* Middle Row: Links & Social */}
      <div className="flex w-full justify-end items-start mb-12">
        
        {/* Right: Lists */}
        <div className="flex gap-16 lg:gap-32 text-right">

          {/* Legal */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Legal</p>
            <nav className="flex flex-col gap-4">
              <Link 
                href="/terms" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Terms & Conditions
              </Link>
              <Link 
                href="/privacy" 
                className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Social</p>
            <nav className="flex flex-col gap-4">
              {['Instagram', 'LinkedIn', 'X'].map((link) => (
                <a 
                  key={link} 
                  href="/contact" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
          
        </div>
      </div>

      {/* Bottom Row: Explore More */}
      <div className="flex items-center w-full gap-8">
        <p className="text-[24px] lg:text-[28px] text-black font-semibold shrink-0">
          Explore More
        </p>
        <div className="h-px bg-black/20 w-full" />
      </div>

    </footer>
  );
};
