import React from "react";
import shiksharth from "../../assets/images/shiksharth.png";
import kaushal from "../../assets/images/kaushal.png";
import aahar from "../../assets/images/aahar.png";

const programs = [
  { name: "Education", image: shiksharth, bgColor: "#FF5255" },
  { name: "Skill Development", image: kaushal, bgColor: "#D4F53C" },
  { name: "Nutrition", image: aahar, bgColor: "#5FBCFF" },
];

const Contribution = () => {
  return (
    /* Frame 2147226758 */
    <section className="w-full bg-[#FFFBF2] py-16 sm:py-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 sm:gap-16 sm:px-8 lg:gap-20 lg:px-10">
        <h2 className="text-center font-['Sora'] text-[26px] font-normal capitalize leading-[120%] tracking-[-0.96px] text-[#000000] sm:text-[32px]">
          Where Your{" "}
          <span className="font-['Satisfy'] tracking-normal">Contribution</span>{" "}
          Goes
        </h2>

        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6">
          {programs.map((program) => (
            <div
              key={program.name}
              className="flex flex-col items-center gap-6 lg:gap-8"
            >
              <div
                className="flex aspect-square w-full max-w-[320px] items-center justify-center rounded-[24px]"
                style={{ backgroundColor: program.bgColor }}
              >
                <img
                  src={program.image}
                  alt={program.name}
                  className="h-[60%] w-[60%] object-contain"
                />
              </div>

              <p className="text-center font-['Sora'] text-[18px] font-normal leading-[100%] tracking-[-0.36px] text-[#000000] lg:text-[20px]">
                {program.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contribution;
