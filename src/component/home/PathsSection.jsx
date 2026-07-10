// import React from "react";
// import paintBg from "../../assets/images/paint-bg.png";
// import seesaw from "../../assets/images/seesaw.png";

// const CardDivider = () => (
//   <div
//     style={{
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       width: "100%",
//     }}
//   >
//     <div
//       style={{
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         backgroundColor: "#858585",
//         flexShrink: 0,
//       }}
//     />
//     <div
//       style={{
//         width: "10px",
//         height: "10px",
//         borderRadius: "50%",
//         backgroundColor: "#858585",
//         flexShrink: 0,
//       }}
//     />
//   </div>
// );

// function PathsSection() {
//   return (
//     <section className="w-full bg-white pb-24">
//       <div className="relative w-full h-[800px] overflow-hidden">
//         <img
//           src={paintBg}
//           alt="Colorful background"
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "830px",
//             left: "0px",
//             top: "0px",
//             objectFit: "cover",
//             objectPosition: "center top",
//           }}
//         />

//         <div
//           style={{
//             position: "absolute",
//             left: "40px",
//             top: "192px",
//             width: "509px",
//             backgroundColor: "white",
//             borderRadius: "4px",
//             boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.20)",
//             paddingTop: "72px",
//             paddingBottom: "72px",
//             paddingLeft: "48px",
//             paddingRight: "48px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "41px",
//           }}
//         >
//           <CardDivider />

//           <h2
//             style={{
//               fontFamily: "'Sora', sans-serif",
//               fontSize: "40px",
//               fontWeight: 400,
//               lineHeight: "120%",
//               letterSpacing: "-0.05em",
//               color: "#000",
//               margin: 0,
//             }}
//           >
//             Not Every{" "}
//             <span
//               style={{
//                 fontFamily: "'Dancing Script', cursive",
//                 fontWeight: 400,
//               }}
//             >
//               Child
//             </span>
//             <br />
//             Starts{" "}
//             <span
//               style={{
//                 fontFamily: "'Dancing Script', cursive",
//                 fontWeight: 400,
//               }}
//             >
//               Equal
//             </span>
//           </h2>

//           <p
//             style={{
//               fontFamily: "'Inter', sans-serif",
//               fontSize: "20px",
//               fontWeight: 400,
//               lineHeight: "150%",
//               letterSpacing: "-0.03em",
//               color: "#515151",
//               margin: 0,
//             }}
//           >
//             Many children are held back by financial challenges, limited access
//             to education, and a lack of opportunities that many take for
//             granted.
//           </p>

//           <CardDivider />
//         </div>

//         <div
//           style={{
//             position: "absolute",
//             left: "674px",
//             top: "40px",
//             width: "calc(100% - 714px)",
//             minWidth: "726px",
//             maxWidth: "726px",
//             height: "720px",
//             borderRadius: "8px",
//             border: "8px solid white",
//             overflow: "hidden",
//             boxShadow: "0px 4px 24px rgba(0,0,0,0.12)",
//           }}
//         >
//           <img
//             src={seesaw}
//             alt="Children on seesaw"
//             style={{ width: "100%", height: "100%", objectFit: "cover" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PathsSection;

import React from "react";
import paintBg from "../../assets/images/paint-bg.png";
import seesaw from "../../assets/images/seesaw.png";

// Converted CardDivider to Tailwind for cleaner code
const CardDivider = () => (
  <div className="flex items-center justify-between w-full">
    <div className="w-2.5 h-2.5 rounded-full bg-[#858585] shrink-0" />
    <div className="w-2.5 h-2.5 rounded-full bg-[#858585] shrink-0" />
  </div>
);

function PathsSection() {
  return (
    <section className="w-full bg-white pb-12 lg:pb-24">
      {/* Main Wrapper */}
      <div className="relative w-full min-h-screen lg:min-h-[830px] overflow-hidden flex items-center justify-center">
        {/* Background Paint */}
        <img
          src={paintBg}
          alt="Colorful background"
          className="absolute inset-0 w-full h-full object-cover object-[center_top] z-0"
        />

        {/* Content Container: 
          Uses flex-col on mobile, flex-row on desktop. 
          Handles spacing dynamically so it never breaks.
        */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[40px] py-12 lg:py-10 flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[60px] xl:gap-[125px]">
          {/* TEXT CARD 
            order-2 on mobile (bottom), order-1 on desktop (left)
            Uses lg:mt-[152px] to push it down and match your exact desktop Figma design
          */}
          <div className="order-2 lg:order-1 w-full lg:w-[509px] shrink-0 bg-white rounded-[4px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.20)] p-8 md:p-10 lg:py-[72px] lg:px-[48px] flex flex-col gap-8 lg:gap-[41px] lg:mt-[152px]">
            <CardDivider />

            <h2 className="font-['Sora'] text-[32px] md:text-[40px] font-normal leading-[120%] tracking-[-0.05em] text-black m-0">
              Not Every{" "}
              <span style={{ fontFamily: "'Dancing Script', cursive" }}>
                Child
              </span>
              <br />
              Starts{" "}
              <span style={{ fontFamily: "'Dancing Script', cursive" }}>
                Equal
              </span>
            </h2>

            <p className="font-['Inter'] text-[16px] md:text-[20px] font-normal leading-[150%] tracking-[-0.03em] text-[#515151] m-0">
              Many children are held back by financial challenges, limited
              access to education, and a lack of opportunities that many take
              for granted.
            </p>

            <CardDivider />
          </div>

          {/* IMAGE CARD
            order-1 on mobile (top), order-2 on desktop (right)
          */}
          <div className="order-1 lg:order-2 w-full lg:flex-1 max-w-[726px] aspect-square md:aspect-video lg:aspect-auto lg:h-[720px] rounded-[8px] border-[6px] lg:border-[8px] border-white overflow-hidden shadow-[0px_4px_24px_rgba(0,0,0,0.12)] shrink-0">
            <img
              src={seesaw}
              alt="Children on seesaw"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PathsSection;
