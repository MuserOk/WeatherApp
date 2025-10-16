import React from 'react'

export default function AnotherDay({data}) {
  return (
    <>
    <div className='bg-[#1e213a] p-4 text-white flex flex-col items-center gap-2  cursor-pointer hover:bg-[#30345a] active:bg-[#191b2f]'>
      <h1>{data.list[8].dt_txt}</h1>
      <img className='pt-2 w-16' src="/weather/${data.list[1].weather[0].icon}.png" alt="imagen weather" />
        <div className='flex gap-2'>
            <p>{data.list[0].main.temp_max}°C</p>
            <p className='text-gray-600'>{data.list[0].main.temp_min}°C</p>
        </div>
    </div>
    </>
  )
}

/* // ESTOY ANANLIZANDO COMO RENDEIRZAR LOS DATOS EN CADA CARD, CONSIDERANDO LOS DIAS Y LAS HORAS DESFASE */