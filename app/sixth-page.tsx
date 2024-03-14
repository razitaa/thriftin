import React from 'react'

const SixthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1 className='font-bold text-4xl font-serif py-6 text-blue-950'>We'd like to know what exactly are you looking for</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Is there anything you're specifically looking for?
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        It can be types of clothing (like shirts or cargo pants), materials, patterns, or cuts (like low-rise or scoop neckline).
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="I'd love a denim jacket & anything mid-rise" value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Is there anything you specifically DON'T want to get?
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="No polkadots please" value={data.name} onChange={handleChange} />
                </div>
            </form>
        </div>
    )
}

export default SixthPage