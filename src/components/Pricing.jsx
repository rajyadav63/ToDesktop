import React from 'react'

const Pricing = () => {
    return (
        <div className='m-8 flex flex-col gap-5 lg:justify-center lg:items-center w-full '>
            <div className='mb-9 border border-gray-300 flex  gap-3 py-3 rounded-xl justify-around md:items-center md:justify-center'>
                <p className='hover:bg-slate-300 px-3 py-2 cursor-pointer rounded-xl'>Monthly</p>
                <p className='hover:bg-slate-300 px-1 py-2 cursor-pointer rounded-xl'>Yearly <span className='bg-blue-300 px-3 py-1 rounded-2xl'>-20%</span></p>
            </div>
            <div className='flex flex-col justify-center lg:flex-row gap-4   m-3'>
                <div className=' lg:min-w-[400px] flex flex-col lg:flex-row gap-8'>
                    <div className='border border-slate-400 min-h-[500px] rounded-2xl p-7'>
                        <h1 className='text-4xl font-semibold mb-4'>Free</h1>
                        <p className='lg:max-w-[320px] font-light mb-4'>For personal use or testing your app before deploying to customers.</p>
                        <h1 className='text-slate-600 mb-3'>KEY FEATURES</h1>
                        <div className='flex flex-col gap-2 font-light'>
                            <p><span className='px-2'>✔️</span>Freen for Personal Use </p>
                            <p><span className='px-2'>✔️</span>Run App Locally</p>
                            <p><span className='px-2'>✖️</span>No Public Distribution</p>
                            <p><span className='px-2'>✖️</span>No Native Installers </p>
                        </div>
                        <div className='flex justify-center items-center text-center border-2 border-slate-400 hover:border-blue-600 cursor-pointer  mt-9 w-full px-5 py-3 rounded-lg text-blue-800 font-medium'>
                            Get Started
                        </div>
                    </div>
                </div>

                <div className='lg:min-w-[450px] flex flex-col lg:flex-row gap-8'>
                    <div className='lg:min-w-[400px] border border-slate-400 min-h-[500px] rounded-2xl p-9'>
                        <h1 className='text-4xl font-semibold mb-4'>Essential</h1>
                        <p className='font-light mb-4'>For simple desktop apps.</p>
                        <h1 className='mb-4'><span className='text-4xl font-semibold'>$100</span>/month</h1>
                        <h1 className='text-slate-600 mb-3'>KEY FEATURES</h1>
                        <div className='flex flex-col gap-2 font-light'>
                            <p><span className='px-2'>✔️</span>Windows, Mac & Linux </p>
                            <p><span className='px-2'>✔️</span>Automatic Updates</p>
                            <p><span className='px-2'>✔️</span>Native Installers</p>
                            <p><span className='px-2'>✔️</span>No Native Installers </p>
                        </div>
                        <div className='flex justify-center items-center text-center border-2 border-slate-400 hover:border-blue-600 cursor-pointer  mt-9 w-full px-5 py-3 rounded-lg text-blue-800 font-medium'>
                            Get Started
                        </div>
                    </div>
                </div>

                <div className='lg:min-w-[450px] flex flex-col lg:flex-row gap-8'>
                    <div className='lg:min-w-[400px] border border-slate-400 min-h-[500px] rounded-2xl p-9'>
                        <h1 className='text-4xl font-semibold mb-4'>Professional</h1>
                        <p className='font-light mb-4'>For sophisticated desktop apps.</p>
                        <h1 className='mb-4'><span className='text-4xl font-semibold'>$240</span>/month</h1>
                        <h1 className='text-slate-600 mb-3'>Everything in Essential Plus</h1>
                        <div className='flex flex-col gap-2 font-light'>
                            <p><span className='px-2'>✔️</span>Branded Download Links</p>
                            <p><span className='px-2'>✔️</span>Analytics</p>
                            <p><span className='px-2'>✔️</span>Access to Plugins</p>
                            <p><span className='px-2'>✔️</span>Access to Restricted API</p>
                        </div>
                        <div className='flex justify-center items-center text-center border-2 border-slate-400 hover:border-blue-600 cursor-pointer  mt-9 w-full px-5 py-3 rounded-lg bg-blue-600 text-white font-medium'>
                            Get Started
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
