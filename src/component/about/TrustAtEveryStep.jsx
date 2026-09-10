import React from "react";

const TRUST_ITEMS = [
  {
    label: "Registered & Certified",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M11 6h17l9 9v27a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M28 6v9h9"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="26" r="5.4" stroke="#000" strokeWidth="2.6" />
        <path
          d="M20.4 30.6 19 39l5-2.6L29 39l-1.4-8.4"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "80G Tax Benefits",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9 7h30v34l-5-3-5 3-5-3-5 3-5-3-5 3V7Z"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="M15 15h18M15 22h18M15 29h11"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Verified Donation Receipts",
    icon: (
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M24 5.5 29.2 9l6.2-.5 1.6 6 4.6 4.2-3 5.4 1 6.2-6 1.9-3.4 5.2-6.2-1.4-6.2 1.4-3.4-5.2-6-1.9 1-6.2-3-5.4L11 14.5l1.6-6 6.2.5L24 5.5Z"
          stroke="#000"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />
        <path
          d="m18.5 23.5 4 4 7.5-8"
          stroke="#000"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function TrustAtEveryStep({ items = TRUST_ITEMS }) {
  return (
    <section className="w-full bg-[#F77126] flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[20px] sm:px-[40px] md:px-[80px] lg:px-[166px]
          py-[64px] sm:py-[80px] md:py-[100px] lg:py-[120px]
        "
      >
        <h2
          className="
            text-center font-['Sora'] font-normal text-white
            text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]
            leading-[125%] tracking-[-1.2px]
          "
        >
          <span className="font-['Satisfy'] tracking-[-0.88px] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px]">
            Trust
          </span>{" "}
          At Every Step
        </h2>

        <ul
          className="
            mt-[36px] grid grid-cols-1 sm:grid-cols-3
            gap-[20px] md:gap-[24px] lg:gap-[28px]
            list-none p-0
            sm:mt-[48px] lg:mt-[64px]
          "
        >
          {items.map((item) => (
            <li
              key={item.label}
              className="
                flex flex-col items-center justify-center
                rounded-[16px] bg-white
                px-[24px] py-[40px]
                min-h-[200px] sm:min-h-[260px] lg:min-h-[336px]
              "
            >
              <span className="block w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]">
                {item.icon}
              </span>
              <p
                className="
                  mt-[20px] text-center font-['Sora'] font-normal text-black
                  text-[16px] sm:text-[18px] lg:text-[20px]
                  leading-[140%] tracking-[-0.4px]
                  lg:mt-[28px]
                "
              >
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
