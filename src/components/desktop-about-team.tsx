"use client";

import React from "react";

export const DesktopAboutTeam = () => {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-10 py-20 bg-[#fffff0]">
      {/* Header */}
      <div className="w-full flex flex-col items-start">
        <p className="font-medium text-[24px] lg:text-[21px] text-black uppercase tracking-tight">
          <span className="text-[#ff5100]">[</span>
          <span className="mx-3 tracking-[-0.48px]">Team</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        <div className="w-full h-[2px] bg-black/10 mt-[28px] mb-[28px]" />

        <div className="flex flex-col gap-[30px] w-full mb-[56px]">
          <h2 className="text-[60px] lg:text-[91px] font-semibold leading-[1] text-black tracking-tight">
            MEET THE CREW
          </h2>
          <p className="text-[20px] lg:text-[21px] font-normal leading-snug text-black/65 max-w-[800px]">
            Working directly with people fuels my creativity and pushes me to achieve remarkable experiences for the end user. Partners.
          </p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-col lg:flex-row gap-[24px] w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-[24px] w-full lg:w-1/3">
          {/* Card 1 */}
          <div className="bg-[#ff5100] rounded-[20px] h-[500px] lg:h-[522px] w-full relative overflow-hidden shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team member" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 hover:scale-105" 
            />
          </div>
          
          {/* Card 3 (Ready to grow) */}
          <div className="bg-[#ff5100] rounded-[20px] h-auto lg:h-[371px] w-full flex flex-col justify-center p-8 lg:p-10 text-white shrink-0">
            <h3 className="text-[40px] lg:text-[38px] font-medium leading-tight mb-5">READY TO GROW?</h3>
            <p className="text-[20px] lg:text-[21px] font-normal leading-tight mb-8 opacity-90">
              Bring your vision to life with creative strategies, stunning design, and technology built for real business results.
            </p>
            <div className="w-full h-px bg-white/30 mb-6" />
            <div className="w-[41px] h-[41px] bg-white rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:scale-110 transition-transform">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff5100" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-[20px] w-full lg:w-2/3">
          {/* Card 2 */}
          <div className="bg-[#fdaeae] rounded-[20px] h-[300px] lg:h-[323px] w-full shrink-0 transition-transform hover:scale-[1.01] duration-300" />
          
          {/* Cards 4 & 5 */}
          <div className="flex flex-col sm:flex-row gap-[26px] w-full lg:h-[575px]">
            {/* Card 4 */}
            <div className="bg-[#fdaeae] rounded-[20px] w-full sm:w-1/2 h-[300px] lg:h-full shrink-0 transition-transform hover:scale-[1.02] duration-300" />
            {/* Card 5 */}
            <div className="bg-[#fdaeae] rounded-[20px] w-full sm:w-1/2 h-[300px] lg:h-full shrink-0 transition-transform hover:scale-[1.02] duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};
