import React from 'react'

const Step3 = () => {
    return (
        <div className='m-5'>
            <div className='flex flex-col lg:flex-row  border border-blue-200 rounded-lg h-screen lg:ml-[100px] lg:mr-[90px] lg:mt-9'>
                <div className='flex flex-col  lg:max-w-[700px] lg:m-[40px]'>
                    <h1 className='m-5 border border-yellow-600 w-fit px-4 py-1 rounded-lg bg-yellow-100 font-medium'>Step3</h1>
                    <h3 className='ml-5 mt-2 mr-4 mb-2 text-4xl font-semibold sm:text-3xl lg:text-6xl lg:mt-[50px]'>Bootstrap straight from your web app</h3>
                    <p className='ml-5 mr-5 lg:mt-[30px] lg:max-w-[550px]'>Copy and paste your web app url into ToDesktop. Customise your app design, app icon and window frame UI with no code.</p>
                    <div className='flex md:items-center gap-4 m-4 lg:mt-[25px]'>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Multiple windows</a>
                            <a href="#"><span>✔️</span>Menubar/tray menus</a>
                            <a href="#"><span>✔️</span>Offline support</a>
                        </div>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Customizable menu</a>
                            <a href="#"><span>✔️</span>Lunch on startup</a>
                            <a href="#"><span>✔️</span>Tabs (Mac only)</a>
                        </div>
                    </div>
                </div>
                <div className='mt-2 lg:mt-[50px] flex justify-center items-center'>
                    <img className='w-fit lg:h-[700px] md:h-[400px]' src="/assets/asset 66.svg" />
                </div>
            </div>
        </div>
    )
}

export default Step3
