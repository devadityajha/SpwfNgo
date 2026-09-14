import { useEffect, useRef } from "react";

import journey01 from "../../assets/images/journey-01.png";
import journey02 from "../../assets/images/journey-02.png";
import journey03 from "../../assets/images/journey-03.png";
import journey04 from "../../assets/images/journey-04.jpg";
import journey05 from "../../assets/images/journey-05.png";

const DEFAULT_MILESTONES = [
  {
    year: "2018 – 2020",
    title: "Building Foundations",
    text: "Launched our first educational initiatives, reaching children from underserved communities and creating safe learning spaces.",
    image: journey01,
    alt: "A girl writing on a blackboard in a classroom",
  },
  {
    year: "2020 – 2022",
    title: "Expanding Reach",
    text: "Expanded programs in education and skill development, supporting more children and strengthening community engagement.",
    image: journey02,
    alt: "Students raising their hands in a classroom",
  },
  {
    year: "2022 – 2024",
    title: "Growing Together",
    text: "Built strong partnerships, introduced new initiatives, and fostered holistic development through learning, nutrition, and mentorship.",
    image: journey03,
    alt: "A mentor doing a craft activity with a group of girls",
  },
  {
    year: "2024 – 2026",
    title: "Scaling Impact",
    text: "Enhanced our outreach through larger community programs, volunteer networks, and sustained support for children's long-term growth.",
    image: journey04,
    alt: "A child colouring a drawing with crayons",
  },
];

const DEFAULT_INTRO = {
  badge: "Established In 2018",
  title: "The Beginning",
  text: "SPWF was founded with a vision to create equal opportunities for underprivileged children through education and care.",
};

const DEFAULT_CLOSING = {
  badge: "Present",
  title: "Creating Brighter Futures",
  text: "Today, SPWF continues to empower children with education, care, and opportunities, working towards a more equitable future for all.",
  image: journey05,
  alt: "A group of smiling children standing together",
};

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Satisfy&family=Sora:wght@300;400;500;600&display=swap');

.oj{
  --oj-ink:#000;
  --oj-muted:#696969;
  --oj-track:#e4e4e4;
  --oj-line-w:6px;
  --oj-loop-w:38px;
  --oj-loop-h:calc(var(--oj-loop-w) * 352 / 38);
  --oj-line-x:50%;
  --oj-col-gap:96px;
  --oj-ease:cubic-bezier(.16,1,.3,1);
  position:relative;
  width:100%;
  background:#fff;
  color:var(--oj-ink);
  font-family:'Sora',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;
  font-weight:400;
  padding:clamp(56px,8vw,120px) clamp(16px,5vw,64px) clamp(72px,10vw,150px);
  -webkit-font-smoothing:antialiased;
}
.oj *{box-sizing:border-box;}
.oj-inner{max-width:1240px;margin:0 auto;}

/* ---- headings / type ---- */
.oj-title{
  margin:0 0 clamp(28px,4vw,44px);
  text-align:center;
  font-weight:400;
  font-size:clamp(28px,4.2vw,40px);
  line-height:1.25;
  letter-spacing:-1.2px;
  text-transform:capitalize;
}
.oj-title .oj-script-word{
  font-family:'Satisfy',cursive;
  font-size:clamp(32px,4.8vw,44px);
  line-height:1.2;
  letter-spacing:-.88px;
}
.oj-h3{
  margin:0 0 14px;
  font-family:'Satisfy',cursive;
  font-weight:400;
  font-size:clamp(26px,3.4vw,32px);
  line-height:1.4;
  letter-spacing:-.96px;
  text-transform:capitalize;
  color:var(--oj-ink);
}
.oj-p{
  margin:0;
  color:var(--oj-muted);
  font-size:clamp(14px,1.15vw,16px);
  line-height:1.75;
  letter-spacing:-.2px;
  text-transform:capitalize;
  max-width:60ch;
}
.oj-pill{
  display:inline-block;
  border:1.5px solid var(--oj-ink);
  border-radius:999px;
  background:#fff;
  padding:11px 22px;
  font-size:clamp(13px,1.1vw,16px);
  line-height:1;
  letter-spacing:-.48px;
  text-transform:capitalize;
  white-space:nowrap;
}

