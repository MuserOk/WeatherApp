import React, { useEffect } from 'react'
import HeaderAside from './components/HeaderAside'
import OtherDays from './components/OtherDays'
import DescToday from './components/DescToday'
import useData from './hooks/useData'
import { useState } from 'react'


export default function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [lat, setLat] = useState(-34.9492)
  const [lon, setLon] = useState(-58.0472)
 
  const current_weather_url = lat !== null && lon !== null && apiKey
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` // Agregamos &units=metric para Celsius
    : null;

  const { loading, data, error } = useData(current_weather_url)

  const call_5_days_url =  lat !== null && lon !== null && apiKey
    ? `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    :null;
  
  const {loading5, data5, error5} = useData(call_5_days_url)

  

  return (
    <div className='flex flex-col md:flex-row'>
      <HeaderAside data={data} loading={loading} error={error}  />
      <div className='flex flex-col'>
        <OtherDays data5={data} loading5={loading} error5={error} />
        <DescToday data={data} loading={loading} error={error} />
      </div>
    </div>
  )
}
