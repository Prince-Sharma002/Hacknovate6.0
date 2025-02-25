
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
      