import React, { useEffect } from 'react'
import HeaderAside from './components/HeaderAside'
import OtherDays from './components/OtherDays'
import DescToday from './components/DescToday'
import useData from './hooks/useData'
import { useState } from 'react'


export default function App() {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [errorGeo, setErrorGeo] = useState(null);

  // Usamos useEffect para obtener la geolocalización UNA SOLA VEZ al montar el componente
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
          setErrorGeo(null); 
        },
        (err) => {
          console.error("Error obteniendo la ubicación:", err);
          setErrorGeo(err); 
          setLat(null); 
          setLon(null);
        }
      );
    } else {
      setErrorGeo(new Error("La geolocalización no es compatible con tu navegador."));
    }
  }, []);

  // Construye la URL SOLO si tenemos latitud, longitud y apiKey
  const current_weather_url = lat !== null && lon !== null && apiKey
    ? `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` // Agregamos &units=metric para Celsius
    : null;

  const { loading, data, error } = useData(current_weather_url)

  return (
    <div className='flex flex-col md:flex-row'>
      <HeaderAside data={data} loading={loading} error={error}  />
      <div className='flex flex-col'>
        <OtherDays />
        <DescToday data={data} loading={loading} error={error} />
      </div>
    </div>
  )
}
