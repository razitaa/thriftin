import React from 'react'

const FifthPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props
    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1 className='font-bold text-4xl font-serif py-6 text-blue-950'>Tell us about your daily life</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="inline-block w-full relative mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        How do you usually dress in your daily life?
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='gender' value={data.gender} onChange={handleChange}>
                        <option value="male">Formal</option>
                        <option value="female">Semi-formal</option>
                        <option value="female">Casual</option>
                    </select>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Where do you spend most of your time?
                    </label>
                    <select className="block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='gender' value={data.gender} onChange={handleChange}>
                        <option value="male">Indoor</option>
                        <option value="female">Outdoor</option>
                    </select>
                </div>
                <div className="mb-5">
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="gender">
                        Describe your daily activities
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Talk about your occupation, how active you are, the environment that you live in, the usual weather, anything!
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="I work in the fashion industry & like to go on walks" value={data.name} onChange={handleChange} />
                </div>
                <div>
                    <label className="block text-blue-950 font-bold mb-2" htmlFor="dob">
                        What's your main reason for getting clothes from here?
                    </label>
                    <p className="block text-blue-950 text-xs font-bold mb-2">
                        Is it for work? Going out? Vacation? Attending an event? Tell us about it.
                    </p>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 text-sm border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="name" type="text" placeholder="Mostly looking for going out clothes" value={data.name} onChange={handleChange} />
                </div>
                <div className="inline-block relative">
                    <p className="block text-blue-950 font-bold mb-2">Do you like to layer clothes in your daily life?</p>
                    <div>
                        <input type="radio" id="masculine" name="gender" value="masculine" />
                        <label htmlFor="masculine" className='text-sm'>Yes</label>
                    </div>
                    <div>
                        <input type="radio" id="feminine" name="gender" value="feminine" />
                        <label htmlFor="feminine" className='text-sm'>No</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FifthPage