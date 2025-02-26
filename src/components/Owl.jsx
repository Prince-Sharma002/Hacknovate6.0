import React, { useEffect, useState } from "react";
import "../styles/Owl.css";

const Owl = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate horizontal position based on scroll
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const horizontalPosition = (scrollPosition / maxScroll) * 100; // Percentage of scroll

  return (
    <div
      className="owl-container"
      style={{ left: `${horizontalPosition}%` }}
    >
      <img src="https://media4.giphy.com/media/gjkOP8de0iiMsIfux6/giphy.gif?cid=6c09b952196bbahwy2kdwb3jshklwhra2vyqzk4ic17ps799&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="Harry Potter Owl" className="owl" />
    </div>
  );
};

export default Owl;