/* ---- intro ---- */
.oj-intro{max-width:760px;margin:0 auto;text-align:center;}
.oj-intro .oj-h3{margin-top:clamp(22px,3vw,34px);}
.oj-intro .oj-p{margin:0 auto;}

/* ---- timeline shell ---- */
.oj-timeline{position:relative;}
.oj-line{
  position:absolute;
  top:0;bottom:0;
  left:var(--oj-line-x);
  width:0;
  z-index:0;
  pointer-events:none;
}
.oj-loop{
  position:absolute;
  top:0;
  left:calc(var(--oj-loop-w) * -32 / 38);
  width:var(--oj-loop-w);
  height:var(--oj-loop-h);
  overflow:visible;
}
.oj-loop path{
  fill:none;
  stroke-width:var(--oj-line-w);
  stroke-linecap:round;
  stroke-linejoin:round;
  vector-effect:non-scaling-stroke;
}
.oj-loop .oj-loop-track{stroke:var(--oj-track);}
.oj-loop .oj-loop-fill{stroke:var(--oj-ink);}
.oj-rail{
  position:absolute;
  top:calc(var(--oj-loop-h) - 2px);
  bottom:0;
  left:calc(var(--oj-line-w) / -2);
  width:var(--oj-line-w);
  background:var(--oj-track);
  border-radius:var(--oj-line-w);
  overflow:hidden;
}
.oj-rail-fill{
  position:absolute;
  inset:0;
  background:var(--oj-ink);
  transform:scaleY(0);
  transform-origin:top center;
  will-change:transform;
}
.oj-endcap{
  position:absolute;
  left:0;bottom:0;
  width:14px;height:14px;
  border-radius:50%;
  background:var(--oj-track);
  transform:translate(-50%,50%) scale(1);
  transition:background .4s var(--oj-ease),box-shadow .4s var(--oj-ease),transform .4s var(--oj-ease);
}
.oj-endcap.is-on{
  background:var(--oj-ink);
  box-shadow:0 0 0 7px rgba(0,0,0,.06);
  transform:translate(-50%,50%) scale(1.15);
}

/* ---- rows ---- */
.oj-rows{
  list-style:none;
  margin:0;
  padding:calc(var(--oj-loop-h) + 2px) 0 0;
  position:relative;
  z-index:1;
}
.oj-row{
  position:relative;
  display:grid;
  grid-template-columns:1fr 1fr;
  column-gap:var(--oj-col-gap);
  align-items:start;
}
.oj-row + .oj-row{margin-top:clamp(72px,11vw,150px);}

.oj-marker{position:absolute;top:0;left:var(--oj-line-x);width:0;height:0;z-index:2;}
.oj-dot{
  position:absolute;left:0;top:0;
  width:14px;height:14px;
  border-radius:50%;
  background:var(--oj-track);
  transform:translate(-50%,-50%) scale(1);
  transition:background .4s var(--oj-ease),box-shadow .4s var(--oj-ease),transform .4s var(--oj-ease);
}
.oj-dot.is-on{
  background:var(--oj-ink);
  box-shadow:0 0 0 7px rgba(0,0,0,.06);
  transform:translate(-50%,-50%) scale(1.15);
}
.oj-year{position:absolute;top:0;transform:translateY(-50%);}
.oj-row[data-side="left"] .oj-year{right:34px;}
.oj-row[data-side="right"] .oj-year{left:34px;}

.oj-copy{max-width:520px;padding-top:clamp(46px,6vw,72px);}
.oj-media{margin:0;width:100%;max-width:657px;overflow:hidden;}
.oj-media img,.oj-media .oj-ph{
  display:block;
  width:100%;
  aspect-ratio:3 / 2;
  object-fit:cover;
  background:#efefef;
}
.oj-row[data-side="left"] .oj-copy{grid-column:1;justify-self:end;text-align:right;}
.oj-row[data-side="left"] .oj-copy .oj-p{margin-left:auto;}
.oj-row[data-side="left"] .oj-media{grid-column:2;justify-self:start;}
.oj-row[data-side="right"] .oj-copy{grid-column:2;justify-self:start;text-align:left;}
.oj-row[data-side="right"] .oj-media{grid-column:1;justify-self:end;}

