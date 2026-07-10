///only hero section with separate navbar
import React from "react";
import heroGirl from "../../assets/images/hero-girl.png";

export default function HeroSection() {
  return (
    <div className="w-full font-sans">
      <div className="relative w-full h-[100dvh] lg:h-[1077px] overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={heroGirl}
          alt="A child studying with thumbs up"
          className="absolute inset-0 w-full h-full object-cover object-[50%_20%] md:object-[48%_18%] lg:object-[50%_20%]"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />

        {/* ─── DESKTOP Hero Content ─── */}
        <div className="hidden lg:flex absolute left-1/2 top-[510px] z-10 w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
          <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>
          <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
            A Place Where
            <br />
            Their Hearts Live.
          </h1>
          <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors ">
            Fund us
          </button>
        </div>

        {/* ─── MOBILE Hero Content ─── */}
        <div className="lg:hidden absolute bottom-[80px] left-0 right-0 z-10 flex flex-col items-center gap-[20px] px-[19px]">
          {/* Tag */}
          <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[16px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>

          {/* Heading */}
          <h1 className="w-full text-center font-sans text-[32px] font-normal leading-[115%] tracking-[-0.03em] text-white">
            A Place Where
            <br />
            Their Hearts Live.
          </h1>

          {/* CTA */}
          {/* <button className="h-[48px] w-full max-w-[320px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
            Fund us
          </button> */}
          <button className="h-[48px] w-[160px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black transition-colors hover:bg-gray-100 md:w-[227px]">
            Fund us
          </button>
        </div>
      </div>
    </div>
  );
}
