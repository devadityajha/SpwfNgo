import fundUs from "../../assets/images/fundUs.jpg";

const HeroSection = () => {
  return (
    /* Frame 2147226733 */
    <section className="relative h-[420px] w-full overflow-hidden sm:h-[500px] lg:h-[578px]">
      <img
        src={fundUs}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Rectangle 34627263 */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[868px] opacity-25"
        style={{
          background:
            "radial-gradient(45.06% 45.06% at 50% 50%, #000000 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Frame 5 */}
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 px-5 text-center">
        {/* Hero transcript row */}
        <div className="flex items-center rounded-full border border-white/25 bg-white/15 px-4 py-1 backdrop-blur-sm">
          <span className="font-['Inter'] text-[13px] font-normal capitalize leading-[26px] tracking-[-0.14px] text-[#FFFFFF] sm:text-[14px]">
            Every Contribution Creates Impact
          </span>
        </div>

        <h1 className="font-['Sora'] text-[36px] font-normal capitalize leading-[100%] tracking-[-1.44px] text-[#FFFFFF] sm:text-[48px] sm:tracking-[-1.92px] lg:text-[60px] lg:tracking-[-2.4px]">
          Fund Us
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
