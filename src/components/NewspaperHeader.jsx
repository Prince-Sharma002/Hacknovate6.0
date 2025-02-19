import hacknovate from "../assets/hacknovate.png";

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
            className="flex items-center justify-center space-x-6 max-lg:hidden "
          >
            <div className="flex-1  border-y-2 border-slate-800"></div>
            <span className="font-serif font-bold hover:text-amber-500 text-xl">
              <a href="">About</a>
            </span>
            <span className="font-serif font-bold hover:text-amber-500 text-xl">
              <a href="">Events</a>
            </span>
            <span className="font-serif font-bold hover:text-amber-500 text-xl">
              <a href="">Team</a>
            </span>
            <span className="font-serif font-bold hover:text-amber-500 text-xl">
              <a href="">Mentor</a>
            </span>
            <span className="font-serif font-bold hover:text-amber-500 text-xl">
              <a href="">Contact Us</a>
            </span>

            <div className="flex-1 h-px bg-prophet-black border-y-2 border-slate-800"></div>
            <button className="border-2 text-center rounded-full font-bold font-serif p-1 ">
              {" "}
              Sponsor US{" "}
            </button>
          </div>
          <div className="m-0 max-lg:flex max-lg:justify-end hidden">
            <Navbar />
          </div>

          <div className="flex justify-between max-lg:justify-center items-center mb-0">
            <img
              src={hacknovate}
              alt=""
              height={100}
              width={120}
              className="relative left-28  max-lg:hidden"
            />
            <h1 className="text-2xl md:text-8xl font-serif font-black tracking-wide  ">
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                ABESIT{" "}
              </span>
              <span className="text-prophet-gold text-amber-400 tracking-wide max-lg:text-4xl ">
                T
              </span>
              <span className="text-prophet-black tracking-wide max-lg:text-4xl">
                IMES
              </span>
            </h1>
            <img
              src={hacknovate}
              alt=""
              height={100}
              width={120}
              className="relative right-28 max-lg:hidden"
            />
          </div>

          <div className="flex items-center justify-center space-x-4 mt-0">
            <span className=" text-2xl mb-1 pb-6 max-lg:text-xs">★</span>
            <p className="font-crimson text-xl font-serif uppercase tracking-widest pb-6 md:text-base text-center mb-1 max-lg:text-xs ">
              Presents their FLAGSHIP EVENT
            </p>
            <span className=" text-2xl mb-1 pb-6 max-lg:text-xs">★</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default NewspaperHeader;
