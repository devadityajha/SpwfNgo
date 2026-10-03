// import React, { useEffect, useRef } from "react";

// const DURATION = 4000; // total flight time in ms
// const DOT_COUNT = 10; // tail me kitne dots
// const FADE_COUNT = 4; // aakhri kitne dots dheere-dheere gayab hon
// const LUT_SAMPLES = 400; // path ki lambai naapne ki sharpness

// // plane ke box me uski poonch (rear edge ka beech) — yahin se tail nikalti hai
// const TAIL_X = 0.742;
// const TAIL_Y = 0.467;

// export default function MissionBanner() {
//   const stageRef = useRef(null);
//   const planeRef = useRef(null);
//   const dotsRef = useRef([]);
//   const posRef = useRef({
//     start: -24,
//     end: -24,
//     amp: 60,
//     climb: 10,
//     waves: 4,
//     dotSpacing: 24,
//     dotRadius: 2.5,
//   });
//   const lutRef = useRef({ ds: [], total: 0 });
//   const rafRef = useRef(0);
//   const progressRef = useRef(0);
//   const lastWidthRef = useRef(0);

//   // snake steady chalta hai, isliye koi easing nahi — seedha linear
//   const pathX = (p) => {
//     const { start, end } = posRef.current;
//     return start + (end - start) * p;
//   };

//   const pathY = (p) => {
//     const { amp, climb, waves } = posRef.current;
//     // sin(p * π * waves) start aur end dono par 0 hota hai, to landing level rehti hai
//     return -climb * p + amp * Math.sin(p * Math.PI * waves);
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

//     progressRef.current = p;

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

//     // dots plane ki poonch se nikalte hain, nose ya beech se nahi
//     const baseX = plane.offsetLeft + plane.offsetWidth * TAIL_X;
//     const baseY = plane.offsetTop + plane.offsetHeight * TAIL_Y;
//     const headDist = distAt(p);
//     const { dotSpacing, dotRadius } = posRef.current;
//     const fadeFrom = DOT_COUNT - FADE_COUNT;

//     dotsRef.current.forEach((dot, i) => {
//       if (!dot) return;

//       const d = headDist - (i + 1) * dotSpacing;

//       if (d <= 0) {
//         dot.style.opacity = "0";
//         return;
//       }

//       const t = tAtDist(d);
//       dot.setAttribute("r", dotRadius.toFixed(2));
//       dot.setAttribute("cx", (baseX + pathX(t)).toFixed(1));
//       dot.setAttribute("cy", (baseY + pathY(t)).toFixed(1));

//       // poonch ke aakhri dots halke hote jaate hain
//       const fade = i < fadeFrom ? 1 : (DOT_COUNT - i) / (FADE_COUNT + 1);
//       dot.style.opacity = fade.toFixed(2);
//     });
//   };

//   // start: plane left edge se thoda bahar
//   // end:   right edge se thoda bahar — dono taraf barabar bleed
//   useEffect(() => {
//     const measure = () => {
//       const stage = stageRef.current;
//       const plane = planeRef.current;
//       if (!stage || !plane) return;

//       const width = stage.clientWidth;

//       /*
//        * Mobile browsers URL bar chhupate-dikhate waqt resize fire karte hain,
//        * jisme sirf height badalti hai. Us par dobara measure karenge to
//        * udta hua plane beech me hi reset ho jayega — isliye width same ho
//        * to kuch mat karo.
//        */
//       if (width === lastWidthRef.current) return;
//       lastWidthRef.current = width;

//       const isNarrow = width < 768;

//       /*
//        * Sab kuch width ke anupaat me — isse har screen par ek jaisa dikhta hai.
//        * Mobile par path chhota hota hai, isliye waves kam aur amplitude ka
//        * anupaat zyada, warna lehar dikhti hi nahi.
//        */
//       posRef.current = {
//         start: -plane.offsetWidth * 0.68,
//         end: width - plane.offsetWidth * 0.68,
//         amp: width * (isNarrow ? 0.045 : 0.022), // wave kitni gehri
//         climb: width * 0.007, // overall upar chadhna
//         waves: isNarrow ? 2 : 4, // kitni baar lehraayega
//         dotSpacing: Math.max(width * 0.016, 9), // dots ke beech faasla
//         dotRadius: Math.max(width * 0.0017, 1.8),
//       };

