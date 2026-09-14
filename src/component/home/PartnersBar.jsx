import React from "react";

import coinbaseLogo from "../../assets/images/coinbase.png";
import microsoftLogo from "../../assets/images/microsoft.png";
import dropboxLogo from "../../assets/images/dropbox.png";
import rakutenLogo from "../../assets/images/rakuten.png";
import dribbbleLogo from "../../assets/images/dribble.png";

export default function PartnersBar() {
  const logos = [
    { name: "Coinbase", image: coinbaseLogo },
    { name: "Coinbase", image: coinbaseLogo },
    { name: "Microsoft", image: microsoftLogo },
    { name: "Dropbox", image: dropboxLogo },
    { name: "Dropbox", image: dropboxLogo },
    { name: "Dribbble", image: dribbbleLogo },
    { name: "Rakuten", image: rakutenLogo },
  ];

  return (
    <div className="w-full border-t border-[#F2F2F2] bg-white py-3">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-4 px-4 sm:px-6 md:px-8 lg:h-[89px] lg:flex-row lg:items-center lg:justify-between lg:px-[40px]">
        {/* ADDED 'self-center lg:self-auto' HERE */}
        <span className="shrink-0 self-center lg:self-auto font-['Sora'] text-[16px] font-semibold leading-[22px] tracking-[-0.01em] text-black sm:text-[18px] sm:leading-[25.2px]">
          Our Partners
        </span>

        <div className="overflow-x-auto overflow-y-hidden">
          <div className="flex min-w-max items-center gap-3 sm:gap-4 md:gap-5 lg:h-[49px] lg:gap-[32px]">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex h-[44px] w-[120px] shrink-0 items-center justify-center rounded-[6px] bg-[#F8F8F8] sm:h-[49px] sm:w-[136px]"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  width={93}
                  height={20}
                  className="h-[18px] w-[84px] object-contain grayscale opacity-40 brightness-90 sm:h-[20px] sm:w-[93px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
