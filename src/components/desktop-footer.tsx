"use client";

import React from "react";
import Link from "next/link";

export const DesktopFooter = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-[#fffff0] to-[#ff5100] pt-32 pb-16 px-8 lg:px-[90px] relative z-10 overflow-hidden flex flex-col">
      
      {/* Top Row: Logo & Contact */}
      <div className="flex w-full justify-between items-start mb-32">
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
            href="mailto:southern@email.com" 
            className="text-[32px] lg:text-[44px] text-black font-normal hover:text-white transition-colors duration-300"
          >
            southern@email.com
          </a>
        </div>
      </div>

      {/* Middle Row: Newsletter & Links */}
      <div className="flex w-full justify-between items-start mb-40">
        
        {/* Left: Newsletter */}
        <div className="flex flex-col max-w-[500px]">
          <p className="text-[18px] lg:text-[24px] text-black/65 mb-2">Newsletter</p>
          <h3 className="text-[40px] lg:text-[52px] font-semibold text-black leading-none mb-10 tracking-tight">
            STAY IN THE LOOP
          </h3>
          
          <div className="flex items-end gap-6 w-full max-w-[450px]">
            {/* Input Field with Bottom Border */}
            <div className="flex-1 border-b border-black/30 pb-2 flex flex-col">
              <input 
                type="email" 
                placeholder="contact@gmail.com" 
                className="w-full bg-transparent text-[16px] lg:text-[20px] text-black placeholder:text-black/40 outline-none"
              />
            </div>
            
            {/* Join Button */}
            <button className="h-[50px] lg:h-[60px] px-8 bg-white/90 rounded-full text-black font-medium text-[20px] lg:text-[24px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:bg-white transition-all hover:scale-105 active:scale-95 whitespace-nowrap border border-white/50 backdrop-blur-md">
              Join
            </button>
          </div>
        </div>

        {/* Right: Navigation & Social Links */}
        <div className="flex gap-16 lg:gap-32 text-right">
          
          {/* Navigation */}
          <div className="flex flex-col items-end">
            <p className="text-[18px] lg:text-[24px] text-black/65 mb-6">Navigation</p>
            <nav className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'About', href: '/about' },
                { name: 'Projects', href: '/contact' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[28px] lg:text-[36px] text-black font-normal hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
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
