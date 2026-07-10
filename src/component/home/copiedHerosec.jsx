// //// hero sec with navbar but black bg in hamburger

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import heroGirl from "../../assets/images/hero-girl.png";

// const navLinks = [
//   { name: "About us", path: "/about" },
//   { name: "Programs", path: "/programs" },
//   { name: "Campaigns", path: "/campaigns" },
//   { name: "Store", path: "/store" },
// ];

// const MicrosoftIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 21 21"
//     fill="none"
//     aria-hidden="true"
//   >
//     <rect x="1" y="1" width="9" height="9" fill="currentColor" />
//     <rect x="11" y="1" width="9" height="9" fill="currentColor" />
//     <rect x="1" y="11" width="9" height="9" fill="currentColor" />
//     <rect x="11" y="11" width="9" height="9" fill="currentColor" />
//   </svg>
// );

// const DropboxIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M12 2.5L6 6.5l6 4-6 4 6 4 6-4-6-4 6-4-6-4zM6 19.5l6-4 6 4-6 4-6-4z" />
//   </svg>
// );

// export default function HeroSection() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full font-sans">
//       <div className="relative w-full h-[100dvh] lg:h-[1077px] overflow-x-hidden">
//         {/* Hero Background Image */}
//         <img
//           src={heroGirl}
//           alt="A child studying with thumbs up"
//           className="absolute inset-0 w-full h-full object-cover object-[50%_20%] md:object-[48%_18%] lg:object-[50%_20%]"
//         />

//         {/* Dark gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />

//         {/* ─── DESKTOP Navbar ─── */}
//         <nav className="hidden lg:flex absolute top-0 left-0 right-0 z-20 items-center justify-between px-10 h-[62px]">
//           <Link
//             to="/"
//             className="text-white font-semibold text-[24px] leading-none tracking-[-0.02em] select-none hover:opacity-80 transition-opacity"
//           >
//             SPWF
//           </Link>
//           <div className="flex items-center gap-8">
//             <ul className="flex items-center gap-[24px] list-none m-0 p-0">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-white text-[16px] font-normal leading-none tracking-[-0.01em] hover:opacity-70 transition-opacity"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center gap-3">
//               <button className="w-[140px] h-[48px] font-['Inter'] rounded-[8px] border border-white bg-black/10 text-white text-[16px] font-normal leading-none tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
//                 Join us
//               </button>
//               <button className="w-[147px] h-[48px] font-['Inter'] rounded-[8px] border border-white bg-black/10 text-white  text-[16px] font-normal leading-none tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
//                 Fund us
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* ─── MOBILE Navbar ─── */}
//         <nav className="lg:hidden absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-[19px] h-[62px]">
//           <Link
//             to="/"
//             className="text-white font-semibold text-[20px] leading-none tracking-[-0.02em] select-none"
//           >
//             SPWF
//           </Link>

//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//             className="w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-full bg-black/30 border border-white/30 backdrop-blur-sm"
//           >
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
//                 menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
//               }`}
//             />
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
//                 menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
//               }`}
//             />
//           </button>
//         </nav>

//         {/* ─── MOBILE Drawer ─── */}
//         <div
//           className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
//             menuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}
//         >
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             onClick={() => setMenuOpen(false)}
//           />

//           {/* Drawer panel */}
//           <div
//             className={`absolute top-0 right-0 h-full w-[280px] bg-black/90 backdrop-blur-md flex flex-col transition-transform duration-300 ${
//               menuOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             {/* Drawer header */}
//             <div className="flex items-center justify-between px-6 h-[62px]">
//               <span className="text-white font-semibold text-[20px] tracking-[-0.02em]">
//                 SPWF
//               </span>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close menu"
//                 className="w-[36px] h-[36px] flex items-center justify-center rounded-full border border-white/30"
//               >
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <path
//                     d="M1 1L13 13M13 1L1 13"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="w-full h-[1px] bg-white/10" />

