// import React from "react";

// export default function WhyJoinUs({
//   scriptWord = "Join",
//   paragraph = "Joining SPWF Means Becoming Part Of A Mission To Create Meaningful Change In The Lives Of Children. Your Support Helps Provide Education, Care, And Opportunities To Those Who Need Them Most, Enabling Them To Learn, Grow, And Build Brighter Futures.",
// }) {
//   return (
//     <section className="w-full bg-[#FEFBF2] flex justify-center">
//       {/* Frame 2147226755 — 1440 × 720, padding 192px 242px 191px 243px */}
//       <div
//         className="
//           flex w-full max-w-[1440px] flex-col items-center justify-center
//           px-[20px] py-[72px]
//           sm:px-[48px] sm:py-[110px]
//           lg:min-h-[720px] lg:px-[243px] lg:pt-[192px] lg:pb-[191px]
//         "
//       >
//         {/* content block — 955 × 337 */}
//         <div className="w-full max-w-[955px]">
//           {/* "Why Join Us" — Sora 40px / 120% / -2px, "Join" in Satisfy */}
//           <h2
//             className="
//               m-0 text-center font-['Sora'] font-normal text-black
//               text-[clamp(26px,2.78vw,40px)]
//               leading-[120%] tracking-[-2px]
//             "
//           >
//             Why{" "}
//             <span className="font-['Satisfy'] tracking-[-1.5px]">
//               {scriptWord}
//             </span>{" "}
//             Us
//           </h2>

//           {/* body — Sora 32px / 150% / -0.96px / #515151 */}
//           <p
//             className="
//               mx-auto mt-[24px] max-w-[955px] text-center
//               font-['Sora'] font-normal text-[#515151]
//               text-[clamp(16px,2.22vw,32px)]
//               leading-[150%] tracking-[-0.96px]
//               lg:mt-[32px]
//             "
//           >
//             {paragraph}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useEffect, useRef, useState } from "react";

/*
 * Paragraph scroll ke saath word-by-word highlight hota hai.
 *
 * Kaam kaise karta hai: paragraph ke position se ek 0→1 progress nikalta hai,
 * phir utne words ko active (black) kar deta hai. Scroll listener rAF se
 * throttle kiya hai taaki har frame pe kaam na ho.
 */
export default function WhyJoinUs({
  scriptWord = "Join",
  paragraph = "Joining SPWF Means Becoming Part Of A Mission To Create Meaningful Change In The Lives Of Children. Your Support Helps Provide Education, Care, And Opportunities To Those Who Need Them Most, Enabling Them To Learn, Grow, And Build Brighter Futures.",
}) {
  const paragraphRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const words = paragraph.split(" ");

  useEffect(() => {
    const el = paragraphRef.current;
    if (!el) return;

    // motion kam chahiye to seedha poora text dikha do
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setProgress(1);
      return;
    }

    let frame = null;

    const update = () => {
      frame = null;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // reveal tab shuru hota hai jab text viewport ke 80% par aata hai,
      // aur 30% tak pahunchte-pahunchte poora ho jata hai
      const start = vh * 0.8;
      const end = vh * 0.3;

      const travelled = start - rect.top;
      const total = rect.height + (start - end);

      const next = Math.min(Math.max(travelled / total, 0), 1);
      setProgress(next);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [paragraph]);

  // thoda aage rakha hai taaki aakhri word bhi theek se highlight ho jaye
  const activeCount = Math.round(progress * (words.length + 3));

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

          {/* body — Sora 32px / 150% / -0.96px, scroll par word-by-word reveal */}
          <p
            ref={paragraphRef}
            className="
              mx-auto mt-[24px] max-w-[955px] text-center
              font-['Sora'] font-normal
              text-[clamp(16px,2.22vw,32px)]
              leading-[150%] tracking-[-0.96px]
              lg:mt-[32px]
            "
          >
            {words.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className={`transition-colors duration-500 ease-out ${
                  index < activeCount ? "text-black" : "text-[#C9C4BA]"
                }`}
              >
                {word}{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
