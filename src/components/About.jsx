
import image from "../assets/image.png";
import abesitgif from "../assets/abesit hp.gif";
import A from "../assets/A.svg";
import M from "../assets/M.svg";
import "../styles/about.css"


const About = () => {
  return (
    <div className="border-4 border-slate-800  w-full border-b-0 p-4 pb-4 mb-0 max-lg:m-0   max-lg:w-full">

      <div className="w-full flex flex-col">
        <h1 className="text-xl md:text-6xl font-extrabold uppercase text-center mb-2 border-b-4 md:border-none">IS ABESIT THE HOGWARTS OF CODING?</h1>
      

        <div className="grid md:grid-cols-2">
          <div className=" col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full">
            <img  className="flex md:w-full md:h-full m-4" src={abesitgif} alt="abesit" /> 
            <p className="text-yellow-500 bg-black text-xs md:text-[0.9rem]  w-full px-1"> ABESIT Campus Road, NE 3, near Crossing Republik, Ghaziabad, Uttar Pradesh 201009 </p>
          </div>
          <div className="col-span-2 md:col-span-1 w-full h-full m-0 text-justify justify-last md:pl-12  ">
            <div className="grid  md:grid-row-2 h-full">
                <div className="flex  md:w-full flex-col md:flex-row gap-8">
                  <img  className=" hidden md:inline" src={M} alt="m letter" />
                  <div> 
                    <p className="text-lg text-gray-800">
                      <span className="md:hidden">m</span>agic! At ABESIT, wands are replaced with keyboards, spells with code, and Hacknovate 6.0 is where young wizards of tech conjure, While it may not have flying broomsticks or moving staircases like  it certainly fosters a magical environment for aspiring coders.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-lg text-gray-800">  Here, wands are replaced with keyboards, spells with code, and Hacknovate 6.0 is where young tech wizards conjure innovation, transforming from beginners into true coding masters.  So, if Hogwarts is the place where wizards hone their magic, ABESIT is where tech enthusiasts master the art of coding!</p>
                </div>
                <hr className="h-2 bg-black border-none my-4" />
                
                <div>
                  <h1 className="text-center text-4xl md:text-7xl tracking-wide font-bold mb-2">Potter’s Sequel</h1>
                  <div className="grid md:grid-cols-2 md:gap-8">
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
     

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3">
            <div> 
              <img className=" hidden md:inline" src={A} alt="a letter" />
              <p className="text-lg text-gray-800 text-justify md:text-left"> 
                <span className="md:hidden">A</span>estled amidst the world of innovation and learning, ABESIT stands as the Hogwarts of Coding—where magic isn't cast with wands but crafted with code.
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800 text-justify md:text-left">
              Within these grand halls, students transform into digital wizards. Here, logic is the ultimate spell, creativity the strongest potion, and knowledge the true source of power. So grab your wand (keyboard) Step into this realm of endless possibilities, where the magic of technology thrives, and let the journey to begin! 
              </p>
            </div>
            <div>
              <p className="text-lg text-gray-800 text-justify md:text-left">
              Through sheer determination, teamwork, and an unbreakable spirit, these coding wizards will turn impossible problems into extraordinary solutions
              </p>
              <hr className="h-1 bg-black border-none my-4" />
              <h1 className="font-sans text-[2.294rem] text-center" style={{fontWeight:"600"}} >Magic, Code and Achieve!!!!</h1>
              
            </div>
        </div>
        
        
          <div className="md:pl-4 col-span-2 md:col-span-1 flex flex-col text-center align-center items-center text-golden-500 w-full md:gap-2">
            <img className="w-full" src={image} alt="abesit" /> 
            <p className="mt-4 md:mt-0 text-yellow-500 bg-black text-xs md:text-[0.9rem] w-full px-1"> 
            HACKNOVATE: THE FLAGSHIP EVENT OF ABESIT GHAZIABAD
            </p>

          </div>

      </div>

      
    </div>
  );
};

export default About;

