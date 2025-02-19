import React from 'react'

const Registration = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2'>
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
        <div>
            <p className='text-justify justify-last'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been aset sheets containing Lorem Ipsum passages, and more recently with desktop publishing </p>
        </div>
        <div>
            <p className='p-2 px-2 text-4xl bg-black text-white w-full h-full text-center flex justify-center align-center items-center'> Timer </p>
        </div>
      
    </div>
  )
}

export default Registration