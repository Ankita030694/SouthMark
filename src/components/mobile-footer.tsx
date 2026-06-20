"use client";

import React from "react";

export const MobileFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] to-[#ff5100] px-5 pt-16 pb-12 flex flex-col relative overflow-hidden">
      
      {/* Brand & Intro */}
      <div className="flex flex-col gap-3 mb-24">
        <h2 className="text-[56px] leading-[0.95] font-bold text-black flex flex-col tracking-tight">
          <span className="text-[#ff5100]">SOUTHERN</span>
          <span>MARKETING</span>
        </h2>
        <p className="text-[18px] leading-[1.4] text-black/75 mt-3 pr-4 font-sans">
          Building brands, websites, and growth strategies that help ambitious businesses stand out, scale faster, and stay ahead in a digital-first world.
        </p>
      </div>

      {/* Email Callout */}
      <div className="flex flex-col items-end text-right mb-24 pr-2">
        <p className="text-[16px] font-medium text-black/65 mb-1 font-sans">
          Let's Build Something Great
        </p>
        <a href="mailto:southern@email.com" className="text-[34px] text-black leading-none font-sans hover:text-white transition-colors duration-300">
          southern@email.com
        </a>
      </div>

      {/* Navigation */}
      <div className="flex flex-col mb-16 pl-1">
        <p className="text-[16px] text-black/65 mb-4 font-sans">Navigation</p>
        <nav className="flex flex-col gap-3">
          {["Home", "Services", "About", "Projects", "Contact"].map((item) => (
            <a key={item} href="#" className="text-[36px] text-black leading-none font-sans hover:translate-x-2 transition-transform duration-300 w-fit">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Social */}
      <div className="flex flex-col mb-24 pl-1">
        <p className="text-[16px] text-black/65 mb-4 font-sans">Social</p>
        <nav className="flex flex-col gap-3">
          {["Instagram", "LinkedIn", "X"].map((item) => (
            <a key={item} href="#" className="text-[36px] text-black leading-none font-sans hover:translate-x-2 transition-transform duration-300 w-fit">
              {item}
            </a>
          ))}
        </nav>
      </div>

      {/* Newsletter */}
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[16px] text-black/65 mb-2 font-sans">Newsletter</p>
        <h3 className="text-[35px] font-semibold text-black mb-12 tracking-tight">
          STAY IN THE LOOP
        </h3>
        
        {/* Input & Button */}
        <div className="w-full flex items-end justify-between relative px-2">
          <div className="flex-1 border-b-[1.5px] border-[#b03000]/60 mr-6 pb-2 relative flex flex-col justify-end">
            <input 
              type="email" 
              placeholder="contact@gmail.com" 
              className="w-full bg-transparent outline-none text-black placeholder:text-black/70 text-[16px] font-sans"
            />
          </div>
          <button 
            className="w-[120px] h-[52px] rounded-full bg-white text-black text-[22px] font-medium flex items-center justify-center shrink-0 transition-transform active:scale-95"
            style={{
              boxShadow: "0 8px 20px rgba(0,0,0,0.25), inset 0 -4px 6px rgba(0,0,0,0.08), inset 0 4px 6px rgba(255,255,255,1)"
            }}
          >
            Join
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="flex items-center gap-6 mt-12 w-full pl-2">
        <span className="text-[25px] font-semibold text-black whitespace-nowrap">Explore More</span>
        <div className="flex-1 h-[1px] bg-[#b03000]/60 mt-1"></div>
      </div>
    </footer>
  );
};
