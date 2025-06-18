import React from 'react'

const Hero = () => {
    return (
        <div className='h-screen px-5 flex flex-col justify-center items-start sm:items-center'>
            <div className='py-1 w-32 bg-yellow-100 flex justify-center items-center gap-2 text-center rounded-md shadow-md mb-8 hover:cursor-pointer hover:translate-x-1  transition-all duration-1000 hover:border-yellow-800'>
                <p className='bg-yellow-400 h-2 w-2 rounded-full'></p>
                <p>v0.28.0</p>
                <i className="fa-solid fa-arrow-right text-yellow-500 hover:text-yellow-700"></i>
            </div>
            <div className='hidden sm:flex gap-5 items-center'>
                <div className='flex gap-2 items-center'>
                    <i className="fa-solid fa-file-code"></i>
                    <p>Code optinol</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <i className="fa-solid fa-hand"></i>
                    <p>Drag and drop builder</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <i className="fa-solid fa-window-restore"></i>
                    <p>Windows, Mac, Linux</p>
                </div>
            </div>
            <div className='mb-5 sm:max-w-[900px] sm:text-center'>
                <h1 className='text-5xl md:text-7xl sm:text-6xl font-semibold mt-2 mb-6 sm:mb-[45px] sm:mt-6 '>Web app to dedktop app in minutes</h1>
                <p className='sm:max-w-[790px]  text-2xl font-normal  mt-4 sm:mt-9 mb-4 sm:text-center sm:ml-9 '>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
            </div>
            <div className='flex justify-center gap-4 flex-col md:flex-row w-full mb-[50px]'>
                <a className='bg-blue-600 px-8 py-4 text-white text-center font-semibold rounded-md' href="#">
                    <p>Download now</p>
                </a>
                <a className='border-2 border-solid mt-1 sm:mt-0 px-8 py-4 text-center font-normal rounded-md' href="#">
                    <p>Read docs</p>
                </a>

            </div>
        </div>
    )
}

export default Hero
