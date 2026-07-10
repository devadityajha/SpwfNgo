// import React from "react";

// // Import your exported illustration here (the puddle/kid image)
// import footerIllustration from "../../assets/images/kid-standing.png";

// const Footer = () => {
//   return (
//     <footer className="w-full flex flex-col items-center font-sans">
//       {/*
//         =========================================
//         TOP SECTION (Pre-Footer with Illustration)
//         Figma: Frame 2147226773 | Height: 496px | Bg: #FEFAF1
//         =========================================
//       */}
//       <div className="w-full max-w-[1440px] h-[496px] bg-[#FEFAF1] relative overflow-hidden flex-shrink-0">
//         {/* Text Area - Positioned exactly per Figma (Top: 120px, Left: 40px, Width: 525px) */}
//         <div className="absolute top-[120px] left-[40px] w-[525px] z-10">
//           <h2 className="text-[40px] font-normal leading-[1.2] tracking-[-0.02em] text-gray-900">
//             A Future Full Of <br /> Possibilities Starts Here.
//           </h2>
//         </div>

//         {/* Illustration - Positioned exactly per Figma (Top: -40px, Left: 433px, Width: 1007px) */}
//         <div className="absolute top-[-40px] left-[433px] w-[1007px] h-[536px] z-0">
//           <img
//             src={footerIllustration}
//             alt="A future full of possibilities"
//             className="w-full h-full object-contain"
//           />
//         </div>
//       </div>

//       {/*
//         =========================================
//         BOTTOM SECTION (Main Links & Copyright)
//         Figma: Frame 2147226731 | Padding: Top 100px, Bottom 52px, L/R 40px | Bg: #FFFFFF
//         =========================================
//       */}
//       <div className="w-full max-w-[1440px] bg-[#FFFFFF] pt-[100px] pb-[52px] px-[40px] flex flex-col">
//         {/* Links Grid */}
//         <div className="w-full max-w-[1360px] grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-8 mx-auto">
//           {/* Column 1: SPWF */}
//           <div className="flex flex-col pr-4">
//             <h3 className="text-[18px] font-bold mb-4 text-gray-900">SPWF</h3>
//             <p className="text-[15px] text-gray-500 leading-relaxed max-w-[280px] mb-8">
//               A short note every quarter -milestones, classroom moments, and how
//               your support became real
//             </p>

//             {/* Newsletter Icon Graphic */}
//           </div>

//           {/* Column 2: REACH US */}
//           <div className="flex flex-col">
//             <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
//               REACH US
//             </h3>
//             <ul className="flex flex-col gap-4 text-[16px] text-gray-600">
//               <li>
//                 <a
//                   href="mailto:spwf.ngo@gmail.com"
//                   className="hover:text-gray-900 transition-colors"
//                 >
//                   spwf.ngo@gmail.com
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="tel:+918851755256"
//                   className="hover:text-gray-900 transition-colors"
//                 >
//                   +91 88517 55256
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center hover:text-gray-900 transition-colors"
//                 >
//                   WhatsApp <span className="ml-2 font-serif">→</span>
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Column 3: VISIT */}
//           <div className="flex flex-col">
//             <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
//               VISIT
//             </h3>
//             <p className="text-[16px] text-gray-600 leading-relaxed max-w-[180px]">
//               E-10, Sainik Nagar,
//               <br />
//               Mansaram Park,
//               <br />
//               near DPS School
//               <br />
//               (Nawada Metro)
//               <br />
//               Delhi 110059
//             </p>
//           </div>

//           {/* Column 4: QUICK LINKS */}
//           <div className="flex flex-col">
//             <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
//               QUICK LINKS
//             </h3>
//             <ul className="flex flex-col gap-4 text-[16px] text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-gray-900 transition-colors">
//                   Our story
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-900 transition-colors">
//                   Programmes
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-900 transition-colors">
//                   Donate
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-gray-900 transition-colors">
//                   Volunteer
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="flex items-center hover:text-gray-900 transition-colors"
//                 >
//                   Annual Report <span className="ml-2 font-serif">→</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider Line (Color #E2E2E2, Height 1px) */}
//         <div className="w-full max-w-[1360px] mx-auto h-[1px] bg-[#E2E2E2] mt-[80px] mb-[28px]"></div>

//         {/* Bottom Copyright Row (Font Inter, Weight 600, Color #777777) */}
//         <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-center text-[#777777] font-inter font-semibold text-[14px] md:text-[16px] gap-4">
//           {/* Left Side Links */}
//           <div className="flex items-center gap-2">
//             <a href="#" className="hover:text-gray-900 transition-colors">
//               Security
//             </a>
//             <span className="font-normal px-1">|</span>
//             <a href="#" className="hover:text-gray-900 transition-colors">
//               Privacy Policy
//             </a>
//             <span className="font-normal px-1">|</span>
//             <a href="#" className="hover:text-gray-900 transition-colors">
//               Terms & Conditions
//             </a>
//           </div>

