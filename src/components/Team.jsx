import React from 'react';
import gringots from "../assets/team/gringots.png";
import gunabh from "../assets/team/gunabh.png";
import abhinav from "../assets/team/image.png";
import vidhi from "../assets/team/image2.png";
import techteam from "../assets/team/image3.png";
import pratyush from "../assets/team/pratyush.png";
import prince from "../assets/team/prince.png";
import prithvi from "../assets/team/prithvi.png";
import raunak from "../assets/team/raunak.jpg";
import vani from "../assets/team/vani.png";
import ragini from "../assets/team/ragini.jpeg";
import social from "../assets/team/social.jpeg";
import reven from "../assets/team/raven.jpeg";
import design from "../assets/team/design.jpeg";
import { FaLinkedin } from "react-icons/fa";

import "../styles/team.css";

const Team = () => {
  return (
    <div className="main-container">
      <div className="team-border">
        <div className="team-container">
          <div className="left-side">
            <h1 className="text-[clamp(3rem,8vw,5rem)] lg:text-[128px] font-bold flex items-center justify-center lg:justify-start">
              <span className="relative inline-block text-black">
                O<span className="absolute left-1 text-yellow-500 z-0">O</span>
              </span>
              <span>ur Team</span>
            </h1>
            
            {/* Trio section */}
            <div className="team-card full-width">
              <div className="relative group">
                <img src={abhinav} alt="Team trio" className="team-image" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">Cordinators</span>
                    <span className="text-sm mt-2">Abhinav, Keshav, Sushant</span>
                    <div className="flex space-x-4 mt-3">
                      <a href="https://www.linkedin.com/in/abhinav-gupta-cs/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/keshav-bajaj-15b4181a8/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/sushant2021cs101/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>The "Harry Potter, Neville Longbottom, and Ron Weasley" trio. The fearless leader (Harry), the
                unexpected hero (Neville), and the loyal strategist (Ron), guiding the team through every
                challenge like a Triwizard Tournament. Together, they make sure no stone (or golden egg) is left unturned.</p>
              </div>
            </div>
            
            {/* Two columns section */}
            <div className="team-row">
              <div className="team-column">
                <div className="team-card">
                  <div className="relative group">
                    <img src={prince} alt="Hermione" className="team-image" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">Tech Lead</span>
                        <span className="text-sm mt-2">Prince </span>
                        <a href="https://www.linkedin.com/in/prince-sharma-047973253/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors mt-3">
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-description">
                    <p>
                    Every great hackathon needs a sharp mind with an edge, and *Malfoy* brings his signature mastery to the technical team of Hacknovate 6.0. With the cunning of a true strategist and the precision of a perfectly brewed potion, he ensures the tech runs flawlessly—because in his world, excellence isn't a choice, it's a legacy.
                    </p>
                  </div>
                </div>
                
                <div className="team-card">
                  <div className="relative group">
                    <img src={raunak} alt="Social Media Lead" className="team-image" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">Social Lead</span>
                        <span className="text-sm mt-2">Raunak</span>
                        <a href="https://www.linkedin.com/in/raunak-singh-2b747518a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors mt-3">
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-description">
                    <p>Meet Skeeter—our Social Media Lead and the (way more ethical) Rita Skeeter of
                    Hacknovate! With a Quick-Quotes Quill and a sharp strategy, he spreads the magic far and wide!</p>
                  </div>
                </div>
              </div>
              
              <div className="team-column">
                <div className="team-card">
                  <div className="relative group">
                    <img src={design} alt="Remus and Ginny" className="team-image" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold"> Design Leads</span>
                        <span className="text-sm mt-2"> Shreya & Prithvee </span>
                        <div className="flex space-x-4 mt-3">
                          <a href="https://www.linkedin.com/in/shreya-asthana-b9470a250/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                          </a>
                          <a href="https://www.linkedin.com/in/prithvee-ojha-0290b0267/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                            <FaLinkedin className="w-6 h-6" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-description">
                    <p>The "Remus Lupin and Ginny Weasley" duo Remus brings thoughtful, strategic designs as
                    sharp as a werewolf's instincts, while Ginny adds flair and precision, making everything as vibrant
                    as a Quidditch match.</p>
                  </div>
                </div>
                
                <div className="team-card md:h-[40rem]">
                  <div className="relative group">
                    <img src={pratyush} alt="Malfoy" className="team-image" />
                    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                      <div className="flex flex-col items-center">
                        <span className="text-xl font-bold">Discord</span>
                        <span className="text-sm mt-2">Pratyush</span>
                        <a href="https://www.linkedin.com/in/pratyush-mathur-35a1a2251/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors mt-3">
                          <FaLinkedin className="w-6 h-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="team-description md:h-[100%]">
                    <p>Like Remus Lupin guiding young wizards, he built the Hacknovate 6.0 Discord Realm, the backbone of our online hackathon. As the Master of the Floo Network, he ensures smooth communication, seamless collaboration, and an enchanting experience for all. His wizardry keeps our digital Hogwarts alive!</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gringotts section */}
            <div className="team-card full-width">
              <div className="relative group">
                <img src={gringots} alt="Gringots team" className="team-image" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">Sponsorship Team</span>
                 
                    <div className="flex space-x-4 mt-3">
                      {/* <a href="https://www.linkedin.com/in/sponsor-team1-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/sponsor-team2-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/sponsor-team3-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>Like the Gringotts wizards guarding the vaults, this powerhouse team ensures Hacknovate 6.0
                is backed by the strongest alliances. With the negotiation skills of Fred & George Weasley,
                the strategy of Percy Weasley, and the charm of a well-cast Confundus Charm, they bring in
                the best sponsors and partnerships. Their magic keeps the event grand, ensuring every
                galleon counts!</p>
              </div>
            </div>
          </div>
          
          <div className="right-side">
            <div className="team-description intro-text hidden md:inline">
              <p>Just as Dumbledore's Army stood united against the Dark Arts, our team of skilled wizards and
              witches—masters of logic, creativity, and innovation—have come together to weave magic with code.
              Together, we stand as the guardians of Hacknovate 6.0</p>
            </div>
            
            <div className="team-card">
              <div className="relative group">
                <img src={techteam} alt="Minerva and Molly" className="team-image" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">Tech Team</span>
                    <span className="text-sm mt-2">Vishal, Utkarsh, Pratham, Amit, Aayush</span>
                    <div className="flex space-x-4 mt-3">
                      <a href="https://www.linkedin.com/in/vishal-yadav-1a7604257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/utkarshcse26" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/prathamr85650" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/amit-verma-883150109/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/prathamr85650" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>
                Our Technical Team—a squad of five brilliant wizards—ensures every spell (or script) runs flawlessly! Led by the Dumbledore of Development, they craft magic behind the scenes. While Prince & Nikita weave spells of innovation, the rest of our tech sorcerers work as Marauders of Debugging, vanquishing bugs, Floo Network Engineers, keeping systems seamlessly connected, and Keepers of the Forbidden Code, guarding Hacknovate with security stronger than Gringotts! With enchanted code and spellbinding precision, they make Hacknovate truly magical!
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="relative group">
                <img src={vidhi} alt="Tech Team" className="team-image" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">Operations</span>
                    <span className="text-sm mt-2">Vidhi & Yogita</span>
                    <div className="flex space-x-4 mt-3">
                      <a href="https://www.linkedin.com/in/vidhi-rawat-8a795928b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/yogita-bisht-874464295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>The "Minerva McGonagall and Molly Weasley" duoThe powerhouse pair who keep the gears turning, ensuring everything runs as precisely as a Time-Turner schedule. They're the backbone of the team, casting Impervius on chaos.</p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="relative group">
                <img src={vani} alt="Social Media Team" className="team-image" />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                  <div className="flex flex-col items-center">
                    <span className="text-xl font-bold">Design Team</span>
                    <span className="text-sm mt-2">Shivangi, Parth, Vani</span>
                    <div className="flex space-x-4 mt-3">
                      <a href="https://www.linkedin.com/in/shivangi-singh-10a900242/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/parthtyagi-design/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/vani-gupta-952125253/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>
                Bringing wisdom, creativity, and skill to Hacknovate 6.0, this trio ensures a flawless tech experience. *Lovegood* adds imagination and fresh ideas, making innovation feel effortless. *Weasley, with his cleverness and quick wit, keeps things running smoothly with sharp fixes and fun. **Tonks*, ever-adaptable, tackles challenges with rebellious brilliance. Together, they make tech feel like magic!                 </p>
              </div>
            </div>

            <div className="team-card">
              <div className="image-duo relative">
                
                <div className="relative group inline-block w-full flex">
                  <img src={ragini} alt="Luna" className="team-image-half" /> 
                  <img src={gunabh} alt="Hagrid" className="team-image-half" />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                    <div className="flex  md:flex-col items-center">
                      <span className="text-xl font-bold">Creative Leads</span>
                      <span className="text-sm mt-2">Ragini & Gunabh</span>
                      <div className='flex gap-4'>
                      <a href="https://www.linkedin.com/in/ragini-pathak/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors mt-3">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      <a href="https://www.linkedin.com/in/gunabh-sharan-a65380257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors mt-3">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="team-description">
                <p>The "Luna Lovegood and Rubeus Hagrid" duo Luna brings the whimsical creativity, dreaming up
                ideas as unique as a Crumple-Horned Snorkack, while Hagrid adds heart and passion, crafting content as
                warm and magical as a Care of Magical Creatures lesson.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-row">
          <div className="team-card">
            <div className="relative group">
              <img src={social} alt="Creative Team" className="team-image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">Social Media Team</span>
                  <span className="text-sm mt-2">Abhishek, Abhay</span>
                  <div className="flex space-x-4 mt-3">
                    <a href="hhttps://www.linkedin.com/in/abhishek-kumar96960/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/social-team3-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-description">
              <p>
              Every legendary event needs master storytellers, and our Social Media Team ensures Hacknovate
                6.0 isn't just an event—it's an experience that echoes across the wizarding and Muggle worlds!
                As the Rita Skeeters (but way more ethical!), they wield their Quick-Quotes Quills to capture
                every spellbinding moment, ensuring no magic goes unnoticed. Like Lee Jordan, they bring
                electrifying commentary, making every update feel like the finals of the Triwizard Tournament.
                With the vision of Xenophilius Lovegood, they weave narratives that aren't just informative but
                immersive, drawing everyone into the enchantment. From captivating posts to dynamic
                storytelling, they make sure Hacknovate isn't just seen—it's felt, remembered, and celebrated
                long after the final spell is cast!
              </p>
            </div>
          </div>
          
          <div className="team-card">
            <div className="relative group">
              <img src={reven} alt="Coordination Team" className="team-image" />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold">Ravenclaw Creative Team</span>
                  <span className="text-sm mt-2">Zainab, Akshay, Lakshika, Aditi</span>
                  <div className="flex space-x-4 mt-3">
                    <a href="https://www.linkedin.com/in/zainab-asif-14221a253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/creative-team2-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/creative-team2-demo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/aditi-srivastava-723898281/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                      <FaLinkedin className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-description h-full">
              <p>
              Like Ravenclaw's brightest minds, this creative team blends wisdom and imagination to craft spellbinding content and enchanting designs. With the precision of McGonagall, the vision of Newt Scamander, and the flair of Tonks, they bring Hacknovate 6.0 to life with every stroke and story!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;