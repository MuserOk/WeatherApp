import React from 'react'
import HeaderAside from './components/HeaderAside'
import OtherDays from './components/OtherDays'
import DescToday from './components/DescToday'

export default function App() {
  return (
    <div className='flex flex-col md:flex-row'>
      <HeaderAside />
      <div className='flex flex-col'>
        <OtherDays />
        <DescToday />
      </div>
    </div>
  )
}
