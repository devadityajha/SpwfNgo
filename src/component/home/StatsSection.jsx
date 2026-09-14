// import React from "react";
// import notebookBg from "../../assets/images/notebook-bg.png";
// import doodleBg from "../../assets/images/doodle-bg.png";

// const stats = [
//   { value: "30+", caption: "Govt. school admits · 2023" },
//   { value: "130+", caption: "Govt. school admits · 2023" },
//   { value: "05+", caption: "Govt. school admits · 2023" },
//   { value: "250+", caption: "Govt. school admits · 2023" },
// ];

// function StatsSection() {
//   return (
//     <section className="relative w-full bg-[#F7C334] overflow-hidden flex flex-col items-center box-border px-4 py-16 xl:pt-[120px] xl:pb-[120px] xl:px-[40px] gap-10 xl:gap-[64px]">
//       {/* Background doodle */}
//       {notebookBg && (
//         <img
//           src={notebookBg}
//           alt=""
//           aria-hidden="true"
//           className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0"
//         />
//       )}

//       {/* Heading */}
//       <div className="relative z-10 flex items-center justify-center w-full max-w-[484px] xl:w-[484px] xl:h-[60px]">
//         <p className="font-['Satisfy'] text-[32px] md:text-[38px] xl:text-[44px] font-normal leading-[125%] tracking-[-0.02em] text-[#000000] m-0 text-center w-full">
//           <span className="font-['Satisfy']">Numbers</span> That Became Lives
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 flex flex-col xl:flex-row w-full max-w-[1360px] xl:w-[1360px] h-auto xl:h-[718px] gap-4 xl:gap-[16px] shrink-0">
//         {/* Left Card - Large */}
//         <div className="relative overflow-hidden rounded-[8px] bg-[#FFFFFF] shrink-0 w-full xl:w-[631px] h-[350px] md:h-[450px] xl:h-[718px]">
//           <img
//             src={doodleBg}
//             alt="Notebook background"
//             className="absolute inset-0 w-full h-full object-cover object-center block"
//           />
//           {/* Stats overlay */}
//           <div className="absolute top-0 left-0 w-full h-full p-6 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
//             <p className="relative xl:absolute xl:top-[77px] xl:left-[36px] font-['Sora'] text-[72px] md:text-[96px] xl:text-[112px] font-normal leading-tight xl:leading-[128px] tracking-[-0.02em] text-[#000000] m-0">
//               750+
//             </p>
//             <p className="relative xl:absolute xl:top-[202px] xl:left-[36px] font-['Inter'] text-[16px] xl:text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#000000] m-0 mt-2 xl:mt-0">
//               Govt. school admits · 2023
//             </p>
//           </div>
//         </div>

//         {/* Right Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[346.5px_346.5px] xl:grid-rows-[351px_351px] gap-4 xl:gap-x-[16px] xl:gap-y-[16px] shrink-0 w-full xl:w-[709px] h-auto xl:h-[718px]">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="relative overflow-hidden rounded-[8px] bg-[#FDFDFD] w-full xl:w-[346.5px] h-[200px] md:h-[250px] xl:h-[351px]"
//             >
//               <img
//                 src={doodleBg}
//                 alt="Notebook background"
//                 className="absolute inset-0 w-full h-full object-cover object-center block"
//               />
//               <div className="absolute top-0 left-0 w-full h-full p-5 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
//                 <p className="relative xl:absolute xl:top-[61px] xl:left-[20px] font-['Sora'] text-[48px] md:text-[56px] xl:text-[64px] font-normal leading-[100%] tracking-[-0.02em] text-[#000000] m-0">
//                   {stat.value}
//                 </p>
//                 <p className="relative xl:absolute xl:top-[125px] xl:left-[21px] font-['Inter'] text-[14px] md:text-[16px] xl:text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#000000] m-0 mt-1 xl:mt-0">
//                   {stat.caption}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StatsSection;

import React, { useEffect, useRef } from "react";
import notebookBg from "../../assets/images/notebook-bg.png";
import doodleBg from "../../assets/images/doodle-bg.png";

const stats = [
  { value: "30+", caption: "Govt. school admits · 2023" },
  { value: "130+", caption: "Govt. school admits · 2023" },
  { value: "05+", caption: "Govt. school admits · 2023" },
  { value: "250+", caption: "Govt. school admits · 2023" },
];

const ANIM_CSS = `
.stats-anim [data-card]{
  opacity:0;
  transform:translate3d(0,44px,0) scale(.97);
  clip-path:inset(0 0 100% 0 round 8px);
  transition:
    opacity .8s cubic-bezier(.16,1,.3,1),
    transform 1s cubic-bezier(.16,1,.3,1),
    clip-path 1.05s cubic-bezier(.16,1,.3,1);
  will-change:opacity,transform,clip-path;
}
.stats-anim [data-card].is-in{
  opacity:1;
  transform:none;
  clip-path:inset(0 0 0 0 round 8px);
}

.stats-anim [data-reveal]{
  opacity:0;
  transform:translate3d(0,22px,0);
  transition:opacity .8s cubic-bezier(.16,1,.3,1), transform .9s cubic-bezier(.16,1,.3,1);
}
.stats-anim [data-reveal].is-in{opacity:1;transform:none;}

.stats-anim .stat-num{
  filter:blur(14px);
  opacity:.25;
  transition:filter 1s cubic-bezier(.16,1,.3,1), opacity 1s cubic-bezier(.16,1,.3,1);
  will-change:filter,opacity;
}
.stats-anim .stat-num.is-counting{filter:blur(0);opacity:1;}

@media (prefers-reduced-motion:reduce){
  .stats-anim [data-card],
  .stats-anim [data-reveal]{opacity:1;transform:none;clip-path:none;transition:none;}
  .stats-anim .stat-num{filter:none;opacity:1;transition:none;}
}
`;

