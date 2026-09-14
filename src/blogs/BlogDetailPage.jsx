import { Link, useParams } from "react-router-dom";

import { getPostBySlug } from "../data/blogPosts";

/*
 * Hero: Frame 2147226733 — 1440 x 578
 *   Rectangle 34627263 — 1440 x 868, top se shuru, neeche 290 bahar (868 - 290 = 578)
 */
const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="mx-auto flex min-h-[60vh] w-full max-w-[1440px] flex-col items-center justify-center gap-6 px-5 text-center">
        <h1 className="font-['Sora'] text-[28px] leading-[120%] tracking-[-0.84px] text-[#000000]">
          Ye post nahi mili
        </h1>
        <Link
          to="/blog"
          className="rounded-[4px] bg-[#121212] px-6 py-3 font-['Inter'] text-[15px] text-[#FFF9F7]"
        >
          Back to all blogs
        </Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-white">
      {/* Hero — 1440 x 578 */}
      <section className="relative h-[360px] w-full overflow-hidden bg-[#6C63D8] sm:h-[480px] lg:h-[578px]">
        {post.image ? (
          <img
            src={post.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : null}

        {/* Rectangle 34627263 */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-[868px] w-full opacity-25"
          style={{
            background:
              "radial-gradient(45.06% 45.06% at 50% 50%, #000000 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto w-full max-w-[1440px] px-5 pb-8 sm:px-8 sm:pb-10 lg:px-10">
            <h1 className="max-w-[1000px] font-['Sora'] text-[28px] font-normal capitalize leading-[110%] tracking-[-1.12px] text-[#FFFFFF] sm:text-[36px] sm:tracking-[-1.44px] lg:text-[48px] lg:tracking-[-1.92px]">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="mx-auto w-full max-w-[920px] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[120px]">
        <p className="text-justify font-['Inter'] text-[15px] font-normal leading-[175%] tracking-[-0.16px] text-[#1C1C1C] lg:text-[16px]">
          {post.intro}
        </p>

        {post.sections.map((section) => (
          <section key={section.heading} className="mt-12 lg:mt-16">
            <h2 className="font-['Sora'] text-[20px] font-normal leading-[130%] tracking-[-0.48px] text-[#000000] lg:text-[24px]">
              {section.heading}
            </h2>
            <p className="mt-5 text-justify font-['Inter'] text-[15px] font-normal leading-[175%] tracking-[-0.16px] text-[#1C1C1C] lg:text-[16px]">
              {section.body}
            </p>
          </section>
        ))}

        <Link
          to="/blog"
          className="mt-14 inline-flex items-center gap-2 font-['Inter'] text-[15px] text-[#1C1C1C] underline underline-offset-4"
        >
          Back to all blogs
        </Link>
      </article>
    </main>
  );
};

export default BlogDetailPage;
