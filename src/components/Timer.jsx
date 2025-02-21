// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Timer = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(targetDate) - new Date();
//     if (difference > 0) {
//       return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div className="flex items-center bg-black p-1 rounded-lg shadow-lg w-fit">
//       <div
//         className="text-white text-sm font-bold px-2 rotate-180 whitespace-nowrap"
//         style={{ writingMode: "vertical-rl" }}
//       >
//         Starts In
//       </div>
//       <div className="flex bg-gray-300 text-black font-bold divide-x divide-black">
//         <TimeBox value={timeLeft.days} label="DAYS" />
//         <ThinSeparator />
//         <TimeBox value={timeLeft.hours} label="HRS" />
//         <ThinSeparator />
//         <TimeBox value={timeLeft.minutes} label="MINS" />
//         <ThinSeparator />
//         <TimeBox value={timeLeft.seconds} label="SEC" />
//       </div>
//     </div>
//   );
// };

// const TimeBox = ({ value, label }) => {
//   return (
//     <div className="p-3 text-center min-w-[50px]">
//       <motion.div
//         key={value}
//         initial={{ y: 20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         exit={{ y: -20, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-3xl font-mono w-12"
//       >
//         {String(value).padStart(2, "0")}
//       </motion.div>
//       <span className="text-xs">{label}</span>
//     </div>
//   );
// };


// const ThinSeparator = () => (
//   <div className="w-[3px] bg-black mx-1 self-stretch "></div>
// );

// export default Timer;


// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Timer = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(targetDate) - new Date();
//     if (difference > 0) {
//       return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div className="flex items-center bg-black p-2 rounded-md shadow-lg border border-black">
//       <div
//         className="text-white text-sm font-bold px-2 rotate-180"
//         style={{ writingMode: "vertical-rl" }}
//       >
//         Starts in
//       </div>
//       <div className="flex bg-black text-black font-bold divide-x divide-black">
//         <TimeBox value={timeLeft.days} label="DAYS" />
//         <TimeBox value={timeLeft.hours} label="hrs" />
//         <TimeBox value={timeLeft.minutes} label="mins" />
//         <TimeBox value={timeLeft.seconds} label="sec" />
//       </div>
//     </div>
//   );
// };

// const TimeBox = ({ value, label }) => {
//     return (
//       <div className="p-2 text-center min-w-[60px] bg-gray-300 border border-black rounded-lg">
//         <motion.div
//           key={value}
//           initial={{ rotateX: 90, opacity: 0 }}
//           animate={{ rotateX: 0, opacity: 1 }}
//           exit={{ rotateX: -90, opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-5xl font-bold"
//           style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }} // Updated font
//         >
//           {String(value).padStart(2, "0")}
//         </motion.div>
//         <span
//           className="text-lg font-bold"
//           style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }} // Updated font
//         >
//           {label}
//         </span>
//       </div>
//     );
//   };
  

// export default Timer;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const Timer = ({ targetDate }) => {
//   const calculateTimeLeft = () => {
//     const difference = new Date(targetDate) - new Date();
//     if (difference > 0) {
//       return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }
//     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, [targetDate]);

//   return (
//     <div className="flex items-center bg-[#040000] p-2 rounded-md shadow-lg border border-[#302D2D] w-[440px] h-[99px]">
//       <div
//         className="text-white text-sm font-bold px-2"
//         style={{ writingMode: "vertical-rl", transform: "rotate(-90.219deg)" }}
//       >
//         Starts in
//       </div>
//       <div className="flex bg-[#040000] text-black font-bold divide-x divide-black">
//         <TimeBox value={timeLeft.days} label="DAYS" width="115px" />
//         <TimeBox value={timeLeft.hours} label="hrs" width="87px" />
//         <TimeBox value={timeLeft.minutes} label="mins" width="87px" />
//         <TimeBox value={timeLeft.seconds} label="sec" width="87px" />
//       </div>
//     </div>
//   );
// };

// const TimeBox = ({ value, label, width }) => {
//   return (
//     <div
//       className={`p-2 text-center border border-black rounded-lg bg-[#C9C8C8]`}
//       style={{ width, height: "70px", display: "flex", flexDirection: "column", justifyContent: "center" }}
//     >
//       <motion.div
//         key={value}
//         initial={{ rotateX: 90, opacity: 0 }}
//         animate={{ rotateX: 0, opacity: 1 }}
//         exit={{ rotateX: -90, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-[32px] font-extrabold"
//         style={{ fontFamily: "Inter, sans-serif" }}
//       >
//         {String(value).padStart(2, "0")}
//       </motion.div>
//       <span className="text-[18px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>
//         {label}
//       </span>
//     </div>
//   );
// };

// export default Timer;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Timer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center bg-black p-1 rounded-md shadow-lg w-[375px] h-[90px]">
      <div
        className="text-white text-sm font-bold px-2"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "18px", letterSpacing: "1px" }}
      >
        Starts in
      </div>
      <div className="pr-2"><TimeBox value={timeLeft.days} label="DAYS" width="85px" height="69px" /></div>
      <div className="flex bg-black text-black font-bold divide-x-4 divide-black">
        <TimeBox value={timeLeft.hours} label="hrs" width="75px" height="69px" />
        <TimeBox value={timeLeft.minutes} label="mins" width="75px" height="69px" />
        <TimeBox value={timeLeft.seconds} label="sec" width="75px" height="69px" />
      </div>
    </div>
  );
};

const TimeBox = ({ value, label, width, height }) => {
    return (
      <div
        className=" pl-1 flex flex-col justify-center bg-gray-300 border border-black rounded-lg"
        style={{ width, height }}
      >
        <motion.div
          key={value}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-black text-[32px] font-extrabold leading-none"
          style={{ fontFamily: "Inter" }}
        >
          {String(value).padStart(2, "0")}
        </motion.div>
        <span className="text-black text-[28px] font-bold leading-none" style={{ fontFamily: "Inter" }}>
          {label}
        </span>
      </div>
    );
  };
  



export default Timer;
