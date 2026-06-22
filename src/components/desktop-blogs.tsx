"use client";

import React from "react";

export const DesktopBlogs = () => {
  const blogs = Array(6).fill(null).map((_, i) => ({
    category: "DESIGN",
    title: "The Importance of Mobile-First Design in 2005",
    date: "Feb 26, 2001",
    image: "/services-placement.png"
  }));

  return (
    <section className="w-full bg-[#fffff0] pb-20 pt-0 px-8 lg:px-[90px] flex flex-col relative z-10 overflow-hidden">
      
      {/* Top Section: Title */}
      <div className="flex flex-col w-full mb-16 lg:mb-24 items-center relative pt-16 gap-8 md:gap-10">
        <p className="font-medium text-[20px] lg:text-[30px] text-center w-full tracking-wide">
          <span className="text-[#ff5100]">[</span>
          <span className="text-black mx-2">LATEST UPDATES</span>
          <span className="text-[#ff5100]">]</span>
        </p>
        
        <div className="w-full h-px bg-black/10 relative" />
        
        <h2 className="text-[50px] md:text-[80px] lg:text-[130px] font-semibold text-black text-center w-full leading-[1.1] lg:leading-[130px] tracking-tight px-4">
          BLOGS & ARTICLES
        </h2>
      </div>

      {/* Blogs Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
        {blogs.map((blog, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[15px] w-full aspect-[4/3] p-8 flex flex-col justify-between overflow-hidden relative group cursor-pointer hover:shadow-xl transition-all duration-300 border border-black/5"
          >
            {/* Top Section */}
            <div className="flex flex-col gap-3 z-10">
              <span className="font-semibold text-[18px] xl:text-[20px] tracking-[2px] uppercase text-black">
                {blog.category}
              </span>
              <h3 className="font-medium text-[28px] xl:text-[35px] leading-[1.2] text-black pr-4">
                {blog.title}
              </h3>
            </div>

            {/* Bottom Section */}
            <div className="flex justify-between items-end mt-auto z-10 w-full relative">
              <span className="text-[24px] xl:text-[28px] text-black/65 whitespace-nowrap pb-2">
                {blog.date}
              </span>
              
              <div className="w-[45%] h-[110px] xl:h-[130px] rounded-[10px] overflow-hidden relative shadow-sm translate-y-2 translate-x-2 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
