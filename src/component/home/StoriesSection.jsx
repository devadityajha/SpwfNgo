// import React from "react";
// import img1 from "../../assets/images/story-top.png";
// import img2 from "../../assets/images/story-middle.jpg";
// import img3 from "../../assets/images/story-bottom.png";

// const StarIcon = () => (
//   <svg
//     width="28"
//     height="28"
//     viewBox="0 0 28 28"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.9 23.5L14 19.77L7.1 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z"
//       stroke="white"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       fill="none"
//     />
//   </svg>
// );

// export default function StoriesSection() {
//   return (
//     <section className="w-full bg-white">
//       {/* <div className="mx-auto w-full max-w-[1440px] px-[40px] py-[56px]"> */}
//       <div className="mx-auto w-full max-w-[1440px] px-[40px] pt-[120px] pb-[120px]">
//         <div className="flex items-start justify-between">
//           <p className="font-['Satisfy'] text-[44px] font-normal leading-[1.15] tracking-[-0.02em] text-black">
//             Stories{" "}
//             <span className="font-['Sora'] text-[44px] font-normal">
//               Of Change
//             </span>
//           </p>

//           <div className="flex items-center gap-[8px]">
//             <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#4DC8F4]">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M10 12L6 8L10 4"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//             <button className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#4DC8F4]">
//               <svg
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="M6 4L10 8L6 12"
//                   stroke="#000"
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="mt-[20px] flex gap-[16px]">
//           <div className="flex w-[314px] flex-col gap-[8px]">
//             <div className="h-[121px] overflow-hidden rounded-[6px]">
//               <img
//                 src={img1}
//                 alt=""
//                 className="h-full w-full object-cover "
//                 style={{ objectPosition: "center 43%" }}
//               />
//             </div>

//             <div className="h-[369px] overflow-hidden rounded-[6px] bg-[#C9EBFA]">
//               <img
//                 src={img2}
//                 alt=""
//                 className="h-full w-full object-cover"
//                 style={{ objectPosition: "42% 18%" }}
//               />
//             </div>

//             <div className="h-[121px] overflow-hidden rounded-[6px]">
//               <img
//                 src={img3}
//                 alt=""
//                 className="h-full w-full object-cover"
//                 style={{ objectPosition: "center 18%" }}
//               />
//             </div>
//           </div>

//           <div className="relative h-[628px] flex-1 overflow-hidden rounded-[6px] bg-[#5FBCFF]">
//             <div className="absolute left-[119px] top-[158px] w-[664px]">
//               <p className="m-0 w-[664px] font-['Sora'] text-[28px] font-normal leading-[140%] tracking-[-0.03em] text-white">
//                 "Before Joining SPWF, I Never Imagined How Much My Life Could
//                 Change. Through Education, Encouragement, And Constant Support,
//                 I Found The Confidence To Learn, Grow, And Work Towards A
//                 Brighter Future."
//               </p>

//               <div className="mt-[16px] flex items-center justify-between">
//                 <p className="m-0 font-['Sora'] text-[20px] font-normal leading-[140%] tracking-[-0.03em] text-white">
//                   — Priyanshi Chauhan
//                 </p>

//                 <div className="flex items-center gap-[4px]">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon key={i} />
//                   ))}
//                 </div>
//               </div>

//               <div className="mt-[8px] h-px w-full border-t border-dashed border-white/50" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import img1 from "../../assets/images/story-top.png";
import img2 from "../../assets/images/story-middle.jpg";
import img3 from "../../assets/images/story-bottom.png";

const StarIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[20px] h-[20px] xl:w-[28px] xl:h-[28px]"
  >
    <path
      d="M14 2L17.09 9.26L25 10.27L19.5 15.64L20.9 23.5L14 19.77L7.1 23.5L8.5 15.64L3 10.27L10.91 9.26L14 2Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function StoriesSection() {
  // Store images in an array to cycle through them on mobile
  //   const mobileImages = [img1, img2, img3];
  // Store images and their specific focal points in an array
  const mobileImages = [
    { src: img1, position: "center 40%" },
    { src: img2, position: "42% 10%" },
    { src: img3, position: "center 20%" },
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  // Handlers for the top-right arrows
  const handlePrev = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? mobileImages.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveImageIndex((prev) =>
      prev === mobileImages.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 xl:px-[40px] py-16 xl:pt-[120px] xl:pb-[120px]">
        {/* Header Area */}
        <div className="flex items-center xl:items-start justify-between">
          <p className="font-['Satisfy'] text-[32px] md:text-[38px] xl:text-[44px] font-normal leading-[1.15] tracking-[-0.02em] text-black m-0">
            Stories{" "}
            <span className="font-['Sora'] text-[32px] md:text-[38px] xl:text-[44px] font-normal">
              Of Change
            </span>
          </p>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-[8px]">
            <button
              onClick={handlePrev}
              className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] transition-colors shrink-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] transition-colors shrink-0"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-8 xl:mt-[20px] flex flex-col xl:flex-row gap-6 xl:gap-[16px]">
          {/* MOBILE ONLY: Single Image Carousel */}
          {/* <div className="flex xl:hidden w-full h-[250px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[6px]">
            <img
              src={mobileImages[activeImageIndex]}
              alt="Story"
              className="h-full w-full object-cover transition-opacity duration-300"
            />
          </div> */}
          {/* MOBILE ONLY: Single Image Carousel */}
          <div className="flex xl:hidden w-full h-[369px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[6px]">
            <img
              src={mobileImages[activeImageIndex].src}
              alt="Story"
              className="h-full w-full object-cover transition-opacity duration-300"
              style={{
                objectPosition: mobileImages[activeImageIndex].position,
              }}
            />
          </div>

          {/* DESKTOP ONLY: Exact 3-Image Stack */}
          <div className="hidden xl:flex w-[314px] flex-col gap-[8px] shrink-0">
            <div className="h-[121px] overflow-hidden rounded-[6px]">
              <img
                src={img1}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 43%" }}
              />
            </div>
            <div className="h-[369px] overflow-hidden rounded-[6px] bg-[#C9EBFA]">
              <img
                src={img2}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "42% 18%" }}
              />
            </div>
            <div className="h-[121px] overflow-hidden rounded-[6px]">
              <img
                src={img3}
                alt=""
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 18%" }}
              />
            </div>
          </div>

          {/* Testimonial Box */}
          <div className="relative w-full xl:w-auto h-auto xl:h-[628px] xl:flex-1 overflow-hidden rounded-[6px] bg-[#5FBCFF] p-6 md:p-10 xl:p-0">
            {/* Desktop uses absolute positioning as requested, mobile uses standard flex flow */}
            <div className="relative xl:absolute xl:left-[119px] xl:top-[158px] w-full xl:w-[664px]">
              <p className="m-0 w-full xl:w-[664px] font-['Sora'] text-[18px] md:text-[22px] xl:text-[28px] font-normal leading-[140%] tracking-[-0.03em] text-white">
                "Before Joining SPWF, I Never Imagined How Much My Life Could
                Change. Through Education, Encouragement, And Constant Support,
                I Found The Confidence To Learn, Grow, And Work Towards A
                Brighter Future."
              </p>

              <div className="mt-6 xl:mt-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                <p className="m-0 font-['Sora'] text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[140%] tracking-[-0.03em] text-white">
                  — Priyanshi Chauhan
                </p>

                <div className="flex items-center gap-[4px]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>

              <div className="mt-[8px] h-px w-full border-t border-dashed border-white/50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
