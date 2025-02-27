import gringots from "../assets/team/gringots.png";
import gunabh from "../assets/team/gunabh.png";
import abhinav from "../assets/team/image.png";
import vidhi from "../assets/team/image2.png";
import techteam from "../assets/team/image3.png";
import parth from "../assets/team/image4.png";
import pratyush from "../assets/team/pratyush.png";
import Prince from "../assets/team/princy.png";
import Prithvi from "../assets/team/prithvi.png";
import blank from "../assets/team/blank.png";
import blank2 from "../assets/team/blank2.png";

const Team = () => {
  return (
    <div className="bg-cover bg-center flex flex-col items-center justify-center p-5" style={{ backgroundImage: "url('../assets/team/background.jpeg')" }}>
      <div className="border-4 border-black p-8 max-w-5xl bg-white bg-opacity-90">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="flex items-center font-serif font-bold">
              <span className="text-yellow-400 text-8xl">O</span>
              <h1 className="text-black text-6xl">ur Team</h1>
            </div>
            <div className="w-full text-center text-gray-700 text-lg font-bold mb-4">
              <img src={abhinav} alt="Team Image" className="w-full h-auto" />
              <h4>"Harry Potter, Neville Longbottom, and Ron Weasley" trio...</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={blank2} alt="Nikita" className="w-full h-auto" />
                <h4>Meet our Hermione—the Tech & Design Sorceress...</h4>
              </div>
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={Prithvi} alt="prithvi and shreya" className="w-full h-[300px] object-cover" />
                <h4>"Remus Lupin and Ginny Weasley" duo...</h4>
              </div>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={parth} alt="Tech & Design Sorceress" className="w-full h-auto" />
              <h4 className="text-justify leading-6">Bringing wisdom, creativity, and skill...</h4>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-center text-gray-700 font-bold">
              Just as Dumbledore’s Army stood united against the Dark Arts...
            </h4>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={techteam} alt="techteam" className="w-full h-auto" />
              <h4 className="text-justify leading-6">Our Technical Team—a squad of five brilliant wizards...</h4>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={Prince} alt="Raunak" className="w-full h-auto" />
              <h4>Every great hackathon needs a sharp mind with an edge...</h4>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={gunabh} alt="Vani parth" className="w-full h-auto" />
              <h4>Bringing wisdom, creativity, and skill...</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={vidhi} alt="Discord Team" className="w-full h-auto" />
            <h4>The "Minerva McGonagall and Molly Weasley" duo...</h4>
          </div>
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={gringots} alt="Technical Team" className="w-full h-auto" />
            <h4>Like the Gringotts wizards guarding the vaults...</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={vidhi} alt="Discord Team" className="w-full h-auto" />
            <h4>Like Ravenclaw’s brightest minds...</h4>
          </div>
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={gringots} alt="Technical Team" className="w-full h-auto" />
            <h4>Like the unsung heroes of Hogwarts...</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;