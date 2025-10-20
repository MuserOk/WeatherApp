import React from 'react'
import WindStatus from './descriptionsDay/WindStatusCard'
import Humidity from './descriptionsDay/HumidityCard'
import Visibility from './descriptionsDay/VisibilityCard'
import AirPressure from './descriptionsDay/AirPressureCard'
import Footer from './descriptionsDay/Footer'

export default function DescToday({ data, currentUnits }) {

  return (
    <>
      <h1 className='text-2xl text-white ml-4'>Today`s Hightlights</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
        <WindStatus data={data} currentUnits={currentUnits} />
        <Humidity data={data} />
        <Visibility data={data} currentUnits={currentUnits} />
        <AirPressure data={data} />
      </div>
      <Footer/>
    </>
  )
}
