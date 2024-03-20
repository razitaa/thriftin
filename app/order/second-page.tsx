import React from 'react'

const SecondPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6 lg:pt-0">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>2/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Ceritain tentang gayamu, dong</h1>
            <form className="bg-white/50 shadow-md rounded-xl px-8 pt-6 pb-6 mx-4 mb-6">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold" htmlFor="gender">
                        Gaya yang kamu suka itu...*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Kamu boleh sebut <i>aesthetic</i> atau era seperti "coquette" atau "90s", nama orang yang menginspirasi gaya berpakaian kamu, atau jelasin <i>vibe</i> kamu dengan cara apapun!
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Suka balletcore & vibes 80-an" required onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Gaya yang kamu kurang suka itu...*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Kurang suka random aesthetic" required onChange={handleChange} />
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Wajib diisi</p>
            </form>
        </div>
    )
}

export default SecondPage