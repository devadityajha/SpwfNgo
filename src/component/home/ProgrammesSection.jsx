// import React from "react";
// import shiksharth from "../../assets/images/shiksharth.png";
// import kaushal from "../../assets/images/kaushal.png";
// import aahar from "../../assets/images/aahar.png";

// const programs = [
//   {
//     number: "1.",
//     name: "Shiksharth",
//     image: shiksharth,
//     bgColor: "#FF5255",
//     description:
//       "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
//   },
//   {
//     number: "2.",
//     name: "Kaushal Utthan",
//     image: kaushal,
//     bgColor: "#D4F53C",
//     description:
//       "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
//   },
//   {
//     number: "3.",
//     name: "Aahar",
//     image: aahar,
//     bgColor: "#CC66FF",
//     description:
//       "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
//   },
// ];

// function ProgramsSection() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         backgroundColor: "#FFFFFF",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         paddingTop: "120px",
//         paddingBottom: "120px",
//         gap: "64px",
//       }}
//     >
//       {/* Heading */}
//       {/* <div
//         style={{
//           width: "610px",
//           height: "98px",
//           textAlign: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <p
//           style={{
//             fontFamily: "'Satisfy', cursive",
//             fontSize: "44px",
//             fontWeight: 400,
//             lineHeight: "120%",
//             letterSpacing: "-0.02em",
//             color: "#000000",
//             margin: 0,
//             textAlign: "center",
//           }}
//         >
//           <span style={{ letterSpacing: "-0.03em" }}>Changing Childhoods,</span>{" "}
//           One Program
//           <br />
//           At A Time
//         </p>
//       </div> */}

//       <div
//         style={{
//           width: "610px",
//           height: "98px",
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "baseline",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             width: "610px",
//             textAlign: "center",
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "'Satisfy', cursive",
//               fontSize: "44px",
//               fontWeight: 400,
//               lineHeight: "120%",
//               letterSpacing: "-0.03em",
//               color: "#000000",
//             }}
//           >
//             Changing Childhoods,
//           </span>
//           <span
//             style={{
//               fontFamily: "'Sora', sans-serif",
//               fontSize: "40px",
//               fontWeight: 400,
//               lineHeight: "125%",
//               letterSpacing: "-0.03em",
//               color: "#000000",
//               marginLeft: "8px",
//             }}
//           >
//             One Program
//           </span>
//         </div>

//         <div
//           style={{
//             fontFamily: "'Sora', sans-serif",
//             fontSize: "40px",
//             fontWeight: 400,
//             lineHeight: "125%",
//             letterSpacing: "-0.03em",
//             color: "#000000",
//             textAlign: "center",
//             marginTop: "-4px",
//           }}
//         >
//           At A Time
//         </div>
//       </div>
//       {/* Programs List */}
//       <div
//         style={{
//           width: "1360px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         {programs.map((program, index) => (
//           <div
//             key={index}
//             style={{
//               width: "1360px",
//               height: "472px",
//               display: "flex",
//               flexDirection: "row",
//               justifyContent: "space-between",
//               alignItems: "center",
//               paddingTop: "76px",
//               paddingBottom: "76px",
//               borderTop: "1px solid #DBDBDB",
//               borderBottom: "1px solid #DBDBDB",
//               boxSizing: "border-box",
//             }}
//           >
//             {/* Program Name - Left */}
//             <div
//               style={{
//                 width: "281px",
//                 flexShrink: 0,
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "'Sora', sans-serif",
//                   fontSize: "32px",
//                   fontWeight: 400,
//                   lineHeight: "100%",
//                   letterSpacing: "-0.03em",
//                   color: "#000000",
//                   margin: 0,
//                 }}
//               >
//                 {program.number} {program.name}
//               </p>
//             </div>

//             {/* Center Card - 320×320 */}
//             <div
//               style={{
//                 width: "320px",
//                 height: "320px",
//                 borderRadius: "40px",
//                 backgroundColor: program.bgColor,
//                 flexShrink: 0,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src={program.image}
//                 alt={program.name}
//                 style={{
//                   width: "206.01px",
//                   height: "178.04px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>

//             {/* Description - Right */}
//             <div
//               style={{
//                 width: "462px",
//                 height: "218px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "60px",
//                 flexShrink: 0,
//               }}
//             >
//               <p
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "20px",
//                   fontWeight: 400,
//                   lineHeight: "150%",
//                   letterSpacing: "-0.03em",
//                   color: "#515151",
//                   margin: 0,
//                 }}
//               >
//                 {program.description}
//               </p>

//               <a
//                 href="#"
//                 style={{
//                   fontFamily: "'Inter', sans-serif",
//                   fontSize: "16px",
//                   fontWeight: 400,
//                   color: "#000000",
//                   textDecoration: "none",
//                   borderBottom: "1px solid #000000",
//                   paddingBottom: "4px",
//                   display: "inline-flex",
//                   alignItems: "center",
//                   gap: "8px",
//                   width: "fit-content",
//                 }}
//               >
//                 Learn More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProgramsSection;

import React from "react";
import shiksharth from "../../assets/images/shiksharth.png";
import kaushal from "../../assets/images/kaushal.png";
import aahar from "../../assets/images/aahar.png";

const programs = [
  {
    number: "1.",
    name: "Shiksharth",
    image: shiksharth,
    bgColor: "#FF5255",
    description:
      "Helping children build strong learning foundations through engaging lessons, personalized attention, and a supportive environment where curiosity thrives.",
  },
  {
    number: "2.",
    name: "Kaushal Utthan",
    image: kaushal,
    bgColor: "#D4F53C",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
  {
    number: "3.",
    name: "Aahar",
    image: aahar,
    bgColor: "#CC66FF",
    description:
      "From creative arts to practical life skills, Kaushal Utthan helps children discover their talents, build confidence, and prepare for a more independent future.",
  },
];

function ProgramsSection() {
  return (
    <section className="w-full bg-[#FFFFFF] flex flex-col items-center pt-16 pb-16 lg:pt-[120px] lg:pb-[120px] gap-10 lg:gap-[64px] px-4 lg:px-0 overflow-hidden">
      {/* Heading */}
      <div className="w-full max-w-[610px] lg:w-[610px] lg:h-[98px] flex flex-col items-center justify-center">
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
            // Adding a bottom border only to the last element to prevent double-thick borders between items, matching your exact box model
            style={{
              borderBottom:
                index === programs.length - 1 ? "1px solid #DBDBDB" : "none",
            }}
          >
            {/* Program Name - Left */}
            <div className="w-full lg:w-[281px] shrink-0">
              <p
                style={{ fontFamily: "'Sora', sans-serif" }}
                className="text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[100%] tracking-[-0.03em] text-[#000000] m-0"
              >
                {program.number} {program.name}
              </p>
            </div>

            {/* Center Card - 320×320 */}
            <div
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
            <div className="w-full lg:w-[462px] h-auto lg:h-[218px] flex flex-col gap-6 lg:gap-[60px] shrink-0 justify-center">
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[150%] tracking-[-0.03em] text-[#515151] m-0"
              >
                {program.description}
              </p>

              <a
                href="#"
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[14px] lg:text-[16px] font-normal text-[#000000] no-underline border-b border-[#000000] pb-[4px] inline-flex items-center gap-[8px] w-fit hover:opacity-70 transition-opacity"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
