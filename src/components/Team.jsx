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

import "../styles/team.css"; // Make sure to update this CSS file with the styles below


const Team = () => {
  return (
    <div className="main-container">
      <div className="team-border">
        <div className="team-container">
          <div className="left-side">
            <h1 className="team-heading">Our Team</h1>
            
            {/* Trio section */}
            <div className="team-card full-width">
              <img src={abhinav} alt="Team trio" className="team-image" />
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
                  <img src={prince} alt="Hermione" className="team-image" />
                  <div className="team-description">
                    <p>
                    Every great hackathon needs a sharp mind with an edge, and *Malfoy* brings his signature mastery to the technical team of Hacknovate 6.0. With the cunning of a true strategist and the precision of a perfectly brewed potion, he ensures the tech runs flawlessly—because in his world, excellence isn’t a choice, it’s a legacy.
                    </p>
                  </div>
                </div>
                
                <div className="team-card">
                  <img src={raunak} alt="Social Media Lead" className="team-image" />
                  <div className="team-description">
                    <p>Meet Skeeter—our Social Media Lead and the (way more ethical) Rita Skeeter of
                    Hacknovate! With a Quick-Quotes Quill and a sharp strategy, he spreads the magic far and wide!</p>
                  </div>
                </div>
              </div>
              
              <div className="team-column">
                <div className="team-card">
                  <img src={prithvi} alt="Remus and Ginny" className="team-image" />
                  <div className="team-description">
                    <p>The "Remus Lupin and Ginny Weasley" duo Remus brings thoughtful, strategic designs as
                    sharp as a werewolf's instincts, while Ginny adds flair and precision, making everything as vibrant
                    as a Quidditch match.</p>
                  </div>
                </div>
                
                <div className="team-card">
                  <img src={pratyush} alt="Malfoy" className="team-image" />
                  <div className="team-description">
                    <p>Like Remus Lupin guiding young wizards, he built the Hacknovate 6.0 Discord Realm, the backbone of our online hackathon. As the Master of the Floo Network, he ensures smooth communication, seamless collaboration, and an enchanting experience for all. His wizardry keeps our digital Hogwarts alive!</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gringotts section */}
            <div className="team-card full-width">
              <img src={gringots} alt="Gringots team" className="team-image" />
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
            <div className="team-description intro-text">
              <p>Just as Dumbledore's Army stood united against the Dark Arts, our team of skilled wizards and
              witches—masters of logic, creativity, and innovation—have come together to weave magic with code.
              Together, we stand as the guardians of Hacknovate 6.0</p>
            </div>
            
            <div className="team-card">
              <img src={techteam} alt="Minerva and Molly" className="team-image" />
              <div className="team-description">
                <p>
                Our Technical Team—a squad of five brilliant wizards—ensures every spell (or script) runs flawlessly! Led by the Dumbledore of Development, they craft magic behind the scenes. While Prince & Nikita weave spells of innovation, the rest of our tech sorcerers work as Marauders of Debugging, vanquishing bugs, Floo Network Engineers, keeping systems seamlessly connected, and Keepers of the Forbidden Code, guarding Hacknovate with security stronger than Gringotts! With enchanted code and spellbinding precision, they make Hacknovate truly magical!
                </p>
              </div>
            </div>
            
            <div className="team-card">
              <div className="image-duo">
                <img src="" alt="Luna" className="team-image-half" />
                <img src="" alt="Hagrid" className="team-image-half" />
              </div>
              <div className="team-description">
                <p>The "Luna Lovegood and Rubeus Hagrid" duo Luna brings the whimsical creativity, dreaming up
                ideas as unique as a Crumple-Horned Snorkack, while Hagrid adds heart and passion, crafting content as
                warm and magical as a Care of Magical Creatures lesson.</p>
              </div>
            </div>
            
            <div className="team-card">
              <img src={vidhi} alt="Tech Team" className="team-image" />
              <div className="team-description">
                <p>The "Minerva McGonagall and Molly Weasley" duoThe powerhouse pair who keep the gears turning, ensuring everything runs as precisely as a Time-Turner schedule. They’re the backbone of the team, casting Impervius on chaos.</p>
              </div>
            </div>
            
            <div className="team-card">
              <img src="" alt="Social Media Team" className="team-image" />
              <div className="team-description">
                <p>Every legendary event needs master storytellers, and our Social Media Team ensures Hacknovate
                6.0 isn't just an event—it's an experience that echoes across the wizarding and Muggle worlds!
                As the Rita Skeeters (but way more ethical!), they wield their Quick-Quotes Quills to capture
                every spellbinding moment, ensuring no magic goes unnoticed. Like Lee Jordan, they bring
                electrifying commentary, making every update feel like the finals of the Triwizard Tournament.
                With the vision of Xenophilius Lovegood, they weave narratives that aren't just informative but
                immersive, drawing everyone into the enchantment. From captivating posts to dynamic
                storytelling, they make sure Hacknovate isn't just seen—it's felt, remembered, and celebrated
                long after the final spell is cast!</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bottom-row">
          <div className="team-card">
            <img src="" alt="Creative Team" className="team-image" />
            <div className="team-description">
              <p>Like Ravenclaw's brightest minds, this creative team blends wisdom and imagination to craft
              spellbinding content and enchanting designs. With the precision of McGonagall, the vision of
              Newt Scamander, and the flair of Tonks, they bring Hacknovate 6.0 to life with every stroke and
              story!</p>
            </div>
          </div>
          
          <div className="team-card">
            <img src="" alt="Coordination Team" className="team-image" />
            <div className="team-description">
              <p>Like the unsung heroes of Hogwarts, this team ensures discipline and seamless coordination at
              Hacknovate 6.0. With the authority of Mad-Eye Moody, the leadership of Kingsley Shacklebolt, and
              the dedication of Bill Weasley, they keep the magic flowing without a hitch!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;