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
              <img src={abhinav} alt="Student Cordinators" className="w-full h-auto" />
              <h4>The "Harry Potter, Neville Longbottom, and Ron Weasley" trio. The fearless leader (Harry), the unexpected hero (Neville), and the loyal strategist (Ron), guiding the team through every challenge like a Triwizard Tournament. Together, they make sure no stone (or golden egg) is left unturned..</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={blank2} alt="Nikita tech lead" className="w-full h-auto" />
                <h4>Meet our Hermione—the Tech & Design Sorceress of Hacknovate 6.0! As Tech Lead, Social Media Lead, and Design Contributor, she crafts an experience as flawless as Wingardium Leviosa, ensuring every detail is pure magic!.</h4>
              </div>
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={Prithvi} alt="design leads " className="w-full h-[300px] object-cover" />
                <h4>The "Remus Lupin and Ginny Weasley" duoRemus brings thoughtful, strategic designs as sharp as a werewolf’s instincts, while Ginny adds flair and precision, making everything as vibrant as a Quidditch match.</h4>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={blank2} alt="Nikita tech lead" className="w-full h-auto" />
                <h4>Meet our Hermione—the Tech & Design Sorceress of Hacknovate 6.0! As Tech Lead, Social Media Lead, and Design Contributor, she crafts an experience as flawless as Wingardium Leviosa, ensuring every detail is pure magic!.</h4>
              </div>
              <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
                <img src={Prithvi} alt="design leads " className="w-full h-[300px] object-cover" />
                <h4>The "Remus Lupin and Ginny Weasley" duoRemus brings thoughtful, strategic designs as sharp as a werewolf’s instincts, while Ginny adds flair and precision, making everything as vibrant as a Quidditch match.</h4>
              </div>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={parth} alt="Tech & Design Sorceress" className="w-full h-auto" />
              <h4 className="text-justify leading-6">Bringing wisdom, creativity, and skill to Hacknovate 6.0, this trio ensures a flawless tech experience. *Lovegood* adds imagination and fresh ideas, making innovation feel effortless. *Weasley, with his cleverness and quick wit, keeps things running smoothly with sharp fixes and fun. **Tonks*, ever-adaptable, tackles challenges with rebellious brilliance. Together, they make tech feel like magic! .</h4>
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-center text-gray-700 font-bold">
            Just as Dumbledore’s Army stood united against the Dark Arts, our team of skilled wizards and witches—masters of logic, creativity, and innovation—have come together to weave magic with code. Together, we stand as the guardians of Hacknovate 6.0
            </h4>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={techteam} alt="technical Team" className="w-full h-auto" />
              <h4 className="text-justify leading-6">Our Technical Team—a squad of five brilliant wizards—ensures every spell (or script) runs flawlessly! Led by the Dumbledore of Development, they craft magic behind the scenes. While Prince & Nikita weave spells of innovation, the rest of our tech sorcerers work as Marauders of Debugging, vanquishing bugs, Floo Network Engineers, keeping systems seamlessly connected, and Keepers of the Forbidden Code, guarding Hacknovate with security stronger than Gringotts! With enchanted code and spellbinding precision, they make Hacknovate truly magical!</h4>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={Prince} alt="Tech Lead" className="w-full h-auto" />
              <h4>Every great hackathon needs a sharp mind with an edge, and *Malfoy* brings his signature mastery to the technical team of Hacknovate 6.0. With the cunning of a true strategist and the precision of a perfectly brewed potion, he ensures the tech runs flawlessly—because in his world, excellence isn’t a choice, it’s a legacy...</h4>
            </div>
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={pratyush} alt="Discord Admin" className="w-full h-auto" />
              <h4>Like Remus Lupin guiding young wizards, he built the Hacknovate 6.0 Discord Realm, the backbone of our online hackathon. As the Master of the Floo Network, he ensures smooth communication, seamless collaboration, and an enchanting experience for all. His wizardry keeps our digital Hogwarts alive!</h4>
            </div>
            
            <div className="w-full text-center text-gray-700 font-bold">
              <img src={gunabh} alt="Content Lead" className="w-full h-auto" />
              <h4>The "Luna Lovegood and Rubeus Hagrid" duoLuna brings the whimsical creativity, dreaming up ideas as unique as a Crumple-Horned Snorkack, while Hagrid adds heart and passion, crafting content as warm and magical as a Care of Magical Creatures lesson...</h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={vidhi} alt="Operations Team" className="w-full h-auto" />
            <h4>The "Minerva McGonagall and Molly Weasley" duoThe powerhouse pair who keep the gears turning, ensuring everything runs as precisely as a Time-Turner schedule. They’re the backbone of the team, casting Impervius on chaos.</h4>
          </div>
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={gringots} alt="Content Team" className="w-full h-auto" />
            <h4>Like the Gringotts wizards guarding the vaults, this powerhouse team ensures Hacknovate 6.0 is backed by the strongest alliances. With the negotiation skills of Fred & George Weasley, the strategy of Percy Weasley, and the charm of a well-cast Confundus Charm, they bring in the best sponsors and partnerships. Their magic keeps the event grand, ensuring every galleon counts!..</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={vidhi} alt="voluteer Team" className="w-full h-auto" />
            <h4>LLike Ravenclaw’s brightest minds, this creative team blends wisdom and imagination to craft spellbinding content and enchanting designs. With the precision of McGonagall, the vision of Newt Scamander, and the flair of Tonks, they bring Hacknovate 6.0 to life with every stroke and story!.</h4>
          </div>
          <div className="w-full md:w-1/2 text-center text-gray-700 font-bold">
            <img src={gringots} alt="volunteer Team" className="w-full h-auto" />
            <h4>Like the unsung heroes of Hogwarts, this team ensures discipline and seamless coordination at Hacknovate 6.0. With the authority of Mad-Eye Moody, the leadership of Kingsley Shacklebolt, and the dedication of Bill Weasley, they keep the magic flowing without a hitch!.</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;