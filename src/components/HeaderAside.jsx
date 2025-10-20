import React from 'react';
import SearchBar from './SearchBar';

export default function HeaderAside({ data, loading, error, onSearch, onUseLocation}) {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    day: '2-digit',
    month: 'short'
  });

  if (loading) {
    return (
      <div className="bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center justify-center">
        <p>Cargando datos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center justify-center">
        <p className="text-red-500">
          Error: {error.message || 'Ocurrió un error desconocido.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[#1e213a] w-screen md:w-[45%] min-h-screen pt-7 flex flex-col items-center">
      
      {/* Search + geolocalización */}
      <SearchBar onSearch={onSearch} onUseLocation={onUseLocation} />

      {data ? (
        <>
          <div className="flex flex-col items-center md:pt-10 md:w-full md:overflow-hidden">
            <div className="relative min-w-screen h-50 md:w-[30%]">
              <div className="absolute h-50 mb-5 inset-0 bg-[url('/others/Cloud-background.png')] bg-cover md:bg-contain bg-center bg-no-repeat opacity-5"></div>
              <div className="relative z-10 flex justify-center items-center h-full">
                <img className="w-36 md:w-60" src={`/weather/${data.weather[0].icon}.png`} alt="Weather icon"/>
              </div>
            </div>

            <div className="flex items-center justify-center md:pt-16">
              <h2 className="font-medium md:text-8xl text-9xl text-[#E7E7EB] my-8">
                {Math.round(data.main.temp)}
              </h2>
              <h3 className="mt-6 md:text-5xl text-6xl text-[#A09FB1] font-medium">°C</h3>
            </div>

            <h2 className="capitalize pt-6 pb-12 md:text-2xl text-3xl text-[#A09FB1] font-semibold">
              {data.weather[0].description}
            </h2>
            <p className="text-sm md:text-xs text-[#88869D] font-medium mb-6">
              `Today  &nbsp;&nbsp;&nbsp;  ·  &nbsp;&nbsp;&nbsp;  {today}`
            </p>
          </div>

          <pre className="flex gap-4 justify-center md:text-sm items-center pb-4 text-[#88869D]">
            <img className="w-6" src="/location_on.svg" alt="location" />
            {data.name}
          </pre>
        </>
      ) : (
        <p className="text-[#A09FB1] mt-10">Esperando datos del clima...</p>
      )}
    </div>
  );
}
