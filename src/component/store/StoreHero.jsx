import storeHero from "../../assets/images/storeHero.png";

const StoreHero = () => {
  return (
    /* Frame 2147226733 */
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[500px] lg:h-[578px]">
      <img
        src={storeHero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Rectangle 34627263 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(45.06% 45.06% at 50% 50%, #000000 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Frame 5 */}
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-5 text-center mt-32  ">
        {/* Hero transcript row */}
        <div className="flex items-center justify-center gap-2 rounded-[48px] border border-[#DCDCDC] bg-black/30 px-5 py-1 backdrop-blur-[2px]">
          <span className="font-['Inter'] text-[13px] font-normal capitalize leading-[26px] tracking-[-0.14px] text-[#FFFFFF] sm:text-[14px]">
            Products with a purpose
          </span>
        </div>

        {/* Hero section subtitle */}
        <h1 className="font-['Sora'] text-[36px] font-normal capitalize leading-[100%] tracking-[-1.44px] text-[#FFFFFF] sm:text-[48px] sm:tracking-[-1.92px] lg:text-[60px] lg:tracking-[-2.4px]">
          Our store
        </h1>
      </div>
    </section>
  );
};

export default StoreHero;

// import React from "react";

// export default function HeroSection({
//   eyebrow = "Products With A Purpose",
//   title = "Our Store",
//   image = storeHero,
// }) {
//   return (
//     <section className="relative w-full overflow-hidden">
//       {/* Frame: 1440 × 653 */}
//       <div className="relative w-full aspect-[1440/653] min-h-[360px] max-h-[88svh]">
//         <img
//           src={image}
//           alt=""
//           aria-hidden="true"
//           className="absolute inset-0 h-full w-full object-cover object-top"
//         />

//         {/* Rectangle 34627263 — opacity 16%, radial 45.06% */}
//         <div
//           className="absolute inset-0 opacity-[0.16]"
//           style={{
//             background:
//               "radial-gradient(45.06% 45.06% at 50% 50%, #000 0%, rgba(0,0,0,0.6) 100%)",
//           }}
//         />

//         {/* Frame 5 — centred, column, gap 16 */}
//         <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[10px] px-[19px] lg:gap-[16px]">
//           {/* Hero transcript row — radius 48, padding 4px 20px, border 1px #DCDCDC, bg #000 30%, blur 2px */}
//           <span
//             className="
//               flex items-center justify-center whitespace-nowrap
//               rounded-[48px] border border-[#DCDCDC] bg-black/30 backdrop-blur-[2px]
//               px-[16px] py-[4px] lg:px-[20px]
//               font-['Sora'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white
//               lg:text-[14px]
//             "
//           >
//             {eyebrow}
//           </span>

//           {/* Hero title — Sora 60px / 100% / -2.4px / capitalize */}
//           <h1 className="m-0 text-center font-['Sora'] font-normal capitalize text-white text-[clamp(34px,4.17vw,60px)] leading-[100%] tracking-[-2.4px]">
//             {title}
//           </h1>
//         </div>
//       </div>
//     </section>
//   );
// }
