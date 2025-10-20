

export default function WindStatus({ data, currentUnits }) {

    // verifcar si hay data
    if (!data || !data.wind) {
        return (
            <div className="bg-[#1e213a] p-4 text-white flex flex-col items-center pt-2 pb-3 px-5 gap-5">
                <p>Wind status</p>
                <p className="text-gray-400">Cargando...</p>
            </div>
        );
    }
    
    const speed =
        currentUnits === "metric"
            ? data.wind.speed
            : (data.wind.speed * 2.23694).toFixed(2);

    const deg = data.wind.deg;

    function getWindDirection(deg) {
        const directions = [
            "N", "NNE", "NE", "ENE",
            "E", "ESE", "SE", "SSE",
            "S", "SSW", "SW", "WSW",
            "W", "WNW", "NW", "NNW"
        ];

        // 360° / 16 = 22.5°
        const index = Math.floor((deg + 11.25) / 22.5) % 16;
        return directions[index];
    }
    
    const dirText = getWindDirection(deg);


    return (
        <div className='bg-[#1e213a] p-4 text-white  flex flex-col items-center pt-2 pb-3 px-5 gap-5'>
            <p>Wind status</p>
            <div className='flex items-center gap-1'>
                <p className='text-6xl font-bold'>{speed}</p>
                <p className='text-4xl'>{currentUnits === "metric" ? "m/s" : "mph"}</p>
            </div>
            <div className='flex gap-4 items-center'>
                <img className='w-6 h-6 rounded-full bg-gray-400 p-1' style={{ transform: `rotate(${deg}deg)` }} src="/navigation.svg" alt="wind direction" />
                <p>{dirText}</p>
            </div>
        </div>
    )
}
