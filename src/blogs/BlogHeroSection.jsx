// Image baad me add karni ho to bas ye import uncomment karke src me laga do.
// import blogHero from "../../assets/images/blog-hero.png";

const BlogHeroSection = () => {
  return (
    /* Frame 2147226733 — 1440 x 578 */
    <section className="relative h-[420px] w-full overflow-hidden bg-[#A7A7A7] sm:h-[500px] lg:h-[578px]">
      {/* background image — abhi placeholder, src baad me daal dena */}
      <img
        src=""
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Rectangle 34627263 — 1440 x 868, frame ke top se shuru, neeche 290 bahar */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[868px] w-full opacity-25"
        style={{
          background:
            "radial-gradient(45.06% 45.06% at 50% 50%, #000000 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Frame 5 */}
      <div className="absolute inset-x-0 top-[74%] flex -translate-y-1/2 flex-col items-center gap-4 px-5 text-center">
        {/* Hero transcript row */}
        <div className="flex items-center justify-center gap-2 rounded-[48px] border border-[#DCDCDC] bg-black/30 px-5 py-1 backdrop-blur-[2px]">
          <span className="font-['Inter'] text-[13px] font-normal capitalize leading-[26px] tracking-[-0.14px] text-[#FFFFFF] sm:text-[14px]">
            Our Blogs
          </span>
        </div>

        {/* Hero section subtitle */}
        <h1 className="max-w-[650px] font-['Sora'] text-[32px] font-normal capitalize leading-[100%] tracking-[-1.28px] text-[#FFFFFF] sm:text-[44px] sm:tracking-[-1.76px] lg:text-[60px] lg:tracking-[-2.4px]">
          Beyond the Classroom
        </h1>
      </div>
    </section>
  );
};

export default BlogHeroSection;
