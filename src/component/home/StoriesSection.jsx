// import React, { useState } from "react";
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
//     className="w-[20px] h-[20px] xl:w-[28px] xl:h-[28px]"
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

// const STORIES = [
//   {
//     name: "Priyanshi Chauhan",
//     quote:
//       '"Before Joining SPWF, I Never Imagined How Much My Life Could Change. Through Education, Encouragement, And Constant Support, I Found The Confidence To Learn, Grow, And Work Towards A Brighter Future."',
//     image: { src: img1, position: "center 40%" },
//   },
//   {
//     name: "Ankita Yadav",
//     quote:
//       '"I Used To Sit Quietly At The Back Of Every Class. The Mentors Here Kept Asking Me Questions Until I Started Answering, And Now I Am The One Helping The Younger Children With Their Lessons."',
//     image: { src: img2, position: "42% 10%" },
//   },
//   {
//     name: "Aaradhya Jha",
//     quote:
//       '"My Parents Were Not Sure School Would Lead Anywhere For Me. Two Years Later I Have A Report Card I Am Proud Of, And A Plan For What I Want To Become."',
//     image: { src: img3, position: "center 20%" },
//   },
// ];

// export default function StoriesSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const active = STORIES[activeIndex];

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
//   };

//   // desktop stack rotates with the active story:
//   // active image sits in the large middle slot, the other two fill the small slots
//   const stackOrder = [
//     STORIES[(activeIndex + STORIES.length - 1) % STORIES.length].image,
//     active.image,
//     STORIES[(activeIndex + 1) % STORIES.length].image,
//   ];

//   return (
//     <section className="w-full bg-white">
//       <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8 xl:px-[40px] py-16 xl:pt-[120px] xl:pb-[120px]">
//         {/* Header Area */}
//         <div className="flex items-center xl:items-start justify-between">
//           <p className="font-['Satisfy'] text-[32px] md:text-[38px] xl:text-[44px] font-normal leading-[1.15] tracking-[-0.02em] text-black m-0">
//             Stories{" "}
//             <span className="font-['Sora'] text-[32px] md:text-[38px] xl:text-[44px] font-normal">
//               Of Change
//             </span>
//           </p>

//           {/* Navigation Buttons */}
//           <div className="flex items-center gap-[8px]">
//             <button
//               onClick={handlePrev}
//               aria-label="Previous story"
//               className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] transition-colors shrink-0"
//             >
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
//             <button
//               onClick={handleNext}
//               aria-label="Next story"
//               className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] transition-colors shrink-0"
//             >
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

//         {/* Content Area */}
//         <div className="mt-8 xl:mt-[20px] flex flex-col xl:flex-row gap-6 xl:gap-[16px]">
//           {/* MOBILE ONLY: Single Image Carousel */}
//           <div className="flex xl:hidden w-full h-[369px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-[6px]">
//             <img
//               key={activeIndex}
//               src={active.image.src}
//               alt={active.name}
//               className="h-full w-full object-cover transition-opacity duration-300"
//               style={{ objectPosition: active.image.position }}
//             />
//           </div>

//           {/* DESKTOP ONLY: Exact 3-Image Stack */}
//           <div className="hidden xl:flex w-[314px] flex-col gap-[8px] shrink-0">
//             <div className="h-[121px] overflow-hidden rounded-[6px]">
//               <img
//                 src={stackOrder[0].src}
//                 alt=""
//                 className="h-full w-full object-cover transition-opacity duration-300"
//                 style={{ objectPosition: stackOrder[0].position }}
//               />
//             </div>
//             <div className="h-[369px] overflow-hidden rounded-[6px] bg-[#C9EBFA]">
//               <img
//                 src={stackOrder[1].src}
//                 alt={active.name}
//                 className="h-full w-full object-cover transition-opacity duration-300"
//                 style={{ objectPosition: stackOrder[1].position }}
//               />
//             </div>
//             <div className="h-[121px] overflow-hidden rounded-[6px]">
//               <img
//                 src={stackOrder[2].src}
//                 alt=""
//                 className="h-full w-full object-cover transition-opacity duration-300"
//                 style={{ objectPosition: stackOrder[2].position }}
//               />
//             </div>
//           </div>

//           {/* Testimonial Box */}
//           <div className="relative w-full xl:w-auto h-auto xl:h-[628px] xl:flex-1 overflow-hidden rounded-[6px] bg-[#5FBCFF] p-6 md:p-10 xl:p-0">
//             {/* Desktop uses absolute positioning as requested, mobile uses standard flex flow */}
//             <div className="relative xl:absolute xl:left-[119px] xl:top-[158px] w-full xl:w-[664px]">
//               <p className="m-0 w-full xl:w-[664px] font-['Sora'] text-[18px] md:text-[22px] xl:text-[28px] font-normal leading-[140%] tracking-[-0.03em] text-white">
//                 {active.quote}
//               </p>

