
import abesit from "../assets/newAbes.webp";

const About = () => {
  return (
    <div className="border-4 border-slate-800 w-full h-screen">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 p-2 h-auto md:h-36 border-4 border-red-600">
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-96 h-32 border-4 border-gray-950"></div>
        <div className="w-full md:w-56 h-32 border-4 border-gray-950"></div>
      </div>
      <div className="w-full h-28 border-4 border-yellow-400 ">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-center mb-4">the college that Thrives </h1>
        <div className="grid grid-cols-2">
          <div className=" col-span-2 md:col-span-1">
            <img src={abesit} alt="abesit" /> 
          </div>
          <div className="col-span-2 md:col-span-1 w-full m-0">
            <p>ABES Institute of Technology (ABESIT), (AKTU College Code 290), a self-financed institute embarked on its mission in the field of Technical Education in the year 2007. It is situated on a prominent location at NE-3, Crossings Republik, Ghaziabad. It is approved by AICTE, New Delhi and affiliated to Dr. APJ Abdul Kalam Technical University, Lucknow, Uttar Pradesh. Presently we have the following undergraduate programs in B. Tech. - CSE, IT, CSE (AI), CSE (Data Science), & CSE (IoT), B. Pharma and post graduate program in MCA. It's B.Tech. - CSE and IT are NBA accredited branches.</p>
          </div>
        </div>

      </div>
      <div className="w-full "></div>
    </div>
  );
};

export default About;
