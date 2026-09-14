// import React from "react";
// import shiksharth from "../../assets/images/shiksharth.png";
// import kaushal from "../../assets/images/kaushal.png";
// import aahar from "../../assets/images/aahar.png";
// import { Link } from "react-router-dom";

// const programs = [
//   {
//     number: "1.",
//     name: "Shiksharth",
//     slug: "shiksharth",
//     image: shiksharth,
//     bgColor: "#FF5255",
//     description:
//       "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
//   },
//   {
//     number: "2.",
//     name: "Kaushal Utthan",
//     image: kaushal,
//     slug: "kaushal-utthan",
//     bgColor: "#D4F53C",
//     description:
//       "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
//   },
//   {
//     number: "3.",
//     name: "Aahar",
//     slug: "aahar",
//     image: aahar,
//     bgColor: "#CC66FF",
//     description:
//       "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
//   },
// ];

// function ProgramsSection() {
//   return (
//     <section className="w-full bg-[#FFFFFF] flex flex-col items-center pt-16 pb-16 lg:pt-[120px] lg:pb-[120px] gap-10 lg:gap-[64px] px-4 lg:px-0 overflow-hidden">
//       {/* Heading */}
//       <div className="w-full max-w-[610px] lg:w-[610px] lg:h-[98px] flex flex-col items-center justify-center">
//         <div className="flex items-baseline justify-center flex-wrap w-full lg:w-[610px] text-center gap-x-2">
//           <span
//             style={{ fontFamily: "'Satisfy', cursive" }}
//             className="text-[32px] md:text-[38px] lg:text-[44px] font-normal leading-[120%] tracking-[-0.03em] text-[#000000]"
//           >
//             Changing Childhoods,
//           </span>
//           <span
//             style={{ fontFamily: "'Sora', sans-serif" }}
//             className="text-[28px] md:text-[34px] lg:text-[40px] font-normal leading-[125%] tracking-[-0.03em] text-[#000000]"
//           >
//             One Program
//           </span>
//         </div>

//         <div
//           style={{ fontFamily: "'Sora', sans-serif" }}
//           className="text-[28px] md:text-[34px] lg:text-[40px] font-normal leading-[125%] tracking-[-0.03em] text-[#000000] text-center mt-0 lg:-mt-[4px]"
//         >
//           At A Time
//         </div>
//       </div>

//       {/* Programs List */}
//       <div className="w-full lg:w-[1360px] flex flex-col">
//         {programs.map((program, index) => (
//           <div
//             key={index}
//             className="w-full lg:w-[1360px] h-auto lg:h-[472px] flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 lg:pt-[76px] lg:pb-[76px] border-t border-[#DBDBDB] -mt-[1px] gap-8 lg:gap-0"
//             // Adding a bottom border only to the last element to prevent double-thick borders between items, matching your exact box model
//             style={{
//               borderBottom:
//                 index === programs.length - 1 ? "1px solid #DBDBDB" : "none",
//             }}
//           >
//             {/* Program Name - Left */}
//             <div className="w-full lg:w-[281px] shrink-0">
//               <p
//                 style={{ fontFamily: "'Sora', sans-serif" }}
//                 className="text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[100%] tracking-[-0.03em] text-[#000000] m-0"
//               >
//                 {program.number} {program.name}
//               </p>
//             </div>

//             {/* Center Card - 320×320 */}
//             <div
//               style={{ backgroundColor: program.bgColor }}
//               className="w-full max-w-[320px] aspect-square lg:w-[320px] lg:h-[320px] rounded-[40px] shrink-0 flex items-center justify-center overflow-hidden mx-auto lg:mx-0"
//             >
//               <img
//                 src={program.image}
//                 alt={program.name}
//                 className="w-[180px] lg:w-[206.01px] h-auto lg:h-[178.04px] object-contain"
//               />
//             </div>

//             {/* Description - Right */}
//             <div className="w-full lg:w-[462px] h-auto lg:h-[218px] flex flex-col gap-6 lg:gap-[60px] shrink-0 justify-center">
//               <p
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//                 className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[-0.03em] text-[#515151] m-0"
//               >
//                 {program.description}
//               </p>

//               <Link
//                 to={`/programs/${program.slug}`}
//                 style={{ fontFamily: "'Inter', sans-serif" }}
//                 className="group text-[14px] lg:text-[16px] font-normal text-[#000000] no-underline border-b border-[#000000] pb-[4px] inline-flex items-center gap-[8px] w-fit hover:opacity-70 transition-opacity"
//               >
//                 Learn More
//                 <span
//                   aria-hidden="true"
//                   className="transition-transform duration-300 ease-out group-hover:translate-x-1"
//                 >
//                   →
//                 </span>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProgramsSection;

import React, { useEffect, useRef } from "react";
import shiksharth from "../../assets/images/shiksharth.png";
import kaushal from "../../assets/images/kaushal.png";
import aahar from "../../assets/images/aahar.png";
import { Link } from "react-router-dom";

