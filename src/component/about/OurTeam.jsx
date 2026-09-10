import React from "react";
import PersonCard from "./PersonCard";

const LEADERSHIP = [
  {
    name: "Priyanka Jha",
    role: "CEO & Founder",
    image: "/images/team/priyanka-jha.jpg",
  },
  {
    name: "Priyanka Jha",
    role: "CEO & Founder",
    image: "/images/team/priyanka-jha.jpg",
  },
];

const ADVISORY = [
  {
    name: "Priyanka Jha",
    role: "Advisory Board Member",
    image: "/images/team/advisor-01.jpg",
  },
  {
    name: "Priyanka Jha",
    role: "Advisory Board Member",
    image: "/images/team/advisor-02.jpg",
  },
  {
    name: "Priyanka Jha",
    role: "Advisory Board Member",
    image: "/images/team/advisor-03.jpg",
  },
  {
    name: "Priyanka Jha",
    role: "Advisory Board Member",
    image: "/images/team/advisor-04.jpg",
  },
];

export default function OurTeam({
  leadership = LEADERSHIP,
  advisory = ADVISORY,
}) {
  return (
    <section className="w-full bg-[#FEFAF1] flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[20px] sm:px-[40px] md:px-[80px] lg:px-[166px]
          py-[64px] sm:py-[80px] md:py-[100px] lg:py-[120px]
        "
      >
        <h2
          className="
            text-center font-['Sora'] font-normal text-black
            text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
            leading-[125%] tracking-[-1.2px]
          "
        >
          The{" "}
          <span className="font-['Satisfy'] tracking-[-0.88px] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            People
          </span>{" "}
          Behind
        </h2>

        <div
          className="
            mx-auto mt-[40px] grid grid-cols-2
            gap-x-[16px] gap-y-[36px] sm:gap-x-[24px] lg:gap-x-[28px]
            max-w-[540px]
            sm:mt-[48px] lg:mt-[64px]
          "
        >
          {leadership.map((person, i) => (
            <PersonCard key={`lead-${i}`} {...person} />
          ))}
        </div>

        <div
          className="
            mt-[40px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4
            gap-x-[16px] gap-y-[36px] sm:gap-x-[24px] lg:gap-x-[28px] lg:gap-y-[44px]
            sm:mt-[48px] lg:mt-[56px]
          "
        >
          {advisory.map((person, i) => (
            <PersonCard key={`advisor-${i}`} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
