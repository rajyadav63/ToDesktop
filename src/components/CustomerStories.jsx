import React from 'react'

function CustomerStories() {
    return (
        <div className='m-8 flex flex-col lg:flex-row gap-5'>
            <div className='hover:bg-blue-50 border border-gray-300 h-[350px] rounded-2xl px-4 ml-3 mr-3' flex>
                <div className='flex items-center gap-2'>
                    <img src="assets/asset 22.png" />
                    <h1 className='font-medium'>Native APIs</h1>
                </div>
                <p className='w-full'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience. ”</p>
                <div className='flex mt-5 gap-4 items-center'>
                    <img className='rounded-full' src="assets/asset 47.png" />
                    <img className='h-[50px] rounded-full ml-[-40px]' src="assets/asset 48.jpeg" />
                    <div>
                        <h1>Rick Pastoor</h1>
                        <p>Rise</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-blue-50 border border-gray-300 h-[350px] rounded-2xl px-4 ml-3 mr-3' flex>
                <div className='flex items-center gap-2'>
                    <img src="assets/asset 22.png" />
                    <h1 className='font-semibold text-1xl'>Cleaner, less cluttered UI
                    </h1>
                </div>
                <p className='w-full'>Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop. </p>
                <div className='flex mt-5 gap-4 items-center'>
                    <img className='rounded-full' src="assets/asset 49.png" />
                    <img className='h-[45px] rounded-full ml-[-40px]' src="assets/asset 50.jpeg" />
                    <div>
                        <h1>Max Musing</h1>
                        <p>Basedash</p>
                    </div>
                </div>
            </div>
            <div className='hover:bg-blue-50 border border-gray-300 h-[350px]  rounded-2xl px-2  ml-3 mr-3' flex>
                <div className='flex items-center gap-2'>
                    <img src="assets/asset 22.png" />
                    <h1 className='font-semibold'>Code optional</h1>
                </div>
                <p className='w-full'>“It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries. ”</p>
                <div className='flex mt-5 gap-4 items-center'>
                    <img className='rounded-full' src="assets/asset 51.png" />
                    <img className='h-[50px] rounded-full ml-[-40px]' src="assets/asset 52.jpeg" />
                    <div>
                        <h1>Pouya</h1>
                        <p>LifeAt</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerStories
