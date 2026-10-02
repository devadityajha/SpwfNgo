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

// import React, { useEffect, useRef } from "react";

// const DURATION = 3800; // total flight time in ms
// const WAVES = 3; // kitni baar upar-neeche lehraayega
// const CLIMB = 40; // overall upar chadhna

// // gentle start, quick middle, soft landing
// const easeInOutCubic = (t) =>
//   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const posRef = useRef({ start: -24, end: -24, amp: 60 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   /*
//    * Path ko do functions me rakha hai taaki plane ka nose bhi usi path ke
//    * slope ke hisaab se ghoome. Sirf x-y hilane se wo sarakta hua lagta hai,
//    * nose ghumne se udta hua lagta hai.
//    */
//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * easeInOutCubic(p);
//   };

//   const pathY = (p) => {
//     const { amp } = posRef.current;
//     // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -CLIMB * easeInOutCubic(p) + amp * Math.sin(p * Math.PI * WAVES);
//   };

//   const draw = (p) => {
//     const plane = planeRef.current;
//     if (!plane) return;

//     const x = pathX(p);
//     const y = pathY(p);

//     // thoda aage ka point lo, aur usi direction me nose ghumao
//     const step = 0.008;
//     const ahead = Math.min(p + step, 1);
//     const angle =
//       (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
//       angle - 8
//     }deg)`;
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
//         amp: isSmall ? 34 : 62, // wave kitni gehri
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

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       flownRef.current = true;
//       draw(1);
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
//           className="pointer-events-none absolute left-0 top-[120px] w-[124px] will-change-transform md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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

// const DURATION = 3800; // total flight time in ms
// const WAVES = 3; // kitni baar upar-neeche lehraayega
// const CLIMB = 40; // overall upar chadhna
// const TRAIL_STEPS = 80; // trail ki smoothness

// // plane ke box me wo point jahan se trail nikalti hai (tail)
// const TAIL_X = 0.42;
// const TAIL_Y = 0.82;

// // gentle start, quick middle, soft landing
// const easeInOutCubic = (t) =>
//   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const trailRef = useRef(null);
//   const posRef = useRef({ start: -24, end: -24, amp: 60 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   /*
//    * Path do functions me hai taaki (a) plane ka nose usi path ke slope ke
//    * hisaab se ghoome, aur (b) wahi path trail banane ke liye dobara sample
//    * ho sake. Trail ab plane ke SVG ka hissa nahi hai — wo ek alag path hai
//    * jo utna hi lamba hota hai jitna plane ud chuka hai, isliye peeche chhoot
//    * jati hai.
//    */
//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * easeInOutCubic(p);
//   };

//   const pathY = (p) => {
//     const { amp } = posRef.current;
//     // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -CLIMB * easeInOutCubic(p) + amp * Math.sin(p * Math.PI * WAVES);
//   };

//   const draw = (p) => {
//     const plane = planeRef.current;
//     const trail = trailRef.current;
//     if (!plane) return;

//     const x = pathX(p);
//     const y = pathY(p);

//     // thoda aage ka point lo, aur usi direction me nose ghumao
//     const step = 0.008;
//     const ahead = Math.min(p + step, 1);
//     const angle =
//       (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
//       angle - 8
//     }deg)`;

//     if (!trail) return;

//     // trail ko 0 se p tak dobara sample karke banao — resize par bhi sahi rehta hai
//     const baseX = plane.offsetLeft + plane.offsetWidth * TAIL_X;
//     const baseY = plane.offsetTop + plane.offsetHeight * TAIL_Y;

//     let d = "";
//     for (let i = 0; i <= TRAIL_STEPS; i += 1) {
//       const t = (p * i) / TRAIL_STEPS;
//       const px = (baseX + pathX(t)).toFixed(1);
//       const py = (baseY + pathY(t)).toFixed(1);
//       d += `${i === 0 ? "M" : "L"}${px} ${py}`;
//     }

//     trail.setAttribute("d", d);
//   };

