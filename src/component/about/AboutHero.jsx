import React from "react";
// Import the image exactly as requested
import abouthero from "../../assets/images/abouthero.png";

export default function AboutHero() {
  return (
    <div className="w-full font-sans">
      {/* ─── TOP IMAGE SECTION ─── */}
      {/* Height is adjusted to look good as a header, typically 60-70vh for internal pages */}
      <div className="relative w-full h-[60vh] lg:h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={abouthero}
          alt="Two children holding a slate"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />

        {/* Dark overlay to make the white text readable */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center gap-[16px] lg:gap-[24px] px-4">
          {/* Pill Tag */}
          <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[12px] lg:text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-center font-sans text-[48px] lg:text-[72px] font-normal leading-[100%] tracking-[-0.04em] text-white">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}