/* ---- closing ---- */
.oj-closing{max-width:820px;margin:clamp(38px,5vw,60px) auto 0;text-align:center;position:relative;z-index:2;}
.oj-closing .oj-h3{margin-top:clamp(20px,3vw,30px);}
.oj-closing .oj-p{margin:0 auto;}
.oj-closing .oj-media{margin:clamp(26px,3.5vw,44px) auto 0;max-width:673px;}
.oj-closing .oj-media[data-reveal]{
  transform:translate3d(0,64px,0);
  transition:opacity 1.1s var(--oj-ease), transform 1.6s var(--oj-ease);
  transition-delay:.1s;
}
.oj-closing .oj-media[data-reveal].is-in{transform:none;}
.oj-closing .oj-media img,.oj-closing .oj-media .oj-ph{aspect-ratio:673 / 449;}

/* ---- reveal ---- */
.oj [data-reveal]{
  opacity:0;
  transform:translate3d(0,34px,0);
  transition:
    opacity .9s var(--oj-ease),
    transform 1.05s var(--oj-ease),
    filter .9s var(--oj-ease);
  will-change:opacity,transform;
}
.oj [data-reveal].is-in{opacity:1;transform:none;}

/* copy apni side se slide hota hai */
.oj-row[data-side="left"] .oj-copy[data-reveal]{transform:translate3d(-42px,26px,0);}
.oj-row[data-side="right"] .oj-copy[data-reveal]{transform:translate3d(42px,26px,0);}
.oj-row[data-side="left"] .oj-copy[data-reveal].is-in,
.oj-row[data-side="right"] .oj-copy[data-reveal].is-in{transform:none;}

/* media thoda zoom-out hoke settle hoti hai, aur copy ke baad aati hai */

// .oj-row[data-side="left"] .oj-media[data-reveal]{
//   transform:translate3d(-56px,0,0);
//   transition:opacity 1.1s var(--oj-ease), transform 1.4s var(--oj-ease);
//   transition-delay:.12s;
// }
// .oj-row[data-side="right"] .oj-media[data-reveal]{
//   transform:translate3d(56px,0,0);
//   transition:opacity 1.1s var(--oj-ease), transform 1.4s var(--oj-ease);
//   transition-delay:.12s;
// }

.oj-row[data-side="left"] .oj-media[data-reveal]{
  transform:translate3d(-72px,0,0);
  transition:opacity 1.1s var(--oj-ease), transform 1.8s var(--oj-ease);
  transition-delay:.12s;
}
.oj-row[data-side="right"] .oj-media[data-reveal]{
  transform:translate3d(72px,0,0);
  transition:opacity 1.1s var(--oj-ease), transform 1.8s var(--oj-ease);
  transition-delay:.12s;
}



.oj-row[data-side="left"] .oj-media[data-reveal].is-in,
.oj-row[data-side="right"] .oj-media[data-reveal].is-in{transform:none;}







.oj-media[data-reveal] img,
.oj-media[data-reveal] .oj-ph{
  transform:scale(1.08);
  transition:transform 1.3s var(--oj-ease);
  will-change:transform;
}
.oj-media[data-reveal].is-in img,
.oj-media[data-reveal].is-in .oj-ph{transform:scale(1);}

/* ---- tablet ---- */
@media (max-width:1080px){
  .oj{--oj-col-gap:56px;}
  .oj-copy{padding-top:56px;}
}

