import childrenCheering from "../../assets/images/happy-kids.png";

export default function FutureWeEnvision() {
  return (
    <section className="relative w-full h-auto lg:h-[800px] bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
        {/* Left image column */}
        <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full overflow-hidden order-1">
          <img
            src={childrenCheering}
            alt="Children cheering with hands raised"
            className="absolute inset-0 w-full h-full object-cover lg:w-[1177px] lg:h-[1177px] lg:top-[-188px] lg:left-[-190px] lg:max-w-none"
          />
        </div>

        {/* Right content column */}
        <div className="relative flex items-center order-2 px-6 py-12 sm:px-10 lg:px-0 lg:py-0">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-[40px] w-full max-w-[474px] mx-auto lg:mx-0 lg:ml-[48px]">
            <h2 className="font-['Sora'] font-normal text-black text-[28px] sm:text-[34px] lg:text-[40px] leading-[120%] tracking-[-0.05em]">
              The{" "}
              <span className="font-['Satisfy'] font-normal text-[30px] sm:text-[38px] lg:text-[44px] leading-[120%] tracking-[-0.02em]">
                Future
              </span>{" "}
              We Envision
            </h2>

            <p className="font-['Inter'] font-normal text-[15px] sm:text-[17px] lg:text-[20px] leading-[150%] tracking-[-0.03em] text-[#515151]">
              Our vision is to create a world where every child has equal access
              to opportunities, quality education, and the support needed to
              lead a dignified and fulfilling life. We envision empowered
              communities where children can dream freely, thrive confidently,
              and contribute meaningfully to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
