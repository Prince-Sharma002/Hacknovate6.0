import React from 'react'
import macgonegal from "../assets/person/macgonegal.png";
import dumbeldor from "../assets/person/dumbeldor.png";
import hagrid from "../assets/person/hagrid.png";
import bio from "../assets/person/bio.png";
import mac from "../assets/person/mac.gif";
import hag from "../assets/person/hag.gif";
import dum from "../assets/person/dum.gif";
import sybill from "../assets/person/sybill.gif";

import "../styles/theme.css";

const Theme = () => {
  return (
    <div>
     <div className="min-h-screen text-white font-serif px-12">
        {/* Hero Section */}
        <div className="w-full px-4 py-12">
          <div className="max-w-6xl mx-auto flex justify-center text-center">
            <h1 className="themetitle  text-2xl md:text-5xl  font-bold mb-6 text-center border-b-8 border-black inline-block">
              Hacknovate 6.0: Unveils Its Magical Theme!
            </h1>
          </div>
        </div>


        {/* Web3 and Blockchain Section */}

        <section style={{borderRight:"30px"}} className="pr-8 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative right-[3.8rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={mac} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>


            {/* Text Content */}
            <div className="theme-text-dev flex-1 text-right">
            <h2 className="text-[3.4rem] font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
                WEB3 AND BLOCKCHAIN
            </h2>
            <p className="theme-text text-gray-300 leading-relaxed text-[1.4rem] tracking-wide">
                Step into a world where Blockchain is the Elder Wand, empowering users to own their data and reshape digital realms. At Hacknovate 6.0, visionary wizards and tech sorcerers will unite to craft decentralized spells—disrupting industries, revolutionizing systems, and forging the future with groundbreaking innovations.
            </p>
            </div>
        </div>
        </section>

        <section style={{borderRight:"30px"}} className=" pr-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          
                      {/* Text Content */}
          <div className="theme-text-dev flex-1 text-left">
            <h2 className="text-[3.4rem] font-bold mb-4 ml-12 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
            OPEN INNOVATION
            </h2>
            <p className="theme-text ml-12 text-gray-300 leading-relaxed text-[1.4rem] tracking-wide text-left">
            Just like Hogwarts’ Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it’s health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.            </p>
            </div>
          
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative left-[5.6rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={dum} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </section>

        <section style={{borderRight:"30px"}} className="pr-8 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative right-[3.8rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={hag} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>


            {/* Text Content */}
            <div className="theme-text-dev flex-1 text-right">
            <h2 className="text-[3.4rem] font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
            AR / VR
            </h2>
            <p className="theme-text text-gray-300 leading-relaxed text-[1.4rem] tracking-wide">
            Why just read about the Wizarding World when you can step right into it? With Augmented and Virtual Reality, create immersive experiences that blur the lines between fantasy and reality. From holographic spellcasting to interactive magical realms, let your imagination soar beyond the limits of the ordinary world!            </p>
            </div>
        </div>
        </section>

        <section style={{borderRight:"30px"}} className=" pr-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          
                      {/* Text Content */}
          <div className="theme-text-dev flex-1 text-left">
            <h2 className="text-[3.4rem] font-bold mb-4 ml-12 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
            HEALTHCARE AND WELLNESS
            </h2>
            <p className="theme-text ml-12 text-gray-300 leading-relaxed text-[1.4rem] tracking-wide text-left">
            Join us in promoting healthcare innovation and wellness! Gain brand visibility, network with industry leaders, and showcase cutting-edge solutions. Sponsorship benefits include speaking opportunities, exhibition space, branding, and community engagement. Partner with us to make a lasting impact on healthcare.            </p>
            </div>
          
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative left-[5.6rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={bio} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </section>

        <section style={{borderRight:"30px"}} className="pr-8 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative right-[3.8rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={macgonegal} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>


            {/* Text Content */}
            <div className="theme-text-dev flex-1 text-right">
            <h2 className="text-[3.4rem] font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
            AI/ Machine Learning
            </h2>
            <p className="theme-text text-gray-300 leading-relaxed text-[1.4rem] tracking-wide">
              Enter the Forbidden Section of knowledge, where Artificial Intelligence and Machine Learning wield the power to transform industries. From predictive magic to self-learning enchantments, this track is for those who dare to create intelligent, self-evolving spells—reshaping the future of automation, analytics, and decision-making!
            </p>
            </div>
        </div>
        </section>


        <section style={{borderRight:"30px"}} className=" pr-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
        <div className="mx-auto flex flex-col md:flex-row ">
          
                      {/* Text Content */}
          <div className="theme-text-dev flex-1 text-left">
            <h2 className="text-[3.4rem] font-bold mb-4 ml-12 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
            CYBERSECURITY
            </h2>
            <p className="theme-text ml-12 text-gray-300 leading-relaxed text-[1.4rem] tracking-wide text-left">
            Just like Hogwarts’ Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it’s health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.
           </p>
            </div>
          
          {/* Pentagon Logo */}
          <div className="w-32 h-32 md:w-[15rem] md:h-[15rem] relative left-[5.6rem] flex-shrink-0">
            <div className="absolute inset-0 flex">
              <div className="w-full h-full relative">
                {/* Pentagon shape with border using box-shadow */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                    boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
                  }}
                >
                  <img src={macgonegal} alt="Pentagon Logo" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>

        </div>
        </section>


      
      </div>
    </div>
  )
}

export default Theme