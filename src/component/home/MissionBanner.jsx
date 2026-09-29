// import React, { useEffect, useRef, useState } from "react";

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const [flying, setFlying] = useState(false);
//   const [pos, setPos] = useState({ start: -24, end: -24 });

//   // start: dashed tail bleeds off the left edge
//   // end:   nose bleeds off the right edge by the same amount
//   useEffect(() => {
//     const measure = () => {
//       const stage = stageRef.current;
//       const plane = planeRef.current;
//       if (!stage || !plane) return;
//       const bleed = window.innerWidth < 768 ? 14 : 24;
//       setPos({
//         start: -bleed,
//         end: Math.max(stage.clientWidth - plane.offsetWidth + bleed, 0),
//       });
//     };
//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   // fire once, when the section scrolls into view
//   useEffect(() => {
//     const stage = stageRef.current;
//     if (!stage) return;

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches
//     ) {
//       setFlying(true);
//       return;
//     }

//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setFlying(true);
//           io.disconnect();
//         }
//       },
//       { threshold: 0.35 },
//     );

//     io.observe(stage);
//     return () => io.disconnect();
//   }, []);

//   return (
//     <section className="w-full bg-[#F77126] flex justify-center overflow-hidden">
//       <div
//         ref={stageRef}
//         className="relative w-full max-w-[1440px] h-[720px] md:h-[600px] lg:h-[720px]"
//       >
//         {/* Text Container */}
//         <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
//           <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
//             “SPWF is a grassroots NGO empowering underprivileged children
//             through education, skill development, care, and opportunities for a
//             brighter future.”
//           </p>
//         </div>

//         {/* Aeroplane: edge-attached at both ends of the flight */}
//         <div
//           ref={planeRef}
//           style={{
//             transform: `translate3d(${flying ? pos.end : pos.start}px, ${
//               flying ? -28 : 0
//             }px, 0) rotate(-12deg)`,
//             transition: "transform 2800ms cubic-bezier(0.42, 0.02, 0.28, 1)",
//           }}
//           className="pointer-events-none absolute left-0 top-[80px] w-[124px] will-change-transform md:top-[90px] md:w-[152px] lg:top-[100px] lg:w-[182px] motion-reduce:transition-none"
//         >
//           <svg
//             viewBox="22 95 132 46"
//             className="h-auto w-full"
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

// import React, { useEffect, useRef } from "react";

// const DURATION = 3400; // total flight time in ms

// // gentle start, quick middle, soft landing
// const easeInOutCubic = (t) =>
//   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const posRef = useRef({ start: -24, end: -24 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   /*
//    * Plane ko har frame par khud draw karte hain (CSS transition ki jagah).
//    * Isse x ke saath-saath halka arc, bob aur tilt bhi control kar sakte hain —
//    * seedhi line me sarakne se zyada natural lagta hai.
//    */
//   const draw = (p) => {
//     const plane = planeRef.current;
//     if (!plane) return;

//     const { start, end } = posRef.current;
//     const e = easeInOutCubic(p);

//     const x = start + (end - start) * e;

//     // dheere-dheere upar chadta hai, aur beech me ek halka bob
//     const y = -30 * e - 14 * Math.sin(p * Math.PI);

