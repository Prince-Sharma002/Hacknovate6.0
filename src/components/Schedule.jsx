import React from 'react';
import map from "../assets/schedule/bg.svg";
import map2 from "../assets/schedule/map2.svg";
import map3 from "../assets/schedule/bg2.svg";

const Schedule = () => {
  return (
    <div className='border-4 border-slate-800 w-full border-t-0 p-4 pb-4 mb-0 text-center border-b-0'>
      <h1 className="themetitle text-xl md:text-5xl font-bold mb-6 text-center border-b-8 mx-auto border-black inline-block mb-24 mt-8">
        The Hackwarts TimeTable
      </h1>
      <img 
        src={map3} 
        alt='schedule map' 
        className='mx-auto border-4'
        style={{
          width: '90%', 
        //   boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)', // Equal shadow effect in all directions
          borderRadius: '0px' // Rounded corners
        }}
      />
    </div>
  );
};

export default Schedule;
