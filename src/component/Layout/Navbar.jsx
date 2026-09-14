// // import React, { useEffect, useState } from "react";
// // import { Link, useLocation } from "react-router-dom";

// // const navLinks = [
// //   { name: "About us", path: "/about" },
// //   { name: "Programs", path: "/programs" },
// //   { name: "Campaigns", path: "/campaigns" },
// //   { name: "Store", path: "/store" },
// // ];

// // export default function Navbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const location = useLocation();

// //   // UPDATED: Added /about to the condition so it stays transparent on the About page
// //   // const isHome = location.pathname === "/" || location.pathname === "/about";

// //   const isHome =
// //     location.pathname === "/" ||
// //     location.pathname === "/about" ||
// //     location.pathname === "/programs" ||
// //     location.pathname === "/join-us" ||
// //     location.pathname === "/fund-us" ||
// //     location.pathname === "/store";

// //   useEffect(() => {
// //     setMenuOpen(false);
// //   }, [location.pathname]);

// //   const navDesktopBg = isHome ? "bg-transparent" : "bg-white shadow-sm";
// //   const navMobileBg = isHome
// //     ? "bg-transparent"
// //     : "bg-white/80 backdrop-blur-md";

// //   const textClass = isHome ? "text-white" : "text-black";

// //   const joinBtnClass = isHome
// //     ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
// //     : "border-black bg-transparent text-black hover:bg-black hover:text-white";

// //   const fundBtnClass = isHome
// //     ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
// //     : "border-black bg-black text-white hover:bg-gray-800 hover:text-white";

// //   const hamburgerShell = isHome
// //     ? "border-white/20 bg-black/20 backdrop-blur-md"
// //     : "border-black/10 bg-white/80 backdrop-blur-md";

// //   const hamburgerLineClass = isHome ? "bg-white" : "bg-black";

// //   const menuOverlay = isHome
// //     ? "bg-black/70 backdrop-blur-md"
// //     : "bg-white/92 backdrop-blur-md";

// //   const menuText = isHome ? "text-white" : "text-black";
// //   const menuMuted = isHome ? "text-white/50" : "text-black/40";
// //   const dividerClass = isHome ? "bg-white/10" : "bg-black/10";
// //   const closeShell = isHome
// //     ? "border-white/20 bg-white/10"
// //     : "border-black/10 bg-black/[0.04]";
// //   const closeStroke = isHome ? "white" : "black";
// //   const mobileLinkHover = isHome ? "hover:bg-white/8" : "hover:bg-black/5";

// //   return (
// //     <>
// //       {/* Desktop Navbar */}
// //       <nav
// //         className={`hidden lg:flex fixed top-0 left-0 right-0 z-50 items-center justify-between px-10 h-[62px] transition-colors duration-300 ${navDesktopBg}`}
// //       >
// //         <Link
// //           to="/"
// //           className={`${textClass} font-semibold text-[24px] leading-none tracking-[-0.02em] select-none hover:opacity-80 transition-opacity`}
// //         >
// //           SPWF
// //         </Link>

// //         <div className="flex items-center gap-8">
// //           <ul className="flex items-center gap-[24px] list-none m-0 p-0">
// //             {navLinks.map((link) => (
// //               <li key={link.name}>
// //                 <Link
// //                   to={link.path}
// //                   className={`${textClass} text-[16px] font-normal leading-none tracking-[-0.01em] hover:opacity-70 transition-opacity`}
// //                 >
// //                   {link.name}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="flex items-center gap-3">
// //             {/* <button
// //               className={`w-[140px] h-[48px] font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //             >
// //               Join us
// //             </button> */}

// //             <Link
// //               to="/join-us"
// //               className={`flex w-[140px] h-[48px] items-center justify-center font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //             >
// //               Join us
// //             </Link>

// //             <Link
// //               to="/fund-us"
// //               className={`flex w-[140px] h-[48px] items-center justify-center font-['Inter'] rounded-[8px] border text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //             >
// //               Fund us
// //             </Link>
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Mobile Navbar */}
// //       <nav
// //         className={`lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[19px] h-[62px] transition-colors duration-300 ${navMobileBg}`}
// //       >
// //         <Link
// //           to="/"
// //           className={`${textClass} font-semibold text-[20px] leading-none tracking-[-0.02em] select-none`}
// //         >
// //           SPWF
// //         </Link>

