import { useState } from "react";

const FAQS = [
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "No, all you need is passion and a willingness to make a difference.",
  },
  {
    question: "Can students volunteer with SPWF?",
    answer:
      "Yes. Students are welcome, and many of our volunteers are in college or school. We work around exam schedules and offer weekend slots so your studies always come first.",
  },
  {
    question: "What kind of opportunities are available at SPWF?",
    answer:
      "You can teach at a learning centre, help with skill development workshops, support our nutrition programme, assist at community events, or contribute remotely through design, content, and fundraising.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "Two hours a week is enough to make a real difference. What matters most is consistency, so we ask volunteers to stay with the same group for at least three months.",
  },
  {
    question: "Will I receive training or guidance?",
    answer:
      "Yes. Every volunteer is paired with a coordinator, sits in on sessions before leading one, and has someone to reach out to whenever a class does not go as planned.",
  },
];

/* weui:arrow-outlined — 12 × 24, aspect-ratio 1/2 */
const ArrowIcon = ({ open }) => (
  <svg
    width="12"
    height="24"
    viewBox="0 0 12 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`shrink-0 transition-transform duration-300 ease-out ${
      open ? "rotate-90" : ""
    }`}
  >
    <path
      d="M2.45199 6.58219L3.51299 5.52119L9.99199 12.0002L3.51299 18.4792L2.45199 17.4182L7.86999 12.0002L2.45199 6.58219Z"
      fill="#000000"
    />
  </svg>
);

export default function FaqSection({ heading = "FAQ's", faqs = FAQS }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white flex justify-center">
      <div className="w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[120px]">
        {/* FAQ's — Sora 32px / 120% / -0.96px / capitalize */}
        <h2 className="m-0 font-['Sora'] text-[24px] font-normal capitalize leading-[120%] tracking-[-0.72px] text-black lg:text-[32px] lg:tracking-[-0.96px]">
          {heading}
        </h2>

        <div className="mt-10 lg:mt-[56px]">
          {faqs.map((faq, index) => {
            const open = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[#E5E5E5] first:border-t"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left lg:py-[28px]"
                  >
                    {/* Question — Sora 18px / 100% / -0.18px */}
                    <span className="font-['Sora'] text-[16px] font-normal leading-[130%] tracking-[-0.16px] text-black lg:text-[18px] lg:leading-[100%] lg:tracking-[-0.18px]">
                      {faq.question}
                    </span>
                    <ArrowIcon open={open} />
                  </button>
                </h3>

                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    {/* Answer — Inter 16px / 300 / 145% / -0.16px / #515151 */}
                    <p className="m-0 max-w-[900px] pb-6 pr-8 font-['Inter'] text-[15px] font-light leading-[145%] tracking-[-0.16px] text-[#515151] lg:pb-[28px] lg:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
