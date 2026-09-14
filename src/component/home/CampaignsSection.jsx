// import React from "react";
// import { Link } from "react-router-dom";

// import causeArtwork from "../../assets/images/cause-artwork.png";
// import kidsGroup from "../../assets/images/kidsGroup.png";

// /*
//  * `path` jis campaign me hoga wahi button Link banega.
//  * Baaki campaigns ke route ready hone par bas yahan `path` add karna hai —
//  * CampaignCard ka code chhune ki zaroorat nahi.
//  */
// const campaigns = [
//   {
//     id: 1,
//     slug: "bring-back-daily-meals",
//     title: "Bring Back Daily Meals",
//     description:
//       "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
//     metricLabel: "Donations",
//     metricPercentage: 62,
//     raised: "₹3,12,000 Raised",
//     goal: "₹6,00,000 Goal",
//     buttonText: "Support Now",
//     path: "/donate",
//     themeColor: "#FF5255",
//   },
//   {
//     id: 2,
//     slug: "meals-donated",
//     title: "Bring Back Daily Meals",
//     description:
//       "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
//     metricLabel: "Meals Donated",
//     metricPercentage: 61,
//     raised: "6,100 Donated",
//     goal: "10,000 Goal",
//     buttonText: "Support Now",
//     themeColor: "#E4FF4C",
//   },
//   {
//     id: 3,
//     slug: "back-to-school-kits",
//     title: "Back-To-School Kits",
//     description:
//       "Equip children with essential school supplies so they can start their learning journey with confidence.",
//     metricLabel: "Kits Donated",
//     metricPercentage: 46,
//     raised: "460 Donated",
//     goal: "1,000 Goal",
//     buttonText: "Donate a Kit",
//     themeColor: "#5FBCFF",
//   },
// ];

// const CampaignCard = ({ campaign }) => {
//   const buttonClasses =
//     "w-full rounded-xl py-3 text-[15px] font-semibold text-gray-900 transition-opacity hover:opacity-90 lg:py-3.5 lg:text-[17px]";

//   return (
//     <div className="relative z-10 mx-auto flex w-full max-w-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:mx-0 lg:w-[668px] lg:max-w-xl lg:p-8">
//       {/* Header & Icon */}
//       <div className="mb-4 flex items-center gap-3 lg:gap-4">
//         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2a] lg:h-12 lg:w-12">
//           <div className="h-4 w-4 rounded-sm border-2 border-white lg:h-5 lg:w-5" />
//         </div>
//         <h3 className="text-[22px] font-semibold leading-tight text-gray-900 md:text-[24px] lg:text-[28px]">
//           {campaign.title}
//         </h3>
//       </div>

//       {/* Description */}
//       <p className="mb-6 pr-0 text-[14px] leading-relaxed text-gray-600 lg:mb-8 lg:pr-4 lg:text-[15px]">
//         {campaign.description}
//       </p>

//       {/* Progress Section */}
//       <div className="mb-6">
//         <div className="mb-2 flex items-center justify-between">
//           <span className="text-[12px] font-semibold text-gray-900 lg:text-[13px]">
//             {campaign.metricLabel}
//           </span>
//           <span className="text-[12px] font-semibold text-gray-900 lg:text-[13px]">
//             {campaign.metricPercentage}% of Goal
//           </span>
//         </div>

//         <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 lg:h-2.5">
//           <div
//             className="h-full rounded-full transition-all duration-500 ease-out"
//             style={{
//               width: `${campaign.metricPercentage}%`,
//               backgroundColor: campaign.themeColor,
//             }}
//           />
//         </div>

//         <div className="flex items-center justify-between text-[12px] lg:text-[13px]">
//           <div className="flex items-center gap-2">
//             <span
//               className="h-1.5 w-1.5 rounded-full"
//               style={{ backgroundColor: campaign.themeColor }}
//             />
//             <span className="text-gray-600">{campaign.raised}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
//             <span className="text-gray-400">{campaign.goal}</span>
//           </div>
//         </div>
//       </div>

//       {/* Button — path hai to Link, warna plain button */}
//       {campaign.path ? (
//         <Link
//           to={campaign.path}
//           className={`flex items-center justify-center ${buttonClasses}`}
//           style={{ backgroundColor: campaign.themeColor }}
//         >
//           {campaign.buttonText}
//         </Link>
//       ) : (
//         <button
//           type="button"
//           className={buttonClasses}
//           style={{ backgroundColor: campaign.themeColor }}
//         >
//           {campaign.buttonText}
//         </button>
//       )}
//     </div>
//   );
// };

