"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ArrowRightIcon = () => (
// ... existing ArrowRightIcon ...
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DesktopNav = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 w-full px-6 md:px-10 py-4 flex flex-col gap-3 max-w-[1280px] mx-auto">
      {/* Top Bar */}
      <div className="flex justify-end w-full px-2">
        <p className="text-[16px] md:text-[20px] text-black font-medium tracking-tight flex items-center gap-1">
          Say Hello- <a href="tel:9899238237" className="font-semibold hover:text-[#ff5100] transition-colors">9899238237</a>
        </p>
      </div>

      {/* Main Navbar */}
      <nav className="w-full h-[76px] bg-[#ff5100] rounded-full flex items-center justify-between px-6 relative overflow-hidden shadow-sm">
        {/* Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/">
            <div className="h-10 w-10 rounded-full border-2 border-white bg-white/20 flex items-center justify-center cursor-pointer">
              <span className="text-white text-xs font-bold">SM</span>
            </div>
          </Link>
        </div>

        {/* Links */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[32px]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`text-[20px] transition-all whitespace-nowrap ${
                  isActive 
                    ? "text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" 
                    : "text-white/65 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="shrink-0 h-[54px] bg-white rounded-full flex items-center pl-5 pr-[4px] gap-3 group hover:scale-[1.02] transition-transform"
        >
          <span className="text-black text-[22px] font-medium tracking-tight whitespace-nowrap pt-0.5">
            Let's impress you
          </span>
          <div className="w-[46px] h-[46px] rounded-full flex items-center justify-center relative overflow-hidden group-hover:rotate-45 transition-transform duration-300 shadow-inner">
             <div className="absolute inset-0 bg-gradient-to-r from-[#ffa479] to-[#ff5100]" />
             <div className="relative z-10 text-white">
               <ArrowRightIcon />
             </div>
          </div>
        </Link>
      </nav>
    </div>
  );
};
