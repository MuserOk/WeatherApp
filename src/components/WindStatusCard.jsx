
{/*velocidad del viento... + la flecha rotará segun la direccion del viento (8 posibilidades: 0,45,90,135,180,225,270,315) 
    - tambien la conversion de la medida usada
    */}
export default function WindStatus() {
    return (
        <div className='bg-[#1e213a] p-4 text-white  flex flex-col items-center pt-2 pb-3 px-5 gap-5'>
            <p>Wind status</p>
            <div className='flex items-center gap-1'>
                <p className='text-6xl font-bold'>2.06</p>
                <p className='text-4xl'>ms</p>
            </div>
            <div className='flex gap-4 items-center'>
                <img className='w-6 h-6 rounded-full bg-gray-400 p-1 rotate-225' src="/navigation.svg" alt="image navegation" />
                <p>WSW</p>
            </div>
        </div>
    )
}
