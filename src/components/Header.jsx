import Timer from "./Timer";
import { FaDiscord } from "react-icons/fa";
import andSymbol from "../assets/and.png";
import devfolioLogo from "../assets/devfolio.png"; 



const Header = () => {
  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 lg:px-4 py-8 lg:py-0 lg:mb-3 items-start ">
      {/* Left Column - Grey Box */}
      <div className="flex max-lg:relative justify-center md:justify-start max-lg:-top-8">
        <div className="w-[400px] md:w-[507px] h-[406px] rounded-[20px] flex flex-row justify-center items-center p-4">
               {/* <div className="flex gap-12 ">
                  <div className="w-32 bg-gray-600"> </div>
                  <div> 
                    <h1 className="text-8xl text-left">ABC</h1>
                    <h1>PRESENTS</h1>
                   </div>
               </div> */}

                <div>
                  <h1 className="  md:text-[6rem] font-extrabold "> 
                  <span className=" font-hacknovate tracking-widest"> HACK </span> 
                </h1>
                <h1 className=" md:text-[6rem] font-extrabold"> 
                  <span className=" font-hacknovate tracking-widest"> NO </span> 
                </h1>
                <h1 className=" md:text-[6rem] font-extrabold"> 
                  <span className=" font-hacknovate tracking-widest"> VATE </span> 
                </h1>
                </div>
                
                <div>
                  <h1 className="text-[10rem]  font-hacknovate"> 6.0 </h1>
                </div>

               {/* <div className="grid grid-cols-2">
                  <div> 
                      <h1>XYZ</h1>
                      <h1>Powered By-</h1>
                  </div>
                  <div>
                  <div> 
                      <h1>ABESIT</h1>
                      <h1>Organized by</h1>
                  </div>
                  </div>
               </div> */}

        </div>
      </div>

      {/* Center Column - Event Description, APPLY NOW, Discord Button */}
      <div className="flex flex-col max-lg:relative max-lg:-top-10 text-center md:text-left space-y-8 max-lg:space-y-4 ">
        <p className="text-justify text-[#393939]  font-bold leading-relaxed text-[15.1px] font-inter">
          Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns
          in 2025 with its 6th edition, themed around Harry Potter. Get ready to
          hack the world.
        </p>

        {/* APPLY NOW Button */}
        <button
          className="bg-[#27333F] p-2 rounded-xl shadow-lg active:scale-95 transition-transform duration-150"
          onClick={() => window.open("https://hacknovate6.devfolio.co", "_blank")}
        >
          <div className=" rounded-xl px-6 py-3 flex justify-center items-center gap-2">
            {/* Devfolio Logo */}
            <img src={devfolioLogo} alt="Devfolio" className="h-10 md:h-16" />
            
            {/* Apply Now Text */}
            <p className="text-3xl lg:text-[2.5rem]  md:text-5xl text-white font-bold tracking-wide uppercase lg:h-[4rem] lg:flex lg:items-center lg:justify-center font-roboto ">
              APPLY NOW
            </p>
          </div>
        </button>


        {/* Discord Button */}
        <button className="w-full md:w-[22.5rem] h-[8rem] rounded-[10px] border border-[#C39208] bg-[rgba(0,0,0,0.70)] flex justify-center items-center shadow-lg">
          <span
            className="flex justify-center items-center text-[#E9C872] font-inter text-[40px] font-extrabold uppercase "
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "#000",
            }}
          >
            <FaDiscord className=" mr-2 text-5xl " /> DISCORD
          </span>
        </button>
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
              9:00 AM to <br /> 12:30 PM IST
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
