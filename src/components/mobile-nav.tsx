"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full relative z-50">
      {/* Base Navbar (Always visible at the bottom layer) */}
      <div className="h-[76px] w-full flex items-center justify-between px-4 absolute top-0 left-0 z-40 bg-[rgba(255,255,240,0.1)]">
        {/* Logo Placeholder */}
        <div className="h-10 w-10 rounded-full border-2 border-[#ff5100] bg-white/10 flex items-center justify-center">
          <span className="text-[#ff5100] text-xs font-bold">SM</span>
        </div>
        
        <button 
          type="button"
          className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <p className="font-bold text-[17px] tracking-widest text-[#ff5100] pointer-events-none">
            MENU
          </p>
          {/* Burger Icon */}
          <div className="flex flex-col gap-[5px] w-9 pointer-events-none">
            <div className="h-[2px] w-full bg-[#ff5100]" />
            <div className="h-[2px] w-3/4 self-end bg-[#ff5100] transition-all group-hover:w-full" />
          </div>
        </button>
      </div>

      {/* Overlay Wrapper (Animates height from 0 to full to create the reveal effect) */}
      <div 
        className={`absolute top-0 left-0 w-full bg-[#ff5100] z-[60] overflow-hidden rounded-b-[40px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "shadow-2xl pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ height: isOpen ? '475px' : '0px' }}
      >
        {/* Inner Content - Fixed height prevents squishing during height transition */}
        <div className="w-full relative" style={{ height: '475px' }}>
          {/* White Header (perfectly overlays the base header) */}
          <div className="h-[76px] w-full flex items-center justify-between px-4 absolute top-0 left-0 z-50">
            <div className="h-10 w-10 rounded-full border-2 border-white bg-white/20 flex items-center justify-center">
              <span className="text-white text-xs font-bold">SM</span>
            </div>
            
            <button 
              type="button"
              className="flex items-center justify-center gap-4 cursor-pointer group p-3 -mr-3"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              <p className="font-bold text-[17px] tracking-widest text-white pointer-events-none">
                MENU
              </p>
              {/* White Burger Icon */}
              <div className="flex flex-col gap-[5px] w-9 pointer-events-none">
                <div className="h-[2px] w-full bg-white" />
                <div className="h-[2px] w-full bg-white transition-all" />
              </div>
            </button>
          </div>

          {/* Links Section */}
          <div className="absolute top-24 right-4 flex flex-col items-end gap-6 font-medium text-xl text-white">
            <a href="#" className="hover:opacity-80 transition-opacity">HOME</a>
            <a href="#" className="hover:opacity-80 transition-opacity">ABOUT US</a>
            <a href="#" className="hover:opacity-80 transition-opacity">PROJECTS</a>
            <a href="#" className="hover:opacity-80 transition-opacity">BLOGS</a>
            <a href="#" className="hover:opacity-80 transition-opacity">CONTACT US</a>
          </div>

          {/* Footer Info Section */}
          <div className="absolute bottom-8 left-4 flex flex-col gap-4 items-start">
            <div className="flex flex-col font-medium gap-3 items-start text-white">
              <p className="leading-tight text-sm">Sydney, Australia</p>
              <p className="leading-tight text-2xl">+62 - XXXXX XXXXX</p>
            </div>
            <div className="flex gap-2.5 items-center">
              <a href="#" className="flex items-center justify-center rounded-full size-10 bg-white text-[#ff5100] hover:bg-white/90 transition-colors">
                <FontAwesomeIcon icon={faInstagram} className="text-lg" />
              </a>
              <a href="#" className="flex items-center justify-center rounded-full size-10 bg-white text-[#ff5100] hover:bg-white/90 transition-colors">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer to push page content down since the header is absolute */}
      <div className="h-[76px] w-full pointer-events-none"></div>
    </div>
  );
}
