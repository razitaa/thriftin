import React from 'react'

const FourthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>4/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Kita cari pakaian yang ukurannya pas, ya</h1>
            <form className="bg-white/50 shadow-md rounded-xl mx-4 px-8 pt-6 pb-6 mb-6">
                <div className="inline-block w-full relative mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Kamu biasanya pakai atasan ukuran...*
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='top-size' required value={data.gender} onChange={handleChange}>
                        <option value="male">XS</option>
                        <option value="female">S</option>
                        <option value="female">M</option>
                        <option value="female">L</option>
                        <option value="female">XL</option>
                        <option value="female">XXL</option>
                        <option value="female">3XL</option>
                        <option value="female">4XL</option>
                        <option value="female">5XL</option>
                        <option value="female">6XL</option>
                    </select>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Kamu biasanya pakai bawahan ukuran...*
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='bottom-size' required value={data.gender} onChange={handleChange}>
                        <option value="male">XS ({"<"}27)</option>
                        <option value="female">S (28-29)</option>
                        <option value="female">M (30-31)</option>
                        <option value="female">L (32-33)</option>
                        <option value="female">XL (34-36)</option>
                        <option value="female">XXL (38-40)</option>
                        <option value="female">3XL (42)</option>
                        <option value="female">4XL</option>
                        <option value="female">5XL</option>
                        <option value="female">6XL</option>
                    </select>
                </div>
                <div>
                    <p className="block text-blue-950 font-bold mb-5">Isi ukuran yang kamu tahu saja, tapi selengkap mungkin ya! </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Tinggi badan (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Lingkar dada (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Lingkar pinggang (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Lingkar pinggul (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Lingkar paha (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2 xs:mb-7 md:mb-2" htmlFor="gender">
                                Front rise (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Wajib diisi</p>
            </form>
        </div>
    )
}

export default FourthPage