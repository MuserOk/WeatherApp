{/* El valor varia de acuerdo a la unidad de medida */}
export default function AirPressure() {
    return (
        <div className='bg-[#1e213a] p-4 text-white  flex flex-col items-center pt-2 pb-8 px-5 gap-5'>
            <p>AirPressure</p>
            <div className='flex items-center gap-1'>
                <p className='text-6xl font-bold'>1011</p>
                <p className='text-4xl'>mb</p>
            </div>
        </div>
    )
}