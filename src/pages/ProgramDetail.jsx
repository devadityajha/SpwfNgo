// src/pages/ProgramDetail.jsx
import React, { useEffect, useRef, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { getProgramBySlug } from "../data/programsData";

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

export default function ProgramDetail() {
  const { slug } = useParams();
  const program = getProgramBySlug(slug);
  const sections = program?.detail?.sections ?? [];

  const [activeId, setActiveId] = useState(sections[0]?.id);
  const sectionRefs = useRef({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-96px 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [slug, sections.length]);

  if (!program) return <Navigate to="/programs" replace />;

  const handleNavClick = (id) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return (
    <section className="w-full bg-white flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[20px] pt-[96px] pb-[72px]
          md:px-[32px] md:pt-[112px]
          lg:px-[40px] lg:pt-[128px] lg:pb-[120px]
        "
      >
        {/* Title row */}
        <div className="flex flex-col gap-[20px] sm:flex-row sm:items-center sm:justify-between">
          <h1 className="m-0 font-['Sora'] text-[24px] font-normal leading-[130%] tracking-[-0.03em] text-black lg:text-[32px]">
            {program.number} {program.title}
          </h1>

          <Link
            to="/join-us"
            className="
              inline-flex h-[48px] w-fit items-center justify-center rounded-[8px]
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

        {/* Body */}
        <div className="mt-[36px] flex flex-col gap-[40px] lg:mt-[48px] lg:flex-row lg:gap-[120px]">
          {/* Sticky section nav */}
          <nav className="lg:w-[300px] lg:shrink-0">
            <ul className="m-0 flex list-none flex-col border-l border-[#E0E0E0] p-0 lg:sticky lg:top-[100px]">
              {sections.map((section) => {
                const isActive = section.id === activeId;
                return (
                  <li key={section.id} className="relative">
                    {isActive && (
                      <span className="absolute left-[-1px] top-0 h-full w-[2px] bg-black" />
                    )}
                    <button
                      type="button"
                      onClick={() => handleNavClick(section.id)}
                      className={`
                        w-full py-[14px] pl-[20px] pr-[8px] text-left
                        font-['Sora'] text-[15px] font-normal tracking-[-0.01em]
                        transition-colors lg:text-[16px]
                        ${isActive ? "text-black" : "text-[#777777] hover:text-black"}
                      `}
                    >
                      {section.navLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Content */}
          <div className="flex w-full min-w-0 flex-col">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                ref={(el) => (sectionRefs.current[section.id] = el)}
                className="scroll-mt-[96px]"
              >
                {section.imageBefore && (
                  <img
                    src={section.imageBefore}
                    alt={program.title}
                    loading="lazy"
                    decoding="async"
                    className="block w-full rounded-[4px] object-cover aspect-[920/410]"
                  />
                )}

                {section.heading && (
                  <h2 className="mb-[20px] mt-[40px] font-['Sora'] text-[24px] font-normal leading-[130%] tracking-[-0.02em] text-black lg:mt-[56px] lg:text-[32px]">
                    {section.heading}
                  </h2>
                )}

                <div
                  className={`flex flex-col gap-[20px] ${
                    section.imageBefore ? "mt-[28px] lg:mt-[36px]" : ""
                  }`}
                >
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="m-0 font-['Sora'] text-[15px] font-normal leading-[28px] tracking-[-0.01em] text-[#515151] lg:text-[16px] lg:leading-[30px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.imageAfter && (
                  <img
                    src={section.imageAfter}
                    alt={program.title}
                    loading="lazy"
                    decoding="async"
                    className="mt-[36px] block w-full rounded-[4px] object-cover aspect-[920/410] lg:mt-[48px]"
                  />
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
