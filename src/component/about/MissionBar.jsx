// import childrenIllustration from "../../assets/images/children-illustration.png";

// export default function AboutOrangeSection() {
//   return (
//     <section className="relative w-full overflow-hidden bg-[#F77126] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[810px]">
//       {/* Centered Text Block */}
//       <p
//         className="
//           absolute left-1/2 -translate-x-1/2
//           top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px]
//           w-[90%] max-w-[1045px]
//           text-center text-white
//           font-['Sora'] font-normal
//           text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px]
//           leading-[150%] tracking-[-0.03em]
//         "
//       >
//         Shakuntala Poddar Welfare Foundation was founded with a simple yet
//         powerful belief - every child deserves the opportunity to learn, grow,
//         and dream. What began as a small effort to support underprivileged
//         children has grown into a community-driven movement focused on
//         education, skill development, nutrition, and holistic care.
//       </p>

//       {/* Bottom Illustration */}
//       <img
//         src={childrenIllustration}
//         alt="Children illustration"
//         className="
//           absolute top-[355px] left-1/2 -translate-x-1/2  lg:top-[203px]
//           w-full h-auto object-cover
//           pointer-events-none select-none
//         "
//       />
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import childrenIllustration from "../../assets/images/children-illustration.png";

const COPY =
  "Shakuntala Poddar Welfare Foundation was founded with a simple yet powerful belief - every child deserves the opportunity to learn, grow, and dream. What began as a small effort to support underprivileged children has grown into a community-driven movement focused on education, skill development, nutrition, and holistic care.";

export default function AboutOrangeSection() {
  const paraRef = useRef(null);
  const wordsRef = useRef([]);
  const rafRef = useRef(0);

  const words = COPY.split(" ");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      wordsRef.current.forEach((el) => el && (el.style.opacity = "1"));
      return;
    }

    const paint = () => {
      rafRef.current = 0;
      const para = paraRef.current;
      if (!para) return;

      const rect = para.getBoundingClientRect();
      const vh = window.innerHeight;

      // starts when the paragraph enters low in the viewport,
      // finishes once its last line has passed the middle
      const span = vh * 0.4 + rect.height;
      const progress = Math.min(Math.max((vh * 0.85 - rect.top) / span, 0), 1);

      const head = progress * (wordsRef.current.length + 6);

      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        const t = Math.min(Math.max(head - i, 0), 1);
        el.style.opacity = `${0.28 + t * 0.72}`;
      });
    };

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F77126] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[810px]">
      {/* Centered Text Block */}
      <p
        ref={paraRef}
        className="
          absolute left-1/2 -translate-x-1/2
          top-[60px] sm:top-[80px] md:top-[100px] lg:top-[120px]
          w-[90%] max-w-[1045px]
          text-center text-white
          font-['Sora'] font-normal
          text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px]
          leading-[150%] tracking-[-0.03em]
        "
      >
        {words.map((word, i) => (
          <span
            key={`${word}-${i}`}
            ref={(el) => (wordsRef.current[i] = el)}
            style={{ opacity: 0.28, transition: "opacity 220ms linear" }}
          >
            {word}{" "}
          </span>
        ))}
      </p>

      {/* Bottom Illustration */}
      <img
        src={childrenIllustration}
        alt="Children illustration"
        className="
          absolute top-[355px] left-1/2 -translate-x-1/2  lg:top-[203px] 
          w-full h-auto object-cover
          pointer-events-none select-none
        "
      />
    </section>
  );
}
