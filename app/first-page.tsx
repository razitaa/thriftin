import React from 'react'

const FirstPage = (props: { data: any; handleChange: any }) => {
    const {data,handleChange} = props

    return (
        <div className="max-w-xs md:max-w-lg mx-auto">
            <h1 className='font-bold text-4xl font-serif py-6 text-blue-950'>Tell us a little about yourself</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-5 grid grid-cols-1">
                    <p className="block text-blue-950 font-bold mb-2">Your preferred clothing style is...</p>
                    <div className=''>
                        <div>
                            <input type="radio" id="masculine" name="gender" value="masculine" />
                            <label htmlFor="masculine" className='text-sm'>Masculine</label>
                        </div>
                        <div>
                            <input type="radio" id="feminine" name="gender" value="feminine" />
                            <label htmlFor="feminine" className='text-sm'>Feminine</label>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <p className="block text-blue-950 font-bold mb-2">When it comes to clothing...</p>
                    <div>
                        <input type="radio" id="coverage-max" name="coverage" value="max" />
                        <label htmlFor="coverage-max" className='text-sm'>I prefer high coverage (long sleeves, high neckline, etc.) & loose fit</label>
                    </div>
                    <div>
                        <input type="radio" id="coverage-high" name="coverage" value="high" />
                        <label htmlFor="coverage-high" className='text-sm'>I'm okay with tight fit but I'd still like more coverage</label>
                    </div>
                    <div>
                        <input type="radio" id="coverage-med" name="coverage" value="med" />
                        <label htmlFor="coverage-med" className='text-sm'>Medium coverage is fine (short sleeve, slightly above knee, etc.)</label>
                    </div>
                    <div>
                        <input type="radio" id="coverage-low" name="coverage" value="low" />
                        <label htmlFor="coverage-low" className='text-sm'>Anything works for me!</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FirstPage

/*value={data.email} onChange={handleChange}*/