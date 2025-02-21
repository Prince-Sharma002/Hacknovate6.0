import offline_prize_Bg1 from "../assets/offline_prize_Bg1.png";
import offline_prize_Bg2 from "../assets/offline_prize_Bg2.png";
import offline_prize_Bgcover1 from "../assets/offline_prize_Bgcover1.png";
import offline_prize_Bgcover2 from "../assets/offline_prize_Bgcover2.png";
import { FaAsterisk } from "react-icons/fa";

const Prizes = () => {
  return (
    <div className="border-4 border-slate-800 w-full mb-8  p-4 pt-0">
      {/* Title Section */}
      <div className="w-full m-2 h-16 flex justify-center items-center">
        <h1 className="text-5xl text-center font-bold font-serif">
          Goblet of Rewards: HACKNOVATE 6.0 PRIZES
        </h1>
      </div>

      {/* Prize Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Offline Prizes */}
        <div>
          <h1 className="font-extrabold font-serif text-4xl border-b-2 text-center pb-2">
            Offline Prizes
          </h1>
          <div className="flex flex-col md:flex-row justify-evenly items-center pt-4 gap-4">
            {/* Prize Box 1 with Background and Overlay */}
            <div
              className="relative w-60 h-60 bg-cover bg-center rounded-lg shadow-lg flex justify-center items-center"
              style={{ backgroundImage: `url(${offline_prize_Bg1})` }}
            >
              <img
                src={offline_prize_Bgcover1}
                alt="Prize 1"
                className="absolute w-54 h-54 object-contain"
              />
            </div>

            {/* Prize Box 2 with Background and Overlay */}
            <div
              className="relative w-60 h-60 bg-cover bg-center rounded-lg shadow-lg flex justify-center items-center"
              style={{ backgroundImage: `url(${offline_prize_Bg2})` }}
            >
              <img
                src={offline_prize_Bgcover2}
                alt="Prize 2"
                className="absolute w-54 h-54 object-contain"
              />
            </div>
          </div>
          <div className="bg-black text-amber-400 text-xl flex justify-center items-center  gap-4 mt-4  text-center">
            <FaAsterisk className="w-4 h-4" />
            <span> TOTAL OFFLINE PRIZE: 40,000</span>
          </div>
          <div className="flex  items-start mt-6">
            {/* Vertical Text "capabilities" */}
            <div className="flex flex-col justify-center items-center mr-4 mt-6 text-sm">
              <span className="text-white text-lg font-serif tracking-widest rotate-180 [writing-mode:vertical-rl]">
                capabilities
              </span>
            </div>

            {/* Large Styled "I" */}
            <div className="relative text-[146px] font-extrabold font-serif leading-none">
              <span className="relative left-1 z-10 text-black">I</span>
              <span className="absolute top-1 left-2 text-yellow-500 z-0">
                I
              </span>
            </div>

            {/* Text Content */}
            <p className="ml-6 text-gray-800 text-lg">
              ver the shadows of the Forbidden Forest, only the most brilliant
              digital sorcerers shall emerge victorious! The champion of the
              online realm shall claim a treasure of <strong>10,000</strong>{" "}
              Galleons, while the runner-up, proving their magical prowess,
              shall be rewarded with <strong>7,000</strong> Galleons. The
              virtual battleground is set—will you rise as a legend?
            </p>
          </div>
          <div>
            <div className="border-b-4 border-black mt-4">
              <h1 className="text-center text-6xl font-bold">
                Consolation Prizes
              </h1>
            </div>
            <div className="flex gap-2">
              <div className="bg-black w-[50%] h-[128px] mt-2"></div>
              <div className="bg-black w-[50%] h-[128px] mt-2"></div>
            </div>
            <div className="bg-black text-amber-400 text-xl flex justify-center items-center  gap-4 mt-2  text-center">
              <FaAsterisk className="w-4 h-4" />
              <span> TOTAL CONSOLATION PRIZE: 17,000</span>
            </div>
          </div>
        </div>

        <div className="  rounded-lg">
          {/* Three column newspaper layout */}
          <div className="grid grid-cols-3 gap-6 text-gray-800 text-lg font-serif">
            {/* First Column with Drop Cap */}
            <div>
              <div className="float-left mt-3 mr-2 mb-1">
                <div className="text-[146px] text-center font-extrabold font-serif relative">
                  <span className="relative top-8 left-16 z-10 text-black">
                    N
                  </span>
                  <span className="absolute top-7 left-[58px] text-yellow-500 z-0">
                    N
                  </span>
                </div>
              </div>
              <p className="text-justify tracking-[-0.07em ] mt-6 break-all">
                <br /> <br /> <br /> <br /> oble and most brilliant tech-wizards
                who dare to compete in the enchanted halls of Hacknovate 6.0
                shall lay their hands on the ultimate treasures!
              </p>
            </div>

            {/* Second Column */}
            <div>
              <p className="text-justify tracking-[-0.07em ]  break-all">
                The Forbidden Forest to the Great Hall (Offline), the champions
                claim their legendary grand prize of{" "}
                <span className="font-bold">31,000</span> Galleons. The valiant
                runners-up shall be rewarded with{" "}
                <span className="font-bold">21,000</span> Galleons and{" "}
                <span className="font-bold">11,000</span> Galleons,
                respectively. The Goblet of Hacknovate has been lit - do you
                have what it takes to seize the magic?
              </p>
            </div>

            {/* Third Column */}
            <div>
              <p className="text-justify tracking-[-0.07em ] break-all">
                But beware, for this journey is not for the faint-hearted!
                Participants must wield their coding wands with precision,
                conjure spells of logic, and battle through a maze of challenges
                designed to test their wit, skill, and endurance. The enchanted
                mentors shall guide those who seek wisdom. Only the finest tech
                sorcerers shall claim the Hall of Fame.
              </p>
            </div>
          </div>
          <div className="border-b-8 border-black ">
            <h1 className="text-6xl font-bold text-center">Online Prizes</h1>
          </div>
          <div className="flex gap-2">
            <div className="bg-black w-[50%] h-[128px] mt-2"></div>
            <div className="bg-black w-[50%] h-[128px] mt-2"></div>
          </div>
          <div className="bg-black text-amber-400 text-xl flex justify-center items-center  gap-4 mt-2  text-center">
            <FaAsterisk className="w-4 h-4" />
            <span> TOTAL ONLINE PRIZE: 15,000</span>
          </div>

          <div className="flex items-start">
            {/* "C" Graphic */}
            <div className="text-[120px] font-bold mr-4 relative float-left">
              <span className="text-black z-10 relative">C</span>
              <span className="text-yellow-500 absolute top-1 left-1 z-0">
                C
              </span>
            </div>

            {/* Text Content */}
            <div className="text-gray-800 overflow-hidden">
              {" "}
              {/* Added overflow-hidden */}
              <p className="mb-2 text-justify">
                {" "}
                {/* Added text-justify */}
                Valiant wizards-in-the-making shall not go unnoticed! Hacknovate
                6.0 recognizes and celebrates emerging talent with two special
                honors. The Best Beginner, proving their potential in the
                wizarding world of tech, and the Best Girls' Team, showcasing
                brilliance and resilience, shall each be rewarded with 5,000
                Galleons for their exceptional skill and perseverance. This is
                more than just a prize—it's a mark of true potential and future
                greatness. Magic favors the bold, and those who dare to step
                into the arena shall leave with more than just Galleons—they
                shall earn glory, recognition, and the spark to ignite even
                greater feats.
              </p>
             
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Prizes;
