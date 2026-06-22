"use client";

import React from "react";

export const DesktopServicesPage = () => {
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
    <section className="w-full bg-[#fffff0] pb-20 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title */}
      <div className="flex flex-col w-full mb-16 lg:mb-24 items-center relative pt-16 gap-8 md:gap-10">
        <p className="font-medium text-[20px] lg:text-[30px] text-center w-full tracking-wide">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2">WHAT WE DO</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        <div className="w-full h-px bg-black/10 relative" />
        
        <h2 className="text-[50px] md:text-[80px] lg:text-[130px] font-semibold text-black text-center w-full leading-[1.1] lg:leading-[130px] tracking-tight px-4">
          SERVICES & EXPERTISE
        </h2>
      </div>

      {/* Bottom Section: Services List */}
      <div className="w-full flex flex-col relative z-10 gap-16 lg:gap-24">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col relative w-full pt-10">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-black/10" />

            <div className="flex flex-col xl:flex-row items-start w-full gap-8 xl:gap-12 py-8">
              {/* Left Column: Title */}
              <div className="w-full xl:w-[20%] shrink-0">
                <h3 className="text-[20px] xl:text-[24px] font-normal text-[#0f0f0f]">
                  {service.title}
                </h3>
              </div>

              {/* Middle Column: Image */}
              <div className="w-full xl:flex-1 h-[420px] rounded-[15px] overflow-hidden bg-[#e4e4e4] shrink-0 relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Column: Details */}
              <div className="w-full xl:w-[30%] flex flex-col pt-4">
                <p className="text-[16px] xl:text-[18px] leading-[1.5] text-[#828282] mb-12 text-left">
                  {service.description}
                </p>

                <div className="w-full h-px bg-black/10 mb-8" />

                <div className="flex justify-between items-center w-full mb-6">
                  <span className="text-[14px] xl:text-[16px] text-[#0f0f0f] font-medium">Timeline</span>
                  <div className="text-right">
                    <span className="text-[14px] xl:text-[16px] text-[#828282] font-normal">{service.timeline} </span>
                    <span className="text-[12px] xl:text-[13px] text-[#828282] font-normal">(Approximately)</span>
                  </div>
                </div>

                <div className="flex justify-between items-center w-full mb-12">
                  <span className="text-[14px] xl:text-[16px] text-[#0f0f0f] font-medium">Deliverables</span>
                  <span className="text-[14px] xl:text-[16px] text-[#828282] font-normal text-right">
                    {service.deliverables}
                  </span>
                </div>

                <div className="flex justify-between items-center w-full mt-auto">
                  <button className="bg-[#ff5100] text-white px-6 py-2.5 rounded-full font-medium text-[14px] xl:text-[16px] shadow-[inset_0px_-3px_13.8px_0px_rgba(232,232,232,0.76),inset_0px_4px_13.8px_0px_rgba(232,232,232,0.76)] hover:opacity-90 transition-opacity whitespace-nowrap">
                    Start {service.title} Project
                  </button>
                  <span className="text-[13px] xl:text-[14px] text-black/55 font-normal ml-6 whitespace-nowrap">
                    T&C Apply
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
