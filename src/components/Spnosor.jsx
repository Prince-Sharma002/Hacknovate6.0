// import React from "react";
// import Timer from "./Timer";

// const Sponsor = () => {
//   const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pt-0">
//       <div className="bg-gray-300 w-full"></div>
//       <div className="flex  items-center pl-4 ">
//         <p className=" justify-start text-xl text-wrap tracking-tighter text-[#3F3D3D] font-serif ">
//           Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns
//           in 2025 with its 6th edition, themed around Harry Potter. Get ready to
//           hack the world.
//         </p>
//       </div>
//       <div className="flex justify-center items-center">
//         <Timer targetDate={targetDate} />
//       </div>
//     </div>
//   );
// };

// export default Sponsor;

// import React from "react";
// import Timer from "./Timer";
// import { FaDiscord } from "react-icons/fa";

// const Sponsor = () => {
//   const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-1 pb-2 pt-1">
//   {/* Grey Box (Fixed Size) */}
//   <div className="bg-gray-300 w-[250px] h-[100px] "></div>

//   {/* Text + Discord (Aligned to REGISTER Button Size) */}
//   <div className="flex sm: grid-cols-1 flex-row justify-center items-cente md:grid-cols-2">
//     {/* Text (Shrunk to Fit) */}
//     <p className="text- tracking-tighter text-[#3F3D3D] font-serif leading-tight">
//       Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
//     </p>

//     {/* Discord Button (Smaller & Centered) */}
//     <div className="flex flex-col justify-center items-center mt-2">
//       <FaDiscord className="text-3xl" />
//       <span className="text-xs font-semibold leading-none">DISCORD</span>
//     </div>
//   </div>

//   {/* Timer (Moves Left Automatically) */}
//   <div className="flex justify-center items-center">
//     <Timer targetDate={targetDate} />
//   </div>
// </div>


//   );
// };

// export default Sponsor;

// import React from "react";
// import Timer from "./Timer";
// import { FaDiscord } from "react-icons/fa";

// const Sponsor = () => {
//   const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1">
//       {/* Grey Box (Aligned with Registration Section) */}
//       <div className="bg-gray-300 w-[440px] h-[100px]"></div>

//       {/* Text + Discord (Left Aligned with Register Button) */}
//       <div className="flex flex-row items-center w-full ml-auto">
//         {/* Left-Aligned Text */}
//         <p
//           className="text-left"
//           style={{
//             width: "234px",
//             height: "107px",
//             color: "#393939",
//             fontFamily: "Inter, sans-serif",
//             fontSize: "15.1px",
//             fontWeight: "700",
//             lineHeight: "17.39px",
//           }}
//         >
//           Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
//         </p>

//         {/* Discord Button (Remains properly aligned) */}
//         <div className="flex flex-col justify-center items-center ml-3">
//           <FaDiscord className="text-4xl" />
//           <span className="text-sm font-semibold">DISCORD</span>
//         </div>
//       </div>

//       {/* Timer (Aligned with Date & Time Section) */}
//       <div className="flex justify-center items-center ml-[-30px]">
//         <Timer targetDate={targetDate} />
//       </div>
//     </div>
//   );
// };

// export default Sponsor;


// import React from "react";
// import Timer from "./Timer";
// import { FaDiscord } from "react-icons/fa";
// import { SiLinktree } from "react-icons/si";

// const Sponsor = () => {
//   const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

//   return (
//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1">
//       {/* Grey Box (Aligned with Registration Section) */}
//       <div className="bg-gray-300 w-[440px] h-[100px]"></div>

//       {/* Text + Icons (Left Aligned with Register Button) */}
//       <div className="flex flex-row items-center w-full ml-auto">
//         {/* Left-Aligned Text */}
//         <p
//           className="text-left"
//           style={{
//             width: "234px",
//             height: "107px",
//             color: "#393939",
//             fontFamily: "Inter, sans-serif",
//             fontSize: "15.1px",
//             fontWeight: "700",
//             lineHeight: "17.39px",
//           }}
//         >
//           Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
//         </p>

//         {/* Discord & Linktree Icons (Properly Aligned) */}
//         <div className="flex flex-row gap-5 ml-3">
//           {/* Discord */}
//           <div className="flex flex-col justify-center items-center text-gray-800">
//             <FaDiscord className="text-5xl" /> {/* Increased size */}
//             <span className="text-sm font-semibold">DISCORD</span>
//           </div>

//           {/* Linktree */}
//           <div className="flex flex-col justify-center items-center text-gray-800">
//             <SiLinktree className="text-5xl" /> {/* Adjusted size */}
//             <span className="text-sm font-semibold">LINKTREE</span>
//           </div>
//         </div>
//       </div>

//       {/* Timer (Aligned with Date & Time Section) */}
//       <div className="flex justify-center items-center ml-[-30px]">
//         <Timer targetDate={targetDate} />
//       </div>
//     </div>
//   );
// };

// export default Sponsor;


import React from "react";
import Timer from "./Timer";
import { FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Sponsor = () => {
  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2 pb-2 pt-1">
      {/* Grey Box (Aligned with Registration Section) */}
      <div className="bg-gray-300 w-[440px] h-[100px]"></div>

      {/* Text + Icons (Left Aligned with Register Button) */}
      <div className="flex flex-row items-center w-full">
        {/* Left-Aligned Text */}
        <p
          className="text-left text-justify w-[250px]"
          style={{
            width: "234px",
            height: "107px",
            color: "#393939",
            fontFamily: "Inter, sans-serif",
            fontSize: "15.1px",
            fontWeight: "700",
            lineHeight: "17.39px",
          }}
        >
          Hacknovate, the flagship 24 hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
        </p>

        {/* Discord & Linktree Icons (Shifted to Right) */}
        <div className="flex flex-row gap-7 ml-auto pr-5"> 
          {/* Shifted to right using `ml-auto` and `pr-8` */}

          {/* Discord */}
          <div className="flex flex-col justify-center items-center text-gray-800">
            <FaDiscord className="text-7xl" />
            <span className="text-sm font-semibold">DISCORD</span>
          </div>

          {/* Linktree */}
          <div className="flex flex-col justify-center items-center text-gray-800">
            <SiLinktree className="text-7xl" />
            <span className="text-sm font-semibold">LINKTREE</span>
          </div>
        </div>
      </div>

      {/* Timer (Aligned with Date & Time Section) */}
      <div className="flex justify-center items-center ml-[-30px]">
        <Timer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Sponsor;
