// import React from "react";
// import programmesHero from "../../assets/images/programmes-hero.jpg";

// export default function HeroSection({
//   eyebrow = "Creating Opportunities For Every Child",
//   title = "Our Programmes",
//   image = programmesHero,
// }) {
//   return (
//     <section className="relative w-full flex justify-center overflow-hidden">
//       <div className="relative w-full max-w-[1440px] h-[520px] sm:h-[620px] md:h-[740px] lg:h-[868px]">
//         {/* Background photo */}
//         <img
//           src={image}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* Readability wash — matches the 25% radial in the design */}
//         <div
//           className="absolute inset-0 opacity-25"
//           style={{
//             background:
//               "radial-gradient(45.06% 45.06% at 50% 50%, #000 0%, rgba(0,0,0,0.6) 100%)",
//           }}
//         />

//         {/* Copy */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-[20px] text-center sm:px-[40px] lg:px-[166px]">
//           <span
//             className="
//               inline-block rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px]
//               px-[16px] py-[9px] sm:px-[20px] sm:py-[11px]
//               font-['Sora'] font-normal text-white
//               text-[12px] sm:text-[14px] lg:text-[16px]
//               leading-[100%] tracking-[-0.48px] capitalize
//             "
//           >
//             {eyebrow}
//           </span>

//           <h1
//             className="
//               mt-[18px] sm:mt-[22px] lg:mt-[28px]
//               font-['Sora'] font-normal text-white
//               text-[38px] sm:text-[52px] md:text-[66px] lg:text-[80px]
//               leading-[110%] tracking-[-2.4px]
//             "
//           >
//             {title}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React from "react";
// import programmesHero from "../../assets/images/programmes-hero.jpg";

// export default function HeroSection({
//   eyebrow = "Creating Opportunities For Every Child",
//   title = "Our Programmes",
//   image = programmesHero,
// }) {
//   return (
//     // <section className="relative w-full flex justify-center overflow-hidden">
//     <section className="relative w-full  overflow-hidden">
//       <div
//         className="
//           relative w-full max-w-[1440px]
//           aspect-[1440/868]
//           min-h-[460px] max-h-[92svh]
//         "
//       >
//         {/* Background photo */}
//         <img
//           src={image}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         {/* Readability wash — matches the 25% radial in the design */}
//         <div
//           className="absolute inset-0 opacity-25"
//           style={{
//             background:
//               "radial-gradient(45.06% 45.06% at 50% 50%, #000 0%, rgba(0,0,0,0.6) 100%)",
//           }}
//         />

//         {/* Copy — sits in the lower third, as in the Figma frame */}
//         <div className="absolute inset-0 flex flex-col items-center justify-end px-[20px] pb-[16%] text-center sm:px-[40px] lg:px-[166px]">
//           <span
//             className="
//               inline-block rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px]
//               px-[16px] py-[9px] sm:px-[20px] sm:py-[11px]
//               font-['Sora'] font-normal text-white
//               text-[12px] sm:text-[14px] lg:text-[16px]
//               leading-[100%] tracking-[-0.48px] capitalize
//             "
//           >
//             {eyebrow}
//           </span>

//           <h1
//             className="
//               mt-[16px] sm:mt-[20px] lg:mt-[26px]
//               font-['Sora'] font-normal text-white
//               text-[clamp(38px,5.55vw,80px)]
//               leading-[110%] tracking-[-2.4px]
//             "
//           >
//             {title}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";
import programmesHero from "../../assets/images/programmes-hero.jpg";

export default function HeroSection({
  eyebrow = "Creating Opportunities For Every Child",
  title = "Our Programmes",
  image = programmesHero,
}) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full aspect-[1440/868] min-h-[460px] max-h-[92svh]">
        {/* Background photo */}
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Readability wash — matches the 25% radial in the design */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(45.06% 45.06% at 50% 50%, #000 0%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Copy — sits in the lower third, as in the Figma frame */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-[20px] pb-[16%] text-center sm:px-[40px] lg:px-[166px]">
          <span
            className="
              inline-block rounded-full border border-white/80 bg-white/10 backdrop-blur-[2px]
              px-[16px] py-[9px] sm:px-[20px] sm:py-[11px]
              font-['Sora'] font-normal text-white
              text-[12px] sm:text-[14px] lg:text-[16px]
              leading-[100%] tracking-[-0.48px] capitalize
            "
          >
            {eyebrow}
          </span>

          <h1
            className="
              mt-[16px] sm:mt-[20px] lg:mt-[26px]
              font-['Sora'] font-normal text-white
              text-[clamp(38px,5.55vw,80px)]
              leading-[110%] tracking-[-2.4px]
            "
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
