import { useState } from "react";
import useData from "./useData";
import axios from "axios";

export default function useWeatherData() {
    const [units, setUnits] = useState("metric");

    const apiKey =
        import.meta.env.VITE_WEATHER_API_KEY;

    // inicializo los siguientes estados con valores predefinidos
    const [lat, setLat] = useState(-34.9492);
    const [lon, setLon] = useState(-58.0472);

    // construyo y alamaceno en variables las url de consultas a la api
    const currentWeatherUrl =
        lat && lon && apiKey ?
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` :
        null;

    const forecastUrl =
        lat && lon && apiKey ?
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric` :
        null;

    // llamo al hook de búsqueda enviando la url para realizar las consultas y luego desestructuro el objeto
    const { loading: loadingCurrent, data: dataCurrent, error: errorCurrent } = useData(currentWeatherUrl);

    const { loading: loadingForecast, data: dataForecast, error: errorForecast } = useData(forecastUrl);


    //-------------------------------------------------------------------------------------


    // alternar entre °C y °F
    const toggleUnits = () => {
        setUnits(prev => (prev === "metric" ? "imperial" : "metric"));
    };

    // obteniendo ubicacion
    const getCurrentLocation = async() => {
        // funcion auxiliar para obtener IP
        const obtenerIp = async() => {
            // uso Token de IPinfo
            const IpApiKey =
                import.meta.env.VITE_IP_INFO_API_KEY;

            // intento conseguir la ip con la data de latitud y longitud
            try {
                const response = await axios.get(`https://ipinfo.io/json?token=${IpApiKey}`);
                const data = response.data
                    // si hubo éxito almaceno la info nocesaria
                if (data.loc) {
                    const [latitude, longitude] = data.loc.split(",") // desestructuro el array
                    setLat(parseFloat(latitude))
                    setLon(parseFloat(longitude))
                    alert(`⚠️ No se pudo obtener tu ubicación precisa. 
                    Se usó una ubicación aproximada por IP (ciudad: ${data.city}).`);
                } else {
                    alert("No se pudo obtener ubicación por IP.")
                }
            } catch (error) {
                console.error("Error al obtener ubicación por IP:", error)
                alert("No se pudo obtener la ubicación actual.")
            }
        };

        // inicio... primero intento pidiendo permiso al usuario
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    setLat(pos.coords.latitude);
                    setLon(pos.coords.longitude);
                },
                // si falla intento buscar por IP
                async(err) => {
                    console.error("Error al obtener la ubicación:", err);

                    await obtenerIp()
                }
            );
        } else {
            alert("Tu navegador no soporta la geolocalización. Intentáre otro método");
            await obtenerIp()
        }
    };



    // ----------------------------------------------------------------------

    // Buscando una ciudad y obtener su lat/lon
    const getCityCoordinates = async(cityName) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${apiKey}`
            );
            const data = response.data;
            if (data && data.length > 0) {
                setLat(data[0].lat);
                setLon(data[0].lon);
            } else {
                alert("Ciudad no encontrada en nuestra base de datos.");
            }
        } catch (error) {
            console.error("Error buscando ciudad:", error);
        }
    };



    // ------------------------------------------------------------------------------------





    return {
        dataCurrent,
        dataForecast,
        loadingCurrent,
        loadingForecast,
        errorCurrent,
        errorForecast,
        getCurrentLocation,
        getCityCoordinates,
        units,
        toggleUnits,
    };
}