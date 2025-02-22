import abesitgif from "../assets/abesit hp.gif";
import "../styles/about.css";
import wand from "../assets/wand.png";

const About = () => {
  return (
    <div className="border-4 border-slate-800 w-full border-b-0 p-6">
      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-6">
        IS ABESIT THE HOGWARTS OF CODING?
      </h1>

      {/* Image Section with Wand */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <div className="relative w-full">
          <img className="w-full " src={abesitgif} alt="ABESIT" />
          <img
            className="absolute -top-40 -left-16 transform -rotate-12 w-[350px]"
            src={wand}
            alt="Magic Wand"
          />
          <div className="bg-black text-yellow-600 font-bold text-center p-1 mt-2">
            ABESIT Campus Road, NE 3, near Crossing Republik, Ghaziabad, Uttar
            Pradesh 201009
          </div>
        </div>

        {/* Right-Side Magic Text */}
        <div className="relative">
          <div className="text-[120px] font-bold leading-[90px] float-left mr-3 relative">
            <span className="text-black relative z-10">M</span>
            <span className="text-yellow-500 absolute top-1 left-1 z-0">M</span>
          </div>
          <p className="text-gray-900 text-justify font-serif text-lg">
            agic! At ABESIT, wands are replaced with keyboards, spells with
            code, and Hacknovate 6.0 is where young wizards of tech conjure.
            While it may not have flying broomsticks or moving staircases, it
            certainly fosters a magical environment for aspiring coders. So, if
            Hogwarts is the place where wizards hone their magic, ABESIT is
            where tech enthusiasts master the art of coding!
          </p>
          <div className="border-t-4 border-black my-4"></div>
          <h1 className="text-center text-5xl font-bold font-serif">
            Potter's Sequel
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <p className="text-lg text-justify font-serif">
                The wizarding world had its legendary battles, but the magic of
                Hacknovate 6.0 is just beginning! As Harry once stepped into
                Hogwarts to master spells, now coders step into ABESIT to master
                the art of innovation.
              </p>
            </div>
            <div>
              <p className="text-lg text-justify font-serif">
                Hacknovate 6.0 is more than just a hackathon; it’s a test of
                bravery, skill, and teamwork. The coding cauldron is bubbling,
                and challengers will embark on a 24-hour journey where
                creativity, logic, and technology intertwine.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid - Two Main Sections */}
      <div className="grid md:grid-cols-2 gap-0 mt-1 items-start w-full">
        {/* First 3 Columns Grouped in One Section (50% width) */}
        <div className="grid grid-cols-3 gap-px w-full">
          {/* Column 1: "A" Graphic + Text */}
          <div className="relative flex flex-col w-full">
            <div className="relative flex items-start">
              <div className="text-[90px] font-bold leading-[90px] relative">
                <span className="text-black relative z-10 left-[48px]">A</span>
                <span className="text-yellow-500 absolute top-1 left-[45px] z-0">
                  A
                </span>
              </div>
            </div>
            <p className="text-gray-900 text-justify font-serif text-lg leading-5">
              estled amidst the world <br />
              of innovation and <br />
              learning, ABESIT stands <br />
              as the Hogwarts of <br />
              Coding—where magic <br />
              isn’t cast with wands <br />
              but crafted with code.
            </p>
          </div>

          {/* Column 2: Description */}
          <div className="flex flex-col w-full">
            <p className="text-gray-900 text-justify font-serif text-lg leading-5">
              Within these grand halls, <br />
              students transform into <br />
              digital wizards. Here, <br />
              logic is the ultimate <br />
              spell, creativity the <br />
              strongest potion, <br />
              and knowledge the true <br />
              source of power. So grab <br />
              your wand (keyboard) <br />
              and step into this realm of <br />
              endless possibilities, <br />
              where the magic <br />
              of technology thrives, <br />
            </p>
          </div>

          {/* Column 3: Innovation & Teamwork */}
          <div className="flex flex-col w-full">
            <p className="text-gray-900 text-justify font-serif text-lg leading-5">
              Through sheer <br />
              determination, teamwork, <br />
              and an unbreakable spirit, <br />
              these coding wizards will <br />
              turn impossible problems <br />
              into extraordinary solutions.
            </p>

            <h2 className="text-4xl mt-2  border-t-4 border-black font-bold font-serif  leading-tight">
              Magic, <br />
              Code and <br />
              Achieve!!!!
            </h2>
          </div>
        </div>

        {/* Fourth Column Alone (50% width) */}
        <div className="w-full flex flex-col">
          <div className="text-red-700 font-bold text-lg text-center">
            Echoes of Hacknovate 5.0 – Reliving the Magic!
          </div>
          <div className="w-full h-48 bg-gray-100 border border-gray-300"></div>
          <div className="bg-black text-yellow-500 text-center font-bold p-2 mt-3 text-">
            HACKNOVATE: THE FLAGSHIP EVENT OF ABESIT GHAZIABAD
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
