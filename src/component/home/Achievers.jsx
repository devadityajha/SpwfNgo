import React from "react";

/*
 * Photos: har achiever ka apna image yahan daal do.
 * import mehek from "../../assets/images/mehek.png";
 */

import mehek1 from "../../assets/images/mehek1.png";
import mehek2 from "../../assets/images/mehek2.png";

const ACHIEVERS = [
  {
    name: "Mehek Khanna",
    story:
      "Mehek showed remarkable improvement in her studies and developed a strong interest in mathematics.",
    image: mehek1,
    bgColor: "#FF5255",
    dark: false,
  },
  {
    name: "Mehek Khanna",
    story:
      "Mehek showed remarkable improvement in her studies and developed a strong interest in mathematics.",
    image: mehek2,
    bgColor: "#E4FF4C",
    dark: true,
  },
  {
    name: "Mehek Khanna",
    story:
      "Mehek showed remarkable improvement in her studies and developed a strong interest in mathematics.",
    image: mehek2,
    bgColor: "#5FBCFF",
    dark: false,
  },
  {
    name: "Mehek Khanna",
    story:
      "Mehek showed remarkable improvement in her studies and developed a strong interest in mathematics.",
    image: mehek2,
    bgColor: "#FF5255",
    dark: false,
  },
];

export default function Archievers({ achievers = ACHIEVERS }) {
  return (
    /* Frame 2147227346 */
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[120px]">
        {/* "Our Achievers" — Sora 40px + Satisfy 44px, lh 125%, ls -1.2px */}
        <h2 className="text-center font-['Sora'] text-[28px] font-normal capitalize leading-[125%] tracking-[-0.84px] text-[#000000] sm:text-[34px] sm:tracking-[-1.02px] lg:text-[40px] lg:tracking-[-1.2px]">
          Our{" "}
          <span className="font-['Satisfy'] text-[31px] tracking-normal sm:text-[37px] lg:text-[44px]">
            Achievers
          </span>
        </h2>

        {/* 4 x 325 + 3 x 20 = 1360 — Figma ke content width se match */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[52px] lg:grid-cols-4">
          {achievers.map((person, index) => {
            const nameColor = person.dark ? "#121212" : "#FFFFFF";
            const bodyColor = person.dark ? "#1C1C1C" : "#F1F1F1";
            const ruleColor = person.dark
              ? "rgba(0,0,0,0.25)"
              : "rgba(255,255,255,0.5)";

            return (
              /* Frame 2147227338 — card */
              <article
                key={index}
                className="flex flex-col rounded-[8px] p-4"
                style={{ backgroundColor: person.bgColor }}
              >
                {/* Frame 2147227342 — photo 103 x 103, image 134 x 172 cropped */}
                <div className="flex justify-end">
                  <div className="h-[103px] w-[103px] overflow-hidden rounded-[4px] bg-black/10">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={person.name}
                        className="h-full w-full object-cover"
                      />
                    ) : null}
                  </div>
                </div>

                {/* Frame 2147227344 — name + rule */}
                <div className="mt-10">
                  <h3
                    className="font-['Sora'] text-[24px] font-semibold leading-[100%] tracking-[-0.72px]"
                    style={{ color: nameColor }}
                  >
                    {person.name}
                  </h3>

                  <div
                    className="mt-3 h-px w-full"
                    style={{ backgroundColor: ruleColor }}
                  />
                </div>

                {/* story — 293px wide, Inter 20 / 150% / -0.6px */}
                <p
                  className="mt-9 max-w-[293px] font-['Inter'] text-[16px] font-normal leading-[150%] tracking-[-0.6px] sm:text-[18px] lg:text-[20px]"
                  style={{ color: bodyColor }}
                >
                  {person.story}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
