import React from 'react'

const FifthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>5/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Ceritain kehidupan sehari-harimu, dong</h1>
            <form className="bg-white/50 shadow-md rounded-xl mx-4 px-8 pt-6 pb-6 mb-6">
                <div className="inline-block w-full relative mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Kamu lebih sering berpakaian...*
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='dresscode' required value={data.gender} onChange={handleChange}>
                        <option value="male">Formal</option>
                        <option value="female">Semi-formal</option>
                        <option value="female">Kasual</option>
                    </select>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Kamu lebih sering beraktivitas di...*
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='daily-location' required value={data.gender} onChange={handleChange}>
                        <option value="male">Dalam ruangan</option>
                        <option value="female">Luar ruangan</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Aktivitas sehari-hari kamu adalah...*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Kamu bisa cerita tentang pekerjaan, tingkat keaktifanmu, lingkunganmu dan cuacanya, apa aja boleh!
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Kerja di bidang fashion, suka jalan kaki" required value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Alasan utama kamu membeli pakaian di sini adalah...*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Untuk kerja? Jalan-jalan akhir pekan? Pergi liburan? Hadir di acara tertentu? Kita carikan yang sesuai.
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Cari baju jalan-jalan/ke cafe" required value={data.name} onChange={handleChange} />
                </div>
                <div className="inline-block relative">
                    <p className="block text-blue-950 font-bold mb-2">Apa kamu suka pakai baju berlapis?*</p>
                    <div className='grid grid-cols-2 gap-x-2'>
                        <div>
                            <input type="radio" id="masculine" name="layer" value="true" required/>
                            <label htmlFor="masculine" className='text-sm'>Ya</label>
                        </div>
                        <div>
                            <input type="radio" id="feminine" name="layer" value="false" />
                            <label htmlFor="feminine" className='text-sm'>Tidak</label>
                        </div>
                    </div>
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Wajib diisi</p>
            </form>
        </div>
    )
}

export default FifthPage