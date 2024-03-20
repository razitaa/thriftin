import React from 'react'

const SixthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6 lg:pt-0">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>6/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Kita mau tahu apa yang kamu cari</h1>
            <form className="bg-white/50 shadow-md rounded-xl mx-4 px-8 pt-6 pb-6 mb-6">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Ada hal spesifik yang mau kamu cari?*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Kamu boleh cari jenis pakaian (misal kemeja atau <i>cargo pants</i>), bahan, motif, atau potongan tertentu (misal <i>low-rise</i> atau <i>turtleneck</i>)
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Mau jaket denim" required value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Ada hal spesifik yang gak mau kamu dapatkan?*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Jangan ada baju polkadot" required value={data.name} onChange={handleChange} />
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Wajib diisi</p>
            </form>
        </div>
    )
}

export default SixthPage