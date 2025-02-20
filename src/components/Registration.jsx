import React from "react";
import discord from "../assets/discord.png";
import { FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Registration = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-2 p-4">
      <div className="relative bg-black p-2 rounded-xl shadow-lg">
        <div className="border-2 border-amber-500 rounded-xl p-4 flex justify-center items-center">
          <p className="text-5xl text-amber-500 font-bold tracking-wide uppercase">
            REGISTER
          </p>
        </div>
      </div>

      <div className="pl-5 pr-5">
        <p className=" w-full h-full  flex justify-center  items-center text-wrap tracking-tighter text-[#3F3D3D] ">
          Hacknovate 6.0 brings the magic of Harry Potter to coding! Code like a
          wizard, innovate with spells of technology, and achieve greatness in
          this 24-hour hybrid hackathon at ABESIT
        </p>
      </div>
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="flex flex-col justify-center items-center text-gray-800">
            <FaDiscord className="text-6xl" />
            DISCORD
        </div>

        <div className="flex flex-col justify-center items-center text-gray-800">
            <SiLinktree className="text-6xl" />
            LINKTREE
        </div>
      </div>
      <div className="flex flex-between justify-center align-center items-center">
        <div className="grow">
          <h1 className="text-4xl"> DATE </h1>
          <div className="flex gap-2 text-xs">
            <h2 className="">5th April</h2>
            {/* <span>lily</span> */}
          </div>
          <div className="flex gap-2 text-xs">
            {/* <h2>9:00</h2> */}
            {/* <span>lily</span> */}
          </div>
        </div>

        <span className="text-8xl grow">&</span>

        <div className="grow">
          <h1 className="text-4xl"> Time </h1>
          <div className="flex gap-2 text-xs">
            <h2>9:00 PM</h2>
            {/* <span>lily</span> */}
          </div>
          <div className="flex gap-2 text-xs">
            {/* <h2>mother</h2>
            <span>lily</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
