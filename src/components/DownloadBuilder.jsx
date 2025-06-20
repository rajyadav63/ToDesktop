import React from 'react'

const DownloadBuilder = () => {
    return (
        <div className='bg-gray-900 border text-white border-gray-300 h-auto m-8 rounded-xl flex flex-col lg:flex-row '>
            <div className='m-8 lg:m-20'>
                <h3 className='text-1xl font-medium mb-4'>READY TO START BUILDING?</h3>
                <h1 className='text-5xl font-semibold mb-4 lg:w-[500px]'>Create your desktop app for free*</h1>
                <p className='mb-4'>ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.</p>
                <div className='bg-blue-600 w-fit px-5 py-3 rounded-lg flex gap-3 items-center cursor-pointer hover:bg-blue-700 mb-7'>
                    <i class="fa-solid fa-download"></i>
                    <p>Download ToDesktop Builder</p>
                </div>
                <p className='font-extralight mb-7 lg:mb-0'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
            </div>
            <div className='ml-9 lg:ml-0 overflow-hidden lg:mt-24'>
                <img className=' lg:w-full' src="/assets/asset 53.png" />
            </div>
        </div>
    )
}

export default DownloadBuilder
