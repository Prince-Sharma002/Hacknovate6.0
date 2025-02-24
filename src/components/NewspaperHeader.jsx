// import hacknovate from "../assets/hacknovate.png";
// import logobg from "../assets/logobg.png";
// import redCircle from "../assets/redCircle.png"; 

// import { useState } from "react";
// import Navbar from "./Navbar";

// const NewspaperHeader = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
//       <div className="w-full mx-auto border-b-4 border-slate-800">
//         <div
//           className="text-center space-y-3 animate-fadeIn"
//           style={{ animationDelay: "0.2s" }}
//         >
//           {/* Navbar */}
//           <div
//             id="navbar"
//             className="flex items-center justify-center space-x-6 max-lg:hidden"
//           >
//             {/* Left Separator Line - Adjusted to start after the logo */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black clip-path-[polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%)] ml-[60px]"></div>

//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">About</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Events</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Team</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Mentor</a>
//             </span>
//             <span className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
//               <div className="relative w-[127px] h-auto">
//                 <img
//                   src={redCircle}
//                   alt="Red Circle"
//                   className="absolute -top-4 w-full h-auto pointer-events-none"
//                 />
//               </div>
//               <a href="">Sponsor Us</a>
//             </span>

//             {/* Right Separator Line */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black overflow-hidden ml-[40px]"></div>
//           </div>

//           {/* Mobile Navbar */}
//           <div className="m-0 max-lg:flex max-lg:justify-end hidden">
//             <Navbar />
//           </div>

//           {/* Header Section */}
//           <div className="flex justify-between max-lg:justify-center items-center mb-0 px-10">
//             {/* Increased Hacknovate Logo Size & Overlapping Left Separator */}
//             <img
//               src={logobg}
//               alt="Hacknovate Logo"
//               className="relative m-[-20px] left-[-15px] max-lg:hidden w-[200px] h-auto -ml-12 z-10 mb-[-45px]"
//             />

//             {/* ABESIT TIMES - Centered & Adjusted Typography */}
//             <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide">
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 ABESIT{" "}
//               </span>
//               <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl font-black">
//                 T
//               </span>
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 IMES
//               </span>
//             </h1>

//             {/* ABESIT Group of Institutions Logo - Balanced Spacing */}
//             <div className="flex flex-col items-center text-center hidden md:inline mr-[-30px] ">
//               <span className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)]">
//                 ABESIT
//               </span>
//               <div className="relative flex items-center justify-center mt-[-20px]">
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//                 <span className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">
//                   Group of Institutions
//                 </span>
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//               </div>
//             </div>
//           </div>

//           {/* FLAGSHIP EVENT - Thicker Line */}
//           <div className=" flex items-center justify-center gap-x-4 ">
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//             <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-lg:text-xs ">
//               Presents their FLAGSHIP EVENT
//             </p>
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//           </div>
//           {/* <div className="w-[50%] h-[4px] bg-black mx-auto mt-2"></div> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NewspaperHeader;

// import hacknovate from "../assets/hacknovate.png";
// import logobg from "../assets/logobg.png";
// import redCircle from "../assets/redCircle.png"; 

// import { useState } from "react";
// import Navbar from "./Navbar";

// const NewspaperHeader = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
//       <div className="w-full mx-auto border-b-4 border-slate-800">
//         <div
//           className="text-center space-y-3 animate-fadeIn"
//           style={{ animationDelay: "0.2s" }}
//         >
//           {/* Navbar */}
//           <div
//             id="navbar"
//             className="flex items-center justify-center space-x-6 max-lg:hidden"
//           >
//             {/* Left Separator Line - Adjusted to start after the logo */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black clip-path-[polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%)] ml-[150px]"></div>

//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">About</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Events</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Team</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Mentor</a>
//             </span>
//             <span className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
//               <div className="relative w-[127px] h-auto">
//                 <img
//                   src={redCircle}
//                   alt="Red Circle"
//                   className="absolute -top-4 w-full h-auto pointer-events-none"
//                 />
//               </div>
//               <a href="">Sponsor Us</a>
//             </span>

//             {/* Right Separator Line */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black overflow-hidden ml-[40px]"></div>
//           </div>

//           {/* Mobile Navbar */}
//           <div className="m-0 max-lg:flex max-lg:justify-end hidden">
//             <Navbar />
//           </div>

//           {/* Header Section */}
//           <div className="flex justify-between max-lg:justify-center items-center mb-0 px-10">
//             {/* Increased Hacknovate Logo Size & Overlapping Left Separator */}
//             <img
//               src={logobg}
//               alt="Hacknovate Logo"
//               className="relative m-[-40px] left-[-15px] max-lg:hidden w-[200px] h-auto -ml-12 z-10"
//             />

