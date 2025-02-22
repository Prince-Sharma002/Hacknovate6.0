import abesitgif from "../assets/abesit hp.gif";
import A from "../assets/A.svg";
import M from "../assets/M.svg";
import "../styles/about.css"


const About = () => {
  return (
    <div className="border-4 border-slate-800  w-full border-b-0 p-4 pb-4 mb-0">
      {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 p-2 h-auto md:h-36 border-4 border-red-600">
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-96 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
      </div> */}

      <div className="w-full flex flex-col">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-4">IS ABESIT THE HOGWARTS OF CODING?</h1>
        
        <div className="grid grid-cols-2">
          <div className=" col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full">
            <img  className="flex w-full h-full m-4" src={abesitgif} alt="abesit" /> 
            <p className="text-yellow-500 bg-black text-xl px-1"> ABESIT Campus Road, NE 3, near Crossing Republik, Ghaziabad, Uttar Pradesh 201009 </p>
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-full m-0 text-justify justify-last md:pl-12  ">
            <div className="grid grid-row-2 h-full">
                <div className="flex gap-8">
                  <img src={M} alt="m letter" />
                  <div> 
                    <p className="text-lg text-gray-800">
                    agic! At ABESIT, wands are replaced with keyboards, spells with code, and Hacknovate 6.0 is where young wizards of tech conjure, While it may not have flying broomsticks or moving staircases like  it certainly fosters a magical environment for aspiring coders.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-800">  Here, wands are replaced with keyboards, spells with code, and Hacknovate 6.0 is where young tech wizards conjure innovation, transforming from beginners into true coding masters.  So, if Hogwarts is the place where wizards hone their magic, ABESIT is where tech enthusiasts master the art of coding!</p>
                </div>
                <hr className="h-2 bg-black border-none my-4" />
                
                <div>
                  <h1 className="text-center text-7xl tracking-wide font-bold ">Potter’s Sequel</h1>
                  <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-lg text-gray-800">The wizarding world had its legendary battles, but the magic of Hacknovate 6.0 is just beginning! As Harry once stepped into Hogwarts to master spells, now coders step into ABESIT to master the art of innovation.</p>
                      </div>

                      <div>
                        <p className="text-lg text-gray-800">Hacknovate 6.0 is more than just a hackathon; it’s a test of bravery, skill, and teamwork. The coding cauldron is bubbling, and challengers will embark on a 24-hour journey where creativity, logic, and technology intertwine.</p>
                      </div>
                  </div>
                </div>
            
            </div>
          </div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-3">
            <div> 
              <img src={A} alt="a letter" />
              <p className="text-lg text-gray-800"> 
              estled amidst the world of innovation and learning, ABESIT stands as the Hogwarts of Coding—where magic isn't cast with wands but crafted with code.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800">
              Within these grand halls, students transform into digital wizards. Here, logic is the ultimate spell, creativity the strongest potion, and knowledge the true source of power. So grab your wand (keyboard) Step into this realm of endless possibilities, where the magic of technology thrives, and let the journey to begin! 
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800">
              Through sheer determination, teamwork, and an unbreakable spirit, these coding wizards will turn impossible problems into extraordinary solutions
              </p>
              <hr className="h-1 bg-black border-none my-4" />
              <h1 className="font-sans text-[2.294rem]" style={{fontWeight:"600"}} >Magic, Code and Achieve!!!!</h1>
              
            </div>
        </div>
        
        
          <div className="col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full gap-2">
            <img className="w-full" src={image} alt="abesit" /> 
            <p className="text-yellow-500 bg-black text-xl px-1"> 
            HACKNOVATE: THE FLAGSHIP EVENT OF ABESIT GHAZIABAD
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
  
  );
};

export default About;