//   // start: plane left edge se thoda bahar
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
//         amp: isSmall ? 34 : 62, // wave kitni gehri
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

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       flownRef.current = true;
//       draw(1);
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

//         {/* Trail — plane ke peeche chhootne wale dots */}
//         <svg
//           className="pointer-events-none absolute inset-0 h-full w-full"
//           fill="none"
//           aria-hidden="true"
//         >
//           <path
//             ref={trailRef}
//             d=""
//             stroke="white"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeDasharray="3 8"
//           />
//         </svg>

//         {/* Aeroplane — ab sirf plane, trail nahi */}
//         <div
//           ref={planeRef}
//           style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
//           className="pointer-events-none absolute left-0 top-[120px] w-[44px] will-change-transform md:top-[130px] md:w-[54px] lg:top-[150px] lg:w-[64px]"
//         >
//           <svg
//             viewBox="108 95 46 43"
//             className="h-auto w-full"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             aria-hidden="true"
//           >
//             <g transform="translate(18 52)">
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

// const DURATION = 3800; // total flight time in ms
// const WAVES = 3; // kitni baar upar-neeche lehraayega
// const CLIMB = 40; // overall upar chadhna
// const TRAIL_STEPS = 80; // trail ki smoothness

// // plane ke box me wo point jahan se trail nikalti hai (triangle ki tail)
// const TAIL_X = 0.82;
// const TAIL_Y = 0.89;

// // gentle start, quick middle, soft landing
// const easeInOutCubic = (t) =>
//   t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const trailRef = useRef(null);
//   const posRef = useRef({ start: -24, end: -24, amp: 60 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   /*
//    * Path ko do functions me rakha hai taaki plane ka nose bhi usi path ke
//    * slope ke hisaab se ghoome. Sirf x-y hilane se wo sarakta hua lagta hai,
//    * nose ghumne se udta hua lagta hai.
//    */
//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * easeInOutCubic(p);
//   };

//   const pathY = (p) => {
//     const { amp } = posRef.current;
//     // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -CLIMB * easeInOutCubic(p) + amp * Math.sin(p * Math.PI * WAVES);
//   };

//   const draw = (p) => {
//     const plane = planeRef.current;
//     const trail = trailRef.current;
//     if (!plane) return;

//     const x = pathX(p);
//     const y = pathY(p);

//     // thoda aage ka point lo, aur usi direction me nose ghumao
//     const step = 0.008;
//     const ahead = Math.min(p + step, 1);
//     const angle =
//       (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
//       angle - 8
//     }deg)`;

//     if (!trail) return;

//     /*
//      * Trail ab plane ke SVG ka hissa nahi hai. Ye alag path hai jo 0 se p tak
//      * dobara sample hota hai — yaani jitna plane ud chuka hai utna hi lamba.
//      * Dots apni jagah rukte hain kyunki path ka start fix hai.
//      */
//     const baseX = plane.offsetLeft + plane.offsetWidth * TAIL_X;
//     const baseY = plane.offsetTop + plane.offsetHeight * TAIL_Y;

//     let d = "";
//     for (let i = 0; i <= TRAIL_STEPS; i += 1) {
//       const t = (p * i) / TRAIL_STEPS;
//       const px = (baseX + pathX(t)).toFixed(1);
//       const py = (baseY + pathY(t)).toFixed(1);
//       d += `${i === 0 ? "M" : "L"}${px} ${py}`;
//     }

//     trail.setAttribute("d", d);
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
//         amp: isSmall ? 34 : 62, // wave kitni gehri
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

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       flownRef.current = true;
//       draw(1);
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

//         {/* Trail — plane ke peeche chhootne wale dots */}
//         <svg
//           className="pointer-events-none absolute inset-0 h-full w-full"
//           fill="none"
//           aria-hidden="true"
//         >
//           <path
//             ref={trailRef}
//             d=""
//             stroke="white"
//             strokeWidth="2.5"
//             strokeLinecap="round"
//             strokeDasharray="3 8"
//           />
//         </svg>

