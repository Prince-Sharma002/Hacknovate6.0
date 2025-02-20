
import abesit from "../assets/newAbes.webp";
import image from "../assets/image.png";

const About = () => {
  return (
    <div className="border-4 border-slate-800 w-full mb-8 p-4">
      {/* <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 p-2 h-auto md:h-36 border-4 border-red-600">
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-96 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
      </div> */}

      <div className="w-full flex flex-col">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-4">the college that Thrives </h1>
        <div className="grid grid-cols-2">
          <div className=" col-span-2 md:col-span-1">
            <img src={abesit} alt="abesit" /> 
          </div>
          <div className="col-span-2 md:col-span-1 w-full m-0 text-justify justify-last">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            < div>
                <p>
                  <span className="text-6xl font-bold">A</span>BES Institute of Technology (ABESIT), (AKTU College Code 290), a self-financed institute embarked on its mission in the field of Technical Education in the year 2007. It is situated on a prominent location at NE-3, Crossings Republik, Ghaziabad. It is approved by AICTE, New Delhi and affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Presently we have the following undergraduate programs in B. Tech. - CSE, IT, CSE (AI), CSE (Data Science), & CSE (IoT), B. Pharma and post graduate program in MCA. It's B.Tech. - CSE and IT are NBA accredited branches. Teaching learning atmosphere in the campus has shown its impact on overall performance.
                </p>
              </div>

              <div>
                  <p> of the students in Smart India Hackathon consistently with consolation prize in 2017, three runner-up Teams in 2018, one Team Winner each in 2019 and 2020, two Team winners in 2022 and three Team winners in 2023. ABESITs' Institutions Innovation Council (IIC), established under the direction and norms of Innovation Cell, Ministry of Education, Govt. of India, which is consistently performing well. In 2022, the Institute has set up an AI based Centre of Excellence in association with NVIDIA for students and faculty where they'll be provided exposure to industry standards with high-quality in a competitive and challenging environment. </p>
              </div>
            </div>
          </div>
        </div>

      </div>
     

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        <div>
          <h1 className="text-2xl md:text-4xl font-extrabold uppercase text-center mb-4">Hacknovate 6.0</h1>
          <p className="break-all md:text-justify"> Hacknovate 5.0 will gather brightest programmers, engineers, architects, designers, and business visionaries. Our goal is to create a space where the brightest minds may collaborate to develop the most creative solutions .</p>
        </div>
        <div className="w-full flex">
              <div className="flex">
                <p className=" break-all md:text-justify"> The Hybrid Mode of Hacknovate 5.0 will pave the way for passionate youngsters who can't join us in the offline mode. Hacknovate 5.0 aims to bring together the most brilliant programmers, engineers, architects, designers, and business visionaries for another extraordinary event. </p>
              </div>
        </div>
        
        <div className="md:text-justify">
            <div className="">
              <div>
                <p className=" break-all md:text-justify ">
                Our primary objective is to foster an environment where the sharpest minds collaborate to conceive the most innovative solutions.
                 </p>
                <hr className="h-1 bg-black border-none my-4" />
                <h3 className="text-4xl font-extrabold"> ABESIT PRESENTS HACKNOVATE 6.0!!!! </h3>
              </div>
            </div>
        
        </div>
          <div className="col-span-2 w-164 h-164 md:col-span-1 flex ">
            <img src={image} alt="abesit" /> 
          </div>

      </div>

      
    </div>
  );
};

export default About;
