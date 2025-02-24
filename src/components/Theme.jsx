import React from 'react';
import macgonegal from "../assets/person/macgonegal.png";
import hagrid from "../assets/person/hagrid.png";
import bio from "../assets/person/bio.png";
import mac from "../assets/person/mac.gif";
import hag from "../assets/person/hag.gif";
import dum from "../assets/person/dum.gif";

import sybill from "../assets/person/sybill.gif";
import McGonagall from "../assets/person/McGonagall.gif";
import dumbelldor from "../assets/person/dumbelldor.gif";
import Snape from "../assets/person/Snape.gif";
import Hagrid from "../assets/person/Hagrid.gif";
import nurse from "../assets/person/nurse.gif";

import "../styles/theme.css";

const Theme = () => {
  const sections = [
    {
      title: "WEB3 AND BLOCKCHAIN",
      description: "Step into a world where Blockchain is the Elder Wand, empowering users to own their data and reshape digital realms. At Hacknovate 6.0, visionary wizards and tech sorcerers will unite to craft decentralized spells—disrupting industries, revolutionizing systems, and forging the future with groundbreaking innovations.",
      image: McGonagall,
      isRight: false
    },
    {
      title: "OPEN INNOVATION",
      description: "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
      image: dumbelldor,
      isRight: true
    },
    {
      title: "CYBERSECURITY",
      description: "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
      image: Hagrid,
      isRight: false
    },
    {
      title: "AI/ MACHINE LEARNING",
      description: "Enter the Forbidden Section of knowledge, where Artificial Intelligence and Machine Learning wield the power to transform industries. From predictive magic to self-learning enchantments, this track is for those who dare to create intelligent, self-evolving spells—reshaping the future of automation, analytics, and decision-making!",
      image: Snape,
      isRight: true
    },
    {
      title: "HEALTHCARE AND WELLNESS",
      description: "Join us in promoting healthcare innovation and wellness! Gain brand visibility, network with industry leaders, and showcase cutting-edge solutions. Sponsorship benefits include speaking opportunities, exhibition space, branding, and community engagement. Partner with us to make a lasting impact on healthcare.",
      image: nurse,
      isRight: false
    },
    {
      title: "AR / VR",
      description: "Why just read about the Wizarding World when you can step right into it? With Augmented and Virtual Reality, create immersive experiences that blur the lines between fantasy and reality. From holographic spellcasting to interactive magical realms, let your imagination soar beyond the limits of the ordinary world!",
      image: sybill,
      isRight: true
    }
  ];

  return (
    <div className='border-4 border-slate-800 border-t-0'>
      <div className="min-h-screen text-white font-serif px-4 md:px-12">
        {/* Hero Section */}
        <div className="w-full px-4 py-12">
          <div className="max-w-6xl mx-auto flex justify-center text-center">
            <h1 className="themetitle text-xl md:text-5xl font-bold mb-6 text-center border-b-8 border-black inline-block">
              Hacknovate 6.0: Unveils Its Magical Theme!
            </h1>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <section 
            key={index} 
            className={`relative w-full bg-black mb-4 border border-black ${
              section.isRight ? 'rounded-r-full rounded-t-full' : 'rounded-l-full rounded-t-full'
            } overflow-hidden`}
          >
            <div className="hidden md:block">
              <div className={`flex items-center ${section.isRight ? 'pl-8' : 'pr-16'}`}>
                {!section.isRight && (
                  <div className="w-[12rem] h-[12rem] relative right-[1.9rem] flex-shrink-0">
                    <div className="absolute inset-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      <div className="w-full h-full relative">
                        <div 
                          className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                            boxShadow: '0 0 0 4px white, 0 0 15px 5px rgba(255,255,255,0.3)'
                          }}
                        >
                          <img 
                            src={section.image} 
                            alt="Pentagon Logo" 
                            style={{ filter: "grayscale(100%)" }}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`theme-text-dev flex-1 ${section.isRight ? 'text-left' : 'text-right'}`}>
                  <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
                    <div className='text-yel'> {section.title} </div>
                  </h2>
                  <p className="text-gray-300 leading-relaxed tracking-wide">
                    {section.description}
                  </p>
                </div>

                {section.isRight && (
                  <div className="w-[12rem] h-[12rem] relative right-[-1.9rem] flex-shrink-0">
                    <div className="absolute inset-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      <div className="w-full h-full relative">
                        <div 
                          className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                            boxShadow: '0 0 0 4px white, 0 0 15px 5px rgba(255,255,255,0.3)'
                          }}
                        >
                          <img 
                            src={section.image} 
                            alt="Pentagon Logo" 
                            style={{ filter: "grayscale(100%)" }}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            
            <div className="md:hidden relative h-48">
              {/* Wrapper div for grayscale background */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${section.image})`,
                  filter: "grayscale(100%)" // Apply grayscale ONLY to background
                }}
              ></div>

              {/* Overlay and text container */}
              <div className="absolute inset-0 flex items-center justify-center" 
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h2 className="text-2xl font-bold text-center px-4">
                  <div className="text-yellow-500"
                   style={{ textShadow: "2px 2px 4px rgb(0, 0, 0)" }}
                  > 
                    {section.title} 
                  </div>
                </h2>
              </div>
            </div>



          </section>
        ))}
      </div>
    </div>
  );
};

export default Theme;










// import React from 'react'
// import macgonegal from "../assets/person/macgonegal.png";
// import hagrid from "../assets/person/hagrid.png";
// import bio from "../assets/person/bio.png";
// import mac from "../assets/person/mac.gif";
// import hag from "../assets/person/hag.gif";
// import dum from "../assets/person/dum.gif";
// import sybill from "../assets/person/sybill.gif";

// import McGonagall from "../assets/person/McGonagall.gif";
// import dumbelldor from "../assets/person/dumbelldor.gif";
// import Snape from "../assets/person/Snape.gif";
// import Hagrid from "../assets/person/Hagrid.gif";

// import "../styles/theme.css";

// const Theme = () => {
//   return (
//     <div className='border-4 border-slate-800 border-t-0 '>
//      <div className="min-h-screen text-white font-serif px-12">
//         {/* Hero Section */}
//         <div className="w-full px-4 py-12">
//           <div className="max-w-6xl mx-auto flex justify-center text-center">
//             <h1 className="themetitle  text-2xl md:text-5xl  font-bold mb-6 text-center border-b-8 border-black inline-block">
//               Hacknovate 6.0: Unveils Its Magical Theme!
//             </h1>
//           </div>
//         </div>


//         {/* Web3 and Blockchain Section */}

//         <section style={{borderRight:"30px"}} className="pr-16 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row">
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[3.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={McGonagall} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>


//             {/* Text Content */}
//             <div className="theme-text-dev flex-1 text-right">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//                 WEB3 AND BLOCKCHAIN
//             </h2>
//             <p className=" text-gray-300 leading-relaxed tracking-wide">
//                 Step into a world where Blockchain is the Elder Wand, empowering users to own their data and reshape digital realms. At Hacknovate 6.0, visionary wizards and tech sorcerers will unite to craft decentralized spells—disrupting industries, revolutionizing systems, and forging the future with groundbreaking innovations.
//             </p>
//             </div>
//         </div>
//         </section>


//         <section style={{borderRight:"30px"}} className=" pl-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row ">
          
//                       {/* Text Content */}
//           <div className="theme-text-dev flex-1 text-left">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//             OPEN INNOVATION
//             </h2>
//             <p className="text-gray-300 leading-relaxed tracking-wide">
//             Just like Hogwarts’ Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it’s health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.            </p>
//             </div>
          
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[-4.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={dumbelldor} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         </section>

//       {/* CYBERSECURITY */}
//         <section style={{borderRight:"30px"}} className="pr-16 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row">
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[3.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={Hagrid} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>


//             {/* Text Content */}
//             <div className="theme-text-dev flex-1 text-right">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//                 CYBERSECURITY
//             </h2>
//             <p className=" text-gray-300 leading-relaxed tracking-wide">
//             Just like Hogwarts’ Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it’s health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.            </p>
//             </div>
//         </div>
//         </section>

//       {/* AI/ Machine Learning */}
//         <section style={{borderRight:"30px"}} className=" pl-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row ">
          
//                       {/* Text Content */}
//           <div className="theme-text-dev flex-1 text-left">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//             AI/ Machine Learning
//             </h2>
//             <p className="text-gray-300 leading-relaxed tracking-wide">
//             Enter the Forbidden Section of knowledge, where Artificial Intelligence and Machine Learning wield the power to transform industries. From predictive magic to self-learning enchantments, this track is for those who dare to create intelligent, self-evolving spells—reshaping the future of automation, analytics, and decision-making!
//             </p>
//             </div>
          
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[-4.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={Snape} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         </section>

//       {/* HEALTHCARE AND WELLNESS */}
//         <section style={{borderRight:"30px"}} className="pr-16 w-full bg-black mb-4 border border-black rounded-l-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row">
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[3.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={mac} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>


//             {/* Text Content */}
//             <div className="theme-text-dev flex-1 text-right">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//             HEALTHCARE AND WELLNESS
//             </h2>
//             <p className=" text-gray-300 leading-relaxed tracking-wide">
//             Join us in promoting healthcare innovation and wellness! Gain brand visibility, network with industry leaders, and showcase cutting-edge solutions. Sponsorship benefits include speaking opportunities, exhibition space, branding, and community engagement. Partner with us to make a lasting impact on healthcare.            </p>
//             </div>
//         </div>
//         </section>

//         {/* AR / VR */}
//         <section style={{borderRight:"30px"}} className=" pl-8 w-full bg-black mb-4 border border-black rounded-r-full  rounded-t-full flex justify-between">
//         <div className="mx-auto flex flex-col md:flex-row ">
          
//                       {/* Text Content */}
//           <div className="theme-text-dev flex-1 text-left">
//             <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//             AR / VR
//             </h2>
//             <p className="text-gray-300 leading-relaxed tracking-wide">
//             Why just read about the Wizarding World when you can step right into it? With Augmented and Virtual Reality, create immersive experiences that blur the lines between fantasy and reality. From holographic spellcasting to interactive magical realms, let your imagination soar beyond the limits of the ordinary world!            </p>
//             </div>
          
//           {/* Pentagon Logo */}
//           <div className="w-14 h-14 md:w-[12rem] md:h-[12rem] relative right-[-4.4rem] flex-shrink-0">
//             <div className="absolute inset-0 flex">
//               <div className="w-full h-full relative">
//                 {/* Pentagon shape with border using box-shadow */}
//                 <div 
//                   className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                   style={{
//                     clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                     boxShadow: '0 0 0 4px white' // Adds a 4px white border effect
//                   }}
//                 >
//                   <img src={dum} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//         </section>

      
//       </div>
//     </div>
//   )
// }

// export default Theme


// import React from 'react';
// import macgonegal from "../assets/person/macgonegal.png";
// import hagrid from "../assets/person/hagrid.png";
// import bio from "../assets/person/bio.png";
// import mac from "../assets/person/mac.gif";
// import hag from "../assets/person/hag.gif";
// import dum from "../assets/person/dum.gif";
// import sybill from "../assets/person/sybill.gif";
// import McGonagall from "../assets/person/McGonagall.gif";
// import dumbelldor from "../assets/person/dumbelldor.gif";
// import Snape from "../assets/person/Snape.gif";
// import Hagrid from "../assets/person/Hagrid.gif";
// import "../styles/theme.css";

// const Theme = () => {
//   return (
//     <div className='border-4 border-slate-800 border-t-0'>
//       <div className="min-h-screen text-white font-serif px-4 md:px-12">
//         {/* Hero Section */}
//         <div className="w-full px-4 py-12">
//           <div className="max-w-6xl mx-auto flex justify-center text-center">
//             <h1 className="themetitle text-2xl md:text-5xl font-bold mb-6 text-center border-b-8 border-black inline-block">
//               Hacknovate 6.0: Unveils Its Magical Theme!
//             </h1>
//           </div>
//         </div>

//         {/* Left-aligned sections (Web3, Cybersecurity, Healthcare) */}
//         {[
//           {
//             title: "WEB3 AND BLOCKCHAIN",
//             description: "Step into a world where Blockchain is the Elder Wand, empowering users to own their data and reshape digital realms. At Hacknovate 6.0, visionary wizards and tech sorcerers will unite to craft decentralized spells—disrupting industries, revolutionizing systems, and forging the future with groundbreaking innovations.",
//             image: McGonagall
//           },
//           {
//             title: "CYBERSECURITY",
//             description: "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
//             image: sybill
//           },
//           {
//             title: "HEALTHCARE AND WELLNESS",
//             description: "Join us in promoting healthcare innovation and wellness! Gain brand visibility, network with industry leaders, and showcase cutting-edge solutions. Sponsorship benefits include speaking opportunities, exhibition space, branding, and community engagement. Partner with us to make a lasting impact on healthcare.",
//             image: mac
//           }
//         ].map((section, index) => (
//           <section key={index} className="relative w-full bg-black mb-4 border border-black rounded-l-full rounded-t-full overflow-hidden">
//             <div className="hidden md:block">
//               <div className="flex items-center pr-16">
//                 <div className="w-[12rem] h-[12rem] relative right-[1.9rem] flex-shrink-0">
//                   <div className="absolute inset-0">
//                     <div className="w-full h-full relative">
//                       <div 
//                         className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                         style={{
//                           clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                           boxShadow: '0 0 0 4px white'
//                         }}
//                       >
//                         <img src={section.image} alt="Pentagon Logo" style={{ filter: "grayscale(100%)" }}  className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="theme-text-dev flex-1 text-right">
//                   <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//                     {section.title}
//                   </h2>
//                   <p className="text-gray-300 leading-relaxed tracking-wide">
//                     {section.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="md:hidden relative h-48">
//               <div 
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${section.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <h2 className="text-2xl font-bold text-yellow-500 text-center px-4">
//                     {section.title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ))}

//         {/* Right-aligned sections (Open Innovation, AI/ML, AR/VR) */}
//         {[
//           {
//             title: "OPEN INNOVATION",
//             description: "Just like Hogwarts' Room of Requirement, Open Innovation is a space where limitless possibilities come to life! Whether it's health, sustainability, education, or automation, this track invites wizards of all fields to conjure up game-changing solutions, breaking conventional barriers and bringing innovation to the forefront of magic and technology.",
//             image: dumbelldor
//           },
//           {
//             title: "AI/ MACHINE LEARNING",
//             description: "Enter the Forbidden Section of knowledge, where Artificial Intelligence and Machine Learning wield the power to transform industries. From predictive magic to self-learning enchantments, this track is for those who dare to create intelligent, self-evolving spells—reshaping the future of automation, analytics, and decision-making!",
//             image: Snape
//           },
//           {
//             title: "AR / VR",
//             description: "Why just read about the Wizarding World when you can step right into it? With Augmented and Virtual Reality, create immersive experiences that blur the lines between fantasy and reality. From holographic spellcasting to interactive magical realms, let your imagination soar beyond the limits of the ordinary world!",
//             image: dum
//           }
//         ].map((section, index) => (
//           <section key={index} className="relative w-full bg-black mb-4 border border-black rounded-r-full rounded-t-full overflow-hidden">
//             <div className="hidden md:block">
//               <div className="flex items-center pl-8">
//                 <div className="theme-text-dev flex-1 text-left">
//                   <h2 className="text-[3rem] tracking-wide p-0 font-bold mb-4 text-yellow-500 font-sans inline-block border-b-4 border-gray-300">
//                     {section.title}
//                   </h2>
//                   <p className="text-gray-300 leading-relaxed tracking-wide">
//                     {section.description}
//                   </p>
//                 </div>
//                 <div className="w-[12rem] h-[12rem] relative right-[-3.4rem] flex-shrink-0">
//                   <div className="absolute inset-0">
//                     <div className="w-full h-full relative">
//                       <div 
//                         className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
//                         style={{
//                           clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//                           boxShadow: '0 0 0 4px white'
//                         }}
//                       >
//                         <img src={section.image} alt="Pentagon Logo" className="w-full h-full object-cover" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="md:hidden relative h-48">
//               <div 
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${section.image})` }}
//               >
//                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                   <h2 className="text-2xl font-bold text-yellow-500 text-center px-4">
//                     {section.title}
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Theme;