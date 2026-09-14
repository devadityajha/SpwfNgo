import React from "react";

// Import your exported assets here
import donateIcon from "../../assets/images/donate-icon.png";
import volunteerIcon from "../../assets/images/volunteer-icon.png";
import sponsorIcon from "../../assets/images/sponsor-icon.png";
import kidStanding from "../../assets/images/kid-standing.png"; // For the bottom illustration

const pathCards = [
  {
    id: 1,
    pathNum: "Path 01 .",
    pathName: "Give",
    title: "Donate to help children learn, grow, and thrive.",
    buttonText: "Donate",
    bgColor: "#FF5255", // Exact hex from Figma
    icon: donateIcon,
    path: "/donate",
  },
  {
    id: 2,
    pathNum: "Path 02 .",
    pathName: "Show up",
    title: "Volunteer to create a difference in a child's life.",
    buttonText: "Volunteer",
    bgColor: "#E4FF4C", // Exact hex from Figma
    icon: volunteerIcon,
    path: "/join-us",
  },
  {
    id: 3,
    pathNum: "Path 03 .",
    pathName: "Commit",
    title: "Become a sponsor to help shape a child's future.",
    buttonText: "Become A Sponsor",
    bgColor: "#5FBCFF", // Exact hex from Figma
    icon: sponsorIcon,
    path: "/join-us",
  },
];

const RewriteChildhoodSection = () => {
  return (
    <section className="w-full py-16 lg:py-[120px] flex flex-col items-center bg-white font-sans text-gray-900">
      <div className="w-[1360px] max-w-full px-4 xl:px-0 mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="text-center text-[36px] lg:text-[44px] leading-tight mb-10 lg:mb-[64px] font-medium">
          You Can{" "}
          <span style={{ fontFamily: "'Satisfy', cursive" }}>
            Rewrite A Childhood
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-[20px] w-full h-auto lg:h-[562px]">
          {pathCards.map((card) => (
            <div
              key={card.id}
              /*
                MOBILE: h-[420px], pt-[24px]
                DESKTOP: Locked to your exact lg:h-[562px] and lg:pt-[38px]
              */
              className="w-full lg:w-[440px] h-[420px] lg:h-[562px] rounded-[4px] pt-[24px] lg:pt-[38px] px-[24px] lg:px-[28px] shrink-0 flex flex-col"
              style={{ backgroundColor: card.bgColor }}
            >
              {/*
                Top Section
                MOBILE: Reduced height to 120px, margin-bottom to 32px
                DESKTOP: Locked to lg:h-[184px] and lg:mb-[56px]
              */}
              <div className="w-full max-w-[384px] h-[120px] lg:h-[184px] flex justify-between mb-[32px] lg:mb-[56px]">
                {/* Icon Box */}
                <div className="w-[120px] lg:w-[183px] h-[120px] lg:h-[184px] flex items-start justify-start">
                  <img
                    src={card.icon}
                    alt={card.pathName}
                    className="w-full h-full object-contain object-top mix-blend-multiply"
                  />
                </div>

                {/* Path Text */}
                <div className="text-right flex flex-col items-end pt-2">
                  <span
                    className="text-[14px] lg:text-[15px] font-satisfy text-gray-900 tracking-wide"
                    style={{ fontWeight: 400 }}
                  >
                    {card.pathNum}
                  </span>
                  <span className="text-[20px] lg:text-[22px] font-satisfy text-gray-900">
                    {card.pathName}
                  </span>
                </div>
              </div>

              {/* Bottom Section (Title + Button) */}
              <div className="w-full max-w-[384px] h-auto lg:h-[246px] flex flex-col justify-between flex-1 lg:flex-none pb-[24px] lg:pb-0">
                {/* Title */}
                <h3 className="text-[22px] lg:text-[26px] font-medium text-gray-900 leading-[1.2] pr-4">
                  {card.title}
                </h3>

                {/* Button */}
                <button className="w-full h-[52px] lg:h-[56px] bg-white text-gray-900 font-semibold text-[15px] rounded-[4px] transition-transform hover:scale-[1.02] mt-auto shadow-sm">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewriteChildhoodSection;