//             {/* ABESIT TIMES - Centered & Adjusted Typography */}
//             <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide">
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 ABESIT{" "}
//               </span>
//               <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl font-black">
//                 T
//               </span>
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 IMES
//               </span>
//             </h1>

//             {/* ABESIT Group of Institutions Logo - Balanced Spacing */}
//             <div className="flex flex-col items-center text-center hidden md:inline mr-[-30px] ">
//               <span className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)]">
//                 ABESIT
//               </span>
//               <div className="relative flex items-center justify-center mt-[-20px]">
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//                 <span className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">
//                   Group of Institutions
//                 </span>
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//               </div>
//             </div>
//           </div>

//           {/* FLAGSHIP EVENT - Thicker Line */}
//           <div className="flex items-center justify-center gap-x-4">
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//             <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-lg:text-xs">
//               Presents their FLAGSHIP EVENT
//             </p>
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//           </div>
//           {/* <div className="w-[50%] h-[4px] bg-black mx-auto mt-2"></div> */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NewspaperHeader;

import hacknovate from "../assets/hacknovate.png";
import logobg from "../assets/logobg.png";
import redCircle from "../assets/redCircle.png"; 

import { useState } from "react";
import Navbar from "./Navbar";

const NewspaperHeader = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
      <div className="w-full mx-auto border-b-4 border-slate-800">
        <div
          className="text-center space-y-3 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >

<div
            id="navbar"
            className="flex items-center justify-center space-x-6 max-lg:hidden"
          >
            {/* Left Separator Line - Adjusted to start after the logo */}
            <div className="flex-1 h-[3px] w-[80px] bg-black clip-path-[polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%)] ml-[150px]"></div>

            <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
              <a href="">About</a>
            </span>
            <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
              <a href="">Events</a>
            </span>
            <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
              <a href="">Team</a>
            </span>
            <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
              <a href="">Mentor</a>
            </span>
            <span className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
              <div className="relative w-[127px] h-auto">
                <img
                  src={redCircle}
                  alt="Red Circle"
                  className="absolute -top-4 w-full h-auto pointer-events-none"
                />
              </div>
              <a href="">Sponsor Us</a>
            </span>

            {/* Right Separator Line */}
            <div className="flex-1 h-[3px] w-[80px] bg-black overflow-hidden ml-[40px]"></div>
          </div>

          {/* Mobile Navbar */}
          <div className="m-0 max-lg:flex max-lg:justify-end hidden">
            <Navbar />
          </div>
          {/* Header Section */}


          <div className="flex justify-between max-lg:justify-center items-center mb-0 px-10">
            {/* Increased Hacknovate Logo Size */}
            <img
              src={logobg}
              alt="Hacknovate Logo"
              className="relative m-[-40px] left-[-15px] max-lg:hidden w-[200px] h-auto -ml-12 z-10"
            />

            {/* ABESIT TIMES - Centered & Adjusted Typography */}
            <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide">
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                ABESIT{" "}
              </span>
              <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl font-black">
                T
              </span>
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                IMES
              </span>
            </h1>

            {/* ABESIT Group of Institutions Logo - Balanced Spacing */}
            <div className="flex flex-col items-center text-center hidden md:inline mr-[-30px] ">
              <span className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)]">
                ABESIT
              </span>
              <div className="relative flex items-center justify-center mt-[-20px]">
                <div className="w-5 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
                <span className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">
                  Group of Institutions
                </span>
                <div className="w-5 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
              </div>
            </div>
          </div>

          {/* Navbar */}
          

          {/* FLAGSHIP EVENT - Thicker Line */}
          <div className="flex items-center justify-center gap-x-4">
            <span className="font-inter text-2xl max-lg:text-xs">★</span>
            <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-lg:text-xs">
              Presents their FLAGSHIP EVENT
            </p>
            <span className="font-inter text-2xl max-lg:text-xs">★</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewspaperHeader;

// import hacknovate from "../assets/hacknovate.png";
// import logobg from "../assets/logobg.png";
// import redCircle from "../assets/redCircle.png"; 

// import { useState } from "react";
// import Navbar from "./Navbar";

// const NewspaperHeader = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
//       <div className="w-full mx-auto border-b-4 border-slate-800">
//         <div
//           className="text-center space-y-3 animate-fadeIn"
//           style={{ animationDelay: "0.2s" }}
//         >
//           {/* Header Section */}
//           <div className="flex flex-col items-center mb-0 px-10">
//             {/* Increased Hacknovate Logo Size */}
//             <img
//               src={logobg}
//               alt="Hacknovate Logo"
//               className="relative w-[200px] h-auto mb-[-40px] z-10"
//             />

//             {/* ABESIT TIMES - Centered & Adjusted Typography */}
//             <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide text-center">
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 ABESIT{" "}
//               </span>
//               <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl font-black">
//                 T
//               </span>
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 IMES
//               </span>
//             </h1>

