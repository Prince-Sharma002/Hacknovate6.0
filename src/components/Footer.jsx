import footerbg from "../assets/footerBg.png";

import abesitlogo from "../assets/abesitlogo.png";
import whatsapplogo from "../assets/whatsapplogo.png";
import instalogo from "../assets/instalogo.png";
import linkedinlogo from "../assets/linkedinlogo.png";
import discordlogo from "../assets/discordlogo.png";
import xxxlogo from "../assets/xxxlogo.png";
import linktreelogo from "../assets/linktreelogo.png";
import Map from "./Map";

const Footer = () => {
  return (
    <div
      className="w-full bg-cover bg-center relative px-8 py-10 text-white min-h-[560px] flex flex-col items-center"
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      {/* Logo and Title - Desktop Adjusted */}
      <div className="relative flex flex-col md:flex-row items-center w-full justify-between   right max-w-[1200px] mx-auto px-6 md:px-12 max-lg:top-10">
        {/* ABESIT Logo - Aligned Left on Desktop */}
        <img
          src={abesitlogo}
          alt="logo"
          className=" relative w-32 md:w-40 md:ml-0 lg:right-52 lg:top-6  max-lg:mb-5 "
        />

        {/* HACKNOVATE 6.0 - Centered on Desktop */}
        <h1 className=" relative text-3xl md:text-4xl text-amber-400 font-serif font-bold text-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2 lg:top-9 ">
          HACKNOVATE 6.0
        </h1>
      </div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row justify-center items-center text-center md:text-left w-full mt-8 md:mt-12 max-lg:top-12 lg:top-16">
        {/* Left Section - Social Links */}
        <div className=" relative w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center lg:right-24   ">
          <h2 className=" relative text-2xl font-bold mb-4 font-serif lg:text-4xl ">
            Find us at: 
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <img
              src={whatsapplogo}
              alt="WhatsApp"
              className=" relative  lg:w-16 lg:h-16  w-10 h-10"
            />
            <img
              src={instalogo}
              alt="Instagram"
              className="relative  lg:w-16 lg:h-16 w-10 h-10"
            />
            <img
              src={discordlogo}
              alt="Discord"
              className="relative  lg:w-16 lg:h-16 w-10 h-10"
            />
            <img
              src={linktreelogo}
              alt="Linktree"
              className=" relative  lg:w-16 lg:h-16 w-10 h-10"
            />
            <img
              src={linkedinlogo}
              alt="LinkedIn"
              className=" relative  lg:w-16 lg:h-16 w-10 h-10"
            />
            <img
              src={xxxlogo}
              alt="Other"
              className="relative  lg:w-16 lg:h-16 w-10 h-10"
            />
          </div>
        </div>

        {/* Center Section - Map */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center">
          <div className="w-90 h-58 bg-gray-700 flex items-center justify-center rounded-lg">
            <Map />
          </div>
          <p className="relative lg:text-center  mt-2 text-xl ">
            <span className="font-bold">Address:</span> ABESIT Campus Road, NE
            3, near Crossing Republic, Ghaziabad, Uttar Pradesh{" "}
            <span className="font-bold">201009</span>
          </p>
        </div>

        {/* Right Section - Contact Us */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <h2 className=" relative lg:text-4xl text-2xl font-bold mb-4">
            Contact Us!
          </h2>
          <div className="relative lg:text-xl">

          <p>Email: example@email.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Phone: +91 98765 43210</p>
          <p>Phone: +91 56789 01234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;