import { Link } from "react-router-dom";

import BlogHeroSection from "./BlogHeroSection";
import { blogPosts } from "../data/blogPosts";

const BlogIndexPage = () => {
  return (
    <main className="w-full bg-white">
      {/* Blog Index page — column stack, gap 120px */}
      <section className="w-full py-16 sm:py-20 lg:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-5 gap-y-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-[57px]">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex w-full flex-col"
            >
              {/* image box — 428 x 499 */}
              <div className="w-full overflow-hidden bg-[#EDEBE7]">
                <div className="aspect-[428/499] w-full">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
              </div>

              <h2 className="mt-5 font-['Sora'] text-[17px] font-normal leading-[130%] tracking-[-0.36px] text-[#000000] lg:text-[18px]">
                {post.title}
              </h2>

              <p className="mt-1.5 font-['Inter'] text-[14px] font-normal leading-[145%] tracking-[-0.14px] text-[#777777]">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogIndexPage;