const programs = [
  {
    number: "1.",
    name: "Shiksharth",
    slug: "shiksharth",
    image: shiksharth,
    bgColor: "#FF5255",
    description:
      "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
  },
  {
    number: "2.",
    name: "Kaushal Utthan",
    image: kaushal,
    slug: "kaushal-utthan",
    bgColor: "#D4F53C",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
  {
    number: "3.",
    name: "Aahar",
    slug: "aahar",
    image: aahar,
    bgColor: "#CC66FF",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
];

const ANIM_CSS = `
.ps-anim [data-reveal]{
  opacity:0;
  transform:translate3d(0,28px,0);
  transition:opacity .9s cubic-bezier(.16,1,.3,1), transform 1.1s cubic-bezier(.16,1,.3,1);
  will-change:opacity,transform;
}
.ps-anim [data-reveal].is-in{opacity:1;transform:none;}

.ps-anim [data-reveal="left"]{transform:translate3d(-44px,0,0);}
.ps-anim [data-reveal="card"]{transform:translate3d(0,34px,0) scale(.94);transition-delay:.08s;}
.ps-anim [data-reveal="right"]{transform:translate3d(44px,0,0);transition-delay:.16s;}
.ps-anim [data-reveal="left"].is-in,
.ps-anim [data-reveal="card"].is-in,
.ps-anim [data-reveal="right"].is-in{transform:none;}

@media (max-width:1023px){
  .ps-anim [data-reveal="left"]{transform:translate3d(0,24px,0);}
  .ps-anim [data-reveal="right"]{transform:translate3d(0,24px,0);}
}
@media (prefers-reduced-motion:reduce){
  .ps-anim [data-reveal]{opacity:1;transform:none;transition:none;}
}
`;

function ProgramsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll("[data-reveal]");

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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.15 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ps-anim w-full bg-[#FFFFFF] flex flex-col items-center pt-16 pb-16 lg:pt-[120px] lg:pb-[120px] gap-10 lg:gap-[64px] px-4 lg:px-0 overflow-hidden"
    >
      <style>{ANIM_CSS}</style>

      {/* Heading */}
      <div
        data-reveal
        className="w-full max-w-[610px] lg:w-[610px] lg:h-[98px] flex flex-col items-center justify-center"
      >
        <div className="flex items-baseline justify-center flex-wrap w-full lg:w-[610px] text-center gap-x-2">
          <span
            style={{ fontFamily: "'Satisfy', cursive" }}
            className="text-[32px] md:text-[38px] lg:text-[44px] font-normal leading-[120%] tracking-[-0.03em] text-[#000000]"
          >
            Changing Childhoods,
          </span>
          <span
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-[28px] md:text-[34px] lg:text-[40px] font-normal leading-[125%] tracking-[-0.03em] text-[#000000]"
          >
            One Program
          </span>
        </div>

        <div
          style={{ fontFamily: "'Sora', sans-serif" }}
          className="text-[28px] md:text-[34px] lg:text-[40px] font-normal leading-[125%] tracking-[-0.03em] text-[#000000] text-center mt-0 lg:-mt-[4px]"
        >
          At A Time
        </div>
      </div>

      {/* Programs List */}
      <div className="w-full lg:w-[1360px] flex flex-col">
        {programs.map((program, index) => (
          <div
            key={index}
            className="w-full lg:w-[1360px] h-auto lg:h-[472px] flex flex-col lg:flex-row justify-between items-start lg:items-center py-10 lg:pt-[76px] lg:pb-[76px] border-t border-[#DBDBDB] -mt-[1px] gap-8 lg:gap-0"
            style={{
              borderBottom:
                index === programs.length - 1 ? "1px solid #DBDBDB" : "none",
            }}
          >
            {/* Program Name - Left */}
            <div data-reveal="left" className="w-full lg:w-[281px] shrink-0">
              <p
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[100%] tracking-[-0.03em] text-[#000000] m-0"
              >
                {program.number} {program.name}
              </p>
            </div>

            {/* Center Card - 320×320 */}
            <div
              data-reveal="card"
              style={{ backgroundColor: program.bgColor }}
              className="w-full max-w-[320px] aspect-square lg:w-[320px] lg:h-[320px] rounded-[40px] shrink-0 flex items-center justify-center overflow-hidden mx-auto lg:mx-0"
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-[180px] lg:w-[206.01px] h-auto lg:h-[178.04px] object-contain"
              />
            </div>

            {/* Description - Right */}
            <div
              data-reveal="right"
              className="w-full lg:w-[462px] h-auto lg:h-[218px] flex flex-col gap-6 lg:gap-[60px] shrink-0 justify-center"
            >
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[-0.03em] text-[#515151] m-0"
              >
                {program.description}
              </p>

              <Link
                to={`/programs/${program.slug}`}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="group text-[14px] lg:text-[16px] font-normal text-[#000000] no-underline border-b border-[#000000] pb-[4px] inline-flex items-center gap-[8px] w-fit hover:opacity-70 transition-opacity"
              >
                Learn More
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
