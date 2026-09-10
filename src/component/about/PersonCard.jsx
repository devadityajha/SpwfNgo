import React from "react";

export default function PersonCard({ name, role, image }) {
  return (
    <figure className="group m-0 w-full">
      <div className="w-full overflow-hidden rounded-[20px] bg-[#EDE8DC]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          decoding="async"
          width={256}
          height={256}
          className="block h-full w-full aspect-square object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="mt-[16px] text-center md:mt-[18px]">
        <p className="font-['Sora'] font-normal tracking-[-0.03em] text-black text-[17px] leading-[130%] sm:text-[20px] lg:text-[24px]">
          {name}
        </p>
        <p className="mt-[4px] font-['Satisfy'] text-[#6C6C6C] text-[14px] leading-[140%] sm:text-[16px] lg:text-[18px]">
          {role}
        </p>
      </figcaption>
    </figure>
  );
}