// //         <button
// //           onClick={() => setMenuOpen(!menuOpen)}
// //           aria-label="Toggle menu"
// //           aria-expanded={menuOpen}
// //           className={`group flex h-[44px] items-center gap-2 rounded-full border px-3 transition-all duration-300 ${hamburgerShell}`}
// //         >
// //           <span
// //             className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
// //               isHome ? "text-white/80" : "text-black/70"
// //             }`}
// //           >
// //             Menu
// //           </span>

// //           <span className="relative block h-[14px] w-[18px]">
// //             <span
// //               className={`absolute left-0 top-0 block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
// //                 menuOpen ? "translate-y-[6px] rotate-45" : ""
// //               }`}
// //             />
// //             <span
// //               className={`absolute left-0 top-[6px] block h-[1.5px] w-[18px] rounded-full transition-all duration-300 ${hamburgerLineClass} ${
// //                 menuOpen ? "opacity-0" : "opacity-100"
// //               }`}
// //             />
// //             <span
// //               className={`absolute left-0 top-[12px] block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
// //                 menuOpen ? "-translate-y-[6px] -rotate-45" : ""
// //               }`}
// //             />
// //           </span>
// //         </button>
// //       </nav>

// //       {/* Mobile Fullscreen Menu */}
// //       <div
// //         className={`lg:hidden fixed inset-0 z-[60] transition-all duration-300 ${
// //           menuOpen
// //             ? "opacity-100 pointer-events-auto"
// //             : "opacity-0 pointer-events-none"
// //         }`}
// //       >
// //         <div
// //           className={`absolute inset-0 ${menuOverlay}`}
// //           onClick={() => setMenuOpen(false)}
// //         />

// //         <div className="relative flex h-full w-full flex-col px-5 pt-5 pb-8">
// //           <div className="flex items-center justify-between">
// //             <span
// //               className={`text-[12px] uppercase tracking-[0.18em] ${menuMuted}`}
// //             >
// //               Navigation
// //             </span>

// //             <button
// //               onClick={() => setMenuOpen(false)}
// //               aria-label="Close menu"
// //               className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border transition-colors ${closeShell}`}
// //             >
// //               <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
// //                 <path
// //                   d="M1 1L13 13M13 1L1 13"
// //                   stroke={closeStroke}
// //                   strokeWidth="1.5"
// //                   strokeLinecap="round"
// //                 />
// //               </svg>
// //             </button>
// //           </div>

// //           <div className={`mt-5 h-[1px] w-full ${dividerClass}`} />

// //           <ul className="mt-10 flex flex-col gap-2 list-none m-0 p-0">
// //             {navLinks.map((link, index) => (
// //               <li key={link.name}>
// //                 <Link
// //                   to={link.path}
// //                   onClick={() => setMenuOpen(false)}
// //                   className={`flex items-center justify-between rounded-[18px] px-1 py-3 transition-colors ${mobileLinkHover}`}
// //                 >
// //                   <span
// //                     className={`${menuText} text-[30px] font-normal leading-[1] tracking-[-0.04em]`}
// //                   >
// //                     {link.name}
// //                   </span>
// //                   <span
// //                     className={`text-[11px] tracking-[0.16em] ${menuMuted}`}
// //                   >
// //                     0{index + 1}
// //                   </span>
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>

// //           <div className="mt-auto pt-8">
// //             <div className={`mb-5 h-[1px] w-full ${dividerClass}`} />

// //             <div className="grid grid-cols-2 gap-3">
// //               {/* <button
// //                 className={`h-[50px] rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //               >
// //                 Join us
// //               </button> */}

// //               <Link
// //                 to="/join-us"
// //                 onClick={() => setMenuOpen(false)}
// //                 className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //               >
// //                 Join us
// //               </Link>

