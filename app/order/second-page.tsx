import React from 'react'

const SecondPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto pt-6 lg:pt-0">
            <h2 className='font-bold text-2xl font-serif mx-4 text-blue-950'>2/10</h2>
            <h1 className='font-bold text-4xl font-serif pb-6 mx-4 text-blue-950'>Now let's talk about your style</h1>
            <form className="bg-white/50 shadow-md rounded-xl px-8 pt-6 pb-6 mx-4 mb-6">
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold" htmlFor="gender">
                        Describe the style that you like*
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        You can name aesthetics/eras such as "coquette" or "90s", name an inspirational fashion icon, or explain your vibe in any way!
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="I've been into balletcore but also 80s beach vibes" required onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        Describe the style that you dislike*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="I don't like the strawberry girl aesthetic" required onChange={handleChange} />
                </div>
                <p className="block text-blue-950 text-xs font-bold mt-5">* Required question</p>
            </form>
        </div>
    )
}

export default SecondPage