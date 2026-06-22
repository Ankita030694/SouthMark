"use client";

import React from "react";

export const MobileServicesPage = () => {
  const services = [
    {
      title: "Custom Code",
      description: "We engineer custom websites, robust web platforms, and mobile applications built for uncompromising speed, top-tier security, and true scalability. Our development approach guarantees seamless, highly performant user experiences that adapt effortlessly to your evolving business needs.",
      timeline: "4 - 8 Weeks",
      deliverables: "Websites • Mobile Apps",
      image: "/services-placement.png"
    },
    {
      title: "UI/UX Design",
      description: "Our user-focused interfaces are meticulously designed to ensure absolute clarity, frictionless navigation, and significantly improved conversion rates. Every visual decision is carefully crafted to remove friction, enhance general usability, and create an intuitive product experience.",
      timeline: "5 - 7 Days",
      deliverables: "Wireframes • High-fidelity UI",
      image: "/services-placement.png"
    },
    {
      title: "Digital Marketing",
      description: "We implement comprehensive, data-driven marketing strategies uniquely tailored to amplify your brand's voice and increase digital visibility across all relevant channels. Our goal is to convert passing interest into long-term loyalty, generating reliable and measurable business results.",
      timeline: "Ongoing",
      deliverables: "Campaigns • Ad Creatives",
      image: "/services-placement.png"
    },
    {
      title: "SEO Optimization",
      description: "We deploy strategic, white-hat SEO solutions designed to dramatically improve your search engine rankings and secure prime positions for high-intent keywords. Through deep technical audits and intelligent on-page optimization, we drive consistent organic traffic straight to your website.",
      timeline: "Ongoing",
      deliverables: "Audits • Keyword Strategy",
      image: "/services-placement.png"
    }
  ];

  return (
    <div className="w-full relative bg-[#fffff0] pt-16 pb-16 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-16 gap-6 w-full z-10 relative mt-4">
        <p className="text-[18px] font-medium tracking-wide">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-1">WHAT WE DO</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        <div className="w-[150vw] -ml-[25vw] h-px bg-black/10 relative" />
        
        <h2 className="text-[40px] leading-[1.1] font-semibold text-black text-center w-full px-4">
          SERVICES & EXPERTISE
        </h2>
      </div>

      <div className="px-5 relative z-10">
        {/* Services List */}
        <div className="flex flex-col gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col w-full relative pt-2">
              
              {/* Title */}
              <h3 className="text-[28px] font-medium text-[#0f0f0f] mb-4">
                {service.title}
              </h3>

              {/* Image */}
              <div className="w-full aspect-[16/10] rounded-[16px] overflow-hidden bg-[#e4e4e4] mb-6 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Line under image */}
              <div className="w-full h-[2px] bg-black/5 mb-6" />

              {/* Details */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between items-start w-full">
                  <span className="text-[18px] text-[#0f0f0f]">Timeline</span>
                  <span className="text-[18px] text-[#828282] font-medium text-right">{service.timeline}</span>
                </div>

                <div className="flex justify-between items-start w-full">
                  <span className="text-[18px] text-[#0f0f0f]">Deliverables</span>
                  <span className="text-[18px] text-[#828282] font-medium text-right max-w-[60%]">
                    {service.deliverables}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-[18px] leading-[1.4] text-[#828282] mb-8 text-justify hyphens-auto tracking-tight break-words" lang="en">
                {service.description}
              </p>

              {/* Action row */}
              <div className="flex flex-row justify-between items-center w-full mb-8">
                <button className="bg-[#ff5100] text-white px-6 py-3.5 rounded-full font-semibold text-[16px] shadow-[inset_0px_-3px_13.8px_0px_rgba(232,232,232,0.76),inset_0px_4px_13.8px_0px_rgba(232,232,232,0.76)] hover:opacity-90 transition-opacity whitespace-nowrap">
                  Start {service.title} Project
                </button>
                <span className="text-[16px] text-black/55 font-normal whitespace-nowrap ml-4">
                  T&C Apply
                </span>
              </div>

              {/* Bottom Line */}
              <div className="w-full h-[2px] bg-black/5 mt-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
