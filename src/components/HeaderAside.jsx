import React from 'react'

export default function HeaderAside({data, loading, error}) {
  if (loading) {
    return (
      <div className='bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center justify-center'>
        <p>Cargando datos...</p>
      </div>
    );
  }
 if (error) {
    return (
      <div className='bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center justify-center'>
        <p className='text-red-500'>Error: {error.message || 'Ocurrió un error desconocido.'}</p>
      </div>
    );
  }
 if (!data) {
     return (
      <div className='bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center justify-center'>
        <p>Esperando datos del clima...</p>
        {/* Podrías mostrar aquí el formulario y el botón de ubicación si quieres */}
        <form className='mt-10 hover:bg-gray-300 active:bg-gray-300 bg-gray-400 py-1.5 w-40 md:w-32 flex justify-center' action="">
          <input className=' cursor-pointer h-full w-38 md:w-30 text-center placeholder-white' type="text" placeholder='Search fo Places' />
        </form>
        <img className='mt-5 hover:bg-gray-300 active:bg-gray-500 cursor-pointer w-10 md:w-8 h-10 md:h-8 bg-gray-400 rounded-full p-1.5' src="/location.svg" alt="Get location" />
      </div>
    );
  }

  return (
    <>
      <div className='bg-[#1e213a] w-scren md:w-[45%] min-h-screen pt-7 flex flex-col items-center'>
        <header className='pb-1 mt-10 flex justify-between items-center w-full md:justify-around px-5 md:px-0'>
          <form className='hover:bg-gray-300 active:bg-gray-300 bg-gray-400 py-1.5 w-40 md:w-32 flex justify-center' action="">
            <input className=' cursor-pointer h-full w-38 md:w-30 text-center placeholder-white' type="text" placeholder='Search fo Places' />
          </form>
          
          <img className='hover:bg-gray-300 active:bg-gray-500 cursor-pointer w-10 md:w-8 h-10 md:h-8 bg-gray-400 rounded-full p-1.5' src="/location.svg" alt="" />
        </header>
        <div className='flex flex-col items-center md:pt-10 md:w-full md:overflow-hidden'>
          <div className="relative min-w-screen h-50 md:w-[30%]">
            <div className="absolute h-50 mb-5  inset-0 bg-[url('/others/Cloud-background.png')] bg-cover md:bg-contain bg-center bg-no-repeat opacity-5"></div>
            <div className="relative z-10 flex justify-center items-center h-full">
              <img className="w-24 md:w-36" src="/weather/01d.png" alt="Weather icon" />
            </div>
          </div>

          <div className="flex items-center justify-center md:pt-16">
            <h2 className="font-medium md:text-8xl text-9xl text-[#E7E7EB] my-8">
              {data.main.temp}
            </h2>
            <h3 className=" mt-6 md:text-5xl text-6xl text-[#A09FB1] font-medium">
              °C
            </h3>
          </div>

          <h2 className=" capitalize pt-6 pb-12 md:text-2xl text-3xl text-[#A09FB1] font-semibold">clear sky</h2>
          <p className="text-sm md:text-xs text-[#88869D] font-medium mb-6">Today &nbsp;&nbsp; . &nbsp;&nbsp; Mon, 13 Oct</p>
        </div>
        <pre className='flex gap-4 justify-center md:text-sm  items-center pb-4 text-[#88869D]'>
          <img className='w-6 ' src="/location_on.svg" alt="location" />
          San Isidro
        </pre>
      </div>
    </>
  )
}
