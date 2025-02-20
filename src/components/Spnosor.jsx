import React from 'react'
import clock from '../assets/clock.png';

const Spnosor = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
        
        <div className='bg-gray-300 w-full'>

        </div>
        <div>
            <p className='text-justify justify-last w-full h-full text-center flex justify-center align-center items-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum eius, atque tenetur tempore iste numquam error, nemo eveniet, eos quis eligendi illum molestiae consequatur fuga dignissimos architecto ducimus nostrum assumenda? </p>
        </div>
        <div className='flex flex-between'>
              <img src={clock} alt='clock' />
        </div>
    </div>
  )
}

export default Spnosor