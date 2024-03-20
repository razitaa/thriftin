import React from 'react'

const SeventhPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6 lg:pt-0">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>7/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Lihat inspirasi gayamu, yuk</h1>
            <form className="bg-white/50 shadow-md rounded-xl mx-4 px-8 pt-6 pb-8 mb-6">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        <i>Link</i> referensi:
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Kamu bisa taruh <i>board</i> Pinterest, <i>folder</i> Google Drive yang isinya foto-foto inspirasi <i>outfit</i>, dan lainnya
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Taruh link di sini..." value={data.name} onChange={handleChange} />
                </div>
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        <i>Link</i> sosial media:
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Kamu bisa taruh akun dengan foto <i>outfit</i> sehari-hari kamu di sosial media apapun supaya kita lebih paham preferensi kamu, tapi hanya kalau kamu merasa nyaman berbagi informasi ini ya!
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Taruh link di sini..." value={data.name} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default SeventhPage