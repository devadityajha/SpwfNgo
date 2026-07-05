import React from "react";
import heroGirl from "../../assets/images/hero-girl.png";

const navLinks = ["About us", "Programs", "Campaigns", "Store"];

const MicrosoftIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 21 21"
    fill="none"
    aria-hidden="true"
  >
    <rect x="1" y="1" width="9" height="9" fill="currentColor" />
    <rect x="11" y="1" width="9" height="9" fill="currentColor" />
    <rect x="1" y="11" width="9" height="9" fill="currentColor" />
    <rect x="11" y="11" width="9" height="9" fill="currentColor" />
  </svg>
);

const DropboxIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.5L6 6.5l6 4-6 4 6 4 6-4-6-4 6-4-6-4zM6 19.5l6-4 6 4-6 4-6-4z" />
  </svg>
);

export default function HeroSection() {
  return (
    <div className="w-full font-sans">
      {/* ─── Hero Block ─── */}
      {/* <div className="relative w-full h-screen min-h-[600px] max-h-[860px]"> */}
      <div className="relative w-full h-[1077px] ">
        {/* Hero Background Image */}
        <img
          src={heroGirl}
          alt="A child studying with thumbs up"
          // className="absolute inset-0 w-full h-full object-cover object-center"
          className="absolute inset-0 w-full h-full object-cover object-[58%_center]"
        />
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />
        {/* ─── Navbar ─── */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-10 h-[62px]">
          {/* Logo */}
          <span className="text-white font-semibold text-[24px] leading-none tracking-[-0.02em] select-none">
            SPWF
          </span>

          {/* Right Group: Nav Links + CTA Buttons */}
          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-[24px] list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white text-[16px] font-normal leading-none tracking-[-0.01em] hover:opacity-70 transition-opacity"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3">
              {/* <button className="px-6 py-2 rounded-md border border-white text-white text-[14px] font-medium hover:bg-white hover:text-black transition-colors">
                Join us
              </button> */}
              <button className="w-[140px] h-[48px] font-['Inter'] rounded-[8px] border border-white bg-black/10 text-white text-[16px] font-normal leading-none tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
                Join us
              </button>
              {/* <button className="px-6 py-2 rounded-md bg-white text-black text-[14px] font-medium hover:bg-gray-100 transition-colors">
                Fund us
              </button> */}
              <button className="w-[147px] h-[48px] font-['Inter'] rounded-[8px] bg-white text-black text-[16px] font-medium leading-none tracking-[-0.02em] hover:bg-gray-100 transition-colors">
                Fund us
              </button>
            </div>
          </div>
        </nav>
        {/* ─── Hero Content ─── */}
        <div className="absolute left-1/2  top-[510px] z-10 flex w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
          {/* Badge */}
          <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>

          {/* Heading */}
          <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
            A Place Where
            <br />
            Their Hearts Live.
          </h1>

          {/* Hero CTA Button */}
          <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
            Fund us
          </button>
        </div>
      </div>
    </div>
  );
}
