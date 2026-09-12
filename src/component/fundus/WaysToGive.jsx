import React from "react";

// Import your exported assets here
import donateIcon from "../../assets/images/donate-icon.png";
import volunteerIcon from "../../assets/images/volunteer-icon.png";
import sponsorIcon from "../../assets/images/sponsor-icon.png";
import kidStanding from "../../assets/images/kid-standing.png"; // For the bottom illustration

const pathCards = [
  {
    id: 1,
    pathName: "Give",
    title: "Donate to help children learn, grow, and thrive.",
    buttonText: "Donate",
    bgColor: "#FF5255",
    icon: donateIcon,
  },
  {
    id: 2,
    pathName: "Commit",
    title: "Partner with us to create brighter futures together.",
    buttonText: "Become a Partner",
    bgColor: "#5FBCFF",
    icon: sponsorIcon,
  },
];

const WaysToGive = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 sm:px-8 lg:px-10">
        <h2 className="mb-10 text-center font-['Sora'] text-[26px] font-normal capitalize leading-[120%] tracking-[-0.96px] text-[#000000] sm:text-[32px] lg:mb-16">
          You Can{" "}
          <span className="font-['Satisfy'] tracking-normal">
            Rewrite A Childhood
          </span>
        </h2>

        <div className="flex w-full flex-col gap-2 lg:flex-row">
          {pathCards.map((card) => (
            /* Frame 2147226809 / 2147226810 */
            <div
              key={card.id}
              className="flex w-full flex-col p-6 sm:p-8 lg:h-[620px] lg:flex-1 lg:p-10"
              style={{ backgroundColor: card.bgColor }}
            >
              {/* icon + script label row */}
              <div className="flex w-full items-start justify-between gap-4">
                <img
                  src={card.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-[104px] w-auto object-contain object-left-top sm:h-[128px] lg:h-[152px]"
                />
                <span className="font-['Satisfy'] text-[20px] leading-none text-[#000000] lg:text-[24px]">
                  {card.pathName}
                </span>
              </div>

              {/* title + button */}
              <div className="mt-12 flex flex-col gap-10 lg:mt-auto lg:gap-16">
                <h3 className="max-w-[333px] font-['Sora'] text-[24px] font-normal leading-[125%] tracking-[-0.48px] text-[#000000] sm:text-[28px] lg:text-[32px] lg:tracking-[-0.64px]">
                  {card.title}
                </h3>

                <button
                  type="button"
                  className="h-[52px] w-full rounded-[4px] bg-white font-['Sora'] text-[15px] font-medium text-[#000000] transition-opacity duration-200 hover:opacity-90 lg:h-[56px] lg:text-[16px]"
                >
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

export default WaysToGive;
