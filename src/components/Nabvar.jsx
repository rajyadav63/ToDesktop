import React, { useState } from 'react'

const Nabvar = () => {
    const [isMenu, setIsMenu] = useState(false)

    return (
        <>
            <div className='flex justify-between items-center text-center bg-blue-100 p-4'>

                <a className='flex justify-center items-center text-center gap-2' href="/">
                    <img src="/assets/asset 0.png" alt="logo" />
                    <span className='text-1xl font-medium'> ToDesktop</span>
                </a>

                <div className='hidden md:flex'>
                    <ul className='flex gap-12 sm:gap-5 font-medium '>
                        <li className='hover:text-primary md:px-4 px-2'><a href="#">Pricing</a></li>
                        <li className='hover:text-primary md:px-4 px-2'><a href="https://www.todesktop.com/docs/introduction/getting-started" target='_blank'>Docs</a></li>
                        <li className='hover:text-primary md:px-4 px-2'><a href="https://www.todesktop.com/changelog" target='_blank'>Changelog</a></li>
                        <li className='hover:text-primary md:px-4'><a href="https://www.todesktop.com/blog" target='_blank'>Blog</a></li>
                        <li className='hover:text-primary md:px-4'><a href="#">Login</a></li>
                    </ul>

                </div>
                <div className='lg:flex hidden justify-center items-center text-center border-solid border-2 border-blue-900 px-3 py-2 rounded-md gap-5 hover:cursor-pointer'>
                    <img src="/assets/asset 1.svg" alt="" />
                    <a href="https://www.todesktop.com/electron" target='_blank'>
                        <button>Electron Developer</button>
                    </a>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
                <div className='md:hidden block' onClick={() => setIsMenu(!isMenu)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </div>

            {/* for small screen */}
            <div className={`fixed inset-0 bg-blue-100 z-40 transform transition-transform duration-800 ease-in-out md:hidden ${isMenu ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className='flex justify-between m-4 items-center'>
                    <a className='flex justify-left items-center text-center gap-2' href="/">
                        <img src="/assets/asset 0.png" alt="logo" />
                        <span className='text-1xl font-medium'> ToDesktop</span>
                    </a>
                    <div className='md:hidden block hover:cursor-pointer' onClick={() => setIsMenu(!isMenu)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center h-full mt-[-100px]'>

                    <ul className='flex flex-col gap-8 font-medium text-center text-xl'>
                        <li className='hover:text-primary transition-colors duration-200'>
                            <a href="#" onClick={() => setIsMenu(false)}>Pricing</a>
                        </li>
                        <li className='hover:text-primary transition-colors duration-200'>
                            <a href="#" onClick={() => setIsMenu(false)}>Docs</a>
                        </li>
                        <li className='hover:text-primary transition-colors duration-200'>
                            <a href="#" onClick={() => setIsMenu(false)}>Changelog</a>
                        </li>
                        <li className='hover:text-primary transition-colors duration-200'>
                            <a href="#" onClick={() => setIsMenu(false)}>Blog</a>
                        </li>
                        <li className='hover:text-primary transition-colors duration-200'>
                            <a href="#" onClick={() => setIsMenu(false)}>Login</a>
                        </li>
                    </ul>

                    <div className='flex justify-center items-center text-center border-solid border-2 border-blue-900 px-6 py-3 rounded-md gap-3 hover:cursor-pointer mt-8'>
                        <img src="/assets/asset 1.svg" />
                        <button onClick={() => setIsMenu(false)}>Electron Developer</button>
                        <i className="fa-solid fa-arrow-right"></i>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Nabvar
