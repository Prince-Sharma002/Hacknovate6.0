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

            
            <div className="final-box-container">
  <div className="final-box">
    <div className="image-container">
      <img src={blank2} alt="Nikita" />
    </div>
    <h4>
      Meet our Hermione—the Tech & Design Sorceress of Hacknovate 6.0! As Tech Lead, Social Media Lead, and Design Contributor, she crafts an experience as flawless as Wingardium Leviosa, ensuring every detail is pure magic!
    </h4>
  </div>

  <div className="final-box">
    <img src={Prithvi} alt="prithvi and shreya" />
    <h4>
      The "Remus Lupin and Ginny Weasley" duo—Remus brings thoughtful, strategic designs as sharp as a werewolf’s instincts, while Ginny adds flair and precision, making everything as vibrant as a Quidditch match.
    </h4>
  </div>
</div>


          <div className="final-box-container">
  <div className="final-box">
    <img src={blank2} alt="Raunak" />
    <h4>Meet Skeeter—our Social Media Lead and the (way more ethical) Rita Skeeter of Hacknovate! With a Quick-Quotes Quill and a sharp strategy, he spreads the magic far and wide!</h4>
  </div>
  <div className="final-box">
    <img src={Prince} alt="Prince" />
    <h4>Every great hackathon needs a sharp mind with an edge, and *Malfoy* brings his signature mastery to the technical team of Hacknovate 6.0. With the cunning of a true strategist and the precision of a perfectly brewed potion, he ensures the tech runs flawlessly—because in his world, excellence isn’t a choice, it’s a legacy.</h4>
  </div>
</div>

          

            {/* Sub Images */}
            
              <div className="sub-box2">
              <img src={gringots} alt="Tech & Design Sorceress" />
              <h4>Like the Gringotts wizards guarding the vaults, this powerhouse team ensures Hacknovate 6.0 is backed by the strongest alliances. With the negotiation skills of Fred & George Weasley, the strategy of Percy Weasley, and the charm of a well-cast Confundus Charm, they bring in the best sponsors and partnerships. Their magic keeps the event grand, ensuring every galleon counts!</h4>
          </div>
          
          </div>

          <div className="right-container">
            <h4 className="intro-text">
            Just as Dumbledore’s Army stood united against the Dark Arts, our team of skilled wizards and witches—masters of logic, creativity, and innovation—have come together to weave magic with code. Together, we stand as the guardians of Hacknovate 6.0            </h4>
            
            <div className="image-section2">
              <img src={vidhi} alt="Vidhi Yogita" />
              <h4>The "Minerva McGonagall and Molly Weasley" duoThe powerhouse pair who keep the gears turning, ensuring everything runs as precisely as a Time-Turner schedule. They’re the backbone of the team, casting Impervius on chaos.</h4>
            </div>
            <div className="final-box">
            <img src={gunabh} alt="Raunak" />
            <h4>The "Luna Lovegood and Rubeus Hagrid" duoLuna brings the whimsical creativity, dreaming up ideas as unique as a Crumple-Horned Snorkack, while Hagrid adds heart and passion, crafting content as warm and magical as a Care of Magical Creatures lesson.</h4>
          
          </div>
          <div className="image-section2">
              <img src={parth} alt="Vani parth " />
              <h4>Bringing wisdom, creativity, and skill to Hacknovate 6.0, this trio ensures a flawless tech experience. *Lovegood* adds imagination and fresh ideas, making innovation feel effortless. *Weasley, with his cleverness and quick wit, keeps things running smoothly with sharp fixes and fun. **Tonks*, ever-adaptable, tackles challenges with rebellious brilliance. Together, they make tech feel like magic! </h4>
            </div>

          <div className="image-section2">
              <img src={blank2} alt="abhay abhishek " />
              <h4>Every legendary event needs master storytellers, and our Social Media Team ensures Hacknovate 6.0 isn't just an event—it’s an experience that echoes across the wizarding and Muggle worlds! As the Rita Skeeters (but way more ethical!), they wield their Quick-Quotes Quills to capture every spellbinding moment, ensuring no magic goes unnoticed. Like Lee Jordan, they bring electrifying commentary, making every update feel like the finals of the Triwizard Tournament. With the vision of Xenophilius Lovegood, they weave narratives that aren’t just informative but immersive, drawing everyone into the enchantment. From captivating posts to dynamic storytelling, they make sure Hacknovate isn’t just seen—it’s felt, remembered, and celebrated long after the final spell is cast! </h4>
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

        <div className="final-section">
          <div className="final-box">
            <img src={blank2} alt="Discord Team" />
            <h4>Like Remus Lupin guiding young wizards, he built the Hacknovate 6.0 Discord Realm, the backbone of our online hackathon. As the Master of the Floo Network, he ensures smooth communication, seamless collaboration, and an enchanting experience for all. His wizardry keeps our digital Hogwarts alive!</h4>
          </div>
          <div className="final-box2">
            <img src={blank2} alt="Tarun chetna" />
<h4>Like the unsung heroes of Hogwarts, this team ensures discipline and seamless coordination at Hacknovate 6.0. With the authority of Mad-Eye Moody, the leadership of Kingsley Shacklebolt, and the dedication of Bill Weasley, they keep the magic flowing without a hitch!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
