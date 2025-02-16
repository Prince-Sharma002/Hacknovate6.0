import React from 'react';
import '../styles/HeroSection.css'; // Import your CSS file for styling
import '../styles/fonts.css'; // Import your CSS file for styling
import { TextAnimate } from "./magicui/text-animate.jsx";
import { HyperText  } from "./magicui/hyper-text.jsx";
import { TypingAnimation } from "./magicui/typing-animation";
import { FaDiscord } from "react-icons/fa6";
import { TbBrandLinktree } from "react-icons/tb";
import { GiSpeaker } from "react-icons/gi";
import { ShinyButton } from "./magicui/shiny-button";


const HeroSection = () => {
  return (
    <div className="hero-section">
      <a href="https://www.abesit.in/" >
        <div className='absolute right-8 top-8 text-white'>
          <h2 className='font-bold text-3xl text-white'>ABESIT</h2>
          <p className='text-xs text-white'>-Group of Institute-</p>
        </div>
      </a>
      <div className="hero-content">

        <TextAnimate animation="blurInUp" by="character" once
          className="font-extrabold text-5xl md:text-5xl lg:text-9xl "
            style={{ fontFamily: 'HarryP, sans-serif'  , letterSpacing:"8px"}}
          >
            Hacknovate 6.0  
        </TextAnimate>
        <p className=" p-1">  

        <TypingAnimation 
        duration="100"
        
        className="text-base"> 
        Launching...
        </TypingAnimation>
        
        </p>
        {/* <p className="hero-text">
          Join us for the most magical hackathon of the year! Unleash your creativity, cast your code, and build something extraordinary.
        </p> */}
        <div className='flex flex-col lg:flex-row justify-center gap-2 mt-10 px-20'>

        <a
          href="https://discord.gg/your-discord-link"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button"
        >
          
          <p className='font-mono font-extrabold  flex flex-row justify-items-center items-center justify-center gap-2'>
            <FaDiscord /> 
            <span > Discord</span>
          </p>
        </a>
        
        <a
          href="https://discord.gg/your-discord-link"
          target="_blank"
          rel="noopener noreferrer"
          className="discord-button "
        >
          <p className='font-mono font-extrabold  flex flex-row justify-items-center items-center justify-center gap-2'>
            <TbBrandLinktree /> 
            <span > LinkTree</span>
          </p>
        </a>

        </div>

      </div>

        <HeroSection />

    </div>
  );
};

export default HeroSection;