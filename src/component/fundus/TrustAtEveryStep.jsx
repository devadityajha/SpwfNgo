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
    /* Frame 2147226804 */
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 sm:gap-[52px] sm:px-8 sm:py-20 lg:px-10 lg:py-[120px]">
        <h2 className="text-center font-['Sora'] text-[28px] font-normal leading-[120%] tracking-[-0.84px] text-[#000000] sm:text-[32px] sm:tracking-[-0.96px] lg:text-[40px] lg:tracking-[-1.2px]">
          <span className="font-['Satisfy'] tracking-normal">Trust</span> At
          Every Step
        </h2>

        <ul className="grid w-full list-none grid-cols-1 gap-2 p-0 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.label}
              className="flex min-h-[240px] flex-col items-center justify-center rounded-[8px] border border-[#E1E1E1] bg-white px-6 py-10 sm:min-h-[320px] lg:min-h-[400px]"
            >
              <span className="block h-12 w-12">{item.icon}</span>

              <p className="mt-8 text-center font-['Sora'] text-[16px] font-normal leading-[140%] tracking-[-0.4px] text-[#000000] sm:text-[18px] lg:mt-10 lg:text-[20px]">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
