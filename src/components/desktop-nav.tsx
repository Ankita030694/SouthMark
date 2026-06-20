"use client";

import React from "react";
import Link from "next/link";

const ArrowRightIcon = () => (
// ... existing ArrowRightIcon ...
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DesktopNav = () => {
  return (
    <div className="w-full px-6 md:px-10 py-4 flex flex-col gap-3 max-w-[1280px] mx-auto">
      {/* Top Bar */}
      <div className="flex justify-end w-full px-2">
        <p className="text-[16px] md:text-[20px] text-black font-medium tracking-tight">
          Say Hello- <span className="font-semibold">XXXXX XXXXX</span>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full h-[76px] bg-[#ff5100] rounded-full flex items-center justify-between px-6 relative overflow-hidden shadow-sm">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <span className="text-white text-[36px] font-medium tracking-tight font-sans mt-1 cursor-pointer">
              Southern
            </span>
          </Link>
        </div>

        {/* Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[32px]">
          <Link href="/" className="text-white text-[20px] hover:opacity-80 transition-opacity whitespace-nowrap">Home</Link>
          <a href="#" className="text-white/65 text-[20px] hover:text-white transition-colors whitespace-nowrap">About Us</a>
          <a href="#" className="text-white/65 text-[20px] hover:text-white transition-colors whitespace-nowrap">Services</a>
          <a href="#" className="text-white/65 text-[20px] hover:text-white transition-colors whitespace-nowrap">Case Studies</a>
          <Link href="/contact" className="text-white/65 text-[20px] hover:text-white transition-colors whitespace-nowrap">Contact</Link>
        </div>

        {/* CTA Button */}
        <Link href="/contact" className="shrink-0">
          <button className="h-[54px] bg-white rounded-full flex items-center pl-5 pr-[4px] gap-3 group hover:scale-[1.02] transition-transform">
            <span className="text-black text-[22px] font-medium tracking-tight whitespace-nowrap pt-0.5">
              Let's impress you
            </span>
            <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center relative overflow-hidden group-hover:rotate-45 transition-transform duration-300 shadow-inner">
               <div className="absolute inset-0 bg-gradient-to-r from-[#ffa479] to-[#ff5100]" />
               <div className="relative z-10 text-white">
                 <ArrowRightIcon />
               </div>
            </div>
          </button>
        </Link>
      </nav>
    </div>
  );
};
