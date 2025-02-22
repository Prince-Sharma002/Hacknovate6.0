import React from "react";
import Timer from "./Timer";

const Sponsor = () => {
  const targetDate = new Date(Date.UTC(2025, 3, 4, 9, 0, 0)); // April 4, 2025, 9:00 AM UTC

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-2">
      <div className="bg-gray-300 w-full"></div>
      <div className="flex justify-center items-center text-left">
        <p>
        Hacknovate, the flagship 24-hour hybrid hackathon of ABESIT, returns in 2025 with its 6th edition, themed around Harry Potter. Get ready to hack the world.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Timer targetDate={targetDate} />
      </div>
    </div>
  );
};

export default Sponsor;