// //               <Link
// //                 to="/fund-us"
// //                 onClick={() => setMenuOpen(false)}
// //                 className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
// //               >
// //                 Fund us
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import React, { useEffect, useRef, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// // Icons: apne assets ke path daal ke uncomment kar do, phir `icon` field me laga do.
// // import shiksharthIcon from "../../assets/images/shiksharth.png";
// // import kaushalIcon from "../../assets/images/kaushal.png";
// // import aaharIcon from "../../assets/images/aahar.png";

// const programs = [
//   {
//     name: "Shiksharth",
//     tagline: "Education that stays with a child",
//     path: "/programs/shiksharth",
//     color: "#FF5255",
//     icon: null,
//   },
//   {
//     name: "Kaushal Utthan",
//     tagline: "Skills that open the first door",
//     path: "/programs/kaushal-utthan",
//     color: "#D4F53C",
//     icon: null,
//   },
//   {
//     name: "Aahar",
//     tagline: "A meal that keeps school possible",
//     path: "/programs/aahar",
//     color: "#5FBCFF",
//     icon: null,
//   },
// ];

// const navLinks = [
//   { name: "About us", path: "/about" },
//   { name: "Programs", path: "/programs", children: programs },
//   { name: "Campaigns", path: "/campaigns" },
//   { name: "Store", path: "/store" },
// ];

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null);
//   const [mobileSubOpen, setMobileSubOpen] = useState(null);
//   const closeTimer = useRef(null);
//   const location = useLocation();

//   const isHome =
//     location.pathname === "/" ||
//     location.pathname === "/about" ||
//     location.pathname === "/programs" ||
//     location.pathname === "/join-us" ||
//     location.pathname === "/fund-us" ||
//     location.pathname === "/store";

//   // route badalne par sab band
//   useEffect(() => {
//     setMenuOpen(false);
//     setOpenDropdown(null);
//     setMobileSubOpen(null);
//   }, [location.pathname]);

//   // Escape se dropdown band — keyboard users ke liye zaroori
//   useEffect(() => {
//     const onKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setOpenDropdown(null);
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, []);

//   useEffect(() => () => clearTimeout(closeTimer.current), []);

//   // hover intent: mouse link se panel tak jaate waqt band na ho
//   const openNow = (name) => {
//     clearTimeout(closeTimer.current);
//     setOpenDropdown(name);
//   };
//   const closeSoon = () => {
//     clearTimeout(closeTimer.current);
//     closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
//   };

//   const navDesktopBg = isHome ? "bg-transparent" : "bg-white shadow-sm";
//   const navMobileBg = isHome
//     ? "bg-transparent"
//     : "bg-white/80 backdrop-blur-md";

//   const textClass = isHome ? "text-white" : "text-black";

//   const joinBtnClass = isHome
//     ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
//     : "border-black bg-transparent text-black hover:bg-black hover:text-white";

//   const hamburgerShell = isHome
//     ? "border-white/20 bg-black/20 backdrop-blur-md"
//     : "border-black/10 bg-white/80 backdrop-blur-md";

//   const hamburgerLineClass = isHome ? "bg-white" : "bg-black";

//   const menuOverlay = isHome
//     ? "bg-black/70 backdrop-blur-md"
//     : "bg-white/92 backdrop-blur-md";

//   const menuText = isHome ? "text-white" : "text-black";
//   const menuMuted = isHome ? "text-white/50" : "text-black/40";
//   const dividerClass = isHome ? "bg-white/10" : "bg-black/10";
//   const closeShell = isHome
//     ? "border-white/20 bg-white/10"
//     : "border-black/10 bg-black/[0.04]";
//   const closeStroke = isHome ? "white" : "black";
//   const mobileLinkHover = isHome ? "hover:bg-white/8" : "hover:bg-black/5";

//   return (
//     <>
//       {/* ---------------- Desktop Navbar ---------------- */}
//       <nav
//         className={`fixed left-0 right-0 top-0 z-50 hidden h-[62px] items-center justify-between px-10 transition-colors duration-300 lg:flex ${navDesktopBg}`}
//       >
//         <Link
//           to="/"
//           className={`${textClass} select-none text-[24px] font-semibold leading-none tracking-[-0.02em] transition-opacity hover:opacity-80`}
//         >
//           SPWF
//         </Link>

//         <div className="flex items-center gap-8">
//           <ul className="m-0 flex list-none items-center gap-[24px] p-0">
//             {navLinks.map((link) => {
//               const hasMenu = Boolean(link.children);
//               const isOpen = openDropdown === link.name;

