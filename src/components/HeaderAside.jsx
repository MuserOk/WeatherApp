import React from 'react'

export default function HeaderAside() {
  return (
    <>
      <div className='bg-[#1e213a] w-scren min-h-screen pt-7 flex flex-col items-center'>
        <header className='pb-1 flex justify-between items-center w-full px-5'>
          <form className='bg-gray-400 py-1.5 w-40' action="">
            <input className='w-full text-center placeholder-white' type="text" placeholder='Search fo Places' />
          </form>
          <img className='w-10 h-10 bg-gray-400 rounded-full p-1.5' src="/location.svg" alt="" />
        </header>
        <div className='flex flex-col items-center'>
          <div className="relative min-w-screen h-50">
            <div className="absolute h-50 mb-5 inset-0 bg-[url('/others/Cloud-background.png')] bg-cover bg-center  bg-no-repeat opacity-5"></div>
            <div className="relative z-10 flex justify-center items-center h-full">
              <img className="w-24" src="/weather/01d.png" alt="Weather icon" />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <h2 className="font-medium text-9xl text-[#E7E7EB] my-8">
              24
            </h2>
            <h3 className=" mt-6 text-6xl text-[#A09FB1] font-medium">
              °C
            </h3>
          </div>

          <h2 className=" capitalize pt-6 pb-12 text-3xl text-[#A09FB1] font-semibold">clear sky</h2>
          <p className=" text-sm text-[#88869D] font-medium mb-6">Today &nbsp;&nbsp; . &nbsp;&nbsp; Mon, 13 Oct</p>
        </div>
        <pre className='flex gap-4 justify-center items-center pb-4 text-[#88869D]'>
          <img className='w-6' src="/location_on.svg" alt="location" />
          San Isidro
        </pre>
      </div>
    </>
  )
}