//               <div className="mt-6 xl:mt-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
//                 <p className="m-0 font-['Sora'] text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[140%] tracking-[-0.03em] text-white">
//                   — {active.name}
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

const STORIES = [
  {
    name: "Priyanshi Chauhan",
    quote:
      '"Before Joining SPWF, I Never Imagined How Much My Life Could Change. Through Education, Encouragement, And Constant Support, I Found The Confidence To Learn, Grow, And Work Towards A Brighter Future."',
    image: { src: img1, position: "center 40%" },
  },
  {
    name: "Ankita Yadav",
    quote:
      '"I Used To Sit Quietly At The Back Of Every Class. The Mentors Here Kept Asking Me Questions Until I Started Answering, And Now I Am The One Helping The Younger Children With Their Lessons."',
    image: { src: img2, position: "42% 10%" },
  },
  {
    name: "Aaradhya Jha",
    quote:
      '"My Parents Were Not Sure School Would Lead Anywhere For Me. Two Years Later I Have A Report Card I Am Proud Of, And A Plan For What I Want To Become."',
    image: { src: img3, position: "center 20%" },
  },
];

const ANIM_CSS = `
@keyframes storyTextIn{
  from{opacity:0;transform:translate3d(0,12px,0);}
  to{opacity:1;transform:none;}
}
.story-text{animation:storyTextIn .55s cubic-bezier(.33,1,.68,1) both;}

@media (prefers-reduced-motion:reduce){
  .story-text{animation:none;}
  .story-img{transition:none !important;}
}
`;

/*
 * Saari images ek ke upar ek rakhi hain aur sirf active wali ki opacity 1 hai.
 * Isse asli crossfade milta hai — image swap karne se transition nahi chalta,
 * kyunki naya element mount hote hi apni final state me hota hai.
 */
const FadeImage = ({ index, alt, className }) => (
  <div className={`relative overflow-hidden ${className}`}>
    {STORIES.map((story, i) => (
      <img
        key={story.name}
        src={story.image.src}
        alt={i === index ? alt : ""}
        aria-hidden={i !== index ? "true" : undefined}
        className={`story-img absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
        style={{ objectPosition: story.image.position }}
      />
    ))}
  </div>
);

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = STORIES[activeIndex];
  const total = STORIES.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // desktop stack rotates with the active story:
  // active image sits in the large middle slot, the other two fill the small slots
  const prevIndex = (activeIndex + total - 1) % total;
  const nextIndex = (activeIndex + 1) % total;

  return (
    <section className="w-full bg-white">
      <style>{ANIM_CSS}</style>

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
              aria-label="Previous story"
              className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] active:scale-95 transition-all duration-200 shrink-0"
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
              aria-label="Next story"
              className="flex h-[36px] w-[36px] xl:h-[40px] xl:w-[40px] items-center justify-center rounded-full bg-[#4DC8F4] hover:bg-[#3bb1db] active:scale-95 transition-all duration-200 shrink-0"
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
          <FadeImage
            index={activeIndex}
            alt={active.name}
            className="flex xl:hidden w-full h-[369px] sm:h-[350px] md:h-[400px] rounded-[6px]"
          />

          {/* DESKTOP ONLY: Exact 3-Image Stack */}
          <div className="hidden xl:flex w-[314px] flex-col gap-[8px] shrink-0">
            <FadeImage
              index={prevIndex}
              alt=""
              className="h-[121px] rounded-[6px]"
            />
            <FadeImage
              index={activeIndex}
              alt={active.name}
              className="h-[369px] rounded-[6px] bg-[#C9EBFA]"
            />
            <FadeImage
              index={nextIndex}
              alt=""
              className="h-[121px] rounded-[6px]"
            />
          </div>

          {/* Testimonial Box */}
          <div className="relative w-full xl:w-auto h-auto xl:h-[628px] xl:flex-1 overflow-hidden rounded-[6px] bg-[#5FBCFF] p-6 md:p-10 xl:p-0">
            {/* Desktop uses absolute positioning as requested, mobile uses standard flex flow */}
            <div className="relative xl:absolute xl:left-[119px] xl:top-[158px] w-full xl:w-[664px]">
              {/* key badalne par animation dobara chalti hai */}
              <div key={activeIndex} className="story-text">
                <p className="m-0 w-full xl:w-[664px] font-['Sora'] text-[18px] md:text-[22px] xl:text-[28px] font-normal leading-[140%] tracking-[-0.03em] text-white">
                  {active.quote}
                </p>

                <div className="mt-6 xl:mt-[16px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                  <p className="m-0 font-['Sora'] text-[16px] md:text-[18px] xl:text-[20px] font-normal leading-[140%] tracking-[-0.03em] text-white">
                    — {active.name}
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
      </div>
    </section>
  );
}
