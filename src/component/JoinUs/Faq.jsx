import { Fragment, useState } from "react";

const faqs = [
  {
    question: "Do I need prior experience to volunteer?",
    answer:
      "No, all you need is passion and a willingness to make a difference.",
  },
  {
    question: "Can students volunteer with SPWF?",
    answer:
      "Yes, students are welcome. We offer flexible schedules that work around classes and exams.",
  },
  {
    question: "What kind of opportunities are available at SPWF?",
    answer:
      "Teaching, event support, fundraising, content and design, and on-ground community programs.",
  },
  {
    question: "How much time do I need to commit?",
    answer:
      "As little as a few hours a week. You can scale up whenever your schedule allows.",
  },
  {
    question: "Will I receive training or guidance?",
    answer:
      "Yes, every volunteer is onboarded and supported by a coordinator throughout their programme.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="w-full bg-white pb-10 sm:pb-14 lg:pb-16">
      {/* Frame 2147226203 */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-start gap-8 px-5 sm:gap-12 sm:px-8 lg:gap-16 lg:px-10">
        <h2 className="w-full font-['Sora'] text-[26px] font-normal capitalize leading-[120%] tracking-[-0.96px] text-[#000000] sm:text-[32px]">
          FAQ&rsquo;s
        </h2>

        {/* Frame 2147226199 */}
        <div className="flex w-full flex-col gap-5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <Fragment key={item.question}>
                {/* Frame 2147226202 */}
                <div className="flex w-full flex-col">
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="w-full max-w-[504px] font-['Sora'] text-[16px] font-normal leading-[100%] tracking-[-0.18px] text-[#000000] sm:text-[18px]">
                      {item.question}
                    </span>
                    <svg
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className={`h-6 w-3 flex-shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? "rotate-90" : "rotate-0"
                      }`}
                    >
                      <path
                        d="M1.5 4.5L9 12L1.5 19.5"
                        stroke="#000000"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] pt-[10px] opacity-100"
                        : "grid-rows-[0fr] pt-0 opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="w-full font-['Inter'] text-[15px] font-light leading-[145%] tracking-[-0.16px] text-[#515151] sm:text-[16px]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Frame 2147226195 */}
                {index < faqs.length - 1 && (
                  <div className="h-px w-full bg-[#E1E1E1]" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
