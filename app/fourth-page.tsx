import React from 'react'

const FourthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1 className='font-bold text-4xl font-serif py-6 text-blue-950'>Let's make sure the clothes fit you well</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="inline-block w-full relative mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        What size tops do you usually wear?
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='gender' value={data.gender} onChange={handleChange}>
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
                        What size bottoms do you usually wear?
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='gender' value={data.gender} onChange={handleChange}>
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
                    <p className="block text-blue-950 font-bold mb-5">Fill all the measurements that you know of: </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Height (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Bust (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Waist (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Hips (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Thigh (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                        <div>
                        <label className="block text-blue-950 text-sm font-bold mb-2" htmlFor="gender">
                                Rise (cm)
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm w-full text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-2" name="name" type="number" value={data.name} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FourthPage