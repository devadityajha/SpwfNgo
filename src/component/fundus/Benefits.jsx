// import benefitsIndividual from "../../assets/images/benefits-individual.png";
// import benefitsOrganization from "../../assets/images/benefits-organization.png";

const blocks = [
  {
    id: "individual",
    titleLead: "Benefits as an",
    titleScript: "Individual",
    // image: benefitsIndividual,
    reverse: false,
    points: [
      "Make a meaningful difference",
      "Support a child's education",
      "Help provide care and nutrition",
      "Be part of lasting change",
    ],
  },
  {
    id: "organization",
    titleLead: "Benefits as an",
    titleScript: "Organization",
    // image: benefitsOrganization,
    reverse: true,
    points: [
      "Strengthen your social impact",
      "Support education at scale",
      "Build meaningful community partnerships",
      "Create lasting value for society",
    ],
  },
];

const Benefits = () => {
  return (
    /* Frame 2147226864 + Frame 2147226865 */
    <section className="w-full bg-[#F77126] py-16 sm:py-20 lg:py-[120px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-5 sm:gap-20 sm:px-8 lg:gap-[120px] lg:px-10">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`flex w-full flex-col items-start gap-10 lg:items-center lg:gap-0 lg:justify-between ${
              block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Frame 2147226856 — text column */}
            <div className="flex w-full flex-col gap-6 lg:w-auto lg:max-w-[555px] lg:gap-8">
              <h2 className="font-['Sora'] text-[28px] font-semibold leading-[100%] tracking-[-0.84px] text-[#FFFFFF] sm:text-[32px] sm:tracking-[-0.96px] lg:text-[40px] lg:tracking-[-1.2px]">
                {block.titleLead}{" "}
                <span className="font-['Satisfy'] font-normal">
                  {block.titleScript}
                </span>
              </h2>

              <ul className="flex list-disc flex-col gap-[6px] pl-5">
                {block.points.map((point) => (
                  <li
                    key={point}
                    className="font-['Inter'] text-[16px] font-normal leading-[150%] tracking-[-0.6px] text-[#FFFFFF] sm:text-[18px] lg:text-[20px]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Frame 2147226852 — image */}
            <div className="w-full shrink-0 overflow-hidden rounded-[8px] border-[8px] border-white lg:w-[680px] lg:border-[12px]">
              {/* <img
                src={block.image}
                alt=""
                aria-hidden="true"
                className="aspect-[680/508] h-full w-full bg-[#626262] object-cover"
              /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
