import gringots from "../assets/team/gringots.png";
import gunabh from "../assets/team/gunabh.png";
import abhinav from "../assets/team/image.png";
import vidhi from "../assets/team/image2.png";
import techteam from "../assets/team/image3.png";
import pratyush from "../assets/team/pratyush.png";



import "../styles/team.css"; // Ensure this path is correct

const Team = () => {
  return (
    <div className="main-container">
      <div className="team-wrapper">
        <div className="container">
          <div className="left-container">
            <div className="title-container">
              <span className="title-highlight">O</span>
              <h1 className="title-text">ur Team</h1>
            </div>

            {/* Main Image Section */}
            <div className="image-section">
              <img src={abhinav} alt="Team Image" />
              <h4>
              The "Harry Potter, Neville Longbottom, and Ron Weasley" trio. The fearless leader (Harry), the unexpected hero (Neville), and the loyal strategist (Ron), guiding the team through every challenge like a Triwizard Tournament. Together, they make sure no stone (or golden egg) is left unturned.
              </h4>
            </div>

            {/* Sub Images */}
            
              <div className="sub-box2">
              <img src={gringots} alt="Tech & Design Sorceress" />
              <h4>Like the Gringotts wizards guarding the vaults, this powerhouse team ensures Hacknovate 6.0 is backed by the strongest alliances. With the negotiation skills of Fred & George Weasley, the strategy of Percy Weasley, and the charm of a well-cast Confundus Charm, they bring in the best sponsors and partnerships. Their magic keeps the event grand, ensuring every galleon counts!</h4>
</div>
<div className="final-section">
          
            </div>
          </div>

          <div className="right-container">
            <h4 className="intro-text">
            Just as Dumbledore’s Army stood united against the Dark Arts, our team of skilled wizards and witches—masters of logic, creativity, and innovation—have come together to weave magic with code. Together, we stand as the guardians of Hacknovate 6.0            </h4>
            <div className="image-section2">
              <img src={vidhi} alt="Minerva McGonagall and Molly Weasley" />
              <h4>The "Minerva McGonagall and Molly Weasley" duoThe powerhouse pair who keep the gears turning, ensuring everything runs as precisely as a Time-Turner schedule. They’re the backbone of the team, casting Impervius on chaos.</h4>
            </div>

           
          </div>
        </div>

        {/* Final Section */}
        <div className="final-section">
          <div className="final-box">
            <img src={pratyush} alt="Discord Team" />
            <h4>Like Remus Lupin guiding young wizards, he built the Hacknovate 6.0 Discord Realm, the backbone of our online hackathon. As the Master of the Floo Network, he ensures smooth communication, seamless collaboration, and an enchanting experience for all. His wizardry keeps our digital Hogwarts alive!</h4>
          </div>
          <div className="final-box2">
            <img src={techteam} alt="Technical Team" />
            <h4>Our Technical Team—a squad of five brilliant wizards—ensures every spell (or script) runs flawlessly! Led by the Dumbledore of Development, they craft magic behind the scenes. While Prince & Nikita weave spells of innovation, the rest of our tech sorcerers work as Marauders of Debugging, vanquishing bugs, Floo Network Engineers, keeping systems seamlessly connected, and Keepers of the Forbidden Code, guarding Hacknovate with security stronger than Gringotts! With enchanted code and spellbinding precision, they make Hacknovate truly magical!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