//             {/* ABESIT Group of Institutions Logo - Balanced Spacing */}
//             <div className="flex flex-col items-center text-center mt-[-20px]">
//               <span className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)]">
//                 ABESIT
//               </span>
//               <div className="relative flex items-center justify-center mt-[-20px]">
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//                 <span className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">
//                   Group of Institutions
//                 </span>
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//               </div>
//             </div>
//           </div>

//           {/* Navbar */}
//           <div
//             id="navbar"
//             className="flex items-center justify-center space-x-6 max-lg:hidden"
//           >
//             {/* Left Separator Line - Adjusted to start after the logo */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black clip-path-[polygon(0% 0%, 100% 0%, 100% 100%, 40% 100%)] ml-[150px]"></div>

//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">About</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Events</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Team</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Mentor</a>
//             </span>
//             <span className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
//               <div className="relative w-[127px] h-auto">
//                 <img
//                   src={redCircle}
//                   alt="Red Circle"
//                   className="absolute -top-4 w-full h-auto pointer-events-none"
//                 />
//               </div>
//               <a href="">Sponsor Us</a>
//             </span>

//             {/* Right Separator Line */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black overflow-hidden ml-[40px]"></div>
//           </div>

//           {/* Mobile Navbar */}
//           <div className="m-0 max-lg:flex max-lg:justify-end hidden">
//             <Navbar />
//           </div>

//           {/* FLAGSHIP EVENT - Thicker Line */}
//           <div className="flex items-center justify-center gap-x-4">
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//             <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-lg:text-xs">
//               Presents their FLAGSHIP EVENT
//             </p>
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NewspaperHeader;

// import hacknovate from "../assets/hacknovate.png";
// import logobg from "../assets/logobg.png";
// import redCircle from "../assets/redCircle.png"; 

// import { useState } from "react";
// import Navbar from "./Navbar";

// const NewspaperHeader = () => {
//   const [isOpen, setOpen] = useState(false);

//   return (
//     <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20">
//       <div className="w-full mx-auto border-b-4 border-slate-800">
//         <div
//           className="text-center space-y-3 animate-fadeIn"
//           style={{ animationDelay: "0.2s" }}
//         >
//           {/* Navbar */}
//           <div
//             id="navbar"
//             className="flex items-center justify-center space-x-6 max-lg:hidden"
//           >
//             {/* Left Separator Line - Adjusted to start after the logo */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black   "></div>

//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">About</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Events</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Team</a>
//             </span>
//             <span className="font-bold font-inter hover:text-amber-500 text-[18px]">
//               <a href="">Mentor</a>
//             </span>
//             <span className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
//               <div className="relative w-[127px] h-auto">
//                 <img
//                   src={redCircle}
//                   alt="Red Circle"
//                   className="absolute -top-4 w-full h-auto pointer-events-none"
//                 />
//               </div>
//               <a href="">Sponsor Us</a>
//             </span>

//             {/* Right Separator Line */}
//             <div className="flex-1 h-[3px] w-[80px] bg-black overflow-hidden ml-[40px]"></div>
//           </div>

//           {/* Mobile Navbar */}
//           <div className="m-0 max-lg:flex max-lg:justify-end hidden">
//             <Navbar />
//           </div>

//           {/* Header Section */}
//           <div className="flex items-center  justify-between max-lg:justify-center mb-0 px-10">
//             {/* Increased Hacknovate Logo Size */}
//             <img
//               src={logobg}
//               alt="Hacknovate Logo"
//               className="relative w-[200px] h-auto mr-4 z-10 max-lg:hidden m-[-40px] "
//             />

//             {/* ABESIT TIMES - Centered & Adjusted Typography */}
//             <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide text-center">
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 ABESIT{" "}
//               </span>
//               <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl font-black">
//                 T
//               </span>
//               <span className="text-prophet-black tracking-wide max-lg:text-4xl">
//                 IMES
//               </span>
//             </h1>

//             {/* ABESIT Group of Institutions Logo - Balanced Spacing */}
//             <div className="flex flex-col items-center text-center max-lg:hidden md:inline mr-[-30px] ">
//               <span className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)]">
//                 ABESIT
//               </span>
//               <div className="relative flex items-center justify-center mt-[-20px]">
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//                 <span className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]">
//                   Group of Institutions
//                 </span>
//                 <div className="w-6 h-[2px] bg-[#D1D5DB] [text-shadow:2px_2px_4px_rgba(0,0,0,0.9)]"></div>
//               </div>
//             </div>
//           </div>


          

//           {/* FLAGSHIP EVENT - Thicker Line */}
//           <div className="flex items-center justify-center gap-x-4">
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//             <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-lg:text-xs">
//               Presents their FLAGSHIP EVENT
//             </p>
//             <span className="font-inter text-2xl max-lg:text-xs">★</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default NewspaperHeader;

