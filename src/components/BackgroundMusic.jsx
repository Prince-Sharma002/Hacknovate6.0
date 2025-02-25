import { useEffect } from "react";
import musicFile from "/hp2.mp3";

const BackgroundMusic = () => {
  useEffect(() => {
    const audio = new Audio(musicFile);
    audio.loop = true;

    // Try to play on load (some browsers block this)
    const playAudio = () => {
      audio.play().catch((error) => console.log("Autoplay blocked:", error));
      document.removeEventListener("click", playAudio);
    };

    document.addEventListener("click", playAudio);

    return () => {
      document.removeEventListener("click", playAudio);
    };
  }, []);

  return null; // No UI element needed
};

export default BackgroundMusic;
