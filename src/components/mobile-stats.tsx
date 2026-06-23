"use client";

import React from "react";
import { CountUp } from "@/components/count-up";

export function MobileStats() {
  return (
    <section className="w-full px-4 pb-16 bg-[#fffff0] flex justify-center">
      <div className="w-full max-w-[440px] rounded-3xl backdrop-blur-[2px] bg-white/20 shadow-[3px_4px_30px_rgba(0,0,0,0.05)] border border-white/30 p-6 flex flex-col relative z-10">
        
        {/* Top Row */}
        <div className="flex justify-between items-start mb-10">
          <h2 className="text-[24px] leading-[1.2] font-semibold text-[#30261C] font-sans tracking-tight">
            Digital Success,<br/>
            Delivered
          </h2>
          <div className="flex flex-col items-end text-right mt-1">
            <span className="text-[22px] font-semibold text-[#30261C] font-sans"><CountUp to={400} suffix="+" /></span>
            <span className="text-[14px] text-[#30261C]/75 font-sans mt-0.5">Projects Delivered</span>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-end text-right w-1/3 pr-2">
            <span className="text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={95} suffix="%" /></span>
            <span className="text-[12px] leading-tight text-[#30261C]/75 font-sans mt-0.5">Client Retention</span>
          </div>
          
          <div className="flex flex-col items-end text-right w-1/3 px-2">
            <span className="text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={20} suffix="+" /></span>
            <span className="text-[12px] leading-tight text-[#30261C]/75 font-sans mt-0.5">Specialists</span>
          </div>
          
          <div className="flex flex-col items-end text-right w-1/3 pl-2">
            <span className="text-[20px] font-semibold text-[#30261C] font-sans"><CountUp to={6} suffix="+" /></span>
            <span className="text-[12px] leading-tight text-[#30261C]/75 font-sans mt-0.5">Years Experience</span>
          </div>
        </div>

      </div>
    </section>
  );
}
