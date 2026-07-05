import React from "react";

import coinbaseLogo from "../../assets/images/coinbase.png";
import microsoftLogo from "../../assets/images/microsoft.png";
import dropboxLogo from "../../assets/images/dropbox.png";
import rakutenLogo from "../../assets/images/rakuten.png";
import dribbbleLogo from "../../assets/images/dribble.png";

export default function PartnersBar() {
  return (
    <div className="w-full pt-3 pb-3 border-t border-[#F2F2F2] bg-white">
      <div className="mx-auto flex h-[89px] w-full max-w-[1440px] items-center justify-between px-[40px]">
        <span className="shrink-0 font-['Sora'] text-[18px] font-semibold leading-[25.2px] tracking-[-0.01em] text-black">
          Our Partners
        </span>

        <div className="flex h-[49px] items-center gap-[32px]">
          {[
            { name: "Coinbase", image: coinbaseLogo },
            { name: "Coinbase", image: coinbaseLogo },
            { name: "Microsoft", image: microsoftLogo },
            { name: "Dropbox", image: dropboxLogo },
            { name: "Dropbox", image: dropboxLogo },
            { name: "Dribbble", image: dribbbleLogo },
            { name: "Rakuten", image: rakutenLogo },
          ].map((logo, index) => (
            <div
              key={index}
              className="flex h-[49px] w-[136px] items-center justify-center rounded-[6px] bg-[#F8F8F8]"
            >
              <img
                src={logo.image}
                alt={logo.name}
                width={93}
                height={20}
                className="h-[20px] w-[93px] object-contain grayscale opacity-40 brightness-90"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
