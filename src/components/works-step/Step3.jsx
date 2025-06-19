import React from 'react'

const Step3 = () => {
    return (
        <div className='m-5'>
            <div className='flex flex-col lg:flex-row  border border-blue-200 rounded-lg h-screen lg:ml-[100px] lg:mr-[90px] lg:mt-9'>
                <div className='flex flex-col  lg:max-w-[700px] lg:m-[40px]'>
                    <h1 className='m-5 border border-yellow-600 w-fit px-4 py-1 rounded-lg bg-yellow-100 font-medium'>Step3</h1>
                    <h3 className='ml-5 mt-2 mr-4 mb-2 text-4xl font-semibold sm:text-3xl lg:text-6xl lg:mt-[50px]'>Publish  🚀</h3>
                    <p className='ml-5 mr-5 lg:mt-[30px] lg:max-w-[550px]'>One-click will publish your desktop app to your customers and give you a download link to put on your website.</p>
                    <div className='flex md:items-center gap-4 mt-7 ml-5 mr-5 lg:mt-[30px]'>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Super-fast global CDN</a>
                            <a href="#"><span>✔️</span>Magic universal links</a>
                            <a href="#"><span>✔️</span>Manage version numbers</a>
                        </div>
                        <div className='w-60 flex flex-col gap-2 underline text-blue-600'>
                            <a href="#"><span>✔️</span>Download links on your domain</a>
                            <a href="#"><span>✔️</span>Download analytics</a>
                            <a href="#"><span>✔️</span>Native installers for all platforms</a>
                        </div>
                    </div>
                </div>
                <div className=' relative m-2 lg:mt-[50px] flex justify-center items-center'>
                    <img className='m-3 rounded-xl h-[350px] lg:h-[700px] md:h-[400px]' src="/assets/asset 57.svg" />
                    <div className=' absolute text-center font-extralight  h-[40px] w-[160px] rounded-xl m-5 bg-gray-400'>
                        <p>Install App</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step3
