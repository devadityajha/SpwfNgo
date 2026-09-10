// import React from "react";

// export default function MissionBanner() {
//   return (
//     <section className="w-full bg-[#F77126] flex justify-center overflow-hidden">
//       <div className="relative w-full max-w-[1440px] h-[720px] md:h-[600px] lg:h-[720px]">
//         {/* Text Container */}
//         <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
//           <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
//             “SPWF is a grassroots NGO empowering underprivileged children
//             through education, skill development, care, and opportunities for a
//             brighter future.”
//           </p>
//         </div>

//         {/* Aeroplane SVG:
//           Adjusted left values so the dashed tail just touches the screen edge,
//           but the entire plane remains fully 100% visible!
//         */}
//         <div className="pointer-events-none absolute -left-[16px] top-[50px] w-[166px] h-[235px] rotate-[-14deg] md:-left-[20px] md:top-[60px] lg:-left-[10px] lg:top-[60px] lg:w-[208px] lg:h-[292px]">
//           <svg
//             viewBox="0 0 208 292"
//             className="h-full w-full"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <g transform="translate(18 52)">
//               <path
//                 d="M6 82C16 77 24 76 31 80C37 84 44 85 50 82C57 79 64 80 71 86"
//                 stroke="white"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeDasharray="3 8"
//               />
//               <path
//                 d="M71 86L116 60"
//                 stroke="white"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 strokeDasharray="3 8"
//               />
//               <path
//                 d="M92 45L134 52L112 84L104 63L92 45Z"
//                 stroke="white"
//                 strokeWidth="2.5"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M104 63L133 52"
//                 stroke="white"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//               />
//             </g>
//           </svg>
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect, useRef, useState } from "react";

export default function MissionBanner() {
  const stageRef = useRef(null);
  const planeRef = useRef(null);
  const [flying, setFlying] = useState(false);
  const [pos, setPos] = useState({ start: -24, end: -24 });

  // start: dashed tail bleeds off the left edge
  // end:   nose bleeds off the right edge by the same amount
  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      const plane = planeRef.current;
      if (!stage || !plane) return;
      const bleed = window.innerWidth < 768 ? 14 : 24;
      setPos({
        start: -bleed,
        end: Math.max(stage.clientWidth - plane.offsetWidth + bleed, 0),
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // fire once, when the section scrolls into view
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setFlying(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFlying(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    io.observe(stage);
    return () => io.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F77126] flex justify-center overflow-hidden">
      <div
        ref={stageRef}
        className="relative w-full max-w-[1440px] h-[720px] md:h-[600px] lg:h-[720px]"
      >
        {/* Text Container */}
        <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
          <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
            “SPWF is a grassroots NGO empowering underprivileged children
            through education, skill development, care, and opportunities for a
            brighter future.”
          </p>
        </div>

        {/* Aeroplane: edge-attached at both ends of the flight */}
        <div
          ref={planeRef}
          style={{
            transform: `translate3d(${flying ? pos.end : pos.start}px, ${
              flying ? -28 : 0
            }px, 0) rotate(-12deg)`,
            transition: "transform 2800ms cubic-bezier(0.42, 0.02, 0.28, 1)",
          }}
          className="pointer-events-none absolute left-0 top-[80px] w-[124px] will-change-transform md:top-[90px] md:w-[152px] lg:top-[100px] lg:w-[182px] motion-reduce:transition-none"
        >
          <svg
            viewBox="22 95 132 46"
            className="h-auto w-full"
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