//             {/* Nav links */}
//             <ul className="flex flex-col gap-0 list-none m-0 p-0 mt-4">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     onClick={() => setMenuOpen(false)}
//                     className="block px-6 py-4 text-white text-[16px] font-normal tracking-[-0.01em] hover:bg-white/10 transition-colors"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA buttons */}
//             <div className="flex flex-col gap-3 px-6 mt-6">
//               <button className="w-full h-[48px] rounded-[8px] border border-white bg-transparent text-white text-[16px] font-normal tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
//                 Join us
//               </button>
//               <button className="w-full h-[48px] rounded-[8px] bg-white text-black text-[16px] font-medium tracking-[-0.02em] hover:bg-gray-100 transition-colors">
//                 Fund us
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ─── DESKTOP Hero Content ─── */}
//         <div className="hidden lg:flex absolute left-1/2 top-[510px] z-10 w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
//           <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>
//           <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>
//           <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>

//         {/* ─── MOBILE Hero Content ─── */}
//         <div className="lg:hidden absolute bottom-[80px] left-0 right-0 z-10 flex flex-col items-center gap-[20px] px-[19px]">
//           {/* Tag */}
//           <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[16px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="w-full text-center font-sans text-[32px] font-normal leading-[115%] tracking-[-0.03em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>

//           {/* CTA */}
//           <button className="h-[48px] w-full max-w-[320px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

/////only hero section with separate navbar
// import React from "react";
// import heroGirl from "../../assets/images/hero-girl.png";

// export default function HeroSection() {
//   return (
//     <div className="w-full font-sans">
//       <div className="relative w-full h-[100dvh] lg:h-[1077px] overflow-hidden">
//         {/* Hero Background Image */}
//         <img
//           src={heroGirl}
//           alt="A child studying with thumbs up"
//           className="absolute inset-0 w-full h-full object-cover object-[50%_20%] md:object-[48%_18%] lg:object-[50%_20%]"
//         />

//         {/* Dark gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />

//         {/* ─── DESKTOP Hero Content ─── */}
//         <div className="hidden lg:flex absolute left-1/2 top-[510px] z-10 w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
//           <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>
//           <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>
//           <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>

//         {/* ─── MOBILE Hero Content ─── */}
//         <div className="lg:hidden absolute bottom-[80px] left-0 right-0 z-10 flex flex-col items-center gap-[20px] px-[19px]">
//           {/* Tag */}
//           <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[16px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="w-full text-center font-sans text-[32px] font-normal leading-[115%] tracking-[-0.03em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>

//           {/* CTA */}
//           <button className="h-[48px] w-full max-w-[320px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

///sabse old code where hero and navbar merged-but here too navbar bg looking black

// import React, { useState } from "react";
// import heroGirl from "../../assets/images/hero-girl.png";

// const navLinks = ["About us", "Programs", "Campaigns", "Store"];

// const MicrosoftIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 21 21"
//     fill="none"
//     aria-hidden="true"
//   >
//     <rect x="1" y="1" width="9" height="9" fill="currentColor" />
//     <rect x="11" y="1" width="9" height="9" fill="currentColor" />
//     <rect x="1" y="11" width="9" height="9" fill="currentColor" />
//     <rect x="11" y="11" width="9" height="9" fill="currentColor" />
//   </svg>
// );

// const DropboxIcon = () => (
//   <svg
//     width="14"
//     height="14"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     aria-hidden="true"
//   >
//     <path d="M12 2.5L6 6.5l6 4-6 4 6 4 6-4-6-4 6-4-6-4zM6 19.5l6-4 6 4-6 4-6-4z" />
//   </svg>
// );

// export default function HeroSection() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="w-full font-sans">
//       {/* FIX: Added overflow-hidden and cleaned up the responsive height classes */}
//       <div className="relative w-full h-[812px] lg:h-[1077px] overflow-hidden">
//         {/* Hero Background Image */}
//         <img
//           src={heroGirl}
//           alt="A child studying with thumbs up"
//           className="absolute inset-0 w-full h-full object-cover scale-[1.08] object-[50%_20%] md:object-[48%_18%] lg:object-[50%_20%]"
//         />

//         {/* Dark gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />

//         {/* ─── DESKTOP Navbar ─── */}
//         <nav className="hidden lg:flex absolute top-0 left-0 right-0 z-20 items-center justify-between px-10 h-[62px]">
//           <span className="text-white font-semibold text-[24px] leading-none tracking-[-0.02em] select-none">
//             SPWF
//           </span>
//           <div className="flex items-center gap-8">
//             <ul className="flex items-center gap-[24px] list-none m-0 p-0">
//               {navLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     className="text-white text-[16px] font-normal leading-none tracking-[-0.01em] hover:opacity-70 transition-opacity"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center gap-3">
//               <button className="w-[140px] h-[48px] font-['Inter'] rounded-[8px] border border-white bg-black/10 text-white text-[16px] font-normal leading-none tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
//                 Join us
//               </button>
//               <button className="w-[147px] h-[48px] font-['Inter'] rounded-[8px] bg-white text-black text-[16px] font-medium leading-none tracking-[-0.02em] hover:bg-gray-100 transition-colors">
//                 Fund us
//               </button>
//             </div>
//           </div>
//         </nav>

