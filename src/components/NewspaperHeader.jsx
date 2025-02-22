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
            className="flex items-center justify-between space-x-6 max-lg:hidden"
          >
            {/* Left Line */}
            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>

            {/* Menu Items */}
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


            
            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>
          </div>

          
          <div className="m-0 max-lg:flex max-lg:justify-end hidden">
            <Navbar />
          </div>

         
          <div className="flex justify-between max-lg:justify-center items-center mb-0">
            <img
              src={logobg}
              alt=""
              className="relative left-28 max-lg:hidden w-[150px] h-[150px]"
            />
            <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide">
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                ABESIT{" "}
              </span>
              <span className="text-prophet-gold text-yellow-500  tracking-wide max-lg:text-4xl">
                T
              </span>
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                IMES
              </span>
            </h1>
            <img
              src={logobg}
              alt=""
              className="relative right-28 max-lg:hidden w-[150px] h-[150px]"
            />
          </div>

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