//     // take-off par nose upar, beech me thoda zyada, end par level
//     const rotate = -8 - 7 * Math.sin(p * Math.PI);

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`;
//   };

//   // start: dashed tail bleeds off the left edge
//   // end:   right edge se thoda pehle ruk jata hai, corner se chipakta nahi
//   useEffect(() => {
//     const measure = () => {
//       const stage = stageRef.current;
//       const plane = planeRef.current;
//       if (!stage || !plane) return;

//       const isSmall = window.innerWidth < 768;
//       const bleed = isSmall ? 14 : 24;
//       const endMargin = isSmall ? 28 : 88; // right edge se gap

//       posRef.current = {
//         start: -bleed,
//         end: Math.max(stage.clientWidth - plane.offsetWidth - endMargin, 0),
//       };

//       draw(flownRef.current ? 1 : 0);
//     };

//     measure();
//     window.addEventListener("resize", measure);
//     return () => window.removeEventListener("resize", measure);
//   }, []);

//   // fire once, when the section scrolls into view
//   useEffect(() => {
//     const stage = stageRef.current;
//     if (!stage) return;

//     const reduceMotion =
//       typeof window !== "undefined" &&
//       window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     const land = () => {
//       flownRef.current = true;
//       draw(1);
//     };

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       land();
//       return;
//     }

//     const takeOff = () => {
//       const startedAt = performance.now();

//       const tick = (now) => {
//         const p = Math.min((now - startedAt) / DURATION, 1);
//         draw(p);

//         if (p < 1) {
//           rafRef.current = requestAnimationFrame(tick);
//         } else {
//           rafRef.current = 0;
//           flownRef.current = true;
//         }
//       };

//       rafRef.current = requestAnimationFrame(tick);
//     };

//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         io.disconnect();
//         takeOff();
//       },
//       { threshold: 0.35 },
//     );

//     io.observe(stage);

//     return () => {
//       io.disconnect();
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   return (
//     <section className="w-full bg-[#F77126] flex justify-center overflow-hidden">
//       <div
//         ref={stageRef}
//         className="relative w-full max-w-[1440px] h-[720px] md:h-[600px] lg:h-[720px]"
//       >
//         {/* Text Container */}
//         <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
//           <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
//             &ldquo;SPWF is a grassroots NGO empowering underprivileged children
//             through education, skill development, care, and opportunities for a
//             brighter future.&rdquo;
//           </p>
//         </div>

//         {/* Aeroplane */}
//         <div
//           ref={planeRef}
//           style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
//           className="pointer-events-none absolute left-0 top-[80px] w-[124px] will-change-transform md:top-[90px] md:w-[152px] lg:top-[100px] lg:w-[182px]"
//         >
//           <svg
//             viewBox="22 95 132 46"
//             className="h-auto w-full"
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

import React, { useEffect, useRef } from "react";

const DURATION = 3800; // total flight time in ms
const WAVES = 3; // kitni baar upar-neeche lehraayega
const CLIMB = 40; // overall upar chadhna

// gentle start, quick middle, soft landing
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export default function MissionBanner() {
  const stageRef = useRef(null);
  const planeRef = useRef(null);
  const posRef = useRef({ start: -24, end: -24, amp: 60 });
  const rafRef = useRef(0);
  const flownRef = useRef(false);

  /*
   * Path ko do functions me rakha hai taaki plane ka nose bhi usi path ke
   * slope ke hisaab se ghoome. Sirf x-y hilane se wo sarakta hua lagta hai,
   * nose ghumne se udta hua lagta hai.
   */
  const pathX = (p) => {
    const { start, end } = posRef.current;
    return start + (end - start) * easeInOutCubic(p);
  };

  const pathY = (p) => {
    const { amp } = posRef.current;
    // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
    return -CLIMB * easeInOutCubic(p) + amp * Math.sin(p * Math.PI * WAVES);
  };

  const draw = (p) => {
    const plane = planeRef.current;
    if (!plane) return;

    const x = pathX(p);
    const y = pathY(p);

    // thoda aage ka point lo, aur usi direction me nose ghumao
    const step = 0.008;
    const ahead = Math.min(p + step, 1);
    const angle =
      (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

    plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
      angle - 8
    }deg)`;
  };

  // start: dashed tail bleeds off the left edge
  // end:   right edge se thoda pehle ruk jata hai, corner se chipakta nahi
  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      const plane = planeRef.current;
      if (!stage || !plane) return;

      const isSmall = window.innerWidth < 768;
      const bleed = isSmall ? 14 : 24;
      const endMargin = isSmall ? 28 : 88; // right edge se gap

      posRef.current = {
        start: -bleed,
        end: Math.max(stage.clientWidth - plane.offsetWidth - endMargin, 0),
        amp: isSmall ? 34 : 62, // wave kitni gehri
      };

      draw(flownRef.current ? 1 : 0);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // fire once, when the section scrolls into view
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      reduceMotion
    ) {
      flownRef.current = true;
      draw(1);
      return;
    }

    const takeOff = () => {
      const startedAt = performance.now();

      const tick = (now) => {
        const p = Math.min((now - startedAt) / DURATION, 1);
        draw(p);

        if (p < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          rafRef.current = 0;
          flownRef.current = true;
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        takeOff();
      },
      { threshold: 0.35 },
    );

    io.observe(stage);

    return () => {
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
            &ldquo;SPWF is a grassroots NGO empowering underprivileged children
            through education, skill development, care, and opportunities for a
            brighter future.&rdquo;
          </p>
        </div>

        {/* Aeroplane */}
        <div
          ref={planeRef}
          style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
          className="pointer-events-none absolute left-0 top-[120px] w-[124px] will-change-transform md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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
