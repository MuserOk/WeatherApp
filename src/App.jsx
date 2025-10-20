import React from "react";
import HeaderAside from "./components/HeaderAside";
import OtherDays from "./components/OtherDays";
import DescToday from "./components/DescToday";
import useWeatherData from "./hooks/useWeatherData";



export default function App() {



  // hago llamada a mi hook que busca datos en api y desestructuro la informacion
  const {
    dataCurrent, loadingCurrent, errorCurrent,
    dataForecast, loadingForecast, errorForecast,
    getCurrentLocation, getCityCoordinates, units, toggleUnits
  } = useWeatherData();



  //  Esta función maneja la búsqueda desde el HeaderAside
  const handleLocationSearch = (cityName) => {
    if (cityName.trim() !== "") {
      getCityCoordinates(cityName);
    }
  };




  return (
    <>
        <div className="flex flex-col md:flex-row">
          <HeaderAside data={dataCurrent} loading={loadingCurrent} error={errorCurrent} onSearch={handleLocationSearch} currentUnits={units} onUseLocation={getCurrentLocation} />
          <div className="flex flex-col">
            <OtherDays data={dataForecast} loading={loadingForecast} error={errorForecast} currentUnits={units} onToggleUnits={toggleUnits}/>
            <DescToday data={dataCurrent} loading={loadingCurrent} error={errorCurrent} currentUnits={units} />
          </div>
        </div>
    </>
  );
}
