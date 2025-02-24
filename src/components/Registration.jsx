// import React from "react";
// import discord from "../assets/discord.png";
// import { FaDiscord } from "react-icons/fa";
// import { SiLinktree } from "react-icons/si";
// import { FaLinkedin } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import andSymbol from "../assets/and.png";

// const Registration = () => {
//   return (
    
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1">
//       <div className="bg-gray-300 w-full"></div>
//       <div className="relative bg-black p-2 rounded-xl shadow-lg">
      
//         <div className="border-2 border-amber-500 rounded-xl p-4 flex justify-center items-center">
//           <p className="text-5xl text-amber-500 font-bold tracking-wide uppercase">
//             REGISTER
//           </p>
//         </div>
//       </div>
//       <div className="flex  font-titan align-center items-center px-8">
//         <div className="grow text-center">
//           <h1 className="text-4xl"> DATE </h1>
//           <h2 className="">5th April</h2>
//         </div>
//         <span className="text-8xl grow text-center">&</span>
//         <div className="grow text-center">
//           <h1 className="text-4xl"> Time </h1>
//           <h2>9:00 PM</h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Registration;

{/* <div className="pl-5 pr-5">
         <p className=" w-full h-full  flex justify-center  items-center text-wrap tracking-tighter text-[#3F3D3D] ">
          Hacknovate 6.0 brings the magic of Harry Potter to coding! Code like a
          wizard, innovate with spells of technology, and achieve greatness in
          this 24-hour hybrid hackathon at ABESIT
        </p> 
      </div> */}
      {/* <div className="flex flex-row gap-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-gray-800">
            <FaDiscord className="text-6xl" />
            DISCORD
        </div>

        <div className="flex flex-col justify-center items-center text-gray-800">
            <SiLinktree className="text-6xl" />
            LINKTREE
        </div>
        <div className="flex flex-col justify-center items-center text-gray-800">
            <FaLinkedin className="text-6xl" />
            LINKEDIN
        </div>
        <div className="flex flex-col justify-center items-center text-gray-800">
            <FaSquareInstagram className="text-6xl" />
            INSTGRAM
        </div>
      </div> */}


      import React from "react";
      import discord from "../assets/discord.png";
      import { FaDiscord } from "react-icons/fa";
      import { SiLinktree } from "react-icons/si";
      import { FaLinkedin } from "react-icons/fa";
      import { FaSquareInstagram } from "react-icons/fa6";
      import andSymbol from "../assets/and.png";
      
      const Registration = () => {
        return (
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1">
            {/* Grey Box (Aligned with Registration Section) */}
            <div className="bg-gray-300 w-full"></div>
      
            {/* Register Button */}
            <div className="relative bg-black p-2 rounded-xl shadow-lg">
              <div className="border-2 border-amber-500 rounded-xl p-4 flex justify-center items-center">
                <p className="text-5xl text-amber-500 font-bold tracking-wide uppercase">
                  REGISTER
                </p>
              </div>
            </div>
      
            {/* Date & Time Section */}
            <div className="flex items-center px-12">
              {/* Date */}
              <div className="flex flex-col justify-center items-center flex-1 text-center">
                <h1 className="text-[42.8px] font-titan text-black leading-normal">
                  DATE
                </h1>
                <h2 className="text-[18px] font-extrabold text-[#3A3A3A] leading-[17.147px]">
                  4th and 5th <br /> April, 2024
                </h2>
              </div>
      
              {/* AND Symbol as an Image */}
              <div className="mx-4 flex-shrink-0">
                <img
                  src={andSymbol}
                  alt="and"
                  className="w-[79.382px] h-[84px] object-contain"
                />
              </div>
      
              {/* Time */}
              <div className="flex flex-col justify-center items-center flex-1 text-center">
                <h1 className="text-[42.8px] font-titan text-black leading-normal">
                  TIME
                </h1>
                <h2 className="text-[18px] font-extrabold text-[#3A3A3A] leading-[17.147px]">
                  9:00 AM to <br /> 12:30 PM IST
                </h2>
              </div>
            </div>
          </div>
        );
      };
      
      export default Registration;
      