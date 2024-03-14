import React from 'react'

const SixthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6 lg:pt-0">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>6/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>We'd like to know what exactly are you looking for</h1>
            <form className="bg-white/50 shadow-md rounded-xl mx-4 px-8 pt-6 pb-6 mb-6">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Is there anything you're specifically looking for?*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        It can be types of clothing (like shirts or cargo pants), materials, patterns, or cuts (like low-rise or scoop neckline).
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="I'd love a denim jacket & anything mid-rise" required value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Is there anything you specifically DON'T want?*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="No polkadots please" required value={data.name} onChange={handleChange} />
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Required question</p>
            </form>
        </div>
    )
}

export default SixthPage