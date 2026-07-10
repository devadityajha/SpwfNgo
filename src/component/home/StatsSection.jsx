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
//     <section
//       style={{
//         width: "100%",
//         backgroundColor: "#F7C334",
//         paddingTop: "120px",
//         paddingBottom: "120px",
//         paddingLeft: "40px",
//         paddingRight: "40px",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         gap: "64px",
//         boxSizing: "border-box",
//         position: "relative",
//         overflow: "hidden",
//       }}
//     >
//       {/* Background doodle */}
//       {notebookBg && (
//         <img
//           src={notebookBg}
//           alt=""
//           aria-hidden="true"
//           style={{
//             position: "absolute",
//             bottom: 0,
//             left: 0,
//             width: "100%",
//             height: "auto",
//             pointerEvents: "none",
//             zIndex: 0,
//           }}
//         />
//       )}

//       {/* Heading */}
//       <div
//         style={{
//           width: "484px",
//           height: "60px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//           zIndex: 1,
//         }}
//       >
//         <p
//           style={{
//             fontFamily: "'Satisfy', cursive",
//             fontSize: "44px",
//             fontWeight: 400,
//             lineHeight: "125%",
//             letterSpacing: "-0.02em",
//             color: "#000000",
//             margin: 0,
//             textAlign: "center",
//             width: "100%",
//           }}
//         >
//           <span style={{ fontFamily: "'Satisfy', cursive" }}>Numbers</span> That
//           Became Lives
//         </p>
//       </div>

//       {/* Main Content */}
//       <div
//         style={{
//           width: "1360px",
//           height: "718px",
//           display: "flex",
//           flexDirection: "row",
//           gap: "16px",
//           position: "relative",
//           zIndex: 1,
//           flexShrink: 0,
//         }}
//       >
//         {/* Left Card - Large */}
//         <div
//           style={{
//             width: "631px",
//             height: "718px",
//             borderRadius: "8px",
//             overflow: "hidden",
//             flexShrink: 0,
//             position: "relative",
//             backgroundColor: "#FFFFFF",
//           }}
//         >
//           <img
//             src={doodleBg}
//             alt="Notebook background"
//             style={{
//               width: "100%",
//               height: "100%",
//               objectFit: "cover",
//               objectPosition: "center",
//               display: "block",
//             }}
//           />
//           {/* Stats overlay */}
//           <div
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               width: "100%",
//               height: "100%",
//             }}
//           >
//             <p
//               style={{
//                 position: "absolute",
//                 top: "77px",
//                 left: "36px",
//                 fontFamily: "'Sora', sans-serif",
//                 fontSize: "112px",
//                 fontWeight: 400,
//                 lineHeight: "128px",
//                 letterSpacing: "-0.02em",
//                 color: "#000000",
//                 margin: 0,
//               }}
//             >
//               750+
//             </p>
//             <p
//               style={{
//                 position: "absolute",
//                 top: "202px",
//                 left: "36px",
//                 fontFamily: "'Inter', sans-serif",
//                 fontSize: "18px",
//                 fontWeight: 600,
//                 lineHeight: "26px",
//                 letterSpacing: "-0.01em",
//                 color: "#000000",
//                 margin: 0,
//               }}
//             >
//               Govt. school admits · 2023
//             </p>
//           </div>
//         </div>

//         {/* Right Grid */}
//         <div
//           style={{
//             width: "709px",
//             height: "718px",
//             display: "grid",
//             gridTemplateRows: "351px 351px",
//             gridTemplateColumns: "346.5px 346.5px",
//             rowGap: "16px",
//             columnGap: "16px",
//             flexShrink: 0,
//           }}
//         >
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               style={{
//                 width: "346.5px",
//                 height: "351px",
//                 borderRadius: "8px",
//                 overflow: "hidden",
//                 position: "relative",
//                 backgroundColor: "#FDFDFD",
//               }}
//             >
//               <img
//                 src={doodleBg}
//                 alt="Notebook background"
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   objectPosition: "center",
//                   display: "block",
//                 }}
//               />
//               <div
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                 }}
//               >
//                 <p
//                   style={{
//                     position: "absolute",
//                     top: "61px",
//                     left: "20px",
//                     fontFamily: "'Sora', sans-serif",
//                     fontSize: "64px",
//                     fontWeight: 400,
//                     lineHeight: "100%",
//                     letterSpacing: "-0.02em",
//                     color: "#000000",
//                     margin: 0,
//                   }}
//                 >
//                   {stat.value}
//                 </p>
//                 <p
//                   style={{
//                     position: "absolute",
//                     top: "125px",
//                     left: "21px",
//                     fontFamily: "'Inter', sans-serif",
//                     fontSize: "18px",
//                     fontWeight: 600,
//                     lineHeight: "26px",
//                     letterSpacing: "-0.01em",
//                     color: "#000000",
//                     margin: 0,
//                   }}
//                 >
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

import React from "react";
import notebookBg from "../../assets/images/notebook-bg.png";
import doodleBg from "../../assets/images/doodle-bg.png";

const stats = [
  { value: "30+", caption: "Govt. school admits · 2023" },
  { value: "130+", caption: "Govt. school admits · 2023" },
  { value: "05+", caption: "Govt. school admits · 2023" },
  { value: "250+", caption: "Govt. school admits · 2023" },
];

function StatsSection() {
  return (
    <section className="relative w-full bg-[#F7C334] overflow-hidden flex flex-col items-center box-border px-4 py-16 xl:pt-[120px] xl:pb-[120px] xl:px-[40px] gap-10 xl:gap-[64px]">
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
      <div className="relative z-10 flex items-center justify-center w-full max-w-[484px] xl:w-[484px] xl:h-[60px]">
        <p className="font-['Satisfy'] text-[32px] md:text-[38px] xl:text-[44px] font-normal leading-[125%] tracking-[-0.02em] text-[#000000] m-0 text-center w-full">
          <span className="font-['Satisfy']">Numbers</span> That Became Lives
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col xl:flex-row w-full max-w-[1360px] xl:w-[1360px] h-auto xl:h-[718px] gap-4 xl:gap-[16px] shrink-0">
        {/* Left Card - Large */}
        <div className="relative overflow-hidden rounded-[8px] bg-[#FFFFFF] shrink-0 w-full xl:w-[631px] h-[350px] md:h-[450px] xl:h-[718px]">
          <img
            src={doodleBg}
            alt="Notebook background"
            className="absolute inset-0 w-full h-full object-cover object-center block"
          />
          {/* Stats overlay */}
          <div className="absolute top-0 left-0 w-full h-full p-6 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
            <p className="relative xl:absolute xl:top-[77px] xl:left-[36px] font-['Sora'] text-[72px] md:text-[96px] xl:text-[112px] font-normal leading-tight xl:leading-[128px] tracking-[-0.02em] text-[#000000] m-0">
              750+
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
              className="relative overflow-hidden rounded-[8px] bg-[#FDFDFD] w-full xl:w-[346.5px] h-[200px] md:h-[250px] xl:h-[351px]"
            >
              <img
                src={doodleBg}
                alt="Notebook background"
                className="absolute inset-0 w-full h-full object-cover object-center block"
              />
              <div className="absolute top-0 left-0 w-full h-full p-5 xl:p-0 flex flex-col xl:block justify-center xl:justify-start">
                <p className="relative xl:absolute xl:top-[61px] xl:left-[20px] font-['Sora'] text-[48px] md:text-[56px] xl:text-[64px] font-normal leading-[100%] tracking-[-0.02em] text-[#000000] m-0">
                  {stat.value}
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