//               return (
//                 <li
//                   key={link.name}
//                   className="relative"
//                   onMouseEnter={hasMenu ? () => openNow(link.name) : undefined}
//                   onMouseLeave={hasMenu ? closeSoon : undefined}
//                 >
//                   <Link
//                     to={link.path}
//                     aria-haspopup={hasMenu || undefined}
//                     aria-expanded={hasMenu ? isOpen : undefined}
//                     onFocus={hasMenu ? () => openNow(link.name) : undefined}
//                     className={`${textClass} flex items-center gap-1.5 text-[16px] font-normal leading-none tracking-[-0.01em] transition-opacity hover:opacity-70`}
//                   >
//                     {link.name}
//                     {hasMenu && (
//                       <svg
//                         width="9"
//                         height="6"
//                         viewBox="0 0 10 6"
//                         fill="none"
//                         aria-hidden="true"
//                         className={`transition-transform duration-200 ${
//                           isOpen ? "rotate-180" : ""
//                         }`}
//                       >
//                         <path
//                           d="M1 1L5 5L9 1"
//                           stroke="currentColor"
//                           strokeWidth="1.4"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         />
//                       </svg>
//                     )}
//                   </Link>

//                   {hasMenu && (
//                     <div
//                       className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-200 ${
//                         isOpen
//                           ? "pointer-events-auto translate-y-0 opacity-100"
//                           : "pointer-events-none -translate-y-1 opacity-0"
//                       }`}
//                     >
//                       <div className="w-[min(720px,calc(100vw-64px))] rounded-[20px] border border-black/5 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]">
//                         <div className="grid grid-cols-3 gap-2">
//                           {link.children.map((item) => (
//                             <Link
//                               key={item.name}
//                               to={item.path}
//                               onClick={() => setOpenDropdown(null)}
//                               className="group flex flex-col gap-3 rounded-[14px] p-4 transition-colors hover:bg-black/[0.04]"
//                             >
//                               <span
//                                 className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px]"
//                                 style={{ backgroundColor: item.color }}
//                               >
//                                 {item.icon ? (
//                                   <img
//                                     src={item.icon}
//                                     alt=""
//                                     aria-hidden="true"
//                                     className="h-[32px] w-[32px] object-contain"
//                                   />
//                                 ) : null}
//                               </span>

//                               <span>
//                                 <span className="block font-['Sora'] text-[16px] leading-[130%] tracking-[-0.32px] text-black">
//                                   {item.name}
//                                 </span>
//                                 <span className="mt-1 block font-['Inter'] text-[13px] leading-[145%] text-black/55">
//                                   {item.tagline}
//                                 </span>
//                               </span>

//                               <span className="mt-auto inline-flex items-center gap-1.5 font-['Inter'] text-[13px] text-black/70 transition-transform duration-200 group-hover:translate-x-0.5">
//                                 Learn more
//                                 <svg
//                                   width="12"
//                                   height="10"
//                                   viewBox="0 0 12 10"
//                                   fill="none"
//                                   aria-hidden="true"
//                                 >
//                                   <path
//                                     d="M1 5h9M6.5 1L10.5 5 6.5 9"
//                                     stroke="currentColor"
//                                     strokeWidth="1.3"
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                   />
//                                 </svg>
//                               </span>
//                             </Link>
//                           ))}
//                         </div>

//                         <Link
//                           to="/programs"
//                           onClick={() => setOpenDropdown(null)}
//                           className="mt-1 flex items-center justify-between rounded-[14px] px-4 py-3 font-['Inter'] text-[14px] text-black/70 transition-colors hover:bg-black/[0.04]"
//                         >
//                           All programmes
//                           <svg
//                             width="14"
//                             height="10"
//                             viewBox="0 0 12 10"
//                             fill="none"
//                             aria-hidden="true"
//                           >
//                             <path
//                               d="M1 5h9M6.5 1L10.5 5 6.5 9"
//                               stroke="currentColor"
//                               strokeWidth="1.3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </Link>
//                       </div>
//                     </div>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           <div className="flex items-center gap-3">
//             <Link
//               to="/join-us"
//               className={`flex h-[48px] w-[140px] items-center justify-center rounded-[8px] border font-['Inter'] text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
//             >
//               Join us
//             </Link>

//             <Link
//               to="/fund-us"
//               className={`flex h-[48px] w-[140px] items-center justify-center rounded-[8px] border font-['Inter'] text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
//             >
//               Fund us
//             </Link>
//           </div>
//         </div>
//       </nav>

//       {/* ---------------- Mobile Navbar ---------------- */}
//       <nav
//         className={`fixed left-0 right-0 top-0 z-50 flex h-[62px] items-center justify-between px-[19px] transition-colors duration-300 lg:hidden ${navMobileBg}`}
//       >
//         <Link
//           to="/"
//           className={`${textClass} select-none text-[20px] font-semibold leading-none tracking-[-0.02em]`}
//         >
//           SPWF
//         </Link>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle menu"
//           aria-expanded={menuOpen}
//           className={`group flex h-[44px] items-center gap-2 rounded-full border px-3 transition-all duration-300 ${hamburgerShell}`}
//         >
//           <span
//             className={`text-[11px] font-medium uppercase tracking-[0.14em] ${
//               isHome ? "text-white/80" : "text-black/70"
//             }`}
//           >
//             Menu
//           </span>

//           <span className="relative block h-[14px] w-[18px]">
//             <span
//               className={`absolute left-0 top-0 block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
//                 menuOpen ? "translate-y-[6px] rotate-45" : ""
//               }`}
//             />
//             <span
//               className={`absolute left-0 top-[6px] block h-[1.5px] w-[18px] rounded-full transition-all duration-300 ${hamburgerLineClass} ${
//                 menuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`absolute left-0 top-[12px] block h-[1.5px] w-[18px] origin-center rounded-full transition-all duration-300 ${hamburgerLineClass} ${
//                 menuOpen ? "-translate-y-[6px] -rotate-45" : ""
//               }`}
//             />
//           </span>
//         </button>
//       </nav>

//       {/* ---------------- Mobile Fullscreen Menu ---------------- */}
//       <div
//         className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
//           menuOpen
//             ? "pointer-events-auto opacity-100"
//             : "pointer-events-none opacity-0"
//         }`}
//       >
//         <div
//           className={`absolute inset-0 ${menuOverlay}`}
//           onClick={() => setMenuOpen(false)}
//         />

//         <div className="relative flex h-full w-full flex-col overflow-y-auto px-5 pb-8 pt-5">
//           <div className="flex items-center justify-between">
//             <span
//               className={`text-[12px] uppercase tracking-[0.18em] ${menuMuted}`}
//             >
//               Navigation
//             </span>

//             <button
//               onClick={() => setMenuOpen(false)}
//               aria-label="Close menu"
//               className={`flex h-[42px] w-[42px] items-center justify-center rounded-full border transition-colors ${closeShell}`}
//             >
//               <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
//                 <path
//                   d="M1 1L13 13M13 1L1 13"
//                   stroke={closeStroke}
//                   strokeWidth="1.5"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className={`mt-5 h-[1px] w-full ${dividerClass}`} />

//           <ul className="m-0 mt-10 flex list-none flex-col gap-2 p-0">
//             {navLinks.map((link, index) => {
//               const hasMenu = Boolean(link.children);
//               const isSubOpen = mobileSubOpen === link.name;

//               return (
//                 <li key={link.name}>
//                   {hasMenu ? (
//                     <>
//                       {/* tap se khulta hai — mobile pe hover nahi hota */}
//                       <button
//                         type="button"
//                         onClick={() =>
//                           setMobileSubOpen(isSubOpen ? null : link.name)
//                         }
//                         aria-expanded={isSubOpen}
//                         className={`flex w-full items-center justify-between rounded-[18px] px-1 py-3 text-left transition-colors ${mobileLinkHover}`}
//                       >
//                         <span
//                           className={`${menuText} text-[30px] font-normal leading-[1] tracking-[-0.04em]`}
//                         >
//                           {link.name}
//                         </span>
//                         <span
//                           className={`${menuMuted} flex items-center gap-3 text-[11px] tracking-[0.16em]`}
//                         >
//                           0{index + 1}
//                           <svg
//                             width="12"
//                             height="8"
//                             viewBox="0 0 10 6"
//                             fill="none"
//                             aria-hidden="true"
//                             className={`transition-transform duration-300 ${
//                               isSubOpen ? "rotate-180" : ""
//                             }`}
//                           >
//                             <path
//                               d="M1 1L5 5L9 1"
//                               stroke="currentColor"
//                               strokeWidth="1.4"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                         </span>
//                       </button>

//                       <div
//                         className={`grid transition-all duration-300 ease-out ${
//                           isSubOpen
//                             ? "grid-rows-[1fr] opacity-100"
//                             : "grid-rows-[0fr] opacity-0"
//                         }`}
//                       >
//                         <div className="overflow-hidden">
//                           <div className="flex flex-col gap-1 py-2 pl-1">
//                             {link.children.map((item) => (
//                               <Link
//                                 key={item.name}
//                                 to={item.path}
//                                 onClick={() => setMenuOpen(false)}
//                                 className={`flex items-center gap-3 rounded-[14px] px-2 py-3 transition-colors ${mobileLinkHover}`}
//                               >
//                                 <span
//                                   className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]"
//                                   style={{ backgroundColor: item.color }}
//                                 >
//                                   {item.icon ? (
//                                     <img
//                                       src={item.icon}
//                                       alt=""
//                                       aria-hidden="true"
//                                       className="h-[24px] w-[24px] object-contain"
//                                     />
//                                   ) : null}
//                                 </span>
//                                 <span>
//                                   <span
//                                     className={`${menuText} block font-['Sora'] text-[17px] leading-[130%] tracking-[-0.02em]`}
//                                   >
//                                     {item.name}
//                                   </span>
//                                   <span
//                                     className={`${menuMuted} mt-0.5 block font-['Inter'] text-[13px] leading-[140%]`}
//                                   >
//                                     {item.tagline}
//                                   </span>
//                                 </span>
//                               </Link>
//                             ))}

//                             <Link
//                               to="/programs"
//                               onClick={() => setMenuOpen(false)}
//                               className={`${menuMuted} px-2 py-2 font-['Inter'] text-[14px] underline underline-offset-4`}
//                             >
//                               All programmes
//                             </Link>
//                           </div>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <Link
//                       to={link.path}
//                       onClick={() => setMenuOpen(false)}
//                       className={`flex items-center justify-between rounded-[18px] px-1 py-3 transition-colors ${mobileLinkHover}`}
//                     >
//                       <span
//                         className={`${menuText} text-[30px] font-normal leading-[1] tracking-[-0.04em]`}
//                       >
//                         {link.name}
//                       </span>
//                       <span
//                         className={`text-[11px] tracking-[0.16em] ${menuMuted}`}
//                       >
//                         0{index + 1}
//                       </span>
//                     </Link>
//                   )}
//                 </li>
//               );
//             })}
//           </ul>

//           <div className="mt-auto pt-8">
//             <div className={`mb-5 h-[1px] w-full ${dividerClass}`} />

//             <div className="grid grid-cols-2 gap-3">
//               <Link
//                 to="/join-us"
//                 onClick={() => setMenuOpen(false)}
//                 className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
//               >
//                 Join us
//               </Link>

//               <Link
//                 to="/fund-us"
//                 onClick={() => setMenuOpen(false)}
//                 className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
//               >
//                 Fund us
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Icons: apne assets ke path daal ke uncomment kar do, phir `icon` field me laga do.

//import shiksharthIcon from "../../assets/images/shiksharth.png";
// import kaushalIcon from "../../assets/images/imgKaushal.png";
//import aaharIcon from "../../assets/images/imgAahar.png";

// import iconShiksharth from "../assets/images/shiksharth.png";
// import iconKaushal from "../assets/images/kaushal.png";
// import iconAahar from "../assets/images/aahar.png";

import iconShiksharth from "../../assets/images/shiksharth.png";
import iconKaushal from "../../assets/images/kaushal.png";
import iconAahar from "../../assets/images/aahar.png";

const programs = [
  {
    name: "Shiksharth",
    tagline: "Education that stays with a child",
    path: "/programs/shiksharth",
    color: "#FF5255",
    icon: iconShiksharth,
  },
  {
    name: "Kaushal Utthan",
    tagline: "Skills that open the first door",
    path: "/programs/kaushal-utthan",
    color: "#D4F53C",
    icon: iconKaushal,
  },
  {
    name: "Aahar",
    tagline: "A meal that keeps school possible",
    path: "/programs/aahar",
    color: "#5FBCFF",
    icon: iconAahar,
  },
];

const navLinks = [
  { name: "About us", path: "/about" },
  { name: "Programs", path: "/programs", children: programs },
  { name: "Campaigns", path: "/campaigns" },
  { name: "Store", path: "/store" },
];

