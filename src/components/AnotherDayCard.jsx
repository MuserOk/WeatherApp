import React from "react";

export default function AnotherDay({ day, units }) {
 
  
const tempMax = Math.round(day.temp_max);
const tempMin = Math.round(day.temp_min);

  return (
    <div className="bg-[#1e213a] p-4 text-white flex flex-col items-center gap-2 rounded-2xl cursor-pointer hover:bg-[#30345a] active:bg-[#191b2f]">
      <h1 className="text-sm">
        {new Date(day.date).toLocaleDateString("es-AR", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })}
      </h1>

      <img
        className="pt-2 w-16"
        src={`/weather/${day.icon}.png`}
        alt={day.description}
      />

      <div className="flex gap-2 text-sm">
        <p>
          {tempMax}°{units === "metric" ? "C" : "F"}
        </p>
        <p className="text-gray-500">
          {tempMin}°{units === "metric" ? "C" : "F"}
        </p>
      </div>
    </div>
  );
}
