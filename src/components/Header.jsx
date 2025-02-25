// import React from "react";
// import Timer from "./Timer";
// import { FaDiscord } from "react-icons/fa";
// import andSymbol from "../assets/and.png";

// const Header = () => {
//   const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3  pb-2 items-left">
//       {/* Left Column - Grey Box */}
//       <div className="flex justify-center md:justify-start">
//         <div className="w-[507px] h-[406px] rounded-[20px] bg-[#C9C8C8]"></div>
//       </div>

//       {/* Center Column - Event Description, APPLY NOW, Discord Button */}
//       <div className="flex flex-col  text-center md:text-left pl-3 ">
//         <p className="text-center md:text-left  text-[#393939] font-bold leading-relaxed text-[15.1px] font-inter md:w-full">
//           Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
//         </p>

//         {/* APPLY NOW Button */}
//         <div className="mt-6">
//           <button className="bg-black p-2 rounded-xl shadow-lg">
//             <div className="border-2 border-amber-500 rounded-xl px-6 py-3">
//               <p className="text-3xl md:text-5xl text-amber-500 font-bold tracking-wide uppercase">
//                 APPLY NOW
//               </p>
//             </div>
//           </button>
//         </div>

//         {/* Discord Button */}
//         <div className="mt-6">
//           <button className="w-[265px] h-[128px] flex-shrink-0 rounded-[10px] border border-[#C39208] bg-[rgba(0,0,0,0.70)] flex justify-center items-center shadow-lg">
//             <span className="flex justify-center items-center text-[#E9C872] font-inter text-[40px] font-extrabold uppercase"
//               style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#000" }}>
//               <FaDiscord className="text-2xl mr-2" /> DISCORD
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Right Column - Timer, DATE & TIME, and Structure of Competition */}
//       <div className="flex flex-col items-center md:items-end mb-4">
//         {/* Countdown Timer */}
//         <div className="mb-4">
//           <Timer targetDate={targetDate} />
//         </div>

//         {/* Date & Time */}
//         <div className="flex flex-row justify-center items-center w-full gap-4">
//                 {/* Date */}
//                 <div className="flex flex-col justify-center items-center">
//                   <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
//                     DATE
//                   </h1>
//                   <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
//                     4th and 5th <br /> April, 2024
//                   </h2>
//                 </div>
        
//                 {/* AND Symbol */}
//                 <div className="w-[40px] md:w-[79.382px]">
//                   <img
//                     src={andSymbol}
//                     alt="and"
//                     className="w-full h-auto object-contain"
//                   />
//                 </div>
        
//                 {/* Time */}
//                 <div className="flex flex-col justify-center items-center ">
//                   <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
//                     TIME
//                   </h1>
//                   <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
//                     9:00 AM to <br /> 12:30 PM IST
//                   </h2>
//                 </div>
//               </div>

//         {/* Structure of the Competition */}
//         <div className="mt-1 w-[550px] text-[#393939] font-['Times New Roman'] text-[15px] font-bold leading-[17.39px]">
//           <h2 className="text-lg font-bold">Structure of the Competition:</h2>
//           <p>
//             First, all participants must register individually. Once registered, they can either create a team or join an existing one. After forming teams, participants will work on their project ideas and submit a detailed proposal along with a PPT. Based on these submissions, the best projects will be selected for the next phase—some teams will be invited for an offline hackathon, while others will be shortlisted for the online hackathon.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import Timer from "./Timer";
import { FaDiscord } from "react-icons/fa";
import andSymbol from "../assets/and.png";

const Header = () => {


  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 pb-2 items-center">
      {/* Left Column - Grey Box */}
      <div className="flex w-full align-center flex-row items-center justify-center md:justify-start">
        <div className="mx-auto  w-[400px] md:w-[507px] h-[406px] rounded-[20px] bg-[#C9C8C8]"></div>
      </div>

      {/* Center Column - Event Description, APPLY NOW, Discord Button */}
      <div className="flex flex-col text-center md:text-left pl-3">
        <p className=" text-justify  text-[#393939] font-bold leading-relaxed text-[15.1px] font-inter md:w-full">
          Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
        </p>

        {/* APPLY NOW Button */}
        <div className="mt-6">
          <button className="bg-black p-2 rounded-xl shadow-lg">
            <div className="border-2 border-amber-500 rounded-xl px-6 py-3">
              <p className="text-3xl md:text-5xl text-amber-500 font-bold tracking-wide uppercase">
                APPLY NOW
              </p>
            </div>
          </button>
        </div>

        {/* Discord Button */}
        <div className="mt-6">
          <button className="w-[22.5rem] h-[8rem] flex-shrink-0 rounded-[10px] border border-[#C39208] bg-[rgba(0,0,0,0.70)] flex justify-center items-center shadow-lg">
            <span className="flex justify-center items-center text-[#E9C872] font-inter text-[40px] font-extrabold uppercase"
              style={{ WebkitTextStrokeWidth: "1px", WebkitTextStrokeColor: "#000" }}>
              <FaDiscord className="text-2xl mr-2" /> DISCORD
            </span>
          </button>
        </div>
      </div>

      {/* Right Column - Timer, DATE & TIME, and Structure of Competition */}
      <div className="flex flex-col items-center mb-4 w-full">
        {/* Timer, Date & Time - Centered */}
        <div className="flex flex-col items-center w-full">
          {/* Countdown Timer - Centered */}
          <div className="mb-4 flex justify-center w-full">
            <Timer targetDate={targetDate} />
          </div>

          {/* Date & Time */}
          <div className="flex flex-row justify-center items-center w-full gap-4">
            {/* Date */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
                DATE
              </h1>
              <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
                4th and 5th <br /> April, 2024
              </h2>
            </div>

            {/* AND Symbol */}
            <div className="w-[40px] md:w-[79.382px]">
              <img
                src={andSymbol}
                alt="and"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[20px] md:text-[42.8px] font-titan text-black">
                TIME
              </h1>
              <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#3A3A3A] leading-tight">
                9:00 AM to <br /> 12:30 PM IST
              </h2>
            </div>
          </div>
        </div>

        {/* Structure of the Competition */}
        <div className="mt-4 w-[550px] text-[#393939] font-['Times New Roman'] text-[15px] font-bold leading-[17.39px] pr-[4rem] text-justify">
          <h2 className="text-lg font-bold">Structure of the Competition:</h2>
          <p>
            First, all participants must register individually. Once registered, they can either create a team or join an existing one. After forming teams, participants will work on their project ideas and submit a detailed proposal along with a PPT. Based on these submissions, the best projects will be selected for the next phase—some teams will be invited for an offline hackathon, while others will be shortlisted for the online hackathon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
