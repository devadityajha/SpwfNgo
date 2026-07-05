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
  },
  {
    id: 2,
    pathNum: "Path 02 .",
    pathName: "Show up",
    title: "Volunteer to create a difference in a child's life.",
    buttonText: "Volunteer",
    bgColor: "#E4FF4C", // Exact hex from Figma
    icon: volunteerIcon,
  },
  {
    id: 3,
    pathNum: "Path 03 .",
    pathName: "Commit",
    title: "Become a sponsor to help shape a child's future.",
    buttonText: "Become A Sponsor",
    bgColor: "#5FBCFF", // Exact hex from Figma
    icon: sponsorIcon,
  },
];

const RewriteChildhoodSection = () => {
  return (
    <section className="w-full py-[120px] flex flex-col items-center bg-white font-sans text-gray-900">
      <div className="w-[1360px] max-w-full px-4 xl:px-0 mx-auto flex flex-col">
        {/* Section Heading */}
        <h2 className="text-center text-[44px] leading-tight mb-[64px] font-medium">
          You Can{" "}
          <span style={{ fontFamily: "'Satisfy', cursive" }}>
            Rewrite A Childhood
          </span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-[20px] w-full h-auto lg:h-[562px]">
          {pathCards.map((card) => (
            <div
              key={card.id}
              className="w-full lg:w-[440px] h-[562px] rounded-[4px] pt-[38px] px-[28px] shrink-0 flex flex-col"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* Top Section (Icon + Path) - Gap 56px from bottom section as per Screenshot 6 */}
              <div className="w-full max-w-[384px] h-[184px] flex justify-between mb-[56px]">
                {/* Icon Box */}
                <div className="w-[183px] h-[184px] flex items-start justify-start">
                  <img
                    src={card.icon}
                    alt={card.pathName}
                    className="w-full h-auto object-contain object-top mix-blend-multiply"
                  />
                </div>

                {/* Path Text */}
                <div className="text-right flex flex-col items-end pt-2">
                  <span
                    className="text-[15px] font-satisfy text-gray-900 tracking-wide"
                    style={{ fontWeight: 400 }}
                  >
                    {card.pathNum}
                  </span>
                  <span className="text-[22px] font-satisfy text-gray-900">
                    {card.pathName}
                  </span>
                </div>
              </div>

              {/* Bottom Section (Title + Button) - Height Hug (246px) as per Screenshot 10 */}
              <div className="w-full max-w-[384px] h-[246px] flex flex-col justify-between">
                {/* Title */}
                <h3 className="text-[26px] font-medium text-gray-900 leading-[1.2] pr-4">
                  {card.title}
                </h3>

                {/* Button - Gap 68px from title implicitly handled by justify-between */}
                <button className="w-full h-[56px] bg-white text-gray-900 font-semibold text-[15px] rounded-[4px] transition-transform hover:scale-[1.02] mt-auto shadow-sm">
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
