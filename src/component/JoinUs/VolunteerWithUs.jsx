import React from "react";
import { Link } from "react-router-dom";
import volunteerImage from "../../assets/images/volunteerImage.png";

export default function VolunteerWithUs({
  scriptWord = "Volunteer",
  restOfTitle = "With Us",
  bullets = [
    "500+ children empowered",
    "Personalized learning support",
    "Safe and engaging classrooms",
    "Building confidence through education",
  ],
  ctaLabel = "Become A Volunteer",
  ctaTo = "/join-us",
  image = volunteerImage,
}) {
  return (
    <section className="w-full bg-[#E1662B] flex justify-center">
      {/* Frame 2147226864 — 1440 wide, padding 120px 40px */}
      <div
        className="
          flex w-full max-w-[1440px] flex-col
          px-[20px] py-[64px]
          md:px-[32px] md:py-[88px]
          lg:px-[40px] lg:py-[120px]
        "
      >
        {/* Frame 2147226865 — 1360 × 508, space-between, align center */}
        <div className="flex w-full flex-col items-stretch gap-[32px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]">
          {/* LEFT — copy block */}
          <div className="flex w-full flex-col items-start lg:w-[374px] lg:shrink-0">
            {/* Title — Satisfy 44px + Sora 44px, lh 100%, ls -1.32px */}
            <h2 className="m-0 font-['Sora'] font-normal text-white text-[clamp(30px,3.06vw,44px)] leading-[100%] tracking-[-1.32px]">
              <span className="font-['Satisfy']">{scriptWord}</span>{" "}
              {restOfTitle}
            </h2>

            {/* Bullets — Inter 20px / 150% / -0.6px */}
            <ul className="m-0 mt-[28px] flex list-disc flex-col gap-[6px] pl-[22px] lg:mt-[36px]">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="font-['Inter'] font-normal text-white text-[clamp(15px,1.39vw,20px)] leading-[150%] tracking-[-0.6px]"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            {/* CTA — full width of column, padding 14px 20px, Inter 16px/500 */}
            <Link
              to={ctaTo}
              className="
                mt-[28px] flex w-full items-center justify-center gap-[8px]
                bg-white px-[20px] py-[14px]
                font-['Inter'] text-[16px] font-medium leading-[150%] tracking-[-0.48px] text-black
                transition-colors hover:bg-[#F2F2F2]
                lg:mt-[36px]
              "
            >
              {ctaLabel}
            </Link>
          </div>

          {/* RIGHT — image, white 8px frame */}
          <div className="w-full bg-white p-[8px] lg:w-[946px] lg:shrink-0">
            <img
              src={image}
              alt="A volunteer teaching a group of children outdoors"
              loading="lazy"
              decoding="async"
              className="block h-full w-full object-cover aspect-[42/31] lg:aspect-[930/492]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
