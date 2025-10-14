
{/* la barra es un with que varia en base al valor de la humedad */}
export default function Humidity() {
    return (
        <div className='bg-[#1e213a] p-4 text-white  flex flex-col items-center pt-2 pb-3 px-5 gap-5'>
            <p>Humidity</p>
            <div className='flex items-center gap-1'>
                <p className='text-6xl font-bold'>58</p>
                <p className='text-4xl'>%</p>
            </div>
            <div className='flex flex-col w-[80%]'>
                <div className="flex justify-between">
                    <p>0</p>
                    <p>50</p>
                    <p>100</p>
                </div>
                <div className="bg-white h-2 rounded-2xl ">
                    <div className="bg-amber-300 h-2 w-[58%] px-1 rounded-2xl"></div>
                </div>
                <div className="text-end">
                    %
                </div>
                
            </div>
        </div>
    )
}