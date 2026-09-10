import React from "react";

const JOB_OPENINGS = [
  {
    id: "programme-coordinator",
    title: "Programme Coordinator",
    description:
      "We're looking for a Programme Coordinator to help plan and manage our educational and community initiatives. You will work closely with children, volunteers, and local communities to ensure our programs create meaningful impact.",
    meta: "Programs • Full Time",
    applyUrl:
      "mailto:spwf.ngo@gmail.com?subject=Application%20-%20Programme%20Coordinator",
  },
  {
    id: "volunteer-coordinator",
    title: "Volunteer Coordinator",
    description:
      "We are seeking a Volunteer Coordinator to recruit, engage, and support volunteers across our initiatives. You will help build a strong volunteer community dedicated to empowering children.",
    meta: "Community • Full Time",
    applyUrl:
      "mailto:spwf.ngo@gmail.com?subject=Application%20-%20Volunteer%20Coordinator",
  },
  {
    id: "fundraising-associate",
    title: "Fundraising & Partnerships Associate",
    description:
      "Join us in building partnerships and raising resources to expand our impact. You will collaborate with donors, partners, and organizations to support SPWF's mission.",
    meta: "Partnerships • Full Time",
    applyUrl:
      "mailto:spwf.ngo@gmail.com?subject=Application%20-%20Fundraising%20%26%20Partnerships%20Associate",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
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

export default function JobOpenings({
  heading = "Job openings",
  jobs = JOB_OPENINGS,
}) {
  return (
    <section className="w-full bg-white flex justify-center">
      {/* Frame 2147226183 — 1440 wide, padding 120px 40px, gap 40 */}
      <div
        className="
          flex w-full max-w-[1440px] flex-col items-start
          px-[20px] py-[64px] gap-[24px]
          md:px-[32px] md:py-[88px] md:gap-[32px]
          lg:px-[40px] lg:py-[120px] lg:gap-[40px]
        "
      >
        {/* Heading — Sora 32px / 100% / -0.96px / capitalize */}
        <h2 className="m-0 font-['Sora'] font-normal capitalize text-black text-[clamp(24px,2.22vw,32px)] leading-[100%] tracking-[-0.96px]">
          {heading}
        </h2>

        {/* Cards — full width, bg #FDFAF2, padding 52px 37px */}
        <div className="flex w-full flex-col gap-[20px] lg:gap-[24px]">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="
                flex w-full flex-col gap-[20px]
                bg-[#FDFAF2]
                px-[24px] py-[32px]
                md:px-[32px] md:py-[44px]
                lg:flex-row lg:items-center lg:justify-between lg:gap-[64px] lg:px-[37px] lg:py-[52px]
              "
            >
              {/* copy column */}
              <div className="flex w-full min-w-0 flex-col">
                {/* Title — Sora 28px / 100% / -0.84px */}
                <h3 className="m-0 font-['Sora'] font-normal text-black text-[clamp(20px,1.94vw,28px)] leading-[100%] tracking-[-0.84px]">
                  {job.title}
                </h3>

                {/* Description — Inter 18px / 150% / #6C6C6C / justify */}
                <p className="m-0 mt-[16px] text-justify font-['Inter'] font-light text-[#6C6C6C] text-[clamp(14px,1.25vw,18px)] leading-[150%] lg:mt-[20px]">
                  {job.description}
                </p>

                {/* Meta — Inter 20px / 150% / #121212 */}
                <p className="m-0 mt-[16px] font-['Inter'] font-normal text-[#121212] text-[clamp(15px,1.39vw,20px)] leading-[150%] lg:mt-[24px]">
                  {job.meta}
                </p>
              </div>

              {/* Apply button — radius 5px, bg #000, padding 10px 20px, Inter 14px, gap 4 */}

              <a
                href={job.applyUrl}
                className="
                  inline-flex w-fit shrink-0 items-center justify-center gap-[4px]
                  rounded-[5px] bg-black px-[20px] py-[10px]
                  font-['Inter'] text-[14px] font-normal leading-[100%] text-white
                  transition-colors hover:bg-[#1f1f1f]
                "
              >
                Apply Now
                <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
