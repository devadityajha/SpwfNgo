// src/component/Programs/ProgramsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { programs as defaultPrograms } from "../../data/programsData";

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="ml-[10px]"
    >
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProgramCard({ program }) {
  return (
    <article
      className="
        flex w-full flex-col items-start
        rounded-[12px] border border-[#E5E5E5] bg-white
        p-[20px] gap-[32px]
        md:p-[32px]
        lg:flex-row lg:p-[40px] lg:gap-[145px]
      "
    >
      {/* LEFT COLUMN — 462 × 580 in Figma */}
      <div className="flex w-full flex-col items-start gap-[32px] lg:w-[462px] lg:shrink-0 lg:min-h-[580px] lg:gap-[52px]">
        {/* top block — gap 24 */}
        <div className="flex w-full flex-col items-start gap-[16px] lg:gap-[24px]">
          <span className="font-['Sora'] text-[24px] font-normal leading-[100%] tracking-[-0.02em] text-black lg:text-[28px]">
            {program.number}
          </span>

          <span
            className="flex h-[92px] w-[92px] items-center justify-center rounded-[15px] lg:h-[120px] lg:w-[120px]"
            style={{ backgroundColor: program.iconBg }}
          >
            <img
              src={program.icon}
              alt=""
              aria-hidden="true"
              className="h-[56px] w-[65px] object-contain lg:h-[73px] lg:w-[85px]"
            />
          </span>

          <h3 className="font-['Sora'] text-[26px] font-normal leading-[120%] tracking-[-0.03em] text-black lg:text-[32px]">
            {program.title}
          </h3>
        </div>

        {/* bottom block — gap 28 */}
        <div className="flex w-full flex-col items-start gap-[24px] lg:gap-[28px]">
          <ul className="m-0 flex list-disc flex-col gap-[8px] pl-[22px]">
            {program.bullets.map((bullet) => (
              <li
                key={bullet}
                className="font-['Sora'] text-[15px] font-normal leading-[24px] tracking-[-0.01em] text-[#1A1A1A] lg:text-[18px]"
              >
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-[16px]">
            <Link
              to={`/programs/${program.slug}`}
              className="
                flex h-[48px] items-center justify-center rounded-[8px]
                border border-black bg-white px-[28px]
                font-['Sora'] text-[15px] font-normal tracking-[-0.01em] text-black
                transition-colors hover:bg-black hover:text-white
                lg:h-[56px] lg:px-[36px] lg:text-[16px]
              "
            >
              Learn more
            </Link>

            <Link
              to="/join-us"
              className="
                flex h-[48px] items-center justify-center rounded-[8px]
                bg-black px-[24px]
                font-['Sora'] text-[15px] font-normal tracking-[-0.01em] text-white
                transition-colors hover:bg-[#1f1f1f]
                lg:h-[56px] lg:px-[28px] lg:text-[16px]
              "
            >
              Contribute Now
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — 673 × 570 in Figma, gap 40 */}
      <div className="flex w-full flex-1 flex-col items-start gap-[24px] lg:gap-[40px]">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          decoding="async"
          className="block w-full rounded-[8px] object-cover aspect-[673/420]"
        />

        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:gap-[40px]">
          <p className="m-0 font-['Sora'] text-[15px] font-normal leading-[28px] tracking-[-0.01em] text-[#4B4B4B] lg:text-[16px]">
            {program.description}
          </p>
          <p className="m-0 hidden font-['Sora'] text-[15px] font-normal leading-[28px] tracking-[-0.01em] text-[#4B4B4B] sm:block lg:text-[16px]">
            {program.descriptionSecondary || program.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ProgramsList({ programs = defaultPrograms }) {
  return (
    <section className="w-full bg-white flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[20px] py-[56px]
          md:px-[32px] md:py-[80px]
          lg:px-[40px] lg:py-[100px]
        "
      >
        <div className="flex w-full flex-col items-start gap-[24px] lg:gap-[40px]">
          {programs.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
}
