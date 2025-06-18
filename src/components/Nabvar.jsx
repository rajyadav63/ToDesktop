import React, { useState } from 'react'

const Nabvar = () => {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <div className='flex justify-between items-center text-center bg-blue-100 p-4'>

            <a className='flex justify-center items-center text-center gap-2' href="/">
                <img src="/assets/asset 0.png" alt="logo" />
                <span className='text-1xl font-medium'> ToDesktop</span>
            </a>

            <div className='md:hidden block' onClick={() => setIsMenu(!isMenu)}>
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className='hidden md:flex'>
                <ul className='flex gap-12 sm:gap-5 font-medium '>
                    <li className='hover:text-primary md:px-4 px-2'><a href="#">Pricing</a></li>
                    <li className='hover:text-primary md:px-4 px-2'><a href="#">Docs</a></li>
                    <li className='hover:text-primary md:px-4 px-2'><a href="#">Changelog</a></li>
                    <li className='hover:text-primary md:px-4'><a href="#">Blog</a></li>
                    <li className='hover:text-primary md:px-4'><a href="#">Login</a></li>
                </ul>

            </div>
            <div className='lg:flex hidden justify-center items-center text-center border-solid border-2 border-blue-900 px-3 py-2 rounded-md gap-5 hover:cursor-pointer'>
                <img src="/assets/asset 1.svg" alt="" />
                <button>Electron Developer</button>
                <i className="fa-solid fa-arrow-right"></i>
            </div>

        </div>
    )
}

export default Nabvar
