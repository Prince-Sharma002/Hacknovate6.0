import React from 'react'

const Registration = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-4 gap-2'>

        <div>
            <p className='p-2 px-2 text-4xl bg-black text-white w-full h-full text-center flex justify-center align-center items-center'> Register Now </p>
        </div>
        <div>
            <p className='text-justify justify-last w-full h-full text-center flex justify-center align-center items-center'> Discord and other button </p>
        </div>
        <div>
            <p className='text-justify justify-last w-full h-full text-center flex justify-center align-center items-center'> Discord and other button </p>
        </div>
        <div className='flex flex-between'>

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