import React from 'react'

export default function AnotherDay() {
  return (
    <>
    <div className='bg-[#1e213a] p-4 text-white flex flex-col items-center gap-2  cursor-pointer hover:bg-[#30345a] active:bg-[#191b2f]'>
      <h1>Day</h1>
      <img className='pt-2 w-16' src="/weather/09d.png" alt="imagen weather" />
        <div className='flex gap-2'>
            <p>24°C</p>
            <p className='text-gray-600'>12°C</p>
        </div>
    </div>
    </>
  )
}