// const CampaignsSection = () => {
//   return (
//     <section className="relative w-full min-h-screen overflow-hidden bg-[#FBFAF1] py-12 font-sans lg:py-24">
//       {/* BACKGROUND IMAGE */}
//       <img
//         src={causeArtwork}
//         alt=""
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 z-0 h-[400px] w-full object-cover object-top lg:h-[600px]"
//       />

//       <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-8 lg:px-[40px]">
//         {/* Left Column */}
//         <div className="flex h-fit flex-col justify-start pt-4 lg:sticky lg:top-24 lg:pt-8">
//           <div className="max-w-md">
//             <h2 className="m-0 mb-4 text-gray-900 lg:mb-6">
//               <span className="font-['Satisfy'] text-[32px] font-normal leading-[125%] tracking-[-0.02em] md:text-[40px] lg:text-[56px] lg:leading-[1.1]">
//                 Join A Cause
//               </span>
//               <span className="font-['Sora'] text-[32px] font-normal leading-[125%] tracking-[-0.03em] md:text-[40px] lg:text-[56px] lg:leading-[1.1]">
//                 {" "}
//                 That&rsquo;s <br /> Live Right Now
//               </span>
//             </h2>

//             <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-gray-800 lg:mt-0 lg:text-[15px]">
//               Support active campaigns that provide education, nutrition, and
//               opportunities for children who need them most.
//             </p>
//           </div>

//           {/* FOREGROUND IMAGE */}
//           <div className="ml-0 mt-8 w-full max-w-[600px] lg:-ml-4 lg:mt-12">
//             <img
//               src={kidsGroup}
//               alt="Children reading and eating together"
//               className="relative z-10 h-auto w-full object-contain"
//             />
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex flex-col items-center gap-6 lg:items-end lg:gap-[30px]">
//           {campaigns.map((campaign) => (
//             <CampaignCard key={campaign.id} campaign={campaign} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CampaignsSection;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import causeArtwork from "../../assets/images/cause-artwork.png";
import kidsGroup from "../../assets/images/kidsGroup.png";

/*
 * `path` jis campaign me hoga wahi button Link banega.
 * Baaki campaigns ke route ready hone par bas yahan `path` add karna hai —
 * CampaignCard ka code chhune ki zaroorat nahi.
 */

const campaigns = [
  {
    id: 1,
    slug: "bring-back-daily-meals",
    title: "Bring Back Daily Meals",
    description:
      "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
    metricLabel: "Donations",
    metricPercentage: 62,
    raised: "₹3,12,000 Raised",
    goal: "₹6,00,000 Goal",
    buttonText: "Support Now",
    path: "/donate",
    themeColor: "#FF5255",
  },
  {
    id: 2,
    slug: "meals-donated",
    title: "Bring Back Daily Meals",
    description:
      "Help restore nutritious daily meals for children and ensure they have the energy to learn, play, and grow.",
    metricLabel: "Meals Donated",
    metricPercentage: 61,
    raised: "6,100 Donated",
    goal: "10,000 Goal",
    buttonText: "Support Now",
    themeColor: "#E4FF4C",
  },
  {
    id: 3,
    slug: "back-to-school-kits",
    title: "Back-To-School Kits",
    description:
      "Equip children with essential school supplies so they can start their learning journey with confidence.",
    metricLabel: "Kits Donated",
    metricPercentage: 46,
    raised: "460 Donated",
    goal: "1,000 Goal",
    buttonText: "Donate a Kit",
    themeColor: "#5FBCFF",
  },
];

