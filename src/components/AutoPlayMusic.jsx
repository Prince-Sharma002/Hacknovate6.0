import React, { useEffect, useRef, useState } from 'react';
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { ShinyButton } from "./magicui/shiny-button";


const AutoPlayMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Autoplay was prevented:', error);
        // Autoplay is blocked, user needs to manually play
      }
    };

    playAudio();
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='absolute bottom-12   left-8 z-10'>
      <audio ref={audioRef} loop>
        <source src="/hp.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

    <div className=''>

    
      <ShinyButton 
        onClick={handlePlayPause} 
        className="bg-sky-100 bg-gray-400 text-black rounded-full p-2"
      >
        {isPlaying ?
         <GiSpeaker className='cursor-pointer text-2xl ' /> :
         <GiSpeakerOff className='cursor-pointer text-2xl ' /> 
        } 
      </ShinyButton>

    </div>
    </div>
  );
};

export default AutoPlayMusic;
