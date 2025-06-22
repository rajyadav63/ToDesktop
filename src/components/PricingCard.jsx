import React from 'react'

const PricingCard = () => {
    return (
        <div>
            <div className='m-8 flex flex-col justify-center lg:flex-row gap-6'>
                {/* free card */}
                <div className='hover:bg-blue-50 border border-slate-300 py-9 px-8 rounded-2xl'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-semibold'>Free</h1>
                        <p className='max-w-[320px]'>For personal use or testing your app before deploying to customers.</p>
                        
                        <p className='uppercase'>Key Features</p>
                    </div>
                    <div className='mt-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Free for Perosnal Use</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Run App Locally</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-x"></i>
                                <p className='text-slate-700'>No Public Distribution</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-x"></i>
                                <p className='text-slate-700'>No Native Installers
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button className='text-primary border border-slate-400 rounded-lg px-28 py-2 mt-16 hover:border-primary'>Get Started</button>
                </div>
                {/* second card */}
                <div className='hover:bg-blue-50 border border-slate-300 py-9 px-8 rounded-2xl'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-semibold'>Essential</h1>
                        <p className='max-[400px]'>For simple desktop apps.</p>
                        <h1 className='mb-4'><span className='text-2xl font-semibold'>$100</span>/month</h1>
                        <p className='uppercase'>Key Features</p>
                    </div>
                    <div className='mt-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Windows, Mac & Linux</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Automatic Updates
                                </p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Native Installers
                                </p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Email/chat support
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button className='text-primary border border-slate-400 rounded-lg px-28 py-2 mt-5 hover:border-primary'>Get Started</button>
                </div>
                {/* 3rd card */}
                <div className='hover:bg-blue-50 border border-slate-300 py-9 px-8 rounded-2xl relative'>
                    <div className='absolute right-4 top-[-15px] border text-center w-fit px-5 py-1 rounded-xl bg-blue-300 text-primary'>Most Popular</div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl font-semibold'>Professional</h1>
                        <p className='max-[400px]'>For sophisticated desktop apps.</p>
                        <h1 className='mb-4'><span className='text-2xl font-semibold'>$240</span>/month</h1>
                        <p className='uppercase'>Everything in Essential Plus</p>
                    </div>
                    <div className='mt-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Branded Download Links</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Analytics</p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Access to Plugins
                                </p>
                            </li>
                            <li className='flex items-center gap-4'>
                                <i className="text-slate-500 fa-solid fa-check"></i>
                                <p className='text-slate-700'>Access to Restricted API
                                </p>
                            </li>
                        </ul>
                    </div>
                    <button className='bg-primary text-white border border-slate-400 rounded-lg px-28 py-2 mt-5 hover:border-primary hover:bg-blue-600'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default PricingCard
