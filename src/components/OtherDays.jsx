import React from 'react'

{/* */}
import AnotherDay from './AnotherDayCard'

export default function OtherDays() {
  return (
    <>
    <div className='flex justify-end text-white gap-4 pr-3 pt-8 pb-4'>
        <button className='bg-gray-200 text-gray-600 font-medium w-8 h-8 rounded-full'>°C</button>
        <button className='bg-gray-600 text-gray-200 font-medium w-8 h-8 rounded-full'>°F</button>
    </div>
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4'>
      {/*Cards 5 days*/}
      <AnotherDay/>
      <AnotherDay/>
      <AnotherDay/>
      <AnotherDay/>
      <AnotherDay/>
    </div>
    </>
  )
}
