import React from 'react'
import WindStatus from './WindStatusCard'
import Humidity from './HumidityCard'
import Visibility from './VisibilityCard'
import AirPressure from './AirPressureCard'
import Footer from './Footer'

export default function DescToday() {
  return (
    <>
      <h1 className='text-2xl text-white ml-4'>Today`s Hightlights</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        <WindStatus />
        <Humidity />
        <Visibility />
        <AirPressure />
      </div>
      <Footer/>
    </>
  )
}