//           {/* Right Side Copyright */}
//           <div>© 2018-2026 Shakuntala Poddar Welfare Foundation</div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

// Import your exported illustration here (the puddle/kid image)
import footerIllustration from "../../assets/images/kid-standing.png";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center font-sans">
      {/* 
        =========================================
        TOP SECTION (Pre-Footer with Illustration)
        =========================================
      */}
      <div className="w-full max-w-[1440px] h-auto lg:h-[496px] bg-[#FEFAF1] relative overflow-hidden flex-shrink-0 flex flex-col lg:block pt-16 lg:pt-0">
        {/* 
          Text Area 
          FIX: Removed mobile centering. Enforced text-left for symmetry.
        */}
        <div className="relative lg:absolute lg:top-[120px] lg:left-[40px] w-full lg:w-[525px] z-10 px-6 sm:px-10 lg:px-0 text-left">
          {/* 
            HEADLINE FIX: Made font-semibold, tighter tracking, and leading-[1.1] 
            to look much more professional and modern on mobile.
          */}
          <h2 className="text-[36px] md:text-[44px] lg:text-[40px] font-semibold lg:font-normal leading-[1.1] lg:leading-[1.2] tracking-[-0.03em] lg:tracking-[-0.02em] text-gray-900">
            A Future Full Of <br className="hidden lg:block" /> Possibilities
            Starts Here.
          </h2>
        </div>

        {/* Illustration */}
        <div className="relative lg:absolute lg:top-[-40px] lg:left-[433px] w-full lg:w-[1007px] h-[300px] sm:h-[400px] lg:h-[536px] z-0 mt-8 lg:mt-0">
          <img
            src={footerIllustration}
            alt="A future full of possibilities"
            className="w-full h-full object-contain object-bottom lg:object-center"
          />
        </div>
      </div>

      {/* 
        =========================================
        BOTTOM SECTION (Main Links & Copyright)
        =========================================
      */}
      <div className="w-full max-w-[1440px] bg-[#FFFFFF] pt-12 lg:pt-[100px] pb-8 lg:pb-[52px] px-6 lg:px-[40px] flex flex-col">
        {/* 
          Links Grid 
          FIX: Everything is now strictly left-aligned on mobile to fix the asymmetrical, messy look.
        */}
        <div className="w-full max-w-[1360px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 lg:gap-8 mx-auto">
          {/* Column 1: SPWF */}
          <div className="flex flex-col lg:pr-4 text-left">
            <h3 className="text-[18px] font-bold mb-4 text-gray-900">SPWF</h3>
            <p className="text-[15px] text-gray-500 leading-relaxed max-w-[280px] mb-8">
              A short note every quarter -milestones, classroom moments, and how
              your support became real
            </p>
          </div>

          {/* Column 2: REACH US */}
          <div className="flex flex-col text-left">
            <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
              REACH US
            </h3>
            <ul className="flex flex-col gap-4 text-[16px] text-gray-600">
              <li>
                <a
                  href="mailto:spwf.ngo@gmail.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  spwf.ngo@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918851755256"
                  className="hover:text-gray-900 transition-colors"
                >
                  +91 88517 55256
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-gray-900 transition-colors"
                >
                  WhatsApp <span className="ml-2 font-serif">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: VISIT */}
          <div className="flex flex-col text-left">
            <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
              VISIT
            </h3>
            <p className="text-[16px] text-gray-600 leading-relaxed max-w-[180px]">
              E-10, Sainik Nagar,
              <br />
              Mansaram Park,
              <br />
              near DPS School
              <br />
              (Nawada Metro)
              <br />
              Delhi 110059
            </p>
          </div>

          {/* Column 4: QUICK LINKS */}
          <div className="flex flex-col text-left">
            <h3 className="text-[14px] font-bold uppercase tracking-wider mb-6 text-gray-900">
              QUICK LINKS
            </h3>
            <ul className="flex flex-col gap-4 text-[16px] text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Our story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Programmes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Donate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center hover:text-gray-900 transition-colors"
                >
                  Annual Report <span className="ml-2 font-serif">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-[1360px] mx-auto h-[1px] bg-[#E2E2E2] mt-12 lg:mt-[80px] mb-6 lg:mb-[28px]"></div>

        {/* Bottom Copyright Row */}
        <div className="w-full max-w-[1360px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center text-[#777777] font-inter font-semibold text-[14px] md:text-[16px] gap-4 text-left">
          {/* Left Side Links */}
          <div className="flex flex-wrap items-center gap-2">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Security
            </a>
            <span className="font-normal px-1">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <span className="font-normal px-1">|</span>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Terms & Conditions
            </a>
          </div>

          {/* Right Side Copyright */}
          <div>© 2018-2026 Shakuntala Poddar Welfare Foundation</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