//         {/* Aeroplane */}
//         <div
//           ref={planeRef}
//           style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
//           className="pointer-events-none absolute left-0 top-[120px] w-[124px] will-change-transform md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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

// const DURATION = 2300; // total flight time in ms
// const WAVES = 3; // kitni baar upar-neeche lehraayega
// const CLIMB = 40; // overall upar chadhna

// const DOT_COUNT = 14; // peeche kitne dots dikhenge
// const DOT_GAP = 0.012; // do dots ke beech ka faasla (progress units me)

// // plane ke box me wo point jahan se dots nikalte hain (triangle ki tail)
// const TAIL_X = 0.82;
// const TAIL_Y = 0.89;

// // tez shuru, aakhir me dheere — rocket jaisa
// const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const dotsRef = useRef([]);
//   const posRef = useRef({ start: -24, end: -24, amp: 60 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * easeOutCubic(p);
//   };

//   const pathY = (p) => {
//     const { amp } = posRef.current;
//     // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -CLIMB * easeOutCubic(p) + amp * Math.sin(p * Math.PI * WAVES);
//   };

//   const draw = (p) => {
//     const plane = planeRef.current;
//     if (!plane) return;

//     const x = pathX(p);
//     const y = pathY(p);

//     // thoda aage ka point lo, aur usi direction me nose ghumao
//     const step = 0.008;
//     const ahead = Math.min(p + step, 1);
//     const angle =
//       (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
//       angle - 8
//     }deg)`;

//     /*
//      * Dots: har dot plane se thoda peeche ke point par baithta hai.
//      * Jitna peeche, utna halka — isse rocket ke exhaust jaisa trail banta hai
//      * jo plane ke saath chalta hai, poori line nahi chhodta.
//      */
//     const baseX = plane.offsetLeft + plane.offsetWidth * TAIL_X;
//     const baseY = plane.offsetTop + plane.offsetHeight * TAIL_Y;

//     dotsRef.current.forEach((dot, i) => {
//       if (!dot) return;

//       const t = p - (i + 1) * DOT_GAP;

//       if (t <= 0 || p >= 1) {
//         dot.style.opacity = "0";
//         return;
//       }

//       const fade = 1 - (i + 1) / (DOT_COUNT + 1);

//       dot.setAttribute("cx", (baseX + pathX(t)).toFixed(1));
//       dot.setAttribute("cy", (baseY + pathY(t)).toFixed(1));
//       dot.setAttribute("r", (2.6 * (0.45 + fade * 0.55)).toFixed(2));
//       dot.style.opacity = Math.pow(fade, 1.5).toFixed(3);
//     });
//   };

//   // start: plane left edge se thoda bahar
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
//         amp: isSmall ? 34 : 62, // wave kitni gehri
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

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       flownRef.current = true;
//       draw(1);
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

//         {/* Trail dots — plane ke peeche, peeche wale halke */}
//         <svg
//           className="pointer-events-none absolute inset-0 h-full w-full"
//           aria-hidden="true"
//         >
//           {Array.from({ length: DOT_COUNT }).map((_, i) => (
//             <circle
//               key={i}
//               ref={(el) => (dotsRef.current[i] = el)}
//               r="2.6"
//               fill="white"
//               style={{ opacity: 0 }}
//             />
//           ))}
//         </svg>

//         {/* Aeroplane */}
//         <div
//           ref={planeRef}
//           style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
//           className="pointer-events-none absolute left-0 top-[120px] w-[124px] will-change-transform md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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

// const DURATION = 3000; // total flight time in ms
// const WAVES = 4; // kitni baar lehraayega — snake jaisa
// const CLIMB = 40; // overall upar chadhna

// const DOT_COUNT = 16; // tail me kitne dots
// const DOT_SPACING = 26; // do dots ke beech px me faasla
// const LUT_SAMPLES = 400; // path ki lambai naapne ki sharpness

