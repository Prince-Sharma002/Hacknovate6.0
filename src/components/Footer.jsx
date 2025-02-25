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
      className="footer w-full bg-cover bg-center relative px-8 py-10 text-white h-[560px] max-lg:p-0 max-lg:m-0 max-lg:w-full "
      style={{ backgroundImage: `url(${footerbg})` }}

    >
      <div className="absolute top-[140px] left-0 w-full   h-20 ">
        <div className="flex justify-center items-center">
          <div>
            <img
              src={abesitlogo}
              alt="logo"
              className="relative right-[470px]"
            />
          </div>
          <div>
            <h1 className="text-4xl text-amber-400  font-serif font-bold  right-20 relative">
              HACKNOVATE 6.0
            </h1>
          </div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative -top-56 z-10 flex flex-col md:flex-row justify-center  items-center text-center md:text-left">
        {/* Left Section - Useful Links (Just Text) */}
        <div className="w-1/3 mt-[450px] mr-20">
          <h2 className="text-2xl font-bold mb-4 font-serif pl-3">
            Useful Links
          </h2>
          <div className="space-y-0  text-lg pl-2 grid grid-cols-3">
            <img src={whatsapplogo} alt="" />
            <img src={instalogo} alt="" />
            <img src={discordlogo} alt="" />
            <img src={linktreelogo} alt="" />
            <img src={linkedinlogo} alt="" />
            <img src={xxxlogo} alt="" />
          </div>
        </div>

        {/* Center Section - Event Title & Map Placeholder */}
        <div className="w-1/3 relative left-10 ml-11 mt-[450px]">
          <div className="w-80 h-48 bg-gray-700 flex items-center justify-center rounded-lg">
            <p className="text-gray-300">
              <Map />
            </p>
          </div>
          <p className="mt-2 text-sm">
            <span className="font-bold">Address:</span> ABESIT Campus Road, NE
            3, near Crossing Republic, Ghaziabad, Uttar Pradesh{" "}
            <span className="font-bold">201009</span>
          </p>
        </div>

        {/* Right Section - Contact Us */}
        <div className="w-1/3 ml-[250px] mt-[450px]">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>Email: example@email.com</p>
          <p>Phone: +91 12345 67890</p>
          <p>Phone: +91 98765 43210</p>
          <p>Phone: +91 56789 01234</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
