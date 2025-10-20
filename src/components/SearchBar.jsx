import React, { useState } from "react";
import axios from "axios";

export default function SearchBar({ onSearch, onUseLocation }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct`,
        {
          params: {
            q: value,
            limit: 5,
            appid: import.meta.env.VITE_WEATHER_API_KEY
          }
        }
      );

            // Crear array de objetos {name, country, lat, lon}
      const citiesArray = response.data.map((c) => ({
        name: c.name,
        country: c.country,
        lat: c.lat,
        lon: c.lon,
      }));


      /* setSuggestions(response.data || []); */
       setSuggestions(citiesArray);
    } catch (error) {
      console.error("Error al obtener sugerencias:", error);
      setSuggestions([]);
    }
  };





  const handleSelect = (city) => {
    setInputValue(city.name);
    setSuggestions([]);
    onSearch(city.name);

     onSearch(city.lat, city.lon);
  };

  return (
    <div className="w-full flex justify-between items-center mt-2 px-4 md:px-8 relative">
      {/* Input */}
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search for places" className="bg-gray-400 placeholder-white text-center text-white py-3 w-40 md:w-50 rounded"/>

      {/* Lista de sugerencias */}
      {suggestions.length > 0 && (
        <ul className="absolute top-12 bg-gray-200/10 text-white w-40 md:w-50 rounded shadow-lg z-20">
          {suggestions.map((s, idx) => (
            <li key={idx} className="cursor-pointer hover:bg-gray-500/60 px-2 py-1" onClick={() => handleSelect(s)} >
              {s.name}, {s.country}
            </li>
          ))}
        </ul>
      )}

      {/* Botón de geolocalización */}
      <button onClick={onUseLocation} className=" hover:bg-gray-300 active:bg-gray-500 cursor-pointer w-10 md:w-12 h-10 md:h-12 bg-gray-400 rounded-full flex items-center justify-center">
        <img className="w-8 h-8" src="/location.svg" alt="Get location" />
      </button>
    </div>
  );
}