//         {/* ─── MOBILE Navbar ─── */}
//         <nav className="lg:hidden absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-[19px] h-[62px]">
//           {/* Logo */}
//           <span className="text-white font-semibold text-[20px] leading-none tracking-[-0.02em] select-none">
//             SPWF
//           </span>

//           {/* Hamburger button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//             aria-expanded={menuOpen}
//             className="w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-full bg-black/30 border border-white/30 backdrop-blur-sm"
//           >
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
//                 menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
//               }`}
//             />
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             />
//             <span
//               className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
//                 menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
//               }`}
//             />
//           </button>
//         </nav>

//         {/* ─── MOBILE Drawer ─── */}
//         <div
//           className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
//             menuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           }`}
//         >
//           {/* Backdrop */}
//           <div
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//             onClick={() => setMenuOpen(false)}
//           />

//           {/* Drawer panel */}
//           <div
//             className={`absolute top-0 right-0 h-full w-[280px] bg-black/90 backdrop-blur-md flex flex-col transition-transform duration-300 ${
//               menuOpen ? "translate-x-0" : "translate-x-full"
//             }`}
//           >
//             {/* Drawer header */}
//             <div className="flex items-center justify-between px-6 h-[62px]">
//               <span className="text-white font-semibold text-[20px] tracking-[-0.02em]">
//                 SPWF
//               </span>
//               <button
//                 onClick={() => setMenuOpen(false)}
//                 aria-label="Close menu"
//                 className="w-[36px] h-[36px] flex items-center justify-center rounded-full border border-white/30"
//               >
//                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                   <path
//                     d="M1 1L13 13M13 1L1 13"
//                     stroke="white"
//                     strokeWidth="1.5"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="w-full h-[1px] bg-white/10" />

//             {/* Nav links */}
//             <ul className="flex flex-col gap-0 list-none m-0 p-0 mt-4">
//               {navLinks.map((link) => (
//                 <li key={link}>
//                   <a
//                     href="#"
//                     onClick={() => setMenuOpen(false)}
//                     className="block px-6 py-4 text-white text-[16px] font-normal tracking-[-0.01em] hover:bg-white/10 transition-colors"
//                   >
//                     {link}
//                   </a>
//                 </li>
//               ))}
//             </ul>

//             {/* CTA buttons */}
//             <div className="flex flex-col gap-3 px-6 mt-6">
//               <button className="w-full h-[48px] rounded-[8px] border border-white bg-transparent text-white text-[16px] font-normal tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
//                 Join us
//               </button>
//               <button className="w-full h-[48px] rounded-[8px] bg-white text-black text-[16px] font-medium tracking-[-0.02em] hover:bg-gray-100 transition-colors">
//                 Fund us
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ─── DESKTOP Hero Content ─── */}
//         <div className="hidden lg:flex absolute left-1/2 top-[510px] z-10 w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
//           <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>
//           <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>
//           <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>

//         {/* ─── MOBILE Hero Content ─── */}
//         <div className="lg:hidden absolute bottom-[80px] left-0 right-0 z-10 flex flex-col items-center gap-[20px] px-[19px]">
//           {/* Tag */}
//           <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[16px] backdrop-blur-[4px]">
//             <span className="whitespace-nowrap font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white">
//               Grassroot Level Organization
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="w-full text-center font-sans text-[32px] font-normal leading-[115%] tracking-[-0.03em] text-white">
//             A Place Where
//             <br />
//             Their Hearts Live.
//           </h1>

