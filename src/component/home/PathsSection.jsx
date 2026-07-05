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
//       <div
//         className="relative w-full h-[800px] overflow-hidden"
//         style={{ maxWidth: "100vw" }}
//       >
//         <img
//           src={paintBg}
//           alt="Colorful background"
//           style={{
//             position: "absolute",
//             // width: "1476px",
//             width: "calc(100% + 62px)",
//             minWidth: "1476px",
//             height: "830px",
//             left: "-31px",
//             top: "0px",
//             objectFit: "cover",
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
//             width: "726px",
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

const CardDivider = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
    }}
  >
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#858585",
        flexShrink: 0,
      }}
    />
    <div
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#858585",
        flexShrink: 0,
      }}
    />
  </div>
);

function PathsSection() {
  return (
    <section className="w-full bg-white pb-24">
      <div className="relative w-full h-[800px] overflow-hidden">
        <img
          src={paintBg}
          alt="Colorful background"
          style={{
            position: "absolute",
            width: "100%",
            height: "830px",
            left: "0px",
            top: "0px",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "40px",
            top: "192px",
            width: "509px",
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.20)",
            paddingTop: "72px",
            paddingBottom: "72px",
            paddingLeft: "48px",
            paddingRight: "48px",
            display: "flex",
            flexDirection: "column",
            gap: "41px",
          }}
        >
          <CardDivider />

          <h2
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: "40px",
              fontWeight: 400,
              lineHeight: "120%",
              letterSpacing: "-0.05em",
              color: "#000",
              margin: 0,
            }}
          >
            Not Every{" "}
            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 400,
              }}
            >
              Child
            </span>
            <br />
            Starts{" "}
            <span
              style={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 400,
              }}
            >
              Equal
            </span>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "20px",
              fontWeight: 400,
              lineHeight: "150%",
              letterSpacing: "-0.03em",
              color: "#515151",
              margin: 0,
            }}
          >
            Many children are held back by financial challenges, limited access
            to education, and a lack of opportunities that many take for
            granted.
          </p>

          <CardDivider />
        </div>

        <div
          style={{
            position: "absolute",
            left: "674px",
            top: "40px",
            width: "calc(100% - 714px)",
            minWidth: "726px",
            maxWidth: "726px",
            height: "720px",
            borderRadius: "8px",
            border: "8px solid white",
            overflow: "hidden",
            boxShadow: "0px 4px 24px rgba(0,0,0,0.12)",
          }}
        >
          <img
            src={seesaw}
            alt="Children on seesaw"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}

export default PathsSection;
