import React from "react";
import abouthero from "../../assets/images/abouthero.png";
import AboutUs from "../../assets/videos/AboutUs.mp4";

export default function AboutHero() {
  return (
    <div className="w-full font-sans">
      {/* ─── TOP IMAGE SECTION — 1440 × 578 in Figma ─── */}
      <div className="relative w-full aspect-[1440/578] min-h-[380px] max-h-[86svh] overflow-hidden">
        {/* Background Image */}
        {/* <img
          src={abouthero}
          alt="Two children holding a slate"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        /> */}
        {/* Background Video */}
        <video
          src={AboutUs}
          autoPlay
          loop
          muted
          playsInline
          poster={abouthero}
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-[5]" />

        {/* Hero Content — sits in the lower third, as in Figma */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-[12px] px-4 pb-[13%] lg:gap-[16px]">
          {/* Pill Tag */}
          <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[33px] py-[4px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[12px] lg:text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-center font-sans text-[clamp(38px,5vw,72px)] font-normal leading-[100%] tracking-[-0.04em] text-white">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}
