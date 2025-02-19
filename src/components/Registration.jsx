import React from 'react'

const Registration = () => {
  return (
    <div>
              {/* Family & Birth Section */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="border-b-2 border-gray-800 flex items-stretch">
          {/* Left section - Family & Birth */}
          <div className="flex-1 pr-4">
            <div className="flex items-baseline gap-4">
              <h2 className="text-4xl font-black tracking-tighter">DATE</h2>
              <span className="text-8xl font-black relative top-8">&</span>
              <h2 className="text-4xl font-black tracking-tighter">TIME</h2>
            </div>
            
            <div className="mt-4 space-y-2">
              <div className="flex gap-x-4">
                <span className="font-bold min-w-[80px]">5 April</span>
                {/* <span>Lily Potter</span> */}
              </div>
              <div className="flex gap-x-4">
                <span className="font-bold min-w-[80px]">9:00 PM</span>
                <span>James Potter</span>
              </div>
              <div className="flex gap-x-4">
                <span className="font-bold min-w-[80px]">Born:</span>
                <span>July 31, 1980</span>
              </div>
              <p className="mt-4 text-sm leading-snug max-w-xl">
                A few months before his birth, the seer Trelawney prophesied about the approaching birth of a boy who could defeat Voldemort - or at least his mark.
              </p>
            </div>
          </div>
          {/* Right section - Reward */}
          <div className="border-l border-gray-800 pl-4 flex items-center">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-sm">galleons</span>
                <span className="text-6xl font-black">10,000</span>
              </div>
              <div className="text-xs italic mt-1">
                for the return of<br />
                Harry Potter!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Registration