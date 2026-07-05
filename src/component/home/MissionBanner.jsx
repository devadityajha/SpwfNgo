import React from "react";

export default function MissionBanner() {
  return (
    <section className="w-full  bg-[#F77126] overflow-hidden">
      <div className="relative mx-auto h-[810px] w-[1440px]">
        {/* <div className="absolute left-[237px] top-[293px] flex w-[966px] flex-col items-center gap-[24px] max-[1440px]:left-1/2 max-[1440px]:-translate-x-1/2 max-[1440px]:px-6 max-md:top-[220px] max-md:w-full"> */}
        <div className="absolute left-1/2 top-1/2 flex w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[24px] max-[1440px]:w-[966px]  max-md:w-full max-md:px-6">
          {/* <p className="w-[966px] text-center font-['Sora'] text-[40px] font-semibold leading-[140%] tracking-[-0.03em] text-white max-[1440px]:w-full max-md:text-[30px] max-md:leading-[135%] max-sm:text-[24px]"> */}
          <p className="w-[966px] text-center font-['Sora'] text-[40px] font-semibold leading-[56px] tracking-[-0.04em] text-white max-[1440px]:w-full max-md:text-[30px] max-md:leading-[42px] max-sm:text-[24px] max-sm:leading-[34px]">
            “SPWF is a grassroots NGO empowering underprivileged children
            through education, skill development, care, and opportunities for a
            brighter future.”
          </p>
        </div>

        <div className="pointer-events-none absolute left-[78px] top-[82px] h-[292px] w-[208px] rotate-[-14deg] max-md:left-[20px] max-md:top-[60px] max-md:scale-75 max-sm:scale-[0.6]">
          <svg
            viewBox="0 0 208 292"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <g transform="translate(18 52)">
              <path
                d="M6 82C16 77 24 76 31 80C37 84 44 85 50 82C57 79 64 80 71 86"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="3 8"
              />
              <path
                d="M71 86L116 60"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="3 8"
              />
              <path
                d="M92 45L134 52L112 84L104 63L92 45Z"
                stroke="white"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M104 63L133 52"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
