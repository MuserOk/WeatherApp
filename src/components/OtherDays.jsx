import React from "react";
import AnotherDay from "./AnotherDayCard";

export default function OtherDays({data, loading, error, currentUnits, onToggleUnits }) {

  // Manejo de loading
  if (loading) {
    return (
      <div className="flex justify-center items-center text-white p-8">
        <p>Cargando pronóstico...</p>
      </div>
    );
  }

  // Manejo de error
  if (error) {
    return (
      <div className="flex justify-center items-center text-red-500 p-8">
        <p>Error al cargar el pronóstico: {error.message || "Ocurrió un error"}</p>
      </div>
    );
  }

  // --- función auxiliar ---
  function getSixDaysForecast(list) {
    const days = {};

    list.forEach(item => {
      const date = item.dt_txt.split(" ")[0];
      if (!days[date]) days[date] = [];
      days[date].push(item);
    });

    const dailyArray = Object.keys(days).map(date => {
      const entries = days[date];
      const midday = entries.find(e => e.dt_txt.includes("12:00:00")) || entries[0];
      return {
        date,
        temp_min: Math.min(...entries.map(e => e.main.temp_min)),
        temp_max: Math.max(...entries.map(e => e.main.temp_max)),
        description: midday.weather[0].description,
        icon: midday.weather[0].icon,
      };
    });

    return dailyArray.slice(0, 6);
  }

  // Crear array de 6 días
  const sixDays = data?.list ? getSixDaysForecast(data.list) : [];

  return (
    <>
      <div className="flex justify-end text-white gap-4 pr-3 pt-8 pb-4">
        <button
          className={`w-8 h-8 rounded-full font-medium ${
            currentUnits === "metric"
              ? "bg-gray-200 text-gray-600"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => currentUnits !== "metric" && onToggleUnits()}
        >
          °C
        </button>
        <button
          className={`w-8 h-8 rounded-full font-medium ${
            currentUnits === "imperial"
              ? "bg-gray-200 text-gray-600"
              : "bg-gray-600 text-gray-200"
          }`}
          onClick={() => currentUnits !== "imperial" && onToggleUnits()}
        >
          °F
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {sixDays.length > 0 ? (
          sixDays.map((day, idx) => (
            <AnotherDay key={idx} day={day} units={currentUnits} />
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No hay datos para mostrar.
          </p>
        )}
      </div>
    </>
  );
}
