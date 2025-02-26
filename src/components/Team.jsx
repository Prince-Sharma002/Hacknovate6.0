import React from "react";
import redCircle from "../assets/team/pratyush.png"; 
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
              <img src={redCircle} alt="Team Image" />
              <h4>
                The "Harry Potter, Neville Longbottom, and Ron Weasley" trio. 
                The fearless leader (Harry), the unexpected hero (Neville), and the loyal strategist (Ron).
              </h4>
            </div>

            {/* Sub Images */}
            <div className="sub-container">
              <div className="sub-box">
                <img src={redCircle} alt="Tech & Design Sorceress" />
                <h4>Meet our Hermione—the Tech & Design Sorceress of Hacknovate 6.0!</h4>
              </div>
              <div className="sub-box">
                <img src={redCircle} alt="Social Media Lead" />
                <h4>Meet Skeeter—our Social Media Lead, spreading magic far and wide!</h4>
              </div>
            </div>
          </div>

          <div className="right-container">
            <h4 className="intro-text">
              Just as Dumbledore’s Army stood united, our team of skilled wizards and witches weave magic with code.
            </h4>
            <div className="image-section">
              <img src={redCircle} alt="Minerva McGonagall and Molly Weasley" />
              <h4>The powerhouse pair who keep the gears turning.</h4>
            </div>

            {/* Another section */}
            <div className="sub-container">
              <img src={redCircle} alt="Luna & Hagrid" />
              <h4>The "Luna Lovegood and Rubeus Hagrid" duo—one brings creativity, the other heart.</h4>
            </div>

            <div className="sub-container">
              <img src={redCircle} alt="Tech Team" />
              <h4>Bringing wisdom, creativity, and skill to Hacknovate 6.0.</h4>
            </div>
          </div>
        </div>

        {/* Final Section */}
        <div className="final-section">
          <div className="final-box">
            <img src={redCircle} alt="Discord Team" />
            <h4>The backbone of our online hackathon, ensuring smooth communication.</h4>
          </div>
          <div className="final-box">
            <img src={redCircle} alt="Technical Team" />
            <h4>Our Technical Team ensures every spell (or script) runs flawlessly!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