const ArrowIcon = ({ className = "" }) => (
  <svg
    width="13"
    height="10"
    viewBox="0 0 12 10"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M1 5h9M6.5 1L10.5 5 6.5 9"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const isHome =
    location.pathname === "/" ||
    location.pathname === "/about" ||
    location.pathname === "/programs" ||
    location.pathname === "/join-us" ||
    location.pathname === "/fund-us" ||
    location.pathname === "/store";

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileSubOpen(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const openNow = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };
  const closeSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  const navDesktopBg = isHome ? "bg-transparent" : "bg-white shadow-sm";
  const navMobileBg = isHome
    ? "bg-transparent"
    : "bg-white/80 backdrop-blur-md";

  const textClass = isHome ? "text-white" : "text-black";

  const joinBtnClass = isHome
    ? "border-white bg-black/10 text-white hover:bg-white hover:text-black"
    : "border-black bg-transparent text-black hover:bg-black hover:text-white";

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
      {/* ---------------- Desktop Navbar ---------------- */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 hidden h-[62px] items-center justify-between px-10 transition-colors duration-300 lg:flex ${navDesktopBg}`}
      >
        <Link
          to="/"
          className={`${textClass} select-none text-[24px] font-semibold leading-none tracking-[-0.02em] transition-opacity hover:opacity-80`}
        >
          SPWF
        </Link>

        <div className="flex items-center gap-8">
          <ul className="m-0 flex list-none items-center gap-[24px] p-0">
            {navLinks.map((link) => {
              const hasMenu = Boolean(link.children);
              const isOpen = openDropdown === link.name;

              return (
                <li
                  key={link.name}
                  className="relative"
                  onMouseEnter={hasMenu ? () => openNow(link.name) : undefined}
                  onMouseLeave={hasMenu ? closeSoon : undefined}
                >
                  <Link
                    to={link.path}
                    aria-haspopup={hasMenu || undefined}
                    aria-expanded={hasMenu ? isOpen : undefined}
                    onFocus={hasMenu ? () => openNow(link.name) : undefined}
                    className={`${textClass} flex items-center gap-1.5 text-[16px] font-normal leading-none tracking-[-0.01em] transition-opacity hover:opacity-70`}
                  >
                    {link.name}
                    {hasMenu && (
                      <svg
                        width="9"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        aria-hidden="true"
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {hasMenu && (
                    <div
                      className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                          : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0"
                      }`}
                    >
                      <div className="w-[400px] rounded-[24px] bg-white p-2 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)] ring-1 ring-black/[0.06]">
                        <p className="px-4 pb-1 pt-3 font-['Inter'] text-[10px] uppercase tracking-[0.2em] text-black/30">
                          Our programmes
                        </p>

                        <div className="flex flex-col">
                          {link.children.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setOpenDropdown(null)}
                              className="group flex items-center gap-4 rounded-[16px] px-3 py-3 transition-colors duration-200 hover:bg-[#F6F4F0]"
                            >
                              <span
                                className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] shadow-[inset_0_-1px_2px_rgba(0,0,0,0.08)] transition-transform duration-300 ease-out group-hover:scale-[1.07]"
                                style={{ backgroundColor: item.color }}
                              >
                                {item.icon ? (
                                  <img
                                    src={item.icon}
                                    alt=""
                                    aria-hidden="true"
                                    className="h-[28px] w-[28px] object-contain"
                                  />
                                ) : null}
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="block font-['Sora'] text-[16px] leading-[130%] tracking-[-0.32px] text-black">
                                  {item.name}
                                </span>
                                <span className="mt-0.5 block font-['Inter'] text-[13px] leading-[140%] text-black/45">
                                  {item.tagline}
                                </span>
                              </span>

                              <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-black/25 transition-all duration-300 ease-out group-hover:bg-black group-hover:text-white">
                                <ArrowIcon />
                              </span>
                            </Link>
                          ))}
                        </div>

                        <div className="mx-3 mt-1 h-px bg-black/[0.07]" />

                        <Link
                          to="/programs"
                          onClick={() => setOpenDropdown(null)}
                          className="group mt-1 flex items-center justify-between rounded-[16px] px-4 py-3 font-['Inter'] text-[14px] text-black/60 transition-colors hover:bg-[#F6F4F0] hover:text-black"
                        >
                          All programmes
                          <ArrowIcon className="transition-transform duration-300 ease-out group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/join-us"
              className={`flex h-[48px] w-[140px] items-center justify-center rounded-[8px] border font-['Inter'] text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
            >
              Join us
            </Link>

            <Link
              to="/fund-us"
              className={`flex h-[48px] w-[140px] items-center justify-center rounded-[8px] border font-['Inter'] text-[16px] font-normal leading-none tracking-[-0.02em] transition-colors ${joinBtnClass}`}
            >
              Fund us
            </Link>
          </div>
        </div>
      </nav>

      {/* ---------------- Mobile Navbar ---------------- */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex h-[62px] items-center justify-between px-[19px] transition-colors duration-300 lg:hidden ${navMobileBg}`}
      >
        <Link
          to="/"
          className={`${textClass} select-none text-[20px] font-semibold leading-none tracking-[-0.02em]`}
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

      {/* ---------------- Mobile Fullscreen Menu ---------------- */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute inset-0 ${menuOverlay}`}
          onClick={() => setMenuOpen(false)}
        />

        <div className="relative flex h-full w-full flex-col overflow-y-auto px-5 pb-8 pt-5">
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

          <ul className="m-0 mt-10 flex list-none flex-col gap-2 p-0">
            {navLinks.map((link, index) => {
              const hasMenu = Boolean(link.children);
              const isSubOpen = mobileSubOpen === link.name;

              return (
                <li key={link.name}>
                  {hasMenu ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileSubOpen(isSubOpen ? null : link.name)
                        }
                        aria-expanded={isSubOpen}
                        className={`flex w-full items-center justify-between rounded-[18px] px-1 py-3 text-left transition-colors ${mobileLinkHover}`}
                      >
                        <span
                          className={`${menuText} text-[30px] font-normal leading-[1] tracking-[-0.04em]`}
                        >
                          {link.name}
                        </span>
                        <span
                          className={`${menuMuted} flex items-center gap-3 text-[11px] tracking-[0.16em]`}
                        >
                          0{index + 1}
                          <svg
                            width="12"
                            height="8"
                            viewBox="0 0 10 6"
                            fill="none"
                            aria-hidden="true"
                            className={`transition-transform duration-300 ${
                              isSubOpen ? "rotate-180" : ""
                            }`}
                          >
                            <path
                              d="M1 1L5 5L9 1"
                              stroke="currentColor"
                              strokeWidth="1.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isSubOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="flex flex-col gap-1 py-2 pl-1">
                            {link.children.map((item) => (
                              <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className={`flex items-center gap-3 rounded-[14px] px-2 py-3 transition-colors ${mobileLinkHover}`}
                              >
                                <span
                                  className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[10px]"
                                  style={{ backgroundColor: item.color }}
                                >
                                  {item.icon ? (
                                    <img
                                      src={item.icon}
                                      alt=""
                                      aria-hidden="true"
                                      className="h-[24px] w-[24px] object-contain"
                                    />
                                  ) : null}
                                </span>
                                <span className="min-w-0 flex-1">
                                  <span
                                    className={`${menuText} block font-['Sora'] text-[17px] leading-[130%] tracking-[-0.02em]`}
                                  >
                                    {item.name}
                                  </span>
                                  <span
                                    className={`${menuMuted} mt-0.5 block font-['Inter'] text-[13px] leading-[140%]`}
                                  >
                                    {item.tagline}
                                  </span>
                                </span>
                                <ArrowIcon className={menuMuted} />
                              </Link>
                            ))}

                            <Link
                              to="/programs"
                              onClick={() => setMenuOpen(false)}
                              className={`${menuMuted} px-2 py-2 font-['Inter'] text-[14px] underline underline-offset-4`}
                            >
                              All programmes
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
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
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto pt-8">
            <div className={`mb-5 h-[1px] w-full ${dividerClass}`} />

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/join-us"
                onClick={() => setMenuOpen(false)}
                className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
              >
                Join us
              </Link>

              <Link
                to="/fund-us"
                onClick={() => setMenuOpen(false)}
                className={`flex h-[50px] items-center justify-center rounded-full border text-[15px] font-medium tracking-[-0.02em] transition-colors ${joinBtnClass}`}
              >
                Fund us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
