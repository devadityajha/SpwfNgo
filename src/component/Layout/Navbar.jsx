import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Store", path: "/store" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // UPDATED: Added /about to the condition so it stays transparent on the About page
  // const isHome = location.pathname === "/" || location.pathname === "/about";

  const isHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/programs" ||
    location.pathname === "/join-us" ||
    location.pathname === "/fund-us" ||
    location.pathname === "/store";

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navDesktopBg = isHome ? "bg-transparent" : "bg-white shadow-sm";
  const navMobileBg = isHome
    ? "bg-transparent"
    : "bg-white/80 backdrop-blur-md";

  const textClass = isHome ? "text-white" : "text-black";

  const joinBtnClass = isHome
    ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
    : "border-black bg-transparent text-black hover:bg-black hover:text-white";

  const fundBtnClass = isHome
    ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
    : "border-black bg-black text-white hover:bg-gray-800 hover:text-white";

  const hamburgerShell = isHome
    ? "border-white/20 bg-black/20 backdrop-blur-md"
    : "border-black/10 bg-white/80 backdrop-blur-md";

  const hamburgerLineClass = isHome ? "bg-white" : "bg-black";

  const menuOverlay = isHome
    ? "bg-black/70 backdrop-blur-md"
    : "bg-white/92 backdrop-blur-md";

  const menuText = isHome ? "text-white" : "text-black";
  const menuMuted = isHome ? "text-white/50" : "text-black/40";
  const dividerClass = isHome ? "bg-white/10" : "bg-black/10";
  const closeShell = isHome
    ? "border-white/20 bg-white/10"
    : "border-black/10 bg-black/[0.04]";
  const closeStroke = isHome ? "white" : "black";
  const mobileLinkHover = isHome ? "hover:bg-white/8" : "hover:bg-black/5";

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 h-[62px] transition-colors duration-300 ${navDesktopBg}`}
      >
        <Link
          to="/"
          className={`${textClass} font-semibold text-[24px] leading-none tracking-[-0.02em] select-none hover:opacity-80 transition-opacity`}
        >
          SPWF
        </Link>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-[24px] list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`${textClass} text-[16px] font-normal leading-none tracking-[-0.01em] hover:opacity-70 transition-opacity`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* <button
              className={`w-[140px] h-[48px] font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
            >
              Join us
            </button> */}

            <Link
              to="/join-us"
              className={`flex w-[140px] h-[48px] items-center justify-center font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
            >
              Join us
            </Link>

            <Link
              to="/fund-us"
              className={`flex w-[140px] h-[48px] items-center justify-center font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
            >
              Fund us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[19px] h-[62px] transition-colors duration-300 ${navMobileBg}`}
      >
        <Link
          to="/"
          className={`${textClass} font-semibold text-[20px] leading-none tracking-[-0.02em] select-none`}
        >
          SPWF
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className={`group flex h-[44px] items-center gap-2 rounded-full border px-3 transition-all duration-300 ${hamburgerShell}`}
        >
          <span
            className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
              isHome ? "text-white/80" : "text-black/70"
            }`}
          >
            Menu
          </span>

          <span className="relative block h-[14px] w-[18px]">
            <span
              className={`absolute left-0 top-0 block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[6px] block h-[1.5px] w-[18px] rounded-full transition-all duration-300 ${hamburgerLineClass} ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[12px] block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 ${menuOverlay}`}
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative flex h-full w-full flex-col px-5 pt-5 pb-8">
          <div className="flex items-center justify-between">
            <span
              className={`text-[12px] uppercase tracking-[0.18em] ${menuMuted}`}
            >
              Navigation
            </span>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border transition-colors ${closeShell}`}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke={closeStroke}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <div className={`mt-5 h-[1px] w-full ${dividerClass}`} />

          <ul className="mt-10 flex flex-col gap-2 list-none m-0 p-0">
            {navLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center justify-between rounded-[18px] px-1 py-3 transition-colors ${mobileLinkHover}`}
                >
                  <span
                    className={`${menuText} text-[30px] font-normal leading-[1] tracking-[-0.04em]`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`text-[11px] tracking-[0.16em] ${menuMuted}`}
                  >
                    0{index + 1}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <div className={`mb-5 h-[1px] w-full ${dividerClass}`} />

            <div className="grid grid-cols-2 gap-3">
              {/* <button
                className={`h-[50px] rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
              >
                Join us
              </button> */}

              <Link
                to="/join-us"
                onClick={() => setMenuOpen(false)}
                className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
              >
                Join us
              </Link>

              <button
                className={`h-[50px] rounded-full text-[15px] font-medium tracking-[-0.02em] transition-colors ${fundBtnClass}`}
              >
                Fund us
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
