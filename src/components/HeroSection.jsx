import React from 'react';
import '../styles/HeroSection.css'; // Import your CSS file for styling
import '../styles/fonts.css'; // Import your CSS file for styling
import { TextAnimate } from "./magicui/text-animate.jsx";
import { TypingAnimation } from "./magicui/typing-animation";
import { FaDiscord } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import { GiSpeaker } from "react-icons/gi";
import { ShinyButton } from "./magicui/shiny-button";
import AutoPlayMusic from './AutoPlayMusic';
import hacknovate from "../assets/hacknovate.png";
import devfolio from "../assets/devfolio.png";

const HeroSection = () => {
  return (
    
    <div className="hero-section">
      <div className='absolute left-6 top-4 w-20 h-20'>
        <img src={hacknovate}/>
      </div>
      <a href="https://www.abesit.in/" className='z-20'>
        <div className='absolute right-8 top-8 text-white '>
          <h2 className='font-bold text-3xl text-white text-gray-400'>ABESIT</h2>
          <p className='text-xs text-white text-gray-300'>-Group of Institutions-</p>
        </div>
      </a>
      <div className="hero-content">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="font-extrabold text-5xl md:text-5xl lg:text-9xl relative"
          style={{
            fontFamily: "HarryP, sans-serif",
            letterSpacing: "8px",
            textShadow: "0 4px 10px rgba(0, 0, 0, 0.8)", // 3D shadow effect
          }}
        >
          {String("Hacknovate 6.0")}
        </TextAnimate>

        <p className="p-1 flex flex-row justify-center ">
          <TypingAnimation
            duration="100"
            className="text-base"
          >
            Launching Soon
          </TypingAnimation>
          <span className="animated-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>

        <div className='flex flex-col lg:flex-row justify-center gap-4 mt-10 px-24 text-xs md:text-4xl'>
          <a
            href="https://hacknovate6.devfolio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button"
          >
            <p
              style={{ textShadow: "0 4px 10px rgba(0, 0, 0, 0.8)" }}
              className='font-mono font-extrabold flex flex-row justify-items-center items-center justify-center gap-2'
            >
              <span className='flex justify-center items-center'> <img className='w-8 h-8' src={devfolio} alt='devfolio logo' />  Devfolio </span>
            </p>
          </a>

          <a
            href="https://bio.link/hacknovate"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-button"
          >
            <p
              style={{ textShadow: "0 4px 10px rgba(0, 0, 0, 0.8)" }}
              className='font-mono font-extrabold flex flex-row justify-items-center items-center justify-center gap-2'
            >
              <span className='flex justify-center items-center gap-1'> <TbBrandLinktree />  LinkTree </span>
            </p>
          </a>
        </div>
      </div>
      <AutoPlayMusic className="" />
    </div>
  );
};

export default HeroSection;