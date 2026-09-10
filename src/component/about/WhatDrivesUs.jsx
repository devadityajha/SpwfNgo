// import colorfulHands from "../../assets/images/colorful-hands.png";
// export default function WhatDrivesUs() {
//   return (
//     <section className="relative w-full h-[800px] bg-white overflow-hidden">
//       <div className="grid grid-cols-2 h-full">
//         {/* Left content column */}
//         <div className="relative flex items-center">
//           <div
//             className="flex flex-col gap-[40px]"
//             style={{ marginLeft: "48px", width: "474px" }}
//           >
//             <h2
//               className="font-['Sora'] font-normal text-black"
//               style={{
//                 fontSize: "40px",
//                 lineHeight: "120%",
//                 letterSpacing: "-0.05em",
//               }}
//             >
//               What{" "}
//               <span
//                 className="font-['Satisfy'] font-normal"
//                 style={{
//                   fontSize: "44px",
//                   lineHeight: "120%",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 Drives
//               </span>{" "}
//               Us
//             </h2>

//             <p
//               className="font-['Inter'] font-normal"
//               style={{
//                 width: "474px",
//                 fontSize: "20px",
//                 lineHeight: "150%",
//                 letterSpacing: "-0.03em",
//                 color: "#515151",
//               }}
//             >
//               Our mission is to empower underprivileged children through
//               education, skill development, nutrition, and holistic care. We
//               strive to create safe and nurturing environments where every child
//               can learn, grow, build confidence, and unlock their full
//               potential, regardless of their socio-economic background.
//             </p>
//           </div>
//         </div>

//         {/* Right image column */}
//         <div className="relative overflow-hidden">
//           <img
//             src={colorfulHands}
//             alt="Children painting with colorful hands"
//             className="absolute object-cover"
//             style={{
//               width: "1160px",
//               height: "1160px",
//               top: "-96px",
//               left: "-184px",
//               maxWidth: "none",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import colorfulHands from "../../assets/images/colorful-hands.png";

export default function WhatDrivesUs() {
  return (
    <section className="relative w-full h-auto lg:h-[800px] bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left content column */}
        <div className="relative flex items-center order-2 lg:order-1 px-6 py-12 sm:px-10 lg:px-0 lg:py-0">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] w-full max-w-[474px] mx-auto lg:mx-0 lg:ml-[48px]">
            <h2 className="font-['Sora'] font-normal text-black text-[28px] sm:text-[34px] lg:text-[40px] leading-[120%] tracking-[-0.05em]">
              What{" "}
              <span className="font-['Satisfy'] font-normal text-[30px] sm:text-[38px] lg:text-[44px] leading-[120%] tracking-[-0.02em]">
                Drives
              </span>{" "}
              Us
            </h2>

            <p className="font-['Inter'] font-normal text-[15px] sm:text-[17px] lg:text-[20px] leading-[150%] tracking-[-0.03em] text-[#515151]">
              Our mission is to empower underprivileged children through
              education, skill development, nutrition, and holistic care. We
              strive to create safe and nurturing environments where every child
              can learn, grow, build confidence, and unlock their full
              potential, regardless of their socio-economic background.
            </p>
          </div>
        </div>

        {/* Right image column */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full overflow-hidden order-1 lg:order-2">
          <img
            src={colorfulHands}
            alt="Children painting with colorful hands"
            className="absolute inset-0 w-full h-full object-cover lg:w-[1160px] lg:h-[1160px] lg:top-[-96px] lg:left-[-184px] lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