const CampaignRevealCard = ({ campaign, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        io.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -35% 0px", threshold: 0.1 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal
      className={`w-full lg:w-auto ${isVisible ? "is-in" : ""}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <CampaignCard campaign={campaign} isVisible={isVisible} />
    </div>
  );
};

const ANIM_CSS = `
.camp-anim [data-reveal]{
  opacity:0;
  transform:translate3d(0,40px,0);
  transition:opacity .7s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1);
  will-change:opacity,transform;
}
.camp-anim [data-reveal].is-in{opacity:1;transform:none;}

.camp-anim [data-reveal="left"]{transform:translate3d(-40px,0,0);}
.camp-anim [data-reveal="left"].is-in{transform:none;}

@media (max-width:1023px){
  .camp-anim [data-reveal="left"]{transform:translate3d(0,24px,0);}
}
@media (prefers-reduced-motion:reduce){
  .camp-anim [data-reveal]{opacity:1;transform:none;transition:none;}
}
`;

const CampaignCard = ({ campaign, isVisible }) => {
  const buttonClasses =
    "w-full rounded-xl py-3 text-[15px] font-semibold text-gray-900 transition-opacity hover:opacity-90 lg:py-3.5 lg:text-[17px]";

  return (
    <div className="relative z-10 mx-auto flex w-full max-w-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] lg:mx-0 lg:w-[668px] lg:max-w-xl lg:p-8">
      {/* Header & Icon */}
      <div className="mb-4 flex items-center gap-3 lg:gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2a2a2a] lg:h-12 lg:w-12">
          <div className="h-4 w-4 rounded-sm border-2 border-white lg:h-5 lg:w-5" />
        </div>
        <h3 className="text-[22px] font-semibold leading-tight text-gray-900 md:text-[24px] lg:text-[28px]">
          {campaign.title}
        </h3>
      </div>

      {/* Description */}
      <p className="mb-6 pr-0 text-[14px] leading-relaxed text-gray-600 lg:mb-8 lg:pr-4 lg:text-[15px]">
        {campaign.description}
      </p>

      {/* Progress Section */}
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[12px] font-semibold text-gray-900 lg:text-[13px]">
            {campaign.metricLabel}
          </span>
          <span className="text-[12px] font-semibold text-gray-900 lg:text-[13px]">
            {campaign.metricPercentage}% of Goal
          </span>
        </div>

        <div className="mb-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 lg:h-2.5">
          <div
            className="h-full rounded-full transition-all duration-[1200ms] ease-out"
            style={{
              width: isVisible ? `${campaign.metricPercentage}%` : "0%",
              backgroundColor: campaign.themeColor,
            }}
          />
        </div>

        <div className="flex items-center justify-between text-[12px] lg:text-[13px]">
          <div className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: campaign.themeColor }}
            />
            <span className="text-gray-600">{campaign.raised}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            <span className="text-gray-400">{campaign.goal}</span>
          </div>
        </div>
      </div>

      {/* Button — path hai to Link, warna plain button */}
      {campaign.path ? (
        <Link
          to={campaign.path}
          className={`flex items-center justify-center ${buttonClasses}`}
          style={{ backgroundColor: campaign.themeColor }}
        >
          {campaign.buttonText}
        </Link>
      ) : (
        <button
          type="button"
          className={buttonClasses}
          style={{ backgroundColor: campaign.themeColor }}
        >
          {campaign.buttonText}
        </button>
      )}
    </div>
  );
};

const CampaignsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const nodes = root.querySelectorAll("[data-reveal]");
    console.log("data-reveal nodes mile:", nodes.length);
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
      { rootMargin: "0px 0px -35% 0px", threshold: 0.1 },
    );

    nodes.forEach((n) => io.observe(n));

    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="camp-anim relative w-full min-h-screen overflow-hidden bg-[#FBFAF1] py-12 font-sans lg:py-24"
    >
      <style>{ANIM_CSS}</style>

      {/* BACKGROUND IMAGE */}
      <img
        src={causeArtwork}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-0 h-[400px] w-full object-cover object-top lg:h-[600px]"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-8 lg:px-[40px]">
        {/* Left Column */}
        <div className="flex h-fit flex-col justify-start pt-4 lg:sticky lg:top-24 lg:pt-8">
          <div className="max-w-md" data-reveal="left">
            <h2 className="m-0 mb-4 text-gray-900 lg:mb-6">
              <span className="font-['Satisfy'] text-[32px] font-normal leading-[125%] tracking-[-0.02em] md:text-[40px] lg:text-[56px] lg:leading-[1.1]">
                Join A Cause
              </span>
              <span className="font-['Sora'] text-[32px] font-normal leading-[125%] tracking-[-0.03em] md:text-[40px] lg:text-[56px] lg:leading-[1.1]">
                {" "}
                That&rsquo;s <br /> Live Right Now
              </span>
            </h2>

            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-gray-800 lg:mt-0 lg:text-[15px]">
              Support active campaigns that provide education, nutrition, and
              opportunities for children who need them most.
            </p>
          </div>

          {/* FOREGROUND IMAGE */}
          <div
            data-reveal
            style={{ transitionDelay: "120ms" }}
            className="ml-0 mt-8 w-full max-w-[600px] lg:-ml-4 lg:mt-12"
          >
            <img
              src={kidsGroup}
              alt="Children reading and eating together"
              className="relative z-10 h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Right Column */}
        {/* Right Column */}
        <div className="flex flex-col items-center gap-6 lg:items-end lg:gap-[30px]">
          {campaigns.map((campaign, index) => (
            <CampaignRevealCard
              key={campaign.id}
              campaign={campaign}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignsSection;