// // plane ke box me uska asli centre (graphic box ke daayein hisse me hai)
// const CENTER_X = 0.826;
// const CENTER_Y = 0.467;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const dotsRef = useRef([]);
//   const posRef = useRef({ start: -24, end: -24, amp: 60 });
//   const lutRef = useRef({ ds: [], total: 0 });
//   const rafRef = useRef(0);
//   const flownRef = useRef(false);

//   // snake steady chalta hai, isliye koi easing nahi — seedha linear
//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * p;
//   };

//   const pathY = (p) => {
//     const { amp } = posRef.current;
//     // sin(p * π * WAVES) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -CLIMB * p + amp * Math.sin(p * Math.PI * WAVES);
//   };

//   /*
//    * Lookup table: path ko tukdon me baant ke uski asli lambai naapte hain.
//    * Iske bina dots progress ke hisaab se lagte, aur jahan plane tez chalta
//    * wahan door-door, jahan dheere wahan paas-paas ho jaate. Arc length se
//    * sab barabar doori par rehte hain — tabhi snake jaisa lagta hai.
//    */
//   const buildLut = () => {
//     const ds = new Array(LUT_SAMPLES + 1);
//     let prevX = pathX(0);
//     let prevY = pathY(0);
//     let acc = 0;
//     ds[0] = 0;

//     for (let i = 1; i <= LUT_SAMPLES; i += 1) {
//       const t = i / LUT_SAMPLES;
//       const x = pathX(t);
//       const y = pathY(t);
//       acc += Math.hypot(x - prevX, y - prevY);
//       ds[i] = acc;
//       prevX = x;
//       prevY = y;
//     }

//     lutRef.current = { ds, total: acc };
//   };

//   // t par path ki ab tak ki lambai
//   const distAt = (p) => {
//     const { ds } = lutRef.current;
//     if (!ds.length) return 0;
//     const n = ds.length - 1;
//     const f = Math.min(Math.max(p, 0), 1) * n;
//     const i = Math.min(Math.floor(f), n - 1);
//     return ds[i] + (ds[i + 1] - ds[i]) * (f - i);
//   };

//   // di lambai par path ka t
//   const tAtDist = (d) => {
//     const { ds, total } = lutRef.current;
//     if (!ds.length || d <= 0) return 0;
//     if (d >= total) return 1;

//     const n = ds.length - 1;
//     let lo = 0;
//     let hi = n;

//     while (lo < hi - 1) {
//       const mid = (lo + hi) >> 1;
//       if (ds[mid] <= d) lo = mid;
//       else hi = mid;
//     }

//     const span = ds[hi] - ds[lo] || 1;
//     return (lo + (d - ds[lo]) / span) / n;
//   };

//   const draw = (p) => {
//     const plane = planeRef.current;
//     if (!plane) return;

//     const x = pathX(p);
//     const y = pathY(p);

//     // thoda aage ka point lo, aur usi direction me nose ghumao
//     const step = 0.006;
//     const ahead = Math.min(p + step, 1);
//     const angle =
//       (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

//     plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
//       angle - 8
//     }deg)`;

//     // dots plane ke centre se nikalte hain, kinare se nahi
//     const baseX = plane.offsetLeft + plane.offsetWidth * CENTER_X;
//     const baseY = plane.offsetTop + plane.offsetHeight * CENTER_Y;
//     const headDist = distAt(p);

//     dotsRef.current.forEach((dot, i) => {
//       if (!dot) return;

//       const d = headDist - (i + 1) * DOT_SPACING;

//       if (d <= 0) {
//         dot.style.opacity = "0";
//         return;
//       }

//       const t = tAtDist(d);
//       dot.setAttribute("cx", (baseX + pathX(t)).toFixed(1));
//       dot.setAttribute("cy", (baseY + pathY(t)).toFixed(1));
//       dot.style.opacity = "1";
//     });
//   };

//   // start: plane left edge se thoda bahar
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
//         amp: isSmall ? 34 : 56, // wave kitni gehri
//       };

//       buildLut();
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

//     if (
//       typeof window === "undefined" ||
//       !("IntersectionObserver" in window) ||
//       reduceMotion
//     ) {
//       flownRef.current = true;
//       draw(1);
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

