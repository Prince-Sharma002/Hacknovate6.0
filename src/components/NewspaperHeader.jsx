

import hacknovate from "../assets/hacknovate.png";
import logobg from "../assets/logobg.png";
import redCircle from "../assets/redCircle.png"; 
import { useState } from "react";
import Navbar from "./Navbar";

const NewspaperHeader = () => {
  return (
    <header className="w-full px-0 py-6 bg-prophet-gray bg-opacity-20  max-lg:m-0 ">
      <div className="w-full mx-auto border-b-4 border-slate-800">
        <div className="text-center space-y-3 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
          {/* Desktop Navbar */}
          <div id="navbar" className="flex items-center justify-center space-x-6 max-md:hidden">
            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>

            {["About", "Events", "Team", "Mentor"].map((item) => (
              <span key={item} className="font-bold font-inter hover:text-amber-500 text-[18px]">
                <a href="">{item}</a>
              </span>
            ))}

            <div className="relative font-bold font-inter hover:text-amber-500 text-[18px]">
              <div className="relative w-[127px] h-auto">
                <img
                  src={redCircle}
                  alt="Red Circle"
                  className="absolute -top-4 w-full h-auto pointer-events-none"
                />
              </div>
              <a href="">Sponsor Us</a>
            </div>

            <div className="flex-1 h-[3px] w-[80px] bg-black"></div>
          </div>

          {/* Mobile Navbar */}
          <div className="m-0 max-md:flex max-md:justify-end hidden">
            <Navbar />
          </div>

          {/* Header Section */}
          <div className="flex justify-between max-md:justify-center items-center mb-0 px-10">
            {/* Logo - Adjusted Size for Mobile */}
            <img
              src={logobg}
              alt="Hacknovate Logo"
              className="relative m-[-15px] left-[-15px] max-md:w-24 max-md:h-auto max-md:ml-0 w-[200px] h-auto -ml-12 z-10"
            />

            <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide">
              <span className="text-prophet-black tracking-wide max-md:text-4xl">ABESIT{" "}</span>
              <span className="text-prophet-gold text-yellow-400 tracking-wide max-md:text-4xl font-black">T</span>
              <span className="text-prophet-black tracking-wide max-md:text-4xl">IMES</span>
            </h1>

            {/* Group of Institutions (Hidden on Mobile) */}
            <div className="relative flex-col items-center text-center hidden md:inline mr-[-30px] max-md:hidden">
              <a 
                href="https://www.abesit.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-montserrat text-[#D1D5DB] font-extrabold text-[60px] [text-shadow:3px_3px_6px_rgba(0,0,0,0.9)] hover:text-white transition-colors duration-300"
              >
                ABESIT
              </a>
              
              <div className="relative flex items-center justify-center mt-[-20px]">
                <div className="w-5 h-[2px] bg-[#D1D5DB]"></div>
                
                <a 
                  href="https://www.abesit.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mx-2 font-montserrat text-[#D1D5DB] font-bold text-[13px] uppercase hover:text-white transition-colors duration-300"
                >
                  Group of Institutions
                </a>
                
                <div className="w-5 h-[2px] bg-[#D1D5DB]"></div>
              </div>
            </div>

          </div>

          {/* FLAGSHIP EVENT - Adjusted for Mobile */}
          <div className="flex items-center justify-center gap-x-4">
            <span className="font-inter text-2xl max-md:text-xs">★</span>
            <p className="font-inter text-xl font-bold uppercase tracking-widest md:text-base text-center max-md:text-xs text-[#3A3A3A]">
              Presents their FLAGSHIP EVENT
            </p>
            <span className="font-inter text-2xl max-md:text-xs">★</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NewspaperHeader;
