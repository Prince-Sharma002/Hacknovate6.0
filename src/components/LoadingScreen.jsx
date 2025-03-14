import React from "react";
import wand from "../assets/goldenSnitch.png"; // Replace with your Harry Potter icon


const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-80 z-50">
      <img src={wand} alt="Loading..." className="w-20 h-20 animate-pulse" />
      <p className="text-yellow-300 text-xl font-bold mt-4">Loading Magic...</p>
    </div>
  );
};

export default LoadingScreen;
