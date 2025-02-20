import React from 'react'
import discord from "../assets/discord.png"
import { FaDiscord } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";

const Registration = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-2'>

        <div>
            <p className='p-2 px-2 text-4xl bg-black text-white w-full h-full text-center flex justify-center align-center items-center'> Register Now </p>
        </div>
        <div>
            <p className='text-justify justify-last w-full h-full text-center flex justify-center align-center items-center pl-12'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur culpa quia facilis? </p>
        </div>
        <div className='flex flex-row justify-center align-center items-center'>
            <div className='flex flex-col justify-center align-center items-center'>
                <FaDiscord className="text-8xl" />
                <button> DISCORD </button>
            </div>
            <div className='flex flex-col justify-center align-center items-center'>
                <FaDiscord className="text-8xl" />
                <button> DISCORD </button>
            </div>

        </div>
        <div className='flex flex-between justify-center align-center items-center'>

                <div className='grow'>
                    <h1 className='text-4xl'> DATE </h1>
                    <div className='flex gap-2 text-xs'>
                        <h2>mother</h2>
                        <span>lily</span>
                    </div>
                    <div className='flex gap-2 text-xs'>
                        <h2>mother</h2>
                        <span>lily</span>
                    </div>
                </div>
            
                <span className='text-8xl grow'>&</span>
                
                <div className='grow'>
                    <h1 className='text-4xl'> Time </h1>
                    <div className='flex gap-2 text-xs'>
                        <h2>mother</h2>
                        <span>lily</span>
                    </div>
                    <div className='flex gap-2 text-xs'>
                        <h2>mother</h2>
                        <span>lily</span>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Registration