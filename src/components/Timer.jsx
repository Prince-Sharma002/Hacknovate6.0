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
    <div className="flex items-center bg-black p-1 rounded-md shadow-lg w-[23.438rem] h-[5.625rem] mr-[-30px]">
      <div
        className="text-white text-sm font-bold px-2"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        Starts in
      </div>
      <div className="pr-2">
        <TimeBox
          value={timeLeft.days}
          label="DAYS"
          width="85px"
          height="69px"
        />
      </div>
      <div className="flex bg-black text-black font-bold divide-x-4 divide-black">
        <TimeBox
          value={timeLeft.hours}
          label="hrs"
          width="75px"
          height="69px"
        />
        <TimeBox
          value={timeLeft.minutes}
          label="mins"
          width="75px"
          height="69px"
        />
        <TimeBox
          value={timeLeft.seconds}
          label="sec"
          width="75px"
          height="69px"
        />
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
      <span
        className="text-black text-[28px] font-bold leading-none"
        style={{ fontFamily: "Inter" }}
      >
        {label}
      </span>
    </div>
  );
};

export default Timer;