//         {/* Tail dots — sab barabar, koi fade nahi */}
//         <svg
//           className="pointer-events-none absolute inset-0 h-full w-full"
//           aria-hidden="true"
//         >
//           {Array.from({ length: DOT_COUNT }).map((_, i) => (
//             <circle
//               key={i}
//               ref={(el) => (dotsRef.current[i] = el)}
//               r="2.5"
//               fill="white"
//               style={{ opacity: 0 }}
//             />
//           ))}
//         </svg>

//         {/* Aeroplane */}
//         <div
//           ref={planeRef}
//           style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
//           className="pointer-events-none absolute left-0 top-[120px] w-[124px] will-change-transform md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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

const DURATION = 4000; // total flight time in ms
const DOT_COUNT = 10; // tail me kitne dots
const LUT_SAMPLES = 400; // path ki lambai naapne ki sharpness

// plane ke box me uska asli centre (graphic box ke daayein hisse me hai)
const CENTER_X = 0.826;
const CENTER_Y = 0.467;

export default function MissionBanner() {
  const stageRef = useRef(null);
  const planeRef = useRef(null);
  const dotsRef = useRef([]);
  const posRef = useRef({
    start: -24,
    end: -24,
    amp: 60,
    climb: 10,
    waves: 4,
    dotSpacing: 24,
    dotRadius: 2.5,
  });
  const lutRef = useRef({ ds: [], total: 0 });
  const rafRef = useRef(0);
  const progressRef = useRef(0);
  const lastWidthRef = useRef(0);

  // snake steady chalta hai, isliye koi easing nahi — seedha linear
  const pathX = (p) => {
    const { start, end } = posRef.current;
    return start + (end - start) * p;
  };

  const pathY = (p) => {
    const { amp, climb, waves } = posRef.current;
    // sin(p * π * waves) start aur end dono par 0 hota hai, to landing level rehti hai
    return -climb * p + amp * Math.sin(p * Math.PI * waves);
  };

  /*
   * Lookup table: path ko tukdon me baant ke uski asli lambai naapte hain.
   * Iske bina dots progress ke hisaab se lagte, aur jahan plane tez chalta
   * wahan door-door, jahan dheere wahan paas-paas ho jaate. Arc length se
   * sab barabar doori par rehte hain — tabhi snake jaisa lagta hai.
   */
  const buildLut = () => {
    const ds = new Array(LUT_SAMPLES + 1);
    let prevX = pathX(0);
    let prevY = pathY(0);
    let acc = 0;
    ds[0] = 0;

    for (let i = 1; i <= LUT_SAMPLES; i += 1) {
      const t = i / LUT_SAMPLES;
      const x = pathX(t);
      const y = pathY(t);
      acc += Math.hypot(x - prevX, y - prevY);
      ds[i] = acc;
      prevX = x;
      prevY = y;
    }

    lutRef.current = { ds, total: acc };
  };

  // t par path ki ab tak ki lambai
  const distAt = (p) => {
    const { ds } = lutRef.current;
    if (!ds.length) return 0;
    const n = ds.length - 1;
    const f = Math.min(Math.max(p, 0), 1) * n;
    const i = Math.min(Math.floor(f), n - 1);
    return ds[i] + (ds[i + 1] - ds[i]) * (f - i);
  };

  // di lambai par path ka t
  const tAtDist = (d) => {
    const { ds, total } = lutRef.current;
    if (!ds.length || d <= 0) return 0;
    if (d >= total) return 1;

    const n = ds.length - 1;
    let lo = 0;
    let hi = n;

    while (lo < hi - 1) {
      const mid = (lo + hi) >> 1;
      if (ds[mid] <= d) lo = mid;
      else hi = mid;
    }

    const span = ds[hi] - ds[lo] || 1;
    return (lo + (d - ds[lo]) / span) / n;
  };

  const draw = (p) => {
    const plane = planeRef.current;
    if (!plane) return;

    progressRef.current = p;

    const x = pathX(p);
    const y = pathY(p);

    // thoda aage ka point lo, aur usi direction me nose ghumao
    const step = 0.006;
    const ahead = Math.min(p + step, 1);
    const angle =
      (Math.atan2(pathY(ahead) - y, pathX(ahead) - x) * 180) / Math.PI;

    plane.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${
      angle - 8
    }deg)`;

    // dots plane ke centre se nikalte hain, kinare se nahi
    const baseX = plane.offsetLeft + plane.offsetWidth * CENTER_X;
    const baseY = plane.offsetTop + plane.offsetHeight * CENTER_Y;
    const headDist = distAt(p);
    const { dotSpacing, dotRadius } = posRef.current;

    dotsRef.current.forEach((dot, i) => {
      if (!dot) return;

      const d = headDist - (i + 1) * dotSpacing;

      if (d <= 0) {
        dot.style.opacity = "0";
        return;
      }

      const t = tAtDist(d);
      dot.setAttribute("r", dotRadius.toFixed(2));
      dot.setAttribute("cx", (baseX + pathX(t)).toFixed(1));
      dot.setAttribute("cy", (baseY + pathY(t)).toFixed(1));
      dot.style.opacity = "1";
    });
  };

  // start: plane left edge se thoda bahar
  // end:   right edge se thoda bahar — dono taraf barabar bleed
  useEffect(() => {
    const measure = () => {
      const stage = stageRef.current;
      const plane = planeRef.current;
      if (!stage || !plane) return;

      const width = stage.clientWidth;

      /*
       * Mobile browsers URL bar chhupate-dikhate waqt resize fire karte hain,
       * jisme sirf height badalti hai. Us par dobara measure karenge to
       * udta hua plane beech me hi reset ho jayega — isliye width same ho
       * to kuch mat karo.
       */
      if (width === lastWidthRef.current) return;
      lastWidthRef.current = width;

      const isNarrow = width < 768;

      /*
       * Sab kuch width ke anupaat me — isse har screen par ek jaisa dikhta hai.
       * Mobile par path chhota hota hai, isliye waves kam aur amplitude ka
       * anupaat zyada, warna lehar dikhti hi nahi.
       */
      posRef.current = {
        start: -plane.offsetWidth * 0.68,
        end: width - plane.offsetWidth * 0.68,
        amp: width * (isNarrow ? 0.045 : 0.022), // wave kitni gehri
        climb: width * 0.007, // overall upar chadhna
        waves: isNarrow ? 2 : 4, // kitni baar lehraayega
        dotSpacing: Math.max(width * 0.016, 9), // dots ke beech faasla
        dotRadius: Math.max(width * 0.0017, 1.8),
      };

      buildLut();
      draw(progressRef.current);
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
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
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    };

    /*
     * Mobile par section viewport se lamba ho sakta hai, isliye threshold
     * kam rakha hai — warna 35% kabhi dikhega hi nahi aur plane udega hi nahi.
     */
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        takeOff();
      },
      { threshold: 0.15 },
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
        className="relative w-full max-w-[1440px] h-[560px] sm:h-[620px] md:h-[600px] lg:h-[720px]"
      >
        {/* Text Container */}
        <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
          <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
            &ldquo;SPWF is a grassroots NGO empowering underprivileged children
            through education, skill development, care, and opportunities for a
            brighter future.&rdquo;
          </p>
        </div>

        {/* Tail dots — sab barabar, koi fade nahi */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          {Array.from({ length: DOT_COUNT }).map((_, i) => (
            <circle
              key={i}
              ref={(el) => (dotsRef.current[i] = el)}
              r="2.5"
              fill="white"
              style={{ opacity: 0 }}
            />
          ))}
        </svg>

        {/* Aeroplane */}
        <div
          ref={planeRef}
          style={{ transform: "translate3d(-24px, 0, 0) rotate(-8deg)" }}
          className="pointer-events-none absolute left-0 top-[70px] w-[84px] will-change-transform sm:top-[90px] sm:w-[104px] md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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
