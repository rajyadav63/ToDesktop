import React from 'react'

const Step2 = () => {
    return (
        <div className='m-5'>
            <div className='flex flex-col lg:flex-row  border border-blue-200 rounded-lg h-screen lg:ml-[100px] lg:mr-[90px] lg:mt-9'>
                <div className='flex flex-col  lg:max-w-[700px] lg:m-[40px]'>
                    <h1 className='m-5 border border-yellow-600 w-fit px-4 py-1 rounded-lg bg-yellow-100 font-medium'>Step2</h1>
                    <h3 className='ml-5 mt-2 mr-4 mb-2 text-4xl font-semibold sm:text-3xl lg:text-6xl lg:mt-[50px]'>Add desktop code to customise your web app</h3>
                    <p className='ml-5 mr-5 lg:mt-[30px] lg:max-w-[550px]'>No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality.</p>
                    <div className='flex md:items-center gap-4 m-4 lg:mt-[25px]'>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Native notifications</a>
                            <a href="#"><span>✔️</span>Application menu</a>
                            <a href="#"><span>✔️</span>Dock/Icon</a>
                            <a href="#"><span>✔️</span>File system access</a>
                        </div>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Global keyboard shotcuts</a>
                            <a href="#"><span>✔️</span>Context menu</a>
                            <a href="#"><span>✔️</span>Isolated browser views</a>
                            <a href="#"><span>✔️</span>...plus more APIs in our docs</a>
                        </div>
                    </div>
                </div>
                <div className='relative mt-2 md:mt-[35px] lg:mt-[50px] lg:mr-[100px] flex flex-col justify-center items-center'>
                    <div className='relative lg:mt-[-80px]'>
                        <img className='w-[400px] md:w-[600px] lg:h-[250px] lg:w-[1200px]' src="/assets/asset 42.png" />
                    </div>
                    <div className='flex absolute top-36 md:top-56 lg:top-96 left-20 md:left-40 lg:left-9  gap-2 md:gap-4'>
                        <img className='h-[70px] md:h-[90px]' src="/assets/asset 32.png" />
                        <img className='h-[70px] md:h-[90px]' src="/assets/asset 34.png" />
                        <img className='h-[70px] md:h-[90px]' src="/assets/asset 35.png" />
                        <img className='h-[70px] md:h-[90px]' src="/assets/asset33.svg" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Step2