//           {/* CTA */}
//           <button className="h-[48px] w-full max-w-[320px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
//             Fund us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full font-sans">
      <div className="relative w-full h-[812px] lg:h-[1077px] overflow-hidden">
        {/* Hero Background Image */}
        <img
          src={heroGirl}
          alt="A child studying with thumbs up"
          className="absolute inset-0 w-full h-full object-cover scale-[1.08] object-[50%_20%] md:object-[48%_18%] lg:object-[50%_20%]"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-[5]" />

        {/* ─── DESKTOP Navbar ─── */}
        <nav className="hidden lg:flex absolute top-0 left-0 right-0 z-20 items-center justify-between px-10 h-[62px]">
          <span className="text-white font-semibold text-[24px] leading-none tracking-[-0.02em] select-none">
            SPWF
          </span>
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
              <button className="w-[140px] h-[48px] font-['Inter'] rounded-[8px] border border-white bg-black/10 text-white text-[16px] font-normal leading-none tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
                Join us
              </button>
              <button className="w-[147px] h-[48px] font-['Inter'] rounded-[8px] bg-white text-black text-[16px] font-medium leading-none tracking-[-0.02em] hover:bg-gray-100 transition-colors">
                Fund us
              </button>
            </div>
          </div>
        </nav>

        {/* ─── MOBILE Navbar ─── */}
        <nav className="lg:hidden absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-[19px] h-[62px]">
          {/* Logo */}
          <span className="text-white font-semibold text-[20px] leading-none tracking-[-0.02em] select-none">
            SPWF
          </span>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="w-[44px] h-[44px] flex flex-col items-center justify-center gap-[5px] rounded-full bg-black/30 border border-white/30 backdrop-blur-sm"
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-white transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </nav>

        {/* ─── MOBILE Drawer ─── */}
        <div
          className={`lg:hidden fixed inset-0 z-30 transition-all duration-300 ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Drawer panel */}
          <div
            className={`absolute top-0 right-0 h-full w-[280px] bg-black/90 backdrop-blur-md flex flex-col transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-[62px]">
              <span className="text-white font-semibold text-[20px] tracking-[-0.02em]">
                SPWF
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-[36px] h-[36px] flex items-center justify-center rounded-full border border-white/30"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/10" />

            {/* Nav links */}
            <ul className="flex flex-col gap-0 list-none m-0 p-0 mt-4">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    className="block px-6 py-4 text-white text-[16px] font-normal tracking-[-0.01em] hover:bg-white/10 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 px-6 mt-6">
              <button className="w-full h-[48px] rounded-[8px] border border-white bg-transparent text-white text-[16px] font-normal tracking-[-0.02em] hover:bg-white hover:text-black transition-colors">
                Join us
              </button>
              <button className="w-full h-[48px] rounded-[8px] bg-white text-black text-[16px] font-medium tracking-[-0.02em] hover:bg-gray-100 transition-colors">
                Fund us
              </button>
            </div>
          </div>
        </div>

        {/* ─── DESKTOP Hero Content ─── */}
        <div className="hidden lg:flex absolute left-1/2 top-[510px] z-10 w-[538px] -translate-x-1/2 flex-col items-center gap-[28px]">
          <div className="flex h-[34px] min-w-[228px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[20px] py-[4px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[14px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>
          <h1 className="w-[538px] text-center font-sans text-[60px] font-normal leading-[100%] tracking-[-0.04em] text-white">
            A Place Where
            <br />
            Their Hearts Live.
          </h1>
          <button className="h-[54px] w-[227px] rounded-[8px] bg-white px-[80px] py-[16px] font-['Inter'] text-[18px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
            Fund us
          </button>
        </div>

        {/* ─── MOBILE Hero Content ─── */}
        <div className="lg:hidden absolute bottom-[80px] left-0 right-0 z-10 flex flex-col items-center gap-[20px] px-[19px]">
          {/* Tag */}
          <div className="flex h-[34px] items-center justify-center rounded-[48px] border border-[#DCDCDC] bg-black/30 px-[16px] backdrop-blur-[4px]">
            <span className="whitespace-nowrap font-['Inter'] text-[12px] font-normal leading-[26px] tracking-[-0.01em] text-white">
              Grassroot Level Organization
            </span>
          </div>

          {/* Heading */}
          <h1 className="w-full text-center font-sans text-[32px] font-normal leading-[115%] tracking-[-0.03em] text-white">
            A Place Where
            <br />
            Their Hearts Live.
          </h1>

          {/* CTA */}
          <button className="h-[48px] w-full max-w-[320px] rounded-[8px] bg-white font-['Inter'] text-[16px] font-medium leading-none tracking-[-0.01em] text-black hover:bg-gray-100 transition-colors">
            Fund us
          </button>
        </div>
      </div>
    </div>
  );
}
