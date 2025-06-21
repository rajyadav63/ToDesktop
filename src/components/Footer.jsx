import React from 'react'

const Footer = () => {
    return (
        <div className='border border-slate-300 h-auto w-[90vw] py-12 m-6 rounded-xl flex flex-col lg:flex-row justify-center lg:justify-around items-center'>
            <div className='flex items-center text-center gap-1 mt-5 lg:mt-0'>
                <img src="assets/asset 0.png" />
                <span className='font-medium'>ToDesktop</span>
            </div>
            <div className='mg-12 lg:mb-0 flex justify-center items-center text-center'>
                <a href="#">Documentaton</a>
            </div>
            <div className='flex justify-between items-center mt-5 lg:mt-0  px-5  gap-5'>
                <img src="/assets/asset 71.svg" alt="Twitter" />
                <img src="/assets/asset 72.svg" alt="GitHub" />
            </div>

        </div>
    )
}

export default Footer
