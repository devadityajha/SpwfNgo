import React from "react";

export default function WhyJoinUs({
  scriptWord = "Join",
  paragraph = "Joining SPWF Means Becoming Part Of A Mission To Create Meaningful Change In The Lives Of Children. Your Support Helps Provide Education, Care, And Opportunities To Those Who Need Them Most, Enabling Them To Learn, Grow, And Build Brighter Futures.",
}) {
  return (
    <section className="w-full bg-[#FEFBF2] flex justify-center">
      {/* Frame 2147226755 — 1440 × 720, padding 192px 242px 191px 243px */}
      <div
        className="
          flex w-full max-w-[1440px] flex-col items-center justify-center
          px-[20px] py-[72px]
          sm:px-[48px] sm:py-[110px]
          lg:min-h-[720px] lg:px-[243px] lg:pt-[192px] lg:pb-[191px]
        "
      >
        {/* content block — 955 × 337 */}
        <div className="w-full max-w-[955px]">
          {/* "Why Join Us" — Sora 40px / 120% / -2px, "Join" in Satisfy */}
          <h2
            className="
              m-0 text-center font-['Sora'] font-normal text-black
              text-[clamp(26px,2.78vw,40px)]
              leading-[120%] tracking-[-2px]
            "
          >
            Why{" "}
            <span className="font-['Satisfy'] tracking-[-1.5px]">
              {scriptWord}
            </span>{" "}
            Us
          </h2>

          {/* body — Sora 32px / 150% / -0.96px / #515151 */}
          <p
            className="
              mx-auto mt-[24px] max-w-[955px] text-center
              font-['Sora'] font-normal text-[#515151]
              text-[clamp(16px,2.22vw,32px)]
              leading-[150%] tracking-[-0.96px]
              lg:mt-[32px]
            "
          >
            {paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}
