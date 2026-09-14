import React from "react";
import joinUsHero from "../../assets/images/Joinus.png";

export default function HeroSection({
  eyebrow = "Be A Part Of The Change",
  title = "Join Us",
  image = joinUsHero,
}) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Frame: 1440 × 868 */}
      <div className="relative w-full aspect-[1440/868] min-h-[460px] max-h-[92svh]">
        {/* Background photo */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Rectangle 34627263 — opacity 25%, radial 45.06% */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(45.06% 45.06% at 50% 50%, #000 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Frame 5 — inline-flex, column, center, gap 16, block 215 × 110, centred in frame */}
        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[10px] px-[19px] lg:gap-[16px]">
          {/* Hero section subtitle pill — radius 51, padding 8px 51px, #000 30%, border #DCDCDC */}
          <span
            className="
              flex items-center justify-center whitespace-nowrap
              rounded-[51px] border border-[#DCDCDC] bg-black/30 backdrop-blur-[4px]
              px-[28px] py-[7px] sm:px-[40px] lg:px-[51px] lg:py-[8px]
              font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white
              lg:text-[14px]
            "
          >
            {eyebrow}
          </span>

          {/* Hero title — Sora 60px / 100% / -2.4px / capitalize / #FFF */}
          <h1
            className="
              m-0 text-center font-['Sora'] font-normal capitalize text-white
              text-[clamp(34px,4.17vw,60px)]
              leading-[100%] tracking-[-2.4px]
            "
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
