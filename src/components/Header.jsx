import React, { useEffect } from 'react';
import Timer from "./Timer";
import { FaDiscord } from "react-icons/fa";
import andSymbol from "../assets/and.png";
import Train from "../assets/Train.gif";
import devfolioLogo from "../assets/devfolio.png"; 




const Header = () => {

  useEffect(() => {
    // Load the Devfolio SDK script
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-4 py-8 lg:py-0 lg:mb-3 items-start ">
      {/* Left Column - Grey Box */}
      <div className="flex max-lg:relative justify-center md:justify-start max-lg:-top-8">
        <div className="w-[400px] md:w-[507px] h-[406px] rounded-[20px] flex flex-row justify-center items-center ">
               
          <img className='h-[98%]' src={Train} alt='train' />

               

        </div>
      </div>

      {/* Center Column - Event Description, APPLY NOW, Discord Button */}
      <div className="flex flex-col max-lg:relative max-lg:-top-10 text-center md:text-left space-y-8 max-lg:space-y-2 ">
        <p className="text-justify text-[#393939]  font-bold leading-relaxed text-[15.1px] font-inter">
        Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, is back with its highly anticipated 6th edition in 2025, bringing an enchanting twist with a Harry Potter-themed experience. Whether you're a wizard with code or a muggle with big ideas, this is your chance to showcase your skills, collaborate with brilliant minds, and create magical innovations.
        </p>
        {/* <p className='text-[14px] font-extrabold'> Step into the world of spells, potions, and technology, where creativity meets problem-solving. </p> */}
        {/* APPLY NOW Button */}
        <div className="flex justify-center my-6">
      {/* Custom styled button that matches your first design */}
              <div 
          class="apply-button" 
          data-hackathon-slug="hacknovate6" 
          data-button-theme="dark"
          style={{height:"100px" , width:"312px"}}
        ></div>
    </div>

        {/* Discord Button */}
          <a href="https://discord.com/invite/kaGJwHqW8t">
          <button className="w-full  md:w-[22.5rem] h-[8rem] rounded-[10px] border border-[#C39208] bg-[rgba(0,0,0,0.70)] flex justify-center items-center shadow-lg">
          <span
            className="flex justify-center items-center text-[#E9C872] font-inter text-[40px] font-extrabold uppercase "
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            <FaDiscord className=" mr-2 text-5xl" /> DISCORD
          </span>
        </button>
          </a>
      </div>

      {/* Right Column - Timer, DATE & TIME, and Structure of Competition */}
      <div className="flex flex-col max-lg:relative items-center space-y-8 max-lg:space-y-2 max-lg:-top-14 pr-4">
        {/* Countdown Timer */}
        <Timer targetDate={targetDate} />

        {/* Date & Time */}
        <div className="flex flex-row justify-center items-center gap-8 max-lg:gap-6 ">
          <div className="flex flex-col items-center max-lg:relative max-lg:-left-10">
            <h1 className="text-[40px] md:text-[42.8px] font-titan text-black">
              DATE
            </h1>
            <h2 className="text-[20px] md:text-[18px] max-lg:text-center font-extrabold text-[#3A3A3A] lg:text-[25px]">
               4th and 5th <br /> April, 2024
            </h2>
          </div>
          <div className="w-[40px] max-lg:w-20  md:w-[79.382px] max-lg:absolute">
            <img
              src={andSymbol}
              alt="and"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center max-lg:relative max-lg:left-12 ">
            <h1 className="text-[70px] text-center md:text-[42.8px] font-titan text-black max-lg:text-[40px] ">
              TIME
            </h1>
            <h2 className="text-[20px]  text-center max-lg:[36px] max-lg:text-center  md:text-[18px] font-extrabold text-[#3A3A3A] lg:text-[25px]">
             9:00 AM to <br />   12:30 PM IST
            </h2>
          </div>
        </div>

        {/* Structure of the Competition */}
        <div className="w-full md:w-[550px] font-inter lg:relative lg:right-10 lg:-top-3 lg:text-[15px] text-[#393939] font-['Times New Roman'] text-[15px]  font-bold leading-[17.39px] text-justify space-y-2  max-lg:relative max-lg:top-5 max-lg:mb-0 ">
          <h2 className="text-lg lg:text-[25px] font-bold max-lg:text-center max-lg:text-[24px] max-lg:mb-3 font-inter">
            Structure of the Competition:
          </h2>
          <p>
            First, all participants must register individually. Once registered,
            they can either create a team or join an existing one. After forming
            teams, participants will work on their project ideas and submit a
            detailed proposal along with a PPT. Based on these submissions, the
            best projects will be selected for the next phase—some teams will be
            invited for an offline hackathon, while others will be shortlisted
            for the online hackathon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