/* ---- mobile ---- */
@media (max-width:860px){
  .oj{
    --oj-line-x:22px;
    --oj-loop-w:28px;
    --oj-line-w:5px;
    --oj-col-gap:0px;
    padding-left:clamp(14px,4vw,24px);
    padding-right:clamp(14px,4vw,24px);
  .oj-row[data-side="left"] .oj-media[data-reveal],
  .oj-row[data-side="right"] .oj-media[data-reveal]{
    transform:perspective(1000px) rotateX(-28deg) translate3d(0,30px,0);
    transform-origin:center bottom;
    transition:opacity .55s var(--oj-ease), transform .75s var(--oj-ease);
  }
  .oj-row[data-side="left"] .oj-media[data-reveal].is-in,
  .oj-row[data-side="right"] .oj-media[data-reveal].is-in{transform:none;}

  }
    .oj-intro,.oj-closing{text-align:left;padding-left:58px;max-width:none;}
  .oj-intro{margin:0;}
  .oj-closing{margin:clamp(72px,11vw,150px) 0 0;}
  .oj-intro .oj-p,.oj-closing .oj-p{margin:0;}
  .oj-closing .oj-media{margin-left:0;margin-right:0;max-width:none;}
  .oj-row{grid-template-columns:1fr;padding-left:58px;}
  .oj-row[data-side="left"] .oj-copy,
  .oj-row[data-side="right"] .oj-copy{grid-column:1;grid-row:1;justify-self:stretch;text-align:left;max-width:none;padding-top:42px;}
  .oj-row[data-side="left"] .oj-copy .oj-p{margin-left:0;}
  .oj-row[data-side="left"] .oj-media,
  .oj-row[data-side="right"] .oj-media{grid-column:1;grid-row:2;justify-self:stretch;max-width:none;margin-top:24px;}
  .oj-row[data-side="left"] .oj-year,
  .oj-row[data-side="right"] .oj-year{left:36px;right:auto;}
  .oj-endcap,.oj-dot{width:12px;height:12px;}

  /* mobile pe sideways slide chhota, warna horizontal scroll ka risk */
  .oj-row[data-side="left"] .oj-copy[data-reveal],
  .oj-row[data-side="right"] .oj-copy[data-reveal]{transform:translate3d(0,28px,0);}
}

@media (prefers-reduced-motion:reduce){
  .oj [data-reveal],
  .oj-media[data-reveal] img{opacity:1;transform:none;transition:none;}
  .oj-dot,.oj-endcap{transition:none;}
}
`;

export default function OurJourney({
  eyebrow = "Our ",
  scriptWord = "Journey",
  intro = DEFAULT_INTRO,
  milestones = DEFAULT_MILESTONES,
  closing = DEFAULT_CLOSING,
  id = "our-journey",
}) {
  const lineRef = useRef(null);
  const loopRef = useRef(null);
  const loopFillRef = useRef(null);
  const railFillRef = useRef(null);
  const dotsRef = useRef([]);
  const endCapRef = useRef(null);

  const rafRef = useRef(0);
  const targetRef = useRef(0); // scroll se aaya hua asli value
  const currentRef = useRef(0); // screen par dikhne wala smooth value
  const metricsRef = useRef({ top: 0, height: 1, loopH: 0 });
  const inViewRef = useRef(false);

  /* scroll driven "liquid fill" — lerp se smooth */
  useEffect(() => {
    const loopFill = loopFillRef.current;
    let length = 0;

    if (loopFill && typeof loopFill.getTotalLength === "function") {
      length = loopFill.getTotalLength();
      loopFill.style.strokeDasharray = `${length}`;
      loopFill.style.strokeDashoffset = `${length}`;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // sirf naap-jokh — paint nahi
    const measure = () => {
      const line = lineRef.current;
      if (!line) return;

      const rect = line.getBoundingClientRect();
      const loopH = loopRef.current
        ? loopRef.current.getBoundingClientRect().height
        : 0;

      metricsRef.current = { top: rect.top, height: rect.height, loopH };

      const anchor = window.innerHeight * 0.62;
      targetRef.current = Math.min(Math.max(anchor - rect.top, 0), rect.height);
    };

    // sirf paint — naap-jokh nahi
    const paint = (filled) => {
      const { height, loopH } = metricsRef.current;

      if (loopFill && length) {
        const p = loopH > 0 ? Math.min(filled / loopH, 1) : 1;
        loopFill.style.strokeDashoffset = `${length * (1 - p)}`;
      }

      const railH = Math.max(height - loopH, 1);
      const railP = Math.min(Math.max(filled - loopH, 0) / railH, 1);
      if (railFillRef.current) {
        railFillRef.current.style.transform = `scaleY(${railP})`;
      }

      const lineTop = metricsRef.current.top;
      dotsRef.current.forEach((dot) => {
        if (!dot) return;
        const d = dot.getBoundingClientRect();
        const y = d.top + d.height / 2 - lineTop;
        dot.classList.toggle("is-on", filled >= y - 2);
      });

      if (endCapRef.current) {
        endCapRef.current.classList.toggle("is-on", railP >= 0.995);
      }
    };

    // har frame par current ko target ki taraf thoda kheencho
    const tick = () => {
      const diff = targetRef.current - currentRef.current;

      if (Math.abs(diff) < 0.4) {
        currentRef.current = targetRef.current;
      } else {
        // 0.12 = smoothing. kam karoge to aur slow/creamy, zyada karoge to snappy
        currentRef.current += diff * 0.12;
      }

      paint(currentRef.current);

      rafRef.current = inViewRef.current
        ? window.requestAnimationFrame(tick)
        : 0;
    };

    const startLoop = () => {
      if (!rafRef.current) rafRef.current = window.requestAnimationFrame(tick);
    };

    const onScroll = () => {
      measure();
      if (reduceMotion) {
        currentRef.current = targetRef.current;
        paint(currentRef.current);
      } else {
        startLoop();
      }
    };

    measure();
    currentRef.current = targetRef.current;
    paint(currentRef.current);

    // section screen se bahar ho to rAF loop band — battery bachti hai
    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            ([entry]) => {
              inViewRef.current = entry.isIntersecting;
              if (entry.isIntersecting && !reduceMotion) startLoop();
            },
            { rootMargin: "200px 0px" },
          )
        : null;

    const sectionEl = lineRef.current?.closest(".oj");
    if (io && sectionEl) io.observe(sectionEl);
    else inViewRef.current = true;

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    const imgs = sectionEl?.querySelectorAll("img") || [];
    imgs.forEach((img) => img.addEventListener("load", onScroll));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      imgs.forEach((img) => img.removeEventListener("load", onScroll));
      if (io) io.disconnect();
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
    };
  }, [milestones]);

  /* entrance reveals — thoda stagger ke saath */
  useEffect(() => {
    const nodes = document.querySelectorAll(`#${id} [data-reveal]`);
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -14% 0px", threshold: 0.12 },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [id, milestones]);

  const loopPath = "M32 2 V148 C32 186 3 192 3 174 C3 156 33 164 32 200 V350";

  const renderMedia = (src, alt) => (
    <figure className="oj-media" data-reveal>
      {src ? (
        <img src={src} alt={alt || ""} loading="lazy" />
      ) : (
        <div className="oj-ph" />
      )}
    </figure>
  );

  return (
    <section className="oj" id={id} aria-labelledby={`${id}-title`}>
      <style>{CSS}</style>

      <div className="oj-inner">
        <h2 className="oj-title" id={`${id}-title`}>
          {eyebrow}
          <span className="oj-script-word">{scriptWord}</span>
        </h2>

        <div className="oj-intro" data-reveal>
          <span className="oj-pill">{intro.badge}</span>
          <h3 className="oj-h3">{intro.title}</h3>
          <p className="oj-p">{intro.text}</p>
        </div>

        <div className="oj-timeline">
          {/* the vertical line: light track + black "liquid" fill */}
          <div className="oj-line" ref={lineRef} aria-hidden="true">
            <svg
              className="oj-loop"
              ref={loopRef}
              viewBox="0 0 38 352"
              preserveAspectRatio="xMidYMin meet"
            >
              <path className="oj-loop-track" d={loopPath} />
              <path className="oj-loop-fill" ref={loopFillRef} d={loopPath} />
            </svg>

            <div className="oj-rail">
              <div className="oj-rail-fill" ref={railFillRef} />
            </div>

            <span className="oj-endcap" ref={endCapRef} />
          </div>

          <ol className="oj-rows">
            {milestones.map((m, i) => {
              const side = i % 2 === 0 ? "left" : "right";
              return (
                <li className="oj-row" data-side={side} key={m.year}>
                  <div className="oj-marker">
                    <span
                      className="oj-dot"
                      ref={(el) => (dotsRef.current[i] = el)}
                    />
                    <span className="oj-year oj-pill">{m.year}</span>
                  </div>

                  <div className="oj-copy" data-reveal>
                    <h3 className="oj-h3">{m.title}</h3>
                    <p className="oj-p">{m.text}</p>
                  </div>

                  {renderMedia(m.image, m.alt)}
                </li>
              );
            })}
          </ol>
        </div>

        <div className="oj-closing">
          <span className="oj-pill" data-reveal>
            {closing.badge}
          </span>
          <div data-reveal>
            <h3 className="oj-h3">{closing.title}</h3>
            <p className="oj-p">{closing.text}</p>
          </div>
          {renderMedia(closing.image, closing.alt)}
        </div>
      </div>
    </section>
  );
}