//       buildLut();
//       draw(progressRef.current);
//     };

//     measure();
//     window.addEventListener("resize", measure);
//     window.addEventListener("orientationchange", measure);
//     return () => {
//       window.removeEventListener("resize", measure);
//       window.removeEventListener("orientationchange", measure);
//     };
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
//         }
//       };

//       rafRef.current = requestAnimationFrame(tick);
//     };

//     /*
//      * Mobile par section viewport se lamba ho sakta hai, isliye threshold
//      * kam rakha hai — warna 35% kabhi dikhega hi nahi aur plane udega hi nahi.
//      */
//     const io = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry.isIntersecting) return;
//         io.disconnect();
//         takeOff();
//       },
//       { threshold: 0.15 },
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
//         className="relative w-full max-w-[1440px] h-[560px] sm:h-[620px] md:h-[600px] lg:h-[720px]"
//       >
//         {/* Text Container */}
//         <div className="absolute left-1/2 top-1/2 flex w-full max-w-[966px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6 md:px-8">
//           <p className="w-full text-center font-['Sora'] font-semibold tracking-[-0.04em] text-white text-[24px] leading-[34px] md:text-[30px] md:leading-[42px] lg:text-[40px] lg:leading-[56px]">
//             &ldquo;SPWF is a grassroots NGO empowering underprivileged children
//             through education, skill development, care, and opportunities for a
//             brighter future.&rdquo;
//           </p>
//         </div>

//         {/* Tail dots — aakhri chaar halke hote jaate hain */}
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
//           className="pointer-events-none absolute left-0 top-[70px] w-[84px] will-change-transform sm:top-[90px] sm:w-[104px] md:top-[130px] md:w-[152px] lg:top-[150px] lg:w-[182px]"
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
const FADE_COUNT = 4; // aakhri kitne dots dheere-dheere gayab hon
const LUT_SAMPLES = 400; // path ki lambai naapne ki sharpness

// plane ke box me uski poonch (rear edge ka beech) — yahin se tail nikalti hai
const TAIL_X = 0.742;
const TAIL_Y = 0.467;

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

    // dots plane ki poonch se nikalte hain, nose ya beech se nahi
    const baseX = plane.offsetLeft + plane.offsetWidth * TAIL_X;
    const baseY = plane.offsetTop + plane.offsetHeight * TAIL_Y;
    const headDist = distAt(p);
    const { dotSpacing, dotRadius } = posRef.current;
    const fadeFrom = DOT_COUNT - FADE_COUNT;

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

      // poonch ke aakhri dots halke hote jaate hain
      const fade = i < fadeFrom ? 1 : (DOT_COUNT - i) / (FADE_COUNT + 1);
      dot.style.opacity = fade.toFixed(2);
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

      /*
       * Sab kuch width ke anupaat me — start, end aur waves har screen par
       * ek jaise. Mobile par sirf lehar thodi halki rakhi hai, warna chhoti
       * screen par swing bahut bada lagta hai.
       */
      const isNarrow = width < 768;

      posRef.current = {
        start: -plane.offsetWidth * 0.68,
        //  end: width - plane.offsetWidth * 0.68,
        // end: width - plane.offsetWidth * 0.95,
        //  end: width - plane.offsetWidth * 1.3,
        end: width - plane.offsetWidth * (isNarrow ? 1.3 : 0.68),
        // pehla no. laptop ke liye 2nd phone
        amp: width * (isNarrow ? 0.016 : 0.022), // wave kitni gehri
        climb: width * 0.007, // overall upar chadhna
        waves: 4, // kitni baar lehraayega
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

        {/* Tail dots — aakhri chaar halke hote jaate hain */}
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