function CountUp({ value, className, duration = 1800, delay = 0 }) {
  const ref = useRef(null);
  const started = useRef(false);

  const match = String(value).match(/^(\d+)(.*)$/);
  const digits = match ? match[1] : "0";
  const suffix = match ? match[2] : "";
  const target = parseInt(digits, 10);
  const pad = digits.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      el.textContent = digits + suffix;
      el.classList.add("is-counting");
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();

        const begin = performance.now() + delay;
        const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

        const frame = (now) => {
          const elapsed = now - begin;
          if (elapsed < 0) {
            requestAnimationFrame(frame);
            return;
          }
          if (elapsed === 0 || !el.classList.contains("is-counting")) {
            el.classList.add("is-counting");
          }
          const p = Math.min(elapsed / duration, 1);
          const val = Math.round(easeOutExpo(p) * target);
          el.textContent = String(val).padStart(pad, "0") + suffix;
          if (p < 1) requestAnimationFrame(frame);
        };
        requestAnimationFrame(frame);
      },
      { threshold: 0.35 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [digits, suffix, target, pad, duration, delay]);

  return (
    <span ref={ref} className={`stat-num ${className || ""}`}>
      {"0".padStart(pad, "0") + suffix}
    </span>
  );
}

function StatsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll("[data-card],[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );

    nodes.forEach((n) => io.observe(n));

    const failsafe = setTimeout(() => {
      nodes.forEach((n) => n.classList.add("is-in"));
    }, 1200);

    return () => {
      io.disconnect();
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-anim relative w-full bg-[#F7C334] overflow-hidden flex flex-col items-center box-border px-4 py-16 xl:pt-[120px] xl:pb-[120px] xl:px-[40px] gap-10 xl:gap-[64px]"
    >
      <style>{ANIM_CSS}</style>

      {/* Background doodle */}
      {notebookBg && (
        <img
          src={notebookBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-0 left-0 w-full h-auto pointer-events-none z-0"
        />
      )}

      {/* Heading */}
      <div
        data-reveal
        className="relative z-10 flex items-center justify-center w-full max-w-[484px] xl:w-[484px] xl:h-[60px]"
      >
        <p className="font-['Satisfy'] text-[32px] md:text-[38px] xl:text-[44px] font-normal leading-[125%] tracking-[-0.02em] text-[#000000] m-0 text-center w-full">
          <span className="font-['Satisfy']">Numbers</span> That Became Lives
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col xl:flex-row w-full max-w-[1360px] xl:w-[1360px] h-auto xl:h-[718px] gap-4 xl:gap-[16px] shrink-0">
        {/* Left Card - Large */}
        <div
          data-card
          style={{ transitionDelay: "0ms" }}
          className="relative overflow-hidden rounded-[8px] bg-[#FFFFFF] shrink-0 w-full xl:w-[631px] h-[350px] md:h-[450px] xl:h-[718px]"
        >
          <img
            src={doodleBg}
            alt="Notebook background"
            className="absolute inset-0 w-full h-full object-cover object-center block"
          />
          {/* Stats overlay */}
          <div className="absolute top-0 left-0 w-full h-full p-6 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
            <p className="relative xl:absolute xl:top-[77px] xl:left-[36px] font-['Sora'] text-[72px] md:text-[96px] xl:text-[112px] font-normal leading-tight xl:leading-[128px] tracking-[-0.02em] text-[#000000] m-0">
              <CountUp value="750+" duration={2000} />
            </p>
            <p className="relative xl:absolute xl:top-[202px] xl:left-[36px] font-['Inter'] text-[16px] xl:text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#000000] m-0 mt-2 xl:mt-0">
              Govt. school admits · 2023
            </p>
          </div>
        </div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[346.5px_346.5px] xl:grid-rows-[351px_351px] gap-4 xl:gap-x-[16px] xl:gap-y-[16px] shrink-0 w-full xl:w-[709px] h-auto xl:h-[718px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-card
              style={{ transitionDelay: `${120 + index * 90}ms` }}
              className="relative overflow-hidden rounded-[8px] bg-[#FDFDFD] w-full xl:w-[346.5px] h-[200px] md:h-[250px] xl:h-[351px]"
            >
              <img
                src={doodleBg}
                alt="Notebook background"
                className="absolute inset-0 w-full h-full object-cover object-center block"
              />
              <div className="absolute top-0 left-0 w-full h-full p-5 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
                <p className="relative xl:absolute xl:top-[61px] xl:left-[20px] font-['Sora'] text-[48px] md:text-[56px] xl:text-[64px] font-normal leading-[100%] tracking-[-0.02em] text-[#000000] m-0">
                  <CountUp
                    value={stat.value}
                    duration={1600}
                    delay={200 + index * 90}
                  />
                </p>
                <p className="relative xl:absolute xl:top-[125px] xl:left-[21px] font-['Inter'] text-[14px] md:text-[16px] xl:text-[18px] font-semibold leading-[26px] tracking-[-0.01em] text-[#000000] m-0 mt-1 xl:mt-0">
                  {stat.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